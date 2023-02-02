import {MonoSynth, FeedbackDelay, Reverb} from 'tone';
// import { Tone } from 'tone/build/esm/core/Tone';
import { start } from 'tone';

//html elements

//Tabs/Buttons
const voiceButton = document.getElementById("voices-tab");
const ampButton = document.getElementById("amp-tab");
const effectsButton = document.getElementById("effects-tab");

//Synth

//Containers for Voices
const vRadios = document.getElementsByName("voiceRadios");
const vContainers = document.getElementsByClassName("voices");

//Oscillator settings
const waveForm0 = document.getElementById("waveform0");
const waveForm1 = document.getElementById("waveform1");
const waveForm2 = document.getElementById("waveform2");
const waveForm3 = document.getElementById("waveform3");

const osc0Oct = document.getElementById("osc0oct");
const osc1Oct = document.getElementById("osc1oct");
const osc2Oct = document.getElementById("osc2oct");
const osc3Oct = document.getElementById("osc3oct");

const osc0tune = document.getElementById("osc0tune");
const osc1tune = document.getElementById("osc1tune");
const osc2tune = document.getElementById("osc2tune");
const osc3tune = document.getElementById("osc3tune");

const osc0Toggle = document.getElementById("osc0Toggle");
const osc1Toggle = document.getElementById("osc1Toggle");
const osc2Toggle = document.getElementById("osc2Toggle");
const osc3Toggle = document.getElementById("osc3Toggle");

//Filter settings
const vcf0Input = document.getElementById("f0Type");
const vcf1Input = document.getElementById("f1Type");
const vcf2Input = document.getElementById("f2Type");
const vcf3Input = document.getElementById("f3Type");

const f0Cutoff = document.getElementById("f0Cutoff");
const f1Cutoff = document.getElementById("f1Cutoff");
const f2Cutoff = document.getElementById("f2Cutoff");
const f3Cutoff = document.getElementById("f3Cutoff");

const f0Q = document.getElementById("f0Q");
const f1Q = document.getElementById("f1Q");
const f2Q = document.getElementById("f2Q");
const f3Q = document.getElementById("f3Q");

//Amplifier

//ADSR settings
const attackRange = document.getElementById("Attack");
const decayRange = document.getElementById("Decay");
const sustainRange = document.getElementById("Sustain");
const releaseRange = document.getElementById("Release");

//Main
const mainVolRange = document.getElementById("mainVol");
const centerFreqInput = document.getElementById("centerFreq");

//FX

//Delay html elements
const dToggle = document.getElementById("delayToggle");
const dTimeRange = document.getElementById("delayTime");
const dFeedbackRange = document.getElementById("delayFeedback");
const dMixRange = document.getElementById("delayDryWet");

//Reverb html elements
const rToggle = document.getElementById("reverbToggle");
const rTimeRange = document.getElementById("reverbTime");
const rMixRange = document.getElementById("reverbDryWet");

//Touchstrip
const touchstrip = document.getElementById("touchstrip");

/*represents the frequency the instrument is tuned around - 
will have a range of +1 oct and -1 oct
*/
var centerFreq = parseInt(centerFreqInput.value);
var voice0Freq = centerFreq;
var voice1Freq = centerFreq;
var voice2Freq = centerFreq;
var voice3Freq = centerFreq;

//sound sources
//TODO: which field controls volume?
var voice0 = new MonoSynth({
    oscillator: {
        type: waveForm0.value,
        frequency: voice0Freq,
        detune: osc0tune.value,
    },
    envelope: {
        attack: attackRange.value,
        decay: decayRange.value,
        sustain: sustainRange.value,
        release: releaseRange.value
    },
    filter: {
        type: vcf0Input.value,
        frequency: f0Cutoff.value,
        rolloff: -12,
        Q: f0Q.value,
        gain: 0
    },
    volume: mainVolRange.value
});

var voice1 = new MonoSynth({
    oscillator: {
        type: waveForm1.value,
        frequency: voice1Freq,
        detune: osc1tune.value
    },
    envelope: {
        attack: attackRange.value,
        decay: decayRange.value,
        sustain: sustainRange.value,
        release: releaseRange.value
    },
    filter: {
        type: vcf1Input.value,
        frequency: f1Cutoff.value,
        rolloff: -12,
        Q: f1Q.value,
        gain: 0
    },
    volume: mainVolRange.value
});

