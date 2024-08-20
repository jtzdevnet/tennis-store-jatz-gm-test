/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/base.less":
/*!******************************!*\
  !*** ./src/styles/base.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2Jhc2UubGVzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Jhc2UubGVzcz81YjU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/base.less\n");

/***/ }),

/***/ "./src/scripts/header-collapse.js":
/*!****************************************!*\
  !*** ./src/scripts/header-collapse.js ***!
  \****************************************/
/***/ (() => {

eval("document.querySelector('.navbar-toggle').addEventListener('click', (e) => {\r\n\te.target.classList.toggle('open');\r\n\tdocument.querySelector('.navbar-collapse').classList.toggle('open');\r\n\tdocument.querySelector('body').classList.toggle('navbar-open');\r\n})\r\n\r\nwindow.addEventListener(\"resize\", function(){\r\n\tif(window.innerWidth > 768){\r\n\t\tif(document.querySelector('body').classList.contains('navbar-open')){\r\n\t\t\tdocument.querySelector('.navbar-toggle').classList.remove('open');\r\n\t\t\tdocument.querySelector('.navbar-collapse').classList.remove('open');\r\n\t\t\tdocument.querySelector('body').classList.remove('navbar-open');\r\n\t\t}\r\n\t}\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkZXItY29sbGFwc2UuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVhZGVyLWNvbGxhcHNlLmpzPzY4ODMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0ZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY29sbGFwc2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1vcGVuJyk7XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG5cdGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KXtcclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmJhci1vcGVuJykpe1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jb2xsYXBzZScpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1vcGVuJyk7XHJcblx0XHR9XHJcblx0fVxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/header-collapse.js\n");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_base_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/styles/base.less */ \"./src/styles/base.less\");\n/* harmony import */ var _header_collapse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-collapse.js */ \"./src/scripts/header-collapse.js\");\n/* harmony import */ var _header_collapse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_collapse_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-slider.js */ \"./src/scripts/product-slider.js\");\n/* harmony import */ var _product_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n// Less Files\r\n\r\n\r\n// Script Files\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5kZXguanM/MTU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZXNzIEZpbGVzXHJcbmltcG9ydCAnL3NyYy9zdHlsZXMvYmFzZS5sZXNzJztcclxuXHJcbi8vIFNjcmlwdCBGaWxlc1xyXG5pbXBvcnQgJy4vaGVhZGVyLWNvbGxhcHNlLmpzJztcclxuaW1wb3J0ICcuL3Byb2R1Y3Qtc2xpZGVyLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/index.js\n");

/***/ }),

/***/ "./src/scripts/product-slider.js":
/*!***************************************!*\
  !*** ./src/scripts/product-slider.js ***!
  \***************************************/
