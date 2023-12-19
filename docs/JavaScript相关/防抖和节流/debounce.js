// function debounce(func, wait) {
//   let timer = null;

//   return () => {
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }

//     timer = setTimeout(() => {
//       func();
//     }, wait);
//   };
// }

// const sleep = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });

// const debounceTest = debounce(() => {
//   console.log("debounce");
// }, 200);

// (async () => {
//   debounceTest();
//   debounceTest();
//   debounceTest();
//   await sleep(200);
//   debounceTest();
// })();

// 增强的debounce
function debounceEnhanced1(func, wait) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

const debounceEnhanced1Test = debounceEnhanced1((args) => {
  console.log(args);
}, 200);

debounceEnhanced1Test("test");
