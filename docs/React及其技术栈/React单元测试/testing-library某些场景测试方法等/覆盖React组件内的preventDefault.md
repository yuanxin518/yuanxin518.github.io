### 组件

```js
const Component = () => {
    useEffect(() => {
        window.addEventListener("contextmenu", (event) => {
            event.preventDefault()
        })
    })

    return <div>Component</div>
}
```

### 测试用例

```js
import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

describe("App", () => {
    test("App component", () => {
        render(<App />)

        const isDefault = fireEvent.contextMenu(document.body)
        expect(isDefault).toBeFalsy()
    })
})
```

我们无法通过 testing-library 去访问 React 组件内的函数，而只能模拟用户的操作来进行代码的覆盖。现在我们要覆盖到 window 上绑定的`contextmenu`的事件监听，那只能通过模拟用户去触发 contextmenu 事件。

### React 组件内的事件模型改造

在上述的代码测试中，我们绑定 contextMenu 的事件监听函数在了 `window` 对象上，在测试的时候是对`document.body`进行的触发。

为了让这些函数更加的贴合 React 的组件，我们在组件渲染的时候用 React 组件去充当 window 对象，也就是将 React 根组件覆盖到 html 的标签上。

```js
const Component = (children) => {
    const contextMenuEventCallback = (event) => {
        event.preventDefault()
    }

    return (
        <div
            onContextMenu={(event) => {
                contextMenuEventCallback(event)
            }}
        >
            {children}
        </div>
    )
}
```

这样也就是用一个 div 来充当 html 中的根标签，之前所绑定在 window 上的监听函数，现在直接绑定在这个 React 根组件上。 因为这个组件在界面的渲染中是始终铺满 html 标签的，所以在 html 标签任意位置处右键都能触发这个事件。
