/* It's scriptastic! */

var x = 1;
var timer = 0;
var process = false;
var video = false;
var tips = false;
var gallery = false;
var random = 0;
var arandom = 0;
var alerts = new Array("95% chance of death", "Blood rain.", "Good bleeding weather", "Slight overcast and chance of deadly infections", "Well, it's not like you needed BOTH legs", "You'll get over it.", "Invasive!", "Idaho uses potatoes as weapons against zombie threat", "Chilling.", "100% chance of innacurate weather reporting", "We're at the wrong weather station", "Not in Kansas anymore", "Bring an umbrella", "They're everywhere!", "Monsoon.", "Viscious sandstorm.", "Just a hurricane", "Blood moon", "Halfhearted storm warning in semi-effect", "Follow the bloody brick road", "Actually 7 degrees");

function ele(e, type, s){

	if (document.getElementById(e) == undefined || document.getElementById(e) == null){ 
		return;
	}

	switch (type){
		case "click":
			document.getElementById(e).onclick = s; break;
		case "hover":
			document.getElementById(e).onmouseover = s; break;
		case "html": 
			document.getElementById(e).innerHTML = s; break;
		case "disable":
			document.getElementById(e).disabled= s; break;
		case "display":
			document.getElementById(e).style.display = s; break;
		case "out":
			document.getElementById(e).onmouseout = s; break;
		case "disable":
			document.getElementById(e).disabled = s; break;
		default: break;
	}
}

function showCalc(){
window.prompt("Enter Your Name...","tyrone");
window.prompt("Enter Your Age...","77");
alert("You're probably dead. Good luck!");
}

// Called on page load
function init(){

	// Generate the weather values
	random = Math.floor((Math.random()*110)+1) + "";
	arandom = Math.floor((Math.random()*(alerts.length))) + "";
	
	// Apply the weather values
	ele("weatherNumber", "html", random + "&deg;");
	ele("weatherText", "html", alerts[arandom]);
	
	// Set up all of our listeners and default values
	ele("areaHome", "hover", homeMenuHover);
	ele("areaEquipment", "hover", homeMenuHover);
	ele("areaStrat", "hover", homeMenuHover);
	ele("areaMore", "hover", homeMenuHover);
	ele("showCalcButton", "click", showCalc);
	ele("resText", "display", "none");
	ele("resText2", "display", "none");
	ele("resText3", "display", "none");
	ele("resText4", "display", "none");
	ele("resText5", "display", "none");
	ele("resText6", "display", "none");
	ele("resText7", "display", "none");
	ele("resImg", "hover", showImg);
	ele("resImg2", "hover", showImg2);
	ele("resImg3", "hover", showImg3);
	ele("resImg4", "hover", showImg4);
	ele("resImg5", "hover", showImg5);
	ele("resImg6", "hover", showImg6);
	ele("resImg7", "hover", showImg7);
	ele("resImg", "out", hideImg);
	ele("resImg2", "out", hideImg2);
	ele("resImg3", "out", hideImg3);
	ele("resImg4", "out", hideImg4);
	ele("resImg5", "out", hideImg5);
	ele("resImg6", "out", hideImg6);
	ele("resImg7", "out", hideImg7);
	ele("showCalcButton", "click", showCalc);
	ele("evenMore", "click", evenMore);
	ele("submit", "click", submitForm);
	ele("submit", "disable", true);
	
	document.survey.nameField.onchange = function() {
		checkForm();
	}

	document.survey.ageField.onchange = function() {
		checkForm();
	}
	
	document.survey.commentField.onchange = function() {
		checkForm();
	}
}

function checkForm(){
	if (document.survey.nameField.value != '' && document.survey.ageField.value != '' && document.survey.commentField.value != ''){
		ele("submit", "disable", false);
	} 
}

function caps(s) {

	var newSentence = '';
	words = s.split(/\s+/);

	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
		newSentence += words[i] + ' ';
	}
	return (newSentence);
}

function isInteger(s) {
	if (s.search(/^(\+|-)?\d+$/) > -1) {
		return true;
	}
		return false;
}

function submitForm(){
	var name = caps(document.survey.nameField.value);
	var color = document.survey.colorMenu.value;
	var mail = false;
	var email = "opt-out";
	var age = document.survey.ageField.value;
	var tvShow = getTVShow();
	var comments = document.survey.commentField.value;
	
	if (document.survey.mailBoolean.checked){
		mail = true;
		email = document.survey.emailField.value;
			if (email.indexOf("@") == -1 || (email.substring((email.length)-4, email.length) != ".com" && email.substring((email.length)-4, email.length) != ".edu" && email.substring((email.length)-3, email.length) != ".uk") || email.indexOf(" ") != -1 || !validEmail(email)) { /*@req*/
				alert("Invalid e-mail format!");
				return;
			}
	}
	
	if (!isInteger(age) || age > 125 || age < 1){
		alert("Invalid age!");
		return;
	}
	
	alert("NAME: " + name + " // FAV. COLOR: " + color + " // EMAIL: " + email + " // AGE: " + age + " // TVSHOW: " + tvShow + " // COMMENTS: " + comments);
	alert("Thanks, your data was not recorded because we really don't care!");
}

