import throttle from '../throttle';

describe('throttle() ', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('throttle has been called once', () => {
    const callback = jest.fn();
    const throttled = throttle(callback, 100);

    const t = setInterval(() => {
      throttled();
    }, 50);

    jest.advanceTimersByTime(100);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    clearInterval(t);
  });
  it('throttle has been called three times', () => {
    const callback = jest.fn();
    const throttled = throttle(callback, 100);

    const t = setInterval(() => {
      throttled();
    }, 50);

    jest.advanceTimersByTime(400);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(3);
    clearInterval(t);
  });
});
