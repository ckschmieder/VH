<?php 
/**
 * Template Name: Collections Gallery
 */

get_header(); ?>

	<article class="template-content furn">
	
		<div class="row">

			<div class="slick-carousel-gallery">
				<?php
					$frames = get_field('furniture_gallery');
					$i = 1;
					$c = count($frames);
					if($c < 10){$c = "0".$c;}
					foreach ( $frames as $frame ) {
				?>
				<div class="slick-slide"><img src="<?php echo $frame['image']['sizes']['large']; ?>"></div>
				<?php $i++; } ?>
			</div>

			<!-- <div class="row">
				
				<div class="carousel-block furn">
					<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
						<?php
							$frames = get_field('furniture_gallery');
							$i = 1;
							$c = count($frames);
							if($c < 10){$c = "0".$c;}
							foreach ( $frames as $frame ) {
						?>
							<div image="<?php echo $frame['image']['sizes']['large']; ?>">
								<div class="text">
									<h4>Furniture Gallery</h4>
									<h2><?php echo $frame['item_name']; ?></h2>
									<a href="<?php echo $frame['product_link']; ?>"><h4>view product</h4></a>
									<div class="numbers">
										<div class="number"><?php if ($i < 10){ echo "0".$i;} else { echo $i; } ?></div>
										<hr/>
										<div class="number"><?php echo $c; ?></div>
									</div>
								</div>
							</div>
						<?php $i++; } ?>
					</div>
				</div>

				

				
				<div class="carousel-block rug">
					<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
						<?php
							$frames = get_field('rug_gallery');
							$i = 1;
							$c = count($frames);
							if($c < 10){$c = "0".$c;}
							foreach ( $frames as $frame ) {
						?>
							<div image="<?php echo $frame['image']['sizes']['large']; ?>">
								<div class="text">
									<<h4>Rug Gallery</h4>
									<h2><?php echo $frame['item_name']; ?></h2>
									<a href="<?php echo $frame['product_link']; ?>"><h4>view product</h4></a>
									<div class="numbers">
										<div class="number"><?php if ($i < 10){ echo "0".$i;} else { echo $i; } ?></div>
										<hr/>
										<div class="number"><?php echo $c; ?></div>
									</div>
								</div>
							</div>
						<?php } ?>
					</div>
				</div>
				
			</div> -->
			
		</div>
	
		<!-- <div class="row">
			
			<?php
				if($frames != 0) {
			?>
			
				<div class="gallery-switch-block furn" style="background-image: url(<?php echo get_field('rug_switch_image')['sizes']['large']; ?>)">
					<div class="cta">
						<h2>See the Rug Gallery</h2>
						<h4 class="furn">Rug Gallery</h4>
					</div>
				</div>
			
			<?php } ?>
			
			<div class="gallery-switch-block rug" style="background-image: url(<?php echo get_field('furniture_switch_image')['sizes']['large']; ?>)">
				<div class="cta">
					<h2>See the Furniture Gallery</h2>
					<h4 class="rug">Rug Gallery</h4>
				</div>
			</div>
			
			
		</div>
 -->
	
		<div class="row">
			
			<div class="catalogue-block">
				<h2>Interested In More?</h2>
				<a href="<?php echo get_field('catalogue', 36)['url']; ?>"><button>Download Catalogue</button></a>
			</div>
			
		</div>
	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list"
				</div>
			</div>
			
		</div>

<?php get_footer(); ?>


