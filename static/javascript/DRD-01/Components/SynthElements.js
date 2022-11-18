export function Oscillator(index){
    this.on = document.getElementById("osc" + [index] + "Toggle");
    this.waveform = document.getElementById("waveform" + [index]);
    this.octave = document.getElementById("osc" + [index] + "oct");
    this.detune = document.getElementById("osc" + [index] + "tune");
}

export function Envelope(index){
    this.attack = document.getElementById("oscAttack" + [index]);
    this.attackCurve = document.getElementById("oscAttackCurve" + [index]);
    this.decay = document.getElementById("oscDecay" + [index]);
    this.decayCurve = document.getElementById("oscDecayCurve" + [index]);
    this.sustain = document.getElementById("oscSustain" + [index]);
    this.release = document.getElementById("oscRelease" + [index]);
    this.releaseCurve = document.getElementById("oscReleaseCurve" + [index]);
}

export function Filter(index){
    this.type = document.getElementById("f" + [index] + "Type");
    this.frequency = document.getElementById("f" + [index] + "Cutoff");
    this.q = document.getElementById("f" + [index] + "Q");
    this.rolloff = document.getElementById("filterRolloff" + [index]);
    this.gain = document.getElementById("gain" + [index]);
}

export function FilterEnvelope(index){
    this.attack = document.getElementById("filterAttack" + [index]);
    this.attackCurve = document.getElementById("filterAttackCurve" + [index]);
    this.decay = document.getElementById("filterDecay" + [index]);
    this.decayCurve = document.getElementById("filterDecayCurve" + [index]);
    this.sustain = document.getElementById("filterSustain" + [index]);
    this.release = document.getElementById("filterRelease" + [index]);
    this.releaseCurve = document.getElementById("filterReleaseCurve" + [index]);
    this.baseFrequency = document.getElementById("filterBaseFrequency" + [index]);
    this.exponent = document.getElementById("filterExponent" + [index]);
    this.octaves = document.getElementById("filterOctaves" + [index]);
}

export function Main() {
    this.volume = document.getElementById("mainVol");
    this.centerFrequency = document.getElementById("centerFreq");
}

export function Delay(){
    this.on = document.getElementById("delayToggle");
    this.timeRange = document.getElementById("delayTime");
    this.feedback = document.getElementById("delayFeedback");
    this.signalRatio = document.getElementById("delayDryWet");
}

export function Reverb() {
    this.on = document.getElementById("reverbToggle");
    this.timeRange = document.getElementById("reverbTime");
    this.signalRatio = document.getElementById("reverbDryWet");
}