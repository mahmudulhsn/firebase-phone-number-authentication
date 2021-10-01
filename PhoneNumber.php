<html>
<head>
    <title>Phone Number Authentication with Firebase Web</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-form">
        <h1>Enter number</h1>
        <form>
            <input type="text" id="number" placeholder="+880********">
            <div id="recaptcha-container"></div>
            <button type="button" onclick="phoneAuth();">SendCode</button>
        </form>
    </div>
    
    <div class="verify-otp">
        <h1>Enter Verification code</h1>
        <form>
            <input type="text" id="verificationCode" placeholder="Enter verification code">
            <button type="button" onclick="codeVerify();">Verify code</button>
        </form>
    </div>

    <div id="user-info" class="user-info">
        <h3>Welcome User</h3>
        <p id="userInfo">Welcome to Firebase web login Example. You're currently logged in.</p>
        <button onclick="logout()">Logout</button>
    </div>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDjzb4tbRRbfBj5wZcXvV4uWB4a6BCQBpg",
        authDomain: "test-login-55f56.firebaseapp.com",
        projectId: "test-login-55f56",
        storageBucket: "test-login-55f56.appspot.com",
        messagingSenderId: "1098605146430",
        appId: "1:1098605146430:web:33162775ecbbaf26b7fc6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
</script>
<script src="NumberAuthentication.js" type="text/javascript"></script>
</body>
</html>

