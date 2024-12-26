const menu = document.querySelector(".menuLinksCollapse");
var IsAtiv = false;
function ShowMenu(){
    IsAtiv = !IsAtiv;

    if (IsAtiv){
        menu.classList.add("Appear");
    } else{
        menu.classList.remove("Appear");
    }
}


const bgs = ["img/exer01.jpg","img/exer02.jpg","img/exer03.jpg","img/exer04.jpg"];
const imageBg = document.getElementById("imgBg");
const conteudo = document.querySelector(".heroConteudo");
var ind = 0;

imageBg.src = bgs[ind];

Bg1();
function Bg1(){
    if (ind >= bgs.length){
        ind = 0;
    }
    conteudo.classList.add("BgBlur");
    setTimeout(() => {
        imageBg.src = bgs[ind];
        conteudo.classList.remove("BgBlur");
    }, 1000);
    
    setTimeout(() => {
        ind ++;
        
        Bg2();
    }, 8000);    
}


function Bg2(){
    if (ind >= bgs.length){
        ind = 0;
    }
    
    conteudo.classList.add("BgBlur");
    setTimeout(() => {
        imageBg.src = bgs[ind];
        conteudo.classList.remove("BgBlur");
    }, 1000);
    
    setTimeout(() => {
        ind ++;
        
        Bg1();
    }, 8000);    
}




function ValidarDados(){ 
    var idade = parseFloat(document.forms["formIMC"]["idade"].value);
    var peso = parseFloat(document.forms["formIMC"]["peso"].value);
    var altura = parseFloat(document.forms["formIMC"]["altura"].value);

    try {
        if (idade <= 0 || idade > 122){
            throw new Error("Idade inválida");
        }
        if (idade < 18){
            throw new Error("Apenas para adultos");
            
        }
        
        if (isNaN(idade) || isNaN(peso) || isNaN(altura)){
            throw new Error("Digite números");
        }
        CalcularIMC(idade, peso, altura);
        
    } catch (error) {
        document.getElementById("Mensage").innerHTML = error;
        
        setTimeout(()=>{
            document.getElementById("Mensage").innerHTML = "";
        }, 5000);
        return false;
    }
    finally{
        return false;
        
    }
}



function CalcularIMC(idade, peso, altura){
    
    const pai = document.querySelector(".ResultadoIMC");
    var filho = document.createElement("h1");
    
    var circulos = document.querySelectorAll(".Circurlo");
    var quadrados = document.querySelector(".contentQuadrados");
    var Esp = document.getElementById("Esperando");
    
    imc = peso/altura**2;

    Esp.classList.add("sumir");
    quadrados.classList.add("sumir");
    circulos.forEach(c => {
        c.classList.add("sumir");
    });
    
    if ( idade < 60){
        // console.log("Adulto");
        if (imc < 18.5){
            // console.log("Abaixo do Peso");
            filho.innerHTML = "Abaixo do Peso";
        } else if (imc <= 24.9){
            // console.log("Peso Normal");
            filho.innerHTML = "Peso Normal";
        } else if(imc <= 29.9){
            // console.log("Excesso de peso");
            filho.innerHTML = "Excesso de peso";
        } else if(imc <= 34.9){
            // console.log("Obesidade classe 1");
            filho.innerHTML = "Obesidade classe 1";
        } else if(imc <= 39.9){
            // console.log("Obesidade classe 2");
            filho.innerHTML = "Obesidade classe 2";
        } else if(imc >= 40){
            // console.log("Obesidade classe 3");
            filho.innerHTML = "Obesidade classe 3";
        }
    } else{
        // console.log("idoso");
        if (imc <= 22){
            // console.log("Abaixo do peso");
            filho.innerHTML = "Abaixo do Peso";
        } else if(imc < 27) {
            // console.log("Adequado");
            filho.innerHTML = "Adequado";
        } else{
            // console.log("Sobrepeso");
            filho.innerHTML = "Sobrepeso";
        }
    }

    filho.classList.add("Imc");
    pai.appendChild(filho);
    
}


const Inputs = document.querySelectorAll(".DadosIMC input");

function Redefirnir(){
    Inputs.forEach(element => {
        element.value = "";
    });

    const pai = document.querySelector(".ResultadoIMC");
    var filhos = pai.childElementCount;
    if (filhos > 4){
        pai.removeChild(document.querySelector(".Imc"));
    }

    // 

    document.getElementById("Esperando").classList.remove("sumir");
    document.querySelector(".contentQuadrados").classList.remove("sumir");
    document.querySelectorAll(".Circurlo").forEach(c => {
        c.classList.remove("sumir");
    });

}