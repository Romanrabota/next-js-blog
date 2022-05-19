import passportLocal from 'passport-local';
import BaseContext from '../BaseContext';
import {IContextContainer} from '../container';
import { Request } from 'express';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import config from '../../config'


export default class LoginStrategy extends BaseContext {
    private strategyUser: passportLocal.Strategy;

    get strategy() {
        return this.strategyUser;
    }

    constructor(opts: IContextContainer) {
        super(opts);

        console.log('jwt: initialization Local-SignUp strategy');
        this.verifyRequestUser = this.verifyRequestUser.bind(this);

        this.strategyUser = new passportLocal.Strategy({
            passwordField: 'password',
            passReqToCallback: true,
            usernameField: 'email',
            session: false,

        }, this.verifyRequestUser);
    }

    public async verifyRequestUser(req: Request, email: string, password: string, done: any) {

       
            const { UserService } = this.di;
           
            const user =  await UserService.findUserByEmail(email)
       
        if (!user) {
            return done('You are not registered on the site',null);
        }
        if (!user.password) {
            return done('You are not approved on site yet',null);
        }        
        const bcryptRes = await bcrypt.compare(password, user.password);
        if (!bcryptRes) {
            return done('Incorrect password or email',null);
        }

        const payload = {
            sub: user.userId
        };
        const token = jwt.sign(payload, config.jwtSecret);
        user.token = token;
        user.save();
        
       // надо?  const identity = await user.initSession(req, EventService, CompanyService);
        return done(null,{ payload, token });
    }

    }