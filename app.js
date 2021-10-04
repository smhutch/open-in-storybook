const express = require("express");

const app = express();

const BRANCH = "main";
const PROJECT = "606de94e2208ee0021648fb9";
const CHROMATIC_BASE_URL = `https://${BRANCH}--${PROJECT}.chromatic.com`;
const PATH_QUERY = "?path=";

const toChromaticUrl = (path) => `${CHROMATIC_BASE_URL}${PATH_QUERY}${path}`;

const shortcuts = [
  ["/tokens", "/story/docs-tokens--page"],
  ["/themes", "/story/docs-themes--page"],
  ["/palette", "/story/docs-palette--page"]
];

shortcuts.forEach(([route, storybookPath]) => {
  app.get(route, (_req, res) => {
    res.redirect(toChromaticUrl(storybookPath));
  });
});

app.get("*", (req, res) => {
  res.redirect(toChromaticUrl(req.url));
});

app.listen(8080, () => console.log("Listening on port 8080"));
