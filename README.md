# lanmeiniu Technical Casebook

个人技术案例集，基于真实项目经历脱敏整理。

## 当前站点结构

```text
.
├── index.html
├── CNAME
├── .nojekyll
├── README.md
└── assets
    ├── css
    │   └── style.css
    ├── js
    │   └── app.js
    └── images
        ├── ward-order-lifecycle.png
        ├── ward-cancel-consistency.png
        ├── ward-plan-rules.png
        ├── queue-entry.png
        ├── queue-dispatch.png
        ├── queue-recovery.png
        ├── periodontal-data-loop.svg
        ├── periodontal-ai-loop.png
        └── periodontal-rules.svg
```

## 主要修改位置

- 首页文案 / 项目文字：`index.html`
- 页面样式：`assets/css/style.css`
- Tab / 图片放大交互：`assets/js/app.js`
- 流程图与图片：`assets/images/`

## 当前作者信息

```text
LANMEINIU · TECHNICAL CASEBOOK
Complex Business Systems / Java / Healthcare IT
lanmeiniu.top
```

如果以后要增加 GitLab 链接，可以在 `index.html` 中搜索：

```html
<div class="profile-links">
```

然后追加：

```html
<span class="profile-dot">·</span>
<a href="https://gitlab.com/你的账号" target="_blank" rel="noopener noreferrer">
  gitlab.com/你的账号
</a>
```

## GitHub Pages / GitLab Pages

这是纯静态站点，不需要构建。

### GitHub Pages
- 仓库根目录保留 `index.html`
- Pages 发布源选择仓库根目录
- 使用当前 `CNAME` 可绑定 `lanmeiniu.top`

### GitLab Pages
也可以继续使用此源码，只需要按 GitLab Pages 的静态站点规则增加 CI 配置即可。

> 公开仓库中只保留脱敏后的案例内容。不要提交医院名称、患者数据、内部参数、状态码、接口地址或原始内部流程图。
