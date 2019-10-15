const MIN_PASS_LENGTH = 11;
function validation2(form) {
	let error = false;
	let email = form.email.value;
	let password = form.password.value;
	let confirmation = form.confirmation.value;
	let email_inv = document.getElementById("email_inv");
	let password_inv = document.getElementById("password_inv");
	let confirmation_inv = document.getElementById("confirmation_inv");
	let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let points = email.split(".");
	if (email == "" || email == " ") {
		error = "You didn't enter email";
		email_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("email").style.border = "1px solid red";
	}
	if (!pattern.test(email)) {
		error = "Your email isn't valid";
		email_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("email").style.border = "1px solid red";
	}
	if (points.length > 2) {
		error = "You should use only one point";
		email_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("email").style.border = "1px solid red";
	}
	if (password === "" || password === " ") {
		error = "You didn't enter password";
		password_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("password").style.border = "1px solid red";
	}
    if (password.length < MIN_PASS_LENGTH) {
		error = `Password is too short. You should use ${MIN_PASS_LENGTH} symbols`;
		password_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("password").style.border = "1px solid red";
	}
    if (password !== confirmation) {
	    error = "Passwords don't match";
		confirmation_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("confirmation").style.border = "1px solid red";
	}		
	if(!error) 
		document.location.href = './index.html';
	}
function createConfirm() {
	document.getElementById("btn").style.display = "none";
	let input  = document.createElement("input");
	input.setAttribute("id", "confirmation");
	input.setAttribute("placeholder", "Подтвердите пароль");
	input.setAttribute("type", "password"); 
	let buttonGo = document.createElement("input");
	buttonGo.setAttribute("id", "go");
	buttonGo.setAttribute("value", "Регистрация");
	buttonGo.setAttribute("type", "button");
	buttonGo.setAttribute("onclick", "validation2(document.getElementById('form'))");  
	let parent = document.getElementById("parentDiv");
	parent.appendChild(input);
	parent.appendChild(buttonGo);
	let div = document.getElementById("parentDiv");
}

function validation(form) {
	let error = false;
	let email = form.email.value;
	let password = form.password.value;
	let email_inv = document.getElementById("email_inv");
	let password_inv = document.getElementById("password_inv");
	let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let points = email.split(".");
	if (email == "" || email == " ") {
		error = "You didn't enter email";
		email_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("email").style.border = "1px solid red";
	}
	if (!pattern.test(email)) {
		error = "Your email isn't valid";
		email_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("email").style.border = "1px solid red";
	}
	if (points.length > 2) {
		error = "You should use only one point";
		email_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("email").style.border = "1px solid red";
	}
	if (password === "" || password === " ") {
		error = "You didn't enter password";
		password_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("password").style.border = "1px solid red";
	}
    if (password.length < MIN_PASS_LENGTH) {
		error = `Password is too short. You should use ${MIN_PASS_LENGTH} symbols`;
		password_inv.innerHTML = `<span>${error}</span>`;
		document.getElementById("password").style.border = "1px solid red";
	}
	if(!error) 
		document.location.href = './index.html';
		// document.location.reload(true);
}