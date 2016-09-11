var Row = require("./classes/row.js");

// TODO mashup with another config to `coloName -> coloValue'
var rowProps = require("./res/cells.json").rowProps;

var drawing = [];
var rows = [];
rowProps.forEach(function (prop) {
  rows.push(prop);
});

for (i = 0; i < rows.length; i++) {

  var row = new Row();

  for (j = 0; j < rows[i].len; j++) {
    row.addCell(rows[i].cells[0].char, rows[i].cells[0].colo);
  }

  drawing.push(row);
}

drawing.forEach(function (row) {
  row.draw();
});

