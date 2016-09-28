function* scrambler(letters) {
  if (typeof letters === 'string') {
    letters = letters.split('');
  }
  const seenCombos = {};
  while (true) {
    let res = [];
    const pickedIndeces = {};
    letters.forEach(() => {
      res.push(letters[randomIndex(letters.length, pickedIndeces)]);
    });
    res = res.join('')
    if (!seenCombos[res]) {
      seenCombos[res] = 1;
      yield res;
    }
  }
}

function randomIndex(max, picked) {
  while(true) {
    const index = Math.floor(Math.random() * max);
    if (!picked.hasOwnProperty(index)) {
      picked[index] = 1;
      return index;
    }
  }
}

module.exports = scrambler;
