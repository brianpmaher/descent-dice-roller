class DieFace {
  constructor({
    miss = false,
    range = 0,
    damage = 0,
    surge = false,
    defense = 0,
  } = {}) {
    this.miss = miss;
    this.range = range;
    this.damage = damage;
    this.surge = surge;
    this.defense = defense;
  }
}

class Die {
  constructor() {
    this.faces = [];
  }

  roll() {
    return this.faces[Math.floor(Math.random() * this.faces.length)];
  }
}

class BlueDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace({ miss: true }),
      new DieFace({ range: 2, damage: 2, surge: true }),
      new DieFace({ range: 3, damage: 2 }),
      new DieFace({ range: 4, damage: 2 }),
      new DieFace({ range: 5, damage: 1 }),
      new DieFace({ range: 6, damage: 1, surge: true }),
    ];
  }
}

class RedDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace({ damage: 1 }),
      new DieFace({ damage: 2 }),
      new DieFace({ damage: 2 }),
      new DieFace({ damage: 2 }),
      new DieFace({ damage: 3 }),
      new DieFace({ damage: 3, surge: true }),
    ];
  }
}

class YellowDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace({ range: 1, surge: true }),
      new DieFace({ range: 1, damage: 1 }),
      new DieFace({ range: 2, damage: 1 }),
      new DieFace({ damage: 1, surge: true }),
      new DieFace({ damage: 2 }),
      new DieFace({ damage: 2, surge: true }),
    ];
  }
}

class GreenDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace({ damage: 1 }),
      new DieFace({ surge: true }),
      new DieFace({ range: 1, surge: true }),
      new DieFace({ range: 1, damage: 1 }),
      new DieFace({ damage: 1, surge: true }),
      new DieFace({ range: 1, damage: 1, surge: true }),
    ];
  }
}

class BrownDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace(),
      new DieFace(),
      new DieFace(),
      new DieFace({ defense: 1 }),
      new DieFace({ defense: 1 }),
      new DieFace({ defense: 2 }),
    ];
  }
}

class GrayDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace(),
      new DieFace({ defense: 1 }),
      new DieFace({ defense: 1 }),
      new DieFace({ defense: 1 }),
      new DieFace({ defense: 2 }),
      new DieFace({ defense: 3 }),
    ];
  }
}

class BlackDie extends Die {
  constructor() {
    super();

    this.faces = [
      new DieFace(),
      new DieFace({ defense: 2 }),
      new DieFace({ defense: 2 }),
      new DieFace({ defense: 2 }),
      new DieFace({ defense: 3 }),
      new DieFace({ defense: 4 }),
    ];
  }
}
