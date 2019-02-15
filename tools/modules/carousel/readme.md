# Carousel Module #
---

# Info #

Developer: Tristan Marsh, Seth Wieder
Crafted: Mar 1, 2016
Version: 1.0

# Getting Started #
In your _config.json file, include "carousel": "1.0" under "modules”. This will include the needed scss and js for the carousel to work. Read more to find out how to use it.

## Dependencies ##
1. None. It’s all Javascript and CSS baby, and you’re already running with that, right?

## How it Works ##

In your HTML, carousels are structured as such:

	<div class=“*NAMESPACE*-carousel *PASSED_CLASS*" frameWidth="*" easing="*" durationInSeconds="*" type="*" *breadcrumbs*>
		<div link="*" image="*">*HTML FOR CAPTION/OVERLAY*</div>
	</div>

And the code is called through

	window[GLOBAL_NAMESPACE].carousel.init(‘*PASSED_CLASS*’);

The passed class could be *NAMESPACE*-carousel if you wanted, as all carousels should have that class. Passed_class should NOT include selector. No periods or hashes, please. When called, the code builds and adds functionality to your carousels based on the options included in your HTML. These options are:

	type : Currently, types are "slider" and "crossfade". Defaults to "slider";
	frameWidth : For "Slider" type carousels, how wide the frames are based as percentage of container width. Integers, between 0 and 100, only. No “%” needed. Defaults to 75.
	easing : Easing. Currently, options are :
		"ease"
		"linear"
		"ease-in"
		"ease-out"
		"ease-in-out"
		"step-start"
		"step-end"
		Default and unknown easing filters to "linear".
	durationInSeconds : duration of animation/transition in seconds. Integers only. Defaults to 1.

Every child of the main carousel object will be made into frames for the carousel. In the above HTML example, this is the frame child:

	<div link="*" image="*">*HTML FOR CAPTION/OVERLAY*</div>

 Frame children can have these options:

	link : frame link. Will not be included if not used. URLs.
	target : blank or self. Defaults to "self".
 	image : main image.

The inner html of the Frame child will be made into a caption overlay. All HTML tags are welcome!

Once window[GLOBAL_NAMESPACE].carousel.init has been called, feel free to call it again should new carousels need to be created. It will not double up and cause errors. So, let’s say you have a carousel classed .myCarousel that you’ve initialized. Lets now say you pull new code through ajax, and it includes another .myCarousel. Running window[GLOBAL_NAMESPACE].carousel.init(‘myCarousel’) will skip your already built carousel and only create the new one.

## Versions ##

1.0 - Initial Version. Hopefully there’s nothing too broken.