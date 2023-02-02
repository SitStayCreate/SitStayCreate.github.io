import { SelectorElements } from './Components/SelectorElements.js'

var selectorElements = new SelectorElements();

// Osc Container Selectors
// Osc Selectors
function selectContainer(){
    if(oscFunctionMenu.value == "Waveform"){
        selectorElements.oscContainer.hidden = false;
        selectorElements.oscEnvelopeContainer.hidden = true;
        selectorElements.oscADSRCurveContainer.hidden = true;
    } else if(oscFunctionMenu.value == "ADSR"){
        selectorElements.oscContainer.hidden = true;
        selectorElements.oscEnvelopeContainer.hidden = false;
        selectorElements.oscADSRCurveContainer.hidden = true;
    }else {
        selectorElements.oscContainer.hidden = true;
        selectorElements.oscEnvelopeContainer.hidden = true;
        selectorElements.oscADSRCurveContainer.hidden = false;
    }
}

selectorElements.oscFunctionMenu.addEventListener('change', () => {
    selectContainer();
});

// Osc Selectors
function selectOsc(){
    for(var i = 0; i < selectorElements.oscRadios.length; i++){
        if(selectorElements.oscRadios[i].checked){
            selectorElements.oscillators[i].hidden = false;
            selectorElements.envelopes[i].hidden = false;
            selectorElements.oscADSRCurves[i].hidden = false;
        } else {
            selectorElements.oscillators[i].hidden = true;
            selectorElements.envelopes[i].hidden = true;
            selectorElements.oscADSRCurves[i].hidden = true;
        }
    }
}

for(var i = 0; i < selectorElements.oscRadios.length; i++){
    selectorElements.oscRadios[i].addEventListener('change', () => {
        selectOsc();
    });
};


// Filter selection
// Select path
function selectFilter(){
    for(var i = 0; i < selectorElements.filterRadios.length; i++){
        if(selectorElements.filterRadios[i].checked){
            selectorElements.filters[i].hidden = false;
            selectorElements.filterADSR[i].hidden = false;
            selectorElements.filterADSRCurve[i].hidden = false;
            selectorElements.filterFreq[i].hidden = false;
        } else {
            selectorElements.filters[i].hidden = true;
            selectorElements.filterADSR[i].hidden = true;
            selectorElements.filterADSRCurve[i].hidden = true;
            selectorElements.filterFreq[i].hidden = true;
        }
    }
}

selectFilter();

for(var i = 0; i < selectorElements.filterRadios.length; i++){
    selectorElements.filterRadios[i].addEventListener('change', () => {
        selectFilter();
    });
};

// Select Section
function selectFilterFunction(){
    if(selectorElements.filterFunctionMenu.value == "Filter"){
        selectorElements.filterFunctionContainers[0].hidden = false;
        selectorElements.filterFunctionContainers[1].hidden = true;
        selectorElements.filterFunctionContainers[2].hidden = true;
        selectorElements.filterFunctionContainers[3].hidden = true;
    } else if(filterFunctionMenu.value == "ADSR"){
        selectorElements.filterFunctionContainers[0].hidden = true;
        selectorElements.filterFunctionContainers[1].hidden = false;
        selectorElements.filterFunctionContainers[2].hidden = true;
        selectorElements.filterFunctionContainers[3].hidden = true;
    } else if(filterFunctionMenu.value == "ADSRCurve"){
        selectorElements.filterFunctionContainers[0].hidden = true;
        selectorElements.filterFunctionContainers[1].hidden = true;
        selectorElements.filterFunctionContainers[2].hidden = false;
        selectorElements.filterFunctionContainers[3].hidden = true;
    } else {
        selectorElements.filterFunctionContainers[0].hidden = true;
        selectorElements.filterFunctionContainers[1].hidden = true;
        selectorElements.filterFunctionContainers[2].hidden = true;
        selectorElements.filterFunctionContainers[3].hidden = false;
    }
}

selectFilterFunction();

selectorElements.filterFunctionMenu.addEventListener('change', () => {
    selectFilterFunction();
});

// output selection
function selectOutput(){
    if(selectorElements.outputMenu.value == "Main"){
        selectorElements.outputContainers[0].hidden = false;
        selectorElements.outputContainers[1].hidden = true;
        selectorElements.outputContainers[2].hidden = true;
    } else if(selectorElements.outputMenu.value == "Effects") {
        selectorElements.outputContainers[0].hidden = true;
        selectorElements.outputContainers[1].hidden = false;
        selectorElements.outputContainers[2].hidden = true;
    }else {
        selectorElements.outputContainers[0].hidden = true;
        selectorElements.outputContainers[1].hidden = true;
        selectorElements.outputContainers[2].hidden = false;
    }
}

selectOutput();

selectorElements.outputMenu.addEventListener('change', () => {
    selectOutput();
});

// FX selection
function selectFX(){
    if(selectorElements.fxMenu.value == "Delay"){
        selectorElements.fxContainers[0].hidden = false;
        selectorElements.fxToggle[0].hidden = false;
        selectorElements.fxToggle[1].hidden = true;
        selectorElements.fxContainers[1].hidden = true;
    } else {
        selectorElements.fxContainers[0].hidden = true;
        selectorElements.fxToggle[0].hidden = true;
        selectorElements.fxToggle[1].hidden = false;
        selectorElements.fxContainers[1].hidden = false;
    }
}

selectorElements.fxMenu.addEventListener('change', () => {
    selectFX();
});