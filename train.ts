
const countVowels = (str: string): number => {
    let count = 0;
    let vowels = 'aeiou';
   let strs = str.toLowerCase()
    for(let i = 0; i < strs.length; i++) {
      if (vowels.includes(strs[i])) {
        count++
      }
    }
    return count;
}
console.log(countVowels('Nike and Adidas'));