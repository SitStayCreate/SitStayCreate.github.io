import { Oscillator, Envelope, Filter, FilterEnvelope, Main, Reverb, Delay } from './SynthElements.js'

export function AudioElements(){
    this.oscillator = [new Oscillator(0),
                    new Oscillator(1),
                    new Oscillator(2),
                    new Oscillator(3)];

    this.envelope = [new Envelope(0),
                    new Envelope(1),
                    new Envelope(2),
                    new Envelope(3)];

    this.filter = [new Filter(0),
                new Filter(1)];

    this.filterEnvelope = [new FilterEnvelope(0),
                        new FilterEnvelope(1)];
    this.main = new Main();
    this.delay = new Delay();
    this.reverb = new Reverb();
}

export function LoaderElements(){
    this.saveButton = document.getElementById("saveButton");
    this.loadButton = document.getElementById("loadButton");
    this.textLoader = document.getElementById("textLoader");
}

export function TouchstripElements(){
    this.touchstrip = document.getElementById("touchstrip");
    this.touchstripLabel0 = document.getElementById("touchstrip-label0");
    this.touchstripLabel1 = document.getElementById("touchstrip-label1");
}