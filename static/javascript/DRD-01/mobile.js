//html elements

//Tabs/Buttons for mobile
const voiceButton = document.getElementById("osc-tab");
const ampButton = document.getElementById("amp-tab");
const effectsButton = document.getElementById("effects-tab");
const panels = {osc: document.getElementById("oscPanel"),
                filter: document.getElementById("filterPanel"),
                output: document.getElementById("outputPanel")};

// Selection Tabs/Buttons on mobile version
voiceButton.addEventListener("click", (e) => {
    panels.osc.hidden = false;
    panels.filter.hidden = true;
    panels.output.hidden = true;
});

// Selection Tabs/Buttons on mobile version
ampButton.addEventListener("click", (e) => {
    panels.osc.hidden = true;
    panels.filter.hidden = false;
    panels.output.hidden = true;
});

// Selection Tabs/Buttons on mobile version
effectsButton.addEventListener("click", (e) => {
    panels.osc.hidden = true;
    panels.filter.hidden = true;
    panels.output.hidden = false;
});