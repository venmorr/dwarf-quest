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
   console.log(currentState.nextState)
   changeState(event) //here
   playSound()
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


/*------------Psudocode--------------
Pseudocode for the overall gameplay
  
1. Load a title screen and subsequent screens(rooms) as the player navigates through the game: 
    -Title screen
    -Character screen
    -Dungeon entrance and booth
    -Various dungeon rooms
    -Boss room
    -Death screens 

2. Allow players to navigate through choices by clicking parts of the screen. Player Choices include:
    -Starting the game
    -Doors into other rooms
    -Dialogue options
    -Enemies to aim attacks at
       Light and heavy attacks [feature]
    -Items to pick up

3. Keep track of information in various linked arrays/objects/arrays of objects including but not limited to:
    -Player: 
       Stats
       Inventory
          Weapons
          Items
          Gold
          Peanut Butter jars (hp restore)
          Playing cards (mini game of 52 card pickup) [feature]
    -Enemy: 
       Stats
       Lute
    -Rooms: 
       Contents
       Enemies
       Loot
       Doors to other rooms
          Forward doors
          Backward doors
          Secret doors
    -Items:
       Gear
       Loot
*/