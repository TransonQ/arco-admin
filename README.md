# Arco admin

## 主要技术栈

- react18
- vite3
- recoil
- Arco design
- react-router-dom@6.3

## todos

- [ ] 登录页
- [x] 路由
- [x] 应用 layout 布局
- [x] 暗黑模式切换
- [x] 自定义多语言配置
- [ ] home 示例页
- [x] 分析图表页
- [ ] 个人中心示例页
- [x] 请求拦截器和请求格式示例
- [x] 用户状态 recoil 的异步 selector(get) + suspense
- [ ] 用户状态 recoil 的异步 selector(set) 更新状态
- [x] 刷新页面跟随 dark/light 模式切换背景

## 启动方式

1. 先打开本地服务

   ```js
   npm run jserver
   ```

2. 启动项目

   ```js
   npm run dev
   ```

## 使用[主题包](https://arco.design/themes)

```bash
npm i @arco-themes/react-quange
npm i @arco-plugins/vite-react less -D
```

- 使用自定义主题包: 需要注释掉默认引用的样式: // import '@arco-design/web-react/dist/css/arco.css'
- 使用默认主题包则引入默认样式

```js
// vite.config.js

import {vitePluginForArco} from '@arco-plugins/vite-react'

export default {
  ...
  plugins: [
    vitePluginForArco({ theme:"@arco-themes/react-quange" }),
  ],
}
```

## Commits 规范说明：

- [Commits MUST be prefixed with a type:](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification)
  - feat：新功能
  - fix：修补 BUG
  - docs：修改文档，比如 README, CHANGELOG, - CONTRIBUTE 等等
  - style：不改变代码逻辑 (仅仅修改了空格、格式缩进、逗号等等)
  - refactor：重构（既不修复错误也不添加功能）
  - perf：优化相关，比如提升性能、体验
  - test：增加测试，包括单元测试、集成测试等
  - build：构建系统或外部依赖项的更改
  - ci：自动化流程配置或脚本修改
  - chore：非 src 和 test 的修改，发布版本等
  - revert：恢复先前的提交

## 关于 CRA 中将 svg 导入为 react 组件的能力

需要自行按需配置

- Loader
  [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Transform SVGs into React components.

  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import svgr from 'vite-plugin-svgr'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [svgr(), react()],
  })
  ```

  配置完毕之后即可将 svg 作为组件导入:

  ```js
  import { ReactComponent as Logo } from './logo.svg'
  ```

## 注意事项

- react-router 在 6.3 与 6.4 写法的不同,如果从 6.3 升级到 6.4 需要注意一些破坏性更新 [点击查看](https://reactrouter.com/en/6.4.0/start/overview)
- 如果后端使用的 kratos 框架,在 axios 进行不带参数的 post 请求时候,axios 会清除 content-type 请求头,
  kratos 会识别 post 是否存在 content-type, 不存在则报`400: unregister content-type`错误,
  解决方法: `axios.post('https://url', {} )` 携带一个空 json 即可
