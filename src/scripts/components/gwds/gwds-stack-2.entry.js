import { r as registerInstance, h, e as Host, g as getElement } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsStackCss = ".gwds-stack{display:block;}.gwds-stack__item{border:1px solid var(--gwds__color--black);border-radius:var(--gwds__radius--xxs);padding:var(--gwds__space--s);cursor:pointer;margin-bottom:var(--gwds__space--s)}.gwds-stack__item:last-child{margin-bottom:0}.gwds-stack__item:hover{border-color:var(--gwds__color--fuchsia-500) !important}.gwds-stack__col-left{margin-bottom:var(--gwds__space--m)}@media (min-width: 768px){.gwds-stack__col-left{margin-bottom:0}.gwds-stack__col-left ul{padding-right:var(--gwds__space--m)}}.gwds-stack .paragraph{margin-bottom:var(--gwds__space--l)}";

const GwdsStack2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.description = null;
    this.pt0 = false;
    this.pb0 = false;
    this.textColor = null;
    this.slottedContent = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  componentDidLoad() { }
  clickHandler(index) {
    const items = this.rightCol.querySelectorAll('gwds-stack-item');
    items.forEach(function (node, index2) {
      if (index === index2) {
        node.visible = true;
      }
      else {
        node.visible = false;
      }
    });
  }
  render() {
    return (h(Host, { class: {
        'gwds-stack': true,
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 } }, h("div", { class: { 'container': true, 'container--main': true } }, h("div", { class: "row" }, h("div", { class: "col-12 col-lg-8 offset-lg-2 tac" }, h("h2", { class: "h2" }, "What's new in GeneXus 18?"), h("p", { class: "paragraph" }, "GeneXus 18 accompanies technological advances to provide the best experience in Web and Mobile platforms to companies, developers and end users."))), h("div", { class: "row" }, h("div", { class: "gwds-stack__col-left col-12 col-md-6 col-lg-5" }, h("ul", { class: "unstyled" }, h("li", { "on-click": this.clickHandler.bind(this, 0), class: "gwds-stack__item", style: {
        borderColor: `var(${this.textColor})`,
      } }, "GeneXus Training"), h("li", { "on-click": this.clickHandler.bind(this, 1), class: "gwds-stack__item", style: {
        borderColor: `var(${this.textColor})`,
      } }, "GeneXus Webinars"), h("li", { "on-click": this.clickHandler.bind(this, 2), class: "gwds-stack__item", style: {
        borderColor: `var(${this.textColor})`,
      } }, "GeneXus Community Wiki"), h("li", { "on-click": this.clickHandler.bind(this, 3), class: "gwds-stack__item", style: {
        borderColor: `var(${this.textColor})`,
      } }, "GeneXus Beta Channel"))), h("div", { class: "gwds-stack__col-right col-12 col-md-6 col-lg-7", ref: el => (this.rightCol = el) }, h("gwds-stack-item", { visible: true, "main-title": "GeneXus Training", "icon-url": "/assets/images/showcase/stack/stack-gx18-all-canal-beta.svg", "icon-alt": "all canal beta", "button-label": "Start now", "button-url": "www.google.com" }, "Training portal with self-study options and teaching support. Here you will also find the worldwide calendar of courses and certifications."), h("gwds-stack-item", { "main-title": "GeneXus Webinars", "icon-url": "/assets/images/showcase/stack/stack-gx18-all-webinars.svg", "icon-alt": "all webinars", "button-label": "Start now", "button-url": "www.google.com" }, "Online sessions on technology and current topics, led by GeneXus Community experts and partners."), h("gwds-stack-item", { "main-title": "GeneXus Community Wiki", "icon-url": "/assets/images/showcase/stack/stack-gx18-all-wiki.svg", "icon-alt": "all wiki", "button-label": "Start now", "button-url": "www.google.com" }, "Training portal with self-study options and teaching support. Here you will also find the worldwide calendar of courses and certifications."), h("gwds-stack-item", { "main-title": "GeneXus Beta Channel", "icon-url": "/assets/images/showcase/stack/stack-gx18-all-canal-beta.svg", "icon-alt": "canal beta", "button-label": "Start now", "button-url": "www.google.com" }, "Test GeneXus features, products and all new technologies before they are released.")))))));
  }
  get el() { return getElement(this); }
};
GwdsStack2.style = gwdsStackCss;

export { GwdsStack2 as gwds_stack_2 };
