
const display = $('#display')

display.text('');


try {
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
    const data = await response.json();
    if(response.status === 400 || response.status === 401) { 
        display.text(`${data.message}`)
    return  $('#display-div').append(display);
    }

    document.location.replace('/');
    
        // if (response.ok) {
        //     // replace login page with home page
        //     document.location.replace('/');
            
        // } else {
        //     alert('You are unable to login');
        // }
    }
};
$('#login-form').on('submit', loginHandler);
} catch (error) {
    console.log(error)
}
