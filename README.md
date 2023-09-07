# dwarf-quest
by: Steven Morrison

![Alt text](assets/images/DQScreenshot.png)


Take on the role of a weary old dwarf who wants nothing more than to come home, kick off his boots, put on some tea, and pet his beloved cat Méowyn. I made this game because I love storytelling and world-building. I also love puzzles, so this game was a really fun project to work on.

##Hightlights:  

A cool function I put together was this random sound function that I am pretty pround of

```js
function playSwordAudio() {
  //pic rand num 0-2
  let randNum = Math.floor(Math.random() * 2)
  //hold array of functions
  let sounds = [playSwordAudioII, playSwordAudioIII, playSwordAudioIV]
  //call function from array === randNum
  sounds[randNum]()
}
```

Try it yourself here:  
**https://dwarf-quest.surge.sh/**

**Attributions**: 
  Sword Clash 04 
    credit: 32Cheeseman32  
    https://freesound.org/people/32cheeseman32/sounds/180819/  
    https://freesound.org/people/32cheeseman32/sounds/180818/  
    https://freesound.org/people/32cheeseman32/sounds/180817/  

**Technologies Used**:  
  -JavaScript  
  -HTML  
  -CSS  
  -Procreate  

- **Next Steps**: Planned future enhancements (icebox items).
