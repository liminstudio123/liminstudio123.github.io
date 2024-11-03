---
title: 利用Cloudflare R2 + Workers搭建在线网盘，不限速，不用注册账号，不被墙
cover: https://a0d7da0.webp.li/2024/10/maxresdefault.webp
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-11-03 11:14:41
updated:
tags: 好用工具 
categories: 好用工具
keywords:
description:
top:
top_img: https://a0d7da0.webp.li/2024/10/maxresdefault.webp
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
[<iframe width="560" height="315" src="https://www.youtube.com/embed/S73bDVYLCC8?si=VGSylS1MjLfBsNLz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>]
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
# 我的电报群（进群实时交流）
[点击加入](https://t.me/limingroup)

# 我的电报官方频道
[点击查看](https://t.me/liminchannel)

# 项目地址
[GitHub项目链接](https://github.com/ljxi/Cloudflare-R2-oss)

# 注册高性价比域名推荐
spaceship。

接下来，将你的域名托管到Cloudflare，详细教程请参考：点击观看。

# 50张虚拟卡 MyFin申请教程
开户送5.11欧：[点击跳转](#)

## 搭建教程
1. fork该仓库
2. 前往Cloudflare R2新建一个R2储存桶，并前往储存桶设置，允许公开访问，复制公共存储桶 URL
3. 前往Cloudflare Pages新建一个站点，选择连接到Git
4. 选择刚刚fork的仓库，点击开始设置
5. 项目名称可以修改，其他项目保持默认不动
6. 展开环境变量，添加：

| 变量名称 | 值                             |
|----------|--------------------------------|
| PUBURL   | 复制的公共存储桶URL           |
| GUEST    | public/                        |
| admin:123456 | *                         |
| user1:123456 | user1/,userPublic/       |

以此类推，GUEST代表游客的允许写入目录。

管理员则以账号:密码的形式设置，值代表其允许写入的目录，用,隔开，请勿在前后加逗号，否则会授予所有目录的写入权限。

设置好后点击开始部署。

7. 前往Pages->cloudflare-r2-oss->设置->函数->R2 存储桶绑定，绑定R2存储桶，变量名称BUCKET。
8. 在部署页面重新部署即可。
---

