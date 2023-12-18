# contentEditable 的 div 元素，让聚焦时光标到最后

```js
function focus() {
    const input = inputItemRef.current
    if (!input) return

    input.innerText = initialValue === null ? "" : initialValue
    const range = window.getSelection()
    range?.selectAllChildren(input)
    range?.collapseToEnd()
}
```

这是在React中写的一个函数，所以用了ref来获取input。  

**其中让光标跑到最后的关键是，`window.getSelection()`的函数，通过range来找到我们需要移动光标的元素，然后调用collapseToEnd就可以让光标跑到最后。**

contentEditable和input并不相同，如果是input元素，可以去调用自身元素上面的函数`selectionSetSelectionRange`来设定。