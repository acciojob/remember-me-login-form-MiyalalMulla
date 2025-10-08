//your JS code here. If required.


//IIFE
(function(){
let form = document.getElementById("login-form");
let  btn = document.getElementById("existing");
let userName = document.getElementById("username");
let password = document.getElementById("password");
let rememberCheckbox = document.getElementById("checkbox");
	function credsExist(){
		return localStorage.getItem("username") && localStorage.getItem("password");
	}
	function updateExistingVisibility(){
		btn.style.display = credsExist() ? "block" : "none";
	}
	window.addEventListener("DOMContentLoaded",()=>{
		userName.value = "";
		password.value = "";
		rememberCheckbox.value = false;
		updateExistingVisibility();
	});
	form.addEventListener("submit",(e)=>{
		e.preventDefault();

		const username = username = userName.value.trim();
		const password = password.value;
		alert(`Logged in as ${username}`);
		if(rememberCheckbox.checked){
			localStorage.setItem("username",username);
			localStorage.setItem("password",password);
		}
		else{
			localStorage.removeItem("username");
			lcoaStorage.removeItem("password");
		}
		updateExistingVisibility();
		
	});

	btn.addEventListener("click",()=>{
		const  savedUsername = localStorage.getItem("username");
		if(savedUsername){
			alert(`Logged in as ${savedUsername}`);
		}
	});
})();
	
)