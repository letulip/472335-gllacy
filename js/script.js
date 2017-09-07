"use strict";

var show = document.querySelector(".header-user-search");
var popup = document.querySelector(".modal-search");

// show.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.toggle("modal-show");
// });

show.onclick = function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
}