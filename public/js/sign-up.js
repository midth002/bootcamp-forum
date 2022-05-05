const signUpHandler = async (event) => {
    event.preventDefault();
    const user_name = $('#signup-username').val().trim();
    const email = $('#signup-email').val().trim();
    const password = $('#signup-password').val().trim();
    const first_name = $('#signup-first_name').val().trim(); 
    const last_name = $('#signup-last_name').val().trim(); 
    const bootcamp_type = $('#signup-bootcamp').val().trim();
    // if first name, lastname, username, email, and password entered
    if(first_name && last_name && bootcamp_type && user_name && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({first_name, last_name, bootcamp_type, user_name, email, password  }),
            headers: {'Content-Type': 'application/json'},
        });

        const signData = await response.json();
        if(response.status === 400 || response.status === 404) { 
           return console.log(signData.message);
            }
        if(response.ok){
            //replaces current page with home page
            document.location.replace('/messages');
        } else {
            alert('You are unable to sign up')
        }
    }
};
$('#signup-form').on('submit', signUpHandler)

$('#loginBtn').on('click', () => {
    document.location.replace('/login')
})