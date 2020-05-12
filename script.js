// Navbar Side Menu Mobile Pop Out//
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
// End Navbar Side Menu Mobile Pop Out//

// Contact Page//
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");

// Submit Contact Form//
$( "#formButton" ).click(function() {
event.preventDefault()

    Email.send({
        SecureToken : "34dc89ba-06a4-4697-ae91-a7ebfb6cb4a9",
        To : 'bgmyhan@gmail.com',
        From : 'bgmyhan@gmail.com',
        Subject : "Testing",
        Body : ($(".userText").val())

  
}).then(
  message => alert("Thank you for reaching out to us. A representative from the firm will respond as soon as possible.")
   );
});