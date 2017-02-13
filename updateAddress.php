<?php

require "config.php";

  $street = $_POST['street'];
  $city = $_POST['city'];
  $state = $_POST['State'];
  $ZIP = $_POST['ZipCode'];
    \Fr\LS::updateUser(array(
      "street" => $street,
      "city" => $city,
      "state" => $state,
      "zip" => $ZIP
    ));
?>
