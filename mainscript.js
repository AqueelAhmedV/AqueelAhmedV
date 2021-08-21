function myfunc(){
	document.getElementById("1").src = getRandomImg(1);
	document.getElementById("2").src = getRandomImg(2);
	document.getElementById("3").src = getRandomImg(3);
}


 /* SmtpJS.com - v3.0.0 */
 var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


function getRandomImg(val){
	num1 = (Math.floor(Math.random()*334));
	num2 = Math.floor(Math.random()*16)+1;
	num3 = Math.floor(Math.random()*156)+1;
	//num2 = (Math.floor(Math.random()*9000) + 10000).toString()
	if (val==1){
		link = `//C:/New/img/img_${num1}.png`;
	}
	else if (val==2){
		link = `//C:/New/pic/pic (${num2}).jpg`;
	}
	else if (val==3){
		link = `//C:/New/collection/coll (${num3}).jpg`;
	}
	return link //"https://k5x5n5g8.ssl.hwcdn.net/content/180731/0010-05.jpg"
}

function cryptClick(obj){
	obj.src=getRandomImg(parseInt(obj.id))
	

}

function cryptOpen(){
	setTimeout(function(){document.getElementById("crypts").style="display:grid;";
document.getElementById("crypts").scrollIntoView()},10);
}

function check_OTP(){
	// const fsLibrary = require("fs");
	var entered_OTP = document.getElementById("OTP_in").value;
	var actual_OTP = sessionStorage.getItem("OTP"); 


	//if(!entered_OTP.localeCompare(actual_OTP)){
		document.getElementById("OTP_div").style="display:none;";
		document.getElementById("encrypt").style = "display:block;";
		document.getElementById("crypts_link").style="display:block;";
	// }
	// else{
	// 	document.getElementById("OTP_err").innerHTML = "Incorrect OTP. Please try again";
	// }
}

function generateOTP(){
	// const fsLibrary = require("fs");
	//alert(fsLibrary);
	var x = Math.floor(Math.random()*999999) + 1;
	var OTP = x.toString();
	var n = 6 - OTP.length;
	//alert(n);
	if(n!=0)
		OTP = n*"0" + OTP;
	// //setTimeout(function alertOTP(){alert("Your OTP for Simple Text Encryptor: "+ OTP)},5000); 

	// ///////////////////////////////////////////////////
	var email_id = document.getElementById("pass").value;
	
	//  if(!(email_id.includes("@gmail.com")||email_id.includes(".iitkgp.ac.in"))){
	//  	alert("Enter a valid Email ID");
	//  	return;
	//  }
	// var mail = {
	// 	Host: "smtp.gmail.com",
	// 	Username: "ncryptnyc@gmail.com",
	// 	Password: "NDkwMXQyNlAzMzU5Mnk5NzUzMjVSMTI4MzFjODc5NDVO$",
	// 	To: email_id,
	// 	From: "ncryptnyc@gmail.com",
	// 	Subject: "OTP verification for Ncrypt account",
	// 	Body: "Your OTP for Simple Text Encryptor: "+ OTP.bold(),
	// };
	// Email.send(mail)
	//   .then(function(message){
	//   	alert("OTP sent successfully. Please check your registered email id.");
	//   });
	  /////////////////////////////////////////////////

	  document.getElementById("main").style="display:none;";
	  document.getElementById("OTP_div").style="display:block;";
	  if(sessionStorage)
	  	sessionStorage.setItem("OTP",OTP);
	  else
	  	alert("sessionStorage not available");

}



function clear_1(){
	document.getElementById("word").value = "";
	document.getElementById("num").value = "";
	document.getElementById("result").style = "display:none;";
	document.getElementById("warn_encrypt").style="display:none;";
	document.getElementById("crypts").style="display:none;";
}


function validate(str){
	return atob(str);
}


function check(){
	
	let phrase,password;
	phrase = document.getElementById("pass").value;
	//alert(phrase);
	password = validate("MjA3MjMyNjI=");
	
	if (phrase.localeCompare(password)){
		//alert("incorrect password");
		document.getElementById("warn_main").innerHTML = "Incorrect Password: Please try again.";
		document.getElementById("pass").value = "";
		return; 
	}
	else{
		//alert("success");
		document.getElementById("encrypt").style = "display:block;";
		document.getElementById("main").style = "display:none;";
		return;
	}
	
}



function simple(){
	let word;
	let num;
	var	fib = [0];
	var temp1 = 0,temp2 = 1,term = 0;
	var alfanum = [0];

	word = document.getElementById("word").value;
	num = parseInt(document.getElementById("num").value);
	

	if(num>=100||num<1)
	{
		//alert("Invalid Number (Enter a non-zero positive number less than 100 for optimum password length)");
		document.getElementById("warn_encrypt").style="display:block;"
		document.getElementById("warn_num").innerHTML="Invalid Number (Enter a non-zero positive number less than 100 for optimum password length)"
		document.getElementById("num").value="";
		return;
	}
	for (var i = 1; i <= 26; i++) {
		temp1 = term;
		term = term + temp2;
		temp2 = temp1;
		fib[i] = term;
	}

	var lword = word.toLowerCase();
	var k;

	for (var i = 0; i < word.length; i++) {
		k = lword.charCodeAt(i);
		for (var j = 0; j < 26; j++) {
			if(k<=122 && k>=97)
				alfanum[i] = k-71-j;
			else{
				k = -1;
				i = word.length;
				break;
			}
		}
	}

	if(k==-1){
		document.getElementById("warn_encrypt").style="display:block;";
		document.getElementById("warn_word").innerHTML="No special characters or numbers allowed in Favorite word";
		document.getElementById("word").value = "";
		return;
	}

	var final = "";
	for (var i = 0; i < alfanum.length; i++) {
		final += (fib[alfanum[i]]*num).toString();
		if(i%2==0)
			final += lword[alfanum.length-1-i];
		else
			final += lword[alfanum.length-1-i].toUpperCase(); 
	}

	final = btoa(final);   
	final = final.replace("=","$");
	final = final.replace("$=","$");
	final += "$"; 
	

	document.getElementById("warn_encrypt").style="display:none;"
	document.getElementById("result").style = "display:block;";
	document.getElementById("finall").innerHTML = `${final}`
}







