
try {
    const postHandler = async (event) => {
        event.preventDefault();    
        const contents = $('#post-body').val().trim();
        if(contents) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/messages/${id}`, {
            method: 'POST',
            body: JSON.stringify({ contents }),
            headers: { 'Content-Type': 'application/json '},
        });
        await response.json();

        if (response.ok) {
            document.location.replace(`/api/messages/${id}`);     
        } else {
            alert('You Are Not Signed In');
        }
    }
}
$('#add-post').on('click', postHandler);
} catch (error) {
    console.log(error)
}
