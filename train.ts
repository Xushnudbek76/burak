const sumOfNumbers = (arr: any[]):number => {
return arr.reduce((sum, e)=> {
  if(typeof e === 'number') {
    sum += e
  }
  return sum;
},0 ); 
};

console.log(sumOfNumbers([10, "10", {son: 10}, true, 35]));
