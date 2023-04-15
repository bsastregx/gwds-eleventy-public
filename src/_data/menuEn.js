const EleventyFetch = require("@11ty/eleventy-fetch");

async function getMenu() {
  const url = `${process.env.HOST}/api/main-menu?populate=deep`;
  const response = EleventyFetch(url, {
    duration: "1s", // save for 1 second
    type: "json", // we’ll parse JSON for you
  });
  return response;
}

module.exports = getMenu;