function getTVShow(){

	if (document.survey.bbT.checked){
		return "Big Bang Theory";
	}

	if (document.survey.hBB.checked){
		return "Honey Boo Boo";
	}

	if (document.survey.faceOff.checked){
		return "Face Off";
	}

	if (document.survey.perryMason.checked){
		return "Perry Mason";
	}
}

function evenMore(){	
	window.open("res.html");
}

function hideImg(){
	ele("resText", "display", "none");
}

function hideImg2(){
	ele("resText2", "display", "none");
}

function hideImg3(){
	ele("resText3", "display", "none");
}

function hideImg4(){
	ele("resText4", "display", "none");
}

function hideImg5(){
	ele("resText5", "display", "none");
}

function hideImg6(){
	ele("resText6", "display", "none");
}
function hideImg7(){
	ele("resText7", "display", "none");
}

function showImg(){
	ele("resText", "display", "block");
}

function showImg2(){
	ele("resText2", "display", "block");
}

function showImg3(){
	ele("resText3", "display", "block");
}

function showImg4(){
	ele("resText4", "display", "block");
}

function showImg5(){
	ele("resText5", "display", "block");
}

function showImg6(){
	ele("resText6", "display", "block");
}
function showImg7(){
	ele("resText7", "display", "block");
}

function homeMenuHover(){

	if (process){
		return;
	}

	switch(this){
			
		case document.getElementById("areaHome"):
			timer = setInterval(function(){fadeOut("homeBanner", "../ref/menuHome.png")},50);
		break;

		case document.getElementById("areaEquipment"):
			timer = setInterval(function(){fadeOut("homeBanner", "../ref/equip.png")},50);
		break;
		
		case document.getElementById("areaStrat"):
			timer = setInterval(function(){fadeOut("homeBanner", "../ref/strat.png")},50);
		break;
		
		case document.getElementById("areaMore"):
			timer = setInterval(function(){fadeOut("homeBanner", "../ref/more.png")},50);
		break;
	}
	
}

function bgChange(color){
	document.body.style.backgroundColor = color;
}

function getGallery(){

	if (gallery){
		document.getElementById("mainImage").style.display = "block";
		document.getElementById("mainGallery").style.display = "none";
		document.getElementById("innerNavText3").innerHTML = "Gallery";
		gallery = false;
	} else {
		document.getElementById("mainTips").style.display = "none";
		document.getElementById("mainImage").style.display = "none";
		document.getElementById("mainVideo").style.display = "none";
		document.getElementById("mainGallery").style.display = "block";
		document.getElementById("innerNavText3").innerHTML = "Hide Gallery";
		document.getElementById("innerNavText2").innerHTML = "Quick Tips";
		document.getElementById("innerNavText").innerHTML = "Show Video";
		tips = false;
		video = false;
		gallery = true;
	}
}

function getTips(){
	
	if (tips){
		document.getElementById("mainTips").style.display = "none";
		document.getElementById("mainImage").style.display = "block";
		document.getElementById("innerNavText2").innerHTML = "Quick Tips";
		tips = false;
	} else {
		document.getElementById("mainTips").style.display = "block";
		document.getElementById("mainImage").style.display = "none";
		document.getElementById("mainVideo").style.display = "none";
		document.getElementById("mainGallery").style.display = "none";
		document.getElementById("innerNavText3").innerHTML = "Show Gallery";
		document.getElementById("innerNavText2").innerHTML = "Hide Tips";
		document.getElementById("innerNavText").innerHTML = "Show Video";
		tips = true;
		video = false;
		gallery = false;
	}
}

function getVideo(){
	
	if (video){
		document.getElementById("mainVideo").style.display = "none";
		document.getElementById("innerNavText").innerHTML = "Show Video";
		document.getElementById("mainImage").style.display = "block";
		video = false;
	} else {
		document.getElementById("mainVideo").style.display = "block";
		document.getElementById("innerNavText").innerHTML = "Hide Video";
		document.getElementById("innerNavText2").innerHTML = "Quick Tips";
		document.getElementById("innerNavText3").innerHTML = "Show Gallery";
		document.getElementById("mainTips").style.display = "none";
		document.getElementById("mainGallery").style.display = "none";
		document.getElementById("mainImage").style.display = "none";
		video = true;
		tips = false;
		gallery = false;
	}
}

function fadeOut(id, link){

	process = true;
	x = x - 0.1;
	document.getElementById(id).style.opacity = x;
	
	if (x <= 0){
		window.clearInterval(timer);
		document.getElementById("homeBanner").src = link;
		timer = setInterval(function(){fadeIn(id, link)},50);
		process = false;
	}
}
			
function fadeIn(id, link){

	process = true;
	x = x + 0.1;
	document.getElementById(id).style.opacity = x;
	
	if (x >= 1){
		window.clearInterval(timer);
		process = false;
	}
}

// JP's script @req @param email // You don't need an else after a return so I made it shorter

function validEmail(emailAddressToCheck){

	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	if (re.test(emailAddressToCheck)){
		return true;
	}	
	return false;
}