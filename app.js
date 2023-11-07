
// Inforamtions du champ inupt*
let nom  = document.getElementById('name')
let prenom = document.getElementById('firstName')
let mail = document.getElementById('email')

// Adoption des child create a leurs parents
let parentFailed = document.querySelector('aside')
// Creation & response sur des erreurs du champ 
let errorFailed = document.createElement('p')


parentFailed.appendChild(errorFailed)
let responseName = nom.value


const form = document.querySelector('form')
form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Bien envoyer')
    // nom
    // Traitement de l'input name 
    if(responseName == "") {
      // Acquisition du contenus a tous les Champs
     errorFailed.innerText = ` votre nom est vide, veuilles renseigner votre nom `
     nom.style.borderColor = 'red'
        
    }else {
        nom.style.borderColor = 'green' 
    }
})

