$(document).ready(function() {
    let c = suma(6, 2);
    let d = resta(8, 2);
    let e = multiplicacion(4, 3);
    let f = division(10, 2);

    alert("El resultado de la suma es " + c);
    alert("El resultado de la resta es " + d);
    alert("El resultado de la multiplicación es " + e);
    alert("El resultado de la división es " + f);
});

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: División entre 0";
    }
    return a / b;
}