import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsFormInputCss = ":host{display:block}.gwds-form-input{display:block}.gwds-form-input input{width:100%;padding-left:var(--gwds__space--xs);padding-right:var(--gwds__space--xs)}";

const GwdsFormInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.placeholder = null;
    this.minWidth = '250px';
    this.maxWidth = '100%';
  }
  render() {
    return (h(Host, { class: "gwds-form-input" }, h("input", { type: "text", placeholder: this.placeholder, style: { minWidth: this.minWidth, maxWidth: this.maxWidth } })));
  }
};
GwdsFormInput.style = gwdsFormInputCss;

export { GwdsFormInput as gwds_form_input };
