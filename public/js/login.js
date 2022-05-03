const loginHandler = async (event) => {
    event.preventDefault();    
    const usernameLog = $('#login-username').trim();
    const passwordLog = $('#login-password').trim();
    // if email and password have been entered
    if(email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ usernameLog, passwordLog }),
            headers: { 'Content-Type': 'application/json '},
        });
        if (response.ok) {
            // replace login page with home page
            document.location.replace('/');
        } else {
            alert('You are unable to login');
        }
    }
};
document    
    $('#login-form')
    .on('submit', loginHandler);