//-----------------------------------------------------
// Do not edit this block
// @codekit-prepend './_js_includes.min.js';
// @codekit-prepend './classList.min.js';
// @codekit-prepend './instafeed.min.js';
//-----------------------------------------------------
window[GLOBAL_NAMESPACE].init = function() {
	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
	    document.body.className += " "+GLOBAL_NAMESPACE+"-mobile";
	  }
	var listoffset = 0;
	
	var feed = new Instafeed({
        get: 'user',
        userId: '1677978489',
        target: "insta-list",
        sortBy: 'most-recent',
        limit: 5,
        accessToken: '3162500839.6934e63.8a525e971afa4102ad3b7cd4a4e63387',
        template: '<a href="{{link}}"><div class="insta-image" style="background-image: url({{image}})"></div></a>',
        resolution: 'low_resolution'
    });
    feed.run();
	
	
	if(document.querySelector(".page-template-interiorshomepage")){
	
		var firstrow = document.querySelector(".first-row");
	
		/*var frame12 = new Waypoint({
		  element: firstrow,
		  handler: function(direction) {
		  	var herovideo = document.querySelector(".hero-video");
		  	if (direction == "up"){
		  		herovideo.classList.remove('frame-2');
				herovideo.classList.add('frame-1');
		  	} else {
		  		herovideo.classList.remove('frame-1');
				herovideo.classList.add('frame-2');
		  	}
		  },
		  offset: '400%'
		});
	
		var frame23 = new Waypoint({
		  element: firstrow,
		  handler: function(direction) {
		  	var herovideo = document.querySelector(".hero-video");
		  	if (direction == "up"){
		  		herovideo.classList.remove('frame-3');
				herovideo.classList.add('frame-2');
		  	} else {
		  		herovideo.classList.remove('frame-2');
				herovideo.classList.add('frame-3');
		  	}
		  },
		  offset: '300%'
		});
	
		var frame34 = new Waypoint({
		  element: firstrow,
		  handler: function(direction) {
		  	var herovideo = document.querySelector(".hero-video");
		  	if (direction == "up"){
		  		herovideo.classList.remove('frame-4');
				herovideo.classList.add('frame-3');
		  	} else {
		  		herovideo.classList.remove('frame-3');
				herovideo.classList.add('frame-4');
		  	}
		  },
		  offset: '200%'
		});*/
		
		
	
		var frame4 = new Waypoint({
		  element: firstrow,
		  handler: function(direction) {
		  	var maincontent = document.querySelector(".main-content");
		  	if (direction == "up"){
		  		maincontent.classList.remove('showheader');
		  	} else {
		  		maincontent.classList.add('showheader');
		  	}
		  },
		  offset: '99%'
		});
		
		
	
		var frame5 = new Waypoint({
		  element: firstrow,
		  handler: function(direction) {
		  	var maincontent = document.querySelector(".hero-video");
		  	if (direction == "up"){
		  		maincontent.style.display = 'block';
		  	} else {
		  		maincontent.style.display = 'none';
		  	}
		  },
		  offset: '0%'
		});
		
		if($('body').hasClass('ie9')){
			frame = 1;
			setInterval(function(){
				$('.hero-video').removeClass('frame-'+frame);
				frame++;
				if(frame == 5){
					frame = 1;
				}
				$('.hero-video').addClass('frame-'+frame);
			},4000);
		}

	
	}
	
	if(document.querySelector(".single-products")){
	
		var sidedetails = document.querySelector(".sideDetails");
		var header = document.querySelector("header");
		var bottom = document.querySelector(".similar-block");
		var row = document.querySelector(".row");
		var productcontainer = document.querySelector(".product-container");
		var mainpost = document.querySelector(".row .product-container .main-product");
	
		var stick = new Waypoint({
		  element: window,
		  handler: function(direction) {
		  	if (direction == "up"){
		  		sidedetails.classList.remove('stick');
				sidedetails.style.top = "0px";
				sidedetails.style.right = "0px";
		  	} else if (direction == "down"){
				var fixRight = row.offsetLeft + productcontainer.offsetLeft + mainpost.offsetLeft;
				sidedetails.classList.add('stick');
				sidedetails.style.top = (header.offsetHeight + 61) + "px";
				sidedetails.style.right = (fixRight) + "px";
		  	}
		  },
		  offset: function() {
		  		if(window.innerWidth < 901){
			    	return -(header.offsetHeight);
		  		} else {
			    	return -(header.offsetHeight-140);
		  		}
		    }
		});
	
		var stickBottom = new Waypoint({
		  element: bottom,
		  handler: function(direction) {
		  	if (direction == "up"){
				var fixRight = row.offsetLeft + productcontainer.offsetLeft + mainpost.offsetLeft;
		  		sidedetails.classList.remove('stickBottom');
				sidedetails.classList.add('stick');
				sidedetails.style.top = (header.offsetHeight + 61) + "px";
				sidedetails.style.right = (fixRight) + "px";
		  	} else if (direction == "down"){
		  		sidedetails.classList.add('stickBottom');
				sidedetails.classList.remove('stick');
				sidedetails.style.top = "auto";
				sidedetails.style.right = "0px";
		  	}
		  },
		  offset: function() {
		  		if(window.innerWidth < 901){
			    	return (sidedetails.offsetHeight+70);
		  		} else {
			    	return (header.offsetHeight+sidedetails.offsetHeight+140);
			    }
		    }
		});
		window.addEventListener('resize', function(){
			if(sidedetails.classList.contains('stick')){
				var fixRight = row.offsetLeft + productcontainer.offsetLeft + mainpost.offsetLeft;
				sidedetails.style.top = (header.offsetHeight + 61) + "px";
				sidedetails.style.right = (fixRight) + "px";
			}
		})

	
	}
	
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

		var catselectnew = document.querySelector(".category-selector .cat-list");
		
		$(catselectnew).find("div[value=" + hash.substr(1) +"]").attr('selected', true);
		
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
	
	if(document.querySelector(".page-template-collectionsvhlife")){
	
		var catlist = document.querySelector(".vhpost-list");
		var allowLoad = true;
	
		var loadMore = new Waypoint({
		  element: catlist,
		  handler: function(direction) {
		  	if(allowLoad && direction == "down"){
				allowLoad = false;
			  	listoffset++;
				$.ajax( {
				
					url : CONTENT + "/themes/vh/pages/partials/vhlife.php?o="+listoffset
			
				} ).done(function ( response ) {
			
					document.querySelector('.vhpost-list').insertAdjacentHTML('beforeend', response);
					var posts = document.querySelectorAll(".vhpost-list-item");
					var catselect = document.querySelector(".category-selector select");
					if (catselect.value == "all"){
						for(var i = 0; i < posts.length; i++){
							posts[i].style.display = "inline-block";
						}
					} else {
						for(var i = 0; i < posts.length; i++){
							if(posts[i].classList.contains(catselect.value)){
								posts[i].style.display = "inline-block";
							} else {
								posts[i].style.display = "none";
							}
						}
					}
					if(response == ''){
						loadMore.destroy();
					} else {
						Waypoint.refreshAll();
						allowLoad = true;
					}
			
				});
			}
		  },
		  offset: 'bottom-in-view'
		});

		var catselect = document.querySelector(".category-selector select");
		
		catselect.addEventListener('change', function(){
			catlist.className = "vhpost-list "+catselect.value;
			var posts = document.querySelectorAll(".vhpost-list-item");
			if (catselect.value == "all"){
				for(var i = 0; i < posts.length; i++){
					posts[i].style.display = "inline-block";
				}
			} else {
				for(var i = 0; i < posts.length; i++){
					if(posts[i].classList.contains(catselect.value)){
						posts[i].style.display = "inline-block";
					} else {
						posts[i].style.display = "none";
					}
				}
			}
		})
	
	}
	
	if(document.querySelector(".page-template-interiorsportfolio")){
	
		whichTransitionEvent = function(){
	      var t;
	      var el = document.createElement('fakeelement');
	      var animations = {
	        'animation':'transitionend',
	        'OAnimation':'oTransitionEnd',
	        'MozAnimation':'transitionend',
	        'WebkitAnimation':'webkitTransitionEnd'
	      }
	
	      for(t in animations){
	          if( el.style[t] !== undefined ){
	              return animations[t];
	          }
	      }
	    }
	
		var transend = whichTransitionEvent();
		
		var catlist = document.querySelector(".portfolio-list");
		var allowLoad = true;
	
		var loadMore = new Waypoint({
		  element: catlist,
		  handler: function(direction) {
		  	if(allowLoad && direction == "down"){
				allowLoad = false;
			  	listoffset++;
			  	sendURL = CONTENT + "/themes/vh/pages/partials/portfolio.php?o="+listoffset;
			  	if(document.querySelector(".nothing")){
			  		sendURL += "&i="+document.querySelector(".nothing").getAttribute("post-id");
			  	}
				$.ajax( {
				
					url : sendURL
			
				} ).done(function ( response ) {
			
					document.querySelector('.portfolio-list').insertAdjacentHTML('beforeend', response);
					if(response == '--==CUT==--'){
						loadMore.destroy();
					} else {
						Waypoint.refreshAll();
						allowLoad = true;
			    		window[GLOBAL_NAMESPACE].carousel.init("vh-carousel");
					}
			
				});
			}
		  },
		  offset: 'bottom-in-view'
		});
		
	
	}
	
	if(document.querySelector(".page-template-collectionsgallery")){
	
		var click = document.querySelectorAll(".gallery-switch-block .cta h4");
		
		for(var i = 0; i < click.length; i++){
			
			click[i].addEventListener("click", function(){ 
				document.querySelector('.template-content').classList.toggle('rug');
				document.querySelector('.template-content').classList.toggle('furn');
			})
		}
		
	
	}
	
	if(document.querySelector(".page-template-collectionsshowroom")){
	
		var zip = document.querySelector(".location-block .location-search input");
		var button = document.querySelector(".location-block .location-search button");
	
		zip.addEventListener("focus", function(){
			zip.value = "";
		})
		
		zip.addEventListener("blur", function(){
			if(zip.value == ""){
				zip.value = zip.getAttribute('value');
			}
		})
		
		button.addEventListener("click", function(){
			if(zip.value.length == 5){
				sortZips(zip.value)
			}
		})
		
		sortZips = function(a){
		
			$.ajax( {
				
					url : CONTENT + "/themes/vh/pages/partials/zips.php?z="+a
			
				} ).done(function ( response ) {
				
					response = JSON.parse(response);
				
					if(response.length != 0){
						var distances = [];
						var locs = document.querySelectorAll(".location-item");
						for(var i = 0; i < locs.length; i++){
							var distance = calculateDistance(Number(locs[i].getAttribute('lat')), Number(locs[i].getAttribute('lng')), Number(response[0].latitude), Number(response[0].longitude));
							distances[i] = [distance, locs[i]];
						}
						distances.sort(function(a,b){ return a[0] - b[0]});
						map.setCenter({ lat : Number(distances[0][1].getAttribute('lat')), lng : Number(distances[0][1].getAttribute('lng')) });
						map.setZoom(14);
						container = document.querySelector('.location-block');
						for(var i = 0; i < distances.length; i++){
							container.appendChild(distances[i][1]);
						}
					}
			
				});
		
		}
		
		calculateDistance = function(lat1, lon1, lat2, lon2) {
	        var radlat1 = Math.PI * lat1/180
	        var radlat2 = Math.PI * lat2/180
	        var radlon1 = Math.PI * lon1/180
	        var radlon2 = Math.PI * lon2/180
	        var theta = lon1-lon2
	        var radtheta = Math.PI * theta/180
	        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	        dist = Math.acos(dist)
	        dist = dist * 180/Math.PI
	        dist = dist * 60 * 1.1515
	        return dist
	    }
	
	}
	
	if(document.querySelector(".page-template-contact")){
	
		var contact = document.querySelector(".contact-block");
		var inputs = contact.querySelectorAll("input");
		for(var i = 0; i < inputs.length; i++){
			inputs[i].addEventListener("focus", function(){
				this.value = "";
			})
			
			inputs[i].addEventListener("blur", function(){
				if(this.value == ""){
					this.value = this.getAttribute('value');
				}
			})
		}
		
	
		var button = contact.querySelector("button");
		var buttonClick = function(){
			var fnme = contact.querySelector(".fn-input").value;
			var lnme = contact.querySelector(".ln-input").value;
			var emil = contact.querySelector(".em-input").value;
			var subjct = contact.querySelector(".sb-input").value;
			var txt = contact.querySelector(".tx-input").value;
			var dataToSend = { fname: fnme, lname: lnme, email: emil, subj: subjct, emailBody: txt };
			if(!document.querySelector(".template-content").classList.contains('int')){
				dataToSend = { fname: fnme, lname: lnme, email: emil, subj: subjct, emailBody: txt, col: true };
			}
		
			$.ajax( {
			
				method: 'POST',
				url : CONTENT + "/themes/vh/pages/partials/email.php",
				data: dataToSend
		
			} ).done(function ( response ) {
			
				if(response == 'email'){
					alert('Your email is invalid. Please try again!');
				} else if(response == 'success') {
					button.removeEventListener("click", buttonClick);
					alert('Thank you!');
					contact.style.opacity = ".7";
				} else {
					alert('something really went wrong! ' + response );
				}
		
			});
		}
		button.addEventListener("click", buttonClick);
	
	}
	
	if(document.querySelector(".email-block")){
	
		var email = document.querySelector(".email-block div");
		var field = email.querySelector('input');
		field.addEventListener("focus", function(){
			field.value = "";
		})
		
		field.addEventListener("blur", function(){
			if(field.value == ""){
				field.value = field.getAttribute('value');
			}
		})
		
		var button = email.querySelector("button");
		var addEmail = function(){
			$.ajax( {
			
				url : CONTENT + "/themes/vh/pages/partials/email_signup.php?e="+field.value,
		
			} ).done(function ( response ) {
			
				if(response == 'email'){
					alert('Your email is invalid. Please try again!');
				} else {
					button.removeEventListener("click", addEmail);
					email.style.opacity = ".7";
				}
		
			});
		}
		button.addEventListener("click", addEmail);
	
	}
}

var map;
var markers = [];
var infowindows = [];
function initMap(){
	
	var markerlist = document.querySelectorAll(".location-item");
	map = new google.maps.Map(document.querySelector('.map-block'), {
	  center: {lat: 38.943615, lng: -94.670965},
	  zoom: 4,
	  styles: [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c4d55"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#35444b"
            },
            {
                "saturation": "0"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#35444b"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#35444b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            },
            {
                "color": "#35444b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#3c4d55"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#2d4047"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#2b3840"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#2c373d"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#253036"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#2b3840"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            },
            {
                "color": "#3c4d55"
            }
        ]
    }
]
	});
	for(var i = 0; i < markerlist.length; i++){
		markers.push(
			new google.maps.Marker({
			    position: {lat: Number(markerlist[i].getAttribute('lat')), lng: Number(markerlist[i].getAttribute('lng'))},
			    map: map,
			    icon: "/wp-content/themes/vh/images/lightMark.png"
			})
		);
		infowindows.push(
			new google.maps.InfoWindow({
			    content: markerlist[i].querySelector('.text').innerHTML
			})
		);
		markers[i].addListener('click', function() {
			i = markers.indexOf(this);
		    infowindows[i].open(map, this);
		});
	}
}; 