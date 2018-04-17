const lazy = f => (start, sink) => {
  if (start === 0) [() => {}, f(), void 0].forEach((d, t) => sink(t, d));
};

module.exports = lazy;
