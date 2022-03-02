const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "img/wizard.png",
  health: 60,
  diceRoll: [1, 5, 3],
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "img/orc.png",
  health: 10,
  diceRoll: [3],
  diceCount: 1,
};

function getDiceRollArray(diceCount) {
  const newArray = new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);

  return newArray;
}

function renderDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map((num) => {
      return `<div class="dice">${num}</div>`;
    })
    .join("");
}

function renderCharacterHtml(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  const diceHtml = renderDiceHtml(diceCount);

  document.getElementById(elementId).innerHTML = `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b>${health}</b></div>
        <div class="dice-container">    
            ${diceHtml}
        </div>
    </div>`;
}

renderCharacterHtml(hero);
renderCharacterHtml(monster);
