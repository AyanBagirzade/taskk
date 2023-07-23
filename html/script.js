// script.js
const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const paymentAmount = document.getElementById('paymentAmount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Handle payment submission (you can send the data to a server, for example)
    console.log('Payment Amount:', paymentAmount);
    console.log('Payment Method:', paymentMethod);

    // Reset the form after submission
    paymentForm.reset();
});