let scrambler = require('./scrambler');

const s = scrambler('kryeo');

for(let i = 0; i < 21; i++) {
  console.log(s.next().value);
}
