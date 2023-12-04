//console.log("probando si esta conectado")
//IMPORTANTE!! no se puede usar las clases como tal, solo son plantillas que contienen todas nuestras funciones
class Ejercicios{
    Ejercicio1(){
        let a = 3, b = 7, r = 0
        r = 2 * a + b - a % 3
        //console.log("El resultado es ", r)
        document.getElementById("Respuesta1").innerText = r;
        


        

    }
    Ejercicio2(){
        let a = 10, b = 4, z = 0
        z = a * b + 3 % a + b
        document.getElementById("Respuesta2").innerHTML = z;
    }
    Ejercicio3(){
        let a = 6, b = 2, w = 0
        w = a - b + 2 * a % b
        document.getElementById("Respuesta3").innerHTML = w;
    }
    Ejercicio4(){
        let a = 8, b = 5, v = 0
        v = 2 * b + a / 2 + 4 * b % a
        document.getElementById("Respuesta4").innerHTML = v;
    }
    Ejercicio5(){
        let a = 12, b = 9, u = 0
        u = b - a + 3 * a % b
        document.getElementById("Respuesta5").innerHTML = u;
    }

    Ejercicio6(){
        let resultante = 0
        resultante = (5 + 3 * 2) + 9 > 3 * 5  * 14 % 3
        document.getElementById("Respuesta6").innerHTML = resultante;
    }

    Ejercicio7(){
        let resultante = 0
        resultante = 2 * ( 4 - 10 + 8) / 2 * 36 * (1 / 2)
        document.getElementById("Respuesta7").innerHTML = resultante;

    }

    Ejercicio8(){
        let resultante = 0
        resultante = 260 / 12 + 54 % 3 - 85 % 7
        document.getElementById("Respuesta8").innerHTML = resultante;
    }

    Ejercicio9(){
        let resultante = 0
        resultante = ( 48 < 2 * 3 ) || ( 2 * 7 < 12 )
        document.getElementById("Respuesta9").innerHTML = resultante;
    }

    Ejercicio10(){
        let resultante = 0
        resultante = ( ( 8 > 2 ) || ( 932 < 23 ) ) && 4 == 2
        document.getElementById("Respuesta10").innerHTML = resultante;
    }

    //apartir de aqui son los ejercicios tochos, del 11 al 60....
    Ejercicio11(){
        let n1, n2, rr;
        n1=parseInt(document.getElementById("n1").value);
        n2=parseInt(document.getElementById("n2").value);

            rr=n1 + n2;
            document.getElementById("Respuesta11").innerHTML = rr;
        
        
    }

    //Ejercicio 12
    Ejercicio12(){
        let n1, n2, rr;
        n1 = parseFloat(document.getElementById("n1").value);
        n2 = parseFloat(document.getElementById("n2").value);
        rr = (n1 * n2) / 2;
        console.log(rr)
        document.getElementById("Respuesta12").innerHTML = (rr)
        


    }

    Ejercicio13(){
        let n1, rr;
        n1 = parseInt(document.getElementById("n1").value);
        rr = n1 % 2;
        if (rr == 0) {
            console.log("Es par")
            document.getElementById("Respuesta13").innerHTML = n1 + " es par";
        }else {
            console.log("Impar")
            document.getElementById("Respuesta13").innerHTML = n1 + " es impar";
        }
    }

    Ejercicio14(){
        let n1, n2, operador, rr;
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        operador = document.getElementById("operador").value;
        if (operador === "+") {
            rr = +n1 + +n2;
        } else if (operador === "-") {
            rr = n1 - n2;
        } else if (operador === "*") {
            rr = n1 * n2;
        } else if (operador === "/") {
            rr = n1 / n2;
        } else {
            alert("Ingresa un operador valido!!");
        }
        document.getElementById("Respuesta14").innerHTML = "Resultado es " + rr;
    }

    //TABLA DE MULTIPLICAR
    Ejercicio15(){
        let n1, i, rr;
        n1 = document.getElementById("n1").value;
        document.getElementById("Respuesta15").innerHTML = "La tabla del " + n1
        for (i = 1; i <= 10; i++) {
            rr = n1 * i;
            document.getElementById("Respuesta15").innerHTML += "<br>" + n1 + " * " + i + " = " + rr;
           
        }
        
    }



    Ejercicio16(){
        let n1="", n2="", rr="";
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        rr = n1 + " " + n2;
        console.log(rr)
        document.getElementById("Respuesta16").innerHTML = rr;
    }


