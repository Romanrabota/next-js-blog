import {Model, DataTypes,BuildOptions} from 'sequelize';

import  {IContextContainer} from '../container';  //?


interface IProperty extends Model {
    propertyId: number;
    propertyName: string;
    userId: number;
    price:number;
    // token: string;
    properties: string;
    reviewsNumber : number;
    reviewId: number; 
    createdAt: Date;
    updatedAt: Date;
}

export type PropertyType = typeof Model & {
    new (values?: object, options?: BuildOptions): IProperty;
    initModels(): void;
}


export default (ctx: IContextContainer)=>{ 

    const Property = <PropertyType>ctx.db.define('properties', {
        propertyId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        propertyName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                args: [6, 255],
                msg: 'Name must be between 6 and 255 characters in length',
                },
            },
        },
        userId: {
            allowNull: false,
        // autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        
        price: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        
        description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
            args: [6, 255],
            msg: 'Name must be between 6 and 255 characters in length',
            },
        },
        },
        
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },

        createdAt: {
            allowNull: false,
            type: DataTypes.BIGINT,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.BIGINT,
        },    
        // token: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     unique: true,
        // },
        
    });

    Property.initModels = () => {
        Property.belongsTo(ctx.UserModel, { foreignKey: 'userId', as: 'user'});
        Property.hasMany(ctx.ReviewModel, {foreignKey: 'propertyId', as: 'reviews'});
    }    
    
    return Property;

}