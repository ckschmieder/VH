<?php

@ini_set( 'upload_max_size' , '8M' );
@ini_set( 'post_max_size', '8M');
@ini_set( 'max_execution_time', '300' );
@ini_set('memory_limit', '400M' );

add_theme_support( 'post-thumbnails' );

/*function my_assets() {
    wp_enqueue_style( 'cks-styles', get_template_directory_uri() . '/css/cks-styles.css' );
}
add_action( 'wp_enqueue_scripts', 'my_assets' );*/

/*function load_my_script(){
    wp_register_script( 
        'slick-carousel', 
        get_template_directory_uri() . '/js/slick.js', 
        array( 'jquery' )
    );
    wp_enqueue_script( 'slick-carousel' );
}
add_action('wp_enqueue_scripts', 'load_my_script');*/

/*function add_jquery_ui() {
    wp_enqueue_script( 'jquery-ui-core' );
    wp_enqueue_script( 'jquery-ui-widget' );
    wp_enqueue_script( 'jquery-ui-mouse' );
    // wp_enqueue_script( 'jquery-ui-accordion' );
    // wp_enqueue_script( 'jquery-ui-autocomplete' );
    wp_enqueue_script( 'jquery-ui-slider' );
    // wp_enqueue_script( 'jquery-ui-tabs' );
    wp_enqueue_script( 'jquery-ui-sortable' );
    wp_enqueue_script( 'jquery-ui-draggable' );
    wp_enqueue_script( 'jquery-ui-droppable' );
    // wp_enqueue_script( 'jquery-ui-datepicker' );
    wp_enqueue_script( 'jquery-ui-resize' );
    wp_enqueue_script( 'jquery-ui-dialog' );
    wp_enqueue_script( 'jquery-ui-button' );
}
add_action( 'wp_enqueue_scripts', 'add_jquery_ui' );*/


function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );

function post_type_tags( $post_type = '' ) {
    global $wpdb;

    if ( empty( $post_type ) ) {
        $post_type = get_post_type();
    }

    return $wpdb->get_results( $wpdb->prepare( "
        SELECT COUNT( DISTINCT tr.object_id ) 
            AS count, tt.taxonomy, tt.description, tt.term_taxonomy_id, t.name, t.slug, t.term_id 
        FROM {$wpdb->posts} p 
        INNER JOIN {$wpdb->term_relationships} tr 
            ON p.ID=tr.object_id 
        INNER JOIN {$wpdb->term_taxonomy} tt 
            ON tt.term_taxonomy_id=tr.term_taxonomy_id 
        INNER JOIN {$wpdb->terms} t 
            ON t.term_id=tt.term_taxonomy_id 
        WHERE p.post_type=%s 
            AND tt.taxonomy='post_tag' 
        GROUP BY tt.term_taxonomy_id 
        ORDER BY count DESC
    ", $post_type ) );
}

function custom_excerpt_length( $length ) {
	return 50;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

function alx_browser_body_class( $classes ) {
    global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone;
 
    if($is_lynx) $classes[] = 'lynx';
    elseif($is_gecko) $classes[] = 'gecko';
    elseif($is_opera) $classes[] = 'opera';
    elseif($is_NS4) $classes[] = 'ns4';
    elseif($is_safari) $classes[] = 'safari';
    elseif($is_chrome) $classes[] = 'chrome';
    elseif($is_IE) {
        $browser = $_SERVER['HTTP_USER_AGENT'];
        $browser = substr( "$browser", 25, 8);
        if ($browser == "MSIE 7.0"  ) {
            $classes[] = 'ie7';
            $classes[] = 'ie';
        } elseif ($browser == "MSIE 6.0" ) {
            $classes[] = 'ie6';
            $classes[] = 'ie';
        } elseif ($browser == "MSIE 8.0" ) {
            $classes[] = 'ie8';
            $classes[] = 'ie';
        } elseif ($browser == "MSIE 9.0" ) {
            $classes[] = 'ie9';
            $classes[] = 'ie';
        } else {
            $classes[] = 'ie';
        }
    }
    else $classes[] = 'unknown';
 
    if( $is_iphone ) $classes[] = 'iphone';
 
    return $classes;
}
add_filter( 'body_class', 'alx_browser_body_class' );

session_start();

/*add_filter('posts_orderby', 'edit_posts_orderby');

function edit_posts_orderby($orderby_statement) {

    $seed = $_SESSION['seed'];
    if (empty($seed)) {
      $seed = rand();
      $_SESSION['seed'] = $seed;
    }

    $orderby_statement = 'RAND('.$seed.')';
    return $orderby_statement;
}*/

function my_acf_init() {
    
    acf_update_setting('google_api_key', 'AIzaSyC9Hxg3Dm-_ckCwTDMgiJWafBhxyoYPIt0');
}

add_action('acf/init', 'my_acf_init');


/*
 * Add columns to products post list
 */
function add_acf_columns ( $columns ) {
   return array_merge ( $columns, array ( 
     'product_type' => __ ( 'Product Category' )
   ) );
 }
 add_filter ( 'manage_products_posts_columns', 'add_acf_columns' );

 /*
 * Add columns to exhibition post list
 */
function products_custom_column ( $column, $post_id ) {
   switch ( $column ) {
     case 'product_type':
       echo get_post_meta ( $post_id, 'product_type', true );
       break;
   }
 }
 add_action ( 'manage_products_posts_custom_column', 'products_custom_column', 10, 2 );

?>

