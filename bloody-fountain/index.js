var $ = require("jquery");
require("fabric");
var fabric = window['fabric'];


var main = function() {
  $('#example').text('hi');

  var canvas = new fabric.Canvas('canvas', {
    backgroundColor: 'rgb(200,200,200)',
  });

  var f1 = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 600,
      fill: 'rgb(200,50,50)',
      selectable: false
  });

  var f2 = new fabric.Rect({
      top: 100,
      left: 200,
      width: 60,
      height: 600,
      fill: 'rgb(200,50,50)',
      selectable: false
  });

  var f3 = new fabric.Rect({
      top: 100,
      left: 300,
      width: 60,
      height: 600,
      fill: 'rgb(200,50,50)',
      selectable: false
  });

  canvas.add(f1);
  canvas.add(f2);
  canvas.add(f3);

}

$(main);
