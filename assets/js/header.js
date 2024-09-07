let burgerBtn = document.getElementById("header__burger")
let popUp = document.getElementById("header__pop-up")
let popUpBackground = document.getElementById("header__pop-up__background")

let isPopUpAvailable = false;
function toggle(){
    if(isPopUpAvailable){
        popUp.style.display = "none";
        popUpBackground.style.display = "none";
    }else{
        popUp.style.display = "block";
        popUpBackground.style.display = "block";
    }
    isPopUpAvailable = !isPopUpAvailable;
}

burgerBtn.addEventListener("click", (ev) => {
    toggle()
});

popUpBackground.addEventListener("click", (ev) => {
    toggle()
})