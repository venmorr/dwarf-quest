console.log('insanity check')
/*-------------Imports---------------*/
import states from '../data/state.js'
// import {playSwordAudioII} from './audio.js'
// import {playSwordAudioIII} from './audio.js'
import {playSwordAudioIV} from './audio.js'


/*------------ Constants ------------*/ 


/*------------ Variables ------------*/
let currentState

/*---- Cached Element References ----*/
const scene = document.querySelector('img')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const choice1 = document.getElementById('b1')
const choice2 = document.getElementById('b2')
const choice3 = document.getElementById('b3')
const choice4 = document.getElementById('b4')

/*--------- Event Listeners ---------*/
choice1.addEventListener('click', clickHandler)
choice2.addEventListener('click', clickHandler)
choice3.addEventListener('click', clickHandler)
choice4.addEventListener('click', clickHandler)

/*------------ Functions ------------*/
init()

function init() {
   currentState = states[1]
   render()
}

function clickHandler(event) {
   playSound()
   changeState(event) //here
   checkConfetti()
   render() // here
}

function changeState(event) {
   let id = event.target.id
   if (id === 'b1') {
      let nextState = currentState.nextState[0]  // here 
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
   } else {
      console.log('oopsies')
   }
}

function render() {
   setImage() // here
   setText()
   buttonMaker()
}

function setImage() {
   scene.setAttribute('src', currentState.image)  // here
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

function playSound() {
   // playSwordAudioII() 
   // playSwordAudioIII() 
   playSwordAudioIV()

}

function checkConfetti() {
   if (currentState === 38) {
      console.log('FIRING THE CONFETTI CANNON')
      return confetti.start(700)
   }
}