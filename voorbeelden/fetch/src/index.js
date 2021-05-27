fetch("http://localhost:3000/cursisten")
    .then(resultaat => resultaat.json())
    .then(cursisten => {
        cursisten.forEach(cursist => voegToe(cursist.name));
    })

function voegToe(naam) {
    const ulElement = document.querySelector('#cursisten-lijst');

    const liElement = document.createElement('li');
    liElement.textContent = naam;

    ulElement.appendChild(liElement);
}