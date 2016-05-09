/*На странице каталога не работает, потому что не может найти форму обратной связи...*/

var feedbackOpen = document.querySelector(".map-contacts .btn");
var feedback = document.querySelector(".feedback-form");
var searchOpen = document.querySelector(".search-toggle > a");
var loginOpen = document.querySelector(".login-toggle > a");
var modalOverlay = document.querySelector(".modal-overlay");
var feedbackClose = document.querySelector(".close-feedback-form");

var feedbackForm = feedback.querySelector("form");
var feedbackName = feedbackForm.querySelector("[name=name]");
var feedbackEmail = feedbackForm.querySelector("[name=feedback-email]");
var feedbackText = feedbackForm.querySelector("[name=feedback-text]");

var searchForm = document.querySelector(".search-form form");
var searchSearch = searchForm.querySelector("[name=search]");

var loginForm = document.querySelector(".login-form form");
var loginEmail = loginForm.querySelector("[name=login-email]");
var loginPassword = loginForm.querySelector("[name=password]");

var subscribeForm = document.querySelector(".subscribe-form form");
var subscribeEmail = subscribeForm.querySelector("[name=subscribe-email]");

var storageFeedbackName = localStorage.getItem("storageFeedbackName");
var storageFeedbackEmail = localStorage.getItem("storageFeedbackEmail");
var storageLoginEmail = localStorage.getItem("storageLoginEmail");

/*Под вопросом*/
var label = document.querySelectorAll(".field-container label");
var input = document.querySelectorAll(".field-container input");
/*Под вопросом*/

feedbackOpen.addEventListener("click", function (event) {
	event.preventDefault();
	feedback.classList.remove("hide");
	modalOverlay.classList.remove("hide");
	
	if (storageFeedbackName) {
		feedbackName.value = storageFeedbackName;
		feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
	
	if (storageFeedbackEmail) {
		feedbackEmail.value = storageFeedbackEmail;
		feedbackName.focus();
	} else {
		feedbackName.focus();
	}
	
	if (storageFeedbackName && storageFeedbackEmail) {
		feedbackName.value = storageFeedbackName;
		feedbackEmail.value = storageFeedbackEmail;
		feedbackText.focus();
	} else {
		feedbackName.focus();
	}
	
});

feedbackClose.addEventListener("click", function (event) {
	event.preventDefault();
	feedback.classList.add("hide");
	modalOverlay.classList.add("hide");
});

feedbackForm.addEventListener("submit", function (event) {
	if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
		event.preventDefault();
		/*Трясучка*/
	} else {
		localStorage.setItem("storageFeedbackName", feedbackName.value);
		localStorage.setItem("storageFeedbackEmail", feedbackEmail.value);
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (!feedback.classList.contains("hide")) {
			feedback.classList.add("hide");
			modalOverlay.classList.add("hide");
		}
	}
});

searchOpen.addEventListener("mouseover", function () {
	searchSearch.focus();
});

loginOpen.addEventListener("mouseover", function () {
	if (storageLoginEmail) {
		loginEmail.value = storageLoginEmail;
		loginPassword.focus();
	} else {
		loginEmail.focus();
	}
});

loginForm.addEventListener("submit", function (event) {
	if (!loginEmail.value || !loginPassword.value) {
		event.preventDefault();
		/*Трясучка*/
	} else {
		localStorage.setItem("storageLoginEmail", loginEmail.value);
	}
});

subscribeForm.addEventListener("submit", function (event) {
	if (!subscribeEmail.value) {
		event.preventDefault();
		/*Трясучка*/
	}
});



/*Как связать отдельный input с отдельным label?*/
/*
	Не получится ли то, что они будут отображаться, когда ВСЕ input буду заполнены?
*/
/*
if (input) {
	label.classList.remove("hide");
}
*/