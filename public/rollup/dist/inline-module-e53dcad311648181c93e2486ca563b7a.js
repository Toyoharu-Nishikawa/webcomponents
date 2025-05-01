import * as Person from '@/dataStore/person.js';
import { importFiles } from 'node_modules/filereader/index.js';
import * as Settings from '@/dataStore/settings.js';
import { CustomElem as CustomElem$g } from 'neco-components/minijscad/index.js';
import { CustomElem as CustomElem$h } from 'neco-components/plotly/index.js';
import { utility } from '@/database/utility.js';

const TAG_NAME$f = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$c = () => /*html*/`
<style>
  :host{
    width: 100%;
    height: 100%;
    display: grid;
    --grid-template-rows: 75px 1fr 30px;
    --grid-template-columns: 200px 300px 1fr 150px;
 
    grid-template-rows: var(--grid-template-rows);
    grid-template-columns: var(--grid-template-columns);
    --header-girid-row   : 1/2;
    --header-girid-column: 1/3;
    --menu-girid-row     : 1/2;
    --menu-girid-column  : 3/-1;
    --pin-girid-row      : 1/2;
    --pin-girid-column   : 4/5;
    --aside-girid-row    : 2/3;
    --aside-girid-column : 1/2;
    --main-girid-row     : 2/3;
    --main-girid-column  : 2/-1;
    --footer-girid-row   : 3/4;
    --footer-girid-column: 1/-1;
  }
  ::slotted([name=header]) {
    grid-row   : var(--header-girid-row);
    grid-column: var(--header-girid-column);
  }
  ::slotted([name=menu]) {
    grid-row   : var(--menu-girid-row);
    grid-column: var(--menu-girid-column);
  }
  ::slotted([name=pin]) {
    grid-row   : var(--pin-girid-row);
    grid-column: var(--pin-girid-column);
  }
  ::slotted([name=aside]) {
    grid-row   : var(--aside-girid-row);
    grid-column: var(--aside-girid-column);
  }
  ::slotted([name=main]) {
    grid-row   : var(--main-girid-row);
    grid-column: var(--main-girid-column);
  }
  ::slotted([name=footer]) {
    grid-row   : var(--footer-girid-row);
    grid-column: var(--footer-girid-column);
  }
</style>
<slot></slot>
`;

const CustomElem$f = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$f);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$c();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$f, CustomElem$f);
customElements.whenDefined(TAG_NAME$f).then(()=>console.log("!!! defined !!!",TAG_NAME$f));

const TAG_NAME$e = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$b = () => /*html*/`
<style>
  :host{
    background: ghostwhite;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DCDCDC;
  }
</style>
<slot></slot>
`;

const CustomElem$e = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$e);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$b();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$e, CustomElem$e);
customElements.whenDefined(TAG_NAME$e).then(()=>console.log("!!! defined !!!",TAG_NAME$e));

const TAG_NAME$d = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$a = () => /*html*/`
<style>
  :host{
    border-bottom: 1px solid #DCDCDC;
    background: ghostwhite;
    display: flex;
    align-items: center;
  }
</style>
<slot></slot>
`;

const CustomElem$d = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$d);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$a();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$d, CustomElem$d);
customElements.whenDefined(TAG_NAME$d).then(()=>console.log("!!! defined !!!",TAG_NAME$d));

const TAG_NAME$c = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$9 = () => /*htlm*/`
<style>
  :host{
    border-right: 1px solid #DCDCDC;
    display: grid;
    grid-template-rows:    1fr;
    grid-template-columns: 1fr;
  }
</style>
<slot></slot>
`;

const CustomElem$c = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$c);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$9();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$c, CustomElem$c);
customElements.whenDefined(TAG_NAME$c).then(()=>console.log("!!! defined !!!",TAG_NAME$c));

const TAG_NAME$b = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$8 = () => /*html*/`
<style>
  :host{
    display: grid;
    grid-template-rows:    1fr;
    grid-template-columns: 1fr;
    overflow:hidden;
  }
</style>
<slot></slot>
`;

const CustomElem$b = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$b);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$8();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$b, CustomElem$b);
customElements.whenDefined(TAG_NAME$b).then(()=>console.log("!!! defined !!!",TAG_NAME$b));

const TAG_NAME$a = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$7 = () => /*html*/`
<style>
  :host{
    border-top: 1px solid #DCDCDC;
    background: #E6E6FA;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<slot></slot>
`;

