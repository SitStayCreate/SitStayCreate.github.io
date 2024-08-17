var listContainer = document.getElementById("list-container");
var buttonContainer = document.getElementById("button-container");
adjustNavbar();
function adjustNavbar(){
    if(window.screen.availWidth < 600){
        console.log("show button container")
        listContainer.hidden = "true";
    } else {
        console.log("show list container")
        buttonContainer.hidden="true";
    }
}