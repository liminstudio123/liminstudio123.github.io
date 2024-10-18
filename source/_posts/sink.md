---
title: Sink一个简单/快速/安全/免费的链接缩短器，具有分析功能，100% 在 Cloudflare 上运行，GitHub超火的免费开源自托管链接缩短工具  #【必需】页面标题
date: {{ date }} #【必需】页面创建日期
updated: #【可选】页面更新日期
tags: 好用工具 #【可选】文章标签
categories: #【可选】文章分类
keywords: #【可选】文章关键字
description: #【可选】文章描述
top: # 1 置顶
top_img: https://a0d7da0.webp.li/2024/10/maxresdefault.jpg #【可选】文章顶部图片
comments: #【可选】显示文章评论模块(默认 true)
cover: https://a0d7da0.webp.li/2024/10/maxresdefault.jpg #【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)
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
<div class="video-container">
[<iframe width="560" height="315" src="https://www.youtube.com/embed/q6ayfcrwEtE?si=WRmQl3xhS99O3eV-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>]
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
---
# Sink 项目介绍

# 我的电报群（进群实时交流）
[点击加入](https://t.me/limingroup)

# 我的电报官方频道
[点击查看](https://t.me/liminchannel)

## 目录

- 什么是Sink？
- 主要特点
- 支持Sink的技术
- 准备工作
- 详细的安装步骤
- 结论

在互联网的快速发展中，URL缩短工具已成为分享和管理链接的便捷解决方案。Sink 是一款自托管的开源工具，不仅提供URL缩短功能，还具备强大的扩展性和定制选项。本文将全面介绍Sink的功能、安装指南，以及它在实际应用中的亮点。

## 什么是Sink？

Sink 是一款开源的、自托管的链接缩短工具，运行在Cloudflare的云基础设施上。它为用户提供简洁的链接管理体验，同时确保了高效的性能与可靠性。Sink 特别适合那些希望在自有服务器上管理链接的用户，完全摆脱了第三方平台的限制。

通过使用Cloudflare的免费方案，用户可以轻松部署Sink，并在没有额外成本的情况下享受高性能的云支持。

## 主要特点

1. **简化的URL缩短** 
   - 将冗长的链接压缩为简短的、易于记忆的URL，适合用于社交媒体、电子邮件营销及线下宣传材料。
   
2. **深入的数据分析** 
   - 追踪链接点击率、地理位置及流量来源，助力营销活动的效果评估，帮助用户更好地理解受众行为并优化策略。
   
3. **定制化短链接** 
   - 允许创建品牌化的短链接（如：nideyuming.com/xxx），提高用户对链接的信任度。
   
4. **AI生成个性化链接** 
   - 基于人工智能生成简洁、吸引人的短链接，自动优化链接表现，节省了人工命名的时间。
   
5. **时效性链接设置** 
   - 为特定时间段的活动设置链接有效期，确保过期后自动失效，增强内容管理的灵活性。
   
6. **无服务器架构** 
   - 基于Cloudflare Workers实现高效、低延迟的无服务器架构，用户无需配置传统服务器。
   
7. **隐私保护与数据控制** 
   - 用户完全掌控自己的链接数据，确保符合数据隐私法规，避免数据外泄风险。

## 支持Sink的技术

Sink的开发基于现代技术，确保其功能丰富与性能稳定：

- **Nuxt.js**：基于Vue.js的强大框架，用于构建高性能的Web应用。
- **Cloudflare Workers KV**：全球分布式的键值存储，用于保存链接信息。
- **Cloudflare Workers Analytics**：提供实时数据分析，而无需额外的服务器资源。
- **Shadcn-vue**：用于快速开发的可复用UI组件库。
- **Tailwind CSS**：实用优先的CSS框架，用于快速搭建定制化网页设计。

## 准备工作

1. **域名注册**：可在[Spaceship](https://spaceship.sjv.io/limin)注册域名，价格很低，宝藏网站。
2. **域名绑定到Cloudflare**：[域名绑定教程](https://youtu.be/3a6ImhcizcU?si=OdzARc8iM6tmBwFK)
3. **Cloudflare账号**：如果没有账号，可点击[Cloudflare](https://www.cloudflare.com/zh-cn/)注册。
4. **Github账号**：点击注册[GitHub](https://github.com/)。
5. **Sink项目地址**：[Sink GitHub项目](https://github.com/ccbikai/sink)

## 详细的安装步骤（视频中有详细操作）

1. **Fork 仓库** 
   - 访问[Sink GitHub仓库](https://github.com/ccbikai/sink)，创建您自己的Fork，方便个性化修改。
   
2. **设置Cloudflare Pages** 
   - 登录Cloudflare账户，进入“Pages”功能页面，创建新项目，连接到您Fork的Sink代码库。
   
3. **项目配置** 
   - 选择适合的Nuxt.js构建预设，设置所需的环境变量，确保项目正常运行。
   
4. **环境变量配置** 
   - 设置 `NUXT_SITE_TOKEN`（管理员访问密码，至少8位）。
   - 设置 `NUXT_CF_ACCOUNT_ID`（域名ID）。
   - 设置 `NUXT_CF_API_TOKEN`（个人资料中新建自定义Token）。
   - 设置 `NUXT_HOME_URL`（完整链接，加上https://www.xxx等）。
   
5. **开始部署项目** 
   - 配置完成后，启动部署，Cloudflare将自动构建并发布您的Sink实例。
   
6. **高级功能配置** 
   - 在 Workers 和 Pages/sink/设置/绑定/添加依次完成以下设置：
     - KV namespace bindings：将变量名称绑定`KV`到KV命名空间。
     - Workers AI Bindings：将变量名称绑定`AI`到工人AI目录。
     - Analytics Engine bindings：将变量名称绑定`ANALYTICS`到`sink`数据集，并启用Cloudflare分析引擎测试版。

7. **完成部署与测试** 
   - 确保所有配置正确后，**重新部署项目**，应用最终设置。

8. **添加自定义域名** 
   - 在“自定义域”绑定您自己的域名，实现品牌化链接管理。

9. **访问Sink用户界面** 
   - 使用配置好的管理员密码，访问Sink的用户界面，测试链接缩短功能是否正常运行。
   - 后台登录链接：`https://your-custom-domain/dashboard/login`（替换为您的域名）。

## 结论

Sink是一款功能强大且灵活的链接管理工具，尤其适合需要完全控制短链接的用户。借助Cloudflare的支持，它在性能和安全性上表现优异，同时提供丰富的定制选项和数据分析功能。

通过本文的指南，您可以轻松设置并使用Sink，成为您日常链接管理的得力工具。作为开源项目，Sink欢迎广大开发者贡献力量，共同推动其功能的完善与优化。

如需进一步了解和获取最新更新，请访问[Sink GitHub 仓库](https://draft.blogger.com/blog/post/edit/8483999502037447656/7916292350065768693#)，并加入全球用户和开发者的社区，分享经验和解决方案。
