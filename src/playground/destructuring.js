// console.log('destructuring');


// const person = {
//   name: 'Sophia',
//   age: 33,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = ['1299 S Junipers Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, , state = 'New York', zip] = address;

 console.log(`You are in ${state}`);

 const item = ['Coffee (hot)', '$200', '$2.50', '$2.75'];

 const [drink, , priceMedium] = item;

 console.log(`A medium ${drink} costs ${priceMedium}`);