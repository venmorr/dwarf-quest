console.log('insanity check')
/*-------------Imports---------------*/
import rooms from './rooms.js'

/*------------ Constants ------------*/ 


/*------------ Variables ------------*/


/*---- Cached Element References ----*/


/*--------- Event Listeners ---------*/


/*------------ Functions ------------*/
init()

function init() {
  console.log('Initialize')
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