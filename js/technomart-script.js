var mapLink = document.querySelector(".go-to-map");
var modalMapWindow = document.querySelector(".modal-map-window");
var closeMapWindow = document.querySelector(".modal-map-window::after");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMapWindow.classList.add("modal-show");
});

closeMapWindow.addEventListener("", function () {
    evt.preventDefault();
    modalMapWindow.classList.remove("modal-show");
});