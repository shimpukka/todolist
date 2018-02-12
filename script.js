var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value+" "));
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	btn.classList.add("btn-default");
	li.appendChild(btn);
	ul.appendChild(li);
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function toggle(e){
	if(e.target.tagName=== "LI"){
		e.target.classList.toggle("done");  //e.target refers to the clicked <li> element
	}else if(e.target.tagName === "BUTTON"){
		e.target.parentElement.remove();
	}
}


input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggle);

