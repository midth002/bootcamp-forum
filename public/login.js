const loginHandler = async (event) => {
    event.preventDefault();
    // need id's for theese
    const email = $('#email').trim();
    const username = $('#user_name').trim();
    const password = $('#password').trim();
    //
    if(email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
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