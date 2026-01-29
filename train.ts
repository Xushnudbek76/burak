const getSquare = (arr: number[]): object[] => {
  let squares = arr.map(e => ({
    value: e,
    square: e * e
  }))
  return squares;
}

console.log(getSquare([1, 2, 3, 4, 5, 6, 7, 8, 9,]));