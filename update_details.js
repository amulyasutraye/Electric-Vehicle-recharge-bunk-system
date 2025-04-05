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
const id = urlParams.get('id');

database.ref('bunks/' + id).once('value', function (snapshot) {
    const location = snapshot.val().location;
    const area = snapshot.val().area;
    const slots = snapshot.val().slots;
    const phone = snapshot.val().phone;
    const capacity = snapshot.val().capacity;
    const minChargeTime = snapshot.val().minChargeTime;

    
});

function updateBunk(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const area = document.getElementById('area').value;
    const slots = document.getElementById('slots').value;
    const phone = document.getElementById('phone').value;
    const capacity = document.getElementById('capacity').value;
    const minChargeTime = document.getElementById('minChargeTime').value;

    const updates = {
        location: location,
        area: area,
        slots: slots,
        phone: phone,
        capacity: capacity,
        minChargeTime: minChargeTime
    };

    database.ref('bunks/' + id).update(updates).then(() => {

        window.location.href = 'manage_recharge_slots.html'


    })
}