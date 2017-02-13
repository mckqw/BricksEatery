


$('li.dropdown a').on('click', function (event) {
var tempScrollTop = $(window).scrollTop();
$(this).parent().toggleClass('open');
$(window).scrollTop(tempScrollTop);
});
$('body').on('click', function (e) {
if (!$('li.dropdown').is(e.target)
&& $('li.dropdown').has(e.target).length === 0
&& $('.open').has(e.target).length === 0) {
$('li.dropdown').removeClass('open');
}
});
    window.onload = function() {
        if (window.width < 991) {
            alert("here");
        }
        setTimeout(is_touch_device, 10);
    }
    var count = 0;

    function displaySnackbar(title, price) {
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
if($("#cartItems > h2").length == 1 ){
$(".dropdown-cart").empty();
$(".dropdown-cart").append('<div id="cartItems" style="overflow: auto; max-height: 350px;"></div>');
$(".dropdown-cart").append('<li class="divider"></li><li><a class="text-center" href=""><h4 id="cartTotal"></h4>   View Cart</a></li>');
        }
$("#cartItems").append('<li style="padding-left:10px;" id='+name+'><div class="well"> <div class="item"> <div class="media-img pull-left col-sm-5 col-md-4 "><img id="cartidimg" src="./Pictures/' + name + '.jpg"></div> <div class="media-body"> <h4 class="media-heading">'+title+'</h4><span name='+name+' class="cartItemPrice">'+price+'$</span> <button name='+name+' class="btn btn-sm btn-danger pull-right" onclick="removeItem(this.name)"><span class="glyphicon glyphicon-remove"></span></button> <button name='+name+' class="btn btn-sm pull-right" onclick="increaseCount(this.name)" style="border-right-style: solid;border-color: black;"><span class="glyphicon glyphicon-plus"></span></button> </button> <button class="btn btn-sm pull-right" name='+name+' onclick="decreaseCount(this.name)"><span class="glyphicon glyphicon-minus"></span></button><button class="btn btn-sm btn-info pull-right" data-toggle="modal" data-target="#myModal" onclick="displayEditModual()">Edit</button><span id="count-'+name+'" class="label label-lg label-success pull-right">1</span></div> </div></div></li>');
displayTotal();
setTimeout(function() {
            x.className = x.className.replace("show", "");
        }, 3000);
        count++;
    }
function displayEditModual(){
$("#myModual").modal();
/*$(".modal-dialog").empty();
$(".modal-dialog").append('<div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title"></h4> </div> <div class="modal-body"> <p>Some text in the modal.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div> </div>');
*/
}
function removeItem(id){
$("#"+id).empty();
$("#"+id).remove();
if($("#cartItems > li").length == 0 ){
$(".dropdown-cart").empty();
$(".dropdown-cart").append('<div id="cartItems"><h2 style="text-align: center;">Your Cart is Empty</h2></div>');
}

displayTotal();
}
function increaseCount(name){
var id="count-"+name;
var num=document.getElementById(id).innerHTML;
$("#count-"+name).html(parseFloat(num)+1);
displayTotal();
}
function decreaseCount(name){
var id="count-"+name;
var num=document.getElementById(id).innerHTML;
num=num-1;
if(num == 0){
removeItem(name);
} else {
$("#count-"+name).html(num);
}
displayTotal();
}
function displayTotal(){
var total = 0;
var count = 0;
$(".cartItemPrice").each(function() {
var num = $(this).html();
var mult = $("#count-"+$(this).attr('name')).html();
total = (parseFloat(num.replace(/\$/g, ''))*mult) + parseFloat(total);
count++;
});
if(count !=0){
$(".dropdown-toggle .navcart").empty();
$(".dropdown-toggle .navcart").append('<span class="glyphicon glyphicon-shopping-cart"></span> <span class="label label-success label-as-badge">'+count+'</span> <span class="caret"></span>');
} else{
$(".dropdown-toggle .navcart").empty();
$(".dropdown-toggle .navcart").append('<span class="glyphicon glyphicon-shopping-cart"></span><span class="caret"></span>');
}
$("#cartTotal").html("Total: "+total+"$");
}
    function is_touch_device() {
        if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            var nodes = document.querySelectorAll("#iteminfo");
            console.log(nodes);
            for (var i in nodes) {
                nodes[i].style.visibility = "visible";
                nodes[i].style.opacity = 1;
            }
        }
    }

    function addImg(name) {
        name = name.replace(/ /g, '');
        console.log(name);
        document.getElementById("popupcontent").innerHTML = "";
        document.getElementById("popupcontent").innerHTML += '<img src="./Pictures/' + "bricksburger" + '.jpg"></img>';
    }
var adjustment;

$("ol.simple_with_animation").sortable({
group: 'simple_with_animation',
pullPlaceholder: false,
// animation on drop
onDrop: function  ($item, container, _super) {
var $clonedItem = $('<li/>').css({height: 0});
$item.before($clonedItem);
$clonedItem.animate({'height': $item.height()});

$item.animate($clonedItem.position(), function  () {
$clonedItem.detach();
_super($item, container);
});
},

// set $item relative to cursor position
onDragStart: function ($item, container, _super) {
var offset = $item.offset(),
pointer = container.rootGroup.pointer;

adjustment = {
left: pointer.left - offset.left,
top: pointer.top - offset.top
};

_super($item, container);
},
onDrag: function ($item, position) {
$item.css({
left: position.left - adjustment.left,
top: position.top - adjustment.top
});
}
});
