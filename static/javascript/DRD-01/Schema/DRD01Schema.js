import { Oscillator, Envelope, Filter, FilterEnvelope, Main, Reverb, Delay } from './SynthSchema.js'
// Pass in a reference to DRD01Elements
export function DRD01Schema(DRD01Elements){
    this.oscillator = [
        new Oscillator(DRD01Elements, 0),
        new Oscillator(DRD01Elements, 1),
        new Oscillator(DRD01Elements, 2),
        new Oscillator(DRD01Elements, 3)
    ];
    this.envelope = [
        new Envelope(DRD01Elements, 0),
        new Envelope(DRD01Elements, 1),
        new Envelope(DRD01Elements, 2),
        new Envelope(DRD01Elements, 3)
    ];
    this.filter = [
        new Filter(DRD01Elements, 0),
        new Filter(DRD01Elements, 1)
    ];
    this.filterEnvelope = [
        new FilterEnvelope(DRD01Elements, 0),
        new FilterEnvelope(DRD01Elements, 1)
    ];
    this.main = new Main(DRD01Elements);
    this.delay = new Delay(DRD01Elements);
    this.reverb = new Reverb(DRD01Elements);
}