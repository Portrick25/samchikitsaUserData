

//skype.html
const idList = document.querySelector('#id-list');

function skypeidlist(doc){
    let tr = document.createElement('tr');
    let name = document.createElement('td');
    let userid = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    userid.textContent = doc.data().userid;


    tr.appendChild(name);
    tr.appendChild(userid);


    idList.appendChild(tr);
}

db.collection('skypeid').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        skypeidlist(doc);
    })
})


const idoffList = document.querySelector('#idoff-list');

function skypeidofflist(doc){
    let tr = document.createElement('tr');
    let time = document.createElement('td');
    let name = document.createElement('td');
    let userid = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    time.textContent = doc.data().time;
    name.textContent = doc.data().name;
    userid.textContent = doc.data().userid;

    tr.appendChild(time);
    tr.appendChild(name);
    tr.appendChild(userid);


    idoffList.appendChild(tr);
}

db.collection('skypeidoffline').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        skypeidofflist(doc);
    })
})