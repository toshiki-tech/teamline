// Sharing Page JavaScript

// 文章数据（从JSON文件加载或直接定义）
const sharingArticles = [
    {
        id: 61,
        title: '宝藏插画分享',
        category: 'inspiration',
        time: '2022-04-11',
        read: 987,
        summary: '一些宝藏插画师及不同风格的插画分享，供公司员工提升视觉审美，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/illustration.jpg',
        content: '一些宝藏插画师及不同风格的插画分享，供公司员工提升视觉审美，同时便于交流、参考及学习。'
    },
    {
        id: 44,
        title: '9月银行资料5+2整理NO.2',
        category: 'brand',
        time: '2019-12-17',
        read: 3212,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。一、银行行业分享1、招商银行...'
    },
    {
        id: 43,
        title: '9月银行资料5+2整理NO.1',
        category: 'brand',
        time: '2019-12-17',
        read: 3109,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。一、银行行业分享1、蚂蚁花呗...'
    },
    {
        id: 42,
        title: '8月银行资料5+2整理NO.3',
        category: 'brand',
        time: '2019-12-16',
        read: 3346,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。一、银行行业分享1、蚂蚁花呗...'
    },
    {
        id: 40,
        title: '8月银行资料5+2整理NO.1',
        category: 'brand',
        time: '2019-12-12',
        read: 3501,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。第四周案例分享一、银行行业分享...'
    },
    {
        id: 37,
        title: '7月银行资料5+2整理NO.4',
        category: 'brand',
        time: '2019-12-11',
        read: 2310,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。第四周案例分享一、银行行业分享...'
    },
    {
        id: 36,
        title: '7月银行资料5+2整理NO.2',
        category: 'brand',
        time: '2019-12-11',
        read: 2461,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。第三周案例分享一、银行行业分享...'
    },
    {
        id: 35,
        title: '7月银行资料5+2整理NO.3',
        category: 'brand',
        time: '2019-12-10',
        read: 2458,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。第二周案例分享一、银行行业分享...'
    },
    {
        id: 31,
        title: '7月银行资料5+2整理NO.1',
        category: 'brand',
        time: '2019-12-10',
        read: 2435,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。第一周案例分享一、银行行业分享...'
    },
    {
        id: 27,
        title: '6月银行资料5+2整理',
        category: 'brand',
        time: '2019-12-10',
        read: 2364,
        summary: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。',
        image: 'assets/images/sharing/bank-design.jpg',
        content: '公司每月推出五家银行行业品牌设计调研和两家其他行业品牌设计调研的案例，共公司员工掌握客户的行情，同时便于交流、参考及学习。1、民生MONO自画像信用卡对于当...'
    },
    {
        id: 'article1',
        title: '教你3招：让你的文案有代入感',
        category: 'design',
        time: '2019-12-06',
        read: 1987,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。前两天在知乎上看到一个问题"如何理解宣传文...',
        image: 'assets/images/sharing/copywriting.jpg',
        content: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。前两天在知乎上看到一个问题"如何理解宣传文..."'
    },
    {
        id: 'article2',
        title: '感恩节，60+品牌教你如何花式表达感谢',
        category: 'design',
        time: '2019-12-05',
        read: 2551,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。首发：广告线人首先，感谢你点进这篇文章。一...',
        image: 'assets/images/sharing/thanksgiving.jpg',
        content: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。首发：广告线人首先，感谢你点进这篇文章。一...'
    },
    {
        id: 'article3',
        title: '文案较多的海报应该如何设计？',
        category: 'design',
        time: '2019-12-05',
        read: 1629,
        summary: '本篇文章跟大家探讨应如何设计一张文案较多的海报，在我们的日常工作中，也会接触到有很多文案的设计需求，在生活中我们也会看到很多海报中有较多的文案。那么对...',
        image: 'assets/images/sharing/poster-design.jpg',
        content: '本篇文章跟大家探讨应如何设计一张文案较多的海报，在我们的日常工作中，也会接触到有很多文案的设计需求，在生活中我们也会看到很多海报中有较多的文案。那么对...'
    },
    {
        id: 'article4',
        title: '广告人必看，11月全球创意海报合集 | 收藏',
        category: 'inspiration',
        time: '2019-12-05',
        read: 2351,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。11月刚刚结束了，我門收集了本月份的142张全...',
        image: 'assets/images/sharing/creative-posters.jpg',
        content: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。11月刚刚结束了，我門收集了本月份的142张全...'
    },
    {
        id: 'article5',
        title: '靠谱预测！设计师必知的 2020 年平面和视觉设计趋势',
        category: 'design',
        time: '2019-12-05',
        read: 2368,
        summary: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。距离 2020 年已经只有1个月的时间了，很多设...',
        image: 'assets/images/sharing/design-trends.jpg',
        content: 'PS：本站(PC网站、手机网站、APP)部分文字及图片来源于网络，如侵犯到您的权益，请及时告知，本站将及时处理或撤换。距离 2020 年已经只有1个月的时间了，很多设...'
    },
    {
        id: 'article6',
        title: '想让字体更有吸引力？来学下字体设计的断舍离！',
        category: 'design',
        time: '2019-12-02',
        read: 1760,
        summary: '@刘柏坤KUN：假期大家忙着游山玩水去远方，或是因为熟悉的地方没有风景。道理挪到字体设计中来，设计一款艺术字如果和平日常见的字体一样，那也就不觉得有什么特...',
        image: 'assets/images/sharing/typography.jpg',
        content: '@刘柏坤KUN：假期大家忙着游山玩水去远方，或是因为熟悉的地方没有风景。道理挪到字体设计中来，设计一款艺术字如果和平日常见的字体一样，那也就不觉得有什么特...'
    }
];

