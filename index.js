

const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click", toggleVisibility)

function toggleVisibility(){
	const passInput = document.getElementById("ps")
	const icon = document.getElementById("icon")
	if (passInput.type === "password")
		password.type = "text"
		icon.innerText = "visibility_off"
	} 
	else {
		password.type = "password"
		icon.innerText = "visibility"
	}