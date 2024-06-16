// Form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else {
        document.getElementById('form-feedback').style.display = 'block';
        event.preventDefault();
    }
});
