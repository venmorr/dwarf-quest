# <ins>DWARF QUEST<ins/>
Coded and illistrated by: Steven Morrison

![Alt text](<assets/images/Screenshot 2023-09-08 at 12.33.37 AM.png>)


Delve into the boots of a weary old dwarf who yearns for nothing more then to come home, kick off his boots, put on some tea, and pet his beloved cat, Méowyn. I was inspired to create this game due to my passion for storytelling, world-building, and puzzle solving. My passion for these games like this comes from fond memories of hikeing in the woods with my cousins and concocting stories as we ambled. In highschool I was introdueced to D&D 4th edition by my friends and was hooked. During the pandemic I passed the time learning every rule to the more recent 5th edition of D&D. Finally, I got the change to play it with my friends this past year in a campain I wrote! In this game, you'll simply click on the desired option using the buttons below the text to explore the story of a dwarf I have put together for you. Read carefully; sometimes, if you're stuck, the answer may be concealed within the text or the accompanying image. Thank you for playing and please enjoy Dwarf Quest.  

Last-minute update! I've introduced a scoring mechanic. Aim for the lowest score possible! The score tallies the total number of times the game state changes. It only resets when you choose to restart or after you achieve the good ending. Happy questing!

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

![Alt text](<assets/images/Screenshot 2023-09-08 at 12.34.26 AM.png>)

I am also really proud of a puzzle I designed. In the game you will need to get through a gate that is locked by a padlock. Now, you can attempt to crack the code. There are 4 dials with 1 through 4 on them which is 256 combinations which would take you aproximattly fifty minutes to try each one. Alternitavly, with a little extra exploration you can find a slip of paper with four digits on it. 

##
## Attributions:   
  - Sword Clash 2, 3, and 4: 32Cheeseman32  
    - [sword clash 02](https://freesound.org/people/32cheeseman32/sounds/180819/)  
    - [sword clash 02](https://freesound.org/people/32cheeseman32/sounds/180818/ ) 
    - [sword clash 02](https://freesound.org/people/32cheeseman32/sounds/180817/  )
##
## Technologies Used:  
  - JavaScript  
  - HTML  
  - CSS  
  - Procreate  
  - ChatGPT (only to assist in the story writing, not the code)
##
## Next Steps:  
- Transition the game to a more dynamic state change system. Currently, it uses an array index to traverse various state objects. Changing the order of this array requires us to revisit each state and modify the values in their nextState properties.

- Implement an inventory system. Depending on specific item boolean conditions, different nextState options may become accessible.

- Introduce a health tracking mechanism that keeps track of the player's HP throughout the gameplay. If it reaches zero, the game will conclude.

- By integrating the inventory and health systems, I aim to introduce a turn-based battle mechanism, similar to iconic games like Final Fantasy or Pokémon.

- I did not have time to illistrate every state and that is something I would like to do in the future.

- Finally, I want to enhance the game's audio experience. While I am proud of my playSwordAudio function, I'm keen to diversify the sounds based on the game state, player choices, and even incorporate music or atmospheric effects throughout the game.