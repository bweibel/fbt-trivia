const settings = {
  "name": "fbt-trivia-frontity",
  "state": {
    "frontity": {
      "url": "https://fbt-trivia.com",
      "title": "FBT Trivia",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "fbt-trivia",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost:10008/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
