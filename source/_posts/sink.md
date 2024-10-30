---
title: Sink一个简单/快速/安全/免费的链接缩短器，具有分析功能，100% 在 Cloudflare 上运行，GitHub超火的免费开源自托管链接缩短工具
cover: https://a0d7da0.webp.li/2024/10/maxresdefault (3).jpg
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-10-30 23:01:38
updated:
tags: 好用工具
categories:
keywords:
description:
top:
top_img:
comments:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
ai:
---

<div class="video-container">
[<iframe width="560" height="315" src="https://www.youtube.com/embed/q6ayfcrwEtE?si=703-djEu7gtByMC1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>]
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
# 联系方式

- **我的电报群**（进群实时交流）：[https://t.me/limingroup](https://t.me/limingroup)
- **我的电报官方频道**：[https://t.me/liminchannel](https://t.me/liminchannel)

# 目录
- [什么是Sink？](#什么是sink)
- [主要特点](#主要特点)
- [支持Sink的技术](#支持sink的技术)
- [准备工作](#准备工作)
- [详细的安装步骤](#详细的安装步骤)
- [结论](#结论)

---

在互联网的快速发展中，URL缩短工具已成为分享和管理链接的便捷解决方案。Sink 是一款自托管的开源工具，不仅提供URL缩短功能，还具备强大的扩展性和定制选项。本文将全面介绍Sink的功能、安装指南，以及它在实际应用中的亮点。

## 什么是Sink？

Sink 是一款开源的、自托管的链接缩短工具，运行在Cloudflare的云基础设施上。它为用户提供简洁的链接管理体验，同时确保了高效的性能与可靠性。Sink 特别适合那些希望在自有服务器上管理链接的用户，完全摆脱了第三方平台的限制。

通过使用Cloudflare的免费方案，用户可以轻松部署Sink，并在没有额外成本的情况下享受高性能的云支持。

## 主要特点

- **简化的URL缩短**：将冗长的链接压缩为简短的、易于记忆的URL，适用于社交媒体、电子邮件营销以及线下宣传材料。
- **深入的数据分析**：追踪链接点击率、地理位置及流量来源，助力营销活动效果评估。
- **定制化短链接**：允许创建品牌化短链接（如：nideyuming.com/xxx），提升用户信任度。
- **AI生成个性化链接**：基于AI生成吸引人的短链接，优化链接表现。
- **时效性链接设置**：为活动设置链接有效期，过期后自动失效，增强管理灵活性。
- **无服务器架构**：基于Cloudflare Workers，实现高效、低延迟的无服务器架构。
- **隐私保护与数据控制**：用户完全掌控数据，确保合规和数据安全。

## 支持Sink的技术

Sink的开发基于现代技术，确保其功能丰富与性能稳定：

- **Nuxt.js**：一个基于Vue.js的框架，用于构建高性能的Web应用。
- **Cloudflare Workers KV**：全球分布式键值存储，用于保存链接信息。
- **Cloudflare Workers Analytics**：实时数据分析，无需额外服务器资源。
- **Shadcn-vue**：用于快速开发的UI组件库。
- **Tailwind CSS**：一个实用优先的CSS框架，用于定制化网页设计。

## 准备工作

1. **域名注册**：建议使用Spaceship注册域名，价格优惠。[域名注册](https://spaceship.sjv.io/limin)
2. **域名绑定到Cloudflare**：[域名绑定教程](https://www.cloudflare.com)
3. **Cloudflare账号**：如果没有账号，请[点击注册](https://www.cloudflare.com/sign-up)
4. **Github账号**：[注册Github](https://github.com/)
5. **Sink项目地址**：[https://github.com/ccbikai/sink](https://github.com/ccbikai/sink)

## 详细的安装步骤（视频中有详细操作）

1. **Fork 仓库**：访问Sink GitHub仓库，创建您的Fork，用于自由管理和个性化修改项目。
2. **设置Cloudflare Pages**：登录Cloudflare账户，进入“Pages”功能页面，创建新项目并连接到您的Fork。
3. **项目配置**：选择Nuxt.js构建预设，设置所需的环境变量确保项目正常运行。
4. **环境变量配置**：
   - `NUXT_SITE_TOKEN`：作为管理员访问的安全密码，至少8位。
   - `NUXT_CF_ACCOUNT_ID`：域名ID。
   - `NUXT_CF_API_TOKEN`：在Cloudflare个人资料中创建的自定义Token。
   - `NUXT_HOME_URL`：跳转网址（完整链接，如https://www.xxx）。
5. **开始部署项目**：配置完成后，启动部署，Cloudflare将自动构建并发布Sink实例。
6. **高级功能配置**：
   - `KV namespace bindings`：将变量绑定到KV命名空间。
   - `Workers AI Bindings`：将变量绑定到工人 AI 目录。
   - `Analytics Engine bindings`：绑定到sink数据集并启用Cloudflare 分析引擎。
7. **完成部署与测试**：确保所有配置正确后重新部署项目，应用最终设置。
8. **添加自定义域名**：在“自定义域”中绑定您的域名，实现品牌化管理。
9. **访问Sink用户界面**：使用管理员密码访问Sink界面，测试链接缩短功能是否正常运行。

**后台登录链接**：[https://s.limin.studio/dashboard/login](https://s.limin.studio/dashboard/login)（将域名换成您设置的域名，密码为配置的密码）

## 结论

Sink是一款功能强大且灵活的链接管理工具，特别适合需要完全控制短链接的用户。借助Cloudflare的支持，它在性能和安全性上表现优异，同时也提供了丰富的定制和数据分析选项。无论您是企业主、市场营销人员，还是个人用户，Sink都能帮助您更高效地管理和分析链接。

通过本文的指南，您可以轻松设置并使用Sink，成为您日常链接管理的得力工具。作为开源项目，Sink也欢迎开发者贡献力量，推动其功能的不断完善。

如需进一步了解和获取最新更新，请访问[Sink GitHub 仓库](https://github.com/ccbikai/sink)，并加入全球用户和开发者的社区，共享经验和解决方案。
