// hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false;



const hasProperty = ( obj: object, str:string): boolean => {
      return obj.hasOwnProperty(str)
}

console.log(hasProperty({name: "BMW", model: "M3"}, "model"));