var mapLink = document.querySelector(".go-to-map");
var modalMapWindow = document.querySelector(".modal-map-window");
var closeMapWindow = document.querySelector(".button-map");

var feedbackLink = document.querySelector(".feedback-link");
var modalFeedbackForm = document.querySelector(".modal-feedback-form");
var closeFeedbackForm = document.querySelector(".button-feedback");

var perforatorBuy = document.querySelector(".perforator-buy");
var modalCart = document.querySelector(".modal-cart-wrapper");
var closeModalCart = document.querySelector(".button-map");



mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMapWindow.classList.add("modal-show");
});

closeMapWindow.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMapWindow.classList.remove("modal-show");
});

/*2*/

feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFeedbackForm.classList.add("modal-show");
});

closeFeedbackForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedbackForm.classList.remove("modal-show");
});

/*3*/

perforatorBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-show");
});

closeModalCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});
