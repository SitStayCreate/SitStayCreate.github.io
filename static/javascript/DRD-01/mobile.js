import { MobileSelectorElements } from './Components/SelectorElements.js'
//html elements
var mobileSelectorElements = new MobileSelectorElements();
// Selection Tabs/Buttons on mobile version
mobileSelectorElements.voiceButton.addEventListener("click", (e) => {
    mobileSelectorElements.panels.osc.hidden = false;
    mobileSelectorElements.panels.filter.hidden = true;
    mobileSelectorElements.panels.output.hidden = true;
});

// Selection Tabs/Buttons on mobile version
mobileSelectorElements.ampButton.addEventListener("click", (e) => {
    mobileSelectorElements.panels.osc.hidden = true;
    mobileSelectorElements.panels.filter.hidden = false;
    mobileSelectorElements.panels.output.hidden = true;
});

// Selection Tabs/Buttons on mobile version
mobileSelectorElements.effectsButton.addEventListener("click", (e) => {
    mobileSelectorElements.panels.osc.hidden = true;
    mobileSelectorElements.panels.filter.hidden = true;
    mobileSelectorElements.panels.output.hidden = false;
});