var voice2 = new MonoSynth({
    oscillator: {
        type: waveForm2.value,
        frequency: voice2Freq,
        detune: osc2tune.value
    },
    envelope: {
        attack: attackRange.value,
        decay: decayRange.value,
        sustain: sustainRange.value,
        release: releaseRange.value
    },
    filter: {
        type: vcf2Input.value,
        frequency: f2Cutoff.value,
        rolloff: -12,
        Q: f2Q.value,
        gain: 0
    },
    volume: mainVolRange.value
});

var voice3 = new MonoSynth({
    oscillator: {
        type: waveForm3.value,
        frequency: voice3Freq,
        detune: osc3tune.value
    },
    envelope: {
        attack: attackRange.value,
        decay: decayRange.value,
        sustain: sustainRange.value,
        release: releaseRange.value
    },
    filter: {
        type: vcf3Input.value,
        frequency: f3Cutoff.value,
        rolloff: -12,
        Q: f3Q.value,
        gain: 0
    },
    volume: mainVolRange.value
});

const feedbackDelay = new FeedbackDelay("8n", 0.5);
const reverb = new Reverb(1).toDestination();
//initialized turned off
feedbackDelay.wet.value = 0;
reverb.wet.value = 0;
feedbackDelay.connect(reverb);
voice0.connect(feedbackDelay);
voice1.connect(feedbackDelay);
voice2.connect(feedbackDelay);
voice3.connect(feedbackDelay);

//Voice Selectors
function selectVoices(){
    for(var i = 0; i < vRadios.length; i++){
        if(vRadios[i].checked){
            vContainers[i].hidden = false;
        } else {
            vContainers[i].hidden = true;
        }
    }
}

//TODO: You should be setting these original properties in HTML, not here, but this is a nice trick for now
selectVoices();

for(var i = 0; i < vRadios.length; i++){
    vRadios[i].addEventListener('change', () => {
        selectVoices();
    });
};

//OSCs
waveForm0.addEventListener('change', () => {
    voice0.oscillator.type = waveForm0.value;
});

waveForm1.addEventListener('change', () => {
    voice1.oscillator.type = waveForm1.value;
});

waveForm2.addEventListener('change', () => {
    voice2.oscillator.type = waveForm2.value;
});

waveForm3.addEventListener('change', () => {
    voice3.oscillator.type = waveForm3.value;
});


osc0Oct.addEventListener('change', () => {
    if(osc0Oct.value > 0){
        voice0Freq = centerFreq * (osc0Oct.value * 2);
    } else if(osc0Oct.value == 0){
        voice0Freq = centerFreq;
    } else {
        voice0Freq = centerFreq / Math.abs(osc0Oct.value * 2);
    }

    voice0.frequency.value = voice0Freq;
});

osc0tune.addEventListener('change', () => {
    voice0.oscillator.detune.value = osc0tune.value;
});

osc0Toggle.addEventListener('change', () => {
    if(osc0Toggle.checked){
        voice0.connect(feedbackDelay);
    } else {
        voice0.disconnect();
    }
});

osc1Oct.addEventListener('change', () => {
    if(osc1Oct.value > 0){
        voice1Freq = centerFreq * (osc1Oct.value * 2);
    } else if(osc1Oct.value == 0){
        voice1Freq = centerFreq;
    } else {
        voice1Freq = centerFreq / Math.abs(osc1Oct.value * 2);
    }

    voice1.frequency.value = voice1Freq;
});

osc1tune.addEventListener('change', () => {
    voice1.oscillator.detune.value = osc1tune.value;
});

osc1Toggle.addEventListener('change', () => {
    if(osc1Toggle.checked){
        voice1.connect(feedbackDelay);
    } else {
        voice1.disconnect();
    }
});

osc2Oct.addEventListener('change', () => {
    if(osc2Oct.value > 0){
        voice2Freq = centerFreq * (osc2Oct.value * 2);
    } else if(osc2Oct.value == 0){
        voice2Freq = centerFreq;
    } else {
        voice2Freq = centerFreq / Math.abs(osc2Oct.value * 2);
    }

    voice2.frequency.value = voice2Freq;
});

osc2tune.addEventListener('change', () => {
    voice2.oscillator.detune.value = osc2tune.value;
});

osc2Toggle.addEventListener('change', () => {
    if(osc2Toggle.checked){
        voice2.connect(feedbackDelay);
    } else {
        voice2.disconnect();
    }
});

