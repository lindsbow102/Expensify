//
// Object Destructuring
//

const person = {
    name: 'Lindsey',
    age: 38,
    location: {
        city: 'Gilbert',
        temp: 110
    }
};

// Give name a default value if it doesn't exist in object
const { name: firstName = 'Anonymous', age } = person;
// const { name = 'Anonymous', age } = person;

console.log(`${firstName} is ${age} years old.` );

// We want to rename 'temp' to 'temperature'
const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
};

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

const address = ['1259 Granito Drive', 'Laramie', 'WY', '82072'];

// Let's destructure!!!
// If you don't want to use the first item, still use the comma to keep the order correct
const [, town, state = 'New York', zip] = address;

console.log(`You are in ${town} ${state}`);

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [drink, ,mediumPrice] = item;
console.log(`A medium ${drink} costs ${mediumPrice}`);