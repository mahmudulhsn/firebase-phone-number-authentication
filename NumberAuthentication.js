window.onload=function () {
  render();
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("login-form").style.display = "block";
      document.getElementById("verify-otp").style.display = "block";
      document.getElementById("user-info").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user;
        document.getElementById("userInfo").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
      document.getElementById("login-form").style.display = "none";
      document.getElementById("verify-otp").style.display = "none";
      document.getElementById("user-info").style.display = "block";
  
    }
});


function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('number').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult = confirmationResult;
        codeResult = confirmationResult;
        console.log(codeResult);
        document.getElementById('number').value = ''
        alert("Message sent");
        
    }).catch(function (error) {
        alert(error.message);
    });
}
function codeVerify() {
    var code=document.getElementById('verificationCode').value;
    codeResult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user = result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}




function logout(){
    firebase.auth().signOut();
  }
  