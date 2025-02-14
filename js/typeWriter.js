let i = 0;
let text1 = "Hola mi vida bella";
let text2 = "Hoy es el día en que los dos celebramos 4 años juntitos...\n\n" + 
            "y espero que sean muchos más, y como me lo habías pedido, aquí un poema para ti en portugués.\n\n" +
            "Espero que te guste, mi vida. Gracias por estar conmigo y transformar mi vida entera.\n\n" +
            "Te amo infinito."; 
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

window.onload = function() {
	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
};
