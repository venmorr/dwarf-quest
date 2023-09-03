const states = [
{ state: 0, 
  name: 'Place Holder Card',
  image: 'assets/images/placeHolderCard.jpg',
  soundFx: 'assets/audio/561217__terrytom__dungeon.wav', 
  otherFx: null,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium earum sit perferendis dignissimos voluptas ad et quibusdam! Accusamus saepe labore fugiat ipsa cum voluptatem incidunt. Doloribus cumque dignissimos consequuntur.',
  choices: [null, null, null, null], 
  nextState: [null, null, null, null],
},
{ state: 1, 
  name: 'State 1',
  image: 'assets/images/Title Card.jpg',
  soundFx: 'assets/audio/685323__robbnix__dark-mystery-theme-80s-inspired-wav-mix.wav', 
  otherFx: null,
  text: 'Somthing was taken from you. Do you have what it takes to get it back?',
  choices: ['YES!!', 'no', null, null], 
  nextState: [2, 3, null, null],
},
{ state: 2, 
  name: 'state 2',
  image: 'assets/images/placeHolderCard.jpg',
  soundFx: 'assets/audio/685323__robbnix__dark-mystery-theme-80s-inspired-wav-mix.wav', 
  otherFx: null,
  text: 'You are in state 2 now. where next',
  choices: ['state 3', 'state 4', 'state 5', null], 
  nextState: [3, 4, 5, null],
},
{ state: 3, 
  name: 'state 3',
  image: 'assets/images/placeHolderCard.jpg',
  soundFx: 'assets/audio/685323__robbnix__dark-mystery-theme-80s-inspired-wav-mix.wav', 
  otherFx: null,
  text: 'state 3',
  choices: ['state 4', 'state 5', null, null], 
  nextState: [4, 5, null, null],
},
{ state: 4, 
  name: 'state 4',
  image: 'assets/images/placeHolderCard.jpg',
  soundFx: 'assets/audio/685323__robbnix__dark-mystery-theme-80s-inspired-wav-mix.wav', 
  otherFx: null,
  text: 'state 4',
  choices: ['state 5', null, null, null], 
  nextState: [5, null, null, null],
},
{ state: 5, 
  name: 'state 5',
  image: 'assets/images/placeHolderCard.jpg',
  soundFx: 'assets/audio/685323__robbnix__dark-mystery-theme-80s-inspired-wav-mix.wav', 
  otherFx: null,
  text: 'state 5',
  choices: ['state 1', null, null, null], 
  nextState: [1, null, null, null],
},
  

]

export default states