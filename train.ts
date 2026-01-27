const reverse = (str: string): string => {
  return str.split(' ').map( e => e.split('').reverse().join('')).join(" ");
}


console.log(reverse('Hello MIT'))