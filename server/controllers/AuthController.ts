import { route, GET, POST } from 'awilix-express'
import { NextFunction, Request, Response } from "express";
import BaseContext from '../BaseContext';
import { ROLE } from '../../commons';
import passportLocal from 'passport-local';
//import {passsport} from '../server';
import httpStatus from '../../http-status';

@route('/api/auth')
export default class PropertyController extends BaseContext {    

    @POST()
    @route('/login') //Get all property

    public login(req: Request, res: Response, next: NextFunction) {
        const { passport } = this.di;
        const JST_EXPIRE = 3;
        const REMEMBER_ME_EXPIRE = 30;
        
        return passport.authenticate('local-login', (err, identity) => {
            
            if (err) {
                console.log('err',err);
                return res.answer(null,{email:err}, httpStatus.BAD_REQUEST
                   // (message:{'Could not process validations'})
                 //  {email:err}
                )
            }
           else if (identity.token) {
            //hasOwnProperty('data')
                return res.answer(identity,{log:'You have successfully logged in!'}  //прописать куку                                                           
                
                //  {log:'You have successfully logged in!' }                                        
                  );
               }

               
            
            let expire = JST_EXPIRE;
            if (req.body.rememberMe) {
                expire = REMEMBER_ME_EXPIRE;
            }
            res.cookie('token', identity.token, {maxAge:  expire});

        })(req, res, next);
    }
      

/*
    async login(req: Request, res: Response) {   
        const { UserService } = this.di;
        const {email,password} = req.body; 
        
        console.log('zahoditlogin',req.body);   
          

        const u =  await UserService.findUserByEmail(email)
        console.log('userdannue',u);
        if (u==undefined) {
            return res.status(404).json({ 
                error: true, 
                message: {email:'User not found'},
                
            });
        }
       
       if(u.password!=password){
        return res.status(404).json({ 
            error: true, 
            message: {password:'password is wrong'},
            
        });
  } 
}
*/

    @POST()
    @route('/register') //Get all users
  async  register(req: Request, res: Response,next: NextFunction) { 

   const  {passport} = this.di;

    return passport.authenticate('local-signup', (errors, identity) => {                 
        if (identity) {
            return res.answer({success:true},'Registration completed successfully! You can now log in.'
           
               /* {
                data:{success:true}, 
                message:'Registration completed successfully! You can now log in.'
                }*/
                
                );
        } if(errors) {
            console.log('er',errors);
            let a=[errors];
            return res.answer(null,errors,httpStatus.BAD_REQUEST
                
                


             /*   {//error: true,
               // message: {email: errors?.hasOwnProperty('email')?a=errors['email']:null},
                
           // message: errors //рабочий вариант
             // errors




                }   */
                )   
        }
    })(req, res, next);
    }
    
}

    

    











   /*     const { UserService } = this.di;
        const {email,password,confirm} = req.body; 


        if(password!=confirm){
            return res.status(404).json({ 
                error: true, 
                message: {confirm:'Passwords are not equal'},
                
                
            });

        }   
        
        console.log('zahodit',req.body);   
          

        const u =  await  UserService.findUserByEmail(email)
        console.log('userdannue',u);
        if (u) {
            return res.status(404).json({ 
                error: true, 
                message: {email:'That e-mail already taken!'},
                                
            });
        }
        

        const userData = {
            email: email && email.trim().toLowerCase(),
            password: password && password.trim(),
            
        };
        console.log('usersozdanie',userData);

        UserService.createUser(userData).then((users: any)=> {
            return res.json(users);
                          
        }).catch((error: any) => {
            console.log('error',error);
            let message = {};
            if (error.hasOwnProperty('errors') && error.errors.length > 0) {
                message = error.errors[0].message;    //Набор ключей значений
                console.log('masiv',message)
                var passwordl;
               if(message='Email address must be between 6 and 255 characters in length')
                {                  
                  message={email:message}
                }
              if(message='Password must be between 6 and 255 characters in length')
                {
                    message={password:message}
                }   
                
            }
            console.log('m',message)
            return res.status(404).json({               
                error: true, 
               // message: message 
               message: message 


            });
        
        });
        






    	*/
      
      




