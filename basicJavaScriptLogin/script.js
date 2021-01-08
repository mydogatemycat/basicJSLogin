function visiblePassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function submitLogin() {
    var emailvalue = document.getElementById("email").value;  
    var passwordvalue = document.getElementById("password").value;
    var email = "someone@company.com";
    var passwword = "password";
    
    if (emailvalue == email) {
        return false;
        if (passwordvalue == password) {
            document.write("Correct Credidentials!");
            return false;
        } else {
            document.write("The password you've entered is incorrect.");
            return false;
        }
    } else {
        if (passwordvalue == password) {
            document.write("The email you've entered is incorrect.");
            return false;
            
        } else {
            document.write("The email and password you've entered is incorrect.");
            return false;
        }
        return false;
    }
    
    return false;
  }