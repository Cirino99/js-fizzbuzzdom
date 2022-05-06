/*
    Stampare i numeri da 1 a 100, ma al posto dei numeri stampare Fizz per i multipli di 3, 
    Buzz per i multipli di 5 e FizzBuzz per i multipli di entrambi (3 e 5).
*/

const mybox = document.getElementById('mainbox');
let element = '';
for(let i=1; i<101; i++){
    if(i%3===0){
        if(i%5===0){
            element += `<div class="box fizzbuzz">FizzBuzz</div>`;
            console.log('Iterazione: FizzBuzz');
        } else {
            element += `<div class="box fizz">Fizz</div>`;
            console.log('Iterazione: Fizz');
        }
    } else if(i%5===0){
        if(i%3===0){
            element += `<div class="box fizzbuzz">FizzBuzz</div>`;
            console.log('Iterazione: FizzBuzz');
        } else {
            element += `<div class="box buzz">Buzz</div>`;
            console.log('Iterazione: Buzz');
        }
    } else {
        element += `<div class="box">${i}</div>`;
        console.log('Iterazione:',i);
    }
}
mybox.innerHTML += element;