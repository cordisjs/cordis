// ? Can only have one object signature per `type` declaration; so we use two types and unify them.

/**
 * Marks the given properties as required
 */
type RequiredFilter<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

/**
 * Re-applies all the other properties
 */
type ReapplyFilter<T> = {
  [P in keyof T]: T[P];
};

/**
 * Makes only the K properties required on the T interface
 */
export type RequiredProp<T, K extends keyof T = keyof T> = ReapplyFilter<T> & RequiredFilter<T, K>;
