/*
    Stampare i numeri da 1 a 100, ma al posto dei numeri stampare Fizz per i multipli di 3, 
    Buzz per i multipli di 5 e FizzBuzz per i multipli di entrambi (3 e 5).
*/

for(let i=1; i<101; i++){
    if(i%3===0){
        if(i%5===0){
            console.log('Iterazione: FizzBuzz');
        } else {
            console.log('Iterazione: Fizz');
        }
    } else if(i%5===0){
        if(i%3===0){
            console.log('Iterazione: FizzBuzz');
        } else {
            console.log('Iterazione: Buzz');
        }
    } else {
        console.log('Iterazione:',i);
    }
}