<?php
/**
 * For Development Purposes
 */
ini_set("display_errors", "on");

require __DIR__ . "/../../src/LS.php";
\Fr\LS::config(array(
  "db" => array(
    "host" => "localhost",
    "port" => 3306,
    "username" => "root",
    "password" => "",
    "name" => "BricksEatery",
    "table" => "users"
  ),
  "features" => array(
    "auto_init" => true
  ),
  "pages" => array(
    "no_login" => array(
      "/brickseatery/logSys-master/",
      "/brickseatery/logSys-master/examples/basic/reset.php",
      "/brickseatery/logSys-master/examples/basic/register.php"
    ),
    "everyone" => array(
      "/brickseatery/logSys-master/examples/two-step-login/status.php"
    ),
    "login_page" => "/brickseatery/logSys-master/examples/basic/login.php",
    "home_page" => "/brickseatery/logSys-master/examples/basic/home.php"
  )
));
