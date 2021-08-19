let schedule = {
  'plan8': '',
  'plan9': '',
  'plan10': '',
  'plan11': '',
  'plan12': '',
  'plan13': '',
  'plan14': '',
  'plan15': '',
  'plan16': '',
  'plan17': ''
}

let workDay = JSON.parse(localStorage.getItem('workDay')) || schedule

let currentDate = moment().format('dddd, MMMM Do')
console.log(currentDate)

document.getElementById('currentDay').textContent = currentDate

let = presentHour = moment().hour()
console.log(presentHour)

const stringInteger = (timeString) => {
  switch (timeString) {
    case '8 AM': return 8
    case '9 AM': return 9
    case '10 AM': return 10
    case '11 AM': return 11
    case '12 PM': return 12
    case '1 PM': return 13
    case '2 PM': return 14
    case '3 PM': return 15
    case '4 PM': return 16
    case '5 PM': return 17
  }
}

console.log(stringInteger('3 PM'))

let i = 8

for (let i = 8; i <= 17; i++) {
  let timeCounter = 'time' + i
  let timeString = document.getElementById(timeCounter).textContent
  let timeInteger = stringInteger(timeString)
  console.log(timeCounter)
  console.log(timeString)
  console.log(timeInteger)
  if (presentHour == timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('present')
  } else if (presentHour < timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('future')
  } else if (presentHour > timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('past')
  }
  document.getElementById(`plan${i}`).textContent = workDay[`plan${i}`]
}

// handle populating textareas
// let planCounter = `plan${i}`




// handle saving
document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {
    let note = event.target.previousElementSibling.children[0].value
    let plan = event.target.previousElementSibling.children[0].id
    workDay[plan] = note
    console.log(workDay)
    console.log(`plan: ${plan}, note: ${note}`)
    localStorage.setItem('workDay', JSON.stringify(workDay))
  }
})

