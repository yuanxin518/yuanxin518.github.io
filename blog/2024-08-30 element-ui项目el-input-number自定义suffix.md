# element-ui 项目 el-input-number 自定义 suffix

## 场景

现在有一个需求，vue2, element-ui 中，需要使用数字输入框，保留两位小数，并且要有 % 后缀。

## 出现的问题

在 vue2 - element-ui 中，`el-input`组件的`type="number"`可以支持数字输入，但是首先在样式上会多出来原生 input 的数字上下点击控件，需要隐藏的话，要借用 css 去隐藏多余的内容。第二，这个 input 支持原生的 max，min 但是不支持精度属性，要配合 onchange 等去处理。

在`el-input-number`组件中，支持 max,min 和 precision 精度属性，那么在功能上它是够用的，但是这个组件不支持插槽去修改 prefix 和 suffix，那么只能通过组合`el-input-number`和`div`的方式去实现，借用 element 内部的 css 类来实现和 element 组件一样的效果。

## 实现

这里提供了一个 css 类，这个类直接绑定`el-input-number`组件上，用来隐藏前缀和后缀，并且对边框和宽度进行修正，在显示效果上和`el-input`保持一致。

```css
// 隐藏el-input-number组件的前缀和后缀
.el-input-number-without-controls {
    width: 100%;

    .el-input__inner {
        padding: 0 15px !important;
    }

    .el-input-number {
        &__decrease,
        &__increase {
            display: none;
        }
    }
}
```

其次就是组合的问题。单纯用 `el-input-number`和 div 进行拼接，样式上会有问题。所以借用 element ui 内部的`el-input-group`,`el-input-group--append`和`el-input-group__append`类，这三个类是用在`el-group`相关组件中的。

```html
<div class="el-input-group el-input-group--append">
    <el-input-number class="el-input-number-without-controls el-input-group--append" :max="100" :min="0" :precision="2" v-model="xxxx" />
    <div class="el-input-group__append">%</div>
</div>
```
