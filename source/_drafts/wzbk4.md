---
abbrlink: ''
ai: null
aplayer: null
aside: null
background: '#fff'
categories:
- - 网站搭建
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: https://13fe9ff.webp.li/2024/11/3c56959bdb4ecac1019d0e7878dd26d4.png
date: '2024-11-24T15:25:36.689611+08:00'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
swiper_index: 10
tags:
- 网站搭建
- 好用工具
title: 第四期：Qexo 一个美观、强大的在线 静态博客 管理器
toc: null
toc_number: null
toc_style_simple: null
top: null
top_group_index: 10
top_img: https://13fe9ff.webp.li/2024/11/3c56959bdb4ecac1019d0e7878dd26d4.png
updated: '2024-11-24T15:27:18.794+08:00'
---
## 我的电报群和频道

* 实时交流电报群：[点击加入](https://t.me/limingroup)
* 官方发布频道：[点击关注](https://t.me/liminchannel)

---

## 前言

**Hexo** 是一款快速、高效的静态博客框架。通过** **[Markdown](http://daringfireball.net/projects/markdown/) 语法，只需几秒便可生成高质量的静态网页。

近期，我实现了在不同设备之间灵活管理博客并发布内容。有人提到** ****Qexo** 是一个为 Hexo 增加后台功能的工具，让发布博客像发微博一样简单。深入了解后，我发现这个工具非常强大，甚至可以通过手机随时随地发布文章，极大提升了便捷性。

尽管安装时遇到了一些问题，但最终都成功解决。我将整理相关经验，分享给大家，希望能帮助更多人避坑。

---

## Qexo 简介

**Qexo** 是一个快速、美观且功能丰富的在线 Hexo 管理器，支持通过 Vercel 免费部署，只需配置一个数据库即可轻松使用。
**主要功能**：

* 自定义图床上传图片
* 在线编辑与管理页面
* 开放 API 接口
* 自动更新检查与一键更新
* 快速管理友情链接
* 短文分享（类似微博功能）
* 自动填充文章模板

**项目地址**：[Qexo 官方文档](https://www.oplog.cn/qexo/start.html)

---

## 一、配置 GitHub 自动化部署

### 1. 获取 GitHub Token

* 进入** ****Personal settings** ->** ****Developer settings** ->** ****Personal access tokens**
* 设置权限为** ****repo** 和** ****public repo**
* 保存生成的 Token（丢失后无法恢复，只能重新生成）
* 在博客代码仓库的** ****Secrets** 中添加名为** ****PERSONAL\_TOKEN** 的变量，后续步骤会用到。

### 2. 创建 GitHub Actions

1. 在博客仓库页面，点击** ****Actions**。
2. 选择** ****Set up a workflow yourself**。
3. 输入以下 YAML 配置，点击Start commit：

```yaml
name: Deploy Hexo to GitHub Pages
on:
  push:
    branches:
      - master # 替换为你的默认分支名
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout blog source
        uses: actions/checkout@v2
        with:
          path: blog
      - name: Set up Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "16" # 指定 Node.js 版本
      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Install dependencies
        run: npm install
        working-directory: ./blog
      - name: Install Hexo CLI
        run: npm install -g hexo-cli
        working-directory: ./blog
      - name: Generate static pages
        run: hexo generate
        working-directory: ./blog
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          publish_dir: ./blog/public
          external_repository: username/username.github.io # 替换为你的 GitHub Pages 仓库
          publish_branch: main # 指定发布分支
```

更多详细说明请参考：[Hexo 自动化部署教程](https://www.oplog.cn/archives/24998.html)

[利用 GitHub Actions 实现自动化部署 Hexo 到 Github Pages](https://hackergavin.com/2024/01/11/hexo-automate-deploy/)

---

## 二、通过 Vercel 部署 Qexo

### 1. 修改 Node.js 版本

由于** **[Vercel 的已知问题](https://vercel.com/docs/functions/runtimes/python#python-dependencies)，需将项目的 Node.js 版本调整为** ****18.x**。

路径：**Settings -> General -> Node.js Version**

### 2. 一键部署

点击以下按钮完成一键部署：[Vercel 一键部署](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

**注意**：首次部署可能会出现错误提示，可忽略并继续后续步骤。

### 3. 创建 Vercel 数据库

1. 进入** **[Vercel Storage 页面](https://vercel.com/dashboard/stores)。
2. 点击** ****Create Database**，选择** **Neon**  ,  Region选择Washington, DC., USA - iad1 并创建免费数据库。

### 4. 绑定项目

在** ****Projects** 页面选择对应项目，点击** ****Connect Project** 进行绑定。

### 5. 部署 Qexo

回到项目页面，点击** ****Redeploy** 开始部署。部署完成后，无报错即可访问域名进入初始化页面。

---

## 初始化配置

### GitHub 配置

填写博客源码所在仓库的分支名称，例如：

```
master
```

### GitHub 密钥

填写生成的 GitHub Token，示例：

```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```

### 仓库路径

若 Hexo 源码在仓库根目录，则留空，否则填写对应路径：

```
path/
```

### Vercel 配置

* **VERCEL\_TOKEN**：在** **[Vercel 账户设置](https://vercel.com/account/tokens) 中生成。
* **PROJECT\_ID**：可在** ****Project Settings -> General -> Project ID** 找到。

配置完成后即可登录后台进行文章管理。

---

**图床配置教程**：[观看视频](https://youtu.be/ah5szwr4JxM?si=SxPGuN6AyZ1jv8eS)
