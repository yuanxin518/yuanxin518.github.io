在学习webpack的过程中，遇到了一个webpack的运行时代码所带来的问题。

比如`optimization`中`runtimeChunk`的配置等，会出现带有runtime的文件，在我们使用**output.dependOn属性配置**的时候，也会生成runtime标识的文件，那么这个runtime文件到底是什么？

```diff
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
+  entry: {
+    index: {
+      import: "./src/index.js",
+      dependOn: "shared",
+    },
+    "other-bundle": {
+      import: "./src/other-bundle.js",
+      dependOn: "shared",
+    },
+    shared: "lodash",
+  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "资源输出",
      filename: "webpack.html",
    }),
  ],
};
```
上面这是一个`webpack.config.js`的配置文件，其中的重点就在`entry`里面，看到其中配置了一个`dependOn`，然后依赖的是一个新的入口文件，那么理论上生成文件就会有至少3个，`index.[hash].js`，`other-bundle.[hash].js`和`shared.[hash].js`。现在没有什么问题，就是我们简单的配置了3个入口文件，然后其中2个依赖与另外一个chunk文件，其中包含的是`lodash`这个库，所以`shared.[hash].js`中存放的是lodash的代码。然后继续看下面的说明

### optimization.runtimeChunk
**现在我们引入一个新的配置，`optimization.runtimeChunk`。对于runtimeChunk设置为'single'的作用就是，为所有的chunk文件生成一个共享的runtime的文件，这样所有对模块引入或者初始化的代码都在这个共享文件中实现。设置成'true'（或者'multiple'）就会为每一个chunk生成一个单独的runtime的文件。**
```diff
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    "other-bundle": {
      import: "./src/other-bundle.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
+  optimization: {
+    runtimeChunk: true,//默认是false，true对应的是'multiple'，还可以选择'single'。
+  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "资源输出",
      filename: "webpack.html",
    }),
  ],
};
```

那么我们设置了这个属性之后进行编译，产生的文件会多出一个`runtime~shared.....`的文件。

### runtime文件的内容
我们现在要知道`runtime~shared...`是怎么和`shared.....js`文件联系起来的，这样就可以分析为什么能够生成出一个runtime文件来。

下面是`shared.js`生成的入口js文件的代码开头，看的出来是往一个数组`self[....]`中push了一些数组，通过注释和测试环境的代码，可以分析出来这个数组中设置了一个对象，是我们之前在`shared.js`中引入的lodash的代码。**那么这个self显然是一个全局的对象，然后现在我们给他push了一些值。**那么这个属性我们接下来再`runtime`文件中看一看。

**shared.xxxxx.js**
```js
...
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_learn"] = self["webpackChunkwebpack_learn"] || []).push([
  ["shared"],
  {
    /***/ "./node_modules/lodash/lodash.js":
      /*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
      /***/ function (module, exports, __webpack_require__) {
        eval(          "/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;/**\n * @license\n * Lodash <https://lodash.com/>\n * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n;(function() {\n\n  /** Used as a safe reference for `undefined` in pre-ES5 environments. */\n  var undefined;\n\n  /** Used as the semantic version number. */\n  var VERSION = '4.17.21';\n\n  /** Used as the size to enable large array optimizations. */\n  var LARGE_ARRAY_SIZE = 200;\n\n  /** Error message constants. */\n  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',\n      FUNC_ERROR_TEXT = 'Expected a function',\n      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';\n\n  /** Used to stand-in for `undefined` hash values. */\n  var HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n  /** Used as the maximum memoize cache size. */\n  var MAX_MEMOIZE_SIZE = 500;\n\n  /** Used as the internal argument placeholder. */\n  var PLACEHOLDER = '__lodash_placeholder__';\n\n  /** Used to compose bitmasks for cloning. */\n  var CLONE_DEEP_FLAG = 1,\n      CLONE_FLAT_FLAG = 2,\n      CL

...
```

下面是对应的runtime的代码，找到了这样的代码。其中对现在已有的self中的值进行调用`webpackJsonpCallback`（调用前执行了bind绑定，这个场景下是null）。
然后**重写了push，将push重写成了webpackJsonpCallback中实现的方法，最后会移动到__webpack_require__.0的逻辑中去。**也就是说在此之后在self['webpackChunkwebpack_learn']中的push操作，都会被以这里的逻辑来执行。显然runtime文件会优先于入口文件去引入到html中。

**shared.runtime.xxxx.js**
```js
...
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_learn"] = self["webpackChunkwebpack_learn"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
...
```
那么现在就知道了，我们生成的这个runtime的文件，实际上是对入口文件模块的处理。我们在入口文件中会将模块的所有加载进行执行，**生成runtime文件之后，在入口文件中对模块的处理的逻辑就会被转移到这个runtime文件中来执行。**

### 关于runtime代码的处理
那么，现在比如我们有2个js文件，其中都引入了lodash的库。在我们不设置任何对runtime有影响的webpack的配置的时候，打包后`lodash`的模块会被加入到这2个打包的js文件中去。当我们对这2个js文件设置一个`dependOn`属性，**然后`dependOn`的模块依赖的是`lodash`，打包后会发现我们之前的2个js文件中的`lodash`的代码都被转移到了一个新的chunk文件中去。那么这就是我们第一个使用方法，就是对重复模块的抽离。**

这里没有很好的体现我们对运行时代码的利用，但是在下面的一个例子很能体现。同样是2个js文件，还有一个`count.js`中导出了一个对象，其中的value属性为0，我们在另外2个js文件中都实现的是对这个对象的值自增。

**首先我们不对runtime进行任何的处理，显然这个时候`count.js`会分别存在于那2个js文件中，那么这个时候如果在html中来引入解析的话，结果就是独立的2个对count对象进行初始化的代码，形成的也是2个独立的作用域。**

那么这个时候我们设置`optimization.runtimeChunk='single'`，让所有一切的chunk都形成一个`runtime`，这样这2个js文件中所有的内容都会push到runtime文件中去（push显然就是上面提到过的被重写的push），那么最终所有的作用域都会在`runtime`文件中形成，通过webpack对重复module的过滤处理等，最终重复的模块全部都会在这个runtime中引入一次。

**实际上，无论我们设不设置`optimization`这个参数，最终的模块都会通过webpack的运行时的函数去加载，第一个例子在优化前是`lodash`分别在2个运行时代码中加载，在我们设置`dependOn`之后就是将这2个运行时抽离成一个独立的chunk来通过运行时加载`lodash`。**

### 多runtimeChunk
也就是设置`optimization.runtimeChunk=true`，这个时候，webpack会对每一个chunk文件进行修改，让其中的逻辑转移到runtime中去执行。虽然每个chunk生成了单独的runtime的文件，但是一般情况下runtime文件中都是执行一样的逻辑，上面提到的对`self`中对象的引用也都是同一个，所以这个时候上面提到的`count`也还是只是被初始化一次的。但是在官网中代码分离板块中提到过，如果使用多入口的时候，还是要设置`optimization.runtimeChunk=single`，这样至少可以确保百分之不会造成模块的多次实例化等错误。这在[运行时单一实例](/webpack5/打包优化/运行时单一实例选项)中也有所体现。