import {Model, DataTypes,BuildOptions} from 'sequelize';

import  {IContextContainer} from '../container';  //?

import { ROLE } from '../../commons';


export  interface IUser extends Model {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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
            allowNull: false,
            validate: {
                len: {
                args: [6, 255],
                msg: 'Name must be between 6 and 255 characters in length',
                },
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
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
        // token: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     unique: true,
        // },
        role: {
            type: DataTypes.STRING,
            defaultValue: ROLE.GUEST,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });


    User.initModels = () => {
        User.hasMany(ctx.PropertyModel, { as: 'properties', foreignKey: 'userId', onDelete: 'cascade' });
        User.hasMany(ctx.ReviewModel, {as: 'reviews', foreignKey: 'userId', onDelete: 'CASCADE'});
    }    
    
    return User;
};


