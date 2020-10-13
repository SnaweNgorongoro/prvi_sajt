/*var cart = {
  "itemsInCart": 0,
  "cartSum": 0
}*/

$(".btn-addtocart").on("click", function(){
  var oldSum = $(".cart-sum").text();
  var newSum = parseInt(oldSum) + 100;
  $(".cart-sum").text(newSum);
  
  var oldNumberOfItems = $(".items-incart").text();
  var newNumberItems = parseInt(oldNumberOfItems) + 1;
  $(".items-incart").text(newNumberItems);
  
  /*var productId = $(this).attr("data-productid");
  var product = $(".product-" + productId);
  var price = product.attr("data-price");*/
  
  
  cart.itemsInCart = cart.itemsInCart + 1;
  cart.cartSum = cart.cartSum + parseInt(price);
  $(".cart-sum").text(cart.cartSum);
  $(".items-incart").text(cart.itemsInCart);
})


