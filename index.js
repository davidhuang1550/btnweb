

function SignIn(){
    var email = $("#username").val();
    var password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
        window.location.href = "video.html";
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $("#IsCorrect").removeAttr('hidden');
      // ...
    });
}
$("#login").on('click',function(){
    SignIn();
});
