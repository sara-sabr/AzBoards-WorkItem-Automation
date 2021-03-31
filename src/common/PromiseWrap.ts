/**
 * From https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts
 *
 * Rather not install a library just for one function, so just copied it in.
 *
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error> (
    promise: Promise<T>,
    errorExt?: object
  ): Promise<[U, undefined] | [null, T]> {
    return promise
      .then<[null, T]>((data: T) => [null, data])
      .catch<[U, undefined]>((err: U) => {
        if (errorExt) {
          Object.assign(err, errorExt);
        }

        return [err, undefined];
      });
  }

  export default to;