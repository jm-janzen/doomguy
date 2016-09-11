var fs = require("fs");
var Row = require("./row.js");

// TODO mashup with another config to `coloName -> coloValue'
var rowProps = require("./res/cells.json").rowProps;

/* below mimics this output exactly
var maxWidth = 26;
var rows = [
  14, 18, 20, 20, 22, 22,
  22, 22, 22, 22, 22, 22,
  24, 24, 24, 24, 24, 24,
  22, 22, 20, 20, 20, 18,
  18, 16, 14, 12, 10
];
var cells = {};

rows.forEach(function (pixels) {
  var negativeSpace = (maxWidth - pixels) / 2;
  for (n = 0; n < negativeSpace * 2; n++) {
    process.stdout.write(' ');
  }
  for (p = 0; p < pixels * 2; p++) {
    process.stdout.write('\u2588');
  }
  process.stdout.write('\n');
})
*/

var drawing = [];
var rows = [];
rowProps.forEach(function (prop) {
  //prop.len *= 2;
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

