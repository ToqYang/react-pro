module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,png,txt,js,css}"],
  swDest: "build/sw.js",
  //   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swSrc: "src/sw-template.js",
};
