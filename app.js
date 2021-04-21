const express = require("express");

const app = express();

const BRANCH = "master";
const PROJECT = "606de94e2208ee0021648fb9";
const CHROMATIC_BASE_URL = `https://${BRANCH}--${PROJECT}.chromatic.com`;
const PATH_QUERY = "?path=";

const toChromaticUrl = (path) => `${CHROMATIC_BASE_URL}${PATH_QUERY}${path}`;

const endpoints = [["/tokens", "/story/docs-tokens--page"]];

endpoints.forEach(([route, storybookPath]) => {
  app.get(route, (_req, res) => {
    res.redirect(toChromaticUrl(storybookPath));
  });
});

app.listen(8080, () => console.log("Listening on port 8080"));
