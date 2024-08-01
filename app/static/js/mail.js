function submitForm(event) {
    event.preventDefault();
    var form = document.getElementById('form');
    var formData = new FormData(form);

    fetch('/sendMessage', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Failed to send message.';
    });
}