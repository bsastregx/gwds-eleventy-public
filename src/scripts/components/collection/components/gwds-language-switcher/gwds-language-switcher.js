import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsLanguageSwitcher {
  constructor() {
    this.enUrl = null;
    this.esUrl = null;
    this.ptUrl = null;
    this.selectedLang = null;
  }
  renderSelectedLang() {
    if (this.selectedLang) {
      if (this.selectedLang === 'en') {
        return 'English';
      }
      else if (this.selectedLang === 'es') {
        return 'Español';
      }
      else if (this.selectedLang === 'pt') {
        return 'Português';
      }
    }
    else {
      return 'No language selected';
    }
  }
  componentWillLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-language-switcher': true } },
      h("span", { class: "gwds-language-switcher__selected-lang" },
        h("gwds-icon", { src: "/assets/icons/globe.svg" }),
        " ",
        this.renderSelectedLang(),
        h("ul", { class: "gwds-language-switcher__list unstyled gwds__shadow--tiny" },
          this.selectedLang !== 'en' ? (h("li", { class: "gwds-language-switcher__list-item" },
            h("a", { class: "gwds-language-switcher__list-link", href: this.enUrl }, "English"))) : null,
          this.selectedLang !== 'es' ? (h("li", { class: "gwds-language-switcher__list-item" },
            h("a", { class: "gwds-language-switcher__list-link", href: this.esUrl }, "Espa\u00F1ol"))) : null,
          this.selectedLang !== 'pt' ? (h("li", { class: "gwds-language-switcher__list-item" },
            h("a", { class: "gwds-language-switcher__list-link", href: this.ptUrl }, "Portugu\u00EAs"))) : null))));
  }
  static get is() { return "gwds-language-switcher"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-language-switcher.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-language-switcher.css"]
  }; }
  static get properties() { return {
    "enUrl": {
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
      "attribute": "en-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "esUrl": {
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
      "attribute": "es-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "ptUrl": {
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
      "attribute": "pt-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "selectedLang": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'en' | 'es' | 'pt'",
        "resolved": "\"en\" | \"es\" | \"pt\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selected-lang",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
}
