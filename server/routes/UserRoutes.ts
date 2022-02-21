import express from 'express'
import User from '../modelsold/User';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/all', function(req, res) {
  
  return User.findAll().then(users=> {
    return res.json(users);
  });
  
});
// define the about route
router.get('/edit/:id', function(req, res) {
  res.send('About birds' + req.params.id);
});

export default router;
