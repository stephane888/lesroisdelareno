/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/product-full.scss":
/*!************************************!*\
  !*** ./src/scss/product-full.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/range-slider.scss":
/*!************************************!*\
  !*** ./src/scss/range-slider.scss ***!
  \************************************/
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
/*!********************************!*\
  !*** ./src/js/product-full.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_product_full_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/product-full.scss */ "./src/scss/product-full.scss");
/* harmony import */ var _scss_range_slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/range-slider.scss */ "./src/scss/range-slider.scss");


/**
 * range price
 */

$ = window.jQuery;

(function () {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function loadScript(src) {
    return new Promise(resolv => {
      var s = document.createElement("script");
      s.setAttribute("src", src);

      s.onload = function () {
        console.log("Chargement du script ok : ", src);
        resolv(true);
      };

      document.head.appendChild(s);
    });
  }

  function loadstyle(src) {
    return new Promise(resolv => {
      var s = document.createElement("link");
      s.setAttribute("rel", "stylesheet");
      s.setAttribute("href", src);

      s.onload = function () {
        console.log("Chargement du Style ok : ", src);
        resolv(true);
      };

      document.head.appendChild(s);
    });
  }

  var displayRangeSlider = () => {
    let fieldset = document.querySelector(".filter-side-bar-prix fieldset"); //fieldset.style.display = "none";

    let dd = document.createElement("div");
    dd.setAttribute("id", "product-full-ion-range-slider");
    insertAfter(fieldset, dd);
    setTimeout(() => {
      var typingTimer;
      var doneTypingInterval = 2500;
      var InputMin = document.querySelector('.filter-side-bar-prix [name="number[min]"]');
      var InputMax = document.querySelector('.filter-side-bar-prix [name="number[max]"]');
      console.log("InputMax.value : ", InputMax.value, " : ", parseInt(InputMax.value));
      $("#product-full-ion-range-slider").slider({
        range: true,
        min: InputMin.value ? parseInt(InputMin.value) : 0,
        max: InputMax.value ? parseInt(InputMax.value) : 500,
        values: [0, 500],
        slide: function (event, ui) {
          InputMin.value = ui.values[0];
          InputMax.value = ui.values[1]; // --

          clearTimeout(typingTimer);
          typingTimer = setTimeout(() => {
            document.querySelector('.filter-side-bar-prix [type="submit"]').click();
          }, doneTypingInterval);
        }
      });
    }, 800);
  };

  if (window.jQuery && window.jQuery.ui && window.jQuery.ui.slider) {
    console.log("window.jQuery.ui", window.jQuery.ui);
    displayRangeSlider();
  } else {
    loadScript("/themes/custom/lesroisdelareno/js/jquery-ui.min.js").then(() => {
      loadstyle("/themes/custom/lesroisdelareno/css/jquery-ui-base.css").then(() => {
        displayRangeSlider();
      });
    });
  }
  /**
   *
   */


  var selectElement = document.querySelector('.filter-principal [name="sort_by"]');
  selectElement.addEventListener("change", () => {
    document.querySelector(' .filter-principal [type="submit"] ').click();
  });
})();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUNoRWhCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDbEIsTUFBTSxDQUFDQyxNQUFQLENBQWN1QyxFQUE5QztBQUNBbEIsSUFBQUEsa0JBQWtCO0FBQ25CLEdBSEQsTUFHTztBQUNMZCxJQUFBQSxVQUFVLENBQUMsb0RBQUQsQ0FBVixDQUFpRW1DLElBQWpFLENBQ0UsTUFBTTtBQUNKdEIsTUFBQUEsU0FBUyxDQUFDLHVEQUFELENBQVQsQ0FBbUVzQixJQUFuRSxDQUNFLE1BQU07QUFDSnJCLFFBQUFBLGtCQUFrQjtBQUNuQixPQUhIO0FBS0QsS0FQSDtBQVNEO0FBQ0Q7QUFDRjtBQUNBOzs7QUFDRSxNQUFJc0IsYUFBYSxHQUFHL0IsUUFBUSxDQUFDVyxhQUFULENBQ2xCLG9DQURrQixDQUFwQjtBQUdBb0IsRUFBQUEsYUFBYSxDQUFDQyxnQkFBZCxDQUErQixRQUEvQixFQUF5QyxNQUFNO0FBQzdDaEMsSUFBQUEsUUFBUSxDQUFDVyxhQUFULENBQXVCLHFDQUF2QixFQUE4RGtCLEtBQTlEO0FBQ0QsR0FGRDtBQUdELENBMUZELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vc3JjL3Njc3MvcHJvZHVjdC1mdWxsLnNjc3MiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL3NyYy9zY3NzL3JhbmdlLXNsaWRlci5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvanMvcHJvZHVjdC1mdWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3Njc3MvcHJvZHVjdC1mdWxsLnNjc3NcIjtcbmltcG9ydCBcIi4uL3Njc3MvcmFuZ2Utc2xpZGVyLnNjc3NcIjtcblxuLyoqXG4gKiByYW5nZSBwcmljZVxuICovXG4kID0gd2luZG93LmpRdWVyeTtcbihmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGluc2VydEFmdGVyKHJlZmVyZW5jZU5vZGUsIG5ld05vZGUpIHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWRTY3JpcHQoc3JjKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHYpID0+IHtcbiAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHMuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XG4gICAgICBzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFyZ2VtZW50IGR1IHNjcmlwdCBvayA6IFwiLCBzcmMpO1xuICAgICAgICByZXNvbHYodHJ1ZSk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBsb2Fkc3R5bGUoc3JjKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHYpID0+IHtcbiAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICBzLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgICBzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgc3JjKTtcbiAgICAgIHMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoYXJnZW1lbnQgZHUgU3R5bGUgb2sgOiBcIiwgc3JjKTtcbiAgICAgICAgcmVzb2x2KHRydWUpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG4gICAgfSk7XG4gIH1cbiAgdmFyIGRpc3BsYXlSYW5nZVNsaWRlciA9ICgpID0+IHtcbiAgICBsZXQgZmllbGRzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1zaWRlLWJhci1wcml4IGZpZWxkc2V0XCIpO1xuICAgIC8vZmllbGRzZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9kdWN0LWZ1bGwtaW9uLXJhbmdlLXNsaWRlclwiKTtcbiAgICBpbnNlcnRBZnRlcihmaWVsZHNldCwgZGQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIHR5cGluZ1RpbWVyO1xuICAgICAgdmFyIGRvbmVUeXBpbmdJbnRlcnZhbCA9IDI1MDA7XG4gICAgICB2YXIgSW5wdXRNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmZpbHRlci1zaWRlLWJhci1wcml4IFtuYW1lPVwibnVtYmVyW21pbl1cIl0nXG4gICAgICApO1xuICAgICAgdmFyIElucHV0TWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy5maWx0ZXItc2lkZS1iYXItcHJpeCBbbmFtZT1cIm51bWJlclttYXhdXCJdJ1xuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIklucHV0TWF4LnZhbHVlIDogXCIsXG4gICAgICAgIElucHV0TWF4LnZhbHVlLFxuICAgICAgICBcIiA6IFwiLFxuICAgICAgICBwYXJzZUludChJbnB1dE1heC52YWx1ZSlcbiAgICAgICk7XG4gICAgICAkKFwiI3Byb2R1Y3QtZnVsbC1pb24tcmFuZ2Utc2xpZGVyXCIpLnNsaWRlcih7XG4gICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICBtaW46IElucHV0TWluLnZhbHVlID8gcGFyc2VJbnQoSW5wdXRNaW4udmFsdWUpIDogMCxcbiAgICAgICAgbWF4OiBJbnB1dE1heC52YWx1ZSA/IHBhcnNlSW50KElucHV0TWF4LnZhbHVlKSA6IDUwMCxcbiAgICAgICAgdmFsdWVzOiBbMCwgNTAwXSxcbiAgICAgICAgc2xpZGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICBJbnB1dE1pbi52YWx1ZSA9IHVpLnZhbHVlc1swXTtcbiAgICAgICAgICBJbnB1dE1heC52YWx1ZSA9IHVpLnZhbHVlc1sxXTtcbiAgICAgICAgICAvLyAtLVxuICAgICAgICAgIGNsZWFyVGltZW91dCh0eXBpbmdUaW1lcik7XG4gICAgICAgICAgdHlwaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXNpZGUtYmFyLXByaXggW3R5cGU9XCJzdWJtaXRcIl0nKVxuICAgICAgICAgICAgICAuY2xpY2soKTtcbiAgICAgICAgICB9LCBkb25lVHlwaW5nSW50ZXJ2YWwpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSwgODAwKTtcbiAgfTtcbiAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgd2luZG93LmpRdWVyeS51aSAmJiB3aW5kb3cualF1ZXJ5LnVpLnNsaWRlcikge1xuICAgIGNvbnNvbGUubG9nKFwid2luZG93LmpRdWVyeS51aVwiLCB3aW5kb3cualF1ZXJ5LnVpKTtcbiAgICBkaXNwbGF5UmFuZ2VTbGlkZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2FkU2NyaXB0KFwiL3RoZW1lcy9jdXN0b20vbGVzcm9pc2RlbGFyZW5vL2pzL2pxdWVyeS11aS5taW4uanNcIikudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgbG9hZHN0eWxlKFwiL3RoZW1lcy9jdXN0b20vbGVzcm9pc2RlbGFyZW5vL2Nzcy9qcXVlcnktdWktYmFzZS5jc3NcIikudGhlbihcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5UmFuZ2VTbGlkZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICAvKipcbiAgICpcbiAgICovXG4gIHZhciBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmZpbHRlci1wcmluY2lwYWwgW25hbWU9XCJzb3J0X2J5XCJdJ1xuICApO1xuICBzZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyAuZmlsdGVyLXByaW5jaXBhbCBbdHlwZT1cInN1Ym1pdFwiXSAnKS5jbGljaygpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImpRdWVyeSIsImluc2VydEFmdGVyIiwicmVmZXJlbmNlTm9kZSIsIm5ld05vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJsb2FkU2NyaXB0Iiwic3JjIiwiUHJvbWlzZSIsInJlc29sdiIsInMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsImFwcGVuZENoaWxkIiwibG9hZHN0eWxlIiwiZGlzcGxheVJhbmdlU2xpZGVyIiwiZmllbGRzZXQiLCJxdWVyeVNlbGVjdG9yIiwiZGQiLCJzZXRUaW1lb3V0IiwidHlwaW5nVGltZXIiLCJkb25lVHlwaW5nSW50ZXJ2YWwiLCJJbnB1dE1pbiIsIklucHV0TWF4IiwidmFsdWUiLCJwYXJzZUludCIsInNsaWRlciIsInJhbmdlIiwibWluIiwibWF4IiwidmFsdWVzIiwic2xpZGUiLCJldmVudCIsInVpIiwiY2xlYXJUaW1lb3V0IiwiY2xpY2siLCJ0aGVuIiwic2VsZWN0RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9