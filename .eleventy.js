const moment = require("moment");
const hydrate = require("./src/hydrate");
require("dotenv").config();

module.exports = (eleventyConfig) => {
  // refresh the browser when _site/css files are updated!
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/css/**/*.css",
  });

  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  // Hydrate app (gwds StencilJs)
  eleventyConfig.addTransform("hydrate", async (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      try {
        const results = await hydrate.renderToString(content, {
          clientHydrateAnnotations: true,
          removeScripts: false,
          removeUnusedStyles: false,
        });
        return results.html;
      } catch (error) {
        return error;
      }
    }
    return content;
  });

  // This will copy these folders to the output without modifying them at all
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  return {
    markdownTemplateEngine: "njk",
    //dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
    },
  };
};
