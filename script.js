//document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById('memberApp');

const printReceipt = (event) => {
    event.preventDefault();

    const name = document.getElementById('fname').value;
    const message = `Thank you, ${name}! We will send you a reminder a few days before we meet!`;
    

    const confirmationDiv = document.getElementById('confirmationMessage');
    confirmationDiv.textContent = message;

};

form.addEventListener("submit", printReceipt);