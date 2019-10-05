var arr1 = []
document.getElementById("intro").innerHTML = "Toque uno de los botones para evaluar la funcion:"
document.getElementById("par").innerHTML = "Pares"
document.getElementById("impar").innerHTML = "Impares"
document.getElementById("generador").innerHTML = "Generar numeros"

/*for(i = 0; i < 20; i++) {
arr1[i] = Math.floor( Math.random() * 100 );
}*/

function generadorAleatorio() {
    for(i = 0; i < 20; i++) {
        arr1[i] = Math.floor( Math.random() * 100 );
        }
    document.getElementById("arreglo").innerHTML = arr1.join("  ")
    return parseInt((Math.random()+0.01)*20)
    
}

function par(){
    //esta funcion me devuelve valores pares
    document.getElementById("mostrador").innerHTML = arr1.filter(function(x){
        return x % 2 == 0;
    })
}

function impar(){
    //esta funcion me devuelve valores impares
    document.getElementById("mostrador").innerHTML = arr1.filter(function(x){
        return x % 2 > 0;
    })
}