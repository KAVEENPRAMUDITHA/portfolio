const scriptURL = 'https://script.google.com/macros/s/AKfycbyPhdNO3cWOhfVSxKnjHVDYaQ8vDk_Na3PsLq5J37zlKq6s8fUZVoqClN8mCYOVs8shQw/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            console.log('Success!', response);
            alert('Your message has been sent successfully!');
            form.reset(); // Reset form after successful submission
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert('There was an error submitting your message. Please try again.');
        });
});
 