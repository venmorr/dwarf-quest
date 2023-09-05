/*----------Variables-----------*/
// let b1Audio = new Audio('assets/audio/sc1.wav')
// let b2Audio = new Audio('assets/audio/sc2.wav')
let swordAudioIIIAudio = new Audio('assets/audio/sc3.wav')
let swordAudioIV = new Audio('assets/audio/sc4.wav')
/*----------Functions-----------*/
// function playB1Audio() {
//   b1Audio.volume = 0.25
//   b1Audio.play()
// }
// function playB2Audio() {
//   b2Audio.volume = 0.25
//   b2Audio.play()
// }
function playSwordAudioIII() {
  swordAudioIII.volume = 0.25
  swprdAudioIII.play()
}
function playSwordAudioIV() {
  swordAudioIV.volume = 0.25
  swordAudioIV.play()
}

/*------------Export------------*/
export {
  // playB1Audio,
  // playB2Audio,
  playSwordAudioIII,
  playSwordAudioIV
}