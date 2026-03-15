const removeDuplicate = (str: string): string => {
      return [...new Set(str)].join('');
}





console.log(removeDuplicate('hello'))














// const changeNumberInArray = (num: number, arr: number[]): number[] => {
//       console.log(arr[num])
//      arr[num] = num;
     
//       return arr;
// }

// console.log(changeNumberInArray(5,[1, 1, 1, 1, 1, 1, 1,]));


// const celToFer  = (c:number): number => {
//       return ((c * 9/5) + 32)
// }
 
// console.log(celToFer(80))

// const randomBetween = (start: number, end: number): number => {
//       return Math.floor(Math.random() * (end - start)) + start   
// }

//       console.log(randomBetween(30, 50));


// const sortByAge = (arr: { age: number }[]) => {
//   return arr.sort((a: { age: number }, b: { age: number }) => a.age - b.age);
// }
// console.log(sortByAge([{age:23}, {age:21}, {age:13}]));












// const sumOfEven = (arr: number[]): number =>{
//   let sum  = 0;

//   for(let e of arr) {
//     if (e % 2 === 0) {
//       sum += e
//     }
//   }
//    return sum
// }


// console.log(sumOfEven([2, 3, 4, 5, 6, 7, 8,]));













// const findIntersection = (arr: number[], arr2: number[]): number[] => {
//   let set1 = new Set(arr);
//   let set2 = new Set(arr2);
//   let num = [];

//   for( let e of set1) {
//     if(set2.has(e)) {
//       num.push(e);
//     }
//   }
//   return num;
// }

// console.log(findIntersection([2, 4, 5, 3, 5, 6,], [2, 4, 8, 5, 2, 6,]));




































// const countOccurrences = (obj: Record<string, any>, str: string): number => {
//     let count = 0;

//     for (let key in obj) {
//       if (key === str) {
//         count++;
//       }


//       if (typeof obj[key] === 'object') {
//         count += countOccurrences(obj[key], str)
//       }
//     }

//  return count;
// }

// console.log(countOccurrences( {
//   model: 'Bugatti',
//   steer: {
//     model: 'HANKOOK',
//     size: 30
//   }
// }, 'model'));
























// const chunkOfArrays = (arr: number[], chunk: number ): number[][] => {
//     let result = [];
//     for( let i = 0; i < arr.length; i += chunk) {
//         console.log(i);
//         result.push(arr.slice(i, i + chunk))
//     }
//     return result
// }
// console.log(chunkOfArrays([3,5,2,6,4,3,1,6,8,4,7,4], 3));


























// const frequencyOfLetters = (str: string): object => {
// const result: {[key: string]: number} = {};

// for( const e of str) {
//     result[e] = (result[e] || 0) + 1;
// }
// return result
// };

// console.log(frequencyOfLetters('uzbekistan'));






















// const sumOfOdds = (num: number): number => {
//     let odd = 0;
//    for( let i = 1; i < num; i++){
//     if(i % 2 !== 0) odd++
//    };
//    return odd;
// }
// console.log(sumOfOdds(11));



















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