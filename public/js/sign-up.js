const signUpHandler = async (event) => {
    event.preventDefault();
    const usernameSign = $('#signup-username');
    const emailSign = $('#signup-email');
    const passwordSign = $('#signup-password');
    const first_nameSign = $('#sigup-first_name'); 
    const last_nameSign = $('#signup-last_name') 
    const bootcampSign = $('#signup-bootcamp')
    // if first name, lastname, username, email, and password entered
    if(first_nameSign && last_nameSign && bootcampSign && usernameSign && emailSign && passwordSign) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ first_nameSign, last_nameSign, bootcampSign, usernameSign, emailSign, passwordSign }),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            //replaces current page with home page
            document.location.replace('/');
        } else {
            alert('You are unable to sign up')
        }
    }
};
$('#signup-form').on('submit', signUpHandler)

$('#loginBtn').on('click', () => {
    document.location.replace('/login')
})