console.log('insanity check')

/*------------ Constants ------------*/


/*------------ Variables ------------*/
let currentState = {
  a_CurrentRoom: 'startScreen',
  b_Health: 10,
  c_Attack: 1,
  d_Defence: 2,
  e_Gold: 100,
  f_Inventory: [
    {item: 'L.1 Sword', possessing: false, value: 90, attackBonus: 5, 
      description: ' '},
    {item: 'L.2 Sword', possessing: false, value: 400, attackBonus: 6, 
      description: ' '},
    {item: 'L.3 Sword', possessing: false, value: 900, attackBonue: 7, 
      description: ' '},
    {item: 'L.4 Sword', possessing: false, value: 1600, attackBonue: 10, 
      description: ' '},
    {item: 'L.1 Sheild', possessing: false, value: 70, defenceBonus: 2, 
      description: ' '},
    {item: 'L.2 Sheild', possessing: false, value: 200, defenceBonus: 3, 
      description: ' '},
    {item: 'L.3 Sheild', possessing: false, value: 500, defenceBonus: 4, 
      description: ' '},
    {item: 'L.4 Sheild', possessing: false, value: 1200, defenceBonus: 6, 
      description: ' '},
    {item: 'Small Peanutbutter Jar', possessing: false, value: 10, scoops: 1, 
      description: ' '},
    {item: 'Medium Peanutbutter Jar', possessing: false, value: 40, scoops: 5, 
      description: ' '},
    {item: 'large Peanutbutter Jar', possessing: false, value: 70, scoops: 10, 
      description: ' '},
    {item: 'Sword Ring', possessing: false, value: 100, attackBonus: 3, 
      description: ' '},
    {item: 'Sheild Ring', possessing: false, value: 100, defenceBonus: 3, 
      description: ' '},
    {item: 'Health Ring', possessing: false, value: 100, healthBonus: 3, 
      description: ' '},
    {item: 'THE GREAT AND POWERFUL WAND OF PRESENTATION ASSISTANCE', 
    possessing: false, attackBonue: 9999, defenceBonus: 9999, 
      description: ' '}
  ],
  g_Enemies: [
    {id: 'skeleton 1', defeated: false},
    {id: 'skeleton 2', defeated: false},
    {id: 'skeleton 3', defeated: false},
    {id: 'skeleton 4', defeated: false},
    {id: 'skeleton 5', defeated: false},
    {id: 'skeleton 6', defeated: false},
    {id: 'skeleton 7', defeated: false},
    {id: 'skeleton 8', defeated: false},
  ],
} 
console.log('Current state: ', currentState)

/*---- Cached Element References ----*/


/*--------- Event Listeners ---------*/


/*------------ Functions ------------*/
function openDoor() {
  if (door === dungeonEntrance){
    let a_CurrentRoom = dungeonEntrance
      } else if (door = merchantBooth) {
    let a_CurrentRoom = merchantBooth
      } else if (door = dunRoom1) {
    let a_CurrentRoom = dunRoom1
      } else if (door = dunRoom2a) {
    let a_CurrentRoom = dunRoom2a
      } else if (door = dunRoom2b) {
    let a_CurrentRoom = dunRoom2b
      } else if (door = dunRoom3a) {
    let a_CurrentRoom = dunRoom3a
      } else if (door = dunRoom3b) {
    let a_CurrentRoom = dunRoom3b
      } else if (door = dunRoom3c) {
    let a_CurrentRoom = dunRoom3c
      } else if (door = dunRoom4a) {
    let a_CurrentRoom = dunRoom4a
      } else if (door = dunRoom4b) {
    let a_CurrentRoom = dunRoom4b
      } else if (door = dunRoom5) {
    let a_CurrentRoom = dunRoom5
      } else if (door = secretRoom1) {
    let a_CurrentRoom = secretRoom1
      } else if (door = secretRoom2) {
    let a_CurrentRoom = secretRoom2
      } else if (door = bossRoom) {
    let a_CurrentRoom = bossRoom
      } else if (door = goldRoom) {
    let a_CurrentRoom = goldRoom
}} // I know the indentation on this is probably not standard but the = not being in line was very noisy and bothersom. 



/*-------------Imports---------------*/


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


/*---------------------------Code Grave Yard-------------------------
const changeBackdrop = document.querySelector('#changeBackdrop')
console.log(changeBackdrop)
const backdrop = document.querySelector('#start-screen')
console.log(backdrop)

changeBackdrop.addEventListener('click', backdropChanger)

function backdropChanger() {
  console.log('click')
  backdrop.style.backgroundImage = 'url(assets/dwarfy-fav-.png)'
}

import { roomsConnected } from "./rooms.js"
roomsConnected()


import { playerConnected } from "./player.js"
playerConnected()

import { enemiesConnected } from "./enemies.js"
enemiesConnected()

import { itemsConnected } from "./items.js"
itemsConnected()
*/