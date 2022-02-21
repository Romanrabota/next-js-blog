import { Op } from 'sequelize';
import express from 'express'
import { Property, User ,Review } from '../modelsold';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/all', function(req, res) {
  
  return Property.findAll().then(properties=> {
    return res.json(properties);
  });
  
});
// define the about route



router.get('/edit/:id', function(req, res) {
const id = req.params.id;


  return Property.findByPk(id,{
      include: 
      [
        { 
          model: Review, 
          as: 'reviews',
        },
         { 
           model: User, 
           as: 'user',
         },
      ]
    }).then(properties=> {
  return res.json(properties);
  });
});


router.get('/user/:id', function(req, res) {
  const id = req.params.id;
  
  
    return User.findByPk(id,{
        include: 
        [
          { 
            model: Property, 
            as: 'properties',
          }
          
        ]
      }).then(properties=> {
    return res.json(properties);
    });
  });


  router.post('/find', function(req, res) {
    const { startDate, endDate, minCost, maxCost, userId} = req.body;

    const where = {};
/*
    if (startDate) {
      where['createdAt']={[Op.gte] : startDate};
    }

    if (endDate ) {
      where['createdAt'][Op.lte] = endDate;
    }  

    if (minCost) {
      where['price'][Op.gte] = minCost;
    }  

    if (maxCost) {
      where['price'][Op.lte] = maxCost;
    }  

    if (userId) {
      where['userId'] = userId
    } 
*/

    if (startDate) {
      where['createdAt']={[Op.gte] : startDate};
    }

    if (endDate ) {
      where['createdAt']={[Op.lte] : endDate};
    }  

    if (minCost) {
      where['price']={[Op.gte] : minCost};
    }  

    if (maxCost) {
      where['price']={[Op.lte] : maxCost};
    }  

    if (userId) {
      where['userId']={[Op.eq]: userId};
    } 


    
    // if (startDate && endDate ) {
    //   where['createdAt'] = {
    //     [Op.lte]: endDate,
    //     [Op.gte]: startDate
    //   }
    // }  

    // if (startDate && endDate && minCost ) {
    //   where['createdAt'] = {
    //     [Op.lte]: endDate,
    //     [Op.gte]: startDate
    //   },
    //   where['price']={
    //     [Op.gte]: minCost
    //   }
    // }  

    // if (startDate && endDate && maxCost ) {
    //   where['createdAt'] = {
    //     [Op.lte]: endDate,
    //     [Op.gte]: startDate
    //   },
    //   where['price']={
    //     [Op.lte]: maxCost
    //   }
    // }  

    // if (startDate  && maxCost ) {
    //   where['createdAt'] = {
    //     [Op.gte]: startDate
    //   },
    //   where['price']={
    //     [Op.lte]: maxCost
    //   }
    // }  

      
    // if (endDate && minCost ) {
    //   where['createdAt'] = {
    //     [Op.lte]: endDate,
    //   },
    //   where['price']={
    //     [Op.gte]: minCost
    //   }
    // } 


    // if (endDate && minCost && userId) {
    //   where['createdAt'] = {
    //     [Op.lte]: endDate,
    //   }, 
    //   where['price']={
    //     [Op.gte]: minCost
    //   },
    //   where['userId']={
    //     userId
    //   }
    // } 

    /*if( null )

    {console.log("no data") }
*/





    /*if ( userId) {
      where['userId']={
        userId
      }
    } 
*/




   /* if(minCost){
      where={
      price:{
        [Op.gte]: minCost
      }
    }
  }

    if(maxCost){
      where={
        price:{
          [Op.lte]: maxCost
        }
      }
    }

    


    if(userId){
    where= {
    userId
    }
    }



    






    if(startDate && endDate && minCost && maxCost && userId){

      where = {
        userId,
          createdAt: {
            [Op.lte]: endDate,
            [Op.gte]: startDate
          },
          price: {
            [Op.lte]: maxCost,
            [Op.gte]: minCost
          },
      }

    }
    */

    /*
    {
          userId,
          createdAt: {
            [Op.lte]: endDate,
            [Op.gte]: startDate
          },
          price: {
            [Op.lte]: maxCost,
            [Op.gte]: minCost
          },
      }
    */

    return Property.findAll({
      where,
      // include: 
      //     [
      //       { 
      //         model: Property, 
      //         as: 'properties',
      //       }
            
      //     ]
    }).then(properties=> {
        return res.json(properties);
    });
    // return res.json({ startDate, endDate, minCost, maxCost, userId});
  });

  
/*  router.get('/find', function(req, res) {
    const data = req.body, {
                  (Property.createdAt > startDate and createdAt < endDate),
                  (price > startDate and createdAt < endDate),


                  
                  
                  
                  
                  }  

    }
         



    }
    
    
      return Property.findAll(data,{
          include: 
          [
            { 
              model: Property, 
              as: 'properties',
            }
            
          ]
        }).then(properties=> {
      return res.json(properties);
      });
    });*/









export default router;