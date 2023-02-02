//html elements
import { AudioElements, LoaderElements } from './Components/DRD01Elements.js'
import { DRD01Schema } from './Schema/DRD01Schema.js'

var audioElements = new AudioElements();
var loaderElements = new LoaderElements();

// Function gets the settings from the constants and returns them as JSON
export function getSettings(elements){
    return JSON.stringify(new DRD01Schema(elements));
}

function loadOscillatorSettings(elements, schema){
    for(var i = 0; i < elements.oscillator.length; i++){
        elements.oscillator[i].on.checked = schema.oscillator[i].on;
        elements.oscillator[i].waveform.value = schema.oscillator[i].waveform;
        elements.oscillator[i].octave.value = schema.oscillator[i].octave;
        elements.oscillator[i].detune.value = schema.oscillator[i].detune;
    }
}

function loadEnvelopeSettings(elements, schema){
    for(var i = 0; i < elements.envelope.length; i++){
        elements.envelope[i].attack.value = schema.envelope[i].attack;
        elements.envelope[i].attackCurve.value = schema.envelope[i].attackCurve;
        elements.envelope[i].decay.value = schema.envelope[i].decay;
        elements.envelope[i].decayCurve.value = schema.envelope[i].decayCurve;
        elements.envelope[i].sustain.value = schema.envelope[i].sustain;
        elements.envelope[i].release.value = schema.envelope[i].release;
        elements.envelope[i].releaseCurve.value = schema.envelope[i].releaseCurve;
    }
}

function loadFilterSettings(elements, schema){
    for(var i = 0; i < elements.filter.length; i++){
        elements.filter[i].type.value = schema.filter[i].type;
        elements.filter[i].frequency.value = schema.filter[i].frequency;
        elements.filter[i].q.value = schema.filter[i].q;
        elements.filter[i].rolloff.value = schema.filter[i].rolloff;
        elements.filter[i].gain.value = schema.filter[i].gain;
    }
}

function loadFilterEnvelopeSettings(elements, schema){
    for(var i = 0; i < elements.filterEnvelope.length; i++){
        elements.filterEnvelope[i].attack.value = schema.filterEnvelope[i].attack;
        elements.filterEnvelope[i].attackCurve.value = schema.filterEnvelope[i].attackCurve;
        elements.filterEnvelope[i].decay.value = schema.filterEnvelope[i].decay;
        elements.filterEnvelope[i].decayCurve.value = schema.filterEnvelope[i].decayCurve;
        elements.filterEnvelope[i].sustain.value = schema.filterEnvelope[i].sustain;
        elements.filterEnvelope[i].release.value = schema.filterEnvelope[i].release;
        elements.filterEnvelope[i].releaseCurve.value = schema.filterEnvelope[i].releaseCurve;
        elements.filterEnvelope[i].baseFrequency.value = schema.filterEnvelope[i].baseFrequency;
        elements.filterEnvelope[i].exponent.value = schema.filterEnvelope[i].exponent;
        elements.filterEnvelope[i].octaves.value = schema.filterEnvelope[i].octaves;
    }
}

function loadMainSettings(elements, schema){
    elements.main.volume.value = schema.main.volume;
    elements.main.centerFrequency.value = schema.main.centerFrequency;
}

function loadDelaySettings(elements, schema){
    elements.delay.on.checked = schema.delay.on;
    elements.delay.timeRange.value = schema.delay.timeRange;
    elements.delay.feedback.value = schema.delay.feedback;
    elements.delay.signalRatio.value = schema.delay.signalRatio;
}

function loadReverbSettings(elements, schema){
    elements.reverb.on.checked = schema.reverb.on;
    elements.reverb.timeRange.value = schema.reverb.timeRange;
    elements.reverb.signalRatio.value = schema.reverb.signalRatio;
}

export function loadSettings(elements, schema){
    loadOscillatorSettings(elements, schema);
    loadEnvelopeSettings(elements, schema);
    loadFilterSettings(elements, schema);
    loadFilterEnvelopeSettings(elements, schema);
    loadMainSettings(elements, schema);
    loadDelaySettings(elements, schema);
    loadReverbSettings(elements, schema);
}

// Copy settings to clipboard
export function copySettings(){
    var JSONString = getSettings(audioElements);
    textLoader.value = JSONString;
}

// TODO: Need new components for these listeners
// Add mouseup listener
saveButton.addEventListener("click", (e) => {
    copySettings();
});

loadButton.addEventListener("click", (e) => {
    var preset = JSON.parse(textLoader.value);
    loadSettings(audioElements, preset);
});