/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/defautl-style.scss":
/*!*************************************!*\
  !*** ./src/scss/defautl-style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./src/js/defautl-style.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_defautl_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/defautl-style.scss */ "./src/scss/defautl-style.scss");
 //

(function ($, Drupal) {
  console.log("Drupal.behaviors : ", Drupal.behaviors);

  function addMargeTop() {
    var HM = document.querySelector(".container-menu .navbar-collapse").clientHeight;

    if (document.body.clientWidth > 992) {
      $(".page-node-custom").css({
        marginTop: HM / 2 - 10
      });
      $(".page-orther-custom").css({
        marginTop: HM + "px"
      });
      var page = document.querySelector(".page-term-custom");
      if (page) page.style.marginTop = HM - 10 + "px";
    }
  }

  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      addMargeTop(context);
    }
  };
})(jQuery, Drupal);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9kZWZhdXRsLXN0eWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztDQ0pBOztBQUNBLENBQUMsVUFBVUEsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQ3BCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0YsTUFBTSxDQUFDRyxTQUExQzs7QUFDQSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlDLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQ1Asa0NBRE8sRUFFUEMsWUFGRjs7QUFHQSxRQUFJRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxHQUE0QixHQUFoQyxFQUFxQztBQUNuQ1gsTUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJZLEdBQXZCLENBQTJCO0FBQUVDLFFBQUFBLFNBQVMsRUFBRVAsRUFBRSxHQUFHLENBQUwsR0FBUztBQUF0QixPQUEzQjtBQUNBTixNQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlksR0FBekIsQ0FBNkI7QUFDM0JDLFFBQUFBLFNBQVMsRUFBRVAsRUFBRSxHQUFHO0FBRFcsT0FBN0I7QUFHQSxVQUFJUSxJQUFJLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBWDtBQUNBLFVBQUlNLElBQUosRUFBVUEsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFNBQVgsR0FBdUJQLEVBQUUsR0FBRyxFQUFMLEdBQVUsSUFBakM7QUFDWDtBQUNGOztBQUNETCxFQUFBQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJZLGdCQUFqQixHQUFvQztBQUNsQ0MsSUFBQUEsTUFBTSxFQUFFLFVBQVVDLE9BQVYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQ25DZCxNQUFBQSxXQUFXLENBQUNhLE9BQUQsQ0FBWDtBQUNEO0FBSGlDLEdBQXBDO0FBS0QsQ0FwQkQsRUFvQkdFLE1BcEJILEVBb0JXbkIsTUFwQlgsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvc2Nzcy9kZWZhdXRsLXN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL3NyYy9qcy9kZWZhdXRsLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3Njc3MvZGVmYXV0bC1zdHlsZS5zY3NzXCI7XG5cbi8vXG4oZnVuY3Rpb24gKCQsIERydXBhbCkge1xuICBjb25zb2xlLmxvZyhcIkRydXBhbC5iZWhhdmlvcnMgOiBcIiwgRHJ1cGFsLmJlaGF2aW9ycyk7XG4gIGZ1bmN0aW9uIGFkZE1hcmdlVG9wKCkge1xuICAgIHZhciBITSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb250YWluZXItbWVudSAubmF2YmFyLWNvbGxhcHNlXCJcbiAgICApLmNsaWVudEhlaWdodDtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDk5Mikge1xuICAgICAgJChcIi5wYWdlLW5vZGUtY3VzdG9tXCIpLmNzcyh7IG1hcmdpblRvcDogSE0gLyAyIC0gMTAgfSk7XG4gICAgICAkKFwiLnBhZ2Utb3J0aGVyLWN1c3RvbVwiKS5jc3Moe1xuICAgICAgICBtYXJnaW5Ub3A6IEhNICsgXCJweFwiLFxuICAgICAgfSk7XG4gICAgICB2YXIgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10ZXJtLWN1c3RvbVwiKTtcbiAgICAgIGlmIChwYWdlKSBwYWdlLnN0eWxlLm1hcmdpblRvcCA9IEhNIC0gMTAgKyBcInB4XCI7XG4gICAgfVxuICB9XG4gIERydXBhbC5iZWhhdmlvcnMubXlNb2R1bGVCZWhhdmlvciA9IHtcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgYWRkTWFyZ2VUb3AoY29udGV4dCk7XG4gICAgfSxcbiAgfTtcbn0pKGpRdWVyeSwgRHJ1cGFsKTtcbiJdLCJuYW1lcyI6WyIkIiwiRHJ1cGFsIiwiY29uc29sZSIsImxvZyIsImJlaGF2aW9ycyIsImFkZE1hcmdlVG9wIiwiSE0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRIZWlnaHQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjc3MiLCJtYXJnaW5Ub3AiLCJwYWdlIiwic3R5bGUiLCJteU1vZHVsZUJlaGF2aW9yIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==