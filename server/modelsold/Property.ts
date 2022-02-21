import { ROLE } from '../../commons';
import { Model, DataTypes, BuildOptions } from 'sequelize';

import db from '../db';
import Review from './Review';
//import User from '../models/User';


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
}

const Property = <PropertyType>db.define('properties', {
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

// Property.hasMany(Review);








export default Property;

