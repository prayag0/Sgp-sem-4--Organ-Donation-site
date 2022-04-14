function save(){


var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var dob = document.getElementById('dob').value;
// var gender = document.getElementById('f1-gender').value;
var age = document.getElementById('age').value;
// var bloodgroup = document.getElementById('bloodgroup').value;
var address = document.getElementById('address').value;
var city = document.getElementById('city').value;
var hospital = document.getElementById('hospital').value;
    
alert(name);
firebase.database().ref('users/' + phone).set({
    username: name,
    email: email,
    phone: phone
    });
}