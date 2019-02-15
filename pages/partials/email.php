<?php 
	$message = $_POST['fname'] . " " . $_POST['lname'];
	$message .= " says: ";
	$message .= $_POST['emailBody'];
	
	$mailTo = "info@victoriahagan.com";
	
	if($_POST['col'] == true){
		$mailTo = "home@victoriahagan.com";
	}
	
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo "email";
		return false;
	}
	
	// message lines should not exceed 70 characters (PHP rule), so wrap it
	$message .= wordwrap($message, 70);
	// send mail
	try {
		mail($mailTo,"New message: ".$_POST['subj'] ,$message,"From: ".$_POST['email']."\n");
		echo "success";
		return true;
	} catch (Exception $e) {
		return $e;
	}

?>