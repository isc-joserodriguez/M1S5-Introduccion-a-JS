/* function pares(max) {
    var num = 2;
    for (var i = 1; i <= max; i++) {
        var b = num * i;
        console.log(b);
    }
}

pares(12);
pares(3);
pares(100); */


function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
    // return num % 2 == 0;
}

function pares(max) {
    for (var i = 1; i <= max; i++) {
        if (esPar(i)) {
            console.log(i)
        }
    }
}

pares(10); //6 - 24