var clc = require("cli-color");

function Cell(char, colo) {
  this.char = char;
  this.colo = colo;
}

Cell.prototype.draw = function () {
  var colo = clc.xterm(Number(this.colo)).bgXterm(this.colo);

  process.stdout.write(colo(this.char));
  process.stdout.write(colo(this.char)); // TODO fix this kludge

};

module.exports = Cell;

