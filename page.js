
var firebaseConfig = {
    apiKey: "AIzaSyDg8WzCYaERWLazTk-FPg2ZtgpTJJ56g5I",
    authDomain: "test-f921f.firebaseapp.com",
    databaseURL: "https://test-f921f-default-rtdb.firebaseio.com",
    projectId: "test-f921f",
    storageBucket: "test-f921f.appspot.com",
    messagingSenderId: "249615639355",
    appId: "1:249615639355:web:81c024ad41b10b7b5d4d1e",
    measurementId: "G-HP70Q94244"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
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
