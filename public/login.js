const loginHandler = async (event) => {
    event.preventDefault();
    // need id's for theese    
    const usernameLog = $('#login-username').trim();
    const passwordLog = $('#login-password').trim();
    //
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
// need id/class and type of button
document    
    $('#login-form')
    .on('submit', loginHandler);