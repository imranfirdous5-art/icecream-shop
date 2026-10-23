function back(e) {
    e.preventDefault();
    window.location.href = 'index.html';
}

function shop(e){
    e.preventDefault();
    window.location.href = 'shop.html'
}

function messagesubmit(e){
    e.preventDefault();

     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;

     alert('message sent successfully');

}
