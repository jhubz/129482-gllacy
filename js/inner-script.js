var searchOpen = document.querySelector(".search-toggle > a");
var loginOpen = document.querySelector(".login-toggle > a");

var searchForm = document.querySelector(".search-form form");
var searchSearch = searchForm.querySelector("[name=search]");

var loginForm = document.querySelector(".login-form form");
var loginEmail = loginForm.querySelector("[name=login-email]");
var loginPassword = loginForm.querySelector("[name=password]");

try {
	var storageLoginEmail = localStorage.getItem("storageLoginEmail");
} catch (err) {
	
}

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