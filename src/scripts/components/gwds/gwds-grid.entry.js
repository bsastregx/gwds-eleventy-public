import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsGridCss = ":host{display:block}.gwds-grid{display:block;}.gwds-grid__container{display:grid;gap:var(--gwds__space--m)}.gwds-grid__container--2{grid-template-columns:repeat(1, 1fr)}.gwds-grid__container--3{grid-template-columns:repeat(1, 1fr)}.gwds-grid__container--4{grid-template-columns:repeat(1, 1fr)}.gwds-grid__container--6{grid-template-columns:repeat(2, 1fr)}@media (min-width: 768px){.gwds-grid__container--2{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--3{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--4{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--6{grid-template-columns:repeat(4, 1fr)}}@media (min-width: 1200px){.gwds-grid__container--2{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--3{grid-template-columns:repeat(3, 1fr)}.gwds-grid__container--4{grid-template-columns:repeat(4, 1fr);gap:var(--gwds__space--s)}.gwds-grid__container--6{grid-template-columns:repeat(6, 1fr)}}";

const GwdsGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.perRow = '3';
    this.gap = 's';
  }
  render() {
    return (h(Host, { class: { 'gwds-grid': true } }, h("div", { class: {
        'gwds-grid__container': true,
        'gwds-grid__container--2': this.perRow === '2',
        'gwds-grid__container--3': this.perRow === '3',
        'gwds-grid__container--4': this.perRow === '4',
        'gwds-grid__container--6': this.perRow === '6',
      }, style: { gap: `var(--gwds__space--${this.gap})` } }, h("slot", null))));
  }
};
GwdsGrid.style = gwdsGridCss;

export { GwdsGrid as gwds_grid };
