function botao (){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>");
    //alert("Parabens seu pc esta cheio de virus agora mano mds") 
}

function eae(){
    //window.open("https://www.youtube.com/watch?v=u1ZrOrKh-pU");
    window.location.href = "https://www.youtube.com/watch?v=u1ZrOrKh-pU";
}

function doido(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function carregar(){
    alert("eae")
}
function funcaoChange (elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var valida;
    if (idade >= 18){
        validar = true 
    }else{
        validar = false
    }
    return

    }



var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));
*/

//alerta(soma(5, 10));





/*
var d = new Date();
alert (d.getMonth()+1);
*/

/*
var count;
for(count=3; count <= 5; count++){
    alert(count)
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome: "manga", cor: "laranja"}, {nome: "melancia", cor: "verde"}]
console.log(frutas);
alert(frutas[0].nome);
*/



//var fruta = {nome: "manga", cor: "laranja"}
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["erick", "choji", "piero"];
//lista.push("doidao")
//lista.pop();    
//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" - "))


//var nome = "Erick eae choji";
//var idade = 29;
//var idade2 = 300;
//var frase = "Repetindo que o Erick é bem doidão e muito doidão mesmo";

//alert("Bem vindo " + nome + " você tem " + idade + " anos ");

//alert(idade+idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase()); 
//alert(frase.replace("Erick", "Choji"));