# Ant Deisgn 模态框内嵌 Form 的初始值不更新

在模态框中嵌入了 Form 表格元素，由官方的说法是

```js
const [form] = useForm()

useEffect(()=>{
    form.resetField()
})

// 组件
<Modal ...>
    <Form form={form}>...</Form>
</Modal>
```

用 useForm 将 form 绑定到 Form 组件上，通过调用`form.resetFields`来初始化 initialValue。
但是 useEffect 中调用 reset 的时候，值的变化总是会延迟，这是由于组件的更新策略导致的。

modal 只挂载了一次，form 也只挂载了一次，所以值的变化是根据 react 的渲染时机来决定的。那么就有一个强制重载组件的方法，可能不是最好的方法，但是能解决问题。

### 解决方法

```diff
+const [visible,setVisible] = useState(false)
const [form] = useForm()

useEffect(()=>{
    form.resetField()
-})
+},[visible])

#  组件
<Modal ...>
{visible && <Modal ...>
    <Form form={form}></Form>
</Modal>}
```

监听 visible，来触发 reset 函数，那么每次 visible 改变的时候 modal 都会被销毁或者挂载，随后 form 进行 reset，能始终保持 form 处于最新初始化状态。
