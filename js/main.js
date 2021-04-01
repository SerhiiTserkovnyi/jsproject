"use strict";


const option = {
    name: 'test',
    height: 1024,
    width: 1024, 
    color: {
        border: 'black',
        bg: 'red'
    }
};
let counter = 0;
for (let key in option){
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log (`Властивість ${i} має імя ${option[key][i]}`);
            counter++;
        }

    } else {
        console.log (`Властивість ${key} має імя ${option[key]}`);
        counter++;
    }
    
}
console.log (counter);