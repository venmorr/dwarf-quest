# <ins>DWARF QUEST<ins/>
Coded and illistrated by: Steven Morrison

![Alt text](<assets/images/Screenshot 2023-09-08 at 12.33.37 AM.png>)


Delve into the boots of a weary old dwarf who yearns for nothing more than to come home, kick off his boots, put on some tea, and pet his beloved cat, Méowyn. I was inspired to create this game due to my passion for storytelling, world-building, and puzzle solving. My passion for games like this comes from fond memories of hiking in the woods with my cousins and concocting stories as we ambled along. In high school, I was introduced to D&D 4th edition by my friends and was immediately hooked. During the pandemic, I passed the time learning every rule of the more recent 5th edition of D&D. Finally, I got the chance to play it with my friends this past year in a campaign I wrote! In this game, you'll simply click on the desired option using the buttons below the text to explore the story of a dwarf I have put together for you. Read carefully; sometimes, if you're stuck, the answer may be concealed within the text or the accompanying image. Thank you for playing and please enjoy Dwarf Quest.

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
One cool function I wrote is this random sound function, which I'm particularly proud of. I hadn't completely anticipated `sounds[randNum]()` to operate as a function, but it certainly did! Implementing this function significantly diversified the game sounds, breaking the monotony of the singular sword sound that previously played with each button press.

![Alt text](<assets/images/Screenshot 2023-09-08 at 12.34.26 AM.png>)

I'm also quite proud of a puzzle I designed for the game. In it, players will encounter a gate secured by a padlock. Now, players can attempt to crack the code. The padlock has 4 dials, each labeled with numbers 1 through 4. This results in 256 possible combinations. If one were to methodically try each combination, it would approximately take fifty minutes. However, for those who prefer a shortcut and a bit of extra exploration, there's a slip of paper hidden within the game environment that displays the correct four-digit code.

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
  - Git
  - Procreate  
  - ChatGPT (only to assist in the story writing, not the code)
##
## Next Steps:  
- Transition to a Dynamic State Change System: At present, the game relies on an array index to navigate various state objects. When changing the order of this array, we have to manually adjust each state and modify the values in their nextState properties. Moving to a more dynamic system would streamline this process.

 -Introduce an Inventory System: By incorporating item-specific boolean conditions, different nextState options can be unlocked. This will add a layer of strategy and depth to the gameplay.

 -Health Tracking Mechanism: Implementing a health system to monitor the player's HP will add stakes to the gameplay. When the HP drops to zero, the game will end, challenging players to be more strategic.

 -Turn-Based Battle Mechanism: By fusing the inventory and health systems, I plan to integrate a turn-based combat mechanism. This will be reminiscent of classic games like Final Fantasy and Pokémon, providing both nostalgia and engaging gameplay.

 -State Illustrations: I couldn't illustrate every game state due to time constraints, but it's a goal for future updates.

 -Enhanced Audio Experience: While I take pride in my playSwordAudio function, I aim to expand the game's sonic dimension. This includes diversifying sounds depending on game state, player decisions, and even introducing background music or ambient soundscapes to enrich the player's immersion.