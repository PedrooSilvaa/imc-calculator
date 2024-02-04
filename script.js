var imc;

function verificar(){
var peso = document.getElementById("caixa_peso").value;
var altura = document.getElementById("caixa_altura").value;

imc = peso / (altura * altura);

if(imc < 19){
    document.getElementById("saida").innerText = "Baixo peso";
}else if(imc < 25){
    document.getElementById("saida").innerText = "Peso Normal"; 
}else if(imc < 29){
    document.getElementById("saida").innerText = "Sobrepeso"; 
}else{
    document.getElementById("saida").innerText = "Obesidade";
}
}