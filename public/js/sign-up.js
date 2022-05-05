let errorMessage = $('#error-msg')



const signUpHandler = async (event) => {
    event.preventDefault();
    const user_name = $('#signup-username').val().trim();
    const email = $('#signup-email').val().trim();
    const password = $('#signup-password').val().trim();
    const first_name = $('#signup-first_name').val().trim(); 
    const last_name = $('#signup-last_name').val().trim(); 
    const bootcamp_type = $('#signup-bootcamp').val().trim();
  
    // if first name, lastname, username, email, and password entered
    if (first_name == "") {
        $('#signup-first_name').attr("style", "border-color: red;")
        $('#signup-first_name').attr("placeholder", "Please enter a first name")
    }

    if (last_name == "") {
        $('#signup-last_name').attr("style", "border-color: red;")
        $('#signup-last_name').attr("placeholder", "Please enter a last name")
    }

    if (user_name == "") {
        $('#signup-username').attr("style", "border-color: red;")
        $('#signup-username').attr("placeholder", "Please enter a username")
    } 

    if (bootcamp_type == "") {
        $('#signup-bootcamp').attr("style", "border-color: red;")
        $('#signup-bootcamp').attr("placeholder", "Please enter a bootcamp that you have been to")
    } 

    if (email == "") {
        $('#signup-email').attr("style", "border-color: red;")
        $('#signup-email').attr("placeholder", "Please enter a valid email")
    } 
    if (password.length < 8) {
        $('#signup-password').attr("style", "border-color: red;")
        $('#signup-password').attr("placeholder", "Please enter a valid password with a minimum of eight characters")
    } 
   
    if(first_name && last_name && bootcamp_type && user_name && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({first_name, last_name, bootcamp_type, user_name, email, password  }),
            headers: {'Content-Type': 'application/json'},
        });

        const signData = await response.json();
        if(response.status === 401 || response.status === 404) { 
            errorMessage.text(signData.message)
           return $('error-div').append(errorMessage)
            }
        if(response.ok){
            //replaces current page with home page
            document.location.replace('/');
        } else {
            errorMessage.text('Email or username already exist in our database. Try another email and username.')
            return $('error-div').append(errorMessage)
        }
    }
};
$('#signup-form').on('submit', signUpHandler)

$('#loginBtn').on('click', () => {
    document.location.replace('/login')
});

