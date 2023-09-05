/*----------Variables-----------*/
// let b1Audio = new Audio('assets/audio/sc1.wav')
// let swordAudioII = new Audio('assets/audio/sc2.wav')
// let swordAudioIIIAudio = new Audio('assets/audio/sc3.wav')
let swordAudioIV = new Audio('assets/audio/sc4.wav')
/*----------Functions-----------*/

// function playSwordAudioII() {
//   swordAudioII.volume = 0.25
//   swprdAudioII.play()
// }
// function playSwordAudioIII() {
//   swordAudioIII.volume = 0.25
//   swprdAudioIII.play()
// }
function playSwordAudioIV() {
  swordAudioIV.volume = 0.25
  swordAudioIV.play()
}

/*------------Export------------*/
export {
  // playSwordAudioII,
  // playSwordAudioIII,
  playSwordAudioIV
}