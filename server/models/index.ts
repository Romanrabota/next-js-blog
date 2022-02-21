import { asFunction } from 'awilix';

import UserModel, { UserType } from './UserModel';
import PropertyModel, { PropertyType } from './PropertyModel';
import ReviewModel, { ReviewType } from './ReviewModel';

import { IContextContainer } from '../container';

export interface IModelContainer {
    initModels: () => void;
    UserModel: UserType;
    PropertyModel: PropertyType;
    ReviewModel: ReviewType;
}

const initModels = (ctx: IContextContainer) => {
    const { UserModel, PropertyModel, ReviewModel } = ctx;
    return () => {
        UserModel.initModels();
        PropertyModel.initModels();
        ReviewModel.initModels();
    }
}

export default {
    initModels: asFunction(initModels).singleton(),
    UserModel: asFunction(UserModel).singleton(),
    PropertyModel: asFunction(PropertyModel).singleton(),
    ReviewModel: asFunction(ReviewModel).singleton(),
}