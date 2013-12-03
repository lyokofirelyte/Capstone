
function isInteger(s) {

	// tests for positive or negative numbers
	if (s.search(/^(\+|-)?\d+$/) > -1)
		return (true);
	else
		return (false);

}

function capitalizeEveryWord(s) {

	var newSentence = '';
	words = s.split(/\s+/);

	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
		newSentence += words[i] + ' ';
	}
	return (newSentence);
}

function getRadioButtonValue(formNameRadioButtonGroupName)
//
// call the function like this: fieldToTest = getRadioButtonValue(document.myForm.mood)
// where myForm is the name attribute of the form tag and mood is the name attribute of
// the group of radio buttons
//
{
	var i = whichRadioButton(formNameRadioButtonGroupName);

	if (i > -1)
		return(formNameRadioButtonGroupName[i].value);
	else
		return('nothing selected');
}
function whichRadioButton(formNameRadioButtonGroupName)
{
	var i = 0;

	for (i = 0; i < formNameRadioButtonGroupName.length; i++)		
		if (formNameRadioButtonGroupName[i].checked)			
			return(i);

	return(-1);	// if you used the checked attribute on one of the radio buttons
				// this will never happen. it means nothing is selected
}
