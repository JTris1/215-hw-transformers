var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

let div = document.createElement("div");
div.classList.add("wrapper");
document.body.append(div);

let wrapper = document.querySelector(".wrapper");

for(let key in chrs) {
  let val = chrs[key];
  divCreator(val.name, val.class, val.afl, val.vehicle);
}


function divCreator(name, rank, afl, veh) {
  let div = document.createElement("div");
  div.classList.add("character");

  let nameEle = document.createElement("div");
  let rankEle = document.createElement("div");
  // let aflEle = document.createElement("div");
  let vehEle = document.createElement("div");
  let imgEle = document.createElement("img");

  if(afl === "autobot") {
    div.classList.add("autobot");
    imgEle.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    div.appendChild(imgEle);
  }
  else {
    div.classList.add("decepticon");
    imgEle.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    div.appendChild(imgEle);
  }

  switch (veh) {
    case "truck":
      vehEle.style.color = "blue";
      break;
    case "tank":
      vehEle.style.color = "green";
      break;
    case "car":
      vehEle.style.color = "gold";
      break;
    case "plane":
      vehEle.style.color = "white";
      break;
    default:
      break;
  }

  nameEle.innerHTML="Name: " + name;
  rankEle.innerHTML="Class: " + rank.toUpperCase();
  // aflEle.innerHTML="Affiliation: " + afl;
  vehEle.innerHTML="Vehicle: " + veh;

  div.appendChild(nameEle);
  div.appendChild(rankEle);
  // div.appendChild(aflEle);
  div.appendChild(vehEle);
  
  wrapper.appendChild(div);
}



// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white