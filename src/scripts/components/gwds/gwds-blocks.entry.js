import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { m as marked_umd } from './marked.umd-a4e19efc.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsBlocksCss = ":host{display:block}.gwds-blocks{display:block;}.gwds-blocks gwds-grid{margin-top:var(--gwds__space--l)}@media (min-width: 992px){.gwds-blocks--grid-aside gwds-grid{margin-top:0}.gwds-blocks--grid-aside .gwds-grid__container{grid-template-columns:repeat(1, 1fr)}.gwds-blocks--grid-aside .container--main{display:flex}.gwds-blocks--grid-aside .gwds-blocks__wrapper,.gwds-blocks--grid-aside .gwds-grid{width:50%;box-sizing:border-box}.gwds-blocks--grid-aside .gwds-blocks__wrapper{padding-right:var(--gwds__space--l)}.gwds-blocks--grid-aside .gwds-blocks__main-wrapper{width:50%}}@media (min-width: 1400px){.gwds-blocks--grid-aside .gwds-grid__container{grid-template-columns:repeat(2, 1fr)}}";

const GwdsBlocks = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.description = null;
    //First Button
    this.firstButtonLabel = null;
    this.firstButtonUrl = null;
    this.firstButtonType = 'primary';
    this.firstButtonTarget = '_self';
    //Second Button
    this.secondButtonLabel = null;
    this.secondButtonUrl = null;
    this.secondButtonType = 'primary';
    this.secondButtonTarget = '_self';
    //Third Button
    this.thirdButtonLabel = null;
    this.thirdButtonUrl = null;
    this.thirdButtonType = 'primary';
    this.thirdButtonTarget = '_self';
    this.linkUrl = null;
    this.linkLabel = null;
    this.linkTarget = '_self';
    this.display = 'grid-2';
    this.textColor = null;
    this.colClasses = 'col-12 col-lg-8';
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    if (this.display === 'grid-aside') {
      this.colClasses = 'col-12';
    }
  }
  perRow() {
    if (this.display === 'grid-2' || this.display === 'grid-aside') {
      return '2';
    }
    if (this.display === 'grid-3') {
      return '3';
    }
  }
  render() {
    return (h(Host, { class: {
        'gwds-blocks': true,
        'gwds-blocks--grid-2': this.display === 'grid-2',
        'gwds-blocks--grid-3': this.display === 'grid-3',
        'gwds-blocks--grid-aside': this.display === 'grid-aside',
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", { class: "section" }, h("div", { class: { 'container': true, 'container--main': true } }, h("div", { class: "gwds-blocks__main-wrapper" }, h("div", { class: "row" }, h("div", { class: this.colClasses }, this.mainTitle ? h("h2", { class: "h2" }, this.mainTitle) : null, this.description ? h("div", { innerHTML: marked_umd.marked.parse(this.description) }) : null)), h("div", { class: "gwds-blocks__buttons-wrapper" }, this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)), h("gwds-grid", { perRow: this.perRow() }, h("slot", null))))));
  }
};
GwdsBlocks.style = gwdsBlocksCss;

export { GwdsBlocks as gwds_blocks };
