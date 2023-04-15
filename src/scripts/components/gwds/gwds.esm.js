import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-bf16d04e.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-9794f747.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["gwds-good-news-section",[[4,"gwds-good-news-section",{"sectionTitle":[1,"section-title"],"data":[16],"test":[1],"layout":[1]}]]],["gwds-video-section",[[4,"gwds-video-section",{"bgColor":[1,"bg-color"],"mainTitle":[1,"main-title"],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"alignContent":[1,"align-content"],"videoId":[1,"video-id"],"lite":[4],"videoPoster":[1,"video-poster"],"firstButtonLabel":[1,"first-button-label"],"firstButtonUrl":[1,"first-button-url"],"firstButtonType":[1,"first-button-type"],"firstButtonTarget":[1,"first-button-target"],"secondButtonLabel":[1,"second-button-label"],"secondButtonUrl":[1,"second-button-url"],"secondButtonType":[1,"second-button-type"],"secondButtonTarget":[1,"second-button-target"],"thirdButtonLabel":[1,"third-button-label"],"thirdButtonUrl":[1,"third-button-url"],"thirdButtonType":[1,"third-button-type"],"thirdButtonTarget":[1,"third-button-target"],"rowClasses":[32],"leftColClasses":[32],"rightColClasses":[32],"textColor":[32]}]]],["gwds-blocks",[[4,"gwds-blocks",{"bgColor":[1,"bg-color"],"mainTitle":[1,"main-title"],"description":[1],"firstButtonLabel":[1,"first-button-label"],"firstButtonUrl":[1,"first-button-url"],"firstButtonType":[1,"first-button-type"],"firstButtonTarget":[1,"first-button-target"],"secondButtonLabel":[1,"second-button-label"],"secondButtonUrl":[1,"second-button-url"],"secondButtonType":[1,"second-button-type"],"secondButtonTarget":[1,"second-button-target"],"thirdButtonLabel":[1,"third-button-label"],"thirdButtonUrl":[1,"third-button-url"],"thirdButtonType":[1,"third-button-type"],"thirdButtonTarget":[1,"third-button-target"],"linkUrl":[1,"link-url"],"linkLabel":[1,"link-label"],"linkTarget":[1,"link-target"],"display":[1],"textColor":[32],"colClasses":[32]}]]],["gwds-message",[[4,"gwds-message",{"bgColor":[1,"bg-color"],"fixed":[4],"linkLabel":[1,"link-label"],"linkUrl":[1,"link-url"],"linkTarget":[1,"link-target"],"buttonLabel":[1,"button-label"],"buttonUrl":[1,"button-url"],"buttonTarget":[1,"button-target"],"buttonCloses":[4,"button-closes"],"closed":[4],"hideClose":[1028,"hide-close"],"opacity0":[32],"height0":[32],"textColor":[32]}]]],["gwds-stack-2",[[0,"gwds-stack-2",{"bgColor":[1,"bg-color"],"mainTitle":[1,"main-title"],"description":[1],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"textColor":[32],"slottedContent":[32]}]]],["gwds-card",[[4,"gwds-card",{"bgColor":[1,"bg-color"],"imgSrc":[1,"img-src"],"imgAlt":[1,"img-alt"],"tagLabel":[1,"tag-label"],"titleLabel":[1,"title-label"],"description":[1],"linkUrl":[1,"link-url"],"linkLabel":[1,"link-label"],"linkTarget":[1,"link-target"],"noShadow":[4,"no-shadow"],"textColor":[32]}]]],["gwds-language-switcher",[[0,"gwds-language-switcher",{"enUrl":[1,"en-url"],"esUrl":[1,"es-url"],"ptUrl":[1,"pt-url"],"selectedLang":[1,"selected-lang"]}]]],["gwds-learn-more",[[4,"gwds-learn-more",{"bgColor":[1,"bg-color"],"mainTitle":[1,"main-title"],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"firstButtonLabel":[1,"first-button-label"],"firstButtonUrl":[1,"first-button-url"],"firstButtonType":[1,"first-button-type"],"firstButtonTarget":[1,"first-button-target"],"secondButtonLabel":[1,"second-button-label"],"secondButtonUrl":[1,"second-button-url"],"secondButtonType":[1,"second-button-type"],"secondButtonTarget":[1,"second-button-target"],"thirdButtonLabel":[1,"third-button-label"],"thirdButtonUrl":[1,"third-button-url"],"thirdButtonType":[1,"third-button-type"],"thirdButtonTarget":[1,"third-button-target"],"rowClasses":[32],"colClasses":[32],"textColor":[32]}]]],["gwds-list",[[4,"gwds-list",{"mainTitle":[1,"main-title"],"description":[1],"bgColor":[1,"bg-color"],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"textColor":[32],"hasDescriptionSlot":[32]}]]],["gwds-logos",[[4,"gwds-logos",{"mainTitle":[1,"main-title"]}]]],["gwds-look-at-me",[[4,"gwds-look-at-me",{"bgColor":[1,"bg-color"],"preTitle":[1,"pre-title"],"mainTitle":[1,"main-title"],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"alignContent":[1,"align-content"],"bgImage":[1,"bg-image"],"bgSize":[1,"bg-size"],"description":[1],"firstButtonLabel":[1,"first-button-label"],"firstButtonUrl":[1,"first-button-url"],"firstButtonType":[1,"first-button-type"],"firstButtonTarget":[1,"first-button-target"],"secondButtonLabel":[1,"second-button-label"],"secondButtonUrl":[1,"second-button-url"],"secondButtonType":[1,"second-button-type"],"secondButtonTarget":[1,"second-button-target"],"thirdButtonLabel":[1,"third-button-label"],"thirdButtonUrl":[1,"third-button-url"],"thirdButtonType":[1,"third-button-type"],"thirdButtonTarget":[1,"third-button-target"],"rowClasses":[32],"colClasses":[32],"bgPosition":[32],"textColor":[32]}]]],["gwds-show-and-tell",[[4,"gwds-show-and-tell",{"bgColor":[1,"bg-color"],"preTitle":[1,"pre-title"],"mainTitle":[1,"main-title"],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"alignContent":[1,"align-content"],"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"firstButtonLabel":[1,"first-button-label"],"firstButtonUrl":[1,"first-button-url"],"firstButtonType":[1,"first-button-type"],"firstButtonTarget":[1,"first-button-target"],"secondButtonLabel":[1,"second-button-label"],"secondButtonUrl":[1,"second-button-url"],"secondButtonType":[1,"second-button-type"],"secondButtonTarget":[1,"second-button-target"],"thirdButtonLabel":[1,"third-button-label"],"thirdButtonUrl":[1,"third-button-url"],"thirdButtonType":[1,"third-button-type"],"thirdButtonTarget":[1,"third-button-target"],"rowClasses":[32],"leftColClasses":[32],"rightColClasses":[32],"textColor":[32]}]]],["live-2022-card",[[0,"live-2022-card",{"url":[1],"cardTitle":[1,"card-title"],"speaker1Name":[1,"speaker-1-name"],"speaker1AvatarUrl":[1,"speaker-1-avatar-url"],"speaker2Name":[1,"speaker-2-name"],"speaker2AvatarUrl":[1,"speaker-2-avatar-url"],"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"bgColor":[1,"bg-color"],"minWidth":[1,"min-width"],"maxWidth":[1,"max-width"],"textColor":[32]}]]],["live-2022-search-box",[[4,"live-2022-search-box"]]],["gwds-accordion",[[4,"gwds-accordion",{"bgColor":[1,"bg-color"],"mainTitle":[1,"main-title"],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"textColor":[32],"pageJustLoaded":[32]},[[0,"accordionOpened","accordionOpenedHandler"]]]]],["gwds-accordion-item",[[4,"gwds-accordion-item",{"active":[1540],"itemId":[1537,"item-id"],"itemTitle":[1,"item-title"],"accordionCollapseHeight":[32]}]]],["gwds-breadcrumbs",[[0,"gwds-breadcrumbs",{"url":[1],"breadcrumbs":[32]}]]],["gwds-component-title",[[4,"gwds-component-title",{"label":[1],"experimental":[4],"showCode":[32]}]]],["gwds-gradient-title",[[4,"gwds-gradient-title",{"from":[1],"to":[1],"center":[4]}]]],["gwds-list-item",[[4,"gwds-list-item",{"iconUrl":[1,"icon-url"],"iconAlt":[1,"icon-alt"]}]]],["gwds-logo",[[0,"gwds-logo",{"name":[1],"imgSrc":[1,"img-src"],"imgAlt":[1,"img-alt"],"label":[1],"size":[1],"linkUrl":[1,"link-url"]}]]],["gwds-quote",[[4,"gwds-quote",{"bgColor":[1,"bg-color"],"whiteText":[4,"white-text"],"cite":[1],"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"personLocation":[1,"person-location"],"personName":[1,"person-name"],"centerVertical":[4,"center-vertical"],"textColor":[32]}]]],["gwds-slider",[[4,"gwds-slider",{"cover":[4],"gap":[4],"padding":[4],"orientation":[1],"sliderId":[1,"slider-id"],"cards":[4],"individual":[4],"dark":[4],"paddingValue":[32]}]]],["gwds-stack",[[4,"gwds-stack",{"bgColor":[1,"bg-color"],"mainTitle":[1,"main-title"],"description":[1],"pt0":[4,"pt-0"],"pb0":[4,"pb-0"],"textColor":[32]}]]],["gwds-tooltip",[[4,"gwds-tooltip",{"width":[1],"label":[1],"position":[1],"display":[32],"pointerEventsAuto":[32]}]]],["gwds-good-news",[[4,"gwds-good-news",{"category":[1],"newsTitle":[1,"news-title"],"authorName":[1,"author-name"],"authorAvatarUrl":[1,"author-avatar-url"],"authorAvatarAlt":[1,"author-avatar-alt"],"imgUrl":[1,"img-url"],"imgAlt":[1,"img-alt"],"date":[1],"url":[1],"layout":[1]}]]],["gwds-button",[[0,"gwds-button",{"label":[1],"type":[1],"size":[1],"url":[1],"target":[1],"m0":[4,"m-0"]}]]],["gwds-stack-item",[[4,"gwds-stack-item",{"iconUrl":[1,"icon-url"],"iconAlt":[1,"icon-alt"],"mainTitle":[1,"main-title"],"buttonLabel":[1,"button-label"],"buttonUrl":[1,"button-url"],"buttonBlank":[4,"button-blank"],"visible":[4]}]]],["gwds-form-input",[[0,"gwds-form-input",{"placeholder":[1],"minWidth":[1,"min-width"],"maxWidth":[1,"max-width"]}]]],["gwds-video",[[4,"gwds-video",{"videoId":[1,"video-id"],"source":[1],"fullWidth":[4,"full-width"]}]]],["gwds-video-lite",[[0,"gwds-video-lite",{"videoId":[1,"video-id"],"maxWidth":[1,"max-width"],"poster":[1],"playLabel":[1,"play-label"],"params":[1],"activated":[32],"preconnected":[32],"needsYTApiForAutoplay":[32],"ytApiPromise":[32]}]]],["gwds-icon",[[0,"gwds-icon",{"color":[1025],"lazy":[4],"size":[1],"src":[513],"isVisible":[32],"svgContent":[32]}]]],["gwds-avatar",[[4,"gwds-avatar",{"imgUrl":[1,"img-url"],"imgAlt":[1,"img-alt"],"size":[1],"line":[4]}]]],["gwds-tag",[[0,"gwds-tag",{"label":[1],"bgColor":[1,"bg-color"],"url":[1],"textColor":[32]}]]],["gwds-grid",[[4,"gwds-grid",{"perRow":[1,"per-row"],"gap":[1]}]]]], options);
});
