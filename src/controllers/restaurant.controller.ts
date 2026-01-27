import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import  MemberService  from "./../models/Memeber.service";
import { LoginInput, MemberInput } from '../libs/types/members';
import { MemberType } from '../libs/enums/member.enum';
const restaurantController: T = {};
restaurantController.goHome =  (req: Request, res: Response) => {
    try {
        console.log("goHome");
         res.render("home")      
    } catch (error) {
        console.log('Error, goHome:', error);
        
    }

};
restaurantController.getSignup =  (req: Request, res: Response) => {
    try {
        console.log("getSignup");

        res.render('signup')     
    } catch (error) {
        console.log('Error, getSignup:', error);
        
    }

};

restaurantController.getLogin =  (req: Request, res: Response) => {
    try {
        console.log("getLogin");
         res.render('login')       
    } catch (error) {
        console.log('Error, getLogin:', error);
        
    }

};


restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);

                // TODO: SESSIONS

         res.send(result);        
    } catch (error) {
        console.log('Error, getSignup:', error);
        
    }

};

restaurantController.processLogin =  async(req: Request, res: Response) => {
    try {
        console.log("getLogin");
        const input: LoginInput = req.body;
        const  memberService = new MemberService();
        const result = await memberService.processLogin(input);
        
                // TODO: SESSIONS AUTHENTICATION
         res.send(result);      
    } catch (error) {
        console.log('Error, getSignup:', error);
        res.send(error);
    }

};


export default restaurantController;