
var firebaseConfig = {
    apiKey: "AIzaSyB1OosCWXYNUqqT1TTbKp_LtHaF-VGFzYY",
    authDomain: "daniel-s-website.firebaseapp.com",
    databaseURL: "https://daniel-s-website.firebaseio.com",
    projectId: "daniel-s-website",
    storageBucket: "daniel-s-website.appspot.com",
    messagingSenderId: "701196554618",
    appId: "1:701196554618:web:756c22e1e962faa5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//
var messagesRef = firebase.database().ref('messages');

//listen for form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveMessage(name, email, message);

  //show alternate
  document.querySelector("#submission-success-box").style.display = 'block';
}

//func get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// send to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  })
}

//listen for res-download
document.getElementById('resume-section').addEventListener('download-res', displayResNotice);
function displayResNotice(e) {
  e.preventDefault();

  console.log("test.");
}
