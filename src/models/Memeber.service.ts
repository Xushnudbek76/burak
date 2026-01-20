import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member, MemberInput } from "../libs/types/members";
import MemberModel from "../schema/Member.model";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }
    /**
     * processSignup
     */
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel.findOne({memberType: MemberType.RESTAURANT}).exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
        try {
        const result = await this.memberModel.create(input);
        
        result.memberPassword = "";

         return result.toObject();
        
        } catch (err) {
            console.log(err)
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
        }
     
    }
    
}

export default MemberService;