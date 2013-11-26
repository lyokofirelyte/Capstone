/* Scripts! */

var x = 1;
var timer;
var process;

function init(){
document.getElementById("areaHome").onmouseover = homeMenuHover;
document.getElementById("areaHome").onmouseout = homeMenuOut;
document.getElementById("areaEquipment").onmouseover = homeMenuHover;
document.getElementById("areaEquipment").onmouseout = homeMenuOut;
}

function homeBanner(){

}

function homeMenuOut(){
	window.clearInterval(timer);
	timer = setInterval(function(){fadeOut("homeBanner", "../ref/menuHome.png")},50);
}

function homeMenuHover(){

	if (process){
		return;
	}

	switch(this){

		case document.getElementById("areaEquipment"):
			timer = setInterval(function(){fadeOut("homeBanner", "../ref/equip.png")},50);
		break;
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

/* <nav><!-- @required -->
		<ul id="homeMenu">
			<li id="navHome"><a href="#">Home</a></li>
			<li id="navTwo"><a href="#">Equipment</a></li>
			<li id="navThree"><a href="#">Strategies</a></li>
		</ul>
	</nav>
*/