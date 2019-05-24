// our product data
var sneakerList = [
    { 
        model: 'V',
        date: 'February, 1990',
        shoeColour: 'Black / Metallic Silver',
        bgColour: 'rgba(131, 172, 191, .7)',
        imageLeft: 'img/05-left.png',
        imageRight: 'img/05-right.png'
    },
    { 
        model: 'VI',
        date: 'December, 1991',
        shoeColour: 'Red / Blue Velvet',
        bgColour: 'rgba(90, 155, 115, 0.5)',
        imageLeft: 'img/06-left.png',
        imageRight: 'img/06-right.png'
    },
    { 
        model: 'VII',
        date: 'January, 1992',
        shoeColour: 'White / Light Silver — Red',
        bgColour: 'rgba(178, 34, 34, .7)',
        imageLeft: 'img/07-left.png',
        imageRight: 'img/07-right.png'
    }
];

// storing elements/targets
var body = document.querySelector('body');
var btnPrev = document.querySelector('.prev');
var btnNext = document.querySelector('.next');
var date = document.querySelector('.date');
var model = document.querySelector('.model');
var shoeColour = document.querySelector('.shoeColour');
var shoeLeft = document.querySelector('.shoe-left');
var shoeRight = document.querySelector('.shoe-right');
var i = 0;

// when run, check if we are at START of slider and update content
function checkBeginning() {
	if ( i === 0 ) {
        i=sneakerList.length - 1;
        changeSlide();
	} else {
		i--;
		changeSlide();
	}
}

// when run, check if we are at END of slider and update content
function checkEnd() {
	if ( i >=sneakerList.length -1 ) {
        i=0;
        changeSlide();
	} else {
		i++;
		changeSlide();
	}
}

// when run, update all contents on the page
function changeSlide() {
	body.style.backgroundColor = sneakerList[i].bgColour;
	shoeLeft.src = sneakerList[i].imageLeft;
	shoeRight.src = sneakerList[i].imageRight;
	date.innerText = sneakerList[i].date;
	model.innerText = sneakerList[i].model;
	shoeColour.innerText = sneakerList[i].shoeColour;
	
	$('.shoe-left').replaceWith('<img class="shoe-left animated bounceInLeft fast" src="' + shoeLeft.src + '" />');
	$('.shoe-right').replaceWith('<img class="shoe-right animated bounceInRight fast" src="' + shoeRight.src + '" />');
	$('.date').replaceWith('<li class="date animated bounceInUp fast">' + date.innerText + '</li>');
	$('.model').replaceWith('<li class="model animated bounceInUp fast">' + model.innerText + '</li>');
	$('.shoeColour').replaceWith('<li class="shoeColour animated bounceInUp fast">' + shoeColour.innerText + '</li>');
}

// when we click BACK button, check if we are at START of slider
btnPrev.onclick = function() {
	checkBeginning();
};

// when we click NEXT button, check if we are at END of slider
btnNext.onclick = function() {
	checkEnd();
};

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        checkBeginning();
        break;
        case 39: // right
        checkEnd();
        break;
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});



$(document).ready(function(){


// setTimeout(function(){
// $('#drone').removeClass('fadeInUp');
// },6000);


setTimeout(function(){
     $('.shoe-left').addClass('drone')
},3000);


});

