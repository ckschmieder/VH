<?php 
/**
 * Template Name: Collections Showroom
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row nopaddtop">
			<p style="text-align: center; font-family: 'TextaAlt', sans-serif; font-size: 1.6rem; font-weight: 300;">Not a member of the trade? Call us at <span style="white-space: nowrap;">(212) 888-0317</span></p>
			
			<div class="map-block">
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="location-block">
			
				<div class="location-search">
					<input type="text" name="zipcode" value="Zip Code" maxlength="5" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
					<button>Search</button>
				</div>
			<?php
				
				$args = array( 'post_type' => 'showroom', 'post_status' => 'publish', 'posts_per_page' => -1, 'order' => 'ASC',
			        'tax_query' => array(
			            array(
			                'taxonomy' => 'showroom_category',
			                'field' => 'slug',
			                'terms' => 'ny',
			            )
			        ) );
				$posts = get_posts( $args );
				foreach ( $posts as $post ) {
					setup_postdata($post);
			?>
			
				<?php
				$add = get_field('address');
				$addPos = strpos($add['address'], ',');
				if ($addPos !== false) {
				    $add['address'] = substr_replace($add['address'], '<br/>', $addPos, 1);
				}
				 ?>
			
				<div class="location-item" lat="<?php echo $add['lat']; ?>" lng="<?php echo $add['lng']; ?>">
					<div class="image"></div>
					<div class="text">
						<p><?php the_title(); ?></p>
						<p><?php echo $add['address']; ?></p>
						<p>(<?php echo get_field('phone_number')[0]['area_code']; ?>)-<?php echo get_field('phone_number')[0]['phone_number_1']; ?>-<?php echo get_field('phone_number')[0]['phone_number_2']; ?></p>
						<p><?php echo get_field('email'); ?></p>
					</div>
				</div>
				
				<?php } ?>
			<?php
				
				$args = array( 'post_type' => 'showroom', 'post_status' => 'publish', 'posts_per_page' => -1, 'order' => 'ASC',
			        'tax_query' => array(
			            array(
			                'taxonomy' => 'showroom_category',
			                'field' => 'slug',
			                'terms' => 'ny',
			                'operator'  => 'NOT IN'
			            )
			        ) );
				$posts = get_posts( $args );
				foreach ( $posts as $post ) {
					setup_postdata($post);
			?>
			
				<?php
				$add = get_field('address');
				$addPos = strpos($add['address'], ',');
				if ($addPos !== false) {
				    $add['address'] = substr_replace($add['address'], '<br/>', $addPos, 1);
				}
				 ?>
			
				<div class="location-item" lat="<?php echo $add['lat']; ?>" lng="<?php echo $add['lng']; ?>">
					<div class="image"></div>
					<div class="text">
						<p><?php the_title(); ?></p>
						<p><?php echo $add['address']; ?></p>
						<p>(<?php echo get_field('phone_number')[0]['area_code']; ?>)-<?php echo get_field('phone_number')[0]['phone_number_1']; ?>-<?php echo get_field('phone_number')[0]['phone_number_2']; ?></p>
						<p><?php echo get_field('email'); ?></p>
					</div>
				</div>
				
				<?php } ?>
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


