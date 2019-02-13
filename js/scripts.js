window.onerror=function(e,url,l){
	alert(e);
	alert(l);
};

var secondsHand=document.querySelector(".seconds-hand");
var minuteHand=document.querySelector(".minute-hand");
var hourHand=document.querySelector(".hour-hand");
var digital=document.querySelector(".digital");

function setDate(){
	var date=new Date();
	var seconds=date.getSeconds();
	var secDegrees=(seconds/60)*360+90;
	secondsHand.style.transform="rotate("+secDegrees+"deg)";
	
	var minutes=date.getMinutes();
	var minDegrees=(minutes/60)*360+90;
	minuteHand.style.transform="rotate("+minDegrees+"deg)";
	
	var hours=date.getHours();
	var hourDegrees=(hours/60)*360+90;
	hourHand.style.transform="rotate("+hourDegrees+"deg)";

	digital.innerHTML="<b>"+date.toLocaleTimeString()+"</b>";
	
	
	if(!(secDegrees<=89)){
		secondsHand.style.transition="all 0.08s";
		secondsHand.style.transitionTimingFunction="cubic-bezier(0.1,2.7,0.58,1)";
	}else{
		secondsHand.style.transition="all 0s";
		secondsHand.style.transitionTimingFunction="";
	}
	if(!(secDegrees<=89)){
		minuteHand.style.transition="all 0.08s";
		minuteHand.style.transitionTimingFunction="cubic-bezier(0.1,2.7,0.58,1)";
	}else{
		minuteHand.style.transition="all 0s";
		minuteHand.style.transitionTimingFunction="";
	}
	if(!(hourDegrees<=89)){
		hourHand.style.transition="all 0.08s";
		hourHand.style.transitionTimingFunction="cubic-bezier(0.1,2.7,0.58,1)";
	}else{
		hourHand.style.transition="all 0s";
		hourHand.style.transitionTimingFunction="";
	}
}

setInterval(setDate,1000);
