/*----------Variables-----------*/
// let b1Audio = new Audio('assets/audio/sc1.wav')
// let b2Audio = new Audio('assets/audio/sc2.wav')
// let b3Audio = new Audio('assets/audio/sc3.wav')
let swordAudio = new Audio('assets/audio/sc4.wav')
/*----------Functions-----------*/
// function playB1Audio() {
//   b1Audio.volume = 0.25
//   b1Audio.play()
// }
// function playB2Audio() {
//   b2Audio.volume = 0.25
//   b2Audio.play()
// }
// function playB3Audio() {
//   b3Audio.volume = 0.25
//   b4Audio.play()
// }
function playSwordAudio() {
  swordAudio.volume = 0.25
  swordAudio.play()
}

/*------------Export------------*/
export {
  // playB1Audio,
  // playB2Audio,
  // playB3Audio,
  playSwordAudio
}