"use strict"

// Gamburger menu animation
const gamburgerMenu = document.querySelector(".gamburger-menu");
const header = document.querySelector("header");
const firstLine = document.querySelector(".first-line");
const secondLine = document.querySelector(".second-line");
const thirdLine = document.querySelector(".third-line");
const fourthLine = document.querySelector(".fourth-line");

function displayMenu(event) {
    firstLine.classList.toggle("first-line-active");
    secondLine.classList.toggle("second-line-active");
    thirdLine.classList.toggle("third-line-active");
    fourthLine.classList.toggle("fourth-line-active");
    header.classList.toggle("header-active");
}

gamburgerMenu.onclick = displayMenu;


// smooth page movement to the desired block
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
        const blockID = anchor.getAttribute('href')
		document.querySelector(`#${blockID.slice(1)}`).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}


//---------------------------------------------------------------------------
//Page component animation
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

//that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.
function throttleScroll(e) {
	if (isScrolling == false) {
	  window.requestAnimationFrame(function() {
		scrolling(e);
		isScrolling = false;
	  });
	}
	isScrolling = true;
}
  
document.addEventListener("DOMContentLoaded", scrolling, false);


let elementArray = []
let elementCounter = 0;

let selectorsArray = [
	"take-care-yourself",
	"order-online-header",
	"big-car-wrapper",
	"no-need-to-go-wrapper",
	"order-button-second",
	"count-materials-button",
	"dealerships-headers-first",
	"dealerships-headers-second",
	"dealerships-info",
	"all-shops-button",
	"dealers-table",
	"headers-wrapper-headers-first",
	"headers-wrapper-headers-second",
	"headers-wrapper-text",
	"production-header",
	"production-cards",
	"store-content-header",
	"store-content-paragraph",
	"store-button",
	"arrow"
];

for (let i = 0; i < selectorsArray.length; i++) {
	elementArray.push([document.getElementsByClassName(selectorsArray[i])[0], true]);
}

function scrolling(e) {
	for(let i = 0; i < elementArray.length; i++) {
		if (elementCounter == selectorsArray.length) {
			document.removeEventListener("DOMContentLoaded", scrolling);
			break;
		}
		if (elementArray[i][1] && isPartiallyVisible( elementArray[i][0] )) {
			elementArray[i][0].classList.add(`${selectorsArray[i] + '-active'}`);
			elementArray[i][1] = false;
			elementCounter += 1;
		}
	}
};