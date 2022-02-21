import BaseContext from '../BaseContext'


export default class PropertyService extends BaseContext{


    public getAllProperty() {
        const { PropertyModel } = this.di;
        return PropertyModel.findAll()
    }


    public getUserReviewbyPropertyid(id:string){

        const { PropertyModel,ReviewModel,UserModel } = this.di;

        
        return PropertyModel.findByPk(id,{
            include: 
            [
              { 
                model: ReviewModel, 
                as: 'reviews',
              },
               { 
                 model: UserModel, 
                 as: 'user',
               },
            ]
          })

    } 


      public getReviewPropertybyUserid(id:string) {


        const { PropertyModel,ReviewModel,UserModel } = this.di;

        return UserModel.findByPk(id,{
            include: 
            [
              { 
                model: PropertyModel, 
                as: 'properties',
              },
               { 
                 model: ReviewModel, 
                 as: 'reviews',
               },
            ]
          })

         
      }







}