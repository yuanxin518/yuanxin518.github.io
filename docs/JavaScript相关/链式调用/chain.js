function Chain(init) {
  this._value = +init || 0;

  return this;
}

Chain.prototype = {
  add(addNum) {
    this._value += +addNum || 0;
    return this;
  },
  end() {
    return this._value;
  },
};
console.log(new Chain().add(1).add(3).end());
