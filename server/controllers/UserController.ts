import BaseContext from '../BaseContext';
import { route, GET, POST } from 'awilix-express'
import { NextFunction, Request, Response } from "express";
import httpStatus from '../../http-status';


@route('/api/users')
export default class UserController extends BaseContext {    
    @GET()
    @route('/all') //Get all users
    getAllUsers(req: Request, res: Response) {
        const { UserService } = this.di;
        return UserService.getAllUsers().then(users=> {
            return res.answer(users);
        })
        .catch(error => {
            return res.answer( null,{message: error},httpStatus.BAD_REQUEST);
        });
    }

    @GET()
    @route('/edit/:id') //Get all users
    editUser(req: Request, res: Response) {
        const { UserService } = this.di;
        const id = req.params.id;
        UserService.getUser(id).then(users=> {
          return res.answer(users);
        })
        .catch(err => {
            res.answer(null,'Could not get users by id', httpStatus.BAD_REQUEST);
        });
    }
}

