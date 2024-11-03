---
title: 不限设备数量！3分钟打专属VPN！欧区/美区想用哪里就用哪里！全程仅花费21！Hysteria2节点搭建教程 搭建安全VPN，没你想的那么复杂
cover: https://13fe9ff.webp.li/2024/10/446bbcbd6e18ea0a0218d68f29639c38.jpg
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-11-03 11:19:58
updated:
tags: 翻墙安全
categories: 翻墙安全
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
### 10月18更新：翻墙软件用karing下载合集：[https://karing.app/quickstart](https://karing.app/quickstart)

### 能用sing-box就不用Hiddify和karing

想看karing的介绍视频，点这里看下：[点击跳转](https://youtu.be/qQagYfpdXLM?si=Q-NKtoWBtVQvfQfM)

注意⚠️

搭建完成后导入Hiddify 如果显示“超时”

这不是你搭建的问题，是Hiddify软件还太新，不稳定！不信你换个别的设备别的软件测试下试试，如sing-box

有两个解决方案：

1. 在购买的vps那里从install Debian 10这里重新开始搭建一遍，再导入Hiddify 就能用。
2. 直接配置sing-box，用这个软件。

我的电报群（进群实时交流）：[https://t.me/limingroup](https://t.me/limingroup)

我的电报官方频道：[https://t.me/liminchannel](https://t.me/liminchannel)

群里都是一些走资，办国外银行卡，U卡，港美股的朋友，欢迎志同道合的人进群交流。

## 一,准备工作  
VPS 一台，新手请重置好主流的操作系统（Debian / CentOS），演示用的 VPS 来自HostEONS（可用支付宝购买的）

可选：欧区、德国、法国、洛杉矶、纽约、杰克逊维尔、达拉斯、拉斯维加斯等（不可退款）

| 内存 | CPU | SSD | 流量 | 价格 | 购买 |
|------|-----|-----|------|------|------|
| 1G   | 1核 | 10G | 1T/月 | $21/年 | [链接](https://my.hosteons.com/aff.php?aff=2272) |

高端VPS推荐搬瓦工，点这里（可退款）：[https://bandwagonhost.com/aff.php?aff=75001](https://bandwagonhost.com/aff.php?aff=75001)  
测试vps的IP是可用：点击这里：[https://ping.chinaz.com/](https://ping.chinaz.com/)  
IP纯净度检测：点击跳转：[https://scamalytics.com](https://scamalytics.com)  

---

<div class="video-container">
[<iframe width="560" height="315" src="https://www.youtube.com/embed/adF8n79wHbs?si=torJjhCORZgl5azj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>]
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


## 二，相关工具和介绍  
搭建软件：  
SSH连接工具下载地址：[点击下载](http://www.hostbuf.com/t/988.html) （全平台）

翻墙软件：

首选：

Hiddify（支持全平台，苹果暂未上架）：[GitHub下载合集](https://github.com/hiddify/hiddify-next/releases)

1. Windows版可以直接从微软应用商店下载：[点击跳转下载](https://apps.microsoft.com/detail/9pdfnl3qv2s5?hl=zh-cn&gl=DE)
2. 安卓用户在Google play可以直接下载
3. macOS 可以直接点击下载（如下载失败，请到上方合集下载）：[点击下载](https://github.com/hiddify/hiddify-next/releases/download/v2.1.5/Hiddify-MacOS.dmg)
4. 苹果手机方案：Shadowrocket：可以通过谷歌搜索“小火箭共享账号”购买，仅需1.99元，非常方便。这里就不贴具体的购买链接了，以免被误解为打广告。

备用翻墙软件：

如果Hiddify导入节点不能使用可以使用下方的试试

V2rayN 科学上网工具下载：[点击访问](https://github.com/2dust/v2rayN/releases/latest)（Windows电脑，如果你不清楚下载哪个文件，请下载“zz_v2rayN-With-Core-SelfContained.7z”解压使用）

sing-box客户端下载：[点击访问](https://sing-box.sagernet.org/zh/clients/)（macOS电脑，苹果手机，安卓手机）（配置方式在文章后面）



## 三、搭建 Hysteria 2

更新 VPS 系统，安装所需组件（根据系统，自行选择命令）

```bash
apt update -y              # Debian 命令
apt install curl sudo -y   # Debian 命令
```

安装Hysteria 2，过程中按照提示操作，具体看视频中演示

```bash
wget -N --no-check-certificate https://raw.githubusercontent.com/flame1ce/hysteria2-install/main/hysteria2-install-main/hy2/hysteria.sh && bash hysteria.sh
```

设置开机自启：

```bash
systemctl enable hysteria-server.service
```

伪装网址：www.bing.com

<span style="color:red">⚠️注意：SSH中的红色部分，请单独复制保存下来！（见视频）</span>




### Hysteria 服务相关命令

```bash
# 查看状态及日志
systemctl status hysteria-server.service 
# 停止Hysteria2
systemctl stop hysteria-server.service
# 设置开机自启
systemctl enable hysteria-server.service
# 重启
systemctl restart hysteria-server.service
# 检查服务是否正常运行
systemctl status hysteria-server.service 
```

如下图红框显示，表示配置正常。
![示例图片](https://13fe9ff.webp.li/2024/10/8adb16510f320fa8223614bb67a396a0.png)
至此，服务端设置完毕。

---

## 四、客户端配置

只需要复制红色部分链接，然后打开软件👉新建配置文件👉从剪贴板导入就OK啦！
![示例图片](https://13fe9ff.webp.li/2024/10/4f85e84d4fa5703e2e0ebc047a46d8ea.png)
---

## 常见问题：

节点如果不能正常使用，请放行端口，请将以下命令复制到搭建工具，再点回车：

```bash
iptables -I INPUT -p tcp --dport 443 -j ACCEPT
```

*请将443改为你节点的端口再使用。

---

## 五、Sing-box配置方法

一次配置，全平台都可以使用。

请在SSH里面找到这一段红色内容，然后复制下方到文本中，修改，仅需修改三处内容！

Hysteria 2 客户端 YAML 配置文件 `hy-client.yaml` 内容如下，并保存到 `/root/hy/hy-client.yaml`：

```yaml
server: 89.119.3.161:29851
auth: m4c6aq78
tls:
  sni: www.bing.com
  insecure: true
quic:
```
![示例图片](https://13fe9ff.webp.li/2024/10/7062cbaf28f0119add96ec72dc512b3a.png)

其中，VPS IP是：89.119.3.161，端口是：29851，密码是：m4c6aq78。

### Sing-box 配置文件

请看清楚以下配置文件中的注释，请根据自己的需要，自行更改。

```json
{
  "dns": {
    "servers": [
      {
        "tag": "cf",
        "address": "https://1.1.1.1/dns-query"
      },
      {
        "tag": "local",
        "address": "223.5.5.5",
        "detour": "direct"
      },
      {
        "tag": "block",
        "address": "rcode://success"
      }
    ],
    "rules": [
      {
        "geosite": "category-ads-all",
        "server": "block",
        "disable_cache": true
      },
      {
        "outbound": "any",
        "server": "local"
      },
      {
        "geosite": "cn",
        "server": "local"
      }
    ],
    "strategy": "ipv4_only"
  },
  "inbounds": [
    {
      "type": "tun",
      "inet4_address": "172.19.0.1/30",
      "auto_route": true,
      "strict_route": false,
      "sniff": true
    }
  ],
  "outbounds": [
    {
      "type": "hysteria2",
      "tag": "proxy",
      "server": "ip",             // VPS ip
      "server_port": 443,         // 端口修改成自己的见视频
      "up_mbps": 50,              // 上传速率，实际填写，过大会导致流量浪费
      "down_mbps": 200,           // 下载速率，实际填写，过大会导致流量浪费
      "password": "**********",   // hysteria2 服务密码
      "tls": {
        "enabled": true,
        "server_name": "bing.com",    
        "insecure": true                 
      }
    },
    {
      "type": "direct",
      "tag": "direct"
    },
    {
      "type": "block",
      "tag": "block"
    },
    {
      "type": "dns",
      "tag": "dns-out"
    }
  ],
  "route": {
    "rules": [
      {
        "protocol": "dns",
        "outbound": "dns-out"
      },
      {
        "geosite": "cn",
        "geoip": [
          "private",
          "cn"
        ],
        "outbound": "direct"
      },
      {
        "geosite": "category-ads-all",
        "outbound": "block"
      }
    ],
    "auto_detect_interface": true
  }
}
```

