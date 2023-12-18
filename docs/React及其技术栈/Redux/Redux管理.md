### Reducer

reducer 统一在 reducers.ts 中来管理，index.ts 中来组合 rootReducer 并导出，其他 reducer 文件为子 reducer 文件夹。

### RootReducer

```ts
// 使用 redux 的 combineReducers 方法将所有 reducer 打包起来
const rootReducer = combineReducers({
  routing: routerReducer,
  login,
  config,
  passwordPolicy,
});
```

### 子 Reducer

```ts
/_ eslint-disable camelcase _/
const defaultState: any = {
    password*length: 8, // 配置用户密码长度限制
    password_update: -1, // 密码修改周期，设置为-1 时，密码无修改周期，可永久使用
    password_rules: 0, // 配置用户密码满足英文大写字符（A-Z）、英文小写字符（a-z）、10 个基本数字（0-9）、特殊字符（例如：！、#、%、&、*等）中的任意 N 种条件，0 为不限制
};
```

```js
export default function passwordPolicy(state = defaultState, action: any) {
  switch (action.type) {
    case "SET_PASSWORD_POLICY": {
      const { password_length, password_update, password_rules } =
        action?.payload || {};
      return {
        password_length,
        password_update,
        password_rules,
      };
    }
    default:
      return state;
  }
}
```

Actions
actions 统一在管理在 actions 中，在文件夹中导出每个 action

```ts
import { VERSION } from "@/const";
import API from "@/services/newApi/password";
import { getCookie } from "@/utils/cookie.service";

//passwordPolicy.ts
const setPasswordPolicy = (passwordPolicy: any) => {
  const {
    password_length = 8,
    password_update = 90,
    password_rules = 0,
  } = passwordPolicy;
  return {
    type: "SET_PASSWORD_POLICY",
    payload: {
      password_length,
      password_update,
      password_rules,
    },
  };
};

export const getPasswordPolicy = (version: number) => async (dispatch: any) => {
  try {
    const res =
      version === VERSION.STANDARD
        ? await API.getInitPolicy()
        : await API.getPolicyByuserId({
            userId: parseInt(getCookie("dt_user_id")),
          });
    const { success, message, data } = res ?? {};
    if (!success) return console.log(`获取密码策略失败${message}`);
    await dispatch(setPasswordPolicy(data));
  } catch (err) {
    console.log(`获取密码策略失败${err}`);
  }
};
```
