 const missingNumber = (nums: number[]): number => {
    const n = nums.length;
    const e = (n * (n + 1)) / 2;
    const s = nums.reduce((a, b) => a + b, 0);
    return e - s;
}

console.log(missingNumber([3, 0, 1])); 











// const calculate = (str: string) => {
//    return str.split("+")
//    .reduce((sum, e) => sum + Number(e), 0);
// }

// console.log(calculate('1+2+10+6'));











// hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false;

// const hasProperty = ( obj: object, str:string): boolean => {
//       return obj.hasOwnProperty(str)
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model"));