osc3Oct.addEventListener('change', () => {
    if(osc3Oct.value > 0){
        voice3Freq = centerFreq * (osc3Oct.value * 2);
    } else if(osc3Oct.value == 0){
        voice3Freq = centerFreq;
    } else {
        voice3Freq = centerFreq / Math.abs(osc3Oct.value * 2);
    }

    voice3.frequency.value = voice3Freq;
});

osc3tune.addEventListener('change', () => {
    voice3.oscillator.detune.value = osc3tune.value;
});

osc3Toggle.addEventListener('change', () => {
    if(osc3Toggle.checked){
        voice3.connect(feedbackDelay);
    } else {
        voice3.disconnect();
    }
});


//Filter
vcf0Input.addEventListener('change', () => {
    voice0.filter.type = vcf0Input.value;
});

vcf1Input.addEventListener('change', () => {
    voice1.filter.type = vcf1Input.value;
});

vcf2Input.addEventListener('change', () => {
    voice2.filter.type = vcf2Input.value;
});

vcf3Input.addEventListener('change', () => {
    voice3.filter.type = vcf3Input.value;
});

f0Cutoff.addEventListener('change', () => {
    voice0.filter.frequency.value = f0Cutoff.value;
});

f1Cutoff.addEventListener('change', () => {
    voice1.filter.frequency.value = f1Cutoff.value;
});

f2Cutoff.addEventListener('change', () => {
    voice2.filter.frequency.value = f2Cutoff.value;
});

f3Cutoff.addEventListener('change', () => {
    voice3.filter.frequency.value = f3Cutoff.value;
});

f0Q.addEventListener('change', () => {
    voice0.filter.Q.value = f0Q.value;
});

f1Q.addEventListener('change', () => {
    voice1.filter.Q.value = f1Q.value;
});

f2Q.addEventListener('change', () => {
    voice2.filter.Q.value = f2Q.value;
});

f3Q.addEventListener('change', () => {
    voice3.filter.Q.value = f3Q.value;
});

//Amp 

//Env
attackRange.addEventListener('change', () => {
    voice0.envelope.attack = attackRange.value;
    voice1.envelope.attack = attackRange.value;
    voice2.envelope.attack = attackRange.value;
    voice3.envelope.attack = attackRange.value;
});

decayRange.addEventListener('change', () => {
    voice0.envelope.decay = decayRange.value;
    voice1.envelope.decay = decayRange.value;
    voice2.envelope.decay = decayRange.value;
    voice3.envelope.decay = decayRange.value;
});

sustainRange.addEventListener('change', () => {
    voice0.envelope.sustain = sustainRange.value;
    voice1.envelope.sustain = sustainRange.value;
    voice2.envelope.sustain = sustainRange.value;
    voice3.envelope.sustain = sustainRange.value;
});

releaseRange.addEventListener('change', () => {
    voice0.envelope.release = releaseRange.value;
    voice1.envelope.release = releaseRange.value;
    voice2.envelope.release = releaseRange.value;
    voice3.envelope.release = releaseRange.value;
});

//Main
mainVolRange.addEventListener('change', () => {
    voice0.volume.value =  mainVolRange.value;
    voice1.volume.value =  mainVolRange.value;
    voice2.volume.value =  mainVolRange.value;
    voice3.volume.value =  mainVolRange.value;
});

centerFreqInput.addEventListener('change', () => {
    centerFreq = centerFreqInput.value;
    voice0.frequency.value =  centerFreq;
    voice1.frequency.value =  centerFreq;
    voice2.frequency.value =  centerFreq;
    voice3.frequency.value =  centerFreq;
});

//FX

//Delay
dToggle.addEventListener('change', () => {
    if(dToggle.checked){
        feedbackDelay.wet.value = dFeedbackRange.value;
    } else {
        feedbackDelay.wet.value = 0;
    }
});

dTimeRange.addEventListener('change', () => {
    feedbackDelay.delayTime.value = dTimeRange.value;
});

dFeedbackRange.addEventListener('change', () => {
    feedbackDelay.feedback.value = dFeedbackRange.value;
});

dMixRange.addEventListener('change', () => {
    if(dToggle.checked){
        feedbackDelay.wet.value = dMixRange.value;
    }
});

//Reverb
rToggle.addEventListener('change', () => {
    if(rToggle.checked){
        reverb.wet.value = rMixRange.value;
    } else {
        reverb.wet.value = 0;
    }
});

