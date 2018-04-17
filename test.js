const test = require('tape');
const lazy = require('./index');

test('it creates a source with a single lazyly evaluated value then completes', t => {
  t.plan(8);
  let value;
  const downwardsExpectedType = [
    [0, 'function'],
    [1, 'string'],
    [2, 'undefined'],
  ];
  const downwardsExpected = ['one value'];

  function sink(type, data) {
    const et = downwardsExpectedType.shift();
    t.equals(type, et[0], 'downwards type is expected: ' + et[0]);
    t.equals(typeof data, et[1], 'downwards data type is expected: ' + et[1]);
    if (type === 0) {
      sink.ask = data;
    } else if (type === 1) {
      const e = downwardsExpected.shift();
      t.equals(data, e, 'downwards data is expected: ' + e);
    }
    if (type === 0 || type === 1) sink.ask(1);
  }

  const src = lazy(() => value);

  setTimeout(() => src(0, sink), 5);

  value = 'one value';

  setTimeout(() => {
    t.pass('nothing else happens');
    t.end();
  }, 10);
});