/***/ (() => {

eval("let currentSliderItem = 1;\r\n\r\ndocument.addEventListener(\"click\", function(e){\r\n\tconst target = e.target.closest(\".slider-controls a\"); // Or any other selector.\r\n\tconst indicator = e.target.closest(\".slider-indicators a\");\r\n\tif(target){\r\n\t\tlet targetSlider = target.parentNode.dataset.targetSlider;\r\n\t\tlet currentSliderPos = 0;\r\n\t\tif (document.querySelector(targetSlider).style.transform != '') {\r\n\t\t\tcurrentSliderPos = parseInt(document.querySelector(targetSlider).style.transform.replace(\"translateX(\",\"\").replace(\"px)\",\"\").replace(\"-\",\"\"));\r\n\t\t}\r\n\t\tconst slideAmount = calculateSlideSize(target);\r\n\t\tif (target.getAttribute('href') == '#next'){\r\n\t\t\tif( (currentSliderPos + slideAmount) <= document.querySelector(targetSlider).scrollWidth){\r\n\t\t\t\tcurrentSliderItem++;\r\n\t\t\t\tdocument.querySelectorAll('.slider-indicators a').forEach(el => el.classList.remove('active'));\r\n\t\t\t\tdocument.querySelector('.slider-indicators li:nth-child('+currentSliderItem+') a').classList.add('active');\r\n\t\t\t\tdocument.querySelector(targetSlider).style = 'transform: translateX(-'+ (currentSliderPos + slideAmount) +'px)';\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (target.getAttribute('href') == '#prev'){\r\n\t\t\tif( (currentSliderPos - slideAmount) >= 0){\r\n\t\t\t\tcurrentSliderItem--;\r\n\t\t\t\tdocument.querySelectorAll('.slider-indicators a').forEach(el => el.classList.remove('active'));\r\n\t\t\t\tdocument.querySelector('.slider-indicators li:nth-child('+currentSliderItem+') a').classList.add('active');\r\n\t\t\t\tdocument.querySelector(targetSlider).style = 'transform: translateX(-'+ (currentSliderPos - slideAmount) +'px)';\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tif(indicator){\r\n\t\te.preventDefault();\r\n\t\tdocument.querySelectorAll('.slider-indicators a').forEach(el => el.classList.remove('active'));\r\n\t\te.target.classList.add('active');\r\n\t\tconst targetSlide = e.target.dataset.slideTo;\r\n\t\tlet targetSlider = e.target.parentNode;\r\n\t\tlet slideAmount = calculateSlideSize(targetSlider);\r\n\t\tdocument.querySelector(targetSlider.parentNode.dataset.targetSlider).style = 'transform: translateX(-'+ (slideAmount * (targetSlide - 1)) +'px)';\r\n\t\tcurrentSliderItem = targetSlide;\r\n\t}\r\n});\r\n\r\nfunction calculateSlideSize(target){\r\n\tlet targetSlider = target.parentNode.dataset.targetSlider;\r\n\tlet firstSlide = document.querySelector(targetSlider).children[0];\r\n\tlet slideMargin = parseInt(window.getComputedStyle(firstSlide).marginRight.replace('px', ''));\r\n\tconst slideAmount = firstSlide.offsetWidth + slideMargin;\r\n\treturn slideAmount;\r\n}\r\n\r\ndocument.getElementById(\"productSlider\").addEventListener('touchstart', function (event) {\r\n    touchstartX = event.changedTouches[0].screenX;\r\n}, false);\r\n\r\ndocument.getElementById(\"productSlider\").addEventListener('touchend', function (event) {\r\n    touchendX = event.changedTouches[0].screenX;\r\n    handleGesture();\r\n}, false);\r\n\r\n\r\nfunction handleGesture() {\r\n    if (touchendX < touchstartX) {\r\n\t\tdocument.querySelector('.slider-controls .control-right').click();\r\n    }\r\n\r\n    if (touchendX > touchstartX) {\r\n\t\tdocument.querySelector('.slider-controls .control-left').click();\r\n    }\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wcm9kdWN0LXNsaWRlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wcm9kdWN0LXNsaWRlci5qcz85ZDBhIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50U2xpZGVySXRlbSA9IDE7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcblx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcIi5zbGlkZXItY29udHJvbHMgYVwiKTsgLy8gT3IgYW55IG90aGVyIHNlbGVjdG9yLlxyXG5cdGNvbnN0IGluZGljYXRvciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuc2xpZGVyLWluZGljYXRvcnMgYVwiKTtcclxuXHRpZih0YXJnZXQpe1xyXG5cdFx0bGV0IHRhcmdldFNsaWRlciA9IHRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQudGFyZ2V0U2xpZGVyO1xyXG5cdFx0bGV0IGN1cnJlbnRTbGlkZXJQb3MgPSAwO1xyXG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2xpZGVyKS5zdHlsZS50cmFuc2Zvcm0gIT0gJycpIHtcclxuXHRcdFx0Y3VycmVudFNsaWRlclBvcyA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2xpZGVyKS5zdHlsZS50cmFuc2Zvcm0ucmVwbGFjZShcInRyYW5zbGF0ZVgoXCIsXCJcIikucmVwbGFjZShcInB4KVwiLFwiXCIpLnJlcGxhY2UoXCItXCIsXCJcIikpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgc2xpZGVBbW91bnQgPSBjYWxjdWxhdGVTbGlkZVNpemUodGFyZ2V0KTtcclxuXHRcdGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykgPT0gJyNuZXh0Jyl7XHJcblx0XHRcdGlmKCAoY3VycmVudFNsaWRlclBvcyArIHNsaWRlQW1vdW50KSA8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNsaWRlcikuc2Nyb2xsV2lkdGgpe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZXJJdGVtKys7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1pbmRpY2F0b3JzIGEnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWluZGljYXRvcnMgbGk6bnRoLWNoaWxkKCcrY3VycmVudFNsaWRlckl0ZW0rJykgYScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2xpZGVyKS5zdHlsZSA9ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLScrIChjdXJyZW50U2xpZGVyUG9zICsgc2xpZGVBbW91bnQpICsncHgpJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PSAnI3ByZXYnKXtcclxuXHRcdFx0aWYoIChjdXJyZW50U2xpZGVyUG9zIC0gc2xpZGVBbW91bnQpID49IDApe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZXJJdGVtLS07XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1pbmRpY2F0b3JzIGEnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWluZGljYXRvcnMgbGk6bnRoLWNoaWxkKCcrY3VycmVudFNsaWRlckl0ZW0rJykgYScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2xpZGVyKS5zdHlsZSA9ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLScrIChjdXJyZW50U2xpZGVyUG9zIC0gc2xpZGVBbW91bnQpICsncHgpJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRpZihpbmRpY2F0b3Ipe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1pbmRpY2F0b3JzIGEnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0Y29uc3QgdGFyZ2V0U2xpZGUgPSBlLnRhcmdldC5kYXRhc2V0LnNsaWRlVG87XHJcblx0XHRsZXQgdGFyZ2V0U2xpZGVyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdGxldCBzbGlkZUFtb3VudCA9IGNhbGN1bGF0ZVNsaWRlU2l6ZSh0YXJnZXRTbGlkZXIpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTbGlkZXIucGFyZW50Tm9kZS5kYXRhc2V0LnRhcmdldFNsaWRlcikuc3R5bGUgPSAndHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0nKyAoc2xpZGVBbW91bnQgKiAodGFyZ2V0U2xpZGUgLSAxKSkgKydweCknO1xyXG5cdFx0Y3VycmVudFNsaWRlckl0ZW0gPSB0YXJnZXRTbGlkZTtcclxuXHR9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2xpZGVTaXplKHRhcmdldCl7XHJcblx0bGV0IHRhcmdldFNsaWRlciA9IHRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQudGFyZ2V0U2xpZGVyO1xyXG5cdGxldCBmaXJzdFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTbGlkZXIpLmNoaWxkcmVuWzBdO1xyXG5cdGxldCBzbGlkZU1hcmdpbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZpcnN0U2xpZGUpLm1hcmdpblJpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKTtcclxuXHRjb25zdCBzbGlkZUFtb3VudCA9IGZpcnN0U2xpZGUub2Zmc2V0V2lkdGggKyBzbGlkZU1hcmdpbjtcclxuXHRyZXR1cm4gc2xpZGVBbW91bnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFNsaWRlclwiKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB0b3VjaHN0YXJ0WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbn0sIGZhbHNlKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFNsaWRlclwiKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdG91Y2hlbmRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICAgIGhhbmRsZUdlc3R1cmUoKTtcclxufSwgZmFsc2UpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUdlc3R1cmUoKSB7XHJcbiAgICBpZiAodG91Y2hlbmRYIDwgdG91Y2hzdGFydFgpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udHJvbHMgLmNvbnRyb2wtcmlnaHQnKS5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3VjaGVuZFggPiB0b3VjaHN0YXJ0WCkge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250cm9scyAuY29udHJvbC1sZWZ0JykuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/product-slider.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;