<?php 
/**
 * Template Name: Interiors Portfolio
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row portfolio-list nopaddtop">
		
			<?php $portfolio_posts = get_field("portfolio_post_links");
					if(isset($_GET["i"]) && is_numeric ($_GET["i"])){
						$hay = get_field("portfolio_post_links", false, false);
						$key = array_search($_GET["i"], $hay);
						$VIPost = $portfolio_posts[$key];
						array_splice($portfolio_posts, $key, 1);
						array_unshift($portfolio_posts, $VIPost);
						echo "<div class='nothing' post-id='".$_GET["i"]."'></div>";
					}
					$post = $portfolio_posts[0];
					setup_postdata($post);
					$images = get_field('images');
					?>
					<a id="port1"></a>

					<div class="slick-slider-wrap">
						<div class="portfolio-title text"><h2><?php the_title(); ?></h2></div>
						<div class="slick-carousel-gallery">

							<?php $it = 1; foreach ( $images as $image ) { ?>

							<div class="slick-slide"><img src="<?php echo $image['sizes']['large']; ?>"></div>

							<?php } ?>

						</div>
					</div>
						
						<!-- <div id="" class="carousel-block">
							<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
								<?php $it = 1; foreach ( $images as $image ) { ?>
									<div image="<?php echo $image['sizes']['large']; ?>">
										<div class="text">
										<?php if($it == 1){ ?><h2><?php the_title(); ?></h2><?php } ?>
											<div class="numbers">
												<div class="number"><?php if($it < 10){echo 0;} echo $it; $it++; ?></div>
												<hr/>
												<div class="number"><?php if(count($images) < 10){echo 0;} echo count($images); ?></div>
											</div>
										</div>
									</div>
								<?php } ?>
							</div>
						</div> -->
		
			<?php if($portfolio_posts[1]){ ?>
				
					<?php
						$post = $portfolio_posts[1];
						setup_postdata($post);
						$images = get_field('images');
					?>
				
					<a id="port2" style="position: relative;top: -140px;z-index: -10;"><div></div></a>
					
					<div class="slick-slider-wrap">
						<div class="portfolio-title text"><h2><?php the_title(); ?></h2></div>
						<div class="slick-carousel-gallery">

							<?php $it = 1; foreach ( $images as $image ) { ?>

							<div class="slick-slide"><img src="<?php echo $image['sizes']['large']; ?>"></div>

							<?php } ?>

						</div>
					</div>

					<!-- background-image: url("photographer.jpg"); -->

					<!-- <div class="carousel-block">
						<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
							<?php $it = 1; foreach ( $images as $image ) { ?>
								<div image="<?php echo $image['sizes']['large']; ?>">
									<div class="text">
										<?php if($it == 1){ ?><h2><?php the_title(); ?></h2><?php } ?>
										<div class="numbers">
											<div class="number"><?php if($it < 10){echo 0;} echo $it; $it++; ?></div>
											<hr/>
											<div class="number"><?php if(count($images) < 10){echo 0;} echo count($images); ?></div>
										</div>
									</div>
								</div>
							<?php } ?>
						</div>
					</div> -->
			<?php } ?>
			<?php if($portfolio_posts[2]){ ?>
				
					<?php
						$post = $portfolio_posts[2];
						setup_postdata($post);
						$images = get_field('images');
					?>
				
					<a id="port3" style="position: relative;top: -140px;z-index: -10;"><div></div></a>
					
					<div class="slick-slider-wrap">
						<div class="portfolio-title text"><h2><?php the_title(); ?></h2></div>

						<div class="slick-carousel-gallery">

							<?php $it = 1; foreach ( $images as $image ) { ?>

							<div class="slick-slide"><img src="<?php echo $image['sizes']['large']; ?>"></div>

							<?php } ?>

						</div>
					</div>

					<!-- <div class="carousel-block">
						<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
							<?php $it = 1; foreach ( $images as $image ) { ?>
								<div image="<?php echo $image['sizes']['large']; ?>">
									<div class="text">
										<?php if($it == 1){ ?><h2><?php the_title(); ?></h2><?php } ?>
										<div class="numbers">
											<div class="number"><?php if($it < 10){echo 0;} echo $it; $it++; ?></div>
											<hr/>
											<div class="number"><?php if(count($images) < 10){echo 0;} echo count($images); ?></div>
										</div>
									</div>
								</div>
							<?php } ?>
						</div>
					</div> -->
			<?php } ?>
			<?php if($portfolio_posts[3]){ ?>
				
					<?php
						$post = $portfolio_posts[3];
						setup_postdata($post);
						$images = get_field('images');
					?>
				
					<div class="slick-slider-wrap">
						<div class="portfolio-title text"><h2><?php the_title(); ?></h2></div>
						<div class="slick-carousel-gallery">

							<?php $it = 1; foreach ( $images as $image ) { ?>

							<div class="slick-slide"><img src="<?php echo $image['sizes']['large']; ?>"></div>

							<?php } ?>

						</div>
					</div>

					<!-- <div class="carousel-block">
						<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
							<?php $it = 1; foreach ( $images as $image ) { ?>
								<div image="<?php echo $image['sizes']['large']; ?>">
									<div class="text">
										<?php if($it == 1){ ?><h2><?php the_title(); ?></h2><?php } ?>
										<div class="numbers">
											<div class="number"><?php if($it < 10){echo 0;} echo $it; $it++; ?></div>
											<hr/>
											<div class="number"><?php if(count($images) < 10){echo 0;} echo count($images); ?></div>
										</div>
									</div>
								</div>
							<?php } ?>
						</div>
					</div> -->
			<?php } ?>
			
		</div>
	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list"
				</div>
			</div>
			
		</div>
		
	
<?php wp_reset_postdata(); ?>
<?php get_footer(); ?>


