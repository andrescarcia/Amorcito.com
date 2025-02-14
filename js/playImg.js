var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

/* Agregamos funciones para fadeOut y fadeIn */
function fadeOut(element, duration, callback) {
    let opacity = parseFloat(window.getComputedStyle(element).opacity) || 1;
    let step = 50 / duration;
    let fadeInterval = setInterval(function(){
         opacity -= step;
         if(opacity <= 0){
              clearInterval(fadeInterval);
              element.style.opacity = 0;
              callback();
         } else {
              element.style.opacity = opacity;
         }
    }, 50);
}

function fadeIn(element, duration) {
    let opacity = parseFloat(window.getComputedStyle(element).opacity) || 0;
    let step = 50 / duration;
    let fadeInterval = setInterval(function(){
         opacity += step;
         if(opacity >= 1){
              clearInterval(fadeInterval);
              element.style.opacity = 1;
         } else {
              element.style.opacity = opacity;
         }
    }, 50);
}

/* Actualizamos showImage para aplicar fade */
function showImage(){
    const container = document.getElementById("imgTxt");
    fadeOut(container, 500, function(){
        myImage.setAttribute("src", imageArray[imageIndex]);
        myTxt.innerHTML = txtArray[imageIndex];
        imageIndex++;
        if(imageIndex >= len){
            imageIndex = 0;
        }
        fadeIn(container, 500);
    });
}

function play(){
	if(t == 0){
		myImage.setAttribute("src", "");
		myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		 // Se aumenta el intervalo a 4000ms para que vaya más lento
		setInterval(showImage, 4000);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}

function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
