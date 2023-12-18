### userEvent 和 fireEvent 的区别

[官方文档 - userEvent 和 fireEvent 的区别](https://testing-library.com/docs/user-event/intro/)

官方文档中说明了，在大多数情况下我们应该使用 userEvent 去模拟事件。 因为 userEvent 相较于 fireEvent，它更能体现用户的操作，例如 userEvent 不允许点击一个隐藏了的元素等等，而 fireEvent 是直接通过 dom 元素去调用某个事件。

### 使用 fireEvent 的场景

根据上面的说法，已经体现了作为模拟用户级的单元测试应该常用 userEvent，而不是 fireEvent。 但是有些情况我们仍然需要选用 fireEvent 来进行测试的覆盖。
比如说，对于一个组件，用户的点击事件作用在特定的组件中会被阻止，但是为了组件的复用性和安全性等，点击事件触发的函数里面编写了很多逻辑，只是在当前的使用场景中永远无法被执行。

我们当然可以选择不去覆盖这些代码，但是并不是所有人都知道这段代码不会对项目造成影响。

所以为了覆盖代码，**我们通过 fireEvent 来直接触发 dom 上面的 on 事件，无论这个事件是否绑定，无论这个对象是否被隐藏，被禁止点击，这个事件总是会被触发。**这样就能让我们测试到无法通过正常的用户交互触及到的代码片段。

（在某些测试场景的方法中，对 preventDefault 的测试用到了 fireEvent，这是因为 userEvent 要触发 contextMenu 事件要根据右键触发的事件来间接进行，所以直接通过 fireEvent 来调用事件更加的方便。）
