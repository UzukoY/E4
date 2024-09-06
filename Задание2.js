function ifHasProperty(str, obj) {
  return str in obj;
}

//Пример:

const myPet = {
  name: "Piggy",
  age: 4,
  weight: 35
};

console.log(ifHasProperty("name", myPet)); // true
console.log(ifHasProperty("colour", myPet)); // false