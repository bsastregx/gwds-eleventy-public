import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsButtonCss = ":host{display:inline-block}.gwds-button{display:block;margin:var(--gwds__space--s) 0 var(--gwds__space--s) 0;font-family:var(--gwds__font-family--body);font-size:var(--gwds__font-size--m);font-weight:var(--gwds__font-weight--medium);cursor:pointer;background-position:center;display:inline-block;border-radius:var(--gwds__radius--m);background-color:transparent;transition:transform var(--gwds__transition--super-fast), background var(--gwds__transition--regular);padding:var(--gwds__space--s) var(--gwds__space--m);}.gwds-button--has-link{padding:0}.gwds-button--has-link.gwds-button--small{padding:0}.gwds-button--has-link.gwds-button--small a{padding:var(--gwds__space--xs) var(--gwds__space--s)}.gwds-button--has-link a{padding:var(--gwds__space--s) var(--gwds__space--m)}.gwds-button a{display:inline-block;text-decoration:none}.gwds-button--small{padding:var(--gwds__space--xs) var(--gwds__space--s)}.gwds-button:hover{transform:scale(1.05)}.gwds-button:hover a{text-decoration:none}.gwds-button:active{background-size:100% !important;transition:background 0s}.gwds-button--primary{color:var(--gwds__color--white) !important;background-color:var(--gwds__color--fuchsia-500)}.gwds-button--primary:hover{color:var(--gwds__color--white);background:var(--gwds__color--fuchsia-500) radial-gradient(circle, transparent 1%, var(--gwds__color--fuchsia-500) 1%) center/15000%}.gwds-button--primary:active{background-color:#fb5981}.gwds-button--primary a{color:var(--gwds__color--white) !important}.gwds-button--secondary{color:var(--gwds__color--black);background-color:var(--gwds__color--white);border:1px solid transparent}.gwds-button--secondary:hover{color:var(--gwds__color--black);background:var(--gwds__color--white) radial-gradient(circle, transparent 1%, rgba(0, 0, 0, 0.025) 1%) center/15000%}.gwds-button--tertiary{color:inherit;background-color:transparent;border-width:1px;border-style:solid;border-color:inherit}.gwds-button--tertiary:hover{color:inherit}@media (min-width: 576px){.gwds-button{display:inline-block;margin:var(--gwds__space--s) var(--gwds__space--s) var(--gwds__space--s) 0}}";

const GwButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = null;
    this.type = 'primary';
    this.size = 'regular';
    this.url = null;
    this.target = '_self';
    this.m0 = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-button': true,
        'gwds-button--primary': this.type === 'primary',
        'gwds-button--secondary': this.type === 'secondary',
        'gwds-button--tertiary': this.type === 'tertiary',
        'gwds-button--small': this.size === 'small',
        'gwds-button--regular': this.size === 'regular',
        'gwds-button--has-link': this.url !== null,
        'm-0': this.m0,
      } }, this.url !== null ? (h("a", { tabindex: "0", class: { 'gwds-button__button': true }, href: this.url, target: this.target }, this.label)) : (this.label)));
  }
};
GwButton.style = gwdsButtonCss;

export { GwButton as gwds_button };
