function doFinalWorkBeforeSend() {

	// for grading and testing on client
	var BR = '<br />';
	myWindow=window.open(); 	
	myWindow.document.write('<style>body {font-size:30px;}</style>');
	myWindow.document.write('textField == ' + document.theform.textField.value + BR);
	myWindow.document.write('integerField == ' + document.theform.integerField.value + BR);
	myWindow.document.write('checkboxField == ' + document.theform.checkboxField.checked + BR);
	myWindow.document.write('textareaField == ' + document.theform.textareaField.value + BR);
	
	var selectedRadioButton = getRadioButtonValue(document.theform.radioButtonField);
	myWindow.document.write('radioButtonField == ' + selectedRadioButton + BR);
	
	var selection = document.theform.menuField.selectedIndex;
	var formElementValue = document.theform.menuField.options[selection].value;
	myWindow.document.write('menuField == ' + formElementValue + BR);
	myWindow.focus();

	
	return true;
}