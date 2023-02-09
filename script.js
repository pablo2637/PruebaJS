const elegirEj = () => {
    /*Ejercicio 1 Opción 1*/
    function ej1op1() {
        /*Función que comprueba si un número es par*/
        function esPar(numero) {
            if (numero % 2 == 0) {
                return true;
            }
            return false;
        }

        /*Función que comprueba si un número es múltiplo de 25*/
        function esMultiplo25(numero) {
            if (numero % 25 == 0) {
                return true;
            }
            return false;
        }

        let n1 = parseInt(prompt("Ingresa el primer número:"));
        let n2 = parseInt(prompt("Ingresa el segundo número:"));

        /*Variables para guardar los resultados*/
        let r1 = "";
        let r2 = "";

        if (!esPar(n1)) {
            r1 = `El número ${n1} es impar`
        }
        if (esMultiplo25(n1)) {
            if (r1 == "") {
                r1 = `El número ${n1} es múltiplo de 25.` + " \n"
            } else {
                r1 += `, y es múltiplo de 25.` + " \n"
            }
        } else {
            if (r1 != "") {
                r1 += "." + "\n";
            }
        }

        if (!esPar(n2)) {
            r2 = `El número ${n2} es impar`
        }
        if (esMultiplo25(n2)) {
            if (r2 == "") {
                r2 = `El número ${n2} es múltiplo de 25.` + " \n"
            } else {
                r2 += `, y es múltiplo de 25.` + " \n"
            }
        } else {
            if (r2 != "") {
                r2 += "." + "\n";
            }
        }

        /*Comprueba el valor de los resultados para mostrar los datos*/
        if (r1 == "" && r2 == "") {
            alert("Ninguno de los 2 números son impares, ni tampoco múltiplos de 25.");
        } else if (r1 != "" && r2 == "") {
            alert("Resultado:" + "\n" + r1);
        } else if (r1 == "" && r2 != "") {
            alert("Resultado:" + "\n" + r2);
        } else {
            alert("Resultado:" + "\n" + r1 + r2);
        }

    }

    /*Ejercicio 1 Opción 2*/
    function ej1op2() {
        /*Pide una palabra, pero por si el usuario mete más de 1, sólo coge la primera*/
        let palabra = prompt("Escribe una palabra por favor:").split(" ")[0];
        let resultado = "";

        if (palabra.charAt(0) == "s" || palabra.charAt(0) == "S") {
            resultado = "La palabra " + palabra + " empieza por s";
        }

        if (palabra.charAt(palabra.length - 1) == "s" || palabra.charAt(palabra.length - 1) == "S") {
            if (resultado == "") {
                resultado = "La palabra " + palabra + " termina en s.";
            } else {
                resultado += ", y también termina en s.";
            }
        }

        /*Muestra el resultado*/
        if (resultado == "") {
            alert("La palabra " + palabra + " ni empieza ni termina con la letra s.");
        } else if (resultado.charAt(resultado.length - 1) != ".") {
            alert(resultado + ".");
        } else {
            alert(resultado);
        }
    }

    let eleccion = prompt("Elige la opción 1 ó 2:")[0];
    if (eleccion == "1") {
        ej1op1();
    } else if (eleccion == "2") {
        ej1op2();
    } else {
        alert("No has elegido ninguna opción correcta.");
    }
}

/*Ejercicio 2*/
const ej2 = () => {
    let frase = prompt("Escribe una frase, la que quieras (espacios extrictos):");
    let espacios = frase.split(" ");

    if (espacios.length == 1) {
        alert("La frase: " + frase + " (que mas que frase es una palabra...) tiene, lógicamente, 1 sola palabra.");
    } else {
        alert("La frase: " + frase + ", tiene " + espacios.length + " palabras.");
    }
}

/*Ejercicio 2: Extra*/
const ej2Extra = () => {
    let frase = prompt("Escribe una frase, la que quieras:");
    let espacios = frase.split(" ");
    let cont = 0;
    let nuevaPalabra = "";

    for (let i = 0; i < espacios.length; i++) {
        /*Comprueba palabras reales y no espacios vacios, y construye una nueva cadena para mostrar.*/
        if (espacios[i] != "") {
            nuevaPalabra += espacios[i] + " ";
            cont++;
        }
    }

    /*Muestra los datos*/
    if (cont == 1) {
        alert("La frase: " + frase + " (que mas que frase es una palabra...) tiene, lógicamente, 1 sola palabra.");
    } else {
        alert("La frase: " + nuevaPalabra + ", tiene " + cont + " palabras.");
    }
}