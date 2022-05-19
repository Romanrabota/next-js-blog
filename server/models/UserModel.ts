import {Model, DataTypes,BuildOptions} from 'sequelize';

import  {IContextContainer} from '../container';  //?

import { ROLE } from '../../commons';
import bcrypt from "bcrypt";


export  interface IUser extends Model {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token:string;
    role: string;
    // token: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
}


export type UserType = typeof Model & {
    new (values?: object, options?: BuildOptions): IUser;
    initModels(): void;
}

export default (ctx: IContextContainer) => { 

    const User = <UserType>ctx.db.define('users', {

            userId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            defaultValue: 'userofsite',
            allowNull: true,
            validate: {
                len: {
                args: [6, 255],
                msg: 'Name must be between 6 and 255 characters in length',
                },
            },
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue: 'userofsite',
            allowNull: true,
            validate: {
                len: {
                    args: [6, 255],
                    msg: 'Name must be between 6 and 255 characters in length',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [6, 255],
                    msg: 'Email address must be between 6 and 255 characters in length',
                },
                isEmail: {
                    msg: 'Email address must be valid',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 255],
                    msg: 'Password must be between 6 and 255 characters in length',
                }
            }
        },
         token: {
             type: DataTypes.STRING,
             allowNull: true,
             unique: true,
         },
        role: {
            allowNull: true,
            type: DataTypes.STRING,
            defaultValue: ROLE.GUEST,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            allowNull: true,
            type: DataTypes.BIGINT,
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.BIGINT,
    
        },
    },{timestamps: false});

    User.beforeSave(async User => {
        try {
            if (User.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(User.password, salt);
                User.password = hash;
            }
        } catch (err) {
            throw new Error(err);
        }
    });


    User.initModels = () => {
        User.hasMany(ctx.PropertyModel, { as: 'properties', foreignKey: 'userId', onDelete: 'cascade' });
        User.hasMany(ctx.ReviewModel, {as: 'reviews', foreignKey: 'userId', onDelete: 'CASCADE'});
    }    
    
    return User;
};


