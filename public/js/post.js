

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

try {
    const postHandler = async (event) => {
        event.preventDefault();
        const title = $('#post-title').val().trim();
        const topic = $('#myList').children("option:selected").val().trim();
        const contents = $('#post-body').val().trim();
        if (title && topic && contents) {
            const response = await fetch('/api/messages', {
                method: 'POST',
                body: JSON.stringify({ title, topic, contents }),
                headers: { 'Content-Type': 'application/json ' },
            });
            const data = await response.json();
            // if(response.status === 400 || response.status === 401) { 
            //     display.text(`${data.message}`)
            //  return  $('#display-div').append(display);
            // }


            if (response.ok) {
                // replace login page with home page
                alert('Post Added')
                document.location.replace('/api/messages');
            } else {
                alert('You Are Not Logged In!');
            }
        }
    }
    $('#add-post').on('click', postHandler);
} catch (error) {
    console.log(error)
}
