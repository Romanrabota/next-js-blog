import BaseContext from '../BaseContext';
import { route, GET, POST } from 'awilix-express'
import { NextFunction, Request, Response } from "express";


@route('/api/users')
export default class UserController extends BaseContext {    
    @GET()
    @route('/all') //Get all users
    getAllUsers(req: Request, res: Response) {
        const { UserService } = this.di;
        return UserService.getAllUsers().then(users=> {
            return res.json(users);
        }).catch(error => {
            return res.status(404).json({ 
                error: true, 
                message: error
            });
        });
    }

    @GET()
    @route('/edit/:id') //Get all users
    editUser(req: Request, res: Response) {
        res.send('About birds' + req.params.id);
    }

}