import { route, GET, POST } from 'awilix-express'
import { NextFunction, Request, Response } from "express";
import BaseContext from '../BaseContext';


@route('/api/properties')
export default class PropertyController extends BaseContext {    

    @GET()
    @route('/all') //Get all property
    getAllUsers(req: Request, res: Response) {
      const { PropertyService } = this.di;
        return  PropertyService.getAllProperty().then(properties=> {
            return res.json(properties);
          });
    }


    @POST()
    @route('/edit/:id') //Get all users
    editUser(req: Request, res: Response) {   
    	const { PropertyService } = this.di;
		const id = req.params.id;
		
		console.log('property id', id);
		
		return  PropertyService.getUserReviewbyPropertyid(id)
		.then(properties=> {
			return res.json(properties);
		});
      
    }  



    
    @GET()
    @route('/user/:id') //Get all users
    userProperty(req: Request, res: Response) {
       
      const { PropertyService } = this.di;
      const id = req.params.id;
        
      return  PropertyService.getReviewPropertybyUserid(id).then(properties=> {
        return res.json(properties);
        });      
    }
}

