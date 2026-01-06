// Sharing Detail Page JavaScript

// 文章数据（需要与 sharing.js 保持一致）
const sharingArticles = [
    {
        id: 61,
        title: '宝藏插画分享',
        category: 'inspiration',
        time: '2022-04-11',
        read: 987,
        summary: '一些宝藏插画师及不同风格的插画分享，供公司员工提升视觉审美，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/illustration.jpg',
        content: `
            <p>一些宝藏插画师及不同风格的插画分享，供公司员工提升视觉审美，同时便于交流、参考及学习。</p>
            <p>插画作为视觉传达的重要形式，在现代设计领域中占据着重要地位。优秀的插画作品不仅能够吸引观众的注意力，还能够有效传达信息，增强品牌形象。</p>
            <p>本次分享汇集了多位优秀插画师的作品，涵盖了不同的风格和表现手法，希望能够为大家带来灵感和启发。</p>
        `
    },
    {
        id: 44,
        title: '9月银行资料5+2整理NO.2',
        category: 'brand',
        time: '2019-12-17',
        read: 3212,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>一、银行行业分享</h2>
            <h3>1、招商银行</h3>
            <p>招商银行作为国内领先的商业银行，其品牌设计一直走在前列。本次调研重点分析了其视觉识别系统、品牌传播策略以及用户体验设计等方面的创新实践。</p>
            <p>通过深入分析，我们可以发现招商银行在品牌设计上的成功之处，以及值得借鉴的设计理念和方法。</p>
        `
    },
    {
        id: 43,
        title: '9月银行资料5+2整理NO.1',
        category: 'brand',
        time: '2019-12-17',
        read: 3109,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>一、银行行业分享</h2>
            <h3>1、蚂蚁花呗</h3>
            <p>蚂蚁花呗作为金融科技领域的创新产品，其品牌设计和用户体验都值得深入研究。</p>
        `
    },
    {
        id: 42,
        title: '8月银行资料5+2整理NO.3',
        category: 'brand',
        time: '2019-12-16',
        read: 3346,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>一、银行行业分享</h2>
            <p>本次分享包含多个银行品牌的设计案例分析和行业趋势解读。</p>
        `
    },
    {
        id: 40,
        title: '8月银行资料5+2整理NO.1',
        category: 'brand',
        time: '2019-12-12',
        read: 3501,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>第四周案例分享</h2>
            <h3>一、银行行业分享</h3>
            <p>本周重点分析了多家银行品牌的视觉设计和品牌传播策略。</p>
        `
    },
    {
        id: 37,
        title: '7月银行资料5+2整理NO.4',
        category: 'brand',
        time: '2019-12-11',
        read: 2310,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>第四周案例分享</h2>
            <p>本周分享内容涵盖了银行行业的多个设计案例。</p>
        `
    },
    {
        id: 36,
        title: '7月银行资料5+2整理NO.2',
        category: 'brand',
        time: '2019-12-11',
        read: 2461,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>第三周案例分享</h2>
            <p>本周重点分析了银行行业的品牌设计趋势和案例。</p>
        `
    },
    {
        id: 35,
        title: '7月银行资料5+2整理NO.3',
        category: 'brand',
        time: '2019-12-10',
        read: 2458,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>第二周案例分享</h2>
            <p>本周分享了多个银行品牌的创新设计案例。</p>
        `
    },
    {
        id: 31,
        title: '7月银行资料5+2整理NO.1',
        category: 'brand',
        time: '2019-12-10',
        read: 2435,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>第一周案例分享</h2>
            <p>本周开始了新一轮的银行行业品牌设计调研分享。</p>
        `
    },
    {
        id: 27,
        title: '6月银行资料5+2整理',
        category: 'brand',
        time: '2019-12-10',
        read: 2364,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: `
            <p>公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。</p>
            <h2>银行行业案例分享</h2>
            <h3>1、民生MONO自画像信用卡</h3>
            <p>对于当代年轻人来说，信用卡不仅是支付工具，更是展现个性与品味的载体。民生MONO自画像信用卡通过独特的设计理念，成功吸引了年轻消费群体的关注。</p>
        `
    },
    {
        id: 'article1',
        title: '教你3招：让你的文案有代入感',
        category: 'design',
        time: '2019-12-06',
        read: 1987,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。前两天在知乎上看到一个问题"如何理解宣传文...',
        image: 'assets/images/sharing/copywriting.jpg',
        content: `
            <p>PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。</p>
            <p>前两天在知乎上看到一个问题"如何理解宣传文案的代入感？"</p>
            <p>代入感是文案创作中非常重要的一个概念。好的文案能够让读者产生共鸣，仿佛身临其境。本文将分享三个实用的技巧，帮助您写出更有代入感的文案。</p>
        `
    },
    {
        id: 'article2',
        title: '感恩节，60+品牌教你如何花式表达感谢',
        category: 'design',
        time: '2019-12-05',
        read: 2551,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。首发：广告线人首先，感谢你点进这篇文章。一...',
        image: 'assets/images/sharing/thanksgiving.jpg',
        content: `
            <p>PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。</p>
            <p>首发：广告线人</p>
            <p>首先，感谢你点进这篇文章。一年一度的感恩节，各大品牌如何通过创意海报表达感谢？本文收集了60+品牌的感恩节海报作品，一起来看看它们是如何花式表达感谢的。</p>
        `
    },
    {
        id: 'article3',
        title: '文案较多的海报应该如何设计？',
        category: 'design',
        time: '2019-12-05',
        read: 1629,
        summary: '本篇文章跟大家探讨应如何设计一张文案较多的海报，在我们的日常工作中，也会接触到有很多文案的设计需求，在生活中我们也会看到很多海报中有较多的文案。那么对...',
        image: 'assets/images/sharing/poster-design.jpg',
        content: `
            <p>本篇文章跟大家探讨应如何设计一张文案较多的海报，在我们的日常工作中，也会接触到有很多文案的设计需求，在生活中我们也会看到很多海报中有较多的文案。那么对于文案较多的海报，我们应该如何设计呢？</p>
            <p>本文将从排版、视觉层次、字体选择等多个角度，为您提供实用的设计建议。</p>
        `
    },
    {
        id: 'article4',
        title: '广告人必看，11月全球创意海报合集 | 收藏',
        category: 'inspiration',
        time: '2019-12-05',
        read: 2351,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。11月刚刚结束了，我門收集了本月份的142张全...',
        image: 'assets/images/sharing/creative-posters.jpg',
        content: `
            <p>PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。</p>
            <p>11月刚刚结束了，我们收集了本月份的142张全球创意海报，这些作品来自世界各地的优秀设计师和广告公司，涵盖了不同风格和创意方向。</p>
        `
    },
    {
        id: 'article5',
        title: '靠谱预测！设计师必知的 2020 年平面和视觉设计趋势',
        category: 'design',
        time: '2019-12-05',
        read: 2368,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。距离 2020 年已经只有1个月的时间了，很多设...',
        image: 'assets/images/sharing/design-trends.jpg',
        content: `
            <p>PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。</p>
            <p>距离 2020 年已经只有1个月的时间了，很多设计师开始关注新一年的设计趋势。本文通过对全球设计作品的分析，预测了2020年平面和视觉设计的主要趋势。</p>
        `
    },
    {
        id: 'article6',
        title: '想让字体更有吸引力？来学下字体设计的断舍离！',
        category: 'design',
        time: '2019-12-02',
        read: 1760,
        summary: '@刘柏坤KUN：假期大家忙着游山玩水去远方，或是因为熟悉的地方没有风景。道理挪到字体设计中来，设计一款艺术字如果和平日常见的字体一样，那也就不觉得有什么特...',
        image: 'assets/images/sharing/typography.jpg',
        content: `
            <p>@刘柏坤KUN：假期大家忙着游山玩水去远方，或是因为熟悉的地方没有风景。道理挪到字体设计中来，设计一款艺术字如果和平日常见的字体一样，那也就不觉得有什么特别。</p>
            <p>字体设计的"断舍离"是一种设计哲学，通过简化和提炼，让字体更加有力和吸引人。本文将通过实例分析，教您如何运用这一理念进行字体设计。</p>
        `
    }
];

// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 加载文章详情
function loadArticle() {
    const articleId = getUrlParameter('id');
    if (!articleId) {
        window.location.href = 'sharing.html';
        return;
    }

    // 查找文章（支持数字ID和字符串ID）
    let article = sharingArticles.find(a => {
        // 尝试数字匹配
        if (typeof a.id === 'number' && typeof articleId === 'string') {
            return a.id.toString() === articleId;
        }
        // 字符串匹配
        return a.id.toString() === articleId.toString();
    });

    if (!article) {
        // 如果找不到文章，重定向到列表页
        console.error('Article not found:', articleId);
        window.location.href = 'sharing.html';
        return;
    }

    // 更新页面标题
    document.title = `${article.title} - 分享 - 天昊润蓝 Teamline`;

    // 更新文章标题
    const titleEl = document.getElementById('article-title');
    if (titleEl) {
        titleEl.textContent = article.title;
    }

    // 更新元信息
    const metaEl = document.getElementById('article-meta');
    if (metaEl) {
        metaEl.innerHTML = `
            <div class="article-detail__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${formatDate(article.time)}
            </div>
            <div class="article-detail__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                ${article.read} 阅读
            </div>
            <div class="article-detail__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                ${article.category === 'design' ? '设计趋势' : article.category === 'brand' ? '品牌案例' : '创意灵感'}
            </div>
        `;
    }

    // 更新文章内容
    const contentEl = document.getElementById('article-content');
    if (contentEl) {
        // 如果有图片，先插入图片
        let html = '';
        if (article.image) {
            html += `<img src="${article.image}" alt="${article.title}" onerror="this.style.display='none'">`;
        }
        html += article.content;
        contentEl.innerHTML = html;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadArticle();
});
