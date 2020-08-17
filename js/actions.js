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

    // Clear previous faces.
    while (dieEl.firstChild) {
      dieEl.removeChild(dieEl.lastChild);
    }

    // Add all new symbols.
    if (miss) {
      const missSymbol = document.createElement('span');
      missSymbol.classList.add('symbol-miss');
      dieEl.appendChild(missSymbol);
    }

    if (range) {
      const rangeSymbol = document.createElement('span');
      rangeSymbol.innerHTML = range;
      dieEl.appendChild(rangeSymbol);
    }

    Array(damage).fill().forEach(() => {
      const damageSymbol = document.createElement('span');
      damageSymbol.classList.add('symbol-damage');
      dieEl.appendChild(damageSymbol);
    });

    if (surge) {
      const surgeSymbol = document.createElement('span');
      surgeSymbol.classList.add('symbol-surge');
      dieEl.appendChild(surgeSymbol);
    }

    Array(defense).fill().forEach(() => {
      const defenseSymbol = document.createElement('span');
      defenseSymbol.classList.add('symbol-defense');
      dieEl.appendChild(defenseSymbol);
    });
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
