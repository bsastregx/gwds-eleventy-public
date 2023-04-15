import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsTooltipCss = ":host{display:block}.gwds-tooltip{display:inline-block;position:relative}.gwds-tooltip:hover .gwds-tooltip__slot--content{display:inline-block;opacity:1}.gwds-tooltip__slot--content{background-color:var(--gwds__color--dark-900);color:var(--gwds__color--white);font-size:var(--gwds__font-size--s);padding:var(--gwds__space--s) var(--gwds__space--s);border-radius:var(--gwds__radius--xs);position:absolute;opacity:0;transition:var(--gwds__transition--super-fast) all;line-height:var(--gwds__line-height--spaced);pointer-events:none;background:rgba(0, 0, 0, 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.gwds-tooltip__slot--content :first-child{margin-top:0}.gwds-tooltip__slot--content :last-child{margin-bottom:0}.gwds-tooltip--top .gwds-tooltip__slot--content{top:0;left:50%;transform:translateX(-50%) translateY(calc(-100% - 16px)) scale(0.75)}.gwds-tooltip--top .gwds-tooltip__slot--content:before{content:\"\";display:block;position:absolute;width:100%;height:var(--gwds__space--s);bottom:0;left:0;transform:translateY(100%)}.gwds-tooltip--top .gwds-tooltip__slot--content:after{content:\"\";display:block;width:8px;height:8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid var(--gwds__color--dark-900);position:absolute;left:50%;bottom:1px;transform:translateX(-50%) translateY(100%)}.gwds-tooltip--top:hover .gwds-tooltip__slot--content{transform:translateX(-50%) translateY(calc(-100% - 16px)) scale(1)}.gwds-tooltip--right .gwds-tooltip__slot--content{top:0}.gwds-tooltip--bottom .gwds-tooltip__slot--content{top:0}.gwds-tooltip--left .gwds-tooltip__slot--content{top:0}.gwds-tooltip--pointer-events-auto .gwds-tooltip__slot--content{pointer-events:auto}";

const GwdsTooltip$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.width = '200px';
    this.label = null;
    this.position = 'top';
    this.display = false;
    this.pointerEventsAuto = false;
  }
  mouseEnterSlotChildren() {
    this.pointerEventsAuto = true;
  }
  mouseLeaveHost() {
    this.pointerEventsAuto = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-tooltip': true,
        'gwds-tooltip--display': this.display,
        'gwds-tooltip--top': this.position === 'top',
        'gwds-tooltip--right': this.position === 'right',
        'gwds-tooltip--bottom': this.position === 'bottom',
        'gwds-tooltip--left': this.position === 'left',
        'gwds-tooltip--pointer-events-auto': this.pointerEventsAuto,
      }, onMouseLeave: this.mouseLeaveHost.bind(this) }, h("div", { class: "gwds-tooltip__slot--children", onMouseEnter: this.mouseEnterSlotChildren.bind(this) }, h("slot", { name: "children" })), h("div", { class: "gwds-tooltip__slot--content", style: { width: this.width } }, this.label, h("slot", { name: "content" }))));
  }
  static get style() { return gwdsTooltipCss; }
}, [4, "gwds-tooltip", {
    "width": [1],
    "label": [1],
    "position": [1],
    "display": [32],
    "pointerEventsAuto": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsTooltip$1);
      }
      break;
  } });
}

const GwdsTooltip = GwdsTooltip$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsTooltip, defineCustomElement };
