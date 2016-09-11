
function Cell(char, colo) {
  this.char = char;
  this.colo = colo;
}

Cell.prototype.draw = function () {
  // TODO write colo to std out
  process.stdout.write(this.char);
  process.stdout.write(this.char); // TODO fix this kludge
};

module.exports = Cell;

