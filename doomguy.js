var Row = require("./classes/row.js");

// TODO mashup with another config to `coloName -> coloValue'
var rowProps = require("./res/cells.json").rowProps;

var drawing = [];
rowProps.forEach(function (rows) {
  var row = new Row();

  // TODO replace with for each cells
  for (i = 0; i < rows.len; i++) {
    row.addCell(rows.cells[0].char, rows.cells[0].colo);
  }

  drawing.push(row);
});

drawing.forEach(function (row) {
  row.draw();
});

