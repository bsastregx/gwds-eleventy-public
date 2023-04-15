import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsComponentTitleCss = ":host{display:block}.gwds-component-title{display:block;background-color:var(--gwds__color--dark-900);color:var(--gwds__color--white);padding:var(--gwds__space--xs) var(--gwds__space--s)}.gwds-component-title__wrapper{display:flex;justify-content:space-between;align-items:center}.gwds-component-title__show-properties{line-height:1em;padding:var(--gwds__space--xs) var(--gwds__space--xs);color:var(--gwds__color--dark-500);border:1px solid var(--gwds__color--dark-500);font-size:var(--gwds__font-size--s);font-family:monospace;margin-left:var(--gwds__space--s)}.gwds-component-title__show-properties:hover{background-color:var(--gwds__color--white);color:var(--gwds__color--black);cursor:pointer}.gwds-component-title__code{display:block;height:0;overflow:hidden;color:var(--gwds__color--turquoise-200)}.gwds-component-title__code--show{padding-top:var(--gwds__space--xs);height:auto}.gwds-component-title__experimental{font-size:var(--gwds__font-size--s);border-radius:var(--gwds__radius--xxs);padding:var(--gwds__space--xxs) var(--gwds__space--xs);background-color:var(--gwds__color--black);color:var(--gwds__color--turquoise-200)}";

const GwdsComponentTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = null;
    this.experimental = false;
    this.showCode = false;
  }
  toggleCode() {
    if (this.showCode) {
      this.showCode = false;
    }
    else {
      this.showCode = true;
    }
  }
  render() {
    return (h(Host, { class: { 'gwds-component-title': true } }, h("h", null, h("div", { class: "gwds-component-title__wrapper" }, h("span", { class: { 'gwds-component-title__label': true } }, this.label, " \u2193", ' ', this.experimental ? (h("span", { class: { 'gwds-component-title__experimental': true } }, h("i", { class: "fa-solid fa-flask", style: { marginRight: '6px' } }), "experimental")) : null), h("span", { class: "gwds-component-title__show-properties", onClick: this.toggleCode.bind(this) }, h("i", { class: "fa-solid fa-wrench" }), " ", this.showCode ? 'hide properties' : 'show properties')), h("code", { class: { 'gwds-component-title__code': true, 'gwds-component-title__code--show': this.showCode } }, h("slot", null)))));
  }
};
GwdsComponentTitle.style = gwdsComponentTitleCss;

export { GwdsComponentTitle as gwds_component_title };