const CustomElem$a = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$a);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$7();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$a, CustomElem$a);
customElements.whenDefined(TAG_NAME$a).then(()=>console.log("!!! defined !!!",TAG_NAME$a));

const TAG_NAME$9 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$6 = () => /*html*/`
<style>
  :host{
    display: grid;
    --grid-template-rows:    repeat(2, minmax(0, 1fr));
    --grid-template-columns: repeat(2, minmax(0, 1fr));
    --gap: 20px;
    --overflow: hidden;
    --padding: 20px; 

    grid-template-rows   : var(--grid-template-rows);
    grid-template-columns: var(--grid-template-columns);
    gap : var(--gap);
    padding: var(--padding); 
  }
  ::slotted(){
    overflow: var(--overflow);
  }
</style>
<slot></slot>
`;

const CustomElem$9 = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$9);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$6();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$9, CustomElem$9);
customElements.whenDefined(TAG_NAME$9).then(()=>console.log("!!! defined !!!",TAG_NAME$9));

const TAG_NAME$8 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$5 = () => /*html*/`
<style>
  :host{
    background: ghostwhite;
    display: flex;
    align-items: center;
  }
  h1 {
    padding: 0 30px;
    margin: 0px;
  }
</style>
<h1><slot></slot></h1>
`;

const CustomElem$8 = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$8);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$5();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$8, CustomElem$8);
customElements.whenDefined(TAG_NAME$8).then(()=>console.log("!!! defined !!!",TAG_NAME$8));

const TAG_NAME$7 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$4 = () => `
<style>
  :host{
    --md-icon-button-icon-size: 48px;
    display: flex;
    align-items: center;
    gap: 40px;
  }
</style>
<span style="position: relative">
  <md-icon-button id="usage-anchor">
    <md-icon>Description</md-icon>
  </md-icon-button>
  <md-menu id="usage-menu" anchor="usage-anchor">
    <md-menu-item>
      <div slot="headline">
        <label>
          Read file
          <input type="file" style="display:none;">
        </label>
      </div>
    </md-menu-item>
    <md-menu-item>
      <div slot="headline">Write file</div>
    </md-menu-item>
  </md-menu>
</span>
<md-icon-button>
  <md-icon>Construction</md-icon>
</md-icon-button>
<md-icon-button>
  <md-icon>Help</md-icon>
</md-icon-button>
`;

const CustomElem$7 = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$7);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$4();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$7, CustomElem$7);
customElements.whenDefined(TAG_NAME$7).then(()=>console.log("!!! defined !!!",TAG_NAME$7));

const TAG_NAME$6 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$3 = () => /*html*/`
<style>
  :host{
   padding: 20px; 
  }
</style>

<md-list>
  <md-list-item>
    <md-filled-tonal-button name="load-btn">
      <md-icon slot="icon">play_arrow</md-icon>load
    </md-filled-tonal-button>
  </md-list-item>
  <md-list-item>
    <md-filled-tonal-button name="save-btn">
      <md-icon slot="icon">play_arrow</md-icon>save
      <input type="file" name="files"  style="display:none;">
    </md-filled-tonal-button>
  </md-list-item>
  <md-list-item>
    <md-filled-tonal-button name="run-btn">
      <md-icon slot="icon">play_arrow</md-icon>run
    </md-filled-tonal-button>
  </md-list-item>
</md-list>
`;

