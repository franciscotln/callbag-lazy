const lazy = f => (start, sink) => {
  if (start === 0) {
    sink(0, () => {});
    sink(1, f());
    sink(2);
  }
};

export default lazy;
