---
title: 第三期：多设备同时交叉管理Hexo更新博客，太好用了macOS/Windows
cover: https://13fe9ff.webp.li/2024/11/2fe13025851a9440532035c9d738d5b0.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-11-10 18:06:32
updated:
tags: 网站搭建
categories:
keywords:
description:
top:
top_img: https://13fe9ff.webp.li/2024/11/2fe13025851a9440532035c9d738d5b0.png
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


## 我的电报群（加入群组以便实时交流）：[https://t.me/limingroup](https://t.me/limingroup)  
## 我的电报官方频道：[https://t.me/liminchannel](https://t.me/liminchannel)  

### 目录：

1. GitHub 操作步骤
2. 旧电脑上的操作步骤
3. 新电脑上的操作步骤
4. 注意事项
5. 常用指令列表

---
### 第一部分：GitHub 操作步骤

在此步骤，请务必检查 `_posts` 文件夹中的所有 `.md` 文件，确保每篇文章的 `date` 字段都是具体的日期（例如：2024-01-01）。如果 `date` 字段未指定具体日期，每次在新电脑上部署时，系统会自动将文章日期更新为部署当天的日期，这将导致所有文章的发布日期被重置！这一点非常重要，请特别留意！如果不是确切日期，请先修改成确切日期，推送后，再执行以下操作！

![abm](https://13fe9ff.webp.li/2024/11/19456a68325b2e83ce5e0f747eaaaded.png)


1. **创建一个 hexo 分支**  

![abm](https://13fe9ff.webp.li/2024/11/c45726a9239c407c93c49ad7101ac353.JPG)

2. **将 hexo 分支设置为默认分支**

![abm](https://13fe9ff.webp.li/2024/11/4d3e6b59f6afee389b547b6c2ee481c6.png)


---

### 第二部分：旧电脑上的操作步骤

**步骤一：准备要上传到 GitHub 的文件**

1. 克隆仓库：下载仓库的 hexo 默认分支文件，记得将 `username` 替换为你自己的 GitHub 用户名：
    ```bash
    git clone git@github.com:username/username.github.io.git
    ```

2. 打包文件：进入克隆的文件夹，保留 `.git` 文件夹，删除其他文件。

3. 整理文件：找到之前的 hexo 文件夹，将其中 `.deploy_git` 文件夹外的所有内容复制到克隆的文件夹中。

4. **设置 .gitignore 文件**：确认克隆文件夹内有 `.gitignore` 文件，它用于忽略一些不需要的文件类型（若没有，需手动创建）。内容如下：
    ```plaintext
    .DS_Store
    Thumbs.db
    db.json
    *.log
    node_modules/
    public/
    .deploy*/
    ```

5. 检查主题文件夹：如果已克隆主题文件夹，需要删除 `.git` 文件，因为 Git 不能嵌套版本控制。确保显示隐藏文件，避免上传出错，影响配置同步。

**步骤二：将修改后的文件推送到远程仓库**

```bash
git add .
git commit -m "add_branch"
git push
```

此时，您已将完整的站点推送到远程仓库的 hexo 默认分支。

---

### 第三部分：新电脑上的操作步骤

1. **配置 SSH 密钥**：在新电脑上生成并添加 SSH 密钥到 GitHub 账户上。教程可以参考此视频：[https://youtu.be/64IUtZsvbCE](https://youtu.be/64IUtZsvbCE)。

2. **克隆仓库**：创建一个文件夹（假设命名为 A），在 A 文件夹内打开终端，并执行以下命令（替换 `username` 为你的 GitHub 用户名）：
    ```bash
    git clone git@github.com:username/username.github.io.git --depth=1
    ```

3. **安装 Hexo 环境**：进入 `username.github.io` 文件夹并运行以下命令：
    ```bash
    npm install hexo
    npm install
    npm install hexo-deployer-git
    ```

至此，您可以在新电脑上开始编辑和发布文章了。

---

### 第四部分：注意事项

当您在旧电脑和新电脑上交替使用时，注意保持同步：

- **旧电脑（甲）**：在“甲”电脑上完成文章更新后，记得运行：
    ```bash
    git add .
    git commit -m "add_branch"
    git push
    ```
    这样 GitHub 上将拥有最新版本的文件。

- **新电脑（乙）**：下午在“乙”电脑上继续编辑时，先执行以下命令以同步最新文件：
    ```bash
    git pull
    ```
    检查文件和预览是否是最新版本，确认无误后继续撰写。如果有问题，按照“第二部分”的操作重新进行同步。

> **注意**：如果一台电脑长时间未使用，可能会导致同步失效，建议按照“第二部分”的步骤重新操作。

如果有其他问题，欢迎加入我的电报群讨论交流。

---

### 第五部分：常用指令列表

以下指令在操作过程中会频繁使用，记得替换 `username` 为您的 GitHub 用户名：

```bash
hexo cl; hexo s

hexo cl; hexo g; hexo d

git clone git@github.com:username/username.github.io.git

git add .
git commit -m "add_branch"
git push

git clone git@github.com:username/username.github.io.git --depth=1

npm install hexo
npm install
npm install hexo-deployer-git
```


## 最后大家，无论在哪一台电脑上更新啦文章，都是执行推送到GitHub的指令！