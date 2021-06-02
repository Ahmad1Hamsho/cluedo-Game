const userName01 = document.getElementById("hy");
const userName1 = localStorage.getItem("textvalue");
userName01.innerHTML += " " + localStorage.getItem("textvalue");
const userName2 = document.getElementById("hy1");
userName2.innerHTML += " " + localStorage.getItem("textvalue");
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
const erg = document.getElementById("erg");
const cards = document.getElementById("cards");
const refr = document.getElementById("ref");
const card = document.querySelectorAll("#card");
let num = 0;

for (const cardItem of card) {
  var rightCard = Math.round(Math.random() * card.length - 1);

  for (var i = 0; i < card.length; i++) {
    const rS = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
    const rW = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
    const rR = roomsArray[Math.floor(Math.random() * roomsArray.length)];

    cardItem.innerHTML = `Do you think <h3>${rS.firstName} ${rS.lastName}</h3> killed Mr. Boddy in the <h3>${rR.name}</h3> with a <h3>${rW.name} ${rW.weight}</h3> ?`;

    card[i].addEventListener("click", function () {
      num = parseInt(num) + parseInt(1);
      const rightKillerName = card[rightCard].childNodes[1].innerHTML;
      const rightPlace = card[rightCard].childNodes[3].innerHTML;
      const rightWeapons = card[rightCard].childNodes[5].innerHTML;
      if (this === card[rightCard]) {
        audioR.play();
        userName01.style.display = "none";
        userName2.style.display = "none";
        cards.style.display = "none";
        erg.style.position = "absolute";
        erg.style.top = "40%";
        erg.style.left = "4%";
        refr.style.display = "block";
        erg.innerHTML = `Yeah ${userName1} that's right ${rightKillerName} killed Mr. Boddy using the ${rightWeapons} in the ${rightPlace} 🧛‍♀️`;
      } else if (this !== card[rightCard] && num <= 15) {
        audioX.play();
        erg.innerHTML = `No😨, this is wrong. In order to avoid accusing innocent people, we asked Detective Ahmad🕵️‍♂️to help us and was able to discover the weapon with which the crime took place. the weapon is (${rW.name})`;
      } else if (this !== card[rightCard] && num >= 30) {
        audioX.play();
        erg.innerHTML = `Nooo🤦‍♂️, this is a mistake. We asked Detective Ahmad🕵️‍♂️ to help us again and we were able to discover the name of the criminal but we need to know the room where the crime occurred. the name is( ${rS.firstName} ) `;
      }
      if (this !== card[rightCard] && num >= 45) {
        audioX.play();
        userName01.style.display = "none";
        userName2.style.display = "none";
        erg.style.position = "absolute";
        erg.style.top = "40%";
        erg.style.left = "4%";
        erg.innerHTML = `Oops ${userName1} , You've run out of trying, and you can't find the right answer,but Detective Ahmad🕵️‍♂️ found it and is ${rS.firstName} ${rS.lastName} killed Mr. Boddy using the ${rW.name} ${rW.weight} in the ${rR.name}`;
        refr.style.display = "block";
        cards.style.display = "none";
      }
    });
  }
}

function ref() {
  window.location.reload();
}
console.log(rightCard);
