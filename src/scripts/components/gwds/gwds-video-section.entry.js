import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsVideoSectionCss = ":host{display:block}.gwds-video-section{display:block;}@media (min-width: 992px){.gwds-video-section__content-wrapper :last-child{margin-bottom:0}}";

const GwdsVideoSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bgColor = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.alignContent = 'left';
    this.videoId = null;
    this.lite = false;
    this.videoPoster = null;
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
    this.rowClasses = null;
    this.leftColClasses = null;
    this.rightColClasses = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define this.rowClasses and this.colClasses css classes.
    if (this.alignContent === 'right') {
      this.rowClasses = 'row justify-content-between';
      this.leftColClasses = 'col-12 col-lg-5 order-lg-2 d-flex align-items-center';
      this.rightColClasses = 'col-12 col-lg-6 d-flex align-items-center order-lg-1';
    }
    else {
      //is left
      this.rowClasses = 'row justify-content-between';
      this.leftColClasses = 'col-12 col-lg-5 order-lg-1 d-flex align-items-center';
      this.rightColClasses = 'col-12 col-lg-6 d-flex align-items-center order-lg-2';
    }
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  componentDidLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-video-section': true, 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", null, h("div", { class: "container" }, h("div", { class: this.rowClasses }, h("div", { class: this.leftColClasses }, h("div", { class: {
        'gwds-video-section__content-wrapper': true,
      } }, this.mainTitle ? h("h2", { class: "h3 mt-0" }, this.mainTitle) : null, h("slot", null), this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)), h("div", { class: this.rightColClasses }, this.lite ? h("gwds-video-lite", { videoId: this.videoId, poster: this.videoPoster }) : h("gwds-video", { videoId: this.videoId, fullWidth: true })))))));
  }
};
GwdsVideoSection.style = gwdsVideoSectionCss;

export { GwdsVideoSection as gwds_video_section };
