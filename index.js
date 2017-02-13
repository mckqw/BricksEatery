var deliverOrPickupPrefferance = false;
var deliverOrPickupChoice = "";
var googleUser;
$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#showUpdateAddress').click(function(e) {
        $('#updateAddressDiv').delay(100).fadeIn(400);
        $("#showUpdateAddress").fadeOut(100);
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#closeAddress').click(function(e) {
        $('#showUpdateAddress').delay(100).fadeIn(400);
        $("#updateAddressDiv").fadeOut(100);
        e.preventDefault();
        $('#updateAddressForm label').css('color', 'black');
    });
    $('#showEmailAddress').click(function(e) {
        $('#updateEmailForm').delay(100).fadeIn(400);
        $("#showEmailAddress").fadeOut(100);
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#closeEmail').click(function(e) {
        $('#showEmailAddress').delay(100).fadeIn(400);
        $("#updateEmailForm").fadeOut(100);
        e.preventDefault();
    });
    $('#updateEmailButton').click(function(e) {
        // $('updateEmailButton').submit();
    });
    $('#showPhoneAddress').click(function(e) {
        $('#updatePhoneDiv').delay(100).fadeIn(400);
        $("#showPhoneAddress").fadeOut(100);
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#closePhone').click(function(e) {
        $('#showPhoneAddress').delay(100).fadeIn(400);
        $("#updatePhoneDiv").fadeOut(100);
        e.preventDefault();
    });
    $('#registerAccount').click(function(e) {
        e.preventDefault();
        var data = [];
        var elements = document.getElementById("register-form").elements;
        console.log(elements);
        for (var i = 0, element; element = elements[i++];) {
            if (element.type === "text" || element.type === "password") {
                data.push(element.value);
            }
        }
        $.post('registerAccount.php', {
            first: data[0],
            last: data[1],
            email: data[2],
            pass1: data[3],
            pass2: data[4]
        }, function(response) {
            console.log(response);
        });

    });
    // $('.btn-login').click(function(e) {
    //     e.preventDefault();
    //     var data = [];
    //     var elements = document.getElementById("login-form").elements;
    //     for (var i = 0, element; element = elements[i++];) {
    //         if (element.type === "text" || element.type === "password") {
    //             data.push(element.value);
    //         }
    //     }
    //     $.post('login.php', {
    //         login: data[0],
    //         password: data[1]
    //     }, function(response) {
    //         console.log(response);
    //     });
    //
    // });
    $('.closeHistoryItem').click(function(e) {
        var parent = $(e.target).parent().parent().parent().parent();
        console.log(parent);
        parent.find('.historyItemContainer').fadeOut(400);
        parent.find('.fadeDiv').delay(400).fadeIn(100);
        parent.find('.icons').delay(400).fadeIn(100);
    });
    $('#history .col-md-12 .fa-caret-square-o-down').click(function(e) {
        var parent = $(e.target).parent().parent().parent();
        parent.find('.historyItemContainer').delay(400).fadeIn(400);
        parent.find('.fadeDiv').fadeOut(400);
        parent.find('.icons').fadeOut(400);
    });
    $('#history .col-md-12 .fa-repeat').click(function(e) {
        var parent = $(e.target).parent().parent().parent();
        parent.find('.historyItemContainer').delay(400).fadeIn(400);
        parent.find('.fadeDiv').fadeOut(400);
        parent.find('.icons').fadeOut(400);
    });
    $('#history .col-md-12 i').click(function(e) {
        var parent = $(e.target).parent().parent();
        parent.find('.historyItemContainer').delay(400).fadeIn(400);
        parent.find('.fadeDiv').fadeOut(400);
        parent.find('.icons').fadeOut(400);
    });
    $(window).resize(function() {
        var device_height = $(window).height();
        $("#accountModal .modal-dialog .tab-content").css("height", device_height - 94);
    });
    $('#logOut').on('click', function(event) {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            console.log('User signed out.');
            $("#my-signin2").fadeIn();
            $(".btn-round").fadeOut();
            $(".navbar-left .dropdown").css("display", "none");
            auth2.disconnect();
            $(".navAccount .btn-round span").empty();
            $(".abcRioButtonContents span:nth-child(2)").css("display","none");
            setTimeout(function(){
              console.log($(".abcRioButtonContents span:nth-child(1)").css("display","-webkit-inline-box"));
            }, 100);
        });
    });
    $('li.dropdown a').on('click', function(event) {
        if ($('li.dropdown').hasClass('open')) {
            $('li.dropdown').removeClass('open');
        } else {
            var tempScrollTop = $(window).scrollTop();
            if (!$('li.dropdown').hasClass('open')) {
                $(this).parent().toggleClass('open');
            }
            $(window).scrollTop(tempScrollTop);
        }
    });
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function onSuccess(user) {
    googleUser = user;
    $("#my-signin2").fadeOut();
    $(".btn-round").fadeIn();
    $(".navbar-left .dropdown").css("display", "block");
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    if ($(".navAccount .btn-round span:has(img)").length < 1)
        $(".navAccount .btn-round span").append("<img src=" + googleUser.getBasicProfile().getImageUrl() + ">");
    var data = [googleUser.getAuthResponse().id_token];
    $.post("tokensignin.php", {token: data[0]},
     function(response) {
        console.log(response);
    });
}

