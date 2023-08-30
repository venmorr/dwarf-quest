let room1, room2 //and so on

const rooms = [
  {roomName: 'templateRoom', doors: [room1, room2], enemies: [enemy1, enemy2]  }
]










/*-------Export to app.js-------------*/
function roomsConnected() {
  console.log('Rooms connected')
}

export {
  roomsConnected,
}

/*------------Psudocode--------------
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