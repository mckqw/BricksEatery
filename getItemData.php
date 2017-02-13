<?php

include 'connection.php';

$name = $_POST['title'];


$fullquery = "SELECT `ItemDescription`, `itemoptions`.`Options` as Options FROM `menu` INNER JOIN `itemoptions` WHERE `ItemName` = \"" . $name . "\" && `menu`.`OptionName` = `itemoptions`.`OptionName`";
if (!$fullresult = $mysqli->query($fullquery)){
print("<h2>Sorry, the site is experiencing problems.</h2>");
print("Error: Your query failed to execute and here is why:<br />");
print("<code>Error Number: " . $mysqli->errno . "</code><br />");
print("<b>Error: " . $mysqli->error . "</b><br />");
exit;
}
$CDIL = null;
$optionCode = "";
while ($row = $fullresult->fetch_assoc()) {
    $CDIL = $row["ItemDescription"];
    $optionCode = $row["Options"];
}
$itemTypes = explode('+',$optionCode);
$ActiveItems = explode(',', $CDIL);

$ActiveItems = array_map('trim', $ActiveItems);
foreach($itemTypes as $base){
  $itemType = substr($base, 0 , strpos($base, '-'));
  $sect1 = substr($base,0,strpos($base, '['));
  $dropdownstyle = substr($sect1,strrpos($sect1, '-'),strlen($sect1));
  $itemType = str_replace(array("\r", "\n", " "), '', $itemType);
  $itemType = "select".$itemType;
  $items = substr($base, strpos($base, '[') + 1 , strpos($base, ']'));
  $items = explode(',', $items);
  if (strrpos($dropdownstyle, 'm') == true ){
    print("<select class='selectpicker' id='" . $itemType . "' multiple data-show-subtext='true' data-live-search='true' multiple data-selected-text-format='count > 2'>");
  } else if (strrpos($dropdownstyle, 's') == true){
    print("<select class='selectpicker' id='" . $itemType . "' data-show-subtext='true' data-live-search='true'>");
    if (strrpos($dropdownstyle, 'n') == true){
      print("<option data-subtext=\"\">Nothing Selected</option>");
    }
  }
  foreach ($items as $item) {
    $ItemName = substr($item,0,strpos($item,'('));
    $ItemPrice = substr($item,strpos($item,'('),strpos($item,')'));
    $price = filter_var($ItemPrice, FILTER_SANITIZE_NUMBER_INT);
    if ($price != 0){
      if (strpos($ItemPrice, 'selected') !== false) {
          print("<option data-subtext='" . $price . "' selected>" . $ItemName . "</option>");
      } else if(in_array($ItemName, $ActiveItems)){
        print("<option data-subtext='" . $price . "' selected>" . $ItemName . "</option>");
      } else {
        print("<option data-subtext='" . $price . "'>" . $ItemName . "</option>");
      }
    } else {
      if (strpos($ItemPrice, 'selected') !== false) {
          print("<option data-subtext='Free' selected>" . $ItemName . "</option>");
      } else if(in_array($ItemName, $ActiveItems)){
        print("<option data-subtext='Free' selected>" . $ItemName . "</option>");
      } else {
        print("<option data-subtext='Free'>" . $ItemName . "</option>");
      }
    }
  }
    print("</select>");
}
?>
