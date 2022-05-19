import { route, GET, POST } from 'awilix-express'
import { NextFunction, Request, Response } from "express";
import BaseContext from '../BaseContext';
import httpStatus from '../../http-status';


@route('/api/properties')
export default class PropertyController extends BaseContext {    

    @GET()
    @route('/all') //Get all property
    getAllUsers(req: Request, res: Response) {
      const { PropertyService } = this.di;
      return  PropertyService.getAllProperty().then(properties=> {
      return res.answer(properties);
      }).catch(e=>{
      return res.answer(null,'error', httpStatus.BAD_REQUEST);             
      });
      };
              
    @POST()
    @route('/edit') //Get all users
    editUser(req: Request, res: Response) {   
    	const { PropertyService } = this.di;
		  const id = req.body.id;
		 //  console.log('property id', id);
		  return  PropertyService.getUserReviewbyPropertyid(id)
		  .then(properties=> {
    //   console.log('propsu',properties)
			return res.answer(properties);
		  }).
      catch(e=>{
       return res.answer(null,'error', httpStatus.BAD_REQUEST);             
    });
}









    
    @GET()
    @route('/user/:id') //Get all users
    userProperty(req: Request, res: Response) {
       
      const { PropertyService } = this.di;
      const id = req.params.id;
        
      return  PropertyService.getReviewPropertybyUserid(id).then(properties=> {
        console.log('properties',properties)
        return res.answer(properties);
        });      
    }
}

