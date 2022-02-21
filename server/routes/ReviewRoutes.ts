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
  
  return Review.findAll().then(reviews=> {
    return res.json(reviews);
  });
  
});
// define the about route


router.get('/edit/:id', function(req, res) {
const id = req.params.id;


  return Review.findByPk(id,{
      include: 
      [
         { 
           model: User, 
           as: 'user',
         },
      ]
    }).then(reviews=> {
  return res.json(reviews);
  });
 
});


router.get('/user/:id', function(req, res) {
    const id = req.params.id;
    
    
      return User.findByPk(id,{
          include: 
          [
             { 
               model: Review, 
               as: 'reviews',
             },
          ]
        }).then(reviews=> {
      return res.json(reviews);
      });
     
    });



router.get('/property/:id', function(req, res) {
    const id = req.params.id;
    
    
      return Property.findByPk(id,{
          include: 
          [
             { 
               model: Review, 
               as: 'reviews',
             },
          ]
        }).then(reviews=> {
      return res.json(reviews);
      });
     
    });









export default router;