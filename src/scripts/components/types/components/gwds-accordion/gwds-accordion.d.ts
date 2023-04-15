export declare class GwdsAccordion {
  bgColor: string;
  mainTitle: string;
  pt0: boolean;
  pb0: boolean;
  el: HTMLElement;
  textColor: string;
  pageJustLoaded: boolean;
  accordionOpenedHandler(event: CustomEvent<object>): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  resizeObserver(): void;
  closeAccordions(): void;
  render(): any;
}
