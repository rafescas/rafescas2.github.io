var visovi;
var rafescas;
var saviola;
var ballarla;
var ciclen;
var joguees;
var finish;
var finish2;
var finish3;
var finish4;
var finish5;
var finish6;


function main() {
	




	
	document.getElementById('ganador').style.display = "none";
	visovi = document.getElementById("visovi");
	
	visovi.style.left = "100px";
	visovi.style.left = "100px";


	rafescas = document.getElementById("rafescas");
	
	rafescas.style.left = "100px";
	rafescas.style.left = "100px";


	saviola = document.getElementById("saviola");
	
	saviola.style.left = "100px";
	saviola.style.left = "100px";


	ballarla = document.getElementById("ballarla");
	
	ballarla.style.left = "100px";
	ballarla.style.left = "100px";
	

	ciclen = document.getElementById("ciclen");
	
	ciclen.style.left = "100px";
	ciclen.style.left = "100px";

	joguees = document.getElementById("joguees");
	
	joguees.style.left = "100px";
	joguees.style.left = "100px";



	
	

	finish = setInterval(moveVisovi, 800);

	finish2 = setInterval(moveRafescas, 800);
	
	finish3 = setInterval(moveSaviola, 800);

	finish4 = setInterval(moveBallarla, 800);

	finish5 = setInterval(moveCiclen, 800);

	finish6 = setInterval(moveJoguees, 800);

	
}


function reinicio() {
	document.getElementById('ganador').style.display = "none";
	visovi.style.display = "block";
	rafescas.style.display = "block";
	saviola.style.display = "block";
	ballarla.style.display = "block";
	ciclen.style.display = "block";
	joguees.style.display = "block";
	main();
}


function ganas() {
	clearInterval(finish);
	clearInterval(finish2);
	clearInterval(finish3);
	clearInterval(finish4);
	clearInterval(finish5);
	clearInterval(finish6);

	visovi.style.display = "none";
	rafescas.style.display = "none";
	saviola.style.display = "none";
	ballarla.style.display = "none";
	ciclen.style.display = "none";
	joguees.style.display = "none";

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


function moveSaviola() {
	
	var top = Math.random()*document.body.clientHeight;
				if (top >= document.body.clientHeight) {
					top = top - saviola.clientHeight;
				}
				saviola.style.top = top + "px";
				var left = Math.random()*document.body.clientWidth;
				if (left >= document.body.clientWidth) left = left - saviola.clientWidth;
				saviola.style.left = left + "px";

}


function moveBallarla() {
	
	var top = Math.random()*document.body.clientHeight;
				if (top >= document.body.clientHeight) {
					top = top - ballarla.clientHeight;
				}
				ballarla.style.top = top + "px";
				var left = Math.random()*document.body.clientWidth;
				if (left >= document.body.clientWidth) left = left - ballarla.clientWidth;
				ballarla.style.left = left + "px";

}

function moveCiclen() {
	
	var top = Math.random()*document.body.clientHeight;
				if (top >= document.body.clientHeight) {
					top = top - ciclen.clientHeight;
				}
				ciclen.style.top = top + "px";
				var left = Math.random()*document.body.clientWidth;
				if (left >= document.body.clientWidth) left = left - ciclen.clientWidth;
				ciclen.style.left = left + "px";

}


function moveJoguees() {
	
	var top = Math.random()*document.body.clientHeight;
				if (top >= document.body.clientHeight) {
					top = top - joguees.clientHeight;
				}
				joguees.style.top = top + "px";
				var left = Math.random()*document.body.clientWidth;
				if (left >= document.body.clientWidth) left = left - joguees.clientWidth;
				joguees.style.left = left + "px";

}




window.onload = main;