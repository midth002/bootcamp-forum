const signUpHandler = async (event) => {
    event.preventDefault();
    const usernameSign = $('#signup-username');
    const emailSign = $('#signup-email');
    const passwordSign = $('#signup-password');

    if(usernameSign && emailSign && passwordSign) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ usernameSign, emailSign, passwordSign }),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/');
        } else {
            alert('You are unable to sign up')
        }
    }
};
document
    $('#signup-form')
    .on('submit', signUpHandler)