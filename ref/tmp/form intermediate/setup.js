// global variables 
var textFieldValid = false;
var integerFieldValid = false;
var checkboxTextareaValid = true;
	
function doSetUp() {


	// start out by preventing submission of data (nothing is filled out yet)
	document.getElementById('submit').disabled=true;
	
	// use onchange event listeners for select objects, radio buttons and checkboxes
	document.theform.menuField.onchange=function() {

		var selection = document.theform.menuField.selectedIndex;
		var formElementValue = document.theform.menuField.options[selection].value;
		
		document.getElementById('decorationDisplay').style.borderStyle = formElementValue;
	}
	document.theform.checkboxField.onchange=function() {

		if (document.theform.checkboxField.checked){
			document.getElementById('comments').style.display='block';
			document.theform.textareaField.focus();
		} else {
			checkboxTextareaValid = true;
			document.theform.textareaField.value = '';
			document.getElementById('comments').style.display='none';
			enableSubmitButton();
		}	
	}
	// field validation event handlers use onfocus and onblur
	document.theform.textField.onfocus=function() {
		textFieldValid = false;
		document.getElementById('submit').disabled=true;
		}
	document.theform.textField.onblur=function() {
		var s = document.theform.textField.value;
		s = s.trim();

		if (s=='') {
			document.getElementById('firstHiddenField').style.display='block';
			document.theform.textField.focus();
		} else { 
			s = capitalizeEveryWord(s);
			document.theform.textField.value = s;
			document.getElementById('firstHiddenField').style.display='none';
			textFieldValid = true;
			enableSubmitButton();
		}
	}
	
	document.theform.integerField.onfocus=function() {
		integerFieldValid = false;
		document.getElementById('submit').disabled=true;
		}
	document.theform.integerField.onblur=function() {
		var s = document.theform.integerField.value;
		s = s.trim();

		if (s=='') {
			document.getElementById('secondHiddenField').innerHTML='you have to enter something in this field';
			document.getElementById('secondHiddenField').style.display='block';
			document.theform.integerField.focus();
		} else if(isNaN(s)){
			document.getElementById('secondHiddenField').innerHTML='you can only use digits (0-9)';
			document.getElementById('secondHiddenField').style.display='block';
			document.theform.integerField.focus();
		} else if(!isInteger(s)){
			document.getElementById('secondHiddenField').innerHTML='you must enter an integer';
			document.getElementById('secondHiddenField').style.display='block';	
			document.theform.integerField.focus();
		} else if (parseInt(s) < 0 || parseInt(s) > 9){
			document.getElementById('secondHiddenField').innerHTML='you number must be between 0 and 9 inclusive';
			document.getElementById('secondHiddenField').style.display='block';	
			document.theform.integerField.focus();
		} else {
			document.getElementById('secondHiddenField').style.display='none';
			integerFieldValid = true;
			enableSubmitButton();
		}
	}
	
	document.theform.textareaField.onfocus=function() {
		checkboxTextareaValid = false;
		document.getElementById('submit').disabled=true;
		}

	document.theform.textareaField.onblur=function() {

		var s = document.theform.textareaField.value;
		s = s.trim();

		if (s == '' && document.theform.checkboxField.checked) {
			document.theform.textareaField.focus();
		} else {
			checkboxTextareaValid = true;
			enableSubmitButton();
		}
	}
	
	// end field validations
	
} // end do setUp())

function enableSubmitButton() {

	if (textFieldValid && integerFieldValid && checkboxTextareaValid) {
		document.getElementById('submit').disabled = false;
	}
}

