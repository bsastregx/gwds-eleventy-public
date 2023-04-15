const EleventyFetch = require("@11ty/eleventy-fetch");

async function getBlogPosts() {
  const url = `https://genexus.blog/wp-json/genexus/v1/posts?search=`;
  const response = EleventyFetch(url, {
    duration: "1s", // save for 1 second
    type: "json", // we’ll parse JSON for you
  });
  return response;
}

module.exports = getBlogPosts;
