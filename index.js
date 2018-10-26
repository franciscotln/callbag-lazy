const lazy = f => (start, sink) => {
  if (start === 0) {
    let unsubed = false;
    sink(0, type => {
      if (type === 2) unsubed = true;
    });
    sink(1, f());
    if (!unsubed) sink(2);
  }
};

export default lazy;
