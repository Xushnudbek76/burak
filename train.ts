const palindrome = (str: string): boolean => {
  return str.split('').reverse().join("") === str ? true : false
};

console.log(palindrome('wow'));