const CustomElem$6 = class CustomElem extends HTMLElement {
  constructor(){
    super();
    this.elements={};
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$6);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$3();
    shadow.setHTMLUnsafe(HTML);
    this.shadow =  shadow;
    this.initialize();
  }
  initialize(){
    this.setElements();
  }
  setElements(){
    const load = this.shadow.querySelector("[name=load-btn]");
    const save = this.shadow.querySelector("[name=save-btn]");
    const files = this.shadow.querySelector("[name=files]");
    const run  = this.shadow.querySelector("[name=run-btn]");
    this.elements={load,save,run};
    save.onclick=(e)=>{
      const data = Person.person.data;
      const exportText = JSON.stringify(data,null, "  ");
      const filename = "input.json";
      const blob = new Blob([exportText], {type: 'text/plain; charset=utf-8'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename; 
      a.click();
      a.remove();
    };
    load.onclick=async(e)=>{
      const f    = await importFiles(files);
      const text = f[0].text; 
      const data = JSON.parse(text);
      Person.load(data);
    };
    run.onclick=async(e)=>{
      Person.run();
    };
  }
};

customElements.define(TAG_NAME$6, CustomElem$6);
customElements.whenDefined(TAG_NAME$6).then(()=>console.log("!!! defined !!!",TAG_NAME$6));

const TAG_NAME$5 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";


//    padding: 20px;
const createHTML$2 = () => /*html*/`
<style>
  :host{
    display:flex;
    gap: 30px;
  }
  [name=right]{
    display:flex;
    flex-flow: column;
    gap: 20px;
  }
</style>

<div name="left">
  <label>
    Auto run 
    <md-switch selected name="auto_run_switch"></md-switch>
  </label>
</div>
<div name="right">
  <md-outlined-text-field label="Height [cm]" name="height"></md-outlined-text-field>
  <md-outlined-text-field label="Weight [kg]" name="weight"></md-outlined-text-field>
  <md-filled-text-field label="BMI" readonly name="BMI"></md-filled-text-field>
</div>
`;


const CustomElem$5 = class CustomElem extends HTMLElement {
  constructor(){
    super();
    this.shadow;
    this.property ={};
    this.elements = {};
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$5);
    const internals = this.attachInternals();
    const isShadow = internals.shadowRoot;
    if(isShadow) return
    
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$2();
    shadow.setHTMLUnsafe(HTML);
    this.shadow = shadow;
    this.initialize();
  }
  initialize(){
    this.setElements();
    Person.person.addCallback(this.setProperty.bind(this));
    this.setProperty();
  } 
  setElements(){
    const height = this.shadow.querySelector("[name=height]"); 
    const weight = this.shadow.querySelector("[name=weight]"); 
    const BMI = this.shadow.querySelector("[name=BMI]"); 
    const auto_run_switch = this.shadow.querySelector("[name=auto_run_switch]"); 
    this.elements = {height, weight,BMI};
    height.oninput=(e)=>{
      Person.person.data.height=e.target.value;
    };
    weight.oninput=(e)=>{
      Person.person.data.weight=e.target.value;
    };
    auto_run_switch.onchange=(e)=>{
      Settings.settings.data.autoRun= !Settings.settings.data.autoRun;
    };
  }
  setProperty(){
    const property = Person.person.data;
    /* input */
    const height = this.elements.height; 
    const weight = this.elements.weight; 
    height.value = property.height;
    weight.value = property.weight;

    /* output */
    const BMI    = this.elements.BMI; 
    BMI.value    = property.BMI;
  }
};

customElements.define(TAG_NAME$5, CustomElem$5);
customElements.whenDefined(TAG_NAME$5).then(()=>console.log("!!! defined !!!",TAG_NAME$5));

const TAG_NAME$4 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const CustomElem$4 = class CustomElem extends CustomElem$g {
  constructor(){
    super();
  }
  connectedCallback(){
    super.connectedCallback();
    console.log("connected callback of", TAG_NAME$4);
    this.initialize();
  }
  initialize(){
    Person.person.addCallback(this.draw.bind(this));
    this.draw();
  }
  draw(){
    const property = Person.person.data;
    const height = property.height;
    const weight = property.weight;

    const screen    = super.sketch.screen;
    screen.removeAllSheets();

    const sheet0    = screen.addSheet("sheet0");
    const polyline = [
      [0,0],
      [weight,0],
      [weight,height],
      [0,height],
      [0,0],
    ];
    sheet0.addFig("polyline", {points: polyline});
  } 
};

customElements.define(TAG_NAME$4, CustomElem$4);
customElements.whenDefined(TAG_NAME$4).then(()=>console.log("!!! defined !!!",TAG_NAME$4));

const TAG_NAME$3 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";


const CustomElem$3 = class CustomElem extends CustomElem$h {
  constructor(){
    super();
  }
  connectedCallback(){
    super.connectedCallback();
    console.log("connected callback of", TAG_NAME$3);
    this.initialize();
  }
  initialize(){
    this.draw();
    Person.person.addCallback(this.draw.bind(this));
  }
  draw(){
    const property = Person.person.data;
    const height = property.height;
    const weight = property.weight;
      const  trace1 = {
      x: [height],
      y: [weight],
      marker: {size: 8},
      mode: 'markers',
      name: 'YOU',
      type: 'scatter',
    };
    const BMIList = [18, 20,  22,  24,  26];
    const heightList = [...Array(51)].map((v,i)=>100+i*2);
    const weightList = BMIList.map(v=>heightList.map(u=>v*(u/100)**2)); 
    const BMIcurves = weightList.map((v,i)=>Object({
      x: heightList,
      y: v,
      mode: 'lines',
      name: 'BMI'+BMIList[i],
      type: 'scatter',  
    }));

    const data = [trace1, ...BMIcurves];
    const layout = {
      autosize: true,
      title: 'Height vs Weight',
      xaxis: {
        title: 'height [cm]',
        autorange: true,
        type: 'linear'
      },
      yaxis: {
        title: 'weight [kg]',
        autorange: true,
        type: 'linear'
      }
    };
    this.react(data,layout);
  } 
};

