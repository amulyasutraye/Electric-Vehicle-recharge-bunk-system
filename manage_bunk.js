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

const database = firebase.database();

var bunkTableBody = document.getElementById("bunk-table-body");

function deleteRow(id) {
  var ref = database.ref("bunks/" + id);
  ref.remove().then(function () {
    var row = document.getElementById(id);
    row.parentNode.removeChild(row);
  });
}

database.ref("bunks").on("child_added", function (snapshot) {
  var location = snapshot.val().location;
  var area = snapshot.val().area;
  var slots = snapshot.val().slots;
  var phone = snapshot.val().phone;
  var capacity = snapshot.val().capacity;
  var minChargeTime = snapshot.val().minChargeTime;
  var id = snapshot.key;

  var row = bunkTableBody.insertRow();
  row.id = id;
  var locationCell = row.insertCell(0);
  var areaCell = row.insertCell(1);
  var slotsCell = row.insertCell(2);
  var phoneCell = row.insertCell(3);
  var capacityCell = row.insertCell(4);
  var minChargeTimeCell = row.insertCell(5);
  var deleteCell = row.insertCell(6);

  locationCell.innerText = location;
  areaCell.innerText = area;
  slotsCell.innerText = slots;
  phoneCell.innerText = phone;
  capacityCell.innerText = capacity;
  minChargeTimeCell.innerText = minChargeTime;
  deleteCell.innerHTML =
    "<button onclick=\"deleteRow('" + id + "')\">Delete</button>";
});
