---
title: 超好用免费节点V2RayAggregator，已经稳定使用两年多，赶紧用起来，备用梯子VPN加1，比warp稳定！
cover: https://a0d7da0.webp.li/2024/11/v2rayjiedian.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-11-07 10:22:17
updated:
tags: 节点分享
categories: 节点分享
keywords:
description:
top:
top_img: https://a0d7da0.webp.li/2024/11/v2rayjiedian.png
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
[<iframe width="560" height="315" src="https://www.youtube.com/embed/vzLalQkx0u4?si=0o4qamjlreiXsoIz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>]
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
# V2RayAggregator

我的电报群（进群实时交流）：[https://t.me/limingroup](https://t.me/limingroup)  
我的电报官方频道：[https://t.me/liminchannel](https://t.me/liminchannel)  

V2RayAggregator GitHub地址：[https://github.com/mahdibland/V2RayAggregator](https://github.com/mahdibland/V2RayAggregator)

## 快速说明与更新

🟢 **2022年11月1日**：从现在开始，您可以使用此项目，README文件已更新，您可以查看文件中的最近更改，了解要使用哪些文件。

## 简介

此仓库的自动化功能均基于 `GitHub Actions` 实现。

本项目测试每个免费节点池的网络速度，并筛选出相对稳定且高速的节点，然后将它们导入到仓库进行共享记录。

速度测量功能在 `GitHub Actions` 环境下使用 [LiteSpeedTest](https://github.com/xxf098/LiteSpeedTest) 实现，因此，许多美国节点并不能很好地代表国内网络环境中的节点可用性。

## 特性

- 多个来源 😯
- 移除所有重复节点 🤤
- 提供多种格式的节点（YAML、Clash、V2ray、Base64）🦋
- 无需额外转换，避免破坏节点 🌿
- 通过测试筛选出最佳节点，并根据平均速度进行排序 🍀


## 使用说明与技巧

### 客户端推荐：Karing（或者您当前使用的客户端）

支持全平台，包括 Apple TV  
[下载链接](https://karing.app/quickstart#一-下载)

### 提示

- 如果您看到一个IP地址出现多次，通常是因为使用了不同的端口。
- （组2）一些免费机场仅提供1GB流量，或者有限时使用，因此我每2小时更新一次机场节点。如果您想使用这些节点，请在客户端设置自动更新选项，以便获取最新的节点。
- （组1）其他公共节点更为稳定，每12小时更新一次。
- 根据您的互联网服务提供商和位置，有些节点可能无法使用。

### 节点组

#### Group 1 (包含免费公共节点)(可用的较少)
- [Base64](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity)
- [Mixed](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt)
- [Clash](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.yml)

#### Group 2 (仅包含免费机场)(可用的较少)
- [Base64](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir)
- [Mixed](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt)
- [Clash](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.yml)

### 所有节点

去除重复节点：`5766`
- [节点链接混合（V2Ray）](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/sub/sub_merge.txt)
- [节点链接YAML（Clash）](https://raw.githubusercontent.com/mahdibland/SSAggregator/master/sub/sub_merge_yaml.yml)

### 按协议分离的所有节点

- [VMESS](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/sub/splitted/vmess.txt)
- [TROJAN](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/sub/splitted/trojan.txt)
- [SSR](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/sub/splitted/ssr.txt)
- [SHADOWSOCKS](https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/sub/splitted/ss.txt)

### Clash提供商配置 🐈‍⬛

> 配有“其他”标签的配置将用于代理国内服务。

- [Clash Meta For Iran](https://cdn.jsdelivr.net/gh/mahdibland/V2RayAggregator@master/update/provider/provider-meta.yml)（推荐）
- [Clash Meta For China](https://cdn.jsdelivr.net/gh/mahdibland/V2RayAggregator@master/update/provider/provider-meta-cn.yml)（推荐）
- [Clash Meta For Others](https://cdn.jsdelivr.net/gh/mahdibland/V2RayAggregator@master/update/provider/provider-meta-others.yml)（推荐）
- [Clash For Iran](https://cdn.jsdelivr.net/gh/mahdibland/V2RayAggregator@master/update/provider/provider.yml)
- [Clash For China](https://cdn.jsdelivr.net/gh/mahdibland/V2RayAggregator@master/update/provider/provider-cn.yml)
- [Clash For Others](https://cdn.jsdelivr.net/gh/mahdibland/V2RayAggregator@master/update/provider/provider-others.yml)

### 节点来源

- [pojiezhiyuanjun/freev2](https://github.com/pojiezhiyuanjun/freev2)，节点数量：`143`
- [Nodefree.org](https://github.com/Fukki-Z/nodefree)，节点数量：`28`
- [FiFier/v2rayShare](https://github.com/FiFier/v2rayShare)，节点数量：`18`
- [colatiger/v2ray-nodes](https://github.com/colatiger/v2ray-nodes)，节点数量：`121`
- [ssrsub/ssr](https://github.com/ssrsub/ssr)，节点数量：`368`
- [mahdibland/ShadowsocksAggregator](https://github.com/mahdibland/ShadowsocksAggregator)，节点数量：`200`
- [iwxf/free-v2ray](https://github.com/iwxf/free-v2ray)，节点数量：`39`
- [DoveBoy/Vmess-Actions](https://github.com/ldir92664/Vmess-Actions)，节点数量：`105`
- [gooooooooooooogle/Clash-Config](https://github.com/gooooooooooooogle/Clash-Config)，节点数量：`1`
- [Jsnzkpg/Jsnzkpg](https://github.com/Jsnzkpg/Jsnzkpg)，节点数量：`6`
- [ermaozi/get_subscribe](https://github.com/ermaozi/get_subscribe)，节点数量：`25`
- [wrfree/free](https://github.com/wrfree/free)，节点数量：`51`
- [anaer/Sub](https://github.com/anaer/Sub)，节点数量：`186`
- [aiboboxx/v2rayfree](https://github.com/aiboboxx/v2rayfree)，节点数量：`54`
- [Pawdroid/Free-servers](https://github.com/Pawdroid/Free-servers)，节点数量：`59`
- [misersun/config003-002](https://github.com/misersun/config003)，节点数量：`217`
- [clash.221207.xyz/pubclashyaml](https://clash.221207.xyz/pubclashyaml)，节点数量：`203`
- [mfuu/v2ray](https://github.com/mfuu/v2ray)，节点数量：`253`
- [freefq/free](https://github.com/freefq/free)，节点数量：`14`
- [xiyaowong/freeFQ](https://github.com/xiyaowong/freeFQ)，节点数量：`156`
- [yaney01/Yaney01](https://github.com/yaney01/Yaney01)，节点数量：`27`
- [YasserDivaR/pr0xy](https://github.com/YasserDivaR/pr0xy)，节点数量：`621`
- [peasoft/NoMoreWalls](https://github.com/peasoft/NoMoreWalls)，节点数量：`54`
- [mahdibland/get_v2](https://github.com/mahdibland/get_v2)，节点数量：`2598`
- [jikelonglie/meskell](https://github.com/jikelonglie/meskell)，节点数量：`9`
- [freebaipiao/freebaipiao](https://github.com/freebaipiao/freebaipiao)，节点数量：`6`
- [huwo1/proxy_nodes](https://bitbucket.org/huwo1/proxy_nodes/src/main)，节点数量：`183`
- [budamu/clashconfig](https://github.com/budamu/clashconfig)，节点数量：`142`
- [MOnday9907/v2ray](https://github.com/MOnday9907/v2ray)，节点数量：`8`
-

 [adminaliang/v2ray](https://github.com/adminaliang/v2ray)，节点数量：`16`
- [Jia-Pingwa/free-v2ray-merge](https://github.com/Jia-Pingwa/free-v2ray-merge)，节点数量：`327`
- [Lewis-1217/FreeNodes](https://github.com/Lewis-1217/FreeNodes)，节点数量：`39`
- [youlianboshi.netlify.app](https://youlianboshi.netlify.app/)，节点数量：`7`
- [jiang.netlify.app](https://jiang.netlify.app/)，节点数量：`245`
- [learnhard-cn/free_proxy_ss](https://github.com/learnhard-cn/free_proxy_ss)，节点数量：`116`
- [SnapdragonLee/SystemProxy](https://github.com/SnapdragonLee/SystemProxy)，节点数量：`239`
- [sub.pmsub.me/base64](https://sub.pmsub.me/base64)，节点数量：`2`
- [hermanb001/ProxyTest](https://github.com/hermanb001/ProxyTest)，节点数量：`1743`
- [mahdibland/vpn.fail](https://github.com/mahdibland/get_v2)，节点数量：`1451`

### 欢迎进我电报群，分享最好用的节点给大家，别忘了订阅我的频道，要不你就找不到！