rTimeRange.addEventListener('change', () => {
    reverb.decay = rTimeRange.value;
});

rMixRange.addEventListener('change', () => {
    if(rToggle.checked){
        reverb.wet.value = rMixRange.value;
    }
});

// Keyboard
// Function returns the xPosition of the mouse
function getXPosition(e) {
    // Get target element's width
    var maxWidth = document.getElementById("touchstrip").clientWidth;
    // Get x coordinate from event
    var xOffset = e.offsetX;
    // Make polar with center being 0, poles=1
    var xPosition = 2 * (xOffset - (maxWidth / 2)) / maxWidth;
    return xPosition;
}
// This function takes the output from the touchstrip
// and the center frequency
// and turns it into a frequency measured in Hz
function calcFreq(input, centerFreq)
{
    // This stores the calculated frequency and is returned
    var modFrequency;
    // Right half of touchstrip
    if(input >= 0){
        //eg 440 + (440 * 1) = 880, 440 + (440 * .5) = 660
        modFrequency = centerFreq + (centerFreq * input);
    // Left half of touchstrip
    } else {
        // eg 440 + (440/2 * -1) = 220, 440 + (440/2 * -.5) = 330
        modFrequency = centerFreq + ((centerFreq/2) * input);
    }
    
    return modFrequency;
}

// This function plays the sound
function playNote()
{
    voice0.triggerAttack();
    voice1.triggerAttack();
    voice2.triggerAttack();
    voice3.triggerAttack();

}

// This function tunes the sound
function tuneNote(xPosition)
{
    voice0.oscillator.frequency.value = calcFreq(
        xPosition, 
        voice0Freq
    );
    voice1.oscillator.frequency.value = calcFreq(
        xPosition, 
        voice1Freq
    );
    voice2.oscillator.frequency.value = calcFreq(
        xPosition, 
        voice2Freq
    );
    voice3.oscillator.frequency.value = calcFreq(
        xPosition, 
        voice3Freq
    );
}

// This function stops the sound
function releaseNote()
{
    voice0.triggerRelease();
    voice1.triggerRelease();
    voice2.triggerRelease();
    voice3.triggerRelease();
}

// Add event listeners to touchstrip
// Create a bool for tracking audio state (has start() been called?)
var audioIsOff = true;
// This listener starts audio the first time the touchstrip is clicked
// This is necessary for the tone.js library
touchstrip.addEventListener("click", async () => {
    // If audio is not started (start() has not been called)
    if(audioIsOff)
    {
        console.log('audio is starting');
        // Call start
        await start();
        // set audioIsOff to true
        audioIsOff = false;
        console.log('audio is ready');
    }
});
// Tracks whether or not mouse is pressed
var mouseDown = false;
// Add mousedown listener
touchstrip.addEventListener("mousedown", (e) => {
    // Set mouseDown true
    mouseDown=true;
    var xPosition = getXPosition(e);
    playNote();
    tuneNote(xPosition);
});

// Add mouseup listener
touchstrip.addEventListener("mouseup", (e) => {
    // Set mouseDown false
    mouseDown=false;
    releaseNote();
});

// Add mousemove listener
touchstrip.addEventListener("mousemove", (e) => {
    // If mouse is pressed
    if(mouseDown){
        // Get x coordinate from event
        var xPosition = getXPosition(e);
        // Update note pitch
        tuneNote(xPosition);
    }
});

// Selection Tabs/Buttons
voiceButton.addEventListener("click", (e) => {
    //TODO: Show/Hide sections
    document.getElementById("VoicesPanel").hidden = true;
    document.getElementById("AmpPanel").hidden = false;
    document.getElementById("EffectsPanel").hidden = false;
});

// Selection Tabs/Buttons
ampButton.addEventListener("click", (e) => {
    //TODO: Show/Hide sections
    document.getElementById("VoicesPanel").hidden = false;
    document.getElementById("AmpPanel").hidden = true;
    document.getElementById("EffectsPanel").hidden = false;
});

// Selection Tabs/Buttons
effectsButton.addEventListener("click", (e) => {
    document.getElementById("VoicesPanel").hidden = false;
    document.getElementById("AmpPanel").hidden = false;
    document.getElementById("EffectsPanel").hidden = true;
    //TODO: Show/Hide sections
});

// TODO: Preset loading and saving feature using external files