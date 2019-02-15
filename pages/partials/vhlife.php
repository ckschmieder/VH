<?php define('WP_USE_THEMES', false);
require_once('../../../../../wp-blog-header.php');
$offset = $_GET['o'];
					$args = array( 'posts_per_page' => 3, 'post_type' => 'vh_life', 'post_status' => 'publish',  'offset' => (($offset*3)+1));
					$posts = get_posts( $args );
					foreach ( $posts as $post ) {
						setup_postdata($post);
				?>
					<div class="vhpost-list-item">
						<div class="image" style="background-image: url(<?php echo get_field('main_image')['sizes']['medium']; ?>)"></div>
						<h4><?php $cats = get_the_category(); if(count($cats)){echo $cats[0]->name;} ?></h4>
						<h2><?php the_title(); ?></h2>
						<?php the_excerpt(); ?>
						<a href="<?php the_permalink(); ?>"><button>View Post</button></a>
					</div>
						<?php } ?>