window[GLOBAL_NAMESPACE] = {};
// Global Variables
window[GLOBAL_NAMESPACE].scrollable = [];
window[GLOBAL_NAMESPACE].scrollBound = false;

window[GLOBAL_NAMESPACE].bindScrollEvents = function() {
	// Check to see if the scroll has been previously bound. If it has, don't do it again
	if (window[GLOBAL_NAMESPACE].scrollBound == true) return;	
	window[GLOBAL_NAMESPACE].scrollBound = true;
	
	$(window).on('scroll', function(e) {
		var scrollAmt = $(window).scrollTop();
		for(item in window[GLOBAL_NAMESPACE].scrollable) {
			window[GLOBAL_NAMESPACE].scrollable[item].update(scrollAmt);
		}
	});
}