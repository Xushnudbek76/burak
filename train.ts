// const positive = (arr: number[]): string => {
//   return arr
//     .filter(a => a >= 1)
//     .join("");
// };
// positive([2, -3, 0, 4, 1]);

const positive = (arr: number[]): string => {
    return arr.filter(a => a >= 1).join('');
}

console.log(positive([1, 45, 2, 6, -3, -3,-9]));