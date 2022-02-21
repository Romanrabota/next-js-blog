import { ROLE } from '../../commons';
import { Model, DataTypes, BuildOptions, BelongsTo } from 'sequelize';

import db from '../db';
import Property from './Property';
import User from './User';

interface IReview extends Model {
    reviewId: number;
    userId: number;
    text:string;
    // token: string;
    mark: number;
    createdAt: Date;
    updatedAt: Date;
}

export type ReviewType = typeof Model & {
    new (values?: object, options?: BuildOptions): IReview;
}

const Review = <ReviewType>db.define('reviews', {
        reviewId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
     // autoIncrement: true,
        type: DataTypes.INTEGER,
    },
   
   
      feedback: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
            args: [6, 400],
            msg: 'Name must be between 6 and 255 characters in length',
            },
        },
    },
      
    rate: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
   
    propertyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },

    
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },    
    // token: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     unique: true,
    // },
    
});

export default Review;