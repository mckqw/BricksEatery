<?php
include "connection.php";
$name = $_POST["Name"];
$note = $_POST["Note"];
$email = $_POST["Email"];

	$savequery = "INSERT INTO `ContactInfo`(`Name`, `Email`, `Notes`) VALUES ('" . $name . "','" . $email . "','" . $note . "')";


	if (!$result = $mysqli->query($savequery)){
			print("<h2>Sorry, the dino-site is experiencing problems.</h2>");
			print("Error: Your query failed to execute and here is why:<br />");
			print("<code>Error Number: " . $mysqli->errno . "</code><br />");
			print("<b>Error: " . $mysqli->error . "</b><br />");
			exit;
		  }
	else{
		header('Location: index.php');
	}
?>
