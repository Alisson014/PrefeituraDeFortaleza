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
