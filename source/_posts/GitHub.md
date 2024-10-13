---
title:  赛博大善人cloudflare大发慈悲了！免费高速稳定的图床！超级简单，一看就会！Cloudflare R2 + WebP Cloud + PicGo GitHub #【必需】页面标题
date: {{ date }} #【必需】页面创建日期
updated: #【可选】页面更新日期
tags: #【可选】文章标签
categories: #【可选】文章分类
keywords: #【可选】文章关键字
description: #【可选】文章描述
top: # 1 置顶
top_img: #【可选】文章顶部图片
comments: #【可选】显示文章评论模块(默认 true)
cover: https://13fe9ff.webp.li/2024/10/60919e5947aab971ddbe37f74bc6c221.png #【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)
toc: #【可选】显示文章 TOC(默认为设置中 toc 的 enable 配置)
toc_number: #【可选】显示 toc_number(默认为设置中 toc 的 number 配置)
toc_style_simple: #【可选】显示 toc 简洁模式
copyright: #【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置)
copyright_author: #【可选】文章版权模块的文章作者
copyright_author_href: #【可选】文章版权模块的文章作者链接
copyright_url: #【可选】文章版权模块的文章作者链接
copyright_info: #【可选】文章版权模块的版权声明文字
mathjax: #【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)
katex: #【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)
aplayer: #【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置
highlight_shrink: #【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)
aside: #【可选】显示侧边栏 (默认 true)
swiper_index: 10 #【可选】首页轮播图配置 index 索引，数字越小越靠前
top_group_index: 10 #【可选】首页右侧卡片组配置, 数字越小越靠前
ai: #【可选】文章ai摘要
background: "#fff" #【可选】文章主色，必须是16进制颜色且有6位，不可缩减，例如#ffffff 不可写成#fff
---

## 用到的工具

### Cloudflare R2 + WebP Cloud + PicGo

1. **性价比最高的域名注册商**：spaceship，跳转注册：[spaceship](https://spaceship.sjv.io/liminstudio)
2. **域名托管到 Cloudflare**：托管教程：[点击查看](https://youtu.be/3a6ImhcizcU?si=eb-XFVeDBwwbBKzi)
3. **MyFin申请教程**，开户送5.11欧：[点击跳转](https://draft.blogger.com/blog/post/edit/8483999502037447656/716317183665817084#)
4. **Cloudflare账号**：点击注册：[Cloudflare](https://www.cloudflare.com/zh-cn/)
5. **WebP Cloud**：点击跳转：[WebP Cloud](https://dashboard.webp.se/login)
6. **PicGo**：点击下载：[PicGo](https://github.com/Molunerfinn/PicGo/releases)

## 图床搭建说明

### Cloudflare R2

Cloudflare R2 是一个免费对象存储服务。注册 Cloudflare 账号后，需绑定信用卡验证身份，服务本身不会扣费。

### 创建图床 Bucket

1. 在 R2 面板中点击“创建存储桶”。
2. 填写 Bucket 名称，并选择存储位置，如「北美洲西部」。
3. 完成创建后，可以通过网页直接上传文件，也可以使用 S3 API 进行上传。

### 配置 Bucket 访问 API

在 R2 中打开 R2.dev 子域，获得访问图片的公网地址。

**可选操作**：绑定自定义域名，方便记忆。绑定成功后，bucket 的“公共 URL 访问”状态会显示“已允许”。

1. 创建 API 令牌，权限选择“对象读和写”，指定到相应的 Bucket，确保安全。
2. 记录 API 密钥，后续配置 PicGo 时需要使用。

### PicGo 配置

PicGo 是一个支持多种图床的工具软件。

### 配置 R2 图床

1. 安装 PicGo 客户端。
2. 安装 S3 插件。
3. 配置 S3 选项，填入 R2 API 的 Access Key ID、Secret Access Key、Bucket 名称等信息。
4. 设置自定义域名为 R2.dev 地址或绑定的域名。

### WebP Cloud 图片优化

WebP Cloud 是一个图片代理优化服务，可以大幅缩小图片体积，加快加载速度。

### 配置 WebP Cloud

1. 登录 WebP Cloud 后，点击「Create Proxy」。
2. 配置 Proxy Origin URL 为 R2 自定义域名。

### 更改 PicGo 配置

将 PicGo 的自定义域名更改为 WebP Cloud 代理地址，如 xxx.webp.li。

### WebP Cloud 用量

- 免费用户每天有 3000 次访问请求，200M 图片缓存，超出配额后仍可访问源站图片地址。

## 总结

通过 Cloudflare R2、WebP Cloud 和 PicGo，实现了高效的图床搭建和图片优化。如果对其他博客系统部署有兴趣，请持续关注。
---

<div class="video-container">
[<iframe width="560" height="315" src="https://www.youtube.com/embed/ah5szwr4JxM?si=An711avRUeUUc7x1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>]
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
