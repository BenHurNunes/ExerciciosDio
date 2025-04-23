function validaArray(arr, num) {
    try{
        if (!Array || !num) {
            throw new ReferenceError("Envie os parâmetros corretos!");
        }

        if (typeof arr !== 'object') {
            throw new TypeError("O primeiro parâmetro deve ser um array!");
        }
        if (typeof num !== 'number') {
            throw new TypeError("O segundo parâmetro deve ser um número!");
        }

        return arr;
    }
     catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }else if (e instanceof RangeError) {
            console.log("Esse erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: ", e);
        }
    }

}

console.log(validaArray([1, 2, 3], 4));
console.log(validaArray(1, 4));
console.log(validaArray([1, 2, 3], "4"));   
console.log(validaArray([1, 2, 3], 4, 5));
console.log(validaArray([1, 2, 3], -4));
console.log(validaArray('Não sou um array', 5));
console.log(validaArray());
