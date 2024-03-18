//1
let a = +prompt("1 son")
let b = +prompt("2 son")
if (a>b){
    alert(a)
}
else{
    alert(b)
}
//2
let c="12"
let d= parseFloat(c)
console.log( typeof(d));
//3
let e =Math.round(Math.random()*99+1)
alert (e)
if(e %2 ==0){
    alert("juft")
}
else{
    alert("toq")
}
//4
let f=prompt("soz kiriting")
if(f==='Mars'){
    console.log("Mars");
}
else{
    console.log('Mars IT School');
}
//5
var fruits = ["banan", "bodring", "pamidor", "olma", "kivi"];
console.log("Birinchi array:", fruits);
var longFruits = [];
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 5) {
        longFruits.push(fruits[i]);
    }
}
if (longFruits.length > 0) {
    console.log("Boshqa array:", longFruits);
} else {
    console.log("Uzunlik 5 ta harifdan ko'p bo'lgan meva topilmadi.");
}

//6
    let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
let odd = [];
let even = [];
for (let i = 0  ; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i])
       
    } else{
     odd.push(numbers[i])
    }
}
console.log(even);
console.log(odd);

