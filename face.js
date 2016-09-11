
var maxWidth = 26;
var maxHeight = 29;
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

