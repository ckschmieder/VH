
				</article>

		
		

			<?php if ($post->post_parent == 20 || $post->post_type == "blog"){ ?>

				<footer>
					<div class="footer-holder">
						<a href="/"><div class="logo "></div></a>
		
						<?php wp_nav_menu( array('menu' => 'Interiors Footer Menu') );?>
						<div class="socials">
							<a href="https://www.instagram.com/victoriahaganinteriors/" target="_blank"><div class="social insta ">
								<object type="image/svg+xml" data="/wp-content/themes/vh/images/instag.php?c=f1f1f1"></object>
							</div></a>
						</div>
					</div>
					
					<!--<div class="site-switch">Browse VH Collections. <a href="http://www.victoriahaganhome.com/">Look Now</a></div>-->
					
				</footer>
				
			<?php } else if ($post->post_parent == 13 || $post->post_type == "products" || $post->post_type == "vh_life"){ ?>
				<footer>
					<div class="footer-holder">
						<a href="/"><div class="logo "></div></a>
		
						<?php wp_nav_menu( array('menu' => 'Collections Footer Menu') );?>
						<div class="socials">
							<a href="https://www.instagram.com/victoriahaganinteriors/" target="_blank"><div class="social insta ">
								<object type="image/svg+xml" data="/wp-content/themes/vh/images/instag.php?c=f1f1f1"></object>
							</div></a>
						</div>
					</div>
					
					<!--<div class="site-switch">Browse Victoria Hagan Interiors. <a href="http://www.victoriahagan.com/">Look Now</a></div>-->
					
				</footer>
			<?php } ?>
		
		</div>

		

		</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>
		<script type="text/javascript">
			jQuery('.slick-carousel-gallery').slick();
		</script>
	</body>
		
		<!-- <script src="<?php echo get_template_directory_uri() ?>/js/main.min.js"></script> -->
		<!-- <script src="<?php echo get_template_directory_uri() ?>/js/jquery.touchSwipe.min.js"></script> -->
		<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->
		
		<!-- <script src="<?php echo get_template_directory_uri() ?>/js/slick.js"></script> -->
		<script src="<?php echo get_template_directory_uri() ?>/js/main.js"></script>
		<?php if ($post->ID == 42 || $post->post_name == "find-a-showroom"){ ?>
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9t3SEdboTy7PNyPbvqpBzL4uPrHiFHOE&callback=initMap"
    async defer></script>
    	<?php } ?>
	    <script>
	    	$(document).ready(function() {
	    		window[GLOBAL_NAMESPACE].init();
	    		window[GLOBAL_NAMESPACE].carousel.init("vh-carousel");
	    		window[GLOBAL_NAMESPACE].overlay.init("vh-overlay");
	    	})
	    </script>
</html>