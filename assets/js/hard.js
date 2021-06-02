var audioX = document.getElementById("audioX");
var audioR = document.getElementById("audioR");
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: " Actor",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
  },
];

const weaponsArray = [
  {
    name: "rope",
    weight: 10,
  },
  {
    name: "knife",
    weight: 8,
  },
  {
    name: "candlestick",
    weight: 2,
  },
  {
    name: "dumbbell",
    weight: 30,
  },
  {
    name: "poison",
    weight: 2,
  },
  {
    name: "axe",
    weight: 15,
  },
  {
    name: "bat",
    weight: 13,
  },
  {
    name: "trophy",
    weight: 25,
  },
  {
    name: "pistol ",
    weight: 20,
  },
];

const roomsArray = [
  {
    name: "Dining Room",
  },
  {
    name: "Conservatory",
  },
  {
    name: "Kitchen",
  },
  {
    name: "Study",
  },
  {
    name: "Library",
  },
  {
    name: "Billiard Room",
  },
  {
    name: "Lounge",
  },
  {
    name: "Ballroom",
  },
  {
    name: "Hall",
  },
  {
    name: "Spa",
  },
  {
    name: "Living Room",
  },
  {
    name: "Observatory",
  },
  {
    name: "Theater",
  },
  {
    name: "Guest House",
  },
  {
    name: "Patio",
  },
];
const rS = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
const rW = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
const rR = roomsArray[Math.floor(Math.random() * roomsArray.length)];
const suspectsS = document.getElementById("suspects");
const weaponsS = document.getElementById("weapons");
const roomsS = document.getElementById("rooms");
let num = 0;
function answer() {
  num = parseInt(num) + parseInt(1);
  if (
    suspectsS[suspectsS.selectedIndex].value == rS.firstName &&
    weaponsS[weaponsS.selectedIndex].value == rW.name &&
    roomsS[roomsS.selectedIndex].value == rR.name
  ) {
    audioR.play();
    suspectsS.disabled = true;
    weaponsS.disabled = true;
    roomsS.disabled = true;
    erg.innerHTML = " ";
    erg.innerHTML = `Yeah that's right ${rS.firstName} ${rS.lastName} killed Mr. Boddy using the ${rW.name} ${rW.weight} in the ${rR.name} 🧛‍♀️`;
  } else if (
    suspectsS[suspectsS.selectedIndex].value !== rS.firstName &&
    weaponsS[weaponsS.selectedIndex].value == rW.name &&
    roomsS[roomsS.selectedIndex].value == rR.name
  ) {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = "Noo, the Suspects name is wrong";
  } else if (
    (weaponsS[weaponsS.selectedIndex].value !== rW.name &&
      suspectsS[suspectsS.selectedIndex].value) == rS.firstName &&
    roomsS[roomsS.selectedIndex].value == rR.name
  ) {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = "Noo, the Weapons is wrong";
  } else if (
    suspectsS[suspectsS.selectedIndex].value == rS.firstName &&
    weaponsS[weaponsS.selectedIndex].value == rW.name &&
    roomsS[roomsS.selectedIndex].value !== rR.name
  ) {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = "Noo, the Room name is wrong";
  } else if (
    suspectsS[suspectsS.selectedIndex].value !== rS.firstName &&
    weaponsS[weaponsS.selectedIndex].value !== rW.name &&
    roomsS[roomsS.selectedIndex].value == rR.name
  ) {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = "Noo, the Weapons and Suspects name is wrong";
  } else if (
    suspectsS[suspectsS.selectedIndex].value == rS.firstName &&
    weaponsS[weaponsS.selectedIndex].value !== rW.name &&
    roomsS[roomsS.selectedIndex].value !== rR.name
  ) {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = "Noo, the Weapons and Room name is wrong";
  } else if (
    suspectsS[suspectsS.selectedIndex].value !== rS.firstName &&
    weaponsS[weaponsS.selectedIndex].value == rW.name &&
    roomsS[roomsS.selectedIndex].value !== rR.name
  ) {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = " Noo, the Room name and Suspects name are wrong";
  } else {
    audioX.play();
    erg.innerHTML = " ";
    erg.innerHTML = "No, everything You've chosen is wrong";
  }

  if (num >= 4) {
    suspectsS.style.display = "none";
    weaponsS.style.display = "none";
    roomsS.style.display = "none";
    document.getElementById("body1").style.height = "40vh";
    erg.innerHTML = " ";
    erg.innerHTML = `Oops , You've run out of trying, and you can't find the right answer,but Detective Ahmad🕵️‍♂️ found it and is ${rS.firstName} ${rS.lastName} killed Mr. Boddy using the ${rW.name} ${rW.weight} in the ${rR.name}`;
  }
}
if (suspectsS[suspectsS.selectedIndex].value == "Jacob") {
}
function ref() {
  window.location.reload();
}
console.log(num);
