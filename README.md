# shiyzhang@cron

> 一个基于vue3+Ant-Design-vue的cron表达式组件

# 效果图

![秒](http://my.zsyou.top/2024/202403151750991.png)

# 使用方式

```
前置条件：项目基于vue+Ant-Design-vue开发（用到Ant-Design-vue相关组件）
第一步
    安装组件
    npm i shiyzhangcron 或 pnpm i shiyzhangcron
第二步
    导入组件
    import E from 'shiyzhangcron';
    import 'shiyzhangcron/dist/style.css';
第三步
    使用组件
      const EasyCronInner = E.EasyCronInner;
      <EasyCronInner v-model="easyCronInnerValue"/>
```

## 项目目录

```
├── components
|  ├── components.ts
|  ├── EasyCron
|  ├── index.ts
|  └── _utils
├── dist
|  ├── shiyzhang@cron.js
|  ├── shiyzhang@cron.umd.cjs
|  └── style.css
├── internal
|  ├── eslint-config
|  ├── stylelint-config
|  └── ts-config
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── src
├── tsconfig.json
├── turbo.json
├── types
|  ├── global.d.ts
|  ├── index.d.ts
|  └── module.d.ts
├── uno.config.ts
└── vite.config.ts
```

# 完整效果

![秒](http://my.zsyou.top/2024/202403151750991.png) ![分](http://my.zsyou.top/2024/202403151750034.png) ![时](http://my.zsyou.top/2024/202403151750076.png) ![日](http://my.zsyou.top/2024/202403151750116.png) ![月](http://my.zsyou.top/2024/202403151750165.png) ![周](http://my.zsyou.top/2024/202403151750205.png) ![年](http://my.zsyou.top/2024/202403151750253.png)
