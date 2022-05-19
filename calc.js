const botonNumero = document.getElementsByName('data-number');
const botonOp = document.getElementsByName('data-op');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result');
var opActual = '';
var opAnterior = '';
var operacion = undefined;

botonNumero.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOp.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperation(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperation(op){
    if(opActual== '') return;
    if(opAnterior != ''){
        calcular();
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
                calculo = anterior * actual;
            break;
        case '/':
                calculo = anterior / actual;
            break;
    
        default:
            return;
            break;
    }
    opActual = calculo;
    operacion = undefined;
    opAnterior = '';
}

function agregarNumero(num){
    opActual = opActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opActual = '';
    opAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opActual;
}

clear();