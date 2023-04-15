import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsAvatarCss = ":host{display:block}.gwds-avatar--m .gwds-avatar__image-wrapper{width:var(--gwds__space--m);height:var(--gwds__space--m)}.gwds-avatar--m.gwds-avatar--line .gwds-avatar__image-wrapper{border-width:2px}.gwds-avatar--l .gwds-avatar__image-wrapper{width:var(--gwds__space--l);height:var(--gwds__space--l)}.gwds-avatar--l.gwds-avatar--line .gwds-avatar__image-wrapper{border-width:4px}.gwds-avatar--xl .gwds-avatar__image-wrapper{width:var(--gwds__space--xl);height:var(--gwds__space--xl)}.gwds-avatar--xl.gwds-avatar--line .gwds-avatar__image-wrapper{border-width:6px}.gwds-avatar--xxl .gwds-avatar__image-wrapper{width:190px;height:190px}.gwds-avatar--xxl.gwds-avatar--line .gwds-avatar__image-wrapper{border-width:8px}.gwds-avatar__image-wrapper{border-radius:50%;overflow:hidden}.gwds-avatar__image{width:100%;height:100%;object-fit:cover}.gwds-avatar--line .gwds-avatar__image-wrapper{border-color:var(--gwds__color--fuchsia-500);border-style:solid}";

const GwdsAvatar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.imgUrl = null;
    this.imgAlt = null;
    this.size = 'm';
    this.line = false;
  }
  componentWillLoad() {
    if (this.imgUrl === null) {
      this.imgUrl = '/assets-stencil/images/avatars/avatar-placeholder.svg';
    }
  }
  render() {
    return (h(Host, { class: {
        'gwds-avatar': true,
        'gwds-avatar--line': this.line,
        'gwds-avatar--m': this.size === 'm',
        'gwds-avatar--l': this.size === 'l',
        'gwds-avatar--xl': this.size === 'xl',
        'gwds-avatar--xxl': this.size === 'xxl',
      } }, h("div", { class: "gwds-avatar__image-wrapper" }, h("img", { class: "gwds-avatar__image", src: this.imgUrl, alt: this.imgAlt })), h("slot", null)));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return gwdsAvatarCss; }
}, [4, "gwds-avatar", {
    "imgUrl": [1, "img-url"],
    "imgAlt": [1, "img-alt"],
    "size": [1],
    "line": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-avatar"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-avatar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsAvatar);
      }
      break;
  } });
}

export { GwdsAvatar as G, defineCustomElement as d };
