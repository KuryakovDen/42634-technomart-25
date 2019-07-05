
var mapLink = document.querySelector(".go-to-map");
var modalMapWindow = document.querySelector(".modal-map-window");
var closeMapWindow = document.querySelector(".button-map");

var feedbackLink = document.querySelector(".feedback-link");
var modalFeedbackForm = document.querySelector(".modal-feedback-form");
var closeFeedbackForm = document.querySelector(".button-feedback");

var perforatorBuy = document.querySelector(".perforator-buy");
var modalCart = document.querySelector(".modal-cart-wrapper");
var closeModalCart = document.querySelector(".button-map");

var userFullname = modalFeedbackForm.querySelector("[name=fullname]");
var userEmail = modalFeedbackForm.querySelector("[name=email]");
var userMessage = modalFeedbackForm.querySelector("textarea");

var form = modalFeedbackForm.querySelector(".form-feedback");
var localStorageFullname = localStorage.getItem("userFullname");

var perforatorBuySecond = document.querySelector(".perforator-buy");
var modalCartFeedback = document.querySelector(".modal-cart");
var closeModalCartSecond = document.querySelector(".button-feedback");

var isStorageSupport = true;
var localStorageFullname = "";

try {
    localStorageFullname = localStorage.getItem("userFullname");
} catch (err) {
    isStorageSupport = false;
}


/*1*/

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
    if (localStorageFullname) {
        userFullname.value = localStorageFullname;
        userEmail.focus();
    } else {
        userFullnam.focus();
    }
    
    if (localStorageFullname) {
        userFullname.value = localStorageFullname;
    }
});

closeFeedbackForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedbackForm.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!userFullname.value || !userEmail.value || !userMessage.value) {
        evt.preventDefault();
        modalFeedbackForm.classList.add("modal-error")
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userFullname", userFullname.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalFeedbackForm.classList.contains("modal-show") || modalMapWindow.classList.contains("modal-show")) {
            evt.preventDefault();
            modalFeedbackForm.classList.remove("modal-show");
            modalMapWindow.classList.remove("modal-show");
        }
    }
});


/*3*/

perforatorBuySecond.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCartFeedback.classList.add("modal-show");
});

closeModalCartSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCartFeedback.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalCartFeedback.classList.contains("modal-show")) {
            evt.preventDefault();
            modalCartFeedback.classList.remove("modal-show");
        }
    }
});
