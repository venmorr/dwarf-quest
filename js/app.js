console.log('insanity check')
/*-------------Imports---------------*/
import states from '../data/state.js'
import {playSwordAudio} from './audio.js'

/*------------ Variables ------------*/
let currentState, score

/*---- Cached Element References ----*/
const scene = document.querySelector('img')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const choice1 = document.getElementById('b1')
const choice2 = document.getElementById('b2')
const choice3 = document.getElementById('b3')
const choice4 = document.getElementById('b4')
const scoreEl = document.getElementById('score')
const restart = document.getElementById('restart')

/*--------- Event Listeners ---------*/
choice1.addEventListener('click', clickHandler)
choice2.addEventListener('click', clickHandler)
choice3.addEventListener('click', clickHandler)
choice4.addEventListener('click', clickHandler)
restart.addEventListener('click', restartGame)

/*------------ Functions ------------*/
init()

function init() {
   currentState = states[1]
   score = 0
   scoreEl.innerText = score
   render()
}

function clickHandler(event) {
   score ++
   playSwordAudio()
   changeState(event)
   checkConfetti()
   render()
}

function changeState(event) {
   let id = event.target.id
   if (id === 'b1') {
      let nextState = currentState.nextState[0]
      currentState = states[nextState]
   } else if (id === 'b2') {
      let nextState = currentState.nextState[1]
      currentState = states[nextState]
   } else if (id === 'b3') {
      let nextState = currentState.nextState[2]
      currentState = states[nextState]
   } else if (id === 'b4') {
      let nextState = currentState.nextState[3]
      currentState = states[nextState]
   } 
}

function render() {
   setImage()
   setText()
   buttonMaker()
   scoreEl.innerText = score
}

function setImage() {
   scene.setAttribute('src', currentState.image)
}

function setText() {
   text.innerHTML = currentState.text 
}

function buttonMaker(){
   buttons.forEach((button, idx) => {
      if (currentState.choices[idx] === null) {
         button.classList.add('hidden')
      } else {
         button.classList.remove('hidden')
         button.innerHTML = currentState.choices[idx]
      }
   })
}

function checkConfetti() {
   if (currentState.confetti === true)  { 
      console.log('FIRING THE CONFETTI CANNON')
      confetti.start(3000)
   }
}

function restartGame() {
   init()
} 