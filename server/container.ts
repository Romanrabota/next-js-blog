import * as awilix from 'awilix';
import { Sequelize } from 'sequelize';
import modelContainer, { IModelContainer } from './models';
import serviceContainer, { IServiceContainer} from './services';
import coreConfig from '../config';
import mysql2 from "mysql2";


export interface IContextContainer extends IModelContainer ,IServiceContainer{
    config: any;
    db: Sequelize    
}

const container = awilix.createContainer<IContextContainer>({
    injectionMode: awilix.InjectionMode.PROXY,
});


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

})


export default container;