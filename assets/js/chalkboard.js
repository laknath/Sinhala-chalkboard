/* Chalkboard.js - version 0.1 */

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;        

var canvasWidth = 420;
var canvasHeight = 300;

$(document).ready(function init() {
    var canvasDiv = document.getElementById('canvasDiv');
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d");  
    
    $('#canvas').mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });

    $('#canvas').mousemove(function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });
    
    $('#canvas').mouseup(function(e){
        paint = false;
    });
    
    $('#canvas').mouseleave(function(e){
        paint = false;
    });
    
    $('#clear_board').click(function(){        
        clearCanvas();
    });
});

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  canvas.width = canvas.width; // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++)
  {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }  
}

function clearCanvas(){        
    clickX =  new Array();
    clickY = new Array();
    clickDrag = new Array();
    
    canvas.width = canvas.width;
}