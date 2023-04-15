import { EventEmitter } from '../../stencil-public-runtime';
export declare class GwdsAccordionItem {
  accordionOpened: EventEmitter<object>;
  accordionCollapse: HTMLDivElement;
  accordionBody: HTMLDivElement;
  active: boolean;
  itemId: string;
  itemTitle: string;
  accordionCollapseHeight: string;
  componentWillLoad(): void;
  componentDidLoad(): void;
  closeAccordion(): void;
  openAccordion(): void;
  toggleAccordion(): void;
  watchActiveHandler(newValue: boolean): void;
  render(): any;
}
