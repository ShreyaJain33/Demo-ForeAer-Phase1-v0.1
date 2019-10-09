//Change TagLines
	var counter=0;
	setInterval(function(){
		var text = ["One Stop Destination", "A Global Networking Platform", "First Time in Aviation Industry"];
		document.getElementById("tag").innerHTML = text[counter];
		counter++;
		if(counter>=text.length)
			counter=0;
		
	},1000);

//CountDown Timer
var deadline = new Date("Oct 18, 2019").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = deadline - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = ('0'+days).slice(-2);
  document.getElementById("hours").innerHTML =('0'+hours).slice(-2);
  document.getElementById("mins").innerHTML = ('0'+mins).slice(-2);
  document.getElementById("secs").innerHTML =('0'+secs).slice(-2);
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function styling(){
	document.getElementById("subscribe-grp").style.display = "block";
	document.getElementById("email").style.display="none";
}

//Subscription Button
function visible(){
	document.getElementById("subscribe-grp").style.display="flex";
	document.getElementById("email").style.display="inline-block";
	document.getElementById("subscribe").style.display="inline-block";	
}

//Validation Code
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
	return true;
else
	return false;
}


//Subscription message
function message(){
	inputText=document.getElementById("email").innerHTML;
	flag=ValidateEmail(inputText);
	if(flag==true)
	{
		document.getElementById("thanks").innerHTML = "Thanks for Subscribing."
		document.getElementById("subscribe_grp").style.display="none";
	}
	else
	{
		alert("You have entered an invalid email address!");
		document.getElementById("email").focus();
	}
}