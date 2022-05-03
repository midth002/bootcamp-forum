const loginHandler = async (event) => {
    event.preventDefault();    
    const username = $('#login-username').trim();
    const password = $('#login-password').trim();
    // if email and password have been entered
    if(username && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json '},
        });
        if (response.ok) {
            // replace login page with home page
            // document.location.replace('/');
            alert('success')
        } else {
            alert('You are unable to login');
        }
    }
};
document    
    $('#login-form')
    .on('submit', loginHandler);