    //MAYOR DE TRES EJERCICIO
    Ejercicio17(){
        let n1, n2, n3, rr;
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        n3 = document.getElementById("n3").value;
        if (n1>n2 && n1>n3) {
            document.getElementById("Respuesta17").innerHTML = n1 + " es el mayor de los tres";
        }else if(n2>n1 && n2>n3) {
            document.getElementById("Respuesta17").innerHTML = n2 + " es el mayor de los tres";
        }else if (n3>n1 && n3>n2) {
            document.getElementById("Respuesta17").innerHTML = n3 + " es el mayor de los tres";
        } else {
            document.getElementById("Respuesta17").innerHTML = "No hay mayores";
        }
    }
    

    //EDAD MINIMA PARA VOTAR
    Ejercicio18(){
        let n1;
        n1 = document.getElementById("n1").value;
        if (n1>=18) {
            document.getElementById("Respuesta18").innerHTML = "Eres apto para sufragar";
        } else {
            document.getElementById("Respuesta18").innerHTML = "No es apto para sufragar";
        }
    }


    //CALCULADORA BMI
    Ejercicio19(){
        let n1, n2, rr;
        n1 = parseFloat(document.getElementById("n1").value);
        n2 = parseFloat(document.getElementById("n2").value);
        rr = (n1 / n2 **2).toFixed(2);
        document.getElementById("Respuesta19").innerHTML = "Su BMI es " + rr;
        if (rr>=18.5 && rr<=24.9) {
            document.getElementById("Respuesta19").innerHTML += "<br> Su rango de peso es saludable";
        } else {
            document.getElementById("Respuesta19").innerHTML += "<br> No se encuentra en el rango de peso saludable";
        }
    }


    //NUMERO POSITIVO, NEGATIVO O CERO
    Ejercicio20(){
        let n1=0;
        n1 = document.getElementById("n1").value
        if (n1>0){
            document.getElementById("Respuesta20").innerHTML = "El numero ingresado es positivo";
        } else if (n1<0) {
            document.getElementById("Respuesta20").innerHTML = "El numero ingresado es negativo";
        } else {
            document.getElementById("Respuesta20").innerHTML = "Es cero";
        }
    }



    //Año bisiesto EJERCICIO
    Ejercicio21(){
        let n1, c1, c2, c3;
        n1 = document.getElementById("n1").value;
        c1 = n1 % 4;
        c2 = n1 % 100;
        c3 = n1 % 400;
        if (c1 == 0 && c2 > 0) {
            document.getElementById("Respuesta21").innerHTML = "Es Año bisiesto";

        } else if (c2 == 0 && c3 == 0) {
            document.getElementById("Respuesta21").innerHTML = "Es Año bisiesto";
        } else {
            document.getElementById("Respuesta21").innerHTML = "No es Año bisiesto";
        }

    }



    //SIGNO DEL ZODIACO
    Ejercicio22(){
        let n1=0, n2=0;
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        if (n1 >= 21 && n2 == 3 || n1 <=19 && n2 == 4) {
            document.getElementById("Respuesta22").innerHTML = "Eres aries";

        } else if (n1 >= 20 && n2 == 4 || n1 <= 20 && n2 == 5) {
            document.getElementById("Respuesta22").innerHTML = "Eres tauro";
        } else if (n1 >= 21 && n2 == 5 || n1 <= 21 && n2 == 6) {
            document.getElementById("Respuesta22").innerHTML = "Eres geminis";
        } else if (n1 >= 21 && n2 == 6 || n1 <= 22 && n2 == 7) {
            document.getElementById("Respuesta22").innerHTML = "Eres cancer";
        } else if (n1 >= 23 && n2 == 7 || n1 <= 22 && n2 == 8) {
            document.getElementById("Respuesta22").innerHTML = "Eres leo";
        } else if (n1 >= 23 && n2 == 8 || n1 <= 22 && n2 == 9) {
            document.getElementById("Respuesta22").innerHTML = "Eres virgo";
        } else if (n1 >= 23 && n2 == 9 || n1 <= 22 && n2 == 10) {
            document.getElementById("Respuesta22").innerHTML = "Eres libra";
        } else if (n1 >= 23 && n2 == 10 || n1 <= 21 && n2 == 11) {
            document.getElementById("Respuesta22").innerHTML = "Eres escorpio";
        } else if (n1 >= 22 && n2 == 11 || n1 <= 21 && n2 == 12) {
            document.getElementById("Respuesta22").innerHTML = "Eres sagitario";
        } else if (n1 >= 22 && n2 == 12 || n1 <= 19 && n2 == 1) {
            document.getElementById("Respuesta22").innerHTML = "Eres capricornio";
        } else if (n1 >= 20 && n2 == 1 || n1 <= 18 && n2 == 2) {
            document.getElementById("Respuesta22").innerHTML = "Eres acuario";
        } else if (n1 >= 19 && n2 == 2 || n1 <= 20 && n2 == 3) {
            document.getElementById("Respuesta22").innerHTML = "Eres piscis";
        }
    }