customElements.define(TAG_NAME$3, CustomElem$3);
customElements.whenDefined(TAG_NAME$3).then(()=>console.log("!!! defined !!!",TAG_NAME$3));

const TAG_NAME$2 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const CustomElem$2 = class CustomElem extends CustomElem$h {
  constructor(){
    super();
  }
  connectedCallback(){
    super.connectedCallback();
    console.log("connected callback of", TAG_NAME$2);
    this.initialize();
  }
  initialize(){
    this.draw();
    Person.person.addCallback(this.draw.bind(this));
  }
  draw(){
    const BMI_DATA = utility.BMI_DISTRIBUTION;
    const property = Person.person.data;
    const BMI = property.BMI;
    const b1 = utility.calcBMI_DISTRIBUTION(BMI);
    const  trace1 = {
      x: BMI_DATA.map(v=>v[0]),
      y: BMI_DATA.map(v=>v[1]),
      mode: 'lines',
      name: 'statistical data',
      type: 'scatter',
    };
    const  trace2 = {
      x: [BMI, BMI],
      y: [0,b1],
      mode: 'lines',
      name: 'YOU',
      type: 'scatter',
    };

    const data = [trace1,trace2];
    const layout = {
      autosize: true,
      title: 'BMI Distribution',
      xaxis: {
        title: 'BMI [-]',
        autorange: true,
        type: 'linear'
      },
      yaxis: {
        title: 'density distribution [%]',
        autorange: true,
        type: 'linear'
      }
    };
    this.react(data,layout);
  } 
};

customElements.define(TAG_NAME$2, CustomElem$2);
customElements.whenDefined(TAG_NAME$2).then(()=>console.log("!!! defined !!!",TAG_NAME$2));

const TAG_NAME$1 = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML$1 = () => /*html*/`
<style>
  :host{
    border-top: 1px solid #DCDCDC;
    background: #E6E6FA;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<small><slot></slot></small>
`;

const CustomElem$1 = class CustomElem extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME$1);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML$1();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME$1, CustomElem$1);
customElements.whenDefined(TAG_NAME$1).then(()=>console.log("!!! defined !!!",TAG_NAME$1));

/* layout */

const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin";

const createHTML = () => /*html*/`
<${TAG_NAME$f}>
  <${TAG_NAME$e} name=header>
    <${TAG_NAME$8}>SAMPLE APP</${TAG_NAME$8}>
  </${TAG_NAME$e}>
  <${TAG_NAME$d} name=menu>
    <${TAG_NAME$7}></${TAG_NAME$7}>
  </${TAG_NAME$d}>
  <${TAG_NAME$c} name=aside>
    <${TAG_NAME$6}></${TAG_NAME$6}>
  </${TAG_NAME$c}>
  <${TAG_NAME$b} name=main>
    <${TAG_NAME$9}>
      <${TAG_NAME$5}></${TAG_NAME$5}>
      <${TAG_NAME$4}></${TAG_NAME$4}>
      <${TAG_NAME$3}></${TAG_NAME$3}>
      <${TAG_NAME$2}></${TAG_NAME$2}>
    </${TAG_NAME$9}>
  </${TAG_NAME$b}>
  <${TAG_NAME$a} name=footer>
    <${TAG_NAME$1}>version 0.0.1</${TAG_NAME$1}>
  </${TAG_NAME$a}>
</${TAG_NAME$f}>
`;

const CustomElem = class extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME);
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML();
    shadow.setHTMLUnsafe(HTML);
  }
};

customElements.define(TAG_NAME, CustomElem);
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME));

const elem = document.createElement(TAG_NAME);
    document.body.appendChild(elem);
    window.addEventListener("load", () => document.body.style="visibilily:visible;");
