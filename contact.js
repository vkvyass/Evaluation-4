var contactdet = JSON.parse(localStorage.getItem('contactdetail')) || [];

var FavouriteList = JSON.parse(localStorage.getItem('FavouriteList')) || [];

function displayData(contactdetail) {
    document.querySelector('tbody').innerHTML = '';
    contactdetail.forEach(cont => {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText = cont.name;

        var td2 = document.createElement('td');
        td2.innerText = cont.mobile;

        var td3 = document.createElement('td');
        td3.innerText = cont.role;
        var td4 = document.createElement('td');
        td4.innerText = 'Add to fav';
        td4.style.color = 'red';
        td4.style.cursor = 'pointer';

        td4.addEventListener('click', function() {
            FavouriteList.push(cont);
            localStorage.setItem('FavouriteList', JSON.stringify(FavouriteList));
            alert(`Favorite added succesfully ${cont.name}`);
        });
        row.append(td1, td2, td3, td4);
        document.querySelector('#tableBody').append(row);
    });
}

window.addEventListener('load', function() {
    displayData(contactdet);
});