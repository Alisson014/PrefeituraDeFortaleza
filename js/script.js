const menu = document.querySelector(".menuLinksCollapse");
var IsAtiv = false;
function ShowMenu(){
    IsAtiv = !IsAtiv;

    console.log(IsAtiv);
    if (IsAtiv){
        menu.classList.add("Appear");
    } else{
        menu.classList.remove("Appear");
    }
}