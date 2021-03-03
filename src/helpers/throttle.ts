/* eslint-disable */
// Code from https://github.com/bameyrick/throttle-typescript //

export default function throttle(func: () => void, limit: number): () => void {
  let inThrottle: boolean;

  return function (this: any): any {
    const args = arguments;
    const context = this;

    if (!inThrottle) {
      inThrottle = true;
      func.apply(context, args as any);
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
