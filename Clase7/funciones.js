console.log("Hola que tal");

/*
$(document).ready( function(){
    alert("Hellow que sucede realmente!!");
});
*/

function hola() {
    alert("SOCIAL CREDIT SCORE -99999999999999999");
}




function cambiarAzul(){

    document.getElementById("poroto").style.backgroundColor = "blue";

}



function cambiarVerde(){

    document.getElementsByClassName("almejas")[0].style.backgroundColor = "green";

}



function cambiarOriginal(){

    document.getElementById("poroto").style.backgroundColor = "red";

    //NO SE PUEDE POR getElementBy NAME 
}


function rotarDiv(){

    document.getElementById("poroto1").classList.add("almejas");
    document.getElementById("poroto2").classList.add("almejas");
    document.getElementById("poroto3").classList.add("almejas");
    document.getElementById("poroto4").classList.add("almejas");
    

}

function detenerRotarDiv(){

    document.getElementById("poroto1").classList.remove("almejas");
    document.getElementById("poroto2").classList.remove("almejas");
    document.getElementById("poroto3").classList.remove("almejas");
    document.getElementById("poroto4").classList.remove("almejas");
    

}

function mostrar(){

    var primero = $("#primerN").val();
    var segundo = $("#segundoN").val();

    console.log("Los numeros ingresados son: "+ primero + " y " + segundo +".")

}

function sumar(){

    var primero = $("#primerN").val();
    var segundo = $("#segundoN").val();
    var resultado;

    resultado = primero + segundo;

    console.log("La suma de ambos numeros es: "+ resultado)

}