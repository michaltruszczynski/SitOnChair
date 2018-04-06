document.addEventListener("DOMContentLoaded", function(){


//Slider


var nextPictureBtn = document.getElementById("arrow-right");
var prevPictureBtn = document.getElementById("arrow-left");

//var listElements = querySelectorAll("nav li");

var listElements = document.querySelectorAll(".slider li");
var listElementsLength = listElements.length;
var visibleIndex = 0;

// nr 3

listElements[visibleIndex].classList.add("visible");

// nr 4, 5, 6 i 8

nextPictureBtn.addEventListener('click', function() {
	console.log('next');
	listElements[visibleIndex].classList.remove('visible');
	visibleIndex++;
	if (visibleIndex > listElementsLength -1) {
		visibleIndex = 0;
	}
	listElements[visibleIndex].classList.add('visible');
});

prevPictureBtn.addEventListener('click', function(){
	console.log('prev');
	listElements[visibleIndex].classList.remove('visible');
	visibleIndex--;
	if (visibleIndex < 0) {
		visibleIndex = listElementsLength -1;
	}
	listElements[visibleIndex].classList.add('visible');

});

//Pictures


    var products = document.querySelectorAll('.prod');

    for (var i = 0; i < products.length; i++) {
        products[i].addEventListener('mouseover', function () {
            
           this.children[0].style.display = 'none';
           //this.style.height = this.dataset.size + "px";
           //console.log(this);
        });
    }

    for (var i = 0; i < products.length; i++) {
        products[i].addEventListener('mouseout', function () {
             this.children[0].style.display = 'block';
        });

    }

//Menu

});