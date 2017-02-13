<?php
	require "config.php";
	echo "hello";
	$identification = $_POST['login'];
	$password = $_POST['password'];
		$login = \Fr\LS::login($identification, $password, true);
		print($login);
		if(is_array($login) && $login['status'] == "blocked"){
			echo "Error", "Too many login attempts. You can attempt login after ". $login['minutes'] ." minutes (". $login['seconds'] ." seconds)";
		} else{
			echo "OK";
		}
?>
