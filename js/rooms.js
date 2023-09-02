let startScreen, room1, room2, enemy1, enemy2, rLoot1, rLoot2, dungeonEntrance, dunRoom1, merchantBooth, dunRoom2a, dunRoom2b, dunRoom3a, dunRoom3b, dunRoom3c, dunRoom4a, dunRoom4b, dunRoom5, secretRoom1, secretRoom2, bossRoom, goldRoom //rooms/screens

let sword, sheild, peanutButterJars, gold, swordRing, sheildRing, lichBlade //items

let skeleton, bigSkeleton // enemies

// These are all the rooms (or screens) that can be viewed throughout the game
const rooms = [
  
/*------------------------------Outside Dungeon---------------------------*/
  {roomName: startScreen, //
  doors: [dungeonEntrance], 
  enemies: [], 
  roomLoot: [],
  }, 
  
  {roomName: 'Dungeon Entrance', //
  doors: [dunRoom1, merchantBooth], 
  enemies: [], 
  roomLoot: [],
  }, 
  
  {roomName: 'Merchant Booth', //
  doors: [dungeonEntrance], 
  enemies: [], 
  roomLoot: [sword, sheild, peanutButterJars],
  }, 
  
/*-------------------------------Inside Dungeon---------------------------*/
  {roomName: 'First Dungeon Room', //
  doors: [dunRoom2a, dunRoom2b, dungeonEntrance],  
  enemies: [], 
  roomLoot: [],
  }, 

  {roomName: 'Dungeon Room 2a', //
  doors: [dunRoom3a, dunRoom3b, secretRoom1, dunRoom1], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 2b', //
  doors: [dunRoom3b, dunRoom3c, dunRoom1], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 3a', //
  doors: [dunRoom3b, dunRoom2a], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 3b', //
  doors: [dunRoom3a, dunRoom4a, dunRoom2a, dunRoom2b], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 3c', //
  doors: [dunRoom4b, dunRoom2b, secretRoom2], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 4a', //
  doors: [dunRoom5, dunRoom4b, dunRoom3b], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 4b', //
  doors: [dunRoom4a, dunRoom3c], 
  enemies: [skeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 
  
  {roomName: 'Dungeon Room 5', // 
  doors: [dunRoom4a, secretRoom2, bossRoom], 
  enemies: [bigSkeleton], 
  roomLoot: [rLoot1, rLoot2],
  }, 

  /*----------------------------Secret Rooms-----------------------------*/
  {roomName: 'sectretRoom1', //
  doors: [dunRoom2a], 
  enemies: [], 
  roomLoot: [gold, swordRing],
  },
  
  {roomName: 'sectretRoom2', //
  doors: [dunRoom3c, dunRoom5], 
  enemies: [], 
  roomLoot: [gold, sheildRing],
  },

  /*----------------------------Boss Room--------------------------------*/
  {roomName: 'Boss Room', //
  doors: [goldRoom], 
  enemies: [`Trec'nux the Lich King`, `Cradle of Undeath`], 
  roomLoot: [gold, lichBlade],
  },
  
  /*----------------------------Room Template----------------------------*/
  {roomName: 'templateRoom', 
  doors: [room1, room2], 
  enemies: [enemy1, enemy2], 
  roomLoot: [rLoot1, rLoot2],
  },
  
]

/*----------Imports--------------*/
import { itemsConnected } from "./items.js"
// itemsConnected()

/*-------Export-------------*/
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