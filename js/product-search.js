console.log("this is the product-search js file");

$ = jQuery;

console.log($);

var productSearch = $("#product-search");

var searchForm = productSearch.find("form");

// console.log(searchForm);

$(document).ready(function() {
  $('#product-search form').on('submit', function(e){
    // validation code here
    e.preventDefault();
    console.log("form submitted");
    var term = $(".search-input").val();
    console.log(term);

  });
});

/*$("#product-search form").submit(function(e){
    return false;
    console.log("form submitted");
});*/

/*searchForm.submit(function(e){
	e.preventDefault();

	

});*/