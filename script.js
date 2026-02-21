let data = [
  
]

// Seleziona tutti gli elementi che hanno la classe .activity-tracker-option
// (cioè i tre bottoni: Daily, Weekly, Monthly)
const buttons = document.querySelectorAll('.activity-tracker-option')


// Funzione che gestisce l'attivazione grafica del bottone cliccato
const activateClickedButton = (button) => {

  // 1) Rimuove la classe "active" da tutti i bottoni
  //    - 'buttons' è la NodeList ottenuta con querySelectorAll
  //    - questo garantisce che solo un bottone alla volta possa essere attivo
  buttons.forEach(b => b.classList.remove('active'))

  // 2) Aggiunge la classe "active" al bottone che è stato cliccato
  //    - questo aggiorna lo stile visivo (colore, evidenziazione, ecc.)
  button.classList.add('active')
}


// Per ogni bottone trovato...
buttons.forEach(button => {

  // ...aggiunge un event listener che ascolta il click
  button.addEventListener('click', () => { 

    // 1) Attiva graficamente il bottone cliccato
    // (di solito aggiunge una classe "active" e la rimuove dagli altri)
    activateClickedButton(button)

    // 2) Recupera il valore dell’attributo data-option del bottone cliccato
    // Esempio: data-option="daily" → clickedOption = "daily"
    const clickedOption = button.dataset.option

    // 3) Aggiorna tutte le card in base all’opzione scelta
    // (daily, weekly, monthly)
    renderCards(clickedOption)
  })
})



