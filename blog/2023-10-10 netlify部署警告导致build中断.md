# netlify 部署警告导致 build 中断

在本地 build 项目和 preview 没有任何问题，在 netlify 部署就因为警告导致了命令被中断，那么就要用到环境变量来让 CI 不进行输出的编译。

### 解决方案

原本的 netlify 编译的命令`npm run build`，修改成`CI=false npm run build`
