import passportLocal from 'passport-local';
import BaseContext from '../BaseContext';
import {IContextContainer} from '../container';
import { Request } from 'express';

export default class SignUpStrategy extends BaseContext {
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
        console.log('zahoditstrategia');
       // тут код который у меня в контролере?   
       
       const { UserService } = this.di;
       const {confirm} = req.body; 
     

      if(password!=confirm){
        return done( 
           {confirm:'Passwords are not equal'},null);
    }
       const u =  await  UserService.findUserByEmail(email)
       console.log('userdannue',u);
       if (u) {    
          return done({email:'That e-mail already taken!'},null); 
     //    return done('That e-mail already taken!',null); 
       }

       const userData = {
        email: email && email.trim().toLowerCase(),
        password: password && password.trim(),
        
    };


    UserService.createUser(userData).then((users: any)=> {
        //return done(users);
        return done(null,{
            identity: users.userId,
        })        
    }).catch((error: any) => {
        console.log('error',error);
        let message = {};
        if (error.hasOwnProperty('errors') && error.errors.length > 0) {
            message = error.errors[0].message;    //Набор ключей значений
            console.log('masiv',message)                                   
           if(message='Email address must be between 6 and 255 characters in length')
            {                  
              message={email:message}
              
            }
          if(message='Password must be between 6 and 255 characters in length')
            {
                message={password:message}
            }   
            
         }
        console.log('m',message)
        return done(               
          //  error: true, 
           // message: message 
           message 
        ,null); 
    });

    }
}



/*
        const {UserModel } = this.di;

        const u = await UserModel.findOne({email: email});
        if (u) {
            return done({ userEmail: 'That e-mail already taken!' });
        }
*/

    

