export function SelectorElements(){
    // Osc Selectors
    this.oscRadios = document.getElementsByName("oscRadios");

    // Waveform/ADSR selectors
    this.oscFunctionMenu = document.getElementById("oscFunctionMenu");

    // Osc containers
    this.oscContainer = document.getElementById("oscContainer");
    this.oscEnvelopeContainer = document.getElementById("oscEnvelopeContainer");
    this.oscADSRCurveContainer = document.getElementById("oscADSRCurveContainer");

    // Osc containers
    this.oscillators = [document.getElementById("oscillator0"),
                        document.getElementById("oscillator1"),
                        document.getElementById("oscillator2"),
                        document.getElementById("oscillator3")];

    // Osc Envelope containers
    this.envelopes = [document.getElementById("oscEnvelope0"),
                    document.getElementById("oscEnvelope1"),
                    document.getElementById("oscEnvelope2"),
                    document.getElementById("oscEnvelope3")];

    this.oscADSRCurves = [document.getElementById("oscADSRCurve0"),
                        document.getElementById("oscADSRCurve1"),
                        document.getElementById("oscADSRCurve2"),
                        document.getElementById("oscADSRCurve3")];

    // Filter selectors
    this.filterRadios = document.getElementsByName("filterRadios");

    // Filter sections
    this.filters = [document.getElementById("filter0"),
                    document.getElementById("filter1")];

    this.filterADSR = [document.getElementById("filterADSRCurve0"),
                        document.getElementById("filterADSRCurve1")];

    this.filterADSRCurve = [document.getElementById("filterADSR0"),
                        document.getElementById("filterADSR1")];

    this.filterFreq = [document.getElementById("filterEnvelopeFreq0"),
                        document.getElementById("filterEnvelopeFreq1")];

    // Filter function selectors
    this.filterFunctionMenu = document.getElementById("filterFunctionMenu");

    this.filterFunctionContainers = [document.getElementById("filterMainContainer"),
                                    document.getElementById("filterADSRContainer"),
                                    document.getElementById("filterADSRCurveContainer"),
                                    document.getElementById("filterFreqContainer")];

    // output selectors
    this.outputMenu = document.getElementById("outputMenu");

    this.outputContainers = [document.getElementById("mainContainer"),
                            document.getElementById("fxContainer"),
                            document.getElementById("presetContainer")];

    // FX selectors

    this.fxMenu = document.getElementById("fxMenu");

    this.fxContainers = [document.getElementById("delayContainer"),
                        document.getElementById("reverbContainer")];

    this.fxToggle = [document.getElementById("delayToggle"),
                    document.getElementById("reverbToggle")];
}

export function MobileSelectorElements(){
    //Tabs/Buttons for mobile
    this.voiceButton = document.getElementById("osc-tab");
    this.ampButton = document.getElementById("amp-tab");
    this.effectsButton = document.getElementById("effects-tab");
    this.panels = {osc: document.getElementById("oscPanel"),
                filter: document.getElementById("filterPanel"),
                output: document.getElementById("outputPanel")};
}