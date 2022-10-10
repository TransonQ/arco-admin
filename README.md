# react18 + vite3

> 一句话说明: 基于 vite3 ,集成并扩展 CRA 的 eslint 和 commit 规范

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
