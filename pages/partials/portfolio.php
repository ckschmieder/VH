<?php define('WP_USE_THEMES', false);
require_once('../../../../../wp-blog-header.php');
$offset = $_GET['o'];
$offset = $offset * 3;
//$offset = $offset + 1;
					$posts = get_field("portfolio_post_links", 7);
					if(isset($_GET["i"]) && is_numeric ($_GET["i"])){
						$hay = get_field("portfolio_post_links", 7, false, false);
						$key = array_search($_GET["i"], $hay);
						$VIPost = $posts[$key];
						array_splice($posts, $key, 1);
						array_unshift($posts, $VIPost);
					}
					$posts = array_slice($posts, $offset);
					$i = 0;
					$images = [];
					foreach($posts as $post){
						setup_postdata($post);
						$images = get_field('images');
					?>
				
					<div class="carousel-block">
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
					</div>
					<?php $i++; if($i == 4){break;}} ?>