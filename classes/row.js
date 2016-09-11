var Cell = require("./classes/cell.js");

function Row() {
  this.cells = [];
}

Row.prototype.draw = function () {
  var negSpace = Math.abs(26 - this.cells.length)
  //*XXX*/console.log("About to draw %d cells with %d negative space", this.cells.length, negSpace);

  for (i = 0; i < negSpace; i++) {
    process.stdout.write(' ');
  }
  this.cells.forEach(function (c) {
    c.draw();
  }, this);
  process.stdout.write('\n');
};

Row.prototype.addCell = function (char, colo) {
  this.cells.push(new Cell(char, colo));
};

module.exports = Row;

