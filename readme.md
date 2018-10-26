# callbag-lazy

Callbag source for lazy evaluation at subscription time.
Weighs <span class="weight">98</span> bytes (minified & gzipped).

`npm install callbag-lazy`

## Example

### window inner width
```js
const lazy = require('callbag-lazy');
const subscribe = require('callbag-subscribe')

const src = lazy(() => window.innerWidth);

const observer = {
  next(v) {
    console.log(`Next(${v})`);
  },
  complete() {
    console.log('Done()');
  }
};

setTimeout(() => subscribe(observer)(src), 2000);
// logs the window width at subscription time then logs 'Done()'
```

This source is equivalent to the sources below:

```js
const create = require('callbag-create');
const { fromIter, map, pipe } = require('callbag-basics');

const src1 = pipe(
  fromIter([() => window.innerWidth]),
  map(f => f())
);

const src2 = create((sink) => {
  sink(1, window.innerWith);
  sink(2);
});
```
