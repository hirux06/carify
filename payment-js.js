document.getElementById('model').addEventListener('change', function() {
    var selectedModel = this.value;
    document.getElementById('price').value = selectedModel;
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    var model = document.getElementById('model').value;
    var amount = document.getElementById('amount').value;
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;
    var name = document.getElementById('name-on-card').value;
    var address = document.getElementById('billing-address').value;

    var modelError = document.getElementById('modelError');
    var amountError = document.getElementById('amountError');
    var cardNumberError = document.getElementById('cardNumberError');
    var expiryDateError = document.getElementById('expiryDateError');
    var cvvError = document.getElementById('cvvError');
    var nameError = document.getElementById('nameError');
    var addressError = document.getElementById('addressError');

    modelError.textContent = '';
    amountError.textContent = '';
    cardNumberError.textContent = '';
    expiryDateError.textContent = '';
    cvvError.textContent = '';
    nameError.textContent = '';
    addressError.textContent = '';

    let validity = true;

    if (model === 'Select a model') {
        modelError.textContent = 'Please select a car model.';
        validity = false;
        event.preventDefault(); 
    }

    if (amount === '') {
        amountError.textContent = 'Please enter payment amount.';
        validity = false;
        event.preventDefault(); 
    }

    if (parseInt(amount) > parseInt(model)) {
        amountError.textContent = 'Payment amount cannot exceed the model price.';
        validity = false;
        event.preventDefault(); 
    }

    if (cardNumber.length !== 12) {
        cardNumberError.textContent = 'Card number must be 12 digits.';
        validity = false;
        event.preventDefault(); 
    }

    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
        expiryDateError.textContent = 'Expiry date must be in MM/YY format.';
        validity = false;
        event.preventDefault(); 
    }

    if (cvv.length !== 3) {
        cvvError.textContent = 'CVV must be 3 digits.';
        validity = false;
        event.preventDefault(); 
    }

    if (name === '') {
        nameError.textContent = 'Please enter your name.';
        validity = false;
        event.preventDefault(); 
    }

    if (address === '') {
        addressError.textContent = 'Please enter your address.';
        validity = false;
        event.preventDefault(); 
    }

    if(validity) {
        alert("You payment is received succesfully! Please wait for 5 min and check your inbox to collect your payment reciept");
    }
});
