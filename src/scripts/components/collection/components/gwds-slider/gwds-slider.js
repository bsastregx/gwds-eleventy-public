import { Component, Host, h, Prop, State } from '@stencil/core';
import Splide from '@splidejs/splide';
export class GwdsSlider {
  constructor() {
    this.cover = false;
    this.gap = false;
    this.padding = false;
    this.orientation = 'landscape';
    this.sliderId = null;
    this.cards = false;
    this.individual = false;
    this.dark = false;
    this.paddingValue = '0';
  }
  componentWillLoad() {
    if (this.padding) {
      this.paddingValue = '96px';
    }
  }
  perPage() {
    if (this.orientation === 'landscape' && !this.individual) {
      return 2;
    }
    else if (this.orientation === 'portrait' && !this.individual) {
      return 3;
    }
    else if (this.individual) {
      return 1;
    }
  }
  perPage1399() {
    if (this.orientation === 'landscape' && !this.individual) {
      return 2;
    }
    else if (this.orientation === 'portrait' && !this.individual) {
      return 3;
    }
    else if (this.individual) {
      return 1;
    }
  }
  componentDidLoad() {
    new Splide(`#${this.sliderId}`, {
      perPage: this.perPage(),
      lazyLoad: 'nearby',
      gap: this.gap ? `var(--gwds__space--s)` : 0,
      arrows: true,
      padding: { left: this.paddingValue, right: this.paddingValue },
      breakpoints: {
        1399: {
          perPage: this.perPage1399(),
        },
        992: {
          perPage: this.orientation === 'landscape' ? 1 : 2,
        },
        767: {
          perPage: this.orientation === 'landscape' ? 1 : 1,
        },
        575: {
          perPage: this.orientation === 'landscape' ? 1 : 1,
        },
      },
    }).mount();
  }
  render() {
    return (h(Host, { class: {
        'gwds-slider': true,
        'gwds-slider--cover': this.cover,
        'gwds-slider--gap': this.gap,
        'gwds-slider--cards': this.cards,
        'gwds-slider--dark': this.dark,
      } },
      h("section", { id: this.sliderId, class: { 'splide': true, 'p-0': true }, "aria-labelledby": "carousel-heading" },
        h("div", { class: "splide__track" },
          h("ul", { class: "splide__list unstyled" },
            h("slot", null))))));
  }
  static get is() { return "gwds-slider"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-slider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-slider.css"]
  }; }
  static get properties() { return {
    "cover": {
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
        "text": ""
      },
      "attribute": "cover",
      "reflect": false,
      "defaultValue": "false"
    },
    "gap": {
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
        "text": ""
      },
      "attribute": "gap",
      "reflect": false,
      "defaultValue": "false"
    },
    "padding": {
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
        "text": ""
      },
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "false"
    },
    "orientation": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'landscape' | 'portrait'",
        "resolved": "\"landscape\" | \"portrait\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "orientation",
      "reflect": false,
      "defaultValue": "'landscape'"
    },
    "sliderId": {
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
        "text": ""
      },
      "attribute": "slider-id",
      "reflect": false,
      "defaultValue": "null"
    },
    "cards": {
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
        "text": ""
      },
      "attribute": "cards",
      "reflect": false,
      "defaultValue": "false"
    },
    "individual": {
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
        "text": ""
      },
      "attribute": "individual",
      "reflect": false,
      "defaultValue": "false"
    },
    "dark": {
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
        "text": ""
      },
      "attribute": "dark",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "paddingValue": {}
  }; }
}
