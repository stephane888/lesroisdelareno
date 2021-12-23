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
   * bug: evenement addEventListener non definit.( à corriger )
   */
  // var selectElement = document.querySelector(
  //   '.filter-principal [name="sort_by"]'
  // );
  // selectElement.addEventListener("change", () => {
  //   document.querySelector(' .filter-principal [type="submit"] ').click();
  // });

})();
/**
 * Affichage du bouton show hide text body.
 */


var body = document.querySelector(".product-full .field.description");
var H = body.clientHeight;

if (H > 500) {
  body.classList.add("hidden-text");
  var button = document.querySelector(".product-tabs--button");
  button.style.visibility = "visible";
  button.style.opacity = 1;
  button.addEventListener("click", () => {
    if (body.classList.contains("hidden-text")) body.classList.remove("hidden-text");else body.classList.add("hidden-text");
  });
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0LWZ1bGwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBWDs7QUFDQSxDQUFDLFlBQVk7QUFDWCxXQUFTQyxXQUFULENBQXFCQyxhQUFyQixFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDM0NELElBQUFBLGFBQWEsQ0FBQ0UsVUFBZCxDQUF5QkMsWUFBekIsQ0FBc0NGLE9BQXRDLEVBQStDRCxhQUFhLENBQUNJLFdBQTdEO0FBQ0Q7O0FBQ0QsV0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDdkIsV0FBTyxJQUFJQyxPQUFKLENBQWFDLE1BQUQsSUFBWTtBQUM3QixVQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFSO0FBQ0FGLE1BQUFBLENBQUMsQ0FBQ0csWUFBRixDQUFlLEtBQWYsRUFBc0JOLEdBQXRCOztBQUNBRyxNQUFBQSxDQUFDLENBQUNJLE1BQUYsR0FBVyxZQUFZO0FBQ3JCQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ1QsR0FBMUM7QUFDQUUsUUFBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTjtBQUNELE9BSEQ7O0FBSUFFLE1BQUFBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjQyxXQUFkLENBQTBCUixDQUExQjtBQUNELEtBUk0sQ0FBUDtBQVNEOztBQUNELFdBQVNTLFNBQVQsQ0FBbUJaLEdBQW5CLEVBQXdCO0FBQ3RCLFdBQU8sSUFBSUMsT0FBSixDQUFhQyxNQUFELElBQVk7QUFDN0IsVUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUjtBQUNBRixNQUFBQSxDQUFDLENBQUNHLFlBQUYsQ0FBZSxLQUFmLEVBQXNCLFlBQXRCO0FBQ0FILE1BQUFBLENBQUMsQ0FBQ0csWUFBRixDQUFlLE1BQWYsRUFBdUJOLEdBQXZCOztBQUNBRyxNQUFBQSxDQUFDLENBQUNJLE1BQUYsR0FBVyxZQUFZO0FBQ3JCQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q1QsR0FBekM7QUFDQUUsUUFBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTjtBQUNELE9BSEQ7O0FBSUFFLE1BQUFBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjQyxXQUFkLENBQTBCUixDQUExQjtBQUNELEtBVE0sQ0FBUDtBQVVEOztBQUNELE1BQUlVLGtCQUFrQixHQUFHLE1BQU07QUFDN0IsUUFBSUMsUUFBUSxHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQWYsQ0FENkIsQ0FFN0I7O0FBQ0EsUUFBSUMsRUFBRSxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBVyxJQUFBQSxFQUFFLENBQUNWLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsK0JBQXRCO0FBQ0FiLElBQUFBLFdBQVcsQ0FBQ3FCLFFBQUQsRUFBV0UsRUFBWCxDQUFYO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsVUFBSUMsV0FBSjtBQUNBLFVBQUlDLGtCQUFrQixHQUFHLElBQXpCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHaEIsUUFBUSxDQUFDVyxhQUFULENBQ2IsNENBRGEsQ0FBZjtBQUdBLFVBQUlNLFFBQVEsR0FBR2pCLFFBQVEsQ0FBQ1csYUFBVCxDQUNiLDRDQURhLENBQWY7QUFJQXpCLE1BQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DZ0MsTUFBcEMsQ0FBMkM7QUFDekNDLFFBQUFBLEtBQUssRUFBRSxJQURrQztBQUV6Q0MsUUFBQUEsR0FBRyxFQUFFSixRQUFRLENBQUNLLEtBQVQsR0FBaUJDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDSyxLQUFWLENBQXpCLEdBQTRDLENBRlI7QUFHekNFLFFBQUFBLEdBQUcsRUFBRU4sUUFBUSxDQUFDSSxLQUFULEdBQWlCQyxRQUFRLENBQUNMLFFBQVEsQ0FBQ0ksS0FBVixDQUF6QixHQUE0QyxHQUhSO0FBSXpDRyxRQUFBQSxNQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixDQUppQztBQUt6Q0MsUUFBQUEsS0FBSyxFQUFFLFVBQVVDLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCO0FBQzFCWCxVQUFBQSxRQUFRLENBQUNLLEtBQVQsR0FBaUJNLEVBQUUsQ0FBQ0gsTUFBSCxDQUFVLENBQVYsQ0FBakI7QUFDQVAsVUFBQUEsUUFBUSxDQUFDSSxLQUFULEdBQWlCTSxFQUFFLENBQUNILE1BQUgsQ0FBVSxDQUFWLENBQWpCLENBRjBCLENBRzFCOztBQUNBSSxVQUFBQSxZQUFZLENBQUNkLFdBQUQsQ0FBWjtBQUNBQSxVQUFBQSxXQUFXLEdBQUdELFVBQVUsQ0FBQyxNQUFNO0FBQzdCYixZQUFBQSxRQUFRLENBQ0xXLGFBREgsQ0FDaUIsdUNBRGpCLEVBRUdrQixLQUZIO0FBR0QsV0FKdUIsRUFJckJkLGtCQUpxQixDQUF4QjtBQUtEO0FBZndDLE9BQTNDO0FBaUJELEtBM0JTLEVBMkJQLEdBM0JPLENBQVY7QUE0QkQsR0FsQ0Q7O0FBbUNBLE1BQUk1QixNQUFNLENBQUNDLE1BQVAsSUFBaUJELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjdUMsRUFBL0IsSUFBcUN4QyxNQUFNLENBQUNDLE1BQVAsQ0FBY3VDLEVBQWQsQ0FBaUJULE1BQTFELEVBQWtFO0FBQ2hFZCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ2xCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjdUMsRUFBOUM7QUFDQWxCLElBQUFBLGtCQUFrQjtBQUNuQixHQUhELE1BR087QUFDTGQsSUFBQUEsVUFBVSxDQUFDLG9EQUFELENBQVYsQ0FBaUVtQyxJQUFqRSxDQUNFLE1BQU07QUFDSnRCLE1BQUFBLFNBQVMsQ0FBQyx1REFBRCxDQUFULENBQW1Fc0IsSUFBbkUsQ0FDRSxNQUFNO0FBQ0pyQixRQUFBQSxrQkFBa0I7QUFDbkIsT0FISDtBQUtELEtBUEg7QUFTRDtBQUNEO0FBQ0Y7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxDQXJGRDtBQXVGQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlzQixJQUFJLEdBQUcvQixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsa0NBQXZCLENBQVg7QUFDQSxJQUFJcUIsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFlBQWI7O0FBQ0EsSUFBSUQsQ0FBQyxHQUFHLEdBQVIsRUFBYTtBQUNYRCxFQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNBLE1BQUlDLE1BQU0sR0FBR3BDLFFBQVEsQ0FBQ1csYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjtBQUNBeUIsRUFBQUEsTUFBTSxDQUFDQyxLQUFQLENBQWFDLFVBQWIsR0FBMEIsU0FBMUI7QUFDQUYsRUFBQUEsTUFBTSxDQUFDQyxLQUFQLENBQWFFLE9BQWIsR0FBdUIsQ0FBdkI7QUFDQUgsRUFBQUEsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxNQUFNO0FBQ3JDLFFBQUlULElBQUksQ0FBQ0csU0FBTCxDQUFlTyxRQUFmLENBQXdCLGFBQXhCLENBQUosRUFDRVYsSUFBSSxDQUFDRyxTQUFMLENBQWVRLE1BQWYsQ0FBc0IsYUFBdEIsRUFERixLQUVLWCxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNOLEdBSkQ7QUFLRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL3NyYy9zY3NzL3Byb2R1Y3QtZnVsbC5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvc2Nzcy9yYW5nZS1zbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vc3JjL2pzL3Byb2R1Y3QtZnVsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zY3NzL3Byb2R1Y3QtZnVsbC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zY3NzL3JhbmdlLXNsaWRlci5zY3NzXCI7XG5cbi8qKlxuICogcmFuZ2UgcHJpY2VcbiAqL1xuJCA9IHdpbmRvdy5qUXVlcnk7XG4oZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbnNlcnRBZnRlcihyZWZlcmVuY2VOb2RlLCBuZXdOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgfVxuICBmdW5jdGlvbiBsb2FkU2NyaXB0KHNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2KSA9PiB7XG4gICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICBzLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xuICAgICAgcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhcmdlbWVudCBkdSBzY3JpcHQgb2sgOiBcIiwgc3JjKTtcbiAgICAgICAgcmVzb2x2KHRydWUpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbG9hZHN0eWxlKHNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2KSA9PiB7XG4gICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgICAgcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHNyYyk7XG4gICAgICBzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFyZ2VtZW50IGR1IFN0eWxlIG9rIDogXCIsIHNyYyk7XG4gICAgICAgIHJlc29sdih0cnVlKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH0pO1xuICB9XG4gIHZhciBkaXNwbGF5UmFuZ2VTbGlkZXIgPSAoKSA9PiB7XG4gICAgbGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXItc2lkZS1iYXItcHJpeCBmaWVsZHNldFwiKTtcbiAgICAvL2ZpZWxkc2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZXQgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvZHVjdC1mdWxsLWlvbi1yYW5nZS1zbGlkZXJcIik7XG4gICAgaW5zZXJ0QWZ0ZXIoZmllbGRzZXQsIGRkKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhciB0eXBpbmdUaW1lcjtcbiAgICAgIHZhciBkb25lVHlwaW5nSW50ZXJ2YWwgPSAyNTAwO1xuICAgICAgdmFyIElucHV0TWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy5maWx0ZXItc2lkZS1iYXItcHJpeCBbbmFtZT1cIm51bWJlclttaW5dXCJdJ1xuICAgICAgKTtcbiAgICAgIHZhciBJbnB1dE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcuZmlsdGVyLXNpZGUtYmFyLXByaXggW25hbWU9XCJudW1iZXJbbWF4XVwiXSdcbiAgICAgICk7XG5cbiAgICAgICQoXCIjcHJvZHVjdC1mdWxsLWlvbi1yYW5nZS1zbGlkZXJcIikuc2xpZGVyKHtcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgIG1pbjogSW5wdXRNaW4udmFsdWUgPyBwYXJzZUludChJbnB1dE1pbi52YWx1ZSkgOiAwLFxuICAgICAgICBtYXg6IElucHV0TWF4LnZhbHVlID8gcGFyc2VJbnQoSW5wdXRNYXgudmFsdWUpIDogNTAwLFxuICAgICAgICB2YWx1ZXM6IFswLCA1MDBdLFxuICAgICAgICBzbGlkZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgIElucHV0TWluLnZhbHVlID0gdWkudmFsdWVzWzBdO1xuICAgICAgICAgIElucHV0TWF4LnZhbHVlID0gdWkudmFsdWVzWzFdO1xuICAgICAgICAgIC8vIC0tXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHR5cGluZ1RpbWVyKTtcbiAgICAgICAgICB0eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItc2lkZS1iYXItcHJpeCBbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgICAgICAgICAgIC5jbGljaygpO1xuICAgICAgICAgIH0sIGRvbmVUeXBpbmdJbnRlcnZhbCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LCA4MDApO1xuICB9O1xuICBpZiAod2luZG93LmpRdWVyeSAmJiB3aW5kb3cualF1ZXJ5LnVpICYmIHdpbmRvdy5qUXVlcnkudWkuc2xpZGVyKSB7XG4gICAgY29uc29sZS5sb2coXCJ3aW5kb3cualF1ZXJ5LnVpXCIsIHdpbmRvdy5qUXVlcnkudWkpO1xuICAgIGRpc3BsYXlSYW5nZVNsaWRlcigpO1xuICB9IGVsc2Uge1xuICAgIGxvYWRTY3JpcHQoXCIvdGhlbWVzL2N1c3RvbS9sZXNyb2lzZGVsYXJlbm8vanMvanF1ZXJ5LXVpLm1pbi5qc1wiKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsb2Fkc3R5bGUoXCIvdGhlbWVzL2N1c3RvbS9sZXNyb2lzZGVsYXJlbm8vY3NzL2pxdWVyeS11aS1iYXNlLmNzc1wiKS50aGVuKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlSYW5nZVNsaWRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBidWc6IGV2ZW5lbWVudCBhZGRFdmVudExpc3RlbmVyIG5vbiBkZWZpbml0Liggw6AgY29ycmlnZXIgKVxuICAgKi9cbiAgLy8gdmFyIHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICcuZmlsdGVyLXByaW5jaXBhbCBbbmFtZT1cInNvcnRfYnlcIl0nXG4gIC8vICk7XG4gIC8vIHNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIC5maWx0ZXItcHJpbmNpcGFsIFt0eXBlPVwic3VibWl0XCJdICcpLmNsaWNrKCk7XG4gIC8vIH0pO1xufSkoKTtcblxuLyoqXG4gKiBBZmZpY2hhZ2UgZHUgYm91dG9uIHNob3cgaGlkZSB0ZXh0IGJvZHkuXG4gKi9cbnZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LWZ1bGwgLmZpZWxkLmRlc2NyaXB0aW9uXCIpO1xudmFyIEggPSBib2R5LmNsaWVudEhlaWdodDtcbmlmIChIID4gNTAwKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImhpZGRlbi10ZXh0XCIpO1xuICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXRhYnMtLWJ1dHRvblwiKTtcbiAgYnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tdGV4dFwiKSlcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbi10ZXh0XCIpO1xuICAgIGVsc2UgYm9keS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLXRleHRcIik7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJpbnNlcnRBZnRlciIsInJlZmVyZW5jZU5vZGUiLCJuZXdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibG9hZFNjcmlwdCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHYiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImxvYWRzdHlsZSIsImRpc3BsYXlSYW5nZVNsaWRlciIsImZpZWxkc2V0IiwicXVlcnlTZWxlY3RvciIsImRkIiwic2V0VGltZW91dCIsInR5cGluZ1RpbWVyIiwiZG9uZVR5cGluZ0ludGVydmFsIiwiSW5wdXRNaW4iLCJJbnB1dE1heCIsInNsaWRlciIsInJhbmdlIiwibWluIiwidmFsdWUiLCJwYXJzZUludCIsIm1heCIsInZhbHVlcyIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsImNsZWFyVGltZW91dCIsImNsaWNrIiwidGhlbiIsImJvZHkiLCJIIiwiY2xpZW50SGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYnV0dG9uIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=