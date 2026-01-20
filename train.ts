
const longestStr = (str : string ): string => {
    let sp  = str.split(" ");
    let long = '';
    for (const e of sp) {
        if (e.length > long.length) {
            long = e;
        }
    }
    return long;
}
console.log(longestStr("Nimagap hello Uzbekistan"))
// Project Standards:
//     - Logging Standards
//     - Naming Standards:
//        - function, method, variable => CAMEL ---goHome
//        - class => PASCAL                     ---MemberService
//        - folder => KEBAB                     ---router-admin
//        - css => SNAKE                        ---button_style