const loginHandler = async (event) => {
    event.preventDefault();    
    const email = $('#login-username').val().trim();
    const password = $('#login-password').val().trim();
    // if email and password have been entered
    if(email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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
$('#login-form').on('submit', loginHandler);
$('#login-form').on('click', document.location.replace('/signup'))