# contentEditable 的 div 元素，让聚焦时光标到最后

```js
function focus() {
    const input = inputItemRef.current;
    if (!input) return;

    input.innerText = initialValue === null ? "" : initialValue;
    const range = window.getSelection();
    range?.selectAllChildren(input);
    range?.collapseToEnd();
}
```

这是在 React 中写的一个函数，所以用了 ref 来获取 input。

**其中让光标跑到最后的关键是，`window.getSelection()`的函数，通过 range 来找到我们需要移动光标的元素，然后调用 collapseToEnd 就可以让光标跑到最后。**

contentEditable 和 input 并不相同，如果是 input 元素，可以去调用自身元素上面的函数`selectionSetSelectionRange`来设定。
