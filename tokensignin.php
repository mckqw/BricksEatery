<?php
require_once 'vendor/autoload.php';
include "connection.php";
// Get $id_token via HTTPS POST.
$id_token= $_POST['token'];

$client = new Google_Client();
$client->setApplicationName("AWE");
$client->setDeveloperKey("253866998924-4rmi5ltc7rh9io5rk621om0vck73ms1i.apps.googleusercontent.com");
$client->setHttpClient(new \GuzzleHttp\Client(array(
    'verify' => 'C:\xampp\htdocs\BricksEatery\cacert.pem',
)));
$payload = $client->verifyIdToken($id_token);
if ($payload) {
  $userid = $payload['sub'];
} else {
  echo "invalid Token";
}

$savequery = "SELECT `sedID` FROM `users` WHERE `sedID` = " . $userid;


if (!$result = $mysqli->query($savequery)){
    print("<h2>Sorry, the dino-site is experiencing problems.</h2>");
    print("Error: Your query failed to execute and here is why:<br />");
    print("<code>Error Number: " . $mysqli->errno . "</code><br />");
    print("<b>Error: " . $mysqli->error . "</b><br />");
    exit;
    }
$exists = false;
while ($row = $result->fetch_assoc()) {
  if ($userid == $row['sedID']){
    $exists = true;
  }
}
if(!$exists){
  $savequery = "INSERT INTO `users`(`sedID`, `Name`, `Email`) VALUES ('" . $userid . "','" . $payload['name'] . "','" . $payload['email'] . "')";

  if (!$result = $mysqli->query($savequery)){
      print("<h2>Sorry, the dino-site is experiencing problems.</h2>");
      print("Error: Your query failed to execute and here is why:<br />");
      print("<code>Error Number: " . $mysqli->errno . "</code><br />");
      print("<b>Error: " . $mysqli->error . "</b><br />");
      exit;
      }
}

?>
