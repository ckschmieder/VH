<?php define('WP_USE_THEMES', false);
require_once('../../../../../wp-blog-header.php');
$offset = $_GET['o'];
					$args = array( 'posts_per_page' => 3, 'post_type' => 'products', 'post_status' => 'publish',  'offset' => ($offset*3), 'orderby' => 'menu_order', 'order' => 'ASC');
					$posts = get_posts( $args );
					foreach ( $posts as $post ) {
						setup_postdata($post);
				?>
					<div class="category-item <?php echo get_field('product_type'); ?>" data-id="<?php the_ID(); ?>">
						<a href="<?php echo the_permalink(); ?>"><div class="image" style="background-image: url(<?php 
							$images = get_field('product_images');
							echo $images[0]['sizes']['medium'];
						 ?>)"></div>
						<p><?php the_title(); ?></p>
					</div></a>
						<?php } ?>