const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.triggerTests = functions.https.onRequest(async (req, res) => {
  const response = await fetch("https://api.github.com/repos/fix1t/self-github-workflows/dispatches", {
    method: "POST",
    headers: {
      "Accept": "application/vnd.github.everest-preview+json",
      "Authorization": `Bearer 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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({event_type: "run_tests"}),
  });

  if (response.ok) {
    res.status(200).send("GitHub Actions workflow triggered.");
  } else {
    res.status(response.status).send("Failed to trigger GH-Actions workflow");
  }
});
