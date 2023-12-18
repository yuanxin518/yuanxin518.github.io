# netlify 部署警告导致 build 中断
在本地build项目和preview没有任何问题，在netlify部署就因为警告导致了命令被中断，那么就要用到环境变量来让CI不进行输出的编译。

### 解决方案
原本的netlify编译的命令`npm run build`，修改成`CI=false npm run build`