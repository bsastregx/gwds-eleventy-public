import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsTagCss = ":host{display:block}.gwds-tag{display:block;margin-bottom:var(--gwds__space--xs)}.gwds-tag__span{font-size:var(--gwds__font-size--s);padding:var(--gwds__space--xxs) var(--gwds__space--xs);border-radius:var(--gwds__radius--xxs);overflow:hidden}";

const GwdsTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = null;
    this.bgColor = 'violet-50';
    this.url = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-tag': true } }, h("small", { class: { 'gwds-tag__span': true }, style: { backgroundColor: `var(--gwds__color--${this.bgColor})`, color: `var(${this.textColor})` } }, this.label)));
  }
};
GwdsTag.style = gwdsTagCss;

export { GwdsTag as gwds_tag };
