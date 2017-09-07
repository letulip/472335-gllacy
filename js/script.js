"use strict";

var show = document.querySelector(".header-user-search");
var popup = document.querySelector(".modal-login");

function modalShow(evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
}

show.addEventListener("click", modalShow(evt));