function passwordgenerator() {
const numboxval = Number(document.getElementById('numbox').value);
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');
const checkbox4 = document.getElementById('checkbox4');
const h11 = document.getElementById(`h11`);
const h12 = document.getElementById(`h12`);

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+-=";

let allowedchars = "";
let password = "";

allowedchars += checkbox1.checked ? uppercase : "";
allowedchars += checkbox2.checked ? lowercase : "";
allowedchars += checkbox3.checked ? numbers : "";
allowedchars += checkbox4.checked ? special : "";

if(numboxval < 1){
    h11.textContent = `Your Password should contain atleast 1 Character`;
    return;
}

console.log(allowedchars.length);

if(allowedchars.length === 0) {
    h11.textContent = `Your Password should contain atleast 1 Chracter Set`;
    return;
}

for(let i = 0; i < numboxval; i++) {
    password += allowedchars[Math.floor(Math.random() * allowedchars.length)];
}

h11.textContent = `User Generated Password :`;
h12.textContent = password;

}


