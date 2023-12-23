# 2023-12-23 monorepo下匹配不到ts的问题

## 遇到的问题描述
遇到这个问题的项目是一个用`create-react-app`（webpack）来搭建的monorepo项目。
其中的目录结构大概是

```json
|-scripts
    |-start.js
    |-paths.js
    |-webpack.config.js
|-packages
    |-package1
        |- src
        |- package.json
tsconfig.json
package.json
pnpm.workspace.yaml
...
```

在我们普通src结构的项目中，通过`npm run start`去执行`scripts`中的`start.js`,项目会以`webpack.config.js`去启动项目。

在package1.json中的`start`的script配置是这样。很好理解，就是去调用总项目根目录下的`start.js`文件。
```
start:"node ../../scripts/start.js"
```

在package.json中的`start`就是`pnpm run start --filter package1`

那么问题来了，我在package1的src下`index.tsx`来引用另外一个`App.tsx`，报错为`module not fount, ..../App ...`，那么当我给`.App`加上`.tsx`的后缀之后，就不报错了。

根据这一点，很多适合会想到是配置文件`tsconfig.ts`的问题，结果在`package1`中添加`tsconfig.js`之后，问题真的好了，但是我希望的是整个项目只有一个`tsconfig.js`，子包里面不用另外的配置，因为我这些项目都是关联起来的。

虽然说添加了`tsconfig.js`问题就好了，但是真的是它的原因吗？想一想发现，不会，因为ts是不会在项目运行时起作用的，也就是说就算报错了项目也能跑起来。那这样，就只能是**打包工具**的问题了，打包工具没有正确的解析指定后缀名的文件。

## 分析webpack，定位问题

```js webpack.config.js
resolve: {
			modules: ["node_modules", paths.appNodeModules].concat(
				modules.additionalModulePaths || [],
			),
			extensions: paths.moduleFileExtensions
				.map((ext) => `.${ext}`)
				.filter((ext) => useTypeScript || !ext.includes("ts")),
			alias: {
				// Support React Native Web
				// https://www.smashingmagazine.com/2016/08/
```

其中 resolve.extensions，针对一些配置后缀名进行了一些预处理，例如babel等。

```js
extensions: paths.moduleFileExtensions
				.map((ext) => `.${ext}`)
				.filter((ext) => useTypeScript || !ext.includes("ts")),
```
由上面这一段配置可以看出，`paths.moduleFileExtensions`中导出了被处理的一些模块的后缀名，后面filter是根据`useTypescript`这个参数来判断是否要包含带有`.ts`后缀的，其中也就包含了`.ts`,`.tsx`等等。

```js useTypescript
// Check if TypeScript is setup
const useTypeScript = fs.existsSync(paths.appTsConfig)
```
然后从上面发现，useTypescript就是判断一个路径是否存在，也就是`paths.appTsConfig`是否存在。继续查看，发现这个配置就是
`appTsConfig: resolveApp("tsconfig.json"),`，也就是查看当前运行路径下是否有`tsconfig.json`这个配置文件。

## 解决问题
上面说了，运行子项目的时候，实际上是调用的子项目下的`start`的script，**那么`process.cwd`也就是返回的子项目的根路径，自然webpack中来判断是否支持ts的时候，就会从子项目路径下寻找tsconfig.json的配置文件了。**

结合我们只希望整个项目只有一个`tsconfig.json`，我们有了一个方法，就是**修改`webpack.config.js`的配置，让它只去寻找项目根目录的tsconfig.json。**这样就不能使用`process.cwd`，而是使用`__dirname`来确定脚本所在位置，然后回退到根目录下。

```diff paths.js
module.exports = {
    ...
-   appTsConfig: resolveApp("tsconfig.json")
+    appTsConfig: path.resolve(__dirname,"..","tsconfig.json"),
    ...
}
```
我们直接把`appTsConfig`中寻找当前运行项目下`tsconfig.json`的路径，改成从配置文件的路径下定位根目录下`tsconfig.json`。这样，无论从哪里运行，只要使用了这个`webpack.config.js`，就会寻找同一个`tsconfig.json`。

现在重新运行子项目，发现又报错了...
```
Cannot find the "xxxxx\package1\tsconfig.json" file.

Please check webpack and ForkTsCheckerWebpackPlugin configuration.
Possible errors:
  - wrong `context` directory in webpack configuration (if `configFile` is not set or is a relative path in the fork plugin configuration)
  - wrong `typescript.configFile` path in the plugin configuration (should be a relative or absolute path)  
```

看来要使用ts，还是要在每个项目下使用配置文件，但是**现在我们不是单独的配置一个配置文件了，而是采用继承的方式来继承根目录下的`tsconfig.json`。**
```
{
	"extends": "../../tsconfig.json"
}
```

然后再次运行，项目成功跑通不报错。