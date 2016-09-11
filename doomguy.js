var Row = require("./classes/row.js");

// TODO mashup with another config to `coloName -> coloValue'
var rows = require("./res/cells.json").rows;

var drawing = [];
rows.forEach(function (rowObj) {
  var row = new Row();

  rowObj.cells.forEach(function (cell) {
    row.addCell(cell.char, cell.colo);
  });

  drawing.push(row);
});

drawing.forEach(function (row) {
  row.draw();
});

