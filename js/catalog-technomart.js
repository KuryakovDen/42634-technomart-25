
var perforatorBuy = document.querySelector(".perforator-buy");
var modalCart = document.querySelector(".modal-cart");
var closeModalCart = document.querySelector(".button-feedback");


/*3*/

perforatorBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-show");
});

closeModalCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalCart.classList.contains("modal-show")) {
            evt.preventDefault();
            modalCart.classList.remove("modal-show");
        }
    }
});