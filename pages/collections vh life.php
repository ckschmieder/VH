<?php 
/**
 * Template Name: Collections VH Life
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row nopaddtop">
			
			<div class="hero-block" style="background-image: url(<?php echo get_field('hero_image')['url']; ?>)">
				<div class="cta">
					<h4>the</h4>
					<h3>Victoria</h3>
					<h3>Hagan</h3>
					<hr>
					<h2>Life</h2>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="category-block center">
				<div class="category-selector">categorize posts
					  
					  <?php $categories = get_categories("taxonomy=vh_life_categories"); ?>
					  
					<select>
					  <option value="all">All</option>

						<?php foreach ($categories as $category) :?>
						
						<option value="<?php echo $category -> slug; ?>"><?php echo $category -> name; ?></option>
						
						<?php endforeach;
						
					  ?>
					</select>
				</div>
			</div>
		</div>
	
		<div class="row">
			<?php
				
				$args = array( 'posts_per_page' => 4, 'post_type' => 'vh_life', 'post_status' => 'publish');
				$posts = get_posts( $args );
				$post = $posts[0];
				unset($posts[0]);
					
					setup_postdata($post);
			?>
		
				<div class="life-spotlight-block <?php $category = get_the_terms($post, "vh_life_categories")[0]; echo $category -> slug; ?>">
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
								<h4><?php echo $category->name; ?></h4>
								<h2><?php the_title(); ?></h2>
									<hr>
								<?php the_excerpt(); ?>
								<a href="<?php the_permalink(); ?>"><button>Read More</button></a>
							</div>
				</div>
			
		</div>
	
		<div class="row">
			
			<div class="vhpost-list-block">
				<div class="vhpost-list">
				<?php 
					foreach ( $posts as $post ) {
						setup_postdata($post);
						$cats = get_the_terms($post, "vh_life_categories");
				?>
					<div class="vhpost-list-item <?php echo $cats[0] -> slug; ?>">
						<div class="image" style="background-image: url(<?php echo get_field('main_image')['sizes']['medium']; ?>)"></div>
						<h4><?php echo $cats[0]->name; ?></h4>
						<h2><?php the_title(); ?></h2>
						<?php the_excerpt(); ?>
						<a href="<?php the_permalink(); ?>"><button>View Post</button></a>
					</div>
				<?php } ?>
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

<?php wp_reset_postdata(); ?>
<?php get_footer(); ?>


