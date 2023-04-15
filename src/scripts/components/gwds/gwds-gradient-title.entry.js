import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsGradientTitleCss = ":host{display:block}.gwds-gradient-title{display:block}.gwds-gradient-title .title{-webkit-background-clip:text !important;-moz-background-clip:text !important;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;line-height:1.5em;display:inline-block;font-size:64px;letter-spacing:-0.05em;margin:0}";

const GwdsGradientTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.from = 'red-200';
    this.to = 'red-400';
    this.center = false;
  }
  render() {
    return (h(Host, { class: { 'gwds-gradient-title': true, 'h1': true } }, h("div", { class: { container: true, tac: this.center } }, h("h2", { class: { h1: true, title: true, tac: this.center }, style: { background: `-webkit-linear-gradient(45deg, var(--gwds__color--${this.from}), var(--gwds__color--${this.to}))` } }, h("slot", null)))));
  }
};
GwdsGradientTitle.style = gwdsGradientTitleCss;

export { GwdsGradientTitle as gwds_gradient_title };
