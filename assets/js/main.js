let inputName = document.getElementById('inputname');
let inputEmail = document.getElementById('inputemail');
let inputMessage = document.getElementById('message')

function submitForm() {
    let name = inputName.value;
    let email = inputEmail.value;
    let message = inputMessage.value;
    console.log(name);
    console.log(email);
    console.log(message);
}