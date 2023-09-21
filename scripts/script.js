let stopInterval
const timerDisplay = document.querySelector('div#timer')
let second = 1
let playing

function iniciar() {
    if (playing) {
        disableBtnClick('iniciar')
    } else {
        const timer = new Date('1995-12-17T00:00:00') // data aleatória para obter apenas o horário zerado
        stopInterval = setInterval(() => {
            timer.setSeconds(second)
            timerDisplay.innerHTML = timer.toLocaleTimeString()
            second++            
        }, 1000)
        timerDisplay.style.color = 'black'
        playing = true
    }
}

function pausar() {
    if (playing) {
        clearInterval(stopInterval)
        changeTimerColor()
        playing = false
    } else if (timerDisplay.textContent === '00:00:00') {
        disableBtnClick('pausar')
    } else {
        iniciar()
        playing = true        
    }
}

function zerar() {
    clearInterval(stopInterval)
    timerDisplay.innerHTML = '00:00:00'
    timerDisplay.style.color = 'black'
}

function changeTimerColor() {
    if (window.getComputedStyle(timerDisplay).getPropertyValue('color') === 'rgb(0, 0, 0)') { // essa cor é preta
        timerDisplay.style.color = 'red'
    } else {
        timerDisplay.style.color = 'black'
    }
}

function disableBtnClick(btnName) {
    document.getElementById(btnName).addEventListener('click', e => e.preventDefault())
}

