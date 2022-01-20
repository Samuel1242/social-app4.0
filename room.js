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

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "room.html";
}

function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}