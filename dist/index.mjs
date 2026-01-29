import { unref, toValue, computed } from 'vue';

// @__NO_SIDE_EFFECTS__
function reactify(fn, options) {
  const unrefFn = options?.computedGetter === false ? unref : toValue;
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}
const createReactiveFn = reactify;

export { createReactiveFn, reactify };
