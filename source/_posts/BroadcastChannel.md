---
title: 将Telegram channel变成博客/QQ空间说说/树洞/备忘录/情侣日常记录，cloudflare超好玩的新项目，超多好玩场景等你探索GitHub
cover: https://a0d7da0.webp.li/2024/11/BroadcastChannel.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-11-08 12:50:38
updated:
tags:
categories:
keywords:
description:
top:
top_img: https://a0d7da0.webp.li/2024/11/BroadcastChannel.png
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

### 我的电报群与频道

- **电报群（实时交流）**: [点击加入](https://t.me/limingroup)
- **电报官方频道**: [点击关注](https://t.me/liminchannel)

### 项目 GitHub 地址

- **GitHub 仓库**: [BroadcastChannel](https://github.com/ccbikai/BroadcastChannel)

---

## ✨ 特性与应用场景

- **将 Telegram Channel 转为微博客**
- 作为个人备忘录
- 个人树洞，让你悄悄做一个有趣的人
- 支持多人同时发表动态
- 类似 QQ 空间的说说功能
- 个人专属微博
- 更多应用场景，欢迎探索！

---

## 🪧 演示

### 真实用户展示

- **面条实验室**: [memo.miantiao.me](https://memo.miantiao.me)（作者的微博客）
- **利民工作室 Limin Studio**: [channel.limin.studio](https://channel.limin.studio)（我的微博客）

---

## 🛠️ 前期准备

1. **Cloudflare**: [点击进入](https://broadcast-channel.pages.dev/)（必备）
2. **域名**（非必备，但推荐）: [Spaceship 超低价域名平台](https://spaceship.sjv.io/limin)
3. **Telegram**（必备）：需创建频道
4. **GitHub**（必备）：[GitHub 主页](https://github.com/)
5. **Myfin**（可开通 50 张虚拟卡用于绑定 Cloudflare 以避免扣费）:  
   [Myfin 视频介绍](https://youtu.be/gg3Ji4WDszs?si=IiIjpVLoodG_w7_H)
6. **Telegram 搜索机器人**: 推荐使用 [SoSo 机器人](https://t.me/soso?start=a_7133970706)

---

## 🏗️ 部署步骤

1. **Fork 项目**: [点击 Fork](https://github.com/ccbikai/BroadcastChannel/fork) 此项目到你的 GitHub
2. 在 Cloudflare 中创建 Pages 并连接到 GitHub
3. 选择 **BroadcastChannel** 项目并选择 **Astro** 框架
4. 配置环境变量 `CHANNEL` 为你的频道名称（最低配置，更多可选项见下文）
5. 保存并部署
6. 可选：绑定域名
7. 更新代码后重新部署，参考 [GitHub 官方文档](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)

---

## ⚒️ 配置示例

```plaintext
## Telegram 频道用户名（必须配置），t.me/ 后的字符
CHANNEL=miantiao_me

## 语言与时区设置
LOCALE=zh-cn
TIMEZONE=Asia/Shanghai

## 社交媒体用户名
TELEGRAM=ccbikai
TWITTER=ccbikai
GITHUB=ccbikai

## 社交媒体 URL 配置
DISCORD=https://discord.com
PODCAST=https://podcast.com

## 头部与尾部代码注入（支持 HTML）
FOOTER_INJECT=FOOTER_INJECT
HEADER_INJECT=HEADER_INJECT

## SEO 配置项
NO_FOLLOW=false
NO_INDEX=false

## Sentry 配置项
SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
SENTRY_DSN=SENTRY_DSN
SENTRY_PROJECT=SENTRY_PROJECT

## Telegram 主机名称与静态资源代理
HOST=telegram.dog
STATIC_PROXY=

## 启用谷歌站内搜索
GOOGLE_SEARCH_SITE=memo.miantiao.me

## 标签页设置（英文逗号分割）
TAGS=标签A,标签B,标签C

## 评论展示设置
COMMENTS=true

## 链接配置（英文逗号和分号分割）
LINKS=Title1,URL1;Title2,URL2;Title3,URL3;

## 侧边栏导航配置
NAVS=Title1,URL1;Title2,URL2;Title3,URL3;
```

---

## 🙋🏻 常见问题解答

1. **为什么部署后内容为空？**  
    - 检查频道是否公开（需为公开频道）
    - 确认频道用户名为字符串而非数字
    - 关闭频道的 "Restricting Saving Content" 设置
    - 修改环境变量后需重新部署
    - Telegram 会屏蔽一些敏感频道
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
