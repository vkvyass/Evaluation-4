document.querySelector('#formBox').addEventListener('submit', myFunction);

var contactdetail = JSON.parse(localStorage.getItem('contactdetail')) || [];

function myFunction() {
    event.preventDefault();
    var conObj = {
        name: document.querySelector("#name").value,
        mobile: document.querySelector("#mobile").value,
        role: document.querySelector("#role").value,
        
    };
    contactdetail.push(conObj);
    localStorage.setItem('contactdetail', JSON.stringify(contactdetail));
    alert('Contact added successfully');
}