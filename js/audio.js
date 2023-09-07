/*----------Variables-----------*/
let swordAudioII = new Audio('assets/audio/sc2.wav')
let swordAudioIII = new Audio('assets/audio/sc3.wav')
let swordAudioIV = new Audio('assets/audio/sc4.wav')
/*----------Functions-----------*/

function playSwordAudioII() {
  swordAudioII.volume = 0.25
  swordAudioII.play()
}
function playSwordAudioIII() {
  swordAudioIII.volume = 0.25
  swordAudioIII.play()
}
function playSwordAudioIV() {
  swordAudioIV.volume = 0.25
  swordAudioIV.play()
}

function playSwordAudio() {
  //pic rand num 0-2
  let randNum = Math.floor(Math.random() * 2)
  //hold array of functions
  let sounds = [playSwordAudioII, playSwordAudioIII, playSwordAudioIV]
  //call function from array === randNum
  sounds[randNum]()
}

/*------------Export------------*/
export {
  playSwordAudio
}