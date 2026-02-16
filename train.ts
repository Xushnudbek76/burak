

const sumOfOdds = (num: number): number => {
    let odd = 0;
   for( let i = 1; i < num; i++){
    if(i % 2 !== 0) odd++
   };
   return odd;
}
console.log(sumOfOdds(11));



















// const mergeAndSort = (arr1 : number[], arr2: number[]): number[] => {
// let all = arr1.concat(arr2);
// return all.sort((a, b) => b - a);
// }
// console.log(mergeAndSort([2, 3, 5, 43, 2, 5], [6, 2, 87, 5, 9]));










//  const missingNumber = (nums: number[]): number => {
//     const n = nums.length;
//     const e = (n * (n + 1)) / 2;
//     const s = nums.reduce((a, b) => a + b, 0);
//     return e - s;
// }

// console.log(missingNumber([3, 0, 1])); 











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