import * as foo from './foo';

/**
 * This will break auto import in VSCode and trigger the TS server error with the log:
 * `Debug Failure. False expression: Expected the specifier to be a default export`
 */

export default foo.bar;



/**
 * This seems fine.
 */
// const bar = foo.bar;
// export default bar;
