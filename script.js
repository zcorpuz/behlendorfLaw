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
// Submiting Contact Form using Submit Button//
$(document).ready(function(){  
    $(".btn").click(function(event){
        event.preventDefault()
            var firstName = $("#first_name").val()
            var lastName = $("#last_name").val()
            var userEmail = $("#email").val()
            var userMessage = $(".userText").val()
            var statusEl = $('.status')
        statusEl.empty()
// Validating user input fields///
        var isValid = true;
        if (firstName.length > 2) {
            $(statusEl).append('<p>firstName is valid</p>')
            isValid = true
        } else {  
            $(statusEl).append('<p>firstName is not valid</p>')
            isValid = false; 
        }
        if (lastName.length > 2) {
            $(statusEl).append('<p>lastName is valid</p>')
            isValid = true;
        } else {
            $(statusEl).append('<p>lastName is not valid</p>')
            isValid = false;
        }
        if (userEmail.length > 5 && userEmail.includes('@') && userEmail.includes('.')){
            $(statusEl).append('<p>email is valid</p>')
            isValid = true;
        } else {
            $(statusEl).append('<p>email is not valid</p>')
            isValid = false;
        }
        if (userMessage.length >= 10){
            $(statusEl).append('<p>message is valid</p>')
            isValid = true;
        } else {
            $(statusEl).append('<p>message is not valid</p>')
            isValid = false;
        }
// Sending contact information through https://elasticemail.com/ //
        if (isValid){
           
            Email.send({
                SecureToken : "34dc89ba-06a4-4697-ae91-a7ebfb6cb4a9",
                To : 'bgmyhan@gmail.com',
                From : 'bgmyhan@gmail.com',
                Subject : "A Message From BehlendorfLaw.com 1",
                Body : "Name:" + firstName + " " + lastName + " " +"Email: " + " " + userEmail + " " + "Message Contents:" + " " + userMessage
            }).then(()=>{

                document.getElementById("contactForm").reset()
                });
            $('.modal').modal();
        }        
    })
});
// End Contact Page