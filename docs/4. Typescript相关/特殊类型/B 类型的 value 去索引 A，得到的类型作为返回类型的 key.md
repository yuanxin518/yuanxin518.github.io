# B 类型的 value 去索引 A，得到的类型作为返回类型的 key

有一个场景，关于树生成。有一个平铺数组类型，其中有字段 foo 和 zoo 作为树节点的 id 和父节点 id，此外还有其他的 key 用来记录节点内容，但我们构建树的时候只需要某些关键的 key 例如 id 和 fId 等， 所以就需要有一个类型去实现用 B 类型的 value 去索引 A，得到的类型作为返回类型的 key，剩余 A 中的 key 舍弃。

为了能在工具类处理后，得到树节点的数据结构和提供的平铺树元素的类型一致，要用工具类型进行处理。

```typescript
type A = {
    foo: number;
    zoo: string;
    aaa: [];
    bbb: string;
};
type B = {
    id: "foo";
    fId: "zoo";
};
```

最后会得到下面的结果，以 B 中的 value 作为 key，以这个 key 在 A 中对应值的 value 做为 value。

```typescript
type XXX<A, B> = {
    foo: number;
    zoo: string;
};
```

# 实现分析

keyof B 能得到一个集合，为 B 中所有的 key 即为 key。 通过 B[key]就能得到 value 的集合。 T[B[key]]就能得到这个值作为 key 时 在 A 中对应的 value。

# 类型实现

```typescript
type TypeToRecord<T extends Record<string, any>, K extends Record<string, keyof T>> = {
    [key in keyof K as K[key]]: T[K[key]];
};
```

# 完整使用文件

```typescript
type A = {
    foo: number;
    zoo: string;
    aaa: [];
    bbb: string;
};
type B = {
    id: "foo";
    fId: "zoo";
};

type TypeToRecord<T extends Record<string, any>, K extends Record<string, keyof T>> = {
    [key in keyof K as K[key]]: T[K[key]];
};

// type C = {
//     foo: number;
//     zoo: string;
// };
type C = TypeToRecord<A, B>;
```
