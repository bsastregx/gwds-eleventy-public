const EleventyFetch = require("@11ty/eleventy-fetch");

async function lookAtMe() {
  const url = `${process.env.HOST}/api/look-at-me`;
  const response = EleventyFetch(url, {
    duration: "1s", // save for 1 second
    type: "json", // we’ll parse JSON for you
  });
  return response;
}

module.exports = lookAtMe;
