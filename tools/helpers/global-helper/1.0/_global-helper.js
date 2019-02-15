/*  ----
 *  global-helper.js
 *  ----
 *  Developer: Addison Rodomista -- R
 *  Crafted: Jan 28th, 2016
 *  --
 *  Summary
 *  Set of tools used to solve common global related tasks 
 */

window[GLOBAL_NAMESPACE]['GlobalTools'] = {
	
	// Duplicate an object
	clone: function(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	// Determine end of a CSS animation
	transitionEnd: function() {
	 return "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
	},
	// Assume func is called often (eg. resize). 
	// With debounce, func will be called once, after it stops being called for 'wait' milliseconds. 
	// If immediate, trigger the function on the leading edge, instead of the trailing.
	debounce : function (func, wait, immediate) {
	  var timeout;
	  return function() {
	    var context = this, args = arguments;
	    var later = function() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	},
	// Limit the amount of times a `callback` fn is called, once per every `limit`.
	throttle : function (callback, limit) {
	    var wait = false;                 // Initially, we're not waiting
	    return function () {              // We return a throttled function
	        if (!wait) {                  // If we're not waiting
	            callback.call();          // Execute users function
	            wait = true;              // Prevent future invocations
	            setTimeout(function () {  // After a period of time
	                wait = false;         // And allow future invocations
	            }, limit);
	        }
	    }
	},
	// Determine if an element is in the viewport
	inView: function(el) {	    	
	    var rect = el[0].getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
	},

}

	

