import * as  awilix from 'awilix';
import UserService from './UserService';
import ReviewService from './ReviewService'
import PropertyService from './PropertyService'


export interface IServiceContainer {
    UserService: UserService;
    ReviewService: ReviewService;
    PropertyService:  PropertyService;

}
export default {
    UserService: awilix.asClass(UserService).singleton(),
    ReviewService: awilix.asClass(ReviewService).singleton(),
    PropertyService: awilix.asClass(PropertyService).singleton(),
    
}