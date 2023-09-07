# <ins>DWARF QUEST<ins/>
Coded and illistrated by: Steven Morrison

![Alt text](<assets/images/Screenshot 2023-09-07 at 12.01.42 PM.png>)


Dive into the boots of a weary old dwarf who yearns for nothing more then to come home, kick off his boots, put on some tea, and pet his beloved cat, Méowyn. I created this game out of my passion for storytelling, world-building, and puzzle solving. My passion for these games like this comes from fond memories of hikeing in the woods with my cousins and makeing up stories as we walked. In highschool I was introdueced to D&D 4th edition by my friends and was hooked. During the pandemic I passed the time learning every rule to the more recent 5th edition of D&D and finally I got the change to play it with my friends. In this game, you'll simply click on the desired option using the buttons below the text to explore the story of a dwarf I have put together for you. Read carefully; sometimes, if you're stuck, the answer may be concealed within the text or the accompanying image. Thank you for playing and please enjoy Dwarf Quest.

Try it yourself here:  
**https://dwarf-quest.surge.sh/**
##

## Highlights:  

```js
function playSwordAudio() {
  let randNum = Math.floor(Math.random() * 2)
  let sounds = [playSwordAudioII, playSwordAudioIII, playSwordAudioIV]
  sounds[randNum]()
}
```
One cool function I wrote is this random sound function, which I'm particularly proud of. I hadn't completely anticipated `sounds[randNum]()` to operate as a function, but it surely did! Implementing this function significantly diversified the game sounds, breaking the monotony of the singular sword sound that previously played with each button press.

![Alt text](<assets/images/Screenshot 2023-09-07 at 12.00.55 PM.png>)

I am also really proud of a puzzle I designed. In the game you will need to get through a gate that is locked by a padlock. Now, you can attempt to crack the code. There are 4 dials with 1 through 4 on them which is 256 combinations which would take you aproximattly fifty minutes to try each one. Alternitavly, with a little extra exploration you can find a slip of paper with four digits on it. 

##
## Attributions:   
  - Sword Clash 2, 3, and 4: 32Cheeseman32  
    - https://freesound.org/people/32cheeseman32/sounds/180819/  
    - https://freesound.org/people/32cheeseman32/sounds/180818/  
    - https://freesound.org/people/32cheeseman32/sounds/180817/  
##
## Technologies Used:  
  - JavaScript  
  - HTML  
  - CSS  
  - Procreate  
##
## Next Steps:  
- Transition the game into a more dynamic state change system. At present, it relies on an array index to traverse various state objects. Altering the sequence of this array necessitates revisiting each state and adjusting the values in their `nextState` properties.  
- Incorporate an inventory system. Here, different `nextState` options might be accessible depending on specific item boolean conditions.  
- Embed a health tracking mechanism that monitors the player's HP throughout the gameplay. Reaching zero will transition the player to the game's conclusion.  
- With the integration of inventory and health, I aspire to introduce a turn-based battle mechanism akin to popular games like Final Fantasy or Pokémon.  
- Lastly, I wish to refine the game's sound system. While I take pride in my playSwordAudio function, I'm eager to diversify the sounds based on the game state or player choices and even some music or atmospheric effects throughout the game.