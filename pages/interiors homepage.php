<?php 
/**
 * Template Name: Interiors Homepage
 */

get_header(); ?>

	<div class="hero-video frame-1">
		<div class="video"> <?php $opening = get_field('opening_background'); if ($opening['type'] == "image"){?>
			<img src="<?php echo $opening["url"]; ?>"/>
			<img class="mobile" src="<?php echo get_field('mobile_gif')["url"]; ?>"/>
		<?php } else if ($opening['type'] == "video"){?>
			<video autoplay muted loop poster="<?php echo get_field('poster')["url"]; ?>">
				<source src="<?php echo $opening["url"]; ?>" type="<?php echo $opening["mime_type"]; ?>"/>
			</video>
			<img class="mobile" src="<?php echo get_field('mobile_gif')["url"]; ?>"/>
		<?php } ?></div>
		<ul class="frame-markers">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="frames">
			<div class="frame frame-1">
				<h1><?php $frames = get_field('opening_frames'); echo $frames[0]["frame_content"]; ?></h1>
			</div>
			<div class="frame frame-2">
				<h2><?php echo $frames[1]["frame_content"]; ?></h2>
			</div>
			<div class="frame frame-3">
				<h2><?php echo $frames[2]["frame_content"]; ?></h2>
			</div>
			<div class="frame frame-4">
				<h2><?php echo $frames[3]["frame_content"]; ?></h2>
			</div>
		</div>
		<div class="cta">scroll to discover</div>
	</div>
	
	<article class="template-content">
	
		<div class="row first-row">
			
			<div class="about-block">
				<div class="image"  style="background-image: url(<?php echo get_field('homepage_image', 5)['sizes']['large']; ?>)"></div>
				<div class="text">
					<h2>About Victoria</h2>
					<hr/>
					<p><?php echo get_field('homepage_quote', 5); ?></p>
					<a href="<?php echo get_permalink(5) ?>"><button>Learn More</button></a>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="portfolio-spotlight-block">
				
				<div class="text">
					<h2>Portfolio</h2>
					<hr/>
					<h4><?php echo get_field("portfolio_spotlight_quote", 7); ?></h4>
					<div class="holder">
						<?php $portfolio_posts = get_field("portfolio_post_links", 7);
							$i = 1;
							foreach ($portfolio_posts as $post) {
							setup_postdata($post);
						?>
							<a href="<?php echo get_permalink(7) ?>#port<?php echo $i; ?>">
								<div class="item">
									<p><?php the_title(); ?></p>
									<div class="image" style="background-image: url(<?php echo get_field('narrow_image')['sizes']['large']; ?>)"></div>
								</div>
							</a>
									<?php  $i++; if($i==4) break; ?>
						<?php } ?>
						<?php wp_reset_postdata(); ?>
					</div>
				</div>
			</div>
			
		</div>
	
		<?php $video = get_field('overlay_video'); if($video != 0){ ?>
	
		<div class="row">
			
			<div class="video-block">
				<div class="vh-overlay" type="video">
			
				    <img src="<?php echo get_field('video_overlay_image')['sizes']['large']; ?>" type="video" vidSrc="<?php $video = get_field('overlay_video'); echo $video["url"] ?>" controls="true" autoplay="true" mime="<?php echo $video["mime_type"] ?>" caption=""/>
				
					<div class="play"></div>
				
				    <div class="vh-overlay-expand">
				        <div class="text">
							<h2><?php echo get_field('video_overlay_text'); ?></h2>
							<hr/>
							<button>Learn More</button>
						</div>
				    </div>
				</div>
			</div>
			
		</div>
		
		<?php } ?>
	
		<div class="row">
			
			<div class="book-block">
				<div class="text">
					<div class="book-cover" style="background-image: url(<?php echo get_field('book_cta_image', 2)['sizes']['large']; ?>)">
					</div>
					<h4><?php echo get_field('book_name', 2); ?></h4>
					<h3><?php echo get_field('book_quote', 2); ?></h3>
					<hr/>
					<p><?php echo get_field('book_color_quote', 2); ?></p>
					<a href="<?php echo get_field('book_link', 2); ?>" target="_blank"><button>purchase book</button></a>
				</div>
			</div>
			
		</div>
	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list">
				</div>
			</div>
			
		</div>

<?php get_footer(); ?>


