function() {
	
if(document.querySelector(".page-template-collectionsproduct")){
	
		//var randlist = document.querySelector(".category-list.rand");
		var alphlist = document.querySelector(".category-list.alph");
		var loading = document.querySelector(".loading");
		var testBlock = document.querySelector(".custom-block");
		var allowLoad = true;
	
		var loadMore;
		//var randIDs = [];
		
		var hash = window.location.hash;
		if(hash.length > 0){
			//randlist.className = "category-list rand "+hash.substr(1);
			alphlist.className = "category-list alph "+hash.substr(1);
			setTimeout(function(){//randlist.classList.add("hide");
				alphlist.classList.add("hide");}, 600);
		}

		var catselect = document.querySelector(".category-selector select");
		
		$(catselect).find("option[value=" + hash.substr(1) +"]").attr('selected', true);
		
		catselect.addEventListener('change', function(){
			/*if (catselect.value == "all"){
				document.querySelector(".wrapper .main-content .template-content .row .hero-block div.cta h2").innerHTML = "THE DRIFT COLLECTION";
			} else {
				document.querySelector(".wrapper .main-content .template-content .row .hero-block div.cta h2").innerHTML = catselect.value;
			}*/
			//randlist.className = "category-list rand "+catselect.value;
			alphlist.className = "category-list alph "+catselect.value;
			window.location.hash = catselect.value;
			setTimeout(function(){//randlist.classList.add("hide");
				alphlist.classList.add("hide");}, 600);
			loadMore.destroy();
			createWaypoint();
		})

		var catselectnew = document.querySelector(".category-selector .cat-list a");
		
		$(catselectnew).find("option[value=" + hash.substr(1) +"]").attr('selected', true);
		
		catselectnew.addEventListener('click', function(){
			/*if (catselect.value == "all"){
				document.querySelector(".wrapper .main-content .template-content .row .hero-block div.cta h2").innerHTML = "THE DRIFT COLLECTION";
			} else {
				document.querySelector(".wrapper .main-content .template-content .row .hero-block div.cta h2").innerHTML = catselect.value;
			}*/
			//randlist.className = "category-list rand "+catselect.value;
			alphlist.className = "category-list alph "+catselectnew.value;
			window.location.hash = catselectnew.value;
			setTimeout(function(){//randlist.classList.add("hide");
				alphlist.classList.add("hide");}, 600);
			loadMore.destroy();
			createWaypoint();
		})
		
		var callback;
		
		var createWaypoint = function () {
		  loadMore = new Waypoint({
			  element: testBlock,
			  handler: function(direction) {
			  	if(allowLoad && direction == "down"){
					allowLoad = false;
					/*$.post(
						CONTENT + "/themes/vh/pages/partials/productsrand.php",
						{'no[]': randIDs}
					).done(function ( response ) {
				
						randlist.insertAdjacentHTML('beforeend', response);
						html = $.parseHTML( response );
						for(var i = 0; i < html.length; i++){
							if(typeof html[i].getAttribute  == 'function'){
								randIDs.push(html[i].getAttribute('data-id'));
							}
						}
						console.log(randIDs);
						if(response == ''){
							loadMore.destroy();
						} else {

							allowLoad = true;
							loadMore.destroy();
							createWaypoint();

						}
				
					});*/
					clearTimeout(callback);
					loading.classList.add('show');
					$.ajax( {
					
						url : CONTENT + "/themes/vh/pages/partials/productsalph.php?o="+listoffset
				
					} ).done(function ( response ) {
				
						alphlist.insertAdjacentHTML('beforeend', response);
						if(response == ''){
							loadMore.destroy();
							loading.classList.remove('show');
							loading.classList.add('hide');
						} else {
							allowLoad = true;
							loadMore.destroy();
							createWaypoint();
							callback = setTimeout(function(){loading.classList.remove('show')},500);

							/*var catselect = document.querySelector(".category-selector select");
							
							for(var i = 0; i < posts.length; i++){
								if(posts[i].classList.contains(catselect.value)){
									posts[i].style.display = "inline-block";
								} else {
									posts[i].style.display = "none";
								}
							}*/
						}
					  	listoffset++;
				
					});
				}
			  },
			  offset: '100%'
			});
		}
		
		createWaypoint();
	
	}