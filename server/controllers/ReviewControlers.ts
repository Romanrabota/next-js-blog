import { route, GET } from 'awilix-express'
import { NextFunction, Request, Response } from "express";
import BaseContext from '../BaseContext';


@route('/api/reviews')
export default class ReviewController extends BaseContext {    
    @GET()
    @route('/all') //Get all reviews
    getAllReviews(req: Request, res: Response) {
      const { ReviewService } = this.di;
      return ReviewService.getAllReviews().then(reviews=> {
        return res.json(reviews);
      });
    }


    @GET()
    @route('/edit/:id') //Get all users
    editUser(req: Request, res: Response) {

     const { UserService,ReviewService } = this.di;

     const id = req.params.id;

    return ReviewService.getReviewById(id).then(review=> {
      return res.json(review);
    });
      
    /*  return UserService.getUsersReviewForAdmin(id)
        .then(review=> {
          return res.json(review);
        });*/
}

    @GET()
    @route('/user/:id') //Get all users
    userReview(req: Request, res: Response) {

      const { ReviewService } = this.di;
      const id = req.params.id;
    
    
      ReviewService.getReviewByUserId(id).then(reviews=> {
      return res.json(reviews);
      });
    }

    


    @GET()
    @route('/property/:id') // get reviews by property id
    propertyReview(req: Request, res: Response) {
     
      const { ReviewService } = this.di;

      const id = req.params.id;


      ReviewService.getReviewByPropertyId(id).then(reviews=> {
      return res.json(reviews);
      });
    }
}





