let Name = 'Ibraheem'; // string
let age = 25;
let job = false;
let address;
let Data = null;
console.log(Name)
Name = 23;
console.log(Name)
Name = true;
console.log(Name)
Name;
console.log(Name)

console.log(`this my name ${Name} \nmy age is ${age} \nwork state T/F ${job} \naddress ${address} \nmy data is ${Data}`);

let x = 26;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x % y);
console.log(x / y);
console.log(x * y);
console.log(x ** y);

// Challenge 1
let markMass  = 78;
let markHight = 1.69;
let jhonMass = 95;
let jhonHight = 1.76;
let markBmi = markMass / markHight**2;
let jhonBmi = jhonMass / jhonHight**2;

console.log(`Mark BMI = ${markBmi}\nJhon BMI = ${jhonBmi}`);
// console.log(`BMI = ${ markMass / markHight**2} \nBMI = ${ jhonMass / jhonHight**2}`)
x = "22"
y = 22
// if (x === y) {
//     console.log(true);
// } else( x == y) {
//     console.log(true);
// }


// Challenge 2
if(jhonBmi){console.log(true)}

if (markBmi < jhonBmi) {
    console.log(`jhon has bigger bmi`)
}else {
    console.log(`mark has bigger bmi`)
}

// if (markBmi < jhonBmi) {
//     console.log(`Mark has BMI ${markBmi} bigger BMI than jhon BMI ${jhonBmi}`)
// }else{
//     console.log(`jhon has bigger bmi`)
// }
age = 22;
age >= 18 ? console.log("yes you can drive") : console.log("no u cant drive");

// Notes
// 