
var milli = 0, min = 0, sec = 0;
var timeDisp = document.querySelector("header");
var timer;
function start(){if(!timer){
	 timer = setInterval(runTime,10);}}

function runTime(){
	milli++;
if(milli==100) { milli = 0; sec ++;}
if(sec == 60) { sec = 0; min ++;}
timeDisp.textContent = getTime()
}

function getTime(){
return `${min < 10 ? '0'+min : min}: ${sec<10 ? '0'+sec : sec}: ${milli}`}

function pause(){
clearInterval(timer);
timer = false; }

function stop(){
	clearInterval(timer);
	timer = false;
	milli = 0;
	  min = 0;
	   sec = 0;
	timeDisp.textContent = getTime();
}


function restart(){
	stop();
	start();
}

var lapValue = document.querySelector("ul");
function good(){ if(timer){
	var l = document.createElement("li");
	l.textContent = getTime();
	lapValue.appendChild(l); 

var lis = document.querySelectorAll("li");
if(lis.length > 44) { lapValue.innerHTML = ""}

}}

function clearResult(){
	lapValue.innerHTML = " ";
	console.log("OK")
}

