function back(e) {
    e.preventDefault();
    window.location.href = 'index.html';
}

function shop(e){
    e.preventDefault();
    window.location.href = 'product.html'
}

function addtocart(e){
    e.preventDefault();
    window.location.href = 'addtocart.html'
}

function cartback(e){
    e.preventDefault();
    window.location.href = 'product.html'
}

// function messagesubmit(e){
//     e.preventDefault();

//      const name = document.getElementById('name').value;
//      const email = document.getElementById('email').value;
//      const message = document.getElementById('message').value;

//      alert('message sent successfully');
// }

function signup(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
}


function login(e){
    e.preventDefault();

    const loginemail = document.getElementById('loginemail').value;
    const loginpassword = document.getElementById('loginpassword').value;


}

