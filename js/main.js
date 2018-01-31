"use strict"

console.log("xhr main.js");

let startTime = Date.now();
console.log("startTime: ", startTime);

for (let i = 0; i < 2000000; i++){
    let x = i + i/2 * 6;
};

console.log("newTime: ", Date.now());