function onFailure(error) {
    console.log(error);
}

function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email openid',
        'width': 240,
        'height': 56,
        'longtitle': false,
        'theme': 'light',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

Stripe.setPublishableKey('pk_test_sHQAMbgYUqXC2IKszWjEy9rE');
jQuery(function($) {
  $('[data-numeric]').payment('restrictNumeric');
  $('.cc-number').payment('formatCardNumber');
  $('.cc-exp').payment('formatCardExpiry');
  $('.cc-cvc').payment('formatCardCVC');
  $.fn.toggleInputError = function(erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
  };
  $('.paymentForm').submit(function(e) {
    var $form = $('.paymentForm');
    e.preventDefault();
    $form.find('.submit').prop('disabled', true);
    var cardType = $.payment.cardType($('.cc-number').val());
    $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
    //$('.cc-zip').toggleInputError(!$.payment.validateCardZIP($('.cc-zip').val(), cardType));
    $('.cc-brand-small').text(' ['+cardType+'] ');
    $('.validation').removeClass('text-danger text-success');
    $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
    console.log($('.cc-exp').val());
      Stripe.card.createToken({
          number: $('.cc-number').val(),
          cvc: $('.cc-cvc').val(),
          exp: $('.cc-exp').val(), // Assumes you've added this element to your form
          address_zip: $('.cc-zip').val()
        }, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false;
  });
});
function stripeResponseHandler(status, response) {
// Grab the form:
var $form = $('#payment-form');
if (response.error) { // Problem!

  // Show the errors on the form
  $form.find('.payment-errors').text(response.error.message);
  $form.find('button').prop('disabled', false); // Re-enable submission

} else { // Token was created!
  // Get the token ID:
  var json = [];
  var items = $(".btn-info").each(function() {
      var name = $(this).attr("name");
      item = {};
      item["name"] = name;
      $.each(this.attributes, function() {
        // this.attributes is not a plain object, but an array
        // of attribute nodes, which contain both the name and value
        if(this.specified) {
          var str = this.name;
          if(str.indexOf("select") !== -1){
            str = str.substring(str.indexOf("t")+1,str.length);
            item[str] = this.value;
          }
        }
      });
      json.push(item);
  });
  var token = response.id;
  var cost = {};
  var tip = $('#tipsCtr .cart-totals-value').html();
  var tax = $('#taxesCtr .cart-totals-value').html();
  var total = $('#totalCtr .cart-totals-value').html();
  var gcetoken = googleUser.getAuthResponse().id_token;
  cost["tip"] = tip;
  cost["tax"] = tax;
  cost["total"] = total;
  json.push(cost);
  console.log(parseFloat(total.replace(/\$/g, '')));
  total = parseFloat(total.replace(/\$/g, ''))*100;
  var jsonString = JSON.stringify(json);
  $.post('chargeCard.php', {
      token: token, ammount: total, gcetoken: gcetoken, order: jsonString
  }, function(response) {
    console.log(response);
});
}
}

window.onload = function() {
    var device_height = $(window).height();
    $("#accountModal .modal-dialog .tab-content").css("height", device_height - 94);
    setTimeout(is_touch_device, 10);
    deliverOrPickupPrefferance = false;
    var phones = [{
        "mask": "(###) ###-####"
    }, {
        "mask": "(###) ###-##############"
    }];
    $('#newPhoneTextBox').inputmask({
        mask: phones,
        greedy: false,
        definitions: {
            '#': {
                validator: "[0-9]",
                cardinality: 1
            }
        },
        removeMaskOnSubmit: true
    });
    if ($('#accountAddressStreet').val() == "" || $('#accountAddressTown').val() == "" ||
        $('#accountAddressState').val() == "" || $('#accountAddressZIP').val() == "") {
        $('#showUpdateAddress').empty();
        $('#showUpdateAddress').append("Add Address");
    }
    setTimeout(formatPhone, 200);
}

function formatPhone() {
    $('#accountPhone').text(function(i, text) {
        return text.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    });
}

function scrollWin() {
    var menu = $('#menu').offset().top;
    var body = $("html, body");
    var scrollPos = {
        scrollTop: menu
    };
    body.stop().animate(scrollPos, {
        duration: 750,
        easing: "easeInQuart"
    });
}

function scrollMap() {
    var location = $('#checkAddress').offset().top;
    var body = $("html, body");
    var scrollPos = {
        scrollTop: location
    };
    body.stop().animate(scrollPos, {
        duration: 750,
        easing: "easeInQuart"
    });
    $('li.dropdown').removeClass('open');
}

function choosePreferance(choice) {
    deliverOrPickupChoice = choice;
    if (choice == "") {
        deliverOrPickupPrefferance = false;
    } else {
        deliverOrPickupPrefferance = true;
    }
    $(".dropdown-cart .cartCheckoutWrapper").empty();
    $(".dropdown-cart .cartCheckoutWrapper").remove();
    if ($("#cartItems > li").length == 0) {
        $(".dropdown-cart").empty();
        $(".dropdown-cart").append('<div id="cartItems" class="noItems"><h2>Your Cart is Empty</h2></div>');
    } else {
        if (!deliverOrPickupPrefferance && $('.navAccount').find('small').attr("data-logged-in") !== "true") {
            console.log("here");
            $(".dropdown-cart").append('<li class="cartCheckoutWrapper"><div class="cartCheckoutDiv"><footer class="_grid cart-totals"> <div class="_column subtotal" id="subtotalCtr"> <div class="cart-totals-key">Subtotal</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column delivery" id="tipsCtr"> <div class="cart-totals-key">Tip</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column taxes" id="taxesCtr"> <div class="cart-totals-key">Taxes (6%)</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column total" id="totalCtr"> <div class="cart-totals-key">Total</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column checkout" data-address=""><button onclick="scrollMap();" class="btn btn-sm btn-warning btn-block message">Check your address to pay!</button></div></li>');
        } else {
            if (deliverOrPickupChoice == "deliver") {
                $(".dropdown-cart").append('<li class="cartCheckoutWrapper"><div class="cartCheckoutDiv"><footer class="_grid cart-totals"> <div class="_column subtotal" id="subtotalCtr"> <div class="cart-totals-key">Subtotal</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column delivery" id="tipsCtr"> <div class="cart-totals-key">Tip</div> <div class="cart-totals-value">$3.00</div> </div> <div class="_column taxes" id="taxesCtr"> <div class="cart-totals-key">Taxes (6%)</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column total" id="totalCtr"> <div class="cart-totals-key">Total</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column checkout" data-address=""><button class="btn btn-md" data-toggle="modal" data-target="#paymentModal" onclick="displayPaymentModual()">Pay</button></li>');
            } else if (deliverOrPickupChoice == "pickup") {
                $(".dropdown-cart").append('<li class="cartCheckoutWrapper"><div class="cartCheckoutDiv"><footer class="_grid cart-totals"> <div class="_column subtotal" id="subtotalCtr"> <div class="cart-totals-key">Subtotal</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column delivery" id="tipsCtr"> <div class="cart-totals-key">Tip</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column taxes" id="taxesCtr"> <div class="cart-totals-key">Taxes (6%)</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column total" id="totalCtr"> <div class="cart-totals-key">Total</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column checkout" data-address=""><button class="btn btn-md" data-toggle="modal" data-target="#paymentModal" onclick="displayPaymentModual()">Pay</button></li>');
            } else {
                $('#deliverOrPickupModal').modal('show');
            }
            $('.checkout .btn').attr("data-address", $('#pac-input').val());
        }
    }
    displayTotal();
    if (changeAddress) {
        $('#accountModal').modal('show');
        var data = [];
        var elements = document.getElementById("updateAddressForm").elements;
        console.log(elements);
        for (var i = 0, element; element = elements[i++];) {
            if (element.type === "text" || element.type === "password") {
                data.push(element.value);
            }
        }
        console.log(data);
        $.post('registerAccount.php', {
            street: data[0],
            city: data[1],
            State: data[2],
            ZipCode: data[3]
        }, function(response) {
            console.log(response);
        });
        $('#showUpdateAddress').delay(100).fadeIn(400);
        $("#updateAddressDiv").fadeOut(100);
        $('#updateAddressForm label').css('color', 'black');
    }
}
var count = 0;

function displaySnackbar(title, price, type, description) {
    name = title.replace(/ /g, '');
    var node = document.createElement("DIV");
    var textnode = document.createTextNode(title + " added to Cart");
    node.appendChild(textnode);
    node.id = "snackbar-" + count;
    document.getElementById("allIndex").appendChild(node);
    document.getElementById("snackbar-" + count).innerHTML = "";
    document.getElementById("snackbar-" + count).innerHTML = title + " added to Cart";
    var x = document.getElementById("snackbar-" + count);
    x.className = "show";
    if ($("#cartItems > h2").length == 1) {
        if ($('.navAccount').find('small').attr("data-logged-in") == "true") {
            deliverOrPickupChoice = $('.navAccount').find('small').attr("data-deliverorpickup");
            console.log($('.navAccount').find('small').attr("data-deliverorpickup"));
        }
        $(".dropdown-cart").empty();
        $(".dropdown-cart").append('<div id="cartItems" style="overflow: auto;"></div>');
        if (!deliverOrPickupPrefferance && $('.navAccount').find('small').attr("data-logged-in") !== "true") {
            $(".dropdown-cart").append('<li class="cartCheckoutWrapper"><div class="cartCheckoutDiv"><footer class="_grid cart-totals"> <div class="_column subtotal" id="subtotalCtr"> <div class="cart-totals-key">Subtotal</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column delivery" id="tipsCtr"> <div class="cart-totals-key">Tip</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column taxes" id="taxesCtr"> <div class="cart-totals-key">Taxes (6%)</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column total" id="totalCtr"> <div class="cart-totals-key">Total</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column checkout" data-address=""><button onclick="scrollMap();" class="btn btn-sm btn-warning btn-block message">Check your address to pay!</button></div></li>');
        } else {
            if (deliverOrPickupChoice == "deliver") {
                $(".dropdown-cart").append('<li class="cartCheckoutWrapper"><div class="cartCheckoutDiv"><footer class="_grid cart-totals"> <div class="_column subtotal" id="subtotalCtr"> <div class="cart-totals-key">Subtotal</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column delivery" id="tipsCtr"> <div class="cart-totals-key">Tip</div> <div class="cart-totals-value">$3.00</div> </div> <div class="_column taxes" id="taxesCtr"> <div class="cart-totals-key">Taxes (6%)</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column total" id="totalCtr"> <div class="cart-totals-key">Total</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column checkout" data-address=""><button class="btn btn-md" data-toggle="modal" data-target="#paymentModal" onclick="displayPaymentModual()">Pay</button></li>');
            } else if (deliverOrPickupChoice == "pickup") {
                $(".dropdown-cart").append('<li class="cartCheckoutWrapper"><div class="cartCheckoutDiv"><footer class="_grid cart-totals"> <div class="_column subtotal" id="subtotalCtr"> <div class="cart-totals-key">Subtotal</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column delivery" id="tipsCtr"> <div class="cart-totals-key">Tip</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column taxes" id="taxesCtr"> <div class="cart-totals-key">Taxes (6%)</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column total" id="totalCtr"> <div class="cart-totals-key">Total</div> <div class="cart-totals-value">$0.00</div> </div> <div class="_column checkout" data-address=""><button class="btn btn-md" data-toggle="modal" data-target="#paymentModal" onclick="displayPaymentModual()">Pay</button></li>');
            } else {
                $('#deliverOrPickupModal').modal('show');
            }
            $('.checkout .btn').attr("data-address", $('#pac-input').val());
        }
    }
    $("#cartItems").append('<li style="padding:10px;" id=' + name + '><div class="well"> <div class="item"> <div class="media-img pull-left col-sm-5 col-md-4 "><h4 class="media-heading">' + title + '</h4></div> <div class="media-body"><span name=' + name + ' class="cartItemPrice">$' + price + '</span> <button name=' + name + ' class="btn btn-sm btn-danger pull-right" onclick="removeItem(this.name)"><span class="glyphicon glyphicon-remove"></span></button> <button name=' + name + ' class="btn btn-sm pull-right" onclick="increaseCount(this.name, this)" style="border-right-style: solid;border-color: black;"><span class="glyphicon glyphicon-plus"></span></button> </button> <button class="btn btn-sm pull-right" name=' + name + ' onclick="decreaseCount(this.name,this)"><span class="glyphicon glyphicon-minus"></span></button><button name="' + title + '" class="btn btn-sm btn-info pull-right" data-toggle="modal" data-target="#editModal" onclick="displayEditModal(this.name,\'' + type + '\',\'' + description + '\',this)" data-optionsPrice="0">Change</button><span class="count-' + name + ' label label-lg label-success pull-right">1</span></div> </div></div></li>');
    displayTotal();
    $(".notifications .messages").hide();
    $(".notifications").click(function() {
        if ($(this).children(".messages").children().length > 0) {
            $(this).children(".messages").fadeToggle(300);
        }
    });
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
    count++;
}

function displayEditModal(title, type, description, obj) {
    $("#editModal .modal-header").empty();
    $("#editModal .modal-header").html('<h3>' + title + '</h3>' + "<p class='text-muted'>" + description + "</p>");
    $.post('getItemData.php', {
        title: title
    }, function(response) {
        $('.ItemDropdowns').empty();
        var parent = obj.parentElement;
        var current = $(parent).find('.cartItemPrice').html();
        var price = parseFloat(current.replace(/\$/g, '')) - parseInt(obj.getAttribute("data-optionsPrice"));
        $(parent).find('.cartItemPrice').html("$" + price);
        displayTotal();
        obj.setAttribute("data-optionsPrice", "0");
        $('select.selectpicker').remove();
        $('.ItemDropdowns').append(response);
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.selectpicker').selectpicker('mobile');
            console.log("mobile");
        } else {
            $('.selectpicker').selectpicker();
        }
        var foo = [];
        title = title.replace(/ /g, '');
        $('.media-left').html('<img style="width: 100%;" src="./Pictures/' + title + '.jpg"></img>');
        $('select.selectpicker').each(function() {
            if (obj.getAttribute("" + $(this).attr('id'))) {
                $(this).selectpicker('val', obj.getAttribute($(this).attr('id')).split(","));
            } else {
                foo.push($(this).val());
                var attr = document.createAttribute("" + $(this).attr('id'));
                attr.value = $(this).val();
                obj.setAttributeNode(attr);
            }
            $(this).change(function() {
                console.log($(this).attr('id'));
                obj.setAttribute($(this).attr('id'), $(this).val());
            });
        });
        $("#editModal .modal-footer").unbind('click').click(function() {
            $('#editModal select.selectpicker').each(function() {
                $("#" + $(this).attr("id") + " option:selected").each(function() {
                    var subNum = parseInt($(this).data("subtext"));
                    if ($.isNumeric(subNum)) {
                        var SelectPrice = parseInt(obj.getAttribute("data-optionsPrice"));
                        SelectPrice += subNum;
                        obj.setAttribute("data-optionsPrice", SelectPrice);
                    }
                });
            });
            var parent = obj.parentElement;
            var current = $(parent).find('.cartItemPrice').html();
            var price = parseFloat(current.replace(/\$/g, '')) + parseInt(obj.getAttribute("data-optionsPrice"));
            $(parent).find('.cartItemPrice').html("$" + price);
            displayTotal();
        });
    });

}

