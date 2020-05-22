"use strict"; // Gamburger menu animation

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var gamburgerMenu = document.querySelector(".gamburger-menu");
var header = document.querySelector("header");
var firstLine = document.querySelector(".first-line");
var secondLine = document.querySelector(".second-line");
var thirdLine = document.querySelector(".third-line");
var fourthLine = document.querySelector(".fourth-line");

function displayMenu(event) {
  firstLine.classList.toggle("first-line-active");
  secondLine.classList.toggle("second-line-active");
  thirdLine.classList.toggle("third-line-active");
  fourthLine.classList.toggle("fourth-line-active");
  header.classList.toggle("header-active");
}

gamburgerMenu.onclick = displayMenu; // smooth page movement to the desired block

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector("#".concat(blockID.slice(1))).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } //---------------------------------------------------------------------------
  //Page component animation

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
} //that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.


function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }

  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
var elementArray = [];
var elementCounter = 0;
var selectorsArray = ["take-care-yourself", "order-online-header", "big-car-wrapper", "no-need-to-go-wrapper", "order-button-second", "count-materials-button", "dealerships-headers-first", "dealerships-headers-second", "dealerships-info", "all-shops-button", "dealers-table", "headers-wrapper-headers-first", "headers-wrapper-headers-second", "headers-wrapper-text", "production-header", "production-cards", "store-content-header", "store-content-paragraph", "store-button", "arrow"];

for (var i = 0; i < selectorsArray.length; i++) {
  elementArray.push([document.getElementsByClassName(selectorsArray[i])[0], true]);
}

function scrolling(e) {
  for (var _i = 0; _i < elementArray.length; _i++) {
    if (elementCounter == selectorsArray.length) {
      document.removeEventListener("DOMContentLoaded", scrolling);
      break;
    }

    if (elementArray[_i][1] && isPartiallyVisible(elementArray[_i][0])) {
      elementArray[_i][0].classList.add("".concat(selectorsArray[_i] + '-active'));

      elementArray[_i][1] = false;
      elementCounter += 1;
    }
  }
}

;