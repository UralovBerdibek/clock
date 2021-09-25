const clock = {
  seconds: document.querySelector('.s'),
  minuts: document.querySelector('.m'),
  hours: document.querySelector('.h'),
  soat: document.querySelector('.hours'),
  minutlar: document.querySelector('.minutes')
  // func:function () {
  //   console.log(5555); -> Method
  // }
}


let secDeg = 360 / 60,
  minDeg = 360 / 3600,
  hourDeg = 12 / (360 * 3600)

const date = new Date()
var h = date.getHours() * 6,
  m = date.getMinutes() * 6,
  s = date.getSeconds() * 6

clock.seconds.style = `transform: rotate(${s}deg);`
clock.minuts.style = `transform: rotate(${m}deg);`
clock.hours.style = `transform: rotate(${h}deg);`

function start() {
  // destruktizatsiya
  h += hourDeg
  m += minDeg
  s += secDeg

  const {
    seconds,
    minuts,
    hours,
    soat,
    minutlar
  } = clock


  setTimeout(() => {
    start()
  }, 1000);

  seconds.style = `transform:rotate(${s}deg); transition: 1s linear`
  minuts.style = `transform:rotate(${m}deg); transition: 1s linear`
  hours.style = `transform:rotate(${h}deg); transition: 1s linear`

  soat.innerHTML = `${date.getHours()}` > 9 ? `${date.getHours()}` : `0${date.getHours()}`
  minutlar.innerHTML = `${date.getMinutes()}` > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`
}

start()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')


tabsItem.forEach((el, i) => {
  el.addEventListener('click', function (e) {
    tabsItem.forEach((ol, j) => {
      ol.classList.remove('active')
      tabsContentItem[j].classList.remove('active')
    })
    el.classList.add('active')
    tabsContentItem[i].classList.add('active')
  })

})

const timerHours = document.querySelector('.stopwatch__hours'),
  timerMinutes = document.querySelector('.stopwatch__minutes'),
  timerSeconds = document.querySelector('.stopwatch__seconds'),
  timerControl = document.querySelector('.stopwatch__btn'),
  tabsLinkSpan = document.querySelector('.tabsLink__span')
let stopTimer;

timerControl.addEventListener('click', (event) => {
  if (event.target.innerHTML === "start") {
    startTimer()
    event.target.innerHTML = 'Stop'
    tabsLinkSpan.style = 'display: block'
  }else if(event.target.innerHTML === 'Stop'){
    clearTimeout(stopTimer)
    event.target.innerHTML = 'Clear'
    tabsLinkSpan.style = 'display: block; background: red;'
  }else if( event.target.innerHTML === 'Clear'){
    event.target.innerHTML = 'start'
    timerSeconds.innerHTML = 0
    timerMinutes.innerHTML = 0
    timerHours.innerHTML = 0
    tabsLinkSpan.style = 'display: none'
  }
  
})

function startTimer() {

  if (timerSeconds.innerHTML < 59) {
    timerSeconds.innerHTML++
  } else {
    timerSeconds.innerHTML = 0
    if (timerMinutes.innerHTML < 59) {
      timerMinutes.innerHTML++
    } else {
      timerMinutes.innerHTML = 0
      if (timerHours.innerHTML < 23) {
        timerHours.innerHTML++
      } else {
        timerHours.innerHTML = 0
      }
    }
  }

  stopTimer = setTimeout(() => {
    startTimer()
  }, 1000);
}