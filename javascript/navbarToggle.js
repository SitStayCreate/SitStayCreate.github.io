var canvas = document.getElementById('myCanvas');
var curtainMenu = document.getElementById('curtain-menu');
var boolOpen = false;
canvas.addEventListener('click', function(event) {display()});
styleCanvas();

function display(){
    if(boolOpen){
        closeNav();
        boolOpen = false;
    } else {
        openNav();
        boolOpen = true;
    }
};


function styleCanvas(){
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

/* Open when someone clicks on the span element */
function openNav() {
    curtainMenu.style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    curtainMenu.style.width = "0%";
  }

  /* Attribution: Based on a W3Schools tutorial https://www.w3schools.com/howto/howto_js_curtain_menu.asp */