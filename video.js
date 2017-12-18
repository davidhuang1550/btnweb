
function IsUserLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
        window.location.replace("index.html");
      }
    });
}
$("#logout").on('click',function(){
    firebase.auth().signOut();
    window.location.replace("index.html");
});
IsUserLoggedIn();