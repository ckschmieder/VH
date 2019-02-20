<?php

namespace VH;

class Filters {
 
  public function init(){
    $this->attach_hooks();
  }
  
  public function attach_hooks(){
    add_filter( 'template_include', array($this, 'search_template' ) );
  }
  
  public function search_template($original_template){
    if ( isset($_GET['s']) && $_GET['s']) {
    	$original_template = get_template_directory() . "/pages/collections-sresults.php";
    }
    return $original_template;
  }
  
}