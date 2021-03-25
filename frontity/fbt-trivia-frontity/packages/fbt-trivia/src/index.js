import Root from "./components"

const FbtTrivia = {
  name: "fbt-trivia",
  roots: {
    theme: Root
  },

  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [
        ["Home","/"],
      ],
      featured: {
        showOnList: false,
        showOnPost: false,
      }
    }
  },
  
  actions: {
    theme: {}
  }
};

export default FbtTrivia
