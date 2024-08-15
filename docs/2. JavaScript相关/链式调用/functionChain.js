function functionChain(init) {
  const value = +init || 0;

  return {
    add(num) {
      return functionChain(value + num);
    },
    end() {
      return value;
    },
  };
}

console.log(functionChain().add(1).add(3).end());
