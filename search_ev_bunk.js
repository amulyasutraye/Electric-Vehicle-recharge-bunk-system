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

const auth = firebase.auth()
const database = firebase.database()

function search() {
    var searchQuery = document.getElementById('search-bar').value;
    var resultsDiv = document.getElementById('results');


    // Query the database for data matching the search query
    database.ref('bunks/').orderByChild('area').equalTo(searchQuery).once('value', function (snapshot) {
        var results = snapshot.val();
        console.log(results);
           
            // Display the results in a table
            if (results) {
                // Display the results in a table
                var display = '<table class="results-table">';
                display += '<tr><th>Location</th><th>Area</th><th>Phone</th><th>Vacancy</th></tr>';
                for (var key in results) {
                    display += '<tr>';
                    display += '<td>' + results[key].location + '</td>';
                    display += '<td>' + results[key].area + '</td>';
                    display += '<td>' + results[key].phone + '</td>';
                    display += '<td><a href="slot_vacancy.html?slots=' + results[key].slots + '"><button class="vacancy-btn">Vacancy</button></a></td>';
                    display += '</tr>';
                }
                display += '</table>';
                resultsDiv.innerHTML = display;


        } else {
            resultsDiv.innerHTML = 'No results found.';
        }
    });
}
const navbar = document.getElementById('navbar');

// Add a Firebase Auth state observer
auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log(user)
      // User is signed in
      let usern = user.email;
     
      // Extract the first letter of the email
      let firstLetter = usern.charAt(0).toUpperCase();
      
      // Add the first letter to the navbar
      navbar.innerHTML = `${firstLetter}`;
    } else {
      // User is signed out
      navbar.innerHTML = 'Sign In';
    }
  });





































