import { Component, Host, h, Prop, State } from '@stencil/core';
import textContrast from '../../utils/utils';
export class Live2022Card {
  constructor() {
    this.url = null;
    this.cardTitle = null;
    this.speaker1Name = null;
    this.speaker1AvatarUrl = null;
    this.speaker2Name = null;
    this.speaker2AvatarUrl = null;
    this.imageUrl = null;
    this.imageAlt = null;
    this.bgColor = null;
    this.minWidth = '250px';
    this.maxWidth = '500px';
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { style: {
        backgroundColor: `var(--live-2022__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
        minWidth: this.minWidth,
        maxWidth: this.maxWidth,
      }, class: "live-2022-card" },
      h("a", { class: "live-2022-card__link", href: this.url },
        h("article", null,
          this.cardTitle ? h("h4", { class: "live-2022-card__title h4" }, this.cardTitle) : null,
          this.speaker1Name ? (h("div", { class: "live-2022-card__avatar-wrapper" },
            this.speaker1AvatarUrl ? h("gwds-avatar", { imgUrl: this.speaker1AvatarUrl, imgAlt: this.speaker1Name }) : null,
            this.speaker1Name ? h("span", { class: "live-2022-card__author" }, this.speaker1Name) : null)) : null,
          this.speaker2Name ? (h("div", { class: "live-2022-card__avatar-wrapper" },
            h("gwds-avatar", { imgUrl: this.speaker2AvatarUrl, imgAlt: this.speaker2Name }),
            this.speaker2Name ? h("span", { class: "live-2022-card__author" }, this.speaker2Name) : null)) : null,
          this.imageUrl ? (h("div", { class: "live-2022-card__image-wrapper" },
            h("img", { src: this.imageUrl, alt: this.imageAlt }))) : null))));
  }
  static get is() { return "live-2022-card"; }
  static get originalStyleUrls() { return {
    "$": ["live-2022-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["live-2022-card.css"]
  }; }
  static get properties() { return {
    "url": {
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
      "attribute": "url",
      "reflect": false,
      "defaultValue": "null"
    },
    "cardTitle": {
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
      "attribute": "card-title",
      "reflect": false,
      "defaultValue": "null"
    },
    "speaker1Name": {
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
      "attribute": "speaker-1-name",
      "reflect": false,
      "defaultValue": "null"
    },
    "speaker1AvatarUrl": {
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
      "attribute": "speaker-1-avatar-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "speaker2Name": {
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
      "attribute": "speaker-2-name",
      "reflect": false,
      "defaultValue": "null"
    },
    "speaker2AvatarUrl": {
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
      "attribute": "speaker-2-avatar-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "imageUrl": {
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
      "attribute": "image-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "imageAlt": {
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
      "attribute": "image-alt",
      "reflect": false,
      "defaultValue": "null"
    },
    "bgColor": {
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
      "attribute": "bg-color",
      "reflect": false,
      "defaultValue": "null"
    },
    "minWidth": {
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
      "attribute": "min-width",
      "reflect": false,
      "defaultValue": "'250px'"
    },
    "maxWidth": {
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
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "'500px'"
    }
  }; }
  static get states() { return {
    "textColor": {}
  }; }
}
