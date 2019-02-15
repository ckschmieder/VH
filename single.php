<?php
/**
 * The Template for displaying all single posts
**/
get_header(); ?>

	<?php if ($post->post_type == "products"){ ?>
					
		<?php 
		// The Loop
		while ( have_posts() ) : the_post();?>
		
		<article class="template-content">
		
			<div class="row">
			
				<div class="product-container">
			
					<h3 class="breadcrumbs">
						<a href="<?php echo get_permalink(40); ?>">product</a> > <a href="<?php echo get_permalink(40); ?>?c=<?php echo get_field('product_type'); ?>"><?php echo get_field('product_type'); ?></a> > <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
					</h3>
					
					<div class="main-product">
						
						<div class="sideDetails">
							<h4><?php echo get_field('id'); ?></h4>
							<h1><?php the_title(); ?></h1>
							<h3>details</h3>
							<h2><?php echo get_field('dimensions')[0]['width']; ?>"W X <?php echo get_field('dimensions')[0]['depth']; ?>"D X <?php echo get_field('dimensions')[0]['height']; ?>"H</h2>
							<h2><?php echo get_field('details_line_2'); ?></h2>
							<h2><?php echo get_field('details_line_3'); ?></h2>
							<a href="<?php echo get_field('product_links')[0]['details_pdf']['url']; ?>" target="_self"><button class="dark">Download PDF</button></a>
				<?php if( strlen(get_field('product_links')[0]['custom_link'])) { ?>
					<a href="<?php echo get_field('product_links')[0]['custom_link']; ?>" target="_self"><button class="light">See Customizable Options</button></a>
				<?php } else { ?>
							<h2>Custom Options Available</h2>
				<?php } ?>
							
						</div>
					
						<div class="images">
							<?php $images = get_field('product_images'); foreach ( $images as $image ) { ?>
							
								<img class="image" src="<?php echo $image['sizes']['medium_large']; ?>"/>
							
							<?php } ?>
						</div>
						
					</div>

				</div>
			
			</div>
				
			<div class="row">
				
				<div class="similar-block">
					<h3>Related Products</h3>
					<div class="similar-list">
					
						<?php
							$prev_post = get_previous_post();
							$next_post = get_next_post();
							if (!empty( $prev_post )){ ?>
							<a href="<?php echo get_permalink( $prev_post->ID ); $image = get_field('product_images', $prev_post->ID)[0]; ?>">
								<div class="similar-item">
									<div class="image" style="background-image: url(<?php echo $image['sizes']['medium'];?>);"></div>
									<p><?php echo $prev_post->post_title; ?></p>
								</div>
							</a>
						<?php } else { ?>
							<div class="similar-item">
								<div class="image"></div>
								<p></p>
							</div>
						<?php } ?>
						
						<?php
						
							$args = array(

							$randomPost = get_posts(array(
								'numberposts' => 1,
								'orderby' => 'rand',
								'post_type' => 'products'
								)
							));
							
							foreach($randomPost as $post) { ?>
								<a href="<?php echo get_permalink( $post->ID ); $image = get_field('product_images', $post->ID)[0]; ?>">
									<div class="similar-item">
										<div class="image" style="background-image: url(<?php echo $image['sizes']['medium'];?>);"></div>
										<p><?php echo $post->post_title; ?></p>
									</div>
								</a>
							<?php } ?>
					
						<?php if (!empty( $next_post )){ ?>
							<a href="<?php echo get_permalink( $next_post->ID ); $image = get_field('product_images', $next_post->ID)[0]; ?>">
								<div class="similar-item">
									<div class="image" style="background-image: url(<?php echo $image['sizes']['medium'];?>);"></div>
									<p><?php echo $next_post->post_title; ?></p>
								</div>
							</a>
						<?php } else { ?>
							<div class="similar-item">
								<div class="image"></div>
								<p></p>
							</div>
						<?php } ?>
					</div>
				</div>
				
			</div>
	
			<div class="row">
				
				<div class="custom-block">
					<h2>The Ultimate Customization</h2>
					<p>Every item is personalized to your every need. Take a look at what we offer for customized styles!</p>
					<?php if( strlen(get_field('customization', 36))) { ?>
						<a href="<?php echo get_field('customization', 36); ?>"><button>See Customizing Options</button></a>
					<?php } ?>
				</div>
				
			</div>

	
			<div class="row">
				
				<div class="catalogue-block">
					<h2>Interested In More?</h2>
					<a href="<?php echo get_field('catalogue', 36)['url']; ?>"><button>Download Catalogue</button></a>
				</div>
				
			</div>
	
			<div class="row last-row">
				
				<div class="insta-block">
					<p>Follow us on Instagram</p>
					<div class="insta-list" id="insta-list">
					</div>
				</div>
				
			</div>
				
		<?php endwhile;?>
	<?php } else if ($post->post_type == "vh_life") { ?><?php 
		// The Loop
		while ( have_posts() ) : the_post();?>
		
		<article class="template-content">
	
			<div class="row nopaddtop">
				
				<div class="hero-block" style="background-image: url(<?php echo get_field('main_image')['large']['url']; ?>)">
					<div class="cta">
						<h4>VH Life</h4>
						<h1>
							<?php the_title(); ?>
						</h1>
					</div>
				</div>
				
			</div>
	
			<div class="row">
				
				<div class="post-container">
					<?php the_content(); ?>
				</div>
				
			</div>
	
			<div class="row">
			
				<?php if ( ! empty( get_field('quad_image')[0]['wide_1'])){ ?>
				
					<div class="four-image-block">
						<div class="image wide">
							<div class="image" style="background-image: url(<?php if ( ! empty( get_field('quad_image')[0]['wide_1'])){ echo get_field('quad_image')[0]['wide_1']['sizes']['large']; } ?>)"></div>
						</div>
						<div class="image">
							<div class="image" style="background-image: url(<?php if ( ! empty( get_field('quad_image')[0]['small_1'])){ echo get_field('quad_image')[0]['small_1']['sizes']['large']; } ?>)"></div>
						</div>
						<div class="image">
							<div class="image" style="background-image: url(<?php if ( ! empty( get_field('quad_image')[0]['small_2'])){ echo get_field('quad_image')[0]['small_2']['sizes']['large']; } ?>)"></div>
						</div>
						<div class="image wide">
							<div class="image" style="background-image: url(<?php if ( ! empty( get_field('quad_image')[0]['wide_2'])){ echo get_field('quad_image')[0]['wide_2']['sizes']['large']; } ?>)"></div>
						</div>
					</div>
				
				<?php } ?>
			
				<?php 
				$links = get_field('links');
				if ($links != 0){ ?>
				
					<div class="link-block">
						<?php foreach ( $links as $link ) { ?>
							<a href="<?php echo $link['link'] ?>"><?php echo $link['text'] ?></a>
						<?php } ?>
					</div>
				
				<?php } ?>
				
			</div>
	
			<div class="row">
			
				<?php 
				$carousels = get_field('carousel');
				if ($carousels != 0){ ?>
				
					<div class="carousel-block">
						<div class="vh-carousel" frameWidth="100" easing="ease" durationInSeconds="1" type="crossfade">
							<?php $it = 1; foreach ( $carousels as $carousel ) { ?>
								<div image="<?php echo $carousel['image']['sizes']['large']; ?>">
									<div class="text">
										<?php echo $carousel['caption']; ?>
										<div class="numbers">
											<div class="number"><?php if($it < 10){echo 0;} echo $it; $it++; ?></div>
											<hr/>
											<div class="number"><?php if(count($carousels) < 10){echo 0;} echo count($carousels); ?></div>
										</div>
									</div>
								</div>
							<?php } ?>
						</div>
					</div>
				
				<?php } ?>
				
			</div>
	
			<div class="row">
				
				<div class="socials-block">
					<h3>Think this is great? Share it</h3>
					<ul class="socials">
						<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank"><li class="social facebook">
							<object type="image/svg+xml" data="/wp-content/themes/vh/images/fbook.php?c=515254"></object>
						</li></a>
						<a href="https://twitter.com/home?status=<?php echo urlencode(get_permalink()); ?>" target="_blank"><li class="social twitter">
							<object type="image/svg+xml" data="/wp-content/themes/vh/images/twitter.php?c=515254"></object>
						</li></a>
					</ul>
				</div>
				
			</div>
	
			<div class="row">
				
				<div class="vhpost-list-block">
			
					<h3 class="pre-block">Similar Posts</h3>
				
					<div class="vhpost-list">
					
						<?php
							$prev_post = get_previous_post();
							$next_post = get_next_post();
							if (!empty( $prev_post )){
							$cats = get_the_terms($prev_post, "vh_life_categories");
							?>
							<a href="<?php echo get_permalink( $prev_post->ID ); $image = get_field('main_image', $prev_post->ID); ?>">
								<div class="vhpost-list-item">
									<div class="image" style="background-image: url(<?php echo $image['sizes']['medium'];?>);"></div>
									<h4><?php echo $cats[0]->name; ?></h4>
									<h2><?php echo $prev_post->post_title; ?></h2>
									<p><?php echo the_excerpt($pev_post->ID); ?></p>
								</div>
							</a>
						<?php } else { ?>
							<div class="vhpost-list-item">
								<div class="image"></div>
								<h4></h4>
								<h2></h2>
								<p></p>
							</div>
						<?php } ?>
						
						<?php
						
							$args = array(

							$randomPost = get_posts(array(
								'numberposts' => 1,
								'orderby' => 'rand',
								'post_type' => 'vh_life'
								)
							));
							
							foreach($randomPost as $post) { 
							$cats = get_the_terms($post, "vh_life_categories"); ?>
							<a href="<?php echo get_permalink( $post->ID ); $image = get_field('main_image', $post->ID); ?>">
								<div class="vhpost-list-item">
									<div class="image" style="background-image: url(<?php echo $image['sizes']['medium'];?>);"></div>
									<h4><?php echo $cats[0]->name; ?></h4>
									<h2><?php echo $post->post_title; ?></h2>
									<p><?php echo the_excerpt($post->ID); ?></p>
								</div>
							</a>
							<?php } ?>
					
						<?php if (!empty( $next_post )){
							$cats = get_the_terms($next_post, "vh_life_categories"); ?>
							<a href="<?php echo get_permalink( $next_post->ID ); $image = get_field('main_image', $next_post->ID); ?>">
								<div class="vhpost-list-item">
									<div class="image" style="background-image: url(<?php echo $image['sizes']['medium'];?>);"></div>
									<h4><?php echo $cats[0]->name; ?></h4>
									<h2><?php echo $next_post->post_title; ?></h2>
									<p><?php echo the_excerpt($next_post->ID); ?></p>
								</div>
							</a>
						<?php } else { ?>
							<div class="vhpost-list-item">
								<div class="image"></div>
								<h4></h4>
								<h2></h2>
								<p></p>
							</div>
						<?php } ?>
					</div>
				</div>
				
			</div>
	
		<div class="row">
			
			<div class="email-block filler">
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
				<div class="insta-list" id="insta-list">
				</div>
			</div>
			
		</div>
				
		<?php endwhile;?>
	
	
	<?php }?>

<?php if ($post->post_type != "portfolio"){ ?>
	<?php get_footer(); ?>
<?php }?>