let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');

let number = document.getElementById('number');
let integer = 0;

increment.addEventListener('click',() =>{

    integer +=1;
    number.innerHTML = integer;

})

decrement.addEventListener('click',() =>{
    if  (integer >=1)
    {
    integer -= 1
    number.innerHTML = integer;
    }
    
})