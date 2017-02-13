<?php
require "config.php";

  $username = $_POST['first'];
  $email = $_POST['email'];
  $password = $_POST['pass1'];
  $retyped_password = $_POST['pass2'];
  $name = $_POST['last'];
  if( $username == "" || $email == "" || $password == '' || $retyped_password == '' || $name == '' ){
      echo "<h2>Fields Left Blank</h2>", "<p>Some Fields were left blank. Please fill up all fields.</p>";
  }elseif( !\Fr\LS::validEmail($email) ){
      echo "<h2>E-Mail Is Not Valid</h2>", "<p>The E-Mail you gave is not valid</p>";
  }elseif( !ctype_alnum($username) ){
      echo "<h2>Invalid Username</h2>", "<p>The Username is not valid. Only ALPHANUMERIC characters are allowed and shouldn't exceed 10 characters.</p>";
  }elseif($password != $retyped_password){
      echo "<h2>Passwords Don't Match</h2>", "<p>The Passwords you entered didn't match</p>";
  }else{
    $createAccount = \Fr\LS::register($username, $password,
      array(
        "email" => $email,
        "name" => $name,
        "created" => date("Y-m-d H:i:s") // Just for testing
      )
    );
  }
?>
