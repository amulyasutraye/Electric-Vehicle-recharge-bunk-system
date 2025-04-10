const firebaseConfig = {
  apiKey: "<enter ur api key>",
    authDomain: "unified-mentor-a190d.firebaseapp.com",
    databaseURL: "https://unified-mentor-a190d-default-rtdb.firebaseio.com/",
    projectId: "unified-mentor-a190d",
    storageBucket: "unified-mentor-a190d.firebasestorage.app",
    messagingSenderId: "548641897619",
    appId: "1:548641897619:web:69b44d9644bad0a813e166",
    measurementId: "G-152PLCT7BC"
  
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  name1 = document.getElementById('name1').value;
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  address = document.getElementById('address').value
  phoneno = document.getElementById('mobile').value
  username = document.getElementById('username').value

  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser
   
    var database_ref = database.ref()
    
    // Create User data
    var user_data = {
      email : email,
      username : username,
      address : address,
      phoneno : phoneno,
    }
    
    // Push to Firebase Database
    database_ref.child('Admin_users/' + user.uid).set(user_data)
    
    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    console.log(error_code)
    console.log(error_message)
    
    alert(error_message)
  })
  
  
}


// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  

console.log("hi");

auth.signInWithEmailAndPassword(email, password)
.then(function() {
  // Declare user variable
  var user = auth.currentUser
  
  var database_ref = database.ref()
      
    // Push to Firebase Database
    database_ref.child('Admin_users/' + user.uid)
    
    // DOne
    alert('User Logged In!!')
    
    window.open('create_ev_details.html');
    
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    
    console.log(error_code);
    console.log(error_message);
    
    alert(error_message)
  })
}

function addFormData() {
  var location = document.getElementById("bunk-location").value;
  var area = document.getElementById("bunk-area").value;
  var slots = document.getElementById("NoofSlots").value;
  var phone = document.getElementById("phoneno").value;
  var capacity = document.getElementById("slot-capacity").value;
  var minChargeTime = document.getElementById("min-charge-time").value;
  
  // Push the form data as a new child to a "bunks" reference in the database
  database.ref("bunks").push({
    location: location,
    area: area,
    slots: slots,
    phone: phone,
    capacity: capacity,
    minChargeTime: minChargeTime
  });
}

// Monitor data from the database
database.ref("bunks").on("child_added", function(snapshot) {
  var location = snapshot.val().location;
  var area = snapshot.val().area;
  var slots = snapshot.val().slots;
  var phone = snapshot.val().phone;
  var capacity = snapshot.val().capacity;
  var minChargeTime = snapshot.val().minChargeTime;
  
});











































