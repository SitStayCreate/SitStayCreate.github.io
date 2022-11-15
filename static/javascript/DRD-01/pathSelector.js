// Osc Selectors
const oscRadios = document.getElementsByName("oscRadios");
// Waveform/ADSR selectors
const oscFunctionMenu = document.getElementById("oscFunctionMenu");


// Osc containers
const oscContainer = document.getElementById("oscContainer");
const oscEnvelopeContainer = document.getElementById("oscEnvelopeContainer");
const oscADSRCurveContainer = document.getElementById("oscADSRCurveContainer");

// Osc containers
const oscillators = [document.getElementById("oscillator0"),
                    document.getElementById("oscillator1"),
                    document.getElementById("oscillator2"),
                    document.getElementById("oscillator3")];

// Osc Envelope containers
const envelopes = [document.getElementById("oscEnvelope0"),
                document.getElementById("oscEnvelope1"),
                document.getElementById("oscEnvelope2"),
                document.getElementById("oscEnvelope3")];

const oscADSRCurves = [document.getElementById("oscADSRCurve0"),
                    document.getElementById("oscADSRCurve1"),
                    document.getElementById("oscADSRCurve2"),
                    document.getElementById("oscADSRCurve3")];

// Filter selectors
const filterRadios = document.getElementsByName("filterRadios");

// Filter sections
const filters = [document.getElementById("filter0"),
                document.getElementById("filter1")];

const filterADSR = [document.getElementById("filterADSRCurve0"),
                    document.getElementById("filterADSRCurve1")];

const filterADSRCurve = [document.getElementById("filterADSR0"),
                    document.getElementById("filterADSR1")];

const filterFreq = [document.getElementById("filterEnvelopeFreq0"),
                    document.getElementById("filterEnvelopeFreq1")];

// Filter function selectors
const filterFunctionMenu = document.getElementById("filterFunctionMenu");
const filterFunctionContainers = [document.getElementById("filterMainContainer"),
                                document.getElementById("filterADSRContainer"),
                                document.getElementById("filterADSRCurveContainer"),
                                document.getElementById("filterFreqContainer")];

// output selectors
const outputRadios = document.getElementsByName("outputRadios");
const outputContainers = [document.getElementById("mainContainer"),
                        document.getElementById("fxContainer")]

// FX selectors
const fxRadios = document.getElementById("fxMenu");
const fxContainers = [document.getElementById("delayContainer"),
                    document.getElementById("reverbContainer")];
const fxToggle = [document.getElementById("delayToggle"),
                document.getElementById("reverbToggle")];

// Osc Container Selectors
// Osc Selectors
function selectContainer(){
    if(oscFunctionMenu.value == "Waveform"){
        oscContainer.hidden = false;
        oscEnvelopeContainer.hidden = true;
        oscADSRCurveContainer.hidden = true;
    } else if(oscFunctionMenu.value == "ADSR"){
        oscContainer.hidden = true;
        oscEnvelopeContainer.hidden = false;
        oscADSRCurveContainer.hidden = true;
    }else {
        oscContainer.hidden = true;
        oscEnvelopeContainer.hidden = true;
        oscADSRCurveContainer.hidden = false;
    }
}

oscFunctionMenu.addEventListener('change', () => {
    selectContainer();
});

// Osc Selectors
function selectOsc(){
    for(var i = 0; i < oscRadios.length; i++){
        if(oscRadios[i].checked){
            oscillators[i].hidden = false;
            envelopes[i].hidden = false;
            oscADSRCurves[i].hidden = false;
        } else {
            oscillators[i].hidden = true;
            envelopes[i].hidden = true;
            oscADSRCurves[i].hidden = true;
        }
    }
}

for(var i = 0; i < oscRadios.length; i++){
    oscRadios[i].addEventListener('change', () => {
        selectOsc();
    });
};


// Filter selection
// Select path
function selectFilter(){
    for(var i = 0; i < filterRadios.length; i++){
        if(filterRadios[i].checked){
            filters[i].hidden = false;
            filterADSR[i].hidden = false;
            filterADSRCurve[i].hidden = false;
            filterFreq[i].hidden = false;
        } else {
            filters[i].hidden = true;
            filterADSR[i].hidden = true;
            filterADSRCurve[i].hidden = true;
            filterFreq[i].hidden = true;
        }
    }
}

selectFilter();

for(var i = 0; i < filterRadios.length; i++){
    filterRadios[i].addEventListener('change', () => {
        selectFilter();
    });
};

// Select Section
function selectFilterFunction(){
    if(filterFunctionMenu.value == "Filter"){
        filterFunctionContainers[0].hidden = false;
        filterFunctionContainers[1].hidden = true;
        filterFunctionContainers[2].hidden = true;
        filterFunctionContainers[3].hidden = true;
    } else if(filterFunctionMenu.value == "ADSR"){
        filterFunctionContainers[0].hidden = true;
        filterFunctionContainers[1].hidden = false;
        filterFunctionContainers[2].hidden = true;
        filterFunctionContainers[3].hidden = true;
    } else if(filterFunctionMenu.value == "ADSRCurve"){
        filterFunctionContainers[0].hidden = true;
        filterFunctionContainers[1].hidden = true;
        filterFunctionContainers[2].hidden = false;
        filterFunctionContainers[3].hidden = true;
    } else {
        filterFunctionContainers[0].hidden = true;
        filterFunctionContainers[1].hidden = true;
        filterFunctionContainers[2].hidden = true;
        filterFunctionContainers[3].hidden = false;
    }
}

selectFilterFunction();

filterFunctionMenu.addEventListener('change', () => {
    selectFilterFunction();
});

// output selection
function selectOutput(){
    for(var i = 0; i < fxRadios.length; i++){
        if(outputRadios[i].checked){
            outputContainers[i].hidden = false;
        } else {
            outputContainers[i].hidden = true;
        }
    }
}

selectOutput();

for(var i = 0; i < fxRadios.length; i++){
    outputRadios[i].addEventListener('change', () => {
        selectOutput();
    });
};

// FX selection
function selectFX(){
    if(fxMenu.value == "Delay"){
        fxContainers[0].hidden = false;
        fxToggle[0].hidden = false;
        fxToggle[1].hidden = true;
        fxContainers[1].hidden = true;
    } else {
        fxContainers[0].hidden = true;
        fxToggle[0].hidden = true;
        fxToggle[1].hidden = false;
        fxContainers[1].hidden = false;
    }
}

fxMenu.addEventListener('change', () => {
    selectFX();
});