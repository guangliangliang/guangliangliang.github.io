---
title: git添加commit规范
date: 2020-09-07
tags:
- "开发规范"
- "Git"
categories:
- "Git"
isShowComments: true
---

<Boxx/>



<!-- more -->

[[toc]]


前言
--

 统一前端代码提交commit规范


1.安装husky库(git钩子)
---------------------------

    npm i husky --save -dev

2.添加verify-commit.js文件 
---------------------------

```javascript   
    const msgPath = process.env.HUSKY_GIT_PARAMS
    const msg = require('fs')
      .readFileSync(msgPath, 'utf-8')
      .trim()
    
    const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/
    
    if (!commitRE.test(msg)) {
      console.error(`
            不合法的 commit 消息格式。
            请查看 git commit 提交规范：https://github.com/guangliangliang/vue-admin/blob/master/gitCommitConfig.md
        `)
    
      process.exit(1)
    }
```


3.package.json 添加钩子执行
---------------------------
   注:hooks里面的配置内容可以在项目文件夹下.git/hook/文件夹里看到

| 命令 | 作用 |
| :------| :------ |
| commit-msg | 执行 git commit 时触发通常用来进行规范commit信息格式 |
| pre-commit | 执行 git commit 时之前触发通常用来lint格式化代码 |

```json   
      "husky": {
        "hooks": {
          "commit-msg": "node verify-commit.js"
        }
      },
```