// Register a new user
firebase.auth().createUserWithEmailAndPassword(email, password)
 .catch(function (err) {
   // Handle errors
 });

// Sign in existing user
firebase.auth().signInWithEmailAndPassword(email, password)
 .catch(function(err) {
   // Handle errors
 });

// Sign out user
firebase.auth().signOut()
 .catch(function (err) {
   // Handle errors
 });
