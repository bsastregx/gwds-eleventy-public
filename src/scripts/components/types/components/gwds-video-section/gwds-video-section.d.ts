export declare class GwdsVideoSection {
  bgColor: string;
  mainTitle: string;
  pt0: boolean;
  pb0: boolean;
  alignContent: 'left' | 'right';
  videoId: string;
  lite: boolean;
  videoPoster: string;
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
  rowClasses: string;
  leftColClasses: string;
  rightColClasses: string;
  textColor: string;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): any;
}
