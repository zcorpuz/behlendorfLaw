// Navbar Side Menu Mobile Pop Out//
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
// End Navbar Side Menu Mobile Pop Out//

// Contact Page//
var firstName = document.getElementById("first_name")
var lastName = document.getElementById("last_name")
var email = document.getElementById("email")

// Submit Contact Form using Submit Button//
$(document).ready(function(){
    $("#formButton").click(function(event){
        event.preventDefault()
        var firstName = $("#first_name").val()
        var lastName = $("#last_name").val()
        var userEmail = $("#email").val()
        var userMessage = $(".userText").val()
        var statusEl = $('.status')
        statusEl.empty()
// Validating user input fields///
        if (firstName.length > 2) {
            $(statusEl).append('<p>email is valid</p>')
            console.log("firstName is valid");
        } else {
            $(statusEl).append('<p>mail is not valid</p>')
            console.log("firstName is not valid");
        }
        if (lastName.length > 2) {
            $(statusEl).append('<p>email is valid</p>')
            console.log("lastName is valid");
        } else {
            $(statusEl).append('<p>mail is not valid</p>')
            console.log("lastName is not valid");
        }
        if (userEmail.length > 5 && userEmail.includes('@') && userEmail.includes('.')){
            $(statusEl).append('<p>email is valid</p>')
            console.log("email is valid");
        } else {
            $(statusEl).append('<p>mail is not valid</p>')
            console.log("email is not valid");
        }
        if (userMessage.length >= 20){
            $(statusEl).append('<p>email is valid</p>')
            console.log("Message is valid");
        } else {
            $(statusEl).append('<p>mail is not valid</p>')
            console.log("Message is not valid");
        }
// Sending contact information through https://elasticemail.com/ //
                Email.send({
                    SecureToken : "34dc89ba-06a4-4697-ae91-a7ebfb6cb4a9",
                    To : 'bgmyhan@gmail.com',
                    From : 'bgmyhan@gmail.com',
                    Subject : "A Message From BehlendorfLaw.com 1",
                    Body : "Name:" + firstName + " " + lastName + " " +"Email: " + " " + userEmail + " " + "Message Contents:" +" " + userMessage
            
            }).then(
              message => alert("Thank you for reaching out to us. A representative from the firm will respond as soon as possible.")
               )
        })
            
    })
// End Contact Form //