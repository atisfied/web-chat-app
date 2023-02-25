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
      

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }