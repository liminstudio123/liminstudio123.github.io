---
title: 零基础快速搭建个人博客：Hexo + GitHub Pages + Cloudflare Pages 全流程指南，免费部署超详细教程！ #【必需】页面标题
date: {{ date }} #【必需】页面创建日期
tags: 好用工具 #【好用工具】标签、分类、关于、音乐馆、友情链接、相册、相册详情、朋友圈、即刻页面需要配置
updated: #【可选】页面更新日期
comments: #【可选】显示页面评论模块(默认 true)
description: #【可选】页面描述
keywords: #【可选】页面关键字
top_img: https://a0d7da0.webp.li/2024/10/maxresdefault.webp #【可选】页面顶部图片
mathjax: #【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)
cover: https://a0d7da0.webp.li/2024/10/maxresdefault.webp #【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)
katex: #【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)
aside: #【可选】显示侧边栏 (默认 true)
aplayer: #【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置
highlight_shrink: #【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)
top_single_background: #【可选】部分页面的顶部模块背景图片
---
### 本这是一系列视频，暂时包括，搭建，美化，如何在不同设备上同时管理hexo。至少3期视频，大家可以先订阅我，有问题可以到我的电报群。windows和macOS操作基本一样，我以macOS演示。

如果有任何疑问，可以加入我的电报群实时交流：
- 电报群链接：https://t.me/limingroup
- 官方电报频道：https://t.me/liminchannel

## 1. 前期准备工作

1. [Git](https://git-scm.com/downloads)（**必备**）
2. [VSCode](https://code.visualstudio.com/)（**可选**）
3. 域名，建议配置一个域名以避免被防火墙阻挡，推荐购买链接： https://spaceship.sjv.io/limin
4. 配置 Cloudflare，托管域名：[托管教程](https://youtu.be/3a6ImhcizcU?si=axjlZmba3q9wtTEN)
5. 创建免费图床：[图床搭建教程](https://youtu.be/ah5szwr4JxM?si=18c42iG8NqIcHJLX)
6. 注册cloudflare怕被扣费，推荐用myfine有50张虚拟卡（需要护照），教程链接：[注册教程](https://youtu.be/gg3Ji4WDszs?si=fqtFwTMjsnoUExxG)

### 2.1. 安装 Node

1. 从 [Node 官网](https://nodejs.org/en) 下载适合自己系统的版本。
2. 完成安装，建议使用默认目录 `C:/Program Files/nodejs/`。
3. 验证安装成功，在命令行中输入 `node -v` 检查版本信息。
![示例图片](https://13fe9ff.webp.li/2024/10/2a18b0579664e643e4363fc93d47c842.png)
4. 苹果用户可通过右键文件夹，选择“服务”，新建终端窗口以便操作。



### 2.2. 安装 Git

1. 从 [Git 官网](https://git-scm.com/downloads) 下载适配的 Git 版本。
![示例图片](https://13fe9ff.webp.li/2024/10/3957eda9a3c4ec8422eecc672b059d42.png)
2. Windows 用户可使用默认目录安装 Git，Mac 用户则按提示在终端操作。
3. 验证安装完毕后，Windows 用户会在开始菜单中看到 `Git Bash` 等应用。

### 3. 配置 Git 密钥并连接至 Github

常用 Git 命令:

```bash
git config -l
git config --system --list
git config --global --list
```

#### 3.1. 配置用户名和邮箱

```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

通过 `git config -l` 验证是否成功。
![abd](https://13fe9ff.webp.li/2024/10/1d37926686d18e0ac468ce6d00c07a50.png)

#### 3.2. 配置公钥连接 Github

1. 生成 SSH 公钥：

```bash
ssh-keygen -t rsa -C "你的邮箱"
```

一路回车生成密钥，进入 `.ssh` 文件夹复制 `id_rsa.pub` 公钥内容，配置到 Github 的 SSH 设置中。
![abm](https://13fe9ff.webp.li/2024/10/d2ec687d4c21887ffc96e96687630d7d.png)

2. 测试连接：

```bash
ssh -T git@github.com
```

#### 3.3. 创建 GitHub.io 仓库

1. 点击右上角的 `+` 按钮，选择新建仓库，命名格式为 `<用户名>.github.io`，选择公开 `Public`。
2. 创建完成后，初始化 Hexo 博客。

## 4. 初始化 Hexo 博客

1. 创建文件夹保存博客源码（例如 `D:/Hexo-Blog`），在该文件夹内启动 Git Bash 或终端。
2. 安装 Hexo：

```bash
npm install -g hexo-cli && hexo -v
```

3. 初始化 Hexo 项目：

```bash
hexo init blog-demo
cd blog-demo
npm i
```

4. 启动项目并验证：

```bash
hexo cl && hexo s
```

在浏览器中访问 http://localhost:4000/ 以查看效果。

## 5. 将静态博客挂载到 GitHub Pages

1. 安装 `hexo-deployer-git`：

```bash
npm install hexo-deployer-git --save
```

2. 修改 `_config.yml` 文件，配置 `repository` 为你的 GitHub 地址，分支改为 `main`：

```yaml
deploy:
  type: git
  repository: git@github.com:你的用户名/你的用户名.git
  branch: main
```

3. 部署到 GitHub：

```bash
hexo clean && hexo generate && hexo deploy
```

访问 `https://<用户名>.github.io/` 以查看博客。

## 6. 将静态博客挂载到 Cloudflare Pages

1. 通过 Cloudflare Pages 连接 Git 仓库。
2. 登录 GitHub，点击保存并部署。
3. 部署成功后，访问 Cloudflare 提供的链接。

如有自定义域名，可以在 Cloudflare Pages 中绑定。

## 如何使用

### 新建一篇博文

```bash
hexo new 这是一篇新的博文
```

编辑 `_posts` 文件夹中的新建文章，使用 Markdown 语法编写内容。

### 本地预览

```bash
hexo cl && hexo s
```

### 推送到 GitHub

```bash
hexo cl && hexo g && hexo d
```

## 进阶教程预告

接下来会介绍 Hexo 主题美化的进阶使用方法。

## 解决 VSCODE 报错

如果首次执行 VSCODE 终端出现报错，可以使用管理员身份打开 PowerShell，并执行以下命令：

```bash
Set-ExecutionPolicy RemoteSigned
```
---

<div class="video-container">
[up主专用，视频内嵌代码贴在这]
</div>

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio (height/width = 9/16 * 100%) */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>