function displayPaymentModual() {

}

function removeItem(id) {
    $("#" + id).empty();
    $("#" + id).remove();
    if ($("#cartItems > li").length == 0) {
        $(".dropdown-cart").empty();
        $(".dropdown-cart").append('<div id="cartItems" class="noItems"><h2>Your Cart is Empty</h2></div>');
    }
    displayTotal();
}

function increaseCount(name, e) {
    var parent = e.parentElement;
    parent = $(parent);
    var num = $(parent).find(".count-" + name).html();
    parent.find(".count-" + name).html(parseFloat(num) + 1);
    displayTotal();
}

function decreaseCount(name, e) {
    var parent = e.parentElement;
    parent = $(parent);
    var num = $(parent).find(".count-" + name).html();
    num = num - 1;
    if (num == 0) {
        removeItem(name);
    } else {
        parent.find(".count-" + name).html(num);
    }
    displayTotal();
}

function displayTotal() {
    var total = new Decimal(0);
    var subtotal = new Decimal(0);
    var count = 0;
    var tps = new Decimal(0); //5%
    var tvq = new Decimal(0.0875); //9.975%
    $(".cartItemPrice").each(function() {
        var parent = this.parentElement;
        parent = $(parent);
        var num = $(this).html();
        var name = $(this).attr('name');
        var mult = parent.find(".count-" + name).html();
        subtotal = (parseFloat(num.replace(/\$/g, '')) * mult) + parseFloat(subtotal);
        count++;
    });
    if (count != 0) {
        $(".navcart").empty();
        $(".navcart").append('<span class="fa fa-shopping-cart fa-2x "></span> <span class="badge" style="background-color:red">' + count + '</span> <span class="caret"></span>');
    } else {
        $(".navcart").empty();
        $(".navcart").append('<span class="fa fa-shopping-cart fa-2x "></span><span class="caret"></span>');
    }
    tvq = Decimal.mul(subtotal, tvq);
    total = Decimal.add(subtotal, tvq);
    var deliveryCharge = new Decimal(3);
    var tipPercent = new Decimal(0.1);
    if (deliverOrPickupChoice === "deliver") {
        tps = Decimal.mul(total, tipPercent);
        tps = Decimal.add(tps, deliveryCharge);
    } else {
        tps = Decimal.mul(total, tipPercent);
    }
    total = Decimal.add(total, tps);
    total = total.toFixed(2);
    tps = tps.toFixed(2);
    subtotal = subtotal.toFixed(2);
    tvq = tvq.toFixed(2);
    $("#tipsCtr .cart-totals-value").html("$" + tps);
    $("#taxesCtr .cart-totals-value").html("$" + tvq);
    $("#subtotalCtr .cart-totals-value").html("$" + subtotal);
    $("#totalCtr .cart-totals-value").html("$" + total);
}

