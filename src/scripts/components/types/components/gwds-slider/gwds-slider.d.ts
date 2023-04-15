export declare class GwdsSlider {
  cover: boolean;
  gap: boolean;
  padding: boolean;
  orientation: 'landscape' | 'portrait';
  sliderId: string;
  cards: boolean;
  individual: boolean;
  dark: boolean;
  paddingValue: string;
  componentWillLoad(): void;
  perPage(): 1 | 2 | 3;
  perPage1399(): 1 | 2 | 3;
  componentDidLoad(): void;
  render(): any;
}
