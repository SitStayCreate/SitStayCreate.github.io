var canvas = document.getElementById('myCanvas');
var dropdown = document.getElementById('nav-bar-drop-down');
canvas.addEventListener('click', function(event) {display()});

function display(){
    if(dropdown.hidden){
        dropdown.hidden = false;
    } else {
        dropdown.hidden = true;
    }
};

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 20;
ctx.moveTo(0,25);
ctx.lineTo(2000,25);
ctx.stroke();

ctx.moveTo(0,75);
ctx.lineTo(2000,75);
ctx.stroke();

ctx.moveTo(0,125);
ctx.lineTo(2000,125);
ctx.stroke();