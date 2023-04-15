export declare class GwdsLanguageSwitcher {
  enUrl: string;
  esUrl: string;
  ptUrl: string;
  selectedLang: 'en' | 'es' | 'pt';
  renderSelectedLang(): "English" | "Español" | "Português" | "No language selected";
  componentWillLoad(): void;
  render(): any;
}
