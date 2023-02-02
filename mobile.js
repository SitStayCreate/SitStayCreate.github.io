//html elements

//Tabs/Buttons for mobile
const voiceButton = document.getElementById("voices-tab");
const ampButton = document.getElementById("amp-tab");
const effectsButton = document.getElementById("effects-tab");

// Section selectors for mobile
// Voices
const voiceSectionSelector0 = document.getElementById("voice-section-selector0");
const voiceSectionSelector1 = document.getElementById("voice-section-selector1");
const voiceSectionSelector2 = document.getElementById("voice-section-selector2");
const voiceSectionSelector3 = document.getElementById("voice-section-selector3");
const osc0Container = document.getElementById("osc0-container");
const osc1Container = document.getElementById("osc1-container");
const osc2Container = document.getElementById("osc2-container");
const osc3Container = document.getElementById("osc3-container");
const filter0Container = document.getElementById("filter0-container");
const filter1Container = document.getElementById("filter1-container");
const filter2Container = document.getElementById("filter2-container");
const filter3Container = document.getElementById("filter3-container");

// Selection Tabs/Buttons on mobile version
voiceButton.addEventListener("click", (e) => {
    //TODO: Show/Hide sections
    document.getElementById("VoicesPanel").hidden = false;
    document.getElementById("AmpPanel").hidden = true;
    document.getElementById("EffectsPanel").hidden = true;
});

// Selection Tabs/Buttons on mobile version
ampButton.addEventListener("click", (e) => {
    //TODO: Show/Hide sections
    document.getElementById("VoicesPanel").hidden = true;
    document.getElementById("AmpPanel").hidden = false;
    document.getElementById("EffectsPanel").hidden = true;
});

// Selection Tabs/Buttons on mobile version
effectsButton.addEventListener("click", (e) => {
    document.getElementById("VoicesPanel").hidden = true;
    document.getElementById("AmpPanel").hidden = true;
    document.getElementById("EffectsPanel").hidden = false;
});

// Show/Hide Filter/Osc on mobile version
voiceSectionSelector0.addEventListener("change", (e) => {
    // If toggle is set to filter, value is 1
    if(e.target.value == 1)
    {
        osc0Container.hidden = true;
        filter0Container.hidden = false;
    } else 
    {
        osc0Container.hidden = false;
        filter0Container.hidden = true;    
    }
    //TODO: Show/Hide sections
});

voiceSectionSelector1.addEventListener("change", (e) => {
    // If toggle is set to filter, value is 1
    if(e.target.value == 1)
    {
        osc1Container.hidden = true;
        filter1Container.hidden = false;
    } else 
    {
        osc1Container.hidden = false;
        filter1Container.hidden = true;    
    }
});

voiceSectionSelector2.addEventListener("change", (e) => {
    // If toggle is set to filter, value is 1
    if(e.target.value == 1)
    {
        osc2Container.hidden = true;
        filter2Container.hidden = false;
    } else 
    {
        osc2Container.hidden = false;
        filter2Container.hidden = true;    
    }
});

voiceSectionSelector3.addEventListener("change", (e) => {
    // If toggle is set to filter, value is 1
    if(e.target.value == 1)
    {
        osc3Container.hidden = true;
        filter3Container.hidden = false;
    } else 
    {
        osc3Container.hidden = false;
        filter3Container.hidden = true;    
    }
});

// Show/hide Envelope/Main on mobile version
ampSectionSelector.addEventListener("change", (e) => {
    // If toggle is set to filter, value is 1
    if(e.target.value == 1)
    {
        envelopeContainer.hidden = true;
        mainContainer.hidden = false;
    } else 
    {
        envelopeContainer.hidden = false;
        mainContainer.hidden = true;    
    }
});

// Show/hide Delay/Reverb on mobile version
fxSectionSelector.addEventListener("change", (e) => {
    // If toggle is set to filter, value is 1
    if(e.target.value == 1)
    {
        dlyContainer.hidden = true;
        rvrbContainer.hidden = false;
    } else 
    {
        dlyContainer.hidden = false;
        rvrbContainer.hidden = true;    
    }
});