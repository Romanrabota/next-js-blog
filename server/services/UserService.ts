import BaseContext from '../BaseContext'
import { Op } from 'sequelize';


export default class UserService extends BaseContext {
    public getAllUsers() {
        const { UserModel } = this.di;
        return UserModel.findAll({})
    }

   

}

