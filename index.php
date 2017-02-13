<html>

<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="google-signin-client_id" content="253866998924-4rmi5ltc7rh9io5rk621om0vck73ms1i.apps.googleusercontent.com">
    <meta name="robots" content="index,follow">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <!-- Latest compiled and minified CSS -->
    <link href="brickseatery.css" rel="stylesheet">
				<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
						<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
    <script src="jquery.easing.1.3.js"></script>
    <script src="jquery.easing.compatibility.js"></script>
    <script src="fontawesome-markers.min.js"></script>
		<script src='decimal.js'></script>
		<script src='index.js'></script>
		<script type="text/javascript" src="jquery.payment.js"></script>
    <script src="https://johnny.github.io/jquery-sortable/js/jquery-sortable-min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.1.62/jquery.inputmask.bundle.js"></script>
    <script src="https://use.fontawesome.com/1a2629692a.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/js/bootstrap-select.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/css/bootstrap-select.min.css" />
		<link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet">
    </script>
    <title></title>
</head>

<body>
    <header id="myCarousel" class="carousel slide">
        <!-- Indicators -->

        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
					<button class="btn-lg carousel-arrow" onclick="scrollWin()">Get Started<br><span class="fa fa-angle-down fa-2x carousel-arrow" aria-hidden="true"></span>
					</button><br>
        </ol>
        <!-- Wrapper for Slides -->
        <div class="carousel-inner">
            <div class="item active">
                <!-- Set the first background image using inline CSS below. -->
                <div class="fill" style="background-image:url('./Pictures/bricks.jpg');"></div>
                <div class="carousel-caption welcome">
                    <h1>Welcome to Bricks</h1>
            </div>
						</div>
            <div class="item">
                <div class="fill" style="background-image: url('./Pictures/Menu1.jpg');"></div>
                <div class="carousel-caption">
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image: url('./Pictures/specials.jpg');"></div>
                <div class="carousel-caption">

                </div>
            </div>
        </div>

    </header>
		<script language="JavaScript" type="text/javascript">
			$(document).ready(function(){
				$('#myCarousel').carousel({
					interval: 5000
				});
				$('#myCarousel').carousel('cycle');
			});
		</script>

    <div class="wrapper" id="allIndex">
        <nav class="navbar navbar-inverse navbar-fixed-top" style="border-color: transparent;">
            <div class="container" style="display: flex;">
                <ul class="nav navbar-nav navbar-left list-inline">
										<li class="dropdown">
												<a href="javascript:;" class="dropdown-toggle navAccount" role="button"  aria-expanded="false">
													<div class="btn-round"><span></span></div>
												</a>
												<ul class="dropdown-menu dropdown-account" role="menu">
														<div id="accountOptions">

															<div data-toggle='modal' data-target='#accountModal'>Account Details</div>
															<div id="logOut">Logout</div>
														</div>
												</ul>
										</li>
                    <li><div id="my-signin2"></div></li>
									</ul>
									<ul class="nav navbar-nav navbar-right">
										<li class="dropdown list">
                        <a href="javascript:;" class="dropdown-toggle navcart" role="button" aria-expanded="false">
                            <span class="fa fa-shopping-cart fa-2x " style="height:35px"></span><span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-cart" role="menu">
                            <div id="cartItems" class="noItems">
                                <h2 style="text-align: center;">Your Cart is Empty</h2>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
            <!--/.navbar-collapse -->
        </nav>
        <div class="modal-container">
            <div id="editModal" class="modal fade in" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title"></h3>
                        </div>
                        <div class="modal-body">
                            <div class="media">
                                <div class="media-left" id="itemIMG">

                                </div>
                                <div class="media-body" style="overflow:visible; text-align: center;">
                                    <div class="pull-left ItemDropdowns">
                                        <h4>Add or Change any Item </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" data-dismiss="modal">
                            Save
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-container">
            <div id="deliverOrPickupModal" class="modal fade in" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                          <h2 id="deliverOrPickupH2"></h2>
                        </div>
                        <div class="modal-footer">
                          <div id="container">
                            <div class="box" id="selectDelivery" data-dismiss="modal" onclick="choosePreferance('deliver');" style="background-color:#72a574">
                                <div class="text">Deliver</div>
                            </div>
                            <div class="box" id="selectPickup" data-dismiss="modal" onclick="choosePreferance('pickup');" style="background-color:#72a5a0 float:none">
                                <div class="text">Pickup</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-container">
            <div id="accountModal" class="modal modal-fullscreen fade in" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
												<div class="modal-body" style="padding: 0;">
													<div class="tab">
														<div class="modal-header">
		                          <button type="button" class="close" data-dismiss="modal">&times;</button>
		                          <h2>Your Account</h2>
		                        </div>
													 <nav class="navbar navbar-default" role="navigation">
														<ul class="nav nav-pills nav-stacked">
															<br>
															<li class="active">
												        <a  href="#overview" data-toggle="tab">Overview</a>
															</li>
															<li><a href="#payment" data-toggle="tab">Payment Options</a>
															</li>
															<li><a href="#history" data-toggle="tab">History</a>
															</li>
														</ul>
													</nav>
															<div class="tab-content clearfix">
															  <div class="tab-pane active" id="overview">
																	<i class="fa fa-bars" onclick="shiftAccontTab()" aria-hidden="true"></i>
																	<br>
												          <div class="row">
																		<div class="col-md-12">
																			<h2>Your Points</h2>
																		</div>
																		<div class="col-md-4">
																		 <div class="row">
																			<div class="col-md-10">
																				<h4>Address</h4>
																			</div>
																			<div class="col-md-2">
																				<a id="showUpdateAddress">update</a>
																			</div>
																		 </div>
																		 <div class="row" id="updateAddressDiv" style="display: none;">
																			 <hr>
																			 <a type="button" class="close pull-right" id="closeAddress">&times;</a><br>
																			 <div class="col-md-12">
																				 <form action="" method="POST" id="updateAddressForm">
																					 <label id="streetLabel">Street<i> (Required)</i></label><br>
																					 <input type="text" name="street"/>
																					 <br><label id="cityLabel">City<i> (Required)</i></label><br>
																					 <input type="text" name="city"/>
																					 <br><label id="StateLabel">State<i> (Required)</i></label><br>
																					 <input type="text" name="State"/>
																					 <br><label id="ZipCodeLabel">Zip Code<i> (Required)</i></label><br>
																					 <input type="text" name="ZipCode"/>
																					 <br>
																					 <br>
																					 <button name="updateAddress" id="updateAddressButton">Update</button>
																				 </form>
																			 </div>
																		 </div>
																		</div>
																		<div class="col-md-4">
																		 <div class="row">
																			<div class="col-md-10">
																				<h4>E-mail</h4>
																			</div>
																			<div class="col-md-2">
																				<a id="showEmailAddress">update</a>
																			</div>
																		 </div>
																		 <div class="row" id="updateEmailForm" style="display: none;">
																			 <hr>
																			 <a type="button" class="close pull-right" id="closeEmail">&times;</a><br>
																			 <div class="col-md-12">
																				 <form action="" method="POST">
																					 <label>New Email</label><br>
																					 <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="newemail"/>
																					 <br>
																					 <br>
																					 <button name="updateEmail" id="updateEmailButton">Update</button>
																				 </form>
																				 <?php
																				 if( isset($_POST['updateEmail']) ){
																					 $email = $_POST['newemail'];
																					 if( \Fr\LS::validEmail($email) ){
																						 \Fr\LS::updateUser(array(
																							 "email" => $email
																						 ));
																					 }
																				 }
																				 ?>
																			 </div>
																		 </div>
																		</div>
																		<div class="col-md-4">
																		 <div class="row">
																			<div class="col-md-10">
																				<h4>Phone</h4>
																			</div>
																			<div class="col-md-2">
																				<a id="showPhoneAddress">update</a>
																			</div>
																		 </div>
																		 <div class="row" id="updatePhoneDiv" style="display: none;">
																			 <hr>
																			 <a type="button" class="close pull-right" id="closePhone">&times;</a><br>
																			 <div class="col-md-12">
																				 <form id="updatePhoneForm" action="" method="POST">
																					 <label>New Phone</label><br>
																					 <input type="text" name="newphone" id="newPhoneTextBox"/>
																					 <br>
																					 <br>
																					 <button name="updatePhone" id="updatePhoneButton">Update</button>
																				 </form>
																				 <?php
																				 if( isset($_POST['updatePhone']) ){
																						 \Fr\LS::updateUser(array(
																							 "phone" => $_POST['newphone']
																						 ));
																				 }
																				 ?>
																			 </div>
																		 </div>
																		</div>
																	</div>
																</div>
																<div class="tab-pane" id="payment">
																	<i class="fa fa-bars" onclick="shiftAccontTab()" aria-hidden="true"></i>
																	<div style="height:200px;width:350px;margin-left:30%;margin-right:25%;background-color: blue;"></div>
												          </div>
																<div class="tab-pane" id="history">
																	<i class="fa fa-bars" onclick="shiftAccontTab()" aria-hidden="true"></i>
																	<div class="row">
												          	<div class="col-md-12">
																			<p>January 27th, 2017</p>
																			<div class="fadeDiv">
																				<i class="text-muted">Bricks Burger, Vermont Burger,Bricks Burger, Vermont Burger,Bricks Burger, Vermont Burger</i>
																				<div class="dimmer"></div>
																			</div>
																			<div class="icons">
																				<span class="label label-primary"><small class="fa fa-caret-square-o-down circle-icon" aria-hidden="true"></small></span>
																				<span class="label label-success"><small class="fa fa-repeat circle-icon" aria-hidden="true"></small>  Re-order</span>
																			</div>
																			<div class="historyPriceDiv">
																				<p>$27.65</p>
																			</div>
																			<div class="historyItemContainer" style="display: none;">
																				<div class="container">
																					<div class="pull-left">
																						<h1>Order Number: 1111-1111</h1>
																					</div>
																					<div class="pull-right">
																							<button type="button" class="close closeHistoryItem">&times;</button>
																					</div>
																				</div>
																				<hr>
																				<div class="historyItems">
																					<div class="historyItem">
																						<div>
																							<h4>Bricks Burger <p style="float:right">$13.00</p></h4>
																							<p class="text-muted">   -Egg</p>
																							<p class="text-muted">   -Spicy Mayo</p>
																						</div>
																						<br/>
																					</div>
																					<div class="historyItem">
																						<div>
																							<h4>Bricks Burger <p style="float:right">$13.00</p></h4>
																							<p class="text-muted">   -Egg</p>
																							<p class="text-muted">   -Spicy Mayo</p>
																						</div>
																						<br/>
																					</div>
																					<div class="historyItem">
																						<div>
																							<h4>Bricks Burger <p style="float:right">$13.00</p></h4>
																							<p class="text-muted">   -Egg</p>
																							<p class="text-muted">   -Spicy Mayo</p>
																						</div>
																						<br/>
																					</div>
																			</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
												  </div>
												</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-container">
            <div id="loginModal" class="modal fade in" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
												<div class="row">
													<div class="col-md-6 col-md-offset-3">
														<div class="panel panel-login">
															<div class="panel-heading">
																<h1>Login With Your Account!</h1>
																<hr>
															</div>
															<div class="panel-body">
																<div class="row">
																	<div class="col-lg-12" class="panel-login">
																		<div id="my-signin2"></div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<button type="button" class="close" data-dismiss="modal" style="margin-right: 30px;margin-top: 10px;">&times;</button>
												</div>
                </div>
            </div>
        </div>
        </div>
        <div class="modal-container">
            <div id="paymentModal" class="modal fade in" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h3 class="modal-title">Payment</h3>
                      </div>
                      <div class="modal-body">
                      <style type="text/css" media="screen">
                        .has-error input {
                          border-width: 2px;
                        }
                        .validation.text-danger:after {
                          content: 'Validation failed';
                        }
                        .validation.text-success:after {
                          content: 'Validation passed';
                        }
                      </style>

                        <form novalidate autocomplete="on" method="POST" class="paymentForm">
                          <div class="form-group">
                            <label for="cc-number" class="control-label">Card number<small class="text-muted cc-brand-small"></small></label>
                            <input type="tel" id="cc-number" type="tel" class="input-lg form-control cc-number" autocomplete="cc-number" placeholder="•••• •••• •••• ••••" required>
                          </div>

                          <div class="form-group">
                            <label for="cc-exp" class="control-label">Card expiry</label>
                            <input id="cc-exp" type="tel" class="input-sm form-control cc-exp" autocomplete="cc-exp" placeholder="•• / ••" required>
                            <label for="cc-cvc" class="control-label">Card CVC</label>
                            <input id="cc-cvc" type="tel" class="input-sm form-control cc-cvc" autocomplete="off" placeholder="•••" required>
                            <label for="cc-zip" class="control-label">ZIP Code</label>
                            <input id="cc-zip" type="tel" class="input-sm form-control cc-zip" autocomplete="off" placeholder="•••••" required>
                          </div>

                          <button type="submit" class="btn btn-lg btn-primary">Submit</button>

                          <h2 class="validation"></h2>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="menu">
            <div style="height:5px;background-color:#511010;"></div>
            <div style="height:62px;"></div>
            <div class="container">
              <?php
                include 'connection.php';
                $basequery = "SELECT `ItemTypeName` FROM `menutype`";
                if (!$baseresult = $mysqli->query($basequery)){
                  exit;
                }
                $typenames=array();
                while($row = $baseresult->fetch_assoc()){
                  array_push($typenames, $row['ItemTypeName']);
                }
                $i = 0;
                while ($i < count($typenames)) {
                  $lengthquery = "SELECT COUNT(`menutype`.`ItemTypeName`) as count FROM `menu` inner join `menutype` WHERE `menu`.`ItemTypeID` = `menutype`.`ItemTypeID` && `menutype`.`ItemTypeName` = '" . $typenames[$i] . "'";
        		        if (!$lengthresult = $mysqli->query($lengthquery)){
                      exit;
                    }
                $rowlength=0;
                while ($rowl = $lengthresult->fetch_assoc()){
                    $rowlength = $rowl['count'];
                }
                $fullquery = "SELECT `ItemName`, `ItemDescription`, `Price`, `PictureURL`, `menutype`.`ItemTypeName` FROM `menu` inner join `menutype` WHERE `menu`.`ItemTypeID` = `menutype`.`ItemTypeID` && `menutype`.`ItemTypeName` = '" . $typenames[$i] . "'";
      		        if (!$fullresult =
									 $mysqli->query($fullquery)){
                    exit;
                  }
      	         $count=0;
              while ($row = $fullresult->fetch_assoc()){
                if ( $count == 0){
                    print("<div class='header' style='text-align:center;background-color:#232830; width:100%;'>
                            <h1>" . $row['ItemTypeName'] . "</h1>
                          </div><div style='height:25px;background-color:black;'></div>");
                }
      					if ( $count == 0){
      					       print("<div class='row'>");
      					}
                $count++;
                  print("
      		          <div class='col-md-4 col-xs-12 itemcol' onclick='displaySnackbar(\"" . $row['ItemName'] . "\", \"" . $row['Price'] . "\", \"" . $row['ItemTypeName'] . "\", \"" . $row['ItemDescription'] . "\");'>
      			           <div class='menuitem'>
      			              <button type='button' class='btn btn-default iteminfo'>
      						          <span class='fa fa-plus' aria-hidden='true'></span>
      					          </button>
      					          <span class='badge' style='float:right; margin-right: 5px;'>$" . $row["Price"] . "</span>
      					          <h4>" . $row["ItemName"] . "</h4>
      					          <p class='text-muted'>" . $row["ItemDescription"] . "</p>
      			          </div>
      		         </div>
      				         ");
                if(($count%3==0) && ($count!=0) && ($count!= $rowlength)){
                  print("</div>");
                  print("<div class='row'>");
                }
                if ( $count == $rowlength){
      					       print("</div><div style='height:25px;background-color:black;'></div>");
      					}
              }
              $i++;
            }
            ?>
            </div>
            <div class="spacer"></div>
        </div>
				<div class="checkAddressStyle">
        <div class="container" id="checkAddress">
          <div class="spacer"></div>
          <div class="row">
          <div class="col-lg-12">
            <div style="text-align: center; color:white;">
              <h1>Check if your Address is Deliverable</h1>
              <div class="input-group">
                <input id="pac-input" class="form-control" type="text"
                    placeholder="Enter a location">
                  <span class="input-group-btn">
                    <button class="btn btn-md btn-primary" id="submitMaps">Check</button>
                  </span>
              </div><!-- /input-group -->
              <br/>
            </div>
          </div>
          </div>
					<div class="spacer"></div>
        </div>
        </div>
        <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map { height: 55%; } /* Optional: Makes the sample page fill the window. */
      #html, body { height: 100%; margin: 0; padding: 0; } #description { font-family:#Roboto; font-size: 15px; font-weight: 300; }
      #infowindow-content .title { font-weight: bold; }
      #infowindow-content { display: none; }
      #map #infowindow-content { display: inline; }
      #pac-input:focus { border-color: #4d90fe; }
      #title { color: #fff; background-color: #4d90fe; font-size: 25px;
      #font-weight: 500; padding: 6px 12px; }
    </style>
    <div id="map"></div>
    <div id="infowindow-content">
      <img src="" width="16" height="16" id="place-icon">
      <span id="place-name"  class="title"></span><br>
      <span id="place-address"></span>
    </div>
        <div id="footer">
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h3>Bricks</h3>
                        <p class="footer-company-name">Bricks &copy; 2017</p>
                        <!-- Snippet from http://bootsnipp.com/snippets/featured/social-icons-font-awesome-with-hover -->
                        <a href="https://www.facebook.com/BricksOnLyons/" class="btn btn-social-icon btn-facebook">
                        <i class="fa fa-facebook fa-2x"></i></a>
                        <a class="btn btn-social-icon btn-instagram" href="https://www.instagram.com/bricksburgers/?hl=en target="_blank""><i class="fa fa-instagram fa-2x"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/burgerwc"><i class="fa fa-twitter fa-2x"></i></a>
                    		<!----------------------->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4 text-right">
                        <h2><span class="label label-default">Contact Us</span></h2>
                    </div>
                    <div class="col-md-4 text-right">
                        <form action="savecontactinfo.php" method="post">
                            <input class="form-control" id="Name" name="Name" placeholder="Full Name" type="text" style="margin:2%">
                            <input class="form-control" id="Email" name="Email" placeholder="Email" type="email" style="margin:2%">
                            <textarea class="form-control" id="Note" name="Note" placeholder="Note" rows="2" style="margin:2%"></textarea>
                            <p class="form-text text-muted">Please Leave a Note and tell us what you think!</p>
                            <input class="btn btn-info" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    </div>
</body>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlb2QcvYb_Qurcn90TTpDkaj1goqb6NR8&libraries=places&callback=initMap"
    async defer></script>
</html>
