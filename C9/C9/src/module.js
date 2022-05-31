import capitalize from '../node_modules/lodash/capitalize'

function cube(x) {
  return x * x * x;
}

const mySentence = function ( name ) {
  const capitalizedName = capitalize(name)
  
  console.log(`My name is ${capitalizedName}`)
}

export default mySentence