function money_round(num) {
    return Math.ceil(num * 100) / 100;
}


function is_touch_device() {
    if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
        $(".iteminfo").css("visiblility", "visible");
        $(".iteminfo").css("opacity", "1");
    }
}

function addImg(name) {
    name = name.replace(/ /g, '');
    document.getElementById("popupcontent").innerHTML = "";
    document.getElementById("popupcontent").innerHTML += '<img src="./Pictures/' + "bricksburger" + '.jpg"></img>';
}

function shiftAccontTab() {
    $('.tab-content').toggleClass('shift');
    $('.navbar-default').toggleClass('show');
}
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var changeAddress = false;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.379215,
            lng: -118.551880
        },
        zoom: 16,
        scrollwheel: false,
        styles: [{
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "color": "#e94f3f"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "gamma": "0.50"
                    },
                    {
                        "hue": "#ff4a00"
                    },
                    {
                        "lightness": "-79"
                    },
                    {
                        "saturation": "-86"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                    "hue": "#ff1700"
                }]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                        "color": "#e74231"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "color": "#4d6447"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                        "color": "#f0ce41"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [{
                    "color": "#363f42"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "color": "#231f20"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6c5e53"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                        "color": "#313639"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text",
                "stylers": [{
                    "hue": "#ff0000"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#0e171d"
                }]
            }
        ]
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow;
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
            strokeColor: "red",
            strokeOpacity: 0.8
        }
    });
    directionsDisplay.setMap(map);
    var onChangeHandler = function() {
        var place = autocomplete.getPlace();
        calculateAndDisplayRoute(directionsService, directionsDisplay, place);
        var service = new google.maps.DistanceMatrixService();
        var origin = new google.maps.LatLng(34.379215, -118.551880);
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [{
                'placeId': place.place_id
            }],
            travelMode: 'DRIVING',
            avoidHighways: false,
            avoidTolls: false,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, callback);
    };
    document.getElementById("submitMaps").addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, place) {
    directionsService.route({
        origin: {
            lat: 34.379215,
            lng: -118.551880
        },
        destination: {
            'placeId': place.place_id
        },
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({
                suppressMarkers: true
            });
            var leg = response.routes[0].legs[0];
            console.log(leg.start_location);
            makeMarker(leg.start_location, "title");
            makeMarker(leg.end_location, 'title');
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function callback(response, status) {
    if (changeAddress) {
        $('#accountModal').modal('toggle');
    }
    if (status == 'OK') {
        var dist = response.rows[0].elements[0].distance.text;
        var dist = dist.replace(/[^0-9\.]/g, '');
        $('#deliverOrPickupModal').modal('show');
        if (dist < 3.5) {
            $("#deliverOrPickupModal .modal-footer .box:nth-child(1)").css("background-color", "#72a574");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(1)").attr("data-dismiss", "modal");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(1)").css("cursor", "pointer");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(2)").css("background-color", "#72a5a0");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(3)").css("background-color", "gray");
            $("#deliverOrPickupModal .modal-body #deliverOrPickupH2").text(dist + " miles is in range to deliver to your address!");
        } else {
            $("#deliverOrPickupModal .modal-footer .box:nth-child(1)").css("background-color", "gray");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(1)").css("cursor", "not-allowed");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(1)").attr("data-dismiss", "none");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(2)").css("background-color", "#72a5a0");
            $("#deliverOrPickupModal .modal-footer .box:nth-child(3)").css("background-color", "gray");
            $("#deliverOrPickupModal .modal-body #deliverOrPickupH2").text(dist + " miles is too far, but your can pickup!");
        }
    }
}

function makeMarker(position, title) {
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: {
            path: fontawesome.markers.MAP_MARKER,
            scale: 0.5,
            strokeWeight: .4,
            strokeColor: 'black',
            strokeOpacity: 1,
            fillColor: '#511010',
            fillOpacity: 0.9,
        },
        title: title
    });
}

