<?php
/**
 * For Development Purposes
 */
ini_set("display_errors", "on");

require "LS.php";
\Fr\LS::config(array(
  "db" => array(
    "host" => "localhost",
    "port" => 3306,
    "username" => "root",
    "password" => "",
    "name" => "brickseatery",
    "table" => "users"
  ),
  "features" => array(
    "auto_init" => true,
    "email_login" => true
  ),
  "pages" => array(
    "no_login" => array(
      "/brickseatery/",
      "/brickseatery/",
      "/brickseatery/registerAccount.php"
    ),
    "everyone" => array(
      "/brickseatery/"
    ),
    "login_page" => "/brickseatery/",
    "home_page" => "/brickseatery/"
  )
));