    //SEGUNDA QUINCENA
    Ejercicio23() {
        let n1=0;
        n1 = document.getElementById("n1").value;
        if (n1 >= 1 && n1 <= 15) {
            document.getElementById("Respuesta23").innerHTML = "Es la primera quincena";
        } else {
            document.getElementById("Respuesta23").innerHTML = "Es la segunda quincena";
        }
    }




    //DIA DE LA SEMANA
    Ejercicio24() {
        let n1=0;
        n1 = document.getElementById("n1").value;
        if (n1>0 && n1<=7) {
            if (n1 == 1) {
                document.getElementById("Respuesta24").innerHTML = " es Domingo";
            } else if (n1 == 2) {
                document.getElementById("Respuesta24").innerHTML = " es Lunes";
            } else if (n1 == 3) {
                document.getElementById("Respuesta24").innerHTML = " es Martes";
            } else if (n1 == 4) {
                document.getElementById("Respuesta24").innerHTML = " es Miercoles";
            } else if (n1 == 5) {
                document.getElementById("Respuesta24").innerHTML = " es Jueves";
            } else if (n1 == 6) {
                document.getElementById("Respuesta24").innerHTML = " es Viernes";
            } else if (n1 == 7) {
                document.getElementById("Respuesta24").innerHTML = " es Sabado";
            }
        }
    }


    //FRASES IGUALES
    Ejercicio25() {
        let n1="", n2="";
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        if (n1 == n2) {
            document.getElementById("Respuesta25").innerHTML = "Las frases son iguales";
        } else {
            document.getElementById("Respuesta25").innerHTML = "Las frases no son iguales";
        }
    }




    //CALCULADORA DE DESCUENTO
    Ejercicio26() {
        let n1=0, n2=0, rr=0, desc=0;
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        desc = n1 * (n2/100);
        rr = n1 - desc;
        console.log(rr)
        document.getElementById("Respuesta26").innerHTML = "Descuento aplicado : " + n2;
        document.getElementById("Respuesta26").innerHTML += "<hr><br> Total + descuento $" + rr;
    }




    //CALCULADORA DE FACTURA CON IMPUESTOS
    Ejercicio27() {
        let n1=0, n2=0, iva=0, rr=0;
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        iva = n1 * (n2/100);
        rr = +n1 + +iva;
        console.log(rr)
        document.getElementById("Respuesta27").innerHTML = "Total : $" + n1;
        document.getElementById("Respuesta27").innerHTML += "<br> IVA : " + n2;
        document.getElementById("Respuesta27").innerHTML += "<hr><br> Total + IVA : $" + rr;

    }


    //CALCULADORA DE SUELDO CON AUMENTO
    Ejercicio28() {
        let n1=0, n2=0, rr=0, aumento=0;
        n1 = document.getElementById("n1").value;
        n2 = parseInt(document.getElementById("n2").value);
        aumento = n1 * (n2/100);
        rr = +n1 + +aumento;
        document.getElementById("Respuesta28").innerHTML = "Su sueldo + aumento actualmente es de $" + rr;
    }



    //CALCULADORA DE MULTIPLES PRODUCTOS
    Ejercicio29() {
        let n1=0, n2=0, desc=0, rr=0, totalsupremo=0;
        n1 = document.getElementById("n1").value //cantidad
        n2 = document.getElementById("n2").value //valor
        rr = n2 * n1;
        if (rr >100) {
            desc = rr * 0.1;
            totalsupremo = rr - desc;
            document.getElementById("Respuesta29").innerHTML = "Descuento aplicado : " + desc;
            document.getElementById("Respuesta29").innerHTML += "<hr><br>Total + Descuento : $" + totalsupremo;
        } else {
            document.getElementById("Respuesta29").innerHTML = "Total : $ " + rr;
        }
    }




