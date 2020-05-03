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