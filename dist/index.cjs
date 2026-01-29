'use strict';

const vue = require('vue');

// @__NO_SIDE_EFFECTS__
function reactify(fn, options) {
  const unrefFn = options?.computedGetter === false ? vue.unref : vue.toValue;
  return function(...args) {
    return vue.computed(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}
const createReactiveFn = reactify;

exports.createReactiveFn = createReactiveFn;
exports.reactify = reactify;
