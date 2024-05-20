document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';

    let validity = true;
    const msg = "Your response has been succesfully submitted!! Nearest showroom person would contact you as soon as possible";

    if (name.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        validity = false;
        event.preventDefault(); 
    }

    if (email.trim() === '') {
        emailError.textContent = 'Please enter your email.';
        validity = false;
        event.preventDefault(); 

    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        validity = false;
        event.preventDefault(); 
    }

    if (phone.trim() === '') {
        phoneError.textContent = 'Please enter your phone number.';
        validity = false;
        event.preventDefault(); 

    } else if (!isValidPhone(phone)) {
        phoneError.textContent = 'Please enter a valid phone number.';
        validity = false;
        event.preventDefault(); 
    }

    if (message.trim() === '') {
        messageError.textContent = 'Please enter your message.';
        validity = false;
        event.preventDefault(); 
    }

    if(validity) {
        alert(msg)
    }
});

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}




