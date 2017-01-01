var navbarItems = document.getElementsByClassName('navbar-item');

for(var i = 0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(event){
		removeActiveClass();
		this.classList.add('active');
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if(sectionToGo.length > 1){
			event.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			elementToScroll(goTo);
		}

	})

}

function elementToScroll(name){
	var element;
	if(name === ''){
		element = document.getElementsByTagName('header')[0];
	} else {
		element = document.getElementById(name);
	}

	scrollTo(element);

}


function scrollTo(element){
	var jump = parseInt(element.getBoundingClientRect().top * 0.3);
	document.body.scrollTop += jump;

	if(!element.lastJump || element.lastJump > Math.abs(jump)){
		element.lastJump = Math.abs(jump);
		setTimeout(function(){
			scrollTo(element);
		}, "60")
	} else {
		element.lastJump = null;
	}

}

function removeActiveClass(){
	document.querySelectorAll('.active')[0].classList.remove('active');
}


var cumulativeOffset = function(element){
	var top = 0;
	do {
		top += element.offsetTop || 0;
		element = element.offsetParent;
	} while(element);

	return top;
}

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 80;
var offsetSkills = cumulativeOffset(document.getElementById('skills')) - 80;
var offsetContacto = cumulativeOffset(document.getElementById('contact')) - 80;
var offsetEstudios = cumulativeOffset(document.getElementById('estudios')) - 80;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 80;
var offsetSombreMi = cumulativeOffset(document.getElementById('sobre-mi')) - 80;

window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(event){
	var previous;
	var skillSection = document.getElementsByClassName('skill-item');
	var studySelection = document.getElementsByClassName('study-square');
	if(window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy){
		if(!previous){
			previous = 1;
		} else if(previous == 1){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href="#"]').parentNode.classList.add('active');
	} else if(window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetSkills){
		if(!previous){
			previous = 2;
		} else if(previous == 2){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href$="quien-soy"]').parentNode.classList.add('active');

		for (var i = 0; i<skillSection.length; i++){
			if(!skillSection[i].classList.contains('animate'))
				skillSection[i].classList.add('animate');
			}
	} else if(window.pageYOffset >= offsetSkills && window.pageYOffset < offsetEstudios){
		if(!previous){
			previous = 3;
		} else if(previous == 3){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href$="skills"]').parentNode.classList.add('active');

		for(var i = 0; i < studySelection.length; i++){
			if(!studySelection[i].classList.contains('animate')){
				studySelection[i].classList.add('animate');
			}

		}

	} else if(window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetExperiencia){
		if(!previous){
			previous = 5;
		} else if(previous == 5){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href$="estudios"]').parentNode.classList.add('active');

	} else if(window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetSombreMi){
		if(!previous){
			previous = 6;
		} else if(previous == 6){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href$="experiencia"]').parentNode.classList.add('active');

	} else if(window.pageYOffset >= offsetSombreMi && window.pageYOffset < offsetContacto){
		if(!previous){
			previous = 7;
		} else if(previous == 7){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href$="sobre-mi"]').parentNode.classList.add('active');

	} else if(window.pageYOffset >= offsetContacto){
		if(!previous){
			previous = 8;
		} else if(previous == 8){
			return false;
		}
		removeActiveClass();
		document.querySelector('a[href$="contact"]').parentNode.classList.add('active');
	}
}