    //IMPUESTO SOBRE SALARIO
    Ejercicio303132() {
        let n1=0, cin=0, die=0, quin=0, totalimp=0;
        n1 = document.getElementById("n1").value;
        cin = n1 * 0.05;
        die = n1 * 0.1;
        quin = n1 * 0.15;
        if (n1<=10000) {
            totalimp = n1 - cin;
            document.getElementById("Respuesta303132").innerHTML = "Impuesto aplicado : 5%";
            document.getElementById("Respuesta303132").innerHTML += "<hr><br>Total : $ " + totalimp;

        } else if (n1>10000 && n1 <= 20000) {
            totalimp = n1 - die;
            document.getElementById("Respuesta303132").innerHTML = "Descuento aplicado : 10%";
            document.getElementById("Respuesta303132").innerHTML += "<hr><br>Total : $" + totalimp;
        } else {
            totalimp = n1 - quin;
            document.getElementById("Respuesta303132").innerHTML = "Descuento aplicado : 15%";
            document.getElementById("Respuesta303132").innerHTML += "<hr><br> Total : $" + totalimp;
        }
    }




    //BONO POR ANTIGUEDAD
    Ejercicio33() {
        let n1=0, rr=0, five=0;
        n1 = document.getElementById("n1").value;
        five = (450*3)*0.05;
        rr = +450 + +five;
        if (n1>5) {
            document.getElementById("Respuesta33").innerHTML = "Por el tiempo prestado en la empresa se le asigna un bono del 5% sumado a su salario : " + rr;
        } else {
            document.getElementById("Respuesta33").innerHTML = "No recibe bono, ha trabajado por poco tiempo";
        }
    }


    //COSTO DE ENVIO DISTANCIA
    Ejercicio34() {
        let n1=0; 
        n1 = document.getElementById("n1").value;
        if (n1<50) {
            document.getElementById("Respuesta34").innerHTML = "El coste de envio es de $10";
        } else if (n1>=50) {
            document.getElementById("Respuesta34").innerHTML = "El coste de envio es de $20";
        }
    }



    //DESCUENTO LEALTAD CLIENTE
    Ejercicio35() {
        let n1=0;
        n1 = document.getElementById("n1").value;
        if (n1 > 500) {
            document.getElementById("Respuesta35").innerHTML = "En su siguiente compra se le dara un descuento del 10%";

        } else {
            document.getElementById("Respuesta35").innerHTML = "No se aplicara ningun descuento a su siguiente compra";
        }
    }


    //DESCUENTO VOLUMEN POR COMPRA
    Ejercicio36373839() {
        let n1=0, n2=0, rr=0, desc=0, total=0;
        n1 = document.getElementById("n1").value;
        n2 =document.getElementById("n2").value;
        rr = n1 * n2;
        if (n1>10 && n1<=50) {
            desc = n1 * 0.05;
            total = rr - desc;
            
            document.getElementById("Respuesta36373839").innerHTML = "Descuento : 5%";
            document.getElementById("Respuesta36373839").innerHTML += "<hr><br>Total : $" + total;

        } else if (n1>51 && n1 <=100) {
            desc = n1 * 0.1;
            total = rr - desc;
            document.getElementById("Respuesta36373839").innerHTML = "Descuento : 10%";
            document.getElementById("Respuesta36373839").innerHTML += "<hr><br>Total : $" + total;
        } else if (n1>100) {
            desc = n1 * 0.15;
            total = rr - desc;
            document.getElementById("Respuesta36373839").innerHTML = "Descuento : 15%";
            document.getElementById("Respuesta36373839").innerHTML += "<hr><br>Total : $" + total;
        } else {
            total = rr;
            document.getElementById("Respuesta36373839").innerHTML = "Descuento : 0%";
            document.getElementById("Respuesta36373839").innerHTML += "<hr><br>Total : $" + total;
        }
    }


    //COSTO SERVICIO
    Ejercicio40() {
        let n1=0, hour=2.65, rr=0, tt=0, desc=0;
        n1 = document.getElementById("n1").value;
        rr = n1 * hour;
        if (n1>10) {
            desc = (rr * 0.2).toFixed(2);
            tt = rr - desc;
            document.getElementById("Respuesta40").innerHTML = "Descuento : 20%"
            document.getElementById("Respuesta40").innerHTML += "<hr><br>total : $" + tt;
        } else {
            document.getElementById("Respuesta40").innerHTML = "Descuento : 0%"
            document.getElementById("Respuesta40").innerHTML += "<hr><br>total : $" + rr;
        }
    }


    //SUMA DE NUMEROS PARES
    Ejercicio41() {
        let i, sumatoria;
        sumatoria=0;
        for (i = 0; i <= 50; i+=2) {
            sumatoria = sumatoria + i;
            
        }
        document.getElementById("Respuesta41").innerHTML = "La sumatoria de los numeros pares es " + sumatoria;
    }



