
const calculate = (str: string) => {
   return str.split("+")
   .reduce((sum, e) => sum + Number(e), 0);
}

console.log(calculate('1+2+10+6'));











// hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false;

// const hasProperty = ( obj: object, str:string): boolean => {
//       return obj.hasOwnProperty(str)
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model"));