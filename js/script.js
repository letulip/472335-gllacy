"use strict";

// var showSearch = document.querySelector(".header-user-search");
// var popupSearch = document.querySelector(".modal-search");
// var showLogin = document.querySelector(".header-user-login");
// var popupLogin = document.querySelector(".modal-login");
// var showCart = document.querySelector(".header-user-cart");
// var popupCart = document.querySelector(".modal-cart");
var showSendQuestion = document.querySelector(".btn-contact-us");
var popupSendQuestion = document.querySelector(".modal-contact-us");

// show.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.toggle("modal-show");
// });

// showSearch.onclick = function (evt) {
// 	evt.preventDefault();
// 	popupSearch.classList.toggle("modal-show");
// }

// showLogin.onclick = function (evt) {
// 	evt.preventDefault();
// 	popupLogin.classList.toggle("modal-show");
// }
if(showSendQuestion){
	showSendQuestion.onclick = function (evt) {
		evt.preventDefault();
		popupSendQuestion.classList.toggle("modal-show");
	}
}
// if(showCart){
// 	showCart.onclick = function (evt) {
// 		evt.preventDefault();
// 		popupCart.classList.toggle("modal-show");
// 	}
// }
