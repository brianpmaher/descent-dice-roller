const selectedDice = [];

const addBlueDie = () => {
  selectedDice.push(new BlueDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-blue die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const addRedDie = () => {
  selectedDice.push(new RedDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-red die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const addYellowDie = () => {
  selectedDice.push(new YellowDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-yellow die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const addGreenDie = () => {
  selectedDice.push(new GreenDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-green die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const addBrownDie = () => {
  selectedDice.push(new BrownDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-brown die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const addGrayDie = () => {
  selectedDice.push(new GrayDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-gray die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const addBlackDie = () => {
  selectedDice.push(new BlackDie());
  const dieEl = document.createElement('div');
  dieEl.className = 'bg-black die';
  document.getElementById('selected-dice').appendChild(dieEl);
};

const rollSelectedDice = () => {
  Array.from(document.getElementById('selected-dice').children).forEach((dieEl, i) => {
    const result = selectedDice[i].roll();
    console.log(result);
    const { miss, range, damage, surge, defense } = result;
    const dieStatsEl = document.createElement('p');
    dieStatsEl.innerHTML = `
      ${miss ? 'X' : ''}
      ${range ? range : ''}
      ${damage ? Array(damage).fill().map(() => '♥').join('') : ''}
      ${surge ? '🗲' : ''}
      ${defense ? Array(defense).fill().map(() => '️⛊').join('') : ''}
    `.trim();

    while (dieEl.firstChild) {
      dieEl.removeChild(dieEl.lastChild);
    }

    dieEl.appendChild(dieStatsEl);
  });
};

const resetSelectedDice = () => {
  while (selectedDice.length) {
    selectedDice.pop();
  }

  const selectedDiceEl = document.getElementById('selected-dice');

  while(selectedDiceEl.firstChild) {
    selectedDiceEl.removeChild(selectedDiceEl.lastChild);
  }
};