    //TABLA DE MULTIPLICAR HASTA EL 12 USANDO BUCLE FOR
    Ejercicio42() {
        let n1=0, i=0, rr=0;
        n1 = document.getElementById("n1").value;
        for (i = 1; i <= 12; i++) {
            rr = n1 * i;
            document.getElementById("Respuesta42").innerHTML += "<br>" + n1 + " * " + i + " = " + rr;
        }
    }




    //CONTADOR DE VOCALES
    Ejercicio43() {
        let n1="", rr=0, sub, cont=0, minus;
        n1 = document.getElementById("n1").value;
        minus = n1.toLowerCase();
        for (let i = 0; i < n1.length ; i++) {
            sub = minus.substring(i, i+1);
            if (sub=="a" || sub=="e" || sub=="i" || sub=="o" || sub=="u") {
                cont = cont + 1;
                
            }
        }
        document.getElementById("Respuesta43").innerHTML = "La cantidad de vocales que hay : " + cont;
    }



    //CONTADOR DE DIGITOS
    Ejercicio44() {
        let n1="", rr=0;
        n1 = document.getElementById("n1").value;
        rr = n1.length;
        document.getElementById("Respuesta44").innerHTML = "La cantidad de digitos que hay :" + rr;
    }



    //ADIVINA EL NUMERO
    //CORREGIR EL CODIGO 
    Ejercicio45() {
        let n1=0, azar, rr;
        n1 = document.getElementById("n1").value
        azar = parseInt(Math.random()*2);
        if (n1=azar) {
            document.getElementById("Respuesta45").innerHTML = "ACERTASTE BIEN AHI"
            alert("FELICIDADEEEES")
        } else {
            document.getElementById("Respuesta45").innerHTML = "No te rindas, sigue intentando"
            alert("TE EQUIVOCASTE")
        }
    }



    //CONTADOR DEL ALFABETO
    Ejercicio46() {
        let n1="", rr=0, longitud=0;
        n1 = document.getElementById("n1").value;
        longitud = n1.length;
        for (let i = 0; i < longitud ; i++) {
            if (n1.substring(i, i+1) >= "a" && n1.substring(i, i+1) <= "z" || (n1.substring(i, i+1) >= "A" && n1.substring(i, i+1) <= "Z") ) {
                rr = rr + 1;
            }
        }
        document.getElementById("Respuesta46").innerHTML = "Letras del alfabeto : " + rr;
    }

    //SUMA DE IMPARES
    Ejercicio47() {
        let i, sumatoria, impar;
        sumatoria=0;
        for (i = 1; i <= 100; i++) {
            impar = i % 2;
            if (impar > 0) {
                sumatoria = sumatoria + i;
            }
            
            
        }
        document.getElementById("Respuesta47").innerHTML = " La sumatoria de los numeros impares es " + sumatoria;
    }


    //CONTADOR DE CARACTERES
    Ejercicio48() {
        let n1="", rr=0;
        n1 = document.getElementById("n1").value;
        rr = n1.length;
        document.getElementById("Respuesta48").innerHTML = "La cantidad de caracteres que tiene es :" + rr;
    }
    
    


    //SUMA DE NUMEROS CON BUCLE WHILE
    Ejercicio49() {
        
    }






    



}


//Para poder usar una clase hay que crear una variable con el nombre igual de nuestra clase para ejecutar todo
let ope = new Ejercicios()
ope.Ejercicio1()
ope.Ejercicio2()
ope.Ejercicio3()
ope.Ejercicio4()
ope.Ejercicio5()
ope.Ejercicio6()
ope.Ejercicio7()
ope.Ejercicio8()
ope.Ejercicio9()
ope.Ejercicio10()
ope.Ejercicio11()
ope.Ejercicio12()
ope.Ejercicio13()
ope.Ejercicio14()
ope.Ejercicio15()
ope.Ejercicio16()
ope.Ejercicio17()
ope.Ejercicio18()
ope.Ejercicio19()
ope.Ejercicio20()
ope.Ejercicio21()
ope.Ejercicio22()
ope.Ejercicio23()
ope.Ejercicio24()
ope.Ejercicio25()
ope.Ejercicio26()
ope.Ejercicio27()
ope.Ejercicio28()
ope.Ejercicio29()
ope.Ejercicio303132()
ope.Ejercicio33()
ope.Ejercicio34()
ope.Ejercicio35()
ope.Ejercicio36373839()
ope.Ejercicio40()
ope.Ejercicio41()
ope.Ejercicio42()
ope.Ejercicio43()
ope.Ejercicio44()
ope.Ejercicio45()
ope.Ejercicio46()
ope.Ejercicio47()
ope.Ejercicio48()