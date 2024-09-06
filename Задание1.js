function ownAnimals(pet) {
    for (let key in pet) {
        if (pet.hasOwnProperty(key)) {
            console.log(`${key}: ${pet[key]}`);
        }
    }
}

// Пример:
const myPet = {
    name: "Piggy",
    age: 4
};

ownAnimals(myPet);