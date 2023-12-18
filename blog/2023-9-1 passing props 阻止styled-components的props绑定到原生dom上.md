styled-components 是用于 react 的一个 css in js 的库。

下面是一个 styled-components 创建的一个 css in js 的组件。

```js
<Styled borderColor={"red"}>{item}</Styled>
```

## 1. Passing props

[React - Passing props](https://zh-hans.react.dev/learn/passing-props-to-a-component)

[Styled-components - Passed props](https://styled-components.com/docs/basics#passed-props)

在 React 中的 passing props 和 styled-components 的 passed props，都是对 props 传递的处理。

对于标准的 html 标签和 JSX 的标签，传递 props 的时候造成的结果是不一样的。

如果是**标准的 html 标签**，例如一个`img`标签，**传递的`width`、`height`甚至`className`（className 是 react 符合 html 标准的属性，会被注入成 class）都会被直接传递到 dom 中。**也就是说最后在页面上检查元素标签的时候会出现这些 property。就像下面这样

```html
<img width="100" class="xxx" />
```

但是是一个 React 的 JSX 组件，我们在这个组件上传递 props，这个 props 就是属于这个 react 的组件，并不会注入到任何的 html 标签上，因为这就相当于是一个函数的参数。

## 2. styled-components 中的参数传递

### 编写组件

**但是在 styled-components 中，会因为组件创建的逻辑产生不同的结果。**我们会通过`styled.div`之类的去创建一个组件，通过`styled-components`创建出一个 React 的组件，但是有些时候我们会对这个组件进行参数的传递，比如下面这种情况。

```js
//这只是其中的一种传参的写法
const Component =
    styled.div <
    { customColor: string } >
    (({ customColor }) => {
        return css`
            height: 100px;
            color: ${customColor};
        `
    })
```

### 组件传参

此时我们要对这个组件及进行传参，传参的方式是和 React 一样的。

```js
const ReactComponent:React.FC<...> = () => {

    return (
        <Component customColor={"red"}/>
    )
}
```

### 最终渲染 dom 的结果

通过这样的方式进行传参之后，在页面中检查元素会发现，div 标签上面出现了一个 customcolor="red"（注意 大驼峰被改成了全小写。

```html
<div class="sc-xxxx" customcolor="red"></div>
```

styled-components 还会进行下面的一个提示的警告。

> React does not recognize the `customColor` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `customcolor` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

**我们的预期是最终在页面中渲染结果如下**

```html
<div class="sc-xxxx" />
```

显然实际结果和我们的预期结果之间，差了一个不希望被注入到 dom 标签上面的 property。这要根据 styled-components 的 props 的 passing 逻辑来处理，根据文档中的说法，任何使用在 styled-components 的组件上面的 property 都会被注入到 html 中，**如果我们不想被注入，要在属性前面加$来屏蔽掉**。所以最终的解决方法是如下

### 解决方法

```js
const Component =
    styled.div <
    { $customColor: string } >
    (({ $customColor }) => {
        return css`
            height: 100px;
            color: ${customColor};
        `
    })
```

```js
const ReactComponent:React.FC<...> = () => {
    return (
        <Component $customColor={"red"}/>
    )
}
```

这样最后渲染 dom 的结果如下

```html
<div class="sc-xxxx" />
```

## 3. 不希望被注入到 dom 的 property 被注入，有什么影响

首先，符合规范的 dom 的 properties 都是全小写的，有些会用 杠 来连接。那么至少在 React 的严格模式下，我们不是规范的 property，都会被认为是对组件的传参，所以原生的 React 的组件对于这个问题，很多情况下是没有什么影响的。

但是在 styled-components 中，我们不希望被注入到 html 中的属性被注入上去了，并且本来应该是大驼峰的，最后变成了小驼峰，这样在 dom 元素检查上会造成一定的误解。

而我记录这个问题的原因是，在我有进行单元测试的时候，生成的快照上面的标签上突然生成了这样的一个 property，控制台还抛出了大量的警告，也就是上面提到的那个警告信息。当时我并没有意识到这个`passing props`概念的存在，我认为只有标准的 property 才会被注入到 html 标签上，其他不符合标准的并不会被注入到 dom 上，而是被当作是组件的传参，但实际并不是这样。

我想了一下，我当时修改了一些组件的传参方式，就造成了这样的结果，我觉得**在灵活的 React 组件传参方式上，有的方式会造成这样的结果，而有的不会**，这是并不希望出现的，所以最好的是根据官方的文档用$符号来确定性的将 property 排除掉。
