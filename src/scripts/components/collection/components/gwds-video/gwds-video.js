import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsVideo {
  constructor() {
    this.videoId = null;
    this.source = 'youtube';
    this.fullWidth = false;
  }
  componentWillLoad() { }
  componentDidLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-video': true, 'gwds-video--full-width': this.fullWidth } },
      h("div", { class: { 'gwds-video__container': this.fullWidth } },
        h("iframe", { loading: "lazy", class: "video", src: `https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0`, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullScreen: true }),
        h("slot", null))));
  }
  static get is() { return "gwds-video"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-video.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-video.css"]
  }; }
  static get properties() { return {
    "videoId": {
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
      "attribute": "video-id",
      "reflect": false,
      "defaultValue": "null"
    },
    "source": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'youtube' | 'vimeo'",
        "resolved": "\"vimeo\" | \"youtube\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "source",
      "reflect": false,
      "defaultValue": "'youtube'"
    },
    "fullWidth": {
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
      "attribute": "full-width",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
