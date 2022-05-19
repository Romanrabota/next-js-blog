import { route, GET } from 'awilix-express'
import { NextFunction, Request, Response } from "express";
import BaseContext from '../BaseContext';
import httpStatus from '../../http-status';


    @route('/api/reviews')
    export default class ReviewController extends BaseContext {    
    @GET()
    @route('/all') //Get all reviews
    getAllReviews(req: Request, res: Response) {
      const { ReviewService } = this.di;
      return ReviewService.getAllReviews().then(reviews=> {
      return res.answer(reviews);
      })
      .catch(err => {
       res.answer(null, 'Could not get review list', httpStatus.BAD_REQUEST);
      });
      };


    @GET()
    @route('/edit/:id') //Get all users
    editUser(req: Request, res: Response) {
    const { UserService,ReviewService } = this.di;

    const id = req.params.id;

    return ReviewService.getReviewById(id).then(review=> {
      return res.answer(review);
    })
    .catch(err => {
      res.answer(null, 'Could not get review by id', httpStatus.BAD_REQUEST);
  });
    };



      
    /*  return UserService.getUsersReviewForAdmin(id)
        .then(review=> {
          return res.json(review);
        });*/


    @GET()
    @route('/user/:id') //Get all users
    userReview(req: Request, res: Response) {
      const { ReviewService } = this.di;
      const id = req.params.id;   
      ReviewService.getReviewByUserId(id).then(reviews=> {
      return res.answer(reviews);
      })
      .catch(err => {
        res.answer(null, 'Could not get reviews for user by user id', httpStatus.BAD_REQUEST);
    });
   }

    @GET()
    @route('/property/:id') // get reviews by property id
    propertyReview(req: Request, res: Response) {     
      const { ReviewService } = this.di;
      const id = req.params.id;
      ReviewService.getReviewByPropertyId(id).then(reviews=> {
      return res.answer(reviews);
      })
      .catch(err => {
        res.answer(null, 'Could not get reviews by property id', httpStatus.BAD_REQUEST);
    });
    }
}





