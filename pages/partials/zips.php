<?php 
	$z = $_GET['z'];
	$host = 'localhost';
	$user = 'wordpress';
//	$password = 'wordpress';
	$password = 'Qrhxt8m';
	$db_name = 'wordpress';
		$connection = new mysqli($host, $user, $password, $db_name);
		if ($connection->connect_errno) {
		    echo "Failed to connect to MySQL: (" . $connection->connect_errno . ") " . $connection->connect_error;
		}
	$myArray = array();
	
	if ($res = $connection->query('SELECT * FROM zips WHERE zip="'.$z.'" LIMIT 1')){
	
		while($row = $res->fetch_array(MYSQL_ASSOC)) {
	            $myArray[] = $row;
	    }
	    echo json_encode($myArray);
	
	}
	
	?>