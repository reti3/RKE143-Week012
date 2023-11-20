//textilised andmed peavad olema kas ülakomade või jutumärkide vahel
// = - tähistab väärtuse määramist
//javascripti puhul ei ole vahet, kas salv. text, numbrit, boolean etc; 

//userName = 'Ron';
//let or const - let puhul saab muutuja väärtust muuta; const puhul ei saa muutuja väärtust muuta

const userName = 'Harry';

//massiiv (arrey)
let friends = ['Ron', 'Hermione', 'Hedwig'];
//push lisab elemendi massiivi lõppu
friends.push('Draco');

//let numberOfFriends = friends.length;
//console.log(`${userName} has got ${numberOfFriends} friends.`);
 //või
 console.log(`${userName} has got ${friends.length} friends.`);

 //for tsüklis on võimalik andmetes muudatusi teha (nt saab lisada tärni)
 for(let i = 0; i < friends.length; i++){
    //ei lisa Dracole tärni
    if(friends[i] === 'Draco'){
        WeAreNotFriends(friends[i]);
        continue;
    }

    friends[i] = friends[i] + '*';
    greeting(friends[i]);
    //console.log(`${i+1}. ${friends[i]}`);
 }
//iga element massiivist sõbrad (friends)
// friends.forEach(friend => {
//    friend = friend + '*';
//    console.log(friend);
// });

 //forEach ei luba andmete struktuuri muuta (nt ei lase tärni juurde panna)
 friends.forEach(friend => {
    console.log(friend);
 });

 function greeting(friendsName){
    console.log(`Hello, ${friendsName}!`)
 }

 function WeAreNotFriends(enemyName){
    console.log(`Go Away, ${enemyName}! We are not friends.`)
 }


//let age = 11;
//const isWizard = true; // true/false - boolean

//for tsükkel
// i - kust tsükkel tööd alustab
//i++ - sama, mis i+1
//for(let i = 0; i < 5; i++){
//    console.log(`${i + 1} I am a wizard no! Hurray!`); //siin i+1 ei mõjuta i'd, kuvamise eesmärgil
//}

// DRY principle - Do not repeat yourself, vt allpool
//console.log('I am a wizard no! Hurray!');
//console.log('I am a wizard no! Hurray!');

//loogilised operaatorid:
//&& - AND
//kõik tingimused peavad olema täidetud

//if(userName === 'Harry' && age === 11 && isWizard) {
//    console.log(`${userName}, here is your letter from Hogwarts.`);
//}
//else {
//    console.log(`You are not a wizard, ${userName}. Here's your Amazon package.`);
//}

// || - OR
//! - tähendab NOT

//!isWizard - boolean'i eitus

//if(userName !== 'Harry' || age !== 11 || isWizard !== true) {
//    console.log(`You are not a wizard, ${userName}. Here's your Amazon package.`);
//}
//else {
//    console.log(`${userName}, here is your letter from Hogwarts.`);
//}



//if(age < 11){
//    console.log(`${userName}, you are too young to attend Hogwarts.`);
//}
//else if(age > 11) {
//    console.log(`Have you missed your letter from Hogwarts, ${username}`);
//}

//else {
//    console.log(`Congratulations, ${userName}! You are wizard now!`);
//}
