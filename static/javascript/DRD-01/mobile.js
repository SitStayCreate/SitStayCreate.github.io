<<<<<<< HEAD
(()=>{const e=document.getElementById("voices-tab"),n=document.getElementById("amp-tab"),t=document.getElementById("effects-tab"),d=document.getElementById("voice-section-selector0"),c=document.getElementById("voice-section-selector1"),i=document.getElementById("voice-section-selector2"),o=document.getElementById("voice-section-selector3"),m=document.getElementById("osc0-container"),l=document.getElementById("osc1-container"),a=document.getElementById("osc2-container"),g=document.getElementById("osc3-container"),E=document.getElementById("filter0-container"),h=document.getElementById("filter1-container"),r=document.getElementById("filter2-container"),u=document.getElementById("filter3-container"),s=document.getElementById("amp-section-selector"),y=document.getElementById("envelope-container"),B=document.getElementById("main-container"),I=document.getElementById("fx-section-selector"),v=document.getElementById("dly-container"),f=document.getElementById("rvrb-container");e.addEventListener("click",(e=>{document.getElementById("VoicesPanel").hidden=!1,document.getElementById("AmpPanel").hidden=!0,document.getElementById("EffectsPanel").hidden=!0})),n.addEventListener("click",(e=>{document.getElementById("VoicesPanel").hidden=!0,document.getElementById("AmpPanel").hidden=!1,document.getElementById("EffectsPanel").hidden=!0})),t.addEventListener("click",(e=>{document.getElementById("VoicesPanel").hidden=!0,document.getElementById("AmpPanel").hidden=!0,document.getElementById("EffectsPanel").hidden=!1})),d.addEventListener("change",(e=>{1==e.target.value?(m.hidden=!0,E.hidden=!1):(m.hidden=!1,E.hidden=!0)})),c.addEventListener("change",(e=>{1==e.target.value?(l.hidden=!0,h.hidden=!1):(l.hidden=!1,h.hidden=!0)})),i.addEventListener("change",(e=>{1==e.target.value?(a.hidden=!0,r.hidden=!1):(a.hidden=!1,r.hidden=!0)})),o.addEventListener("change",(e=>{1==e.target.value?(g.hidden=!0,u.hidden=!1):(g.hidden=!1,u.hidden=!0)})),s.addEventListener("change",(e=>{1==e.target.value?(y.hidden=!0,B.hidden=!1):(y.hidden=!1,B.hidden=!0)})),I.addEventListener("change",(e=>{1==e.target.value?(v.hidden=!0,f.hidden=!1):(v.hidden=!1,f.hidden=!0)}))})();
=======
import { MobileSelectorElements } from './Components/SelectorElements.js'
//html elements
var mobileSelectorElements = new MobileSelectorElements();
// Selection Tabs/Buttons on mobile version
mobileSelectorElements.voiceButton.addEventListener("click", (e) => {
    mobileSelectorElements.panels.osc.hidden = false;
    mobileSelectorElements.panels.filter.hidden = true;
    mobileSelectorElements.panels.output.hidden = true;
});

// Selection Tabs/Buttons on mobile version
mobileSelectorElements.ampButton.addEventListener("click", (e) => {
    mobileSelectorElements.panels.osc.hidden = true;
    mobileSelectorElements.panels.filter.hidden = false;
    mobileSelectorElements.panels.output.hidden = true;
});

// Selection Tabs/Buttons on mobile version
mobileSelectorElements.effectsButton.addEventListener("click", (e) => {
    mobileSelectorElements.panels.osc.hidden = true;
    mobileSelectorElements.panels.filter.hidden = true;
    mobileSelectorElements.panels.output.hidden = false;
});
>>>>>>> f67a2dc306dac08654bf0e268dd69f5a133594fe