let data = []

const buttons = document.querySelectorAll('.activity-tracker-option')

const activateClickedButton = (button) => {
  buttons.forEach(b => b.classList.remove('active'))
  button.classList.add('active')
}

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
    const activityClass = name.toLowerCase().replace('', '_')
    const timeframeData = activity.timeframes[clickedOption]
    const previousTimeframe = calcTimeframe(clickedOption)

    const section = document.createElement('section')
    section.classList.add('activity-tracker-activity', activityClass)

    const stringToInject = `
      <div class="activity-bg">
        <img src="./images/icon-${activityClass}.svg" alt="">
      </div>
      <div class="activity-info">
        <header class="activity-header">
          <h2 class="activity-name">${name}</h2>
          <button class="activity-options" aria-label="More options">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#BBC0FF" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="12" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="19" cy="12" r="2"/>
            </svg>
          </button>
        </header>
        <div class="activity-timeframes">
          <h3 class="activity-current-timeframes">${timeframeData.current}hrs</h3>
          <div class="activity-previous-timeframes">
            <p class="time-window">${previousTimeframe}</p>
            <p> - </p>
            <p class="time">${timeframeData.previous}hrs</p>
          </div>
        </div>
      </div>
    `
    section.innerHTML = stringToInject
    activityTracker.append(section)
  })
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    activateClickedButton(button)
    const clickedOption = button.dataset.option
    renderCards(clickedOption)
  })
})

buttons[1].click()
