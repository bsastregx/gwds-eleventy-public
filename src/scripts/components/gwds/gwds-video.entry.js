import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsVideoCss = ":host{display:block;line-height:0;width:100%}.gwds-video--full-width{display:block;width:100%}.gwds-video__container .video{aspect-ratio:16/9;width:100%}@supports not (aspect-ratio: 1){.gwds-video_ontainer{position:relative;padding-bottom:52.25%;padding-top:30px;height:0;overflow:hidden}.gwds-video_ontainer iframe,.gwds-video_ontainer object,.gwds-video_ontainer embed{position:absolute;top:0;left:0;width:100%;height:100%}}";

const GwdsVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.videoId = null;
    this.source = 'youtube';
    this.fullWidth = false;
  }
  componentWillLoad() { }
  componentDidLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-video': true, 'gwds-video--full-width': this.fullWidth } }, h("div", { class: { 'gwds-video__container': this.fullWidth } }, h("iframe", { loading: "lazy", class: "video", src: `https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0`, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullScreen: true }), h("slot", null))));
  }
};
GwdsVideo.style = gwdsVideoCss;

export { GwdsVideo as gwds_video };
