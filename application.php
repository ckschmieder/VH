<?php

$namespace = 'VH';
\spl_autoload_register(
	function ( $class ) use ( $namespace ) {
		$base = explode( '\\', $class );
		if ( $namespace === $base[0] ) {
			$file = __DIR__ . DIRECTORY_SEPARATOR . strtolower(
					str_replace(
						[ '\\', '_' ],
						[
							DIRECTORY_SEPARATOR,
							'-',
						],
						$class
					) . '.php'
				);
			if ( file_exists( $file ) ) {
				require $file;
			} else {
				wp_die( sprintf( 'File %s not found', esc_html( $file ) ) );
			}
		}
	}
);
$filters = new \VH\Filters();
$filters->init();