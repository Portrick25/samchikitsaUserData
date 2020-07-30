

//docatdoor.html
const idList = document.querySelector('#id-list');

function docidlist(doc){
    let tr = document.createElement('tr');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let phno = document.createElement('td');
    let address = document.createElement('td');
    let location = document.createElement('td');
    let date = document.createElement('td');
    let time = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    phno.textContent = doc.data().phno; 
    address.textContent = doc.data().address;
    location.textContent = doc.data().location;
    date.textContent = doc.data().date;
    time.textContent = doc.data().time;
   

    tr.appendChild(name);
    tr.appendChild(email);
    tr.appendChild(phno);
    tr.appendChild(address);
    tr.appendChild(location);
    tr.appendChild(date);
    tr.appendChild(time);


    idList.appendChild(tr);
}

db.collection('offlineappointment').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        docidlist(doc);
    })
})

