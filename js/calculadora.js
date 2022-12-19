class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    elevar(num1, num2) {
        return Math.pow(num1, num2);
    }

    porcentaje(num1){
        return num1/100;
    }

    raiz(num1){
        return Math.sqrt(num1);
    }

    pi(){
        return Math.PI;
    }
} 