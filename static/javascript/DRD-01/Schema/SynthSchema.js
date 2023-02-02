// Pass in a reference to SynthElements
export function Oscillator(Elements, index){
    this.on = Elements.oscillator[index].on.checked;
    this.waveform = Elements.oscillator[index].waveform.value;
    this.octave = Elements.oscillator[index].octave.value;
    this.detune = Elements.oscillator[index].detune.value;
}

export function Envelope(Elements, index){
    this.attack = Elements.envelope[index].attack.value;
    this.attackCurve = Elements.envelope[index].attackCurve.value;
    this.decay = Elements.envelope[index].decay.value;
    this.decayCurve = Elements.envelope[index].decayCurve.value;
    this.sustain = Elements.envelope[index].sustain.value;
    this.release = Elements.envelope[index].release.value;
    this.releaseCurve = Elements.envelope[index].releaseCurve.value;
};

export function Filter(Elements, index){
    this.type = Elements.filter[index].type.value;
    this.rolloff = Elements.filter[index].rolloff.value;
    this.frequency = Elements.filter[index].frequency.value; // TODO: Rename this
    this.q = Elements.filter[index].q.value;
    this.gain = Elements.filter[index].gain.value;
};

export function FilterEnvelope(Elements, index){
    this.attack = Elements.filterEnvelope[index].attack.value;
    this.attackCurve = Elements.filterEnvelope[index].attackCurve.value;
    this.decay = Elements.filterEnvelope[index].decay.value;
    this.decayCurve = Elements.filterEnvelope[index].decayCurve.value;
    this.sustain = Elements.filterEnvelope[index].sustain.value;
    this.release = Elements.filterEnvelope[index].release.value;
    this.releaseCurve = Elements.filterEnvelope[index].releaseCurve.value;
    this.baseFrequency = Elements.filterEnvelope[index].baseFrequency.value;
    this.exponent = Elements.filterEnvelope[index].exponent.value;
    this.octaves = Elements.filterEnvelope[index].octaves.value;
};

export function Main(Elements){
    this.volume = Elements.main.volume.value;
    this.centerFrequency = Elements.main.centerFrequency.value;
};

export function Delay(Elements){
    this.on = Elements.delay.on.checked;
    this.timeRange = Elements.delay.timeRange.value;
    this.feedback = Elements.delay.feedback.value;
    this.signalRatio = Elements.delay.signalRatio.value;
};

export function Reverb(Elements){
    this.on = Elements.reverb.on.checked;
    this.timeRange = Elements.reverb.timeRange.value;
    this.signalRatio = Elements.reverb.signalRatio.value;
};