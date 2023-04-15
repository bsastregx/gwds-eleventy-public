import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsLanguageSwitcherCss = ":host{display:block}.gwds-language-switcher{display:inline-flex;flex-direction:column}.gwds-language-switcher__selected-lang{position:relative;display:inline-flex;gap:var(--gwds__space--xs);font-weight:var(--gwds__font-weight--semibold);cursor:pointer;align-items:center}.gwds-language-switcher__selected-lang i{font-size:var(--gwds__font-size--l)}.gwds-language-switcher__selected-lang:hover .gwds-language-switcher__list{display:inline-flex}.gwds-language-switcher__list{position:absolute;top:0;transform:translateY(-120%);display:none;flex-direction:column;margin:0;background-color:var(--gwds__color--white);font-weight:var(--gwds__font-weight--regular)}.gwds-language-switcher__list-link{display:block;text-decoration:none;padding:var(--gwds__space--xs) var(--gwds__space--s) !important}.gwds-language-switcher__list-link:hover{background-color:var(--gwds__color--violet-50);text-decoration:none}.gwds-language-switcher__list:after{content:\"\";display:block;width:100%;height:16px;position:absolute;bottom:0;transform:translateY(100%)}";

const GwdsLanguageSwitcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.enUrl = null;
    this.esUrl = null;
    this.ptUrl = null;
    this.selectedLang = null;
  }
  renderSelectedLang() {
    if (this.selectedLang) {
      if (this.selectedLang === 'en') {
        return 'English';
      }
      else if (this.selectedLang === 'es') {
        return 'Español';
      }
      else if (this.selectedLang === 'pt') {
        return 'Português';
      }
    }
    else {
      return 'No language selected';
    }
  }
  componentWillLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-language-switcher': true } }, h("span", { class: "gwds-language-switcher__selected-lang" }, h("gwds-icon", { src: "/assets/icons/globe.svg" }), " ", this.renderSelectedLang(), h("ul", { class: "gwds-language-switcher__list unstyled gwds__shadow--tiny" }, this.selectedLang !== 'en' ? (h("li", { class: "gwds-language-switcher__list-item" }, h("a", { class: "gwds-language-switcher__list-link", href: this.enUrl }, "English"))) : null, this.selectedLang !== 'es' ? (h("li", { class: "gwds-language-switcher__list-item" }, h("a", { class: "gwds-language-switcher__list-link", href: this.esUrl }, "Espa\u00F1ol"))) : null, this.selectedLang !== 'pt' ? (h("li", { class: "gwds-language-switcher__list-item" }, h("a", { class: "gwds-language-switcher__list-link", href: this.ptUrl }, "Portugu\u00EAs"))) : null))));
  }
};
GwdsLanguageSwitcher.style = gwdsLanguageSwitcherCss;

export { GwdsLanguageSwitcher as gwds_language_switcher };
