export declare class GwdsBlocks {
  bgColor: string;
  mainTitle: string;
  description: string;
  firstButtonLabel: string;
  firstButtonUrl: string;
  firstButtonType: 'primary' | 'secondary' | 'tertiary';
  firstButtonTarget: '_blank' | '_self';
  secondButtonLabel: string;
  secondButtonUrl: string;
  secondButtonType: 'primary' | 'secondary' | 'tertiary';
  secondButtonTarget: '_blank' | '_self';
  thirdButtonLabel: string;
  thirdButtonUrl: string;
  thirdButtonType: 'primary' | 'secondary' | 'tertiary';
  thirdButtonTarget: '_blank' | '_self';
  linkUrl: string;
  linkLabel: string;
  linkTarget: '_blank' | '_self';
  display: 'grid-2' | 'grid-3' | 'grid-aside';
  textColor: string;
  colClasses: string;
  componentWillLoad(): void;
  perRow(): "2" | "3";
  render(): any;
}
