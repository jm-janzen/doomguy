var Row = require("./classes/row.js");

// TODO mashup with another config to `coloName -> coloValue'
var rowProps = require("./res/cells.json").rowProps;

var drawing = [];
rowProps.forEach(function (rows) {
  var row = new Row();

  rows.cells.forEach(function (cell) {
    row.addCell(cell.char, cell.colo);
  });

  drawing.push(row);
});

drawing.forEach(function (row) {
  row.draw();
});

