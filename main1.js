// adding character for operation
function addchar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
	}

// mathemtics operations

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deletechar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changesign(input) {
	if(input.value.substring(0, 1) == "-") // removing the -ve sign if already present
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value //adding -ve sign to input if not present
}

function compute(form) {
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checksum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
//window.addEventListener("keypress" , myfunction , false);
//document.body.addEventListener("keypress" , myfunction , false);
let dply = document.getElementById("display");
dply.addEventListener("keypress" , myfunction , false);
function myfunction(event){
	let charCode = event.charCode;
	switch(charCode){
		case 48:
			addchar();
			break;
		case 49:
			addchar();
			break;
		case 50:
			addchar();
			break;
		case 51:
			addchar();
			break;
		case 52:
			addchar();
			break;
		case 53:
			addchar();
			break;
		case 54:
			addchar();
			break;
		case 55:
			 addchar();
			 break;
		case 56:
			addchar();
			break;
		case 57:
			addchar();
			break;
		case 8:
			deletechar();
			break;
		case 13:
			compute();
			break;
		case 27:
			form.display.value = none;
		default: alert("invalid input");
		break;
	}
}

