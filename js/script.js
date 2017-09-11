"use strict";

var showSendQuestion = document.querySelector(".btn-contact-us");
var closeSendQuestion = document.querySelector(".close");
var popupSendQuestion = document.querySelector(".modal-contact-us");

if(showSendQuestion){
	showSendQuestion.onclick = function (evt) {
		evt.preventDefault();
		popupSendQuestion.classList.toggle("modal-show");
	}
}

if(closeSendQuestion){
  closeSendQuestion.onclick = function (evt) {
    evt.preventDefault();
    popupSendQuestion.classList.remove("modal-show");
  }
}

