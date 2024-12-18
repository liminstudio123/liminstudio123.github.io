---
abbrlink: ''
ai: null
aplayer: null
aside: null
background: '#fff'
categories: []
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: https://img.limin.studio/2024/12/CURSOR.png
date: '2024-12-18T14:21:45.318608+08:00'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
swiper_index: 10
tags:
- 好用工具
title: 0基础一个人也可以强过几个团队！AI编程工具！全网最详尽的Cursor使用教程，让开发如同聊天般轻松
toc: null
toc_number: null
toc_style_simple: null
top: null
top_group_index: 10
top_img: https://img.limin.studio/2024/12/CURSOR.png
updated: '2024-12-18T14:21:47.360+08:00'
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



**我的电报群（进群实时交流）：**[https://t.me/limingroup](https://t.me/limingroup)
**我的电报官方频道：**[https://t.me/liminchannel](https://t.me/liminchannel)

## 目录

前言

一、cursor是什么？

二、使用步骤

1. cursor的下载
2. 内置模型
3. 常用快捷键
4. 项目的全自动开发
5. 将外部文档作为知识库进行问答
6. 加入内置System prompt

---

## 前言

从年中cursor开源以来，逐渐火遍全网，成为编程的又一更强力助手。在亲身使用了三个月后，写下该教程，供广大开发者参考。cursor的使用十分简单，学习后你会发现，集成了先进LLM的cursor在编程方面的强大。（结尾有彩蛋）

---

## 一、cursor是什么？

cursor是一个集成了GPT-4、Claude 3.5等先进LLM的类vscode编译器，可以理解为在vscode中集成了AI辅助编程助手。cursor的布局和vscode基本一致，使用操作也类似，包括extension下载、python编译器配置、远程服务器连接和settings等。如果你是资深vscode用户，能够无缝衔接cursor。当然，如果你是pycharm选手，也可以很快上手cursor。

---

## 二、使用步骤

### 1. cursor的下载

cursor可以直接在官网下载安装，并注册账号。在第一次打开cursor时，输入账号信息即可。

> cursor官网：[Cursor](https://www.cursor.com/)

注册完成后，每个账号的模型调用次数是有限的，其中GPT-4和Claude 3.5的免费调用次数为500次，其他较弱的模型调用次数没有限制。

完成注册后，点击最上面的框，输入`>language`，可以配置简体中文。

---

### 2. 内置模型

cursor内置了许多LLMs，包括最先进的GPT-4、Claude 3.5和openai最新发布的推理模型o1-preview和o1-mini。在右上角的设置中，可以打开相应的模型进行辅助编程。平时使用最多的还是Claude 3.5和GPT-4，因为它们在编写代码时非常强大。

---

### 3. 常用快捷键

cursor最常用的快捷键就四个，非常好记：

* **Tab**：自动填充
* **Ctrl+K**：编辑代码
* **Ctrl+L**：回答用户关于代码和整个项目的问题，也可以编辑代码（功能最全面）
* **Ctrl+I**：编辑整个项目代码（跨文件编辑代码）

首先介绍Tab快捷键的使用，如果cursor补全代码，使用Tab键接受即可。

接下来介绍Ctrl+K的使用，使用方式主要分为两种：

1. 从0到1编写代码
2. 修改已有代码

（也可以选中整个文件的代码，让Cursor帮你生成详细的代码注释。）

* **从0到1编写代码**：随便找一个空白区域按下Ctrl+K唤出编辑框，选择模型，输入需求开始生成。生成后点击`Accept`或`Reject`接受或拒绝。
* **修改已有代码**：选中已有代码按下Ctrl+K唤出编辑框，选择模型，输入需求开始编辑。生成后点击`Accept`或`Reject`接受或拒绝。

接下来介绍Ctrl+L的使用，这个快捷键非常强大，可以编辑代码、智能问答。智能问答可以针对选中代码、整个代码文件和整个项目进行问答。

同样选中一块区域按下Ctrl+L，右侧会显示问答界面，针对选中的区域进行提问。同时也可以提出代码编辑要求，然后会给出修改后的代码。

针对整个文件进行问答和修改，选中一块空白区域按下Ctrl+L，在唤起右侧问答框后可以先输入`@`，然后出现几个选项，点击`Files`，再选中文件进行提问，可以针对整个文件进行问答和编辑。

直接提出要求，如果是编辑代码，则可以直接点击`Apply`，也会和Ctrl+K一样，直接覆盖到编译器中。

针对整个项目进行问答，和单个文件的操作相同，只是选中时点击`Codebase`，然后对整个项目进行提问和编辑。这个功能可以帮助快速上手一个新的项目或找到项目中的关键组件。

---

### 4. 项目的全自动开发

Ctrl+I是专为整个项目设计的，可以通过和模型对话来开发整个项目。过程就像聊天一样，可以帮助你创建文件、删除文件、同时编辑多个文件等功能。使用Ctrl+I需要在设置中开启相关按钮。

当你准备好一个空白项目，点击一个空白区域，按下Ctrl+I来唤起聊天框开始多轮对话。例如，你可以让它写一个贪吃蛇游戏，点击`Accept all`直接应用。

---

### 5. 将外部文档作为知识库进行问答

cursor提供了为外部文档建立知识库进行问答的功能。可以在设置中加入文档（如开发文档）作为cursor的知识库，以更好地辅助编程。

加入文档后，使用文档进行提问的方式和单个文件一样。只需按下Ctrl+L，输入`@`，然后点击`docs`，选择已加入的文档即可。

---

### 6. 加入内置System prompt

System prompt的作用是帮助大模型更好地理解自己的职责和用户的行为习惯，从而更精确地回答问题。在设置中，你可以添加System prompt规则。

