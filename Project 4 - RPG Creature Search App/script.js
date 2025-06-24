const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const specialName = document.getElementById("special-name");
const specialDescription = document.getElementById("special-description");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const resetInfo = () => {
  creatureName.innerText = '';
  creatureId.innerText = '';
  weight.innerText = '';
  height.innerText = '';
  types.innerHTML = '';
  specialName.innerText = '';
  specialDescription.innerText = '';
  hp.innerText = '';
  attack.innerText = '';
  defense.innerText = '';
  specialAttack.innerText = '';
  specialDefense.innerText = '';
  speed.innerText = '';
};

const setInfo = async () => {
  try {
    const input = searchInput.value.toLowerCase();
    const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${input}`)
    const data = await response.json();
    console.log(data);
    creatureName.innerText = `${data.name.toUpperCase()}`;
    creatureId.innerText = `#${data.id}`;
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;

    types.innerHTML = data.types.map(type => {
      return `<span class="type ${type.name}">${type.name}</span>`
    }).join("");

    specialName.innerText = data.special.name;
    specialDescription.innerText = data.special.description;
    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;
  } catch (err) {
    resetInfo();
    alert("Creature not found")
  }

}

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  setInfo();
})