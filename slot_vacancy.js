const firebaseConfig = {
  apiKey: "AIzaSyB5Q8w36QVxIuAbGWkedhRJgiyH5FjJWxA",
    authDomain: "unified-mentor-a190d.firebaseapp.com",
    databaseURL: "https://unified-mentor-a190d-default-rtdb.firebaseio.com/",
    projectId: "unified-mentor-a190d",
    storageBucket: "unified-mentor-a190d.firebasestorage.app",
    messagingSenderId: "548641897619",
    appId: "1:548641897619:web:69b44d9644bad0a813e166",
    measurementId: "G-152PLCT7BC"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const urlParams = new URLSearchParams(window.location.search);
var slot = urlParams.get('slots');
var resultsDiv = document.getElementById('results');
var slotCountElement = document.getElementById('slotCount');
var requestedSlots = document.getElementById('reqSlots');
// var newSlotCount = document.getElementById('newSlots');


database.ref('bunks/')
.orderByChild('slots')
.limitToFirst(1)
.equalTo(slot)
.on('value', function(snapshot) {
  var vacancy = snapshot.val();
  console.log(snapshot.val());
  
  if (vacancy) {
    // Get the number of available slots from the first vacancy in the snapshot
    var slotCount = vacancy[Object.keys(vacancy)[0]].slots;
    
    // Update the slotCount element with the number of available slots
    slotCountElement.innerHTML = slotCount;
  } else {
    slotCountElement.innerHTML = 0;
  } 
});




function onBook() {
  var a = parseInt(slotCountElement.innerHTML);
  var b = parseInt(requestedSlots.value);
  
  if (b <= a) {
    
    var newSlotCount = a - b;
    slotCountElement.innerHTML = newSlotCount;
    
      
        database.ref('bunks/').update({
          slots: newSlotCount
        });

        alert('Slot Booked')
    //   });
    // });
    
  } else {
    console.log("Not enough slots available");

  }
}




























