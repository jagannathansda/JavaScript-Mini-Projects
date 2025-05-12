console.log(`Hello`);
console.log(`I like pizza!`);


//window.alert(`This is an alert`);
//window.alert(`I like pizza!`);

// document.getElementById('myh1').textContent = `Hello`;

// document.getElementById('myp').textContent = `I like Pizza`;

// let name = "Jagannath";

// document.getElementById('myh1').textContent = `My name is ${name}`;

// let username;

// document.getElementById('mySubmit').onclick = function() {
//     username = document.getElementById('myText').value;
//     document.getElementById('myh1').textContent = `Welcome, ${username}`;
// }

// username = window.prompt(`what's your username`);

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;
// console.log(age);

// const PI = 3.14159;
// let radius;
// let circumference;
// document.getElementById('mySubmit').onclick = function() {
//     radius = Number(document.getElementById('myText').value);
//     console.log(radius, typeof radius);
//     circumference = 2 * PI * radius;
//     console.log(circumference, typeof circumference);
//     document.getElementById('myh3').textContent = circumference +   " cm"; 
// }

const decrease = document.getElementById('b1');
const reset = document.getElementById('b2');
const increase = document.getElementById('b3');
const counter = document.getElementById('Counter');

let count = 0;

counter.textContent = count;

decrease.onclick = function() {
    count--;
    counter.textContent = count;
}

reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}

increase.onclick = function() {
    count++;
    counter.textContent = count;
}
//This is a comment

/* This 
    is
    a 
    comment
*/