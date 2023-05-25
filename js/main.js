$(document).ready(function(){
localStorage.setItem("login", false);
  var login = $("form#login");
  var details = {
      email: "darrenlloyd222@gmail.com",
      password: "nyla07"
  };
  login.on("submit", function(e){
      e.preventDefault();
      var mail = $("#email").val();
      var pass = $("#password").val();
      if(mail === details.email && pass === details.password){
          location.href = "home.html"
          localStorage.setItem("login", true);
      }
      else if(mail === details.email && pass !== details.password){
          alert("Your password is incorrect");
      }
      else{
          alert("Not Registered");
      }
  })

  

      
     
      
      
    
   



})