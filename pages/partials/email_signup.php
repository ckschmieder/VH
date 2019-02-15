<?php
	
	$email = [];
	
	if (!filter_var($_GET['e'], FILTER_VALIDATE_EMAIL)) {
		echo "email";
		return false;
	}

	$email[] = $_GET['e'];
	$email[] = '';

	try {
		$file = fopen("./emails.csv","a");
	
		fputcsv($file,$email);
	
		fclose($file);
		echo "success";
		return true;
	} catch (Exception $e) {
		return $e;
	}
	
	

?>