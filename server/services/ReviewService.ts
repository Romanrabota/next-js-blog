import BaseContext from '../BaseContext'

export default class ReviewService extends BaseContext {
    
    public getAllReviews() {
        const { ReviewModel } = this.di;
        return ReviewModel.findAll()
    }
   
    public getReviewById(id: string) {
        const { ReviewModel,UserModel } = this.di;
      //  if (isNaN(id)) return Promise.reject('Parameter is not a number!');
 

        return ReviewModel.findByPk(id,{
            include: 
            [
               { 
                 model: UserModel, 
                 as: 'user',
               },
            ]
          });
}


    public getReviewByUserId(id: string) {
    const { ReviewModel,UserModel } = this.di;
  //  if (isNaN(id)) return Promise.reject('Parameter is not a number!');

      return UserModel.findByPk(id,{
        include: 
        [
           { 
             model: ReviewModel, 
             as: 'reviews',
           },
        ]
      });
}



public getReviewByPropertyId(id: string){

    const { ReviewModel,PropertyModel } = this.di;
    return PropertyModel.findByPk(id,{
        include: 
        [
           { 
             model: ReviewModel, 
             as: 'reviews',
           },
        ]
    });

}
}
