const states = [
{ state: 0, //Place Holder Card
  name: 'Place Holder Card',
  image: '',
  soundFx: '', 
  otherFx: null,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium earum sit perferendis dignissimos voluptas ad et quibusdam! Accusamus saepe labore fugiat ipsa cum voluptatem incidunt. Doloribus cumque dignissimos consequuntur.',
  choices: [null, null, null, null], 
  nextState: [null, null, null, null],
},
{ state: 1, //Start Screen
  name: 'Start Screen',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'Something was taken from you. Do you have what it takes to get it back?',
  choices: ['YES!!', 'no', 'test', null], 
  nextState: [3, 2, 34, null],
},
{ state: 2, //the end
  name: 'the end',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375590642_10231498390222041_5220088064123046453_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=PX701S1uf40AX-9F0AD&_nc_ht=scontent-lga3-1.xx&oh=00_AfCHAPqK95OAs4fItppwxO6x03a6zyXAg3V8vOQiSRhLlg&oe=64FC0FCC',
  soundFx: '', 
  otherFx: null,
  text: 'THE END',
  choices: ['try again', null, null, null], 
  nextState: [1, null, null, null],
},
{ state: 3, //home
  name: 'home',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375327627_10231491022037841_2094200356543834333_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=813123&_nc_ohc=_IfXkJxvEI0AX-1YR9v&_nc_ht=scontent-lga3-1.xx&oh=00_AfCJQOCiZ4tdFot16euzklpMpRNX8dQg1DiAHD9VJjsD4A&oe=64FAB54D',
  soundFx: '', 
  otherFx: null,
  text: 'It has been a long day. A long life, even for a dwarf. It is always good to get home, kick off your boots, put on some tea, and relax with your beloved cat. What to do first...',
  choices: ['Kick off Boots', 'Put on some Tea', 'Pet Méowyn', null], 
  nextState: [4, 5, 8, null],
},
{ state: 4, //kick off your boots
  name: 'kick off your boots',
  image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/373313911_10231497196072188_2319806913947617323_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=813123&_nc_ohc=AuNg7DmJqXQAX9qq3pR&_nc_ht=scontent-lga3-2.xx&oh=00_AfBwVoRszPqLXsnoV4DavynbonoXB0ZNsKNjVqcyiwRHOA&oe=64FB82F1',
  soundFx: '', 
  otherFx: null,
  text: 'Ahhh, nothing like freeing the hounds. Fun fact: dwarves have long held the record for smelliest feet among the civilized peoples, a title they hold proudly. Now then, what next?',
  choices: ['Put on some tea', 'Pet Méowyn', null, null], 
  nextState: [7, 8, null, null],
},
{ state: 5, //put on some tea 1
  name: 'put on some tea 1',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/374931183_10231492423152868_1463909025714309972_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_ohc=2lJDT0KiergAX83RldL&_nc_ht=scontent-lga3-1.xx&oh=00_AfDqtNq_NJnVrS45gC5-C4AB9k3zzQzkaGg5AF7seZQ1kw&oe=64FBDD3B',
  soundFx: '', 
  otherFx: null,
  text: 'The sound of the kettle boiling, the smell of a struck match, the satisfaction of tea leaves unfurling as they steep. Few things in life are better than a good cup of tea. Now then, what next?',
  choices: ['Kick off boots', 'Pet Méowyn', null, null], 
  nextState: [6, 8, null, null],
},
{ state: 6, //kick off boots 2
  name: 'kick off boots 2',
  image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/373313911_10231497196072188_2319806913947617323_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=813123&_nc_ohc=AuNg7DmJqXQAX9qq3pR&_nc_ht=scontent-lga3-2.xx&oh=00_AfBwVoRszPqLXsnoV4DavynbonoXB0ZNsKNjVqcyiwRHOA&oe=64FB82F1',
  soundFx: '', 
  otherFx: null,
  text: 'Ahhh, nothing like freeing the hounds. Fun fact: dwarves have long held the record for smelliest feet among the civilized peoples, a title they hold proudly. Now then, finally it is time to...',
  choices: ['Pet Méowyn', null, null, null], 
  nextState: [8, null, null, null],
},
{ state: 7, //put on some tea 2
  name: 'put on some tea 2',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/374931183_10231492423152868_1463909025714309972_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_ohc=2lJDT0KiergAX83RldL&_nc_ht=scontent-lga3-1.xx&oh=00_AfDqtNq_NJnVrS45gC5-C4AB9k3zzQzkaGg5AF7seZQ1kw&oe=64FBDD3B',
  soundFx: '', 
  otherFx: null,
  text: 'The sound of the kettle boiling, the smell of a struck match, the satisfaction of tea leaves unfurling as they steep. Few things in life are better than a good cup of tea. Now then, finally it is time to...',
  choices: ['Pet Méowyn', null, null, null], 
  nextState: [8, null, null, null],
},
{ state: 8, //Petting Méowyn 
  name: 'Petting Méowyn',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375453747_10231498332100588_8032725069237199576_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_ohc=lMXcC7m9FA0AX8fTxBG&_nc_oc=AQmIMP3rxFxFvEipGw_nue2ZtaQwpBbPFQ4OHEVSrOWv4zblahsOvsE4A2eEvTp9lSo&_nc_ht=scontent-lga3-1.xx&oh=00_AfD7ybsJuHDn3w_iNVf42SN-4fJnFP9oeKlqHiXjqsYOBw&oe=64FB8FBE',
  soundFx: '', 
  otherFx: null,
  text: 'You turn to look for your cat but she is not there. By now she would have been under your feet, rubbing against your leg, looking for a treat. you rush into the other room where her favorite spot to lay is and in the beam of sun light where she can always be found napping is instead a note.',
  choices: ['Read the note', null, null, null], 
  nextState: [9, null, null, null],
},
{ state: 9, //Reading the note
  name: 'Reading the note',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'It`s a calling card. The infamous theif known as Phantom left it. It reads, "I have your cat Admiral Ironbreaker. If you want it back come find me. Bring that Legendary axe of yours. You will need it."',
  choices: ['Tear the note to shreads', 'Yell out, "PHANTOM!"', 'Grab your axe', 'All of the above'], 
  nextState: [10, 10, 10, 10],
},
{ state: 10, //Leaving to find Méowyn
  name: 'Leaving to find Méowyn',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'The Phantom is devious and hard to pin down. However, there are some rumors as to were he makes his base. The abandoned mine in the foot hills, or deep in the dark woods are the most likely and among the first places you should look. Where first?  !!dark woods coming soon!!',
  choices: ['Abandoned Mine', null, null, null], 
  nextState: [11, null, null, null],
},
{ state: 11, //Mine entrance
  name: 'Mine entrance',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null, 
  text: 'It`s not a far walk to the entrance of the Abandoned Mine, and with the fury of a dwarf, your feet carry you briskly and tirelessly. You come to stand before the grand gate, built during the mine`s abandonment. It`s wrought of iron and embedded in tall gray stone walls. Whatever was discovered in the mine that led to its abandonment must have been perilous to warrant such a magnificent piece of dwarven craftsmanship, either to keep people out... or to keep whatever they found inside. The gate is secured by a large metal padlock. To the right, there`s a guard`s encampment. What shall you do?',
  choices: ['Try the padlock', 'investigate the encamplent', null, null], 
  nextState: [19, 12, null, null],
},
{ state: 12, //Investigate the encampment
  name: 'Investigate the encampment',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'Long ago when this was was built, a system of guards were put in place to increce security. But since the war with the giants escilated every young and abled bodied dwarf was shipped north to fight. Like the mine this place was also abandoned. All that remains is an old desk, a broken bed, and a chest of stone bult into the earth. Where shall you look?',
  choices: ['Old desk', 'Broken bed', 'Stone chest', 'Return to mine entrance'], 
  nextState: [13, 14, 15, 18],
},
{ state: 13, //Old desk
  name: 'Old desk',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'This old desk has seen better days. Its surface scarred by many a knife tip flipped in boredom by guards asked to stand watch over a mine no one was interested in exploring. Gods, you hope they are still bored on whatever battlefront they were sent to. There is a single drawer built into its side. You attempt to open it, but it is jammed shut.',
  choices: ['Pull harder', 'SMASH IT WITH YOUR AXE!!', 'Return to entrance', null], 
  nextState: [16, 16, 18, null],
},
{ state: 14, //Broken Bed
  name: 'Broken Bed',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'There is nothing here. Wildlife and vagrants have stripped it to the frame. If there was anything useful left, you cannot figure it out.',
  choices: ['Old desk', 'Stone Chest', 'Return to the mine entrance', null], 
  nextState: [13, 15, 18, null],
},
{ state: 15, //Stone chest
  name: 'Stone chest',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'The stone chest sits in the corner. Fine dwarven craftsmanship. Something like this was built here first, the rest of this place around it. You run your hand over its lid, admiring it, before, with a heave, you lift its heavy lid. You look inside. There is nothing.',
  choices: ['Old desk', 'Broked bed', 'Return to the mine Entrance', 'Reach into the chest'], 
  nextState: [13, 14, 18, 17],
},
{ state: 16, //Pull/axe desk harder
  name: 'Pull/axe desk harder',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'With a heave followed by the popping of wood being ripped apart, you free the drawer from its confinement. Alas, nothing but dust bursts forth and fills the room. You wipe the fallen dust from your face and compose yourself. There is still the broken bed and the stone chest to check. Or you can give up on this place and return to the gate.',
  choices: ['Broken bed', 'Stone chest', 'Return to the mine entrance', null], 
  nextState: [14, 15, 18, null],
},
{ state: 17, //Stone chest false bottom
  name: 'Stone chest false bottom',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'You feel around the stone chest`s stone floor and soon find a spot that, when pushed, gives in slightly with a click. You smile to yourself. "Fine dwarven craftsmanship," you mutter as the false bottom of the chest slides up to reveal a small piece of paper. You lift it out of the chest and squint to read its small writing. It reads, "1-3-3-4." Could these numbers be...',
  choices: ['Return to the entrance', null, null, null], 
  nextState: [18, null, null, null],
},
{ state: 18, //Return to the entrance
  name: 'Return to the entrance',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'You return to the gate at the entrance to the mine. The padlock gleams in the sun, its fine dwarven craftsmanship evident from afar.',
  choices: ['Try the padlock', 'Investigate the encampment', null, null], 
  nextState: [19, 12, null, null],
},
{ state: 19, //padlock 0
  name: 'padlock 0',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375226307_10231490593787135_5472186744831628837_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=FCl4ebWTUcwAX_GJFaP&_nc_ht=scontent-lga3-1.xx&oh=00_AfBTHmDUYasiot6N5Pa037paiPm87D3A8Iw-yBHGKnaUDg&oe=64FAE2B9',
  soundFx: '', 
  otherFx: null,
  text: 'The padlock is heavy and warm in your hand. You turn it up to see its dials. There are four of them, each ranging from 1 to 4. Four dials with four choices each. That`s... 256 possible combinations! Do you think you can crack it?',
  choices: ['1', '2', '3', '4'], 
  nextState: [20, 21, 21, 21],
},
{ state: 20, //Dial 1 correct
  name: 'Dial 1 correct',
  image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/375794033_10231490769191520_3186675507458714014_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=813123&_nc_ohc=YN-TVl6mzGsAX-pmKgK&_nc_ht=scontent-lga3-2.xx&oh=00_AfCKTznkF8M_3aDjV3gfA48yIxCqOuQK2wQbSVoCfmHQYA&oe=64FB4565',
  soundFx: '', 
  otherFx: null,
  text: 'The first dial slides into place with a satisfying click. It is impossible to tell if it was the correct choice yet. You still have three more dials to go.',
  choices: ['1', '2', '3', '4'], 
  nextState: [23, 23, 22, 23],
},
{ state: 21, //Dial 1 inccorect
  name: 'Dial 1 inccorect',
  image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/375794033_10231490769191520_3186675507458714014_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=813123&_nc_ohc=YN-TVl6mzGsAX-pmKgK&_nc_ht=scontent-lga3-2.xx&oh=00_AfCKTznkF8M_3aDjV3gfA48yIxCqOuQK2wQbSVoCfmHQYA&oe=64FB4565',
  soundFx: '', 
  otherFx: null,
  text: 'The first dial slides into place with a satisfying click. It is impossible to tell if it was the correct choice yet. You still have three more dials to go.',
  choices: ['1', '2', '3', '4'], 
  nextState: [23, 23, 23, 23],
},
{ state: 22, //Dial 2 correct
  name: 'Dial 2 correct',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375456652_10231490769791535_93491380033853523_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=ucAHz0TDLUkAX8-bnFE&_nc_ht=scontent-lga3-1.xx&oh=00_AfA6wqBVGDAU39GTZJADMZYmXf0HxyzaXVV850emIAH7zQ&oe=64FB06BF',
  soundFx: '', 
  otherFx: null,
  text: 'The second dial is nearly as satisfying as the first. But again, it is impossible to tell if it was the correct choice yet. You still have two more dials to go. Your palms grow sweaty in antici...........................pation.',
  choices: ['1', '2', '3', '4'], 
  nextState: [25, 25, 24, 25],
},
{ state: 23, //Dial 2 inccorect
  name: 'Dial 2 inccorect',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375456652_10231490769791535_93491380033853523_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=ucAHz0TDLUkAX8-bnFE&_nc_ht=scontent-lga3-1.xx&oh=00_AfA6wqBVGDAU39GTZJADMZYmXf0HxyzaXVV850emIAH7zQ&oe=64FB06BF',
  soundFx: '', 
  otherFx: null,
  text: 'The second dial is nearly as satisfying as the first. But again, it is impossible to tell if it was the correct choice yet. You still have two more dials to go. Your palms grow sweaty in antici...........................pation.',
  choices: ['1', '2', '3', '4'], 
  nextState: [25, 25, 25, 25],
},
{ state: 24, //Dial 3 correct
  name: 'Dial 3 correct',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375264724_10231490769311523_8317864562266274291_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_ohc=H842jS6Dux4AX9unjq6&_nc_ht=scontent-lga3-1.xx&oh=00_AfBXCmHQ1vQKvJtCmeNuyKBKHWV9dTzNPlpZ511ZNf63rg&oe=64FB7912',
  soundFx: '', 
  otherFx: null,
  text: 'The third dial slides into place. Still, nothing gives away if it was the correct choice. You are onto the final dial! A drip of sweat rolls down your forehead. A pang of urgency hits your heart as you think of Méowyn with that thief. If she is in there and you can`t get past this gate... you try not to think about it.',
  choices: ['1', '2', '3', '4'], 
  nextState: [27, 27, 27, 26],
},
{ state: 25, //Dial 3 inccorect
  name: 'Dial 2 inccorect',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375264724_10231490769311523_8317864562266274291_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_ohc=H842jS6Dux4AX9unjq6&_nc_ht=scontent-lga3-1.xx&oh=00_AfBXCmHQ1vQKvJtCmeNuyKBKHWV9dTzNPlpZ511ZNf63rg&oe=64FB7912',
  soundFx: '', 
  otherFx: null,
  text: 'The third dial slides into place. Still, nothing gives away if it was the correct choice. You are onto the final dial! A drip of sweat rolls down your forehead. A pang of urgency hits your heart as you think of Méowyn with that thief. If she is in there and you can`t get past this gate... you try not to think about it.',
  choices: ['1', '2', '3', '4'], 
  nextState: [27, 27, 27, 27],
},
{ state: 26, //Dial 4 correct
  name: 'Dial 4 correct',
  image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/375454403_10231490770031541_4083083105689041054_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=813123&_nc_ohc=VKkimT_7HU0AX-E3bIp&_nc_ht=scontent-lga3-2.xx&oh=00_AfDmOhxcRlnSgqXvsP2t7ym4_Z-z1vHIQWsWhdsxmPjEyA&oe=64FB1AB7',
  soundFx: '', 
  otherFx: null,
  text: 'Finally, the last dial. You hold your breath as you grasp the body of the lock and try to pull it free of its shackle.',
  choices: ['PULL!', null, null, null], 
  nextState: [28, null, null, null],
},
{ state: 27, //Dial 4 inccorect
  name: 'Dial 4 inccorect',
  image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/375454403_10231490770031541_4083083105689041054_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=813123&_nc_ohc=VKkimT_7HU0AX-E3bIp&_nc_ht=scontent-lga3-2.xx&oh=00_AfDmOhxcRlnSgqXvsP2t7ym4_Z-z1vHIQWsWhdsxmPjEyA&oe=64FB1AB7',
  soundFx: '', 
  otherFx: null,
  text: 'Finally, the last dial. You hold your breath as you grasp the body of the lock and try to pull it free of its shackle.',
  choices: ['PULL!', null, null, null], 
  nextState: [29, null, null, null],
},
{ state: 28, //The lock opens
  name: 'The lock opens',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'The lock comes apart and the heavy chains fall to the side loudly. You let out a sigh of relief.',
  choices: ['continue into the abandoned mine', null, null, null], 
  nextState: [31, null, null, null],
},
{ state: 29, //The lock dosnt open
  name: 'The lock dosnt open',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'You pull and pull, but the lock won`t come loose. Rage fills you and for a moment you think to bring your axe down upon the accursed thing, but you know it would be no use. Nothing can break fine dwarven craftsmanship, not even fine dwarven craftsmanship itself. In the back of your mind, you think about a parable of a god who can strike themselves and have it hurt. Would such a god be considered strong or weak? You shake the thought from your mind and refocus to save Méowyn. Will you try the padlock again, or try something else?',
  choices: ['Try the padlock again', 'Try something else', null, null], 
  nextState: [30, 18, null, null],
},
{ state: 30, //padlock 0 take 2
  name: 'padlock 0 take 2',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/375226307_10231490593787135_5472186744831628837_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=FCl4ebWTUcwAX_GJFaP&_nc_ht=scontent-lga3-1.xx&oh=00_AfBTHmDUYasiot6N5Pa037paiPm87D3A8Iw-yBHGKnaUDg&oe=64FAE2B9',
  soundFx: '', 
  otherFx: null,
  text: 'The padlock feels regrettably familiar in your hands now. As you bear down to try again, your thumb rests on the first dial... 256 possible combinations!',
  choices: ['1', '2', '3', '4'], 
  nextState: [20, 21, 21, 21],
},
{ state: 31, //Continue into the mine
  name: 'Continue into the mine',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'With a determined shove, the towering gate groans in protest, but you manage to push it wide open. As you hurry into the mine`s shadowy maw, the weight of the axe on your shoulder serves as a grounding reminder of your purpose. Each step is fueled by the burning anger for Phantom. You pass piles of hastily discarded mining equipment. The winding paths that lead you deeper hold an ominous liminal feeling, setting your already frayed nerves on edge. The darkness envelops you, but your resolve is unwavering. As you reach a depth where the air takes on a chill, the path splits three ways. Where will you go: left, center, or right?',
  choices: ['Left path', 'Center path', 'Right path', null], 
  nextState: [32, 33, 34, null],
},
{ state: 32, 
  name: 'Left path',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'state 5',
  choices: ['Try Padlock', 'Investigate the encampment', null, null], 
  nextState: [19, 12, null, null],
},
{ state: 33, 
  name: 'Look inside the box',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'You open the box and inside is a sight for soar eyes. It`s Méowyn! Your heart leaps out or yous chest as she popps her little paws over the edge of the box and looks up at you with her big soft kitten eyes.',
  choices: ['Reach in and embrace Méowyn', null, null, null], 
  nextState: [34, null, null, null],
},
{ state: 34, 
  name: 'Finally reunighted with Méowyn',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'At long last, your best friend in the world is back.',
  choices: ['The End', null, null, null], 
  nextState: [2, null, null, null],
},
{ state: 34, 
  name: 'put on some tea',
  image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/370788599_10231485422777863_174509962738064701_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=WB2o_V5N4LoAX9rrRCu&_nc_ht=scontent-lga3-1.xx&oh=00_AfCni21fDSMsyXxkH0c9YYjNgQtTQ45ynBpRyMx5tNM1ug&oe=64F9A65A',
  soundFx: '', 
  otherFx: null,
  text: 'state 5',
  choices: ['state 1', null, null, null], 
  nextState: [1, null, null, null],
},
{ state: null, 
  name: 'null',
  image: 'null',
  soundFx: '', 
  otherFx: null,
  text: 'null',
  choices: [null, null, null, null], 
  nextState: [1, null, null, null],
},


]

export default states