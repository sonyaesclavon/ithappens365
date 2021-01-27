

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBl3p54GpInPVB6lmZHb2-22Jh1hxKV75k",
    authDomain: "ith365.firebaseapp.com",
    databaseURL: "https://ith365.firebaseio.com",
    projectId: "ith365",
    storageBucket: "ith365.appspot.com",
    messagingSenderId: "1048431412118",
    appId: "1:1048431412118:web:43f9e2058ef6cae371d3b7",
    measurementId: "G-JHCTWEDQEG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message,
  });
}
sendEmail(name, company, email, phone, message);


// Send Email Info to Email
function sendEmail(name, company, email, phone, message) {
	Email.send({
		Host: "smtp.gmail.com",
		Username:"ithappens365@gmail.com",
		Password:"ckdtknruohulvuom",
		To:"ithappens365@gmail.com",
		From:"ithappens365@gmail.com",
		Subject:'${name} sent you a message',
		Body:'Name: ${name} <br/> Company: ${company} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}',
	})
		.then((message) => alert("mail sent successfully")
);
}















