const toObject = (obj: object) => {
 return Object.entries(obj);
}

console.log(toObject({a: 10, b: 20}));
