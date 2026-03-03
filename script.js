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


// const clearActivities = () => {
  // Clear all activities from html
  // const activities = document.querySelectorAll('.activity-tracker-activity')
  // activities.forEach(a => a.remove())
// }


const renderCards = (clickedOption) => {
  clearActivities()
  const activityTracker = document.querySelector('section.activity-tracker')

  const calcTimeframe = (option) => {
    if (option == 'daily') {
      return 'Yesterday'
    } else if (option == 'weekly') {
      return 'Last Week'
    } else if (option == 'monthly') {
      return 'Last Month'
    }
  }

  data.forEach(activity => {
    const name = activity.title
    const activityClass = name.toLowerCase().replace('','_')
    const timeframeData = activity.timeframes[clickedOption]
    const previousTimeframe = calcTimeframe(clickedOption)
    // console.log(name)
    // console.log(activityClass)
    // console.log(timeframeData)
    // console.log(previousTimeframe)
    const section = document.createElement('section')
    section.classList.add('activity-tracker-activity', activityClass)
    const stringToInject = `
      <div class="activity-bg">
        <img src="./images/icon-${activityClass}.svg" alt="">
      </div>
      <div class="activity-info">
        <header class="activity-header">
          <h2 class="activity-name">
            ${name}
          </h2>
          <button class="activity-options" aria-label="More options">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#BBC0FF" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="12" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="19" cy="12" r="2"/>
            </svg>
          </button>
        </header>
        <div class="activity-timeframes">
          <h3 class="activity-current-timeframes">
            ${timeframeData.current}hrs
          </h3>
          <div class="activity-previous-timeframes">
            <p class="time-window">${previousTimeframe}</p>
            <p> - </p>
            <p class="time">${timeframeData.previous}hrs</p>
          </div>
        </div>
      </div>
    `
    section.innerHTML = stringToInject
    // console.log(section)
    activityTracker.append(section)
  });
};


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

buttons[1].click()
