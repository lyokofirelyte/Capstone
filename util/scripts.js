/* It's scriptastic! */

var x = 1;
var timer = 0;
var process = false;
var video = false;
var tips = false;
var gallery = false;
var random = 0;
var arandom = 0;
var textFieldValid = false;
var integerFieldValid = false;
var checkboxTextareaValid = true;
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
		default: break;
	}
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
	ele("resImg", "hover", showImg);
	ele("resImg", "out", hideImg);
}

function hideImg(){
ele("resText", "display", "none");
}

function showImg(){
	ele("resText", "display", "block");
}

function showCalc(){
	window.open("calculator.html");
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
	document.body.style.background-color = color;
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