//frontend
$(document).ready(function(){
  $("#design").click(function() {
    $(".design-show").toggle();
    $(".design-hide").toggle();
  });
});
$(document).ready(function(){
  $("#dev").click(function() {
    $(".dev-show").toggle();
    $(".dev-hide").toggle();
  });
});
$(document).ready(function(){
  $("#product").click(function() {
    $(".product-show").toggle();
    $(".product-hide").toggle();
  });
});
// business logic
function data() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  
 
  if (name === ''){
    alert("Please input the name")
  } else if (email === ''){
    alert("Please input the email")
  } else {
      alert(name + " we have received your message. Thank you for reaching out to us. ")
  };
};
