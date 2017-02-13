<?php
include "connection.php";
Include 'init.php';
require_once 'vendor/autoload.php';
// Get $id_token via HTTPS POST.
$token= $_POST['token'];
$gcetoken = $_POST["gcetoken"];
$ammount = $_POST["ammount"];
$orderData = $_POST["order"];

$client = new Google_Client();
$client->setApplicationName("AWE");
$client->setDeveloperKey("253866998924-4rmi5ltc7rh9io5rk621om0vck73ms1i.apps.googleusercontent.com");
$client->setHttpClient(new \GuzzleHttp\Client(array(
    'verify' => 'C:\xampp\htdocs\BricksEatery\cacert.pem',
)));
$payload = $client->verifyIdToken($gcetoken);
if ($payload) {
  $userid = $payload['sub'];
  echo $payload['email'];
  echo $payload['email_verified'];
  echo $payload['name'];
} else {
  echo "invalid Token";
}

\Stripe\Stripe::setApiKey("sk_test_VgOzfhQgIxnGZgQj19mhb2Wq");

\Stripe\Charge::create(array(
  "amount" => $ammount,
  "currency" => "usd",
  "source" => $token, // obtained with Stripe.js
  "description" => "Charge for You"
));

$savequery = "INSERT INTO `Orders`(`SEDID`, `orderdata`) VALUES ('" . $userid . "','" . $orderData . "')";


if (!$result = $mysqli->query($savequery)){
    print("<h2>Sorry, the dino-site is experiencing problems.</h2>");
    print("Error: Your query failed to execute and here is why:<br />");
    print("<code>Error Number: " . $mysqli->errno . "</code><br />");
    print("<b>Error: " . $mysqli->error . "</b><br />");
    exit;
    }

?>
