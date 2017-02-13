<?php
$mysqli = new mysqli("localhost", "root", "", "brickseatery");
if ($mysqli->connect_errno) {
 print("Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
}
?>
