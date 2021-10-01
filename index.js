firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        var user = firebase.auth().currentUser;
        if(user != null){
            var phone = user.phoneNumber;
            document.getElementById("userInfo").innerHTML = "Welcome user : " + phone;
        }
        document.getElementById("login").style.display = "none";
        document.getElementById("user_info").style.display = "block";
    } else {
      // No user is signed in.
  
      document.getElementById("user_info").style.display = "none";
      document.getElementById("login").style.display = "block";
  
    }
  });

window.onload=function () {
  render();
};

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
        alert("Successfully logged in!");
        var user = result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}


function logout(){
    firebase.auth().signOut();
}



