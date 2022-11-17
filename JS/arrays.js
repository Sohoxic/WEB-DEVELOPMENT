// const num = new Array(1,2,3,4,5,6,7,8,9);

// // Push
// num.push(10)

// // Unshift
// num.unshift(0)

// // Pop
// num.pop()

// // Shift
// num.shift()

// const names = ['Amal','Dhanvan','Akash','Akshit','Neha','Supriya'];

// // indexOf
// names.indexOf('Akash');

// // lastIndexOf
// names.lastIndexOf('Akash')

// // includes
// names.includes('Akshit')

// let channels = [{
//     name: 'Apna College',
//     subscriber: 10000
// }, {
//     name: 'Apni Kaksha',
//     subscriber: 20000
// }, {
//     name: 'Aman Dhattarwal',
//     subscriber: 50000
// }];

// let names1 = ['Amal','Dhanvan','Akash']
// let names2 = ['Akshit','Neha','Supriya']
// let names3 = names1.concat(names2);
// console.log(names3.slice(2,3))
// // let names3 = [...names1,...names2]


// For Loop
// for(let i = 0;i<names.length;i++){
//     // console.log(names[i])
// }

// // For of
// for(let name of names){
//     // console.log(name)
// }

// // for-each
// names.forEach(function(name,index){
//     // console.log(name, index);
// })

// // Join
// let student = ['S','h','i','v','a'];
// student = student.join('_');

// // Spilt
// // console.log(student.split('_'))

// // Filter
// let cities = [
//     {name: 'Mumbai', population: 3792621},
//     {name: 'Delhi', population: 8175133},
//     {name: 'Bangalore', population: 2695598},
//     {name: 'Chennai', population: 2099451},
//     {name: 'Lucknow', population: 1526006}
// ];

// // console.log(cities.filter(city => city.population > 3000000))
// console.log(cities.map(city => city.population * 2))

/* QS on ARRAYS :- */

const characters = [
    {
        name: 'Tarak Mehta',
        height: '172',
        mass: '77',
        eye_color: 'brown',
        gender: 'male',
    },
    {
        name: 'Jethalal',
        height: '145',
        mass: '136',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Babita Ji',
        height: '150',
        mass: '49',
        eye_color: 'grey',
        gender: 'female',
    },
    {
        name: 'Krishnan Iyer',
        height: '168',
        mass: '84',
        eye_color: 'black',
        gender: 'male',
    },
];

// Get an array of all names

const names = characters.map(ch => ch.name)
// console.log(names);

// Get an array of objects with just name and height properties
const propertiesOfCh = characters.map(ch => {
    return {
        name: ch.name,
        height: ch.height
    }
})
// console.log(propertiesOfCh);

// Get the total height of all characters
const totalHeight = characters.reduce((prevHeight, character) => prevHeight + Number(character.height), 0);
// console.log(totalHeight);

// Get characters with mass greater than 100
const greaterThanMass = characters.filter(character => character.mass > 100)
// console.log(greaterThanMass);

// Get all male characters
const maleCh = characters.filter(character => character.gender == 'male')
// console.log(maleCh);

// Sort by gender
const sortByGender = characters.sort((character1, character2) => {
    if (character1.gender > character2.gender) {
        return -1;
    }
    if (character1.gender < character2.gender) {
        return 1;
    }
    return 0
})
// console.log(sortByGender);

// Sort by name
const sortByName = characters.sort((character1, character2) => {
    if (character1.name > character2.name) {
        return -1;
    }
    if (character1.name < character2.name) {
        return 1;
    }
    return 0
})
// console.log(sortByName);

// Does every character have mass more than 40?
// console.log(characters.every((character) => character.mass > 40))

// Does every character have blue eyes?
// console.log(characters.every((character) => character.eye_color == 'blue'))

// Is there at least one male character?
// console.log(characters.some((character) => character.gender))
// Is there at least one character taller than 200?
console.log(characters.some((character) => character.height > 200))