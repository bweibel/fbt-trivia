const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/fbt-trivia/src/index.js</pre>
    </>
  );
};

export default {
  name: "fbt-trivia",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
