// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCplLcJWjp0Ql9R4yY3md6Rbsv_qNvVVQg",
  authDomain: "kwitterp-2c12e.firebaseapp.com",
  databaseURL: "https://kwitterp-2c12e-default-rtdb.firebaseio.com",
  projectId: "kwitterp-2c12e",
  storageBucket: "kwitterp-2c12e.appspot.com",
  messagingSenderId: "132445879053",
  appId: "1:132445879053:web:9de11d434f2c1afad98e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addroom() {
   room_name = document.getElementById("room_name").value;
   localStorage.setItem("Roomname",room_name);
   window.location = "kwitter_page.html";
   firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name -"+Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
  });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}