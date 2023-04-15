export declare class GwdsMessage {
  bgColor: string;
  fixed: boolean;
  linkLabel: string;
  linkUrl: string;
  linkTarget: '_blank' | '_self';
  buttonLabel: string;
  buttonUrl: string;
  buttonTarget: '_blank' | '_self';
  buttonCloses: boolean;
  closed: boolean;
  hideClose: boolean;
  el: HTMLElement;
  wrapper: HTMLDivElement;
  opacity0: boolean;
  height0: boolean;
  textColor: string;
  watchPropHandler(newValue: boolean): void;
  setHeight(): void;
  close(): void;
  componentWillLoad(): void;
  render(): any;
}
