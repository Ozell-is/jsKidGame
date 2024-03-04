
let submitWord = []; // Définir submitWord comme un tableau vide

function creatList() {
    // Récupérer le mot soumis
    let addList = document.getElementById('resultMotus').value;

    // Créer un nouvel élément de liste
    let newListItem = document.createElement('li');
    newListItem.textContent = addList;

    // Ajouter le nouvel élément de liste à la liste existante
    let listContainer = document.getElementById('listMotus');
    listContainer.appendChild(newListItem);

    // Ajouter le mot soumis à submitWord
    submitWord.push(addList);
}
