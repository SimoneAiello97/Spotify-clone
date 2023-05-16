let loginForm = document.querySelector("form");
let loginBtn = document.getElementById("loginBtn");
let userName = document.getElementById("userName");
let users = [];

loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	if (localStorage.getItem("Username")) {
		users = JSON.parse(localStorage.getItem("Username"));
	}
	users.push(userName.value);
	localStorage.setItem("Username", JSON.stringify(users));
	//window.location.href = "home.html";
});

loginBtn.addEventListener("click", function () {
	loginForm.submit();
});
