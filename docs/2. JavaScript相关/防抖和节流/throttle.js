function throttle(func, time, immediate) {
  let timer = Date.now();

  if (immediate) {
    func();
  }

  return (args) => {
    const currentTime = Date.now();

    if (currentTime - timer > time) {
      func(args);
      timer = currentTime;
    }
  };
}

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const throttleFn = throttle(
  () => {
    console.log("throttle");
  },
  100,
  true
);

(async () => {
  for (let i = 0; i < 10; i++) {
    await sleep(10);
    throttleFn();
  }
})();