let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 9;

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 过滤文章
function filterArticles() {
    if (currentCategory === 'all') {
        return sharingArticles;
    }
    return sharingArticles.filter(article => article.category === currentCategory);
}

// 渲染文章卡片
function renderArticles() {
    const grid = document.getElementById('sharing-grid');
    if (!grid) return;

    const filtered = filterArticles();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageArticles = filtered.slice(start, end);

    if (pageArticles.length === 0) {
        grid.innerHTML = `
            <div class="sharing__empty">
                <div class="sharing__empty-icon">📝</div>
                <div class="sharing__empty-text">暂无文章</div>
            </div>
        `;
        return;
    }

    grid.innerHTML = pageArticles.map((article, index) => `
        <article class="sharing-card" style="animation-delay: ${index * 0.1}s" data-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" class="sharing-card__image" onerror="this.src='https://via.placeholder.com/400x220?text=${encodeURIComponent(article.title)}'">
            <div class="sharing-card__content">
                <div class="sharing-card__meta">
                    <span class="sharing-card__time">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${formatDate(article.time)}
                    </span>
                    <span class="sharing-card__read">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        ${article.read}
                    </span>
                </div>
                <h3 class="sharing-card__title">${article.title}</h3>
                <p class="sharing-card__excerpt">${article.summary}</p>
                <div class="sharing-card__footer">
                    <a href="sharing-detail.html?id=${article.id}" class="sharing-card__link">阅读全文</a>
                </div>
            </div>
        </article>
    `).join('');

    // 添加可见性动画
    const cards = grid.querySelectorAll('.sharing-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    renderPagination(filtered.length);
}

// 渲染分页
function renderPagination(totalItems) {
    const pagination = document.getElementById('sharing-pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    // 上一页
    html += `
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
            ←
        </button>
    `;

    // 页码
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `
                <button class="pagination-btn ${i === currentPage ? 'pagination-btn--active' : ''}" data-page="${i}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span class="pagination-btn" style="border: none; cursor: default;">...</span>`;
        }
    }

    // 下一页
    html += `
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
            →
        </button>
    `;

    pagination.innerHTML = html;

    // 绑定分页按钮事件
    pagination.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.getAttribute('data-page'));
            if (page && page !== currentPage) {
                currentPage = page;
                renderArticles();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// 初始化筛选器
function initFilters() {
    const filters = document.getElementById('sharing-filters');
    if (!filters) return;

    filters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // 更新活动状态
            filters.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('filter-btn--active');
            });
            e.target.classList.add('filter-btn--active');

            // 更新分类
            currentCategory = e.target.getAttribute('data-category');
            currentPage = 1;
            renderArticles();
        }
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initFilters();
    renderArticles();
});


