import BaseContext from '../BaseContext'
import { Op } from 'sequelize';


export default class UserService extends BaseContext {
    public getAllUsers() {
        const { UserModel } = this.di;
        return UserModel.findAll({})
    }

    public getUser(id: string) {
        const { UserModel } = this.di;
        return UserModel.findByPk(id,{
            include: 
            [
               { 
                 model: UserModel, 
                 as: 'user',
               },
            ]
          });
    }

    public createUser(data: any) {
      console.log('usersozdannuezahodiat',data);
      const { UserModel } = this.di;
      const user = UserModel.create(data);
      return user;
  }


  public findUserByEmail(email: string) {
    const { UserModel } = this.di;
    return UserModel.findOne({
        where: { email }
       
    });
}











}

