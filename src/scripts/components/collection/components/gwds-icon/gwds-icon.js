import { Component, Element, Host, h, State, Watch, Prop } from '@stencil/core';
import { getSvgContent, iconContent } from './requests';
export class GwdsIcon {
  constructor() {
    /**
     * The color of the icon.
     */
    this.color = null;
    /**
     * If enabled, the icon will be loaded lazily when it's visible in the viewport.
     */
    this.lazy = false;
    /**
     * The size of the icon. Possible values: small, medium, large.
     */
    this.size = 's';
    /**
     * The URL of the icon.
     */
    this.src = '';
    this.isVisible = false;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.element, '50px', () => {
      this.isVisible = true;
      this.getIcon();
    });
  }
  componentWillLoad() {
    if (this.color === null) {
      //If color is not defined, set color equal to inherited color
      this.color = window.getComputedStyle(this.element, null).getPropertyValue('color');
    }
  }
  disconnectedCallback() {
    if (this.io !== undefined) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, callback) {
    if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = (this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          callback();
        }
      }, { rootMargin }));
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      callback();
    }
  }
  async getIcon() {
    if (this.isVisible) {
      if (this.src) {
        if (iconContent.has(this.src)) {
          this.svgContent = iconContent.get(this.src);
        }
        else {
          this.svgContent = await getSvgContent(this.src);
        }
      }
      else {
        this.svgContent = '';
        return;
      }
    }
  }
  render() {
    return (h(Host, { class: "gwds-icon" },
      h("div", { class: "gwds-icon__div", style: { 'width': `var(--gwds__icon-size--${this.size}, )`, 'height': `var(--gwds__icon-size--${this.size}, )`, '--gwds__icon-color': this.color }, innerHTML: this.svgContent })));
  }
  static get is() { return "gwds-icon"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-icon.css"]
  }; }
  static get assetsDirs() { return ["icon-assets"]; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The color of the icon."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "null"
    },
    "lazy": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If enabled, the icon will be loaded lazily when it's visible in the viewport."
      },
      "attribute": "lazy",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"m\" | \"s\" | \"xs\"",
        "references": {
          "Size": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The size of the icon. Possible values: small, medium, large."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'s'"
    },
    "src": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL of the icon."
      },
      "attribute": "src",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "isVisible": {},
    "svgContent": {}
  }; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "src",
      "methodName": "getIcon"
    }]; }
}
