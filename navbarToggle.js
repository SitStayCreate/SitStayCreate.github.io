var canvas = document.getElementById('myCanvas');
var dropdown = document.getElementById('nav-bar-drop-down');
canvas.addEventListener('click', function(event) {display()});
closedMenu();

function display(){
    if(dropdown.hidden){
        dropdown.hidden = false;
    } else {
        dropdown.hidden = true;
    }
};


function closedMenu(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 20;
    ctx.moveTo(0,canvas.height*.2);
    ctx.lineTo(canvas.width,canvas.height*.2);
    ctx.stroke();
    
    ctx.moveTo(0,canvas.height*.5);
    ctx.lineTo(canvas.width,canvas.height*.5);
    ctx.stroke();
    
    ctx.moveTo(0,canvas.height*.8);
    ctx.lineTo(canvas.width,canvas.height*.8);
    ctx.stroke();
}

// Might not use this
function openMenu(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 20;
    ctx.moveTo(canvas.width*.2,0);
    ctx.lineTo(canvas.width*.2,canvas.height);
    ctx.stroke();
    
    ctx.moveTo(canvas.width*.5,0);
    ctx.lineTo(canvas.width*.5,canvas.height);
    ctx.stroke();
    
    ctx.moveTo(canvas.width*.8,0);
    ctx.lineTo(canvas.width*.8,canvas.height);
    ctx.stroke();
}

// Not working
function clearCanvas(){
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}