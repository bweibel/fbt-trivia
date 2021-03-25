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
          "url": "http://localhost:10008/",
          "postTypes": [
            {
              type: "trivia",
              endpoint: "trivia",
              archive: "/trivia"
            },
            {
              type: "round",
              endpoint: "round",
              archive: "/round"
            },
            {
              type: "question",
              endpoint: "question",
              archive: "/question"
            }
          ]
        
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
