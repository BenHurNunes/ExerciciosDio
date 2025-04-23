var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function updateDisplay(){

    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
        
    } 
    else {currentNumberWrapper.style.color = 'black';}
}

function increment(){
    currentNumber ++;
   updateDisplay();
    }


function decrement(){
    currentNumber --;
    updateDisplay();
}

document.getElementById('btn-adicionar').addEventListener('click', increment);
document.getElementById('btn-subtrair').addEventListener('click', decrement);

