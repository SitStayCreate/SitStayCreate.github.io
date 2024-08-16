var elem = document.getElementById('myCanvas');
var dropdown = document.getElementById('nav-bar-drop-down');
elem.addEventListener('click', function(event) {display()});

function display(){
    if(dropdown.hidden){
        dropdown.hidden = false;
    } else {
        dropdown.hidden = true;
    }
};