
document.getElementById('submitId').addEventListener('click', function() {

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let message = document.getElementById('message').value

    if (name===''||email===''||mobile===''||message===''){
        alert('Please fill out all datas');
    } else {
        alert('Success! Data submitted.');
    }
});
