import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsListItemCss = ":host{display:block}.gwds-list-item{display:flex;align-items:flex-start;margin-bottom:var(--gwds__space--m)}.gwds-list-item__icon{flex-grow:0;flex-shrink:0;flex-basis:60px;margin-right:var(--gwds__space--m)}";

const GwdsListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconUrl = null;
    this.iconAlt = null;
  }
  render() {
    return (h(Host, { class: {
        'gwds-list-item': true,
      } }, this.iconUrl ? h("img", { class: "gwds-list-item__icon", src: this.iconUrl, alt: this.iconAlt, width: "60", height: "60" }) : null, h("slot", null)));
  }
};
GwdsListItem.style = gwdsListItemCss;

export { GwdsListItem as gwds_list_item };