$('#updateAddressButton').click(function(e) {
    e.preventDefault();
    // get all the inputs into an array.
    var $inputs = $('#updateAddressForm :input');
    var values = {};
    var i = 0;
    $inputs.each(function(key, value) {
        values[key] = value.value;
    });
    var addr = values[0] + "," + values[1] + "," + values[2] + "," + values[3];
    // Get geocoder instance
    var geocoder = new google.maps.Geocoder();

    // Geocode the address
    $('#updateAddressForm label').css('color', 'black');
    var red = false;
    var elements = document.getElementById("updateAddressForm").elements;
    for (var i = 0, element; element = elements[i++];) {
        if (element.type === "text" && element.value === "") {
            $('#' + element.name + 'Label').css('color', 'red');
            red = true;
        }
    }
    if (!red) {
        geocoder.geocode({
            'address': addr
        }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                var address_components = results[0].address_components;
                var components = {};
                jQuery.each(address_components, function(k, v1) {
                    jQuery.each(v1.types, function(k2, v2) {
                        components[v2] = v1.long_name
                    });
                })
                if (typeof components["street_number"] == "undefined") {
                    $('#StreetLabel').css('color', 'red');
                } else {
                    $('#accountAddressStreet').empty();
                    $('#accountAddressStreet').append(components["street_number"] + " " + components["route"]);
                    $('#accountAddressTown').empty();
                    $('#accountAddressTown').append(components['locality'] + ", ");
                    $('#accountAddressState').empty();
                    $('#accountAddressState').append(components['administrative_area_level_1'] + ", ");
                    $('#accountAddressZIP').empty();
                    $('#accountAddressZIP').append(components['postal_code']);
                    var service = new google.maps.DistanceMatrixService();
                    var origin = new google.maps.LatLng(34.379215, -118.551880);
                    changeAddress = true;
                    service.getDistanceMatrix({
                        origins: [origin],
                        destinations: [{
                            'placeId': results[0].place_id
                        }],
                        travelMode: 'DRIVING',
                        avoidHighways: false,
                        avoidTolls: false,
                        unitSystem: google.maps.UnitSystem.IMPERIAL
                    }, callback);
                }
            } else {
                $('#StreetLabel').css('color', 'red');
            }
        });
    }
});
$('#autoFillAdress').click(function(e) {

});
