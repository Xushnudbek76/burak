import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import  MemberService  from "./../models/Memeber.service";
const restaurantController: T = {};
restaurantController.goHome =  (req: Request, res: Response) => {
    try {
        console.log("goHome");
         res.send('Home page')        
    } catch (error) {
        console.log('Error, goHome:', error);
        
    }

};

restaurantController.getLogin =  (req: Request, res: Response) => {
    try {
        console.log("getLogin");
         res.send('Login page')        
    } catch (error) {
        console.log('Error, getLogin:', error);
        
    }

};

restaurantController.getSignup =  (req: Request, res: Response) => {
    try {
        console.log("getSignup");
         res.send('Signup page')        
    } catch (error) {
        console.log('Error, getSignup:', error);
        
    }

};
export default restaurantController;