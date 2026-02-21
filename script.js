let data = [
  
]

const buttons = document.querySelectorAll('.activity-tracker-option')

buttons.forEach(button => {
  button.addEventListener('click', () => { 
    activateClickedButton(button)
    const clickedOption = button.dataset.option
  })
})
