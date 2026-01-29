import { MaybeRefOrGetter, MaybeRef, ComputedRef } from 'vue';

type AnyFn = (...args: any[]) => any;
type Reactified<T, Computed extends boolean> = T extends (...args: infer A) => infer R ? (...args: {
    [K in keyof A]: Computed extends true ? MaybeRefOrGetter<A[K]> : MaybeRef<A[K]>;
}) => ComputedRef<R> : never;
type ReactifyReturn<T extends AnyFn = AnyFn, K extends boolean = true> = Reactified<T, K>;
interface ReactifyOptions<T extends boolean> {
    /**
     * Accept passing a function as a reactive getter
     *
     * @default true
     */
    computedGetter?: T;
}
/**
 * Converts plain function into a reactive function.
 * The converted function accepts refs as it's arguments
 * and returns a ComputedRef, with proper typing.
 *
 * @param fn - Source function
 * @param options - Options
 *
 * @__NO_SIDE_EFFECTS__
 */
declare function reactify<T extends AnyFn, K extends boolean = true>(fn: T, options?: ReactifyOptions<K>): ReactifyReturn<T, K>;
/** @deprecated use `reactify` instead */
declare const createReactiveFn: typeof reactify;

export { createReactiveFn, reactify };
export type { Reactified, ReactifyOptions, ReactifyReturn };
