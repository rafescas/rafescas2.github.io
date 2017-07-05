var visovi;
var rafescas;
var saviola;
var ballarla;
var ciclen;
var joguees;
var finish;
var finish2;


function main() {
	

	
	document.getElementById('ganador').style.display = "none";
	visovi = document.getElementById("visovi");
	
	visovi.style.left = "100px";
	visovi.style.left = "100px";


	rafescas = document.getElementById("rafescas");
	
	rafescas.style.left = "100px";
	rafescas.style.left = "100px";
	

	finish = setInterval(moveVisovi, 800);

	finish2 = setInterval(moveRafescas, 800);
	


	
}


function ganas() {
	clearInterval(finish);
	clearInterval(finish2);
	document.getElementById('ganador').style.display = "block";
}







function moveVisovi() {
	
	var top = Math.random()*document.body.clientHeight;
				if (top >= document.body.clientHeight) {
					top = top - visovi.clientHeight;
				}
				visovi.style.top = top + "px";
				var left = Math.random()*document.body.clientWidth;
				if (left >= document.body.clientWidth) left = left - visovi.clientWidth;
				visovi.style.left = left + "px";

}


function moveRafescas() {
	
	var top = Math.random()*document.body.clientHeight;
				if (top >= document.body.clientHeight) {
					top = top - rafescas.clientHeight;
				}
				rafescas.style.top = top + "px";
				var left = Math.random()*document.body.clientWidth;
				if (left >= document.body.clientWidth) left = left - rafescas.clientWidth;
				rafescas.style.left = left + "px";

}

window.onload = main;