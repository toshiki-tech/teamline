# 分享页面数据说明

## 数据结构

分享页面的文章数据存储在 `scripts/sharing.js` 和 `scripts/sharing-detail.js` 中的 `sharingArticles` 数组中。

每篇文章的数据结构：
```javascript
{
    id: 61,                          // 文章ID（数字或字符串）
    title: '文章标题',                // 文章标题
    category: 'inspiration',         // 分类：'design' | 'brand' | 'inspiration'
    time: '2022-04-11',              // 发布日期
    read: 987,                       // 阅读量
    summary: '文章摘要...',           // 文章摘要（列表页显示）
    image: 'assets/images/sharing/xxx.jpg',  // 文章配图
    content: '文章正文内容（HTML格式）'      // 文章正文（详情页显示）
}
```

## 如何添加新文章

1. 编辑 `scripts/sharing.js` 文件
2. 在 `sharingArticles` 数组中添加新的文章对象
3. 同时编辑 `scripts/sharing-detail.js`，在 `sharingArticles` 数组中添加相同的数据
4. 将文章配图保存到 `assets/images/sharing/` 目录

## 图片处理

- 图片建议尺寸：宽度 800-1200px
- 格式：JPG 或 PNG
- 文件大小：建议控制在 200KB 以内
- 如果图片不存在，会自动显示占位符

## 从原网站获取内容

1. 访问 https://www.teamline.cn/share.html
2. 点击文章链接查看详情
3. 复制文章标题、内容、时间等信息
4. 保存文章中的图片到本地
5. 更新 JavaScript 文件中的数据

