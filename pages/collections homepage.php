<?php 
/**
 * Template Name: Collections Homepage
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row nopaddtop">
			
			<div class="hero-block" style="background-image: url(<?php echo get_field('hero_image')['url']; ?>)">
				<div class="cta">
					<h2><?php echo get_field('hero_text'); ?></h2>
					<a href="<?php echo get_field('hero_link'); ?>?c=textiles"><h4>learn more</h4></a>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="browse-cat-block">
				<h3>Browse By Category</h3>
				<div class="cat-flex-wrap">
					<a href="<?php echo get_permalink(40); ?>#furniture"><div class="quad-cat casegoods" style="background-image: url(<?php echo get_field('casegoods_image')['sizes']['large']; ?>)">
						<p>furniture</p>
					</div></a>
					<!-- <a href="<?php echo get_permalink(40); ?>?c=upholstery"><div class="quad-cat upholstery" style="background-image: url(<?php echo get_field('upholstery_image')['sizes']['large']; ?>)">
						<p>upholstery</p>
					</div></a> -->
					<a href="<?php echo get_permalink(40); ?>#textiles"><div class="quad-cat textiles" style="background-image: url(<?php echo get_field('textiles_image')['sizes']['large']; ?>)">
						<p>textiles</p>
					</div></a>
					<a href="<?php echo get_permalink(40); ?>#rugs"><div class="quad-cat rugs" style="background-image: url(<?php echo get_field('rugs_image')['sizes']['large']; ?>)">
						<p>rugs</p>
					</div></a>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<?php
				
				$args = array( 'posts_per_page' => 1, 'post_type' => 'vh_life', 'post_status' => 'publish');
				$posts = get_posts( $args );
				$post = $posts[0];
				unset($posts[0]);
					
				setup_postdata($post);
			?>
			<div class="life-spotlight-block">
				<div class="column-left">
					<div class="image" style="background-image: url(<?php echo get_field('main_image')['sizes']['large']; ?>)"></div>
				</div>
				<div class="column-right">
					<?php $carousels = get_field('carousel');
					if (count(get_field('quad_image')[0]['wide_1']) != 1){ ?>
						<div class="image" style="background-image: url(<?php if ( ! empty( get_field('quad_image')[0]['small_1'])){ echo get_field('quad_image')[0]['small_1']['sizes']['medium']; } ?>)"></div>
						<div class="image" style="background-image: url(<?php if ( ! empty( get_field('quad_image')[0]['small_2'])){ echo get_field('quad_image')[0]['small_2']['sizes']['medium']; } ?>)"></div>
					<?php } else if ($carousels != 0){ ?>
						<div class="image" style="background-image: url(<?php echo $carousels[0]['image']['sizes']['medium']; ?>)"></div>
						<div class="image" style="background-image: url(<?php echo $carousels[1]['image']['sizes']['medium']; ?>)"></div>
					<?php } ?>
				</div>
				<div class="text">
							<h4>vh life</h4>
							<h2><?php the_title(); ?></h2>
								<hr>
							<?php the_excerpt(); ?>
							<a href="<?php the_permalink(); ?>"><button>Read More</button></a>
						</div>
			</div>

<?php wp_reset_postdata(); ?>
			
		</div>
	
		<div class="row">
			<div class="hero-block dual-hero">
				<div class="image" style="background-image: url(<?php echo get_field('set_the_scene_dual_image')[0]['image1']['sizes']['large']; ?>)"></div>
				<div class="image" style="background-image: url(<?php echo get_field('set_the_scene_dual_image')[0]['image2']['sizes']['large']; ?>)"></div>
				<div class="cta">
					<h2>Setting The Scene</h2>
					<a href="<?php echo get_permalink(51); ?>"><h4>see the gallery</h4></a>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="email-block">
				<div>
					<h2>For the latest trends, culture, design and more subscribe to The VH Life.</h2>
					<input type="text" value="Email Address"/>
					<button>submit</button>
				</div>
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


