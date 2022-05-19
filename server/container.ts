import * as awilix from 'awilix';
import { Sequelize } from 'sequelize';
import modelContainer, { IModelContainer } from './models';
import serviceContainer, { IServiceContainer} from './services';
import coreConfig from '../config';
import mysql2 from "mysql2";
import SignUpStrategy from './passports/SignUpStrategy';
import passport, { PassportStatic } from 'passport';
import LoginStrategy from './passports/LoginStrategy';

/*export interface IContextContainer {
....
passport: PassportStatic;
  signUpStrategy: SignUpStrategy;
} */



/*export const passportFunc = (ctx: IContextContainer)  => {

    passport.use('local-signup', ctx.signUpStrategy.strategy);

    return passport;
};*/


/*container.register({
    .....
    passport: awilix.asFunction(passportFunc).singleton(),
    signUpStrategy: awilix.asClass(SignUpStrategy).singleton(),
    
    }*/


// то что было


export interface IContextContainer extends IModelContainer ,IServiceContainer{
    config: any;
    db: Sequelize;
    passport: PassportStatic;
    signUpStrategy: SignUpStrategy;
    loginStrategy:LoginStrategy;

}

const container = awilix.createContainer<IContextContainer>({
    injectionMode: awilix.InjectionMode.PROXY,
});



export const passportFunc = (ctx: IContextContainer)  => {

    passport.use('local-signup', ctx.signUpStrategy.strategy);
    passport.use('local-login', ctx.loginStrategy.strategy);

    return passport;
};





const  createDB  = (ctx: IContextContainer)=>{
 return new Sequelize( 
    ctx.config.db.database,
    ctx.config.db.username,
    ctx.config.db.password,
    {
        dialect: ctx.config.db.dialect,
        dialectModule: mysql2,
    }
 );
}


container.register({
    ...modelContainer,
    ...serviceContainer,
    config: awilix.asValue(coreConfig),
    db: awilix.asFunction(createDB).singleton(),
    passport: awilix.asFunction(passportFunc).singleton(),
    signUpStrategy: awilix.asClass(SignUpStrategy).singleton(),
    loginStrategy: awilix.asClass(LoginStrategy).singleton(),

})


export default container;