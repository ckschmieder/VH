<?php define('WP_USE_THEMES', false);
require_once('../../../../../wp-blog-header.php');
$no = $_POST['no'];
					$args = array( 'posts_per_page' => 3, 'post_type' => 'products', 'post_status' => 'publish', 'orderby' => 'rand', 'post__not_in' => $no);
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