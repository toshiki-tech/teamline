// Cases Page JavaScript

// 案例数据
const casesData = [
  {
    id: 1,
    title: '空间展示案例',
    category: 'space',
    tag: '空间展示',
    description: '专业的空间展示设计，打造沉浸式品牌体验空间。将品牌理念融入空间设计，创造令人印象深刻的视觉体验。',
    image: 'assets/images/cases/homecase_01.jpg',
    images: ['assets/images/cases/homecase_01.jpg'],
    client: '展览中心',
    year: '2023',
    service: '空间设计、展览设计'
  },
  {
    id: 2,
    title: '品牌策划案例',
    category: 'brand',
    tag: '品牌策划',
    description: '为知名企业打造完整的品牌识别系统，提升品牌价值和市场认知度。通过深入的品牌调研和策略规划，建立了独特的品牌定位。',
    image: 'assets/images/cases/homecase_02.jpg',
    images: ['assets/images/cases/homecase_02.jpg'],
    client: '知名企业',
    year: '2023',
    service: '品牌策划、视觉识别'
  },
  {
    id: 3,
    title: '数字营销案例',
    category: 'digital',
    tag: '数字营销',
    description: '数字化营销解决方案，提升品牌在线影响力和用户 engagement。通过数据驱动的策略和创新的内容营销，实现品牌突破。',
    image: 'assets/images/cases/homecase_03.jpg',
    images: ['assets/images/cases/homecase_03.jpg'],
    client: '互联网企业',
    year: '2023',
    service: '数字营销、内容营销'
  },
  {
    id: 4,
    title: '视觉创意案例',
    category: 'visual',
    tag: '视觉创意',
    description: '创新视觉设计，为品牌注入活力，传达独特的品牌个性。通过独特的创意视角和专业的视觉表现，成功塑造品牌形象。',
    image: 'assets/images/cases/homecase_04.jpg',
    images: ['assets/images/cases/homecase_04.jpg'],
    client: '创意品牌',
    year: '2023',
    service: '视觉设计、创意设计'
  },
  {
    id: 5,
    title: '交互视觉案例',
    category: 'interaction',
    tag: '交互视觉',
    description: 'UI/UX设计，提升用户体验和产品易用性。以用户为中心，设计直观、美观、易用的交互界面，实现用户体验的显著提升。',
    image: 'assets/images/cases/homecase_05.jpg',
    images: ['assets/images/cases/homecase_05.jpg'],
    client: '科技公司',
    year: '2023',
    service: 'UI/UX设计、交互设计'
  },
  {
    id: 6,
    title: '公关策划案例',
    category: 'pr',
    tag: '公关策划',
    description: '品牌公关活动策划与执行，提升品牌影响力和美誉度。通过精心策划的公关活动，成功提升品牌在目标受众中的认知度。',
    image: 'assets/images/cases/homecase_06.jpg',
    images: ['assets/images/cases/homecase_06.jpg'],
    client: '知名品牌',
    year: '2023',
    service: '公关策划、活动执行'
  },
  {
    id: 7,
    title: '品牌策划案例二',
    category: 'brand',
    tag: '品牌策划',
    description: '全面的品牌策略规划，从定位到视觉系统，打造差异化品牌形象。为客户建立了独特的品牌识别体系。',
    image: 'assets/images/cases/homecase_07.jpg',
    images: ['assets/images/cases/homecase_07.jpg'],
    client: '企业客户',
    year: '2023',
    service: '品牌策划、品牌设计'
  },
  {
    id: 8,
    title: '视觉创意案例二',
    category: 'visual',
    tag: '视觉创意',
    description: '专业的视觉设计服务，包括平面设计、视觉识别系统等创意设计。以独特的创意视角，将品牌理念转化为视觉作品。',
    image: 'assets/images/cases/homecase_08.jpg',
    images: ['assets/images/cases/homecase_08.jpg'],
    client: '设计品牌',
    year: '2023',
    service: '视觉设计、平面设计'
  },
  {
    id: 9,
    title: '空间展示案例二',
    category: 'space',
    tag: '空间展示',
    description: '商业空间设计与展示，打造专业的品牌展示空间。将品牌理念融入空间设计，创造令人印象深刻的展示效果。',
    image: 'assets/images/cases/homecase_09.jpg',
    images: ['assets/images/cases/homecase_09.jpg'],
    client: '商业中心',
    year: '2023',
    service: '空间设计、展示设计'
  },
  {
    id: 10,
    title: '数字营销案例二',
    category: 'digital',
    tag: '数字营销',
    description: '数字时代的营销解决方案，包括社交媒体运营、内容营销等。运用数据驱动的策略，帮助品牌建立影响力。',
    image: 'assets/images/cases/homecase_10.jpg',
    images: ['assets/images/cases/homecase_10.jpg'],
    client: '数字企业',
    year: '2023',
    service: '数字营销、社交媒体'
  }
];

let currentFilter = 'all';
let displayedCount = 6;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  renderCases();
  setupFilter();
  setupModal();
  setupLoadMore();
});

// 渲染案例
function renderCases() {
  const grid = document.getElementById('cases-grid');
  const filteredCases = currentFilter === 'all' 
    ? casesData 
    : casesData.filter(caseItem => caseItem.category === currentFilter);
  
  const casesToShow = filteredCases.slice(0, displayedCount);
  
  grid.innerHTML = casesToShow.map((caseItem, index) => `
    <article class="case-item" data-category="${caseItem.category}" style="animation-delay: ${index * 0.1}s">
      <div class="case-item__image-wrapper">
        <img src="${caseItem.image}" alt="${caseItem.title}" class="case-item__image" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(caseItem.title)}'">
        <div class="case-item__overlay">
          <span class="case-item__tag">${caseItem.tag}</span>
        </div>
      </div>
      <div class="case-item__content">
        <h3 class="case-item__title">${caseItem.title}</h3>
        <p class="case-item__description">${caseItem.description}</p>
        <div class="case-item__meta">
          <span>${caseItem.year}</span>
          <span>•</span>
          <span>${caseItem.client}</span>
        </div>
      </div>
    </article>
  `).join('');
  
  // 添加点击事件
  document.querySelectorAll('.case-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      openModal(casesToShow[index]);
    });
  });
  
  // 更新加载更多按钮
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (casesToShow.length >= filteredCases.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'inline-flex';
  }
}

// 设置筛选
function setupFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      displayedCount = 6;
      renderCases();
    });
  });
}

// 设置模态框
function setupModal() {
  const modal = document.getElementById('case-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  
  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// 打开模态框
function openModal(caseItem) {
  const modal = document.getElementById('case-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="modal__header">
      <span class="modal__tag">${caseItem.tag}</span>
      <h2 class="modal__title">${caseItem.title}</h2>
      <p class="modal__description">${caseItem.description}</p>
    </div>
    
    <div class="modal__gallery">
      ${caseItem.images.map(img => `
        <div class="modal__gallery-item">
          <img src="${img}" alt="${caseItem.title}" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(caseItem.title)}'">
        </div>
      `).join('')}
    </div>
    
    <div class="modal__details">
      <div class="modal__detail-item">
        <span class="modal__detail-label">服务类型</span>
        <span class="modal__detail-value">${caseItem.service}</span>
      </div>
      <div class="modal__detail-item">
        <span class="modal__detail-label">客户</span>
        <span class="modal__detail-value">${caseItem.client}</span>
      </div>
      <div class="modal__detail-item">
        <span class="modal__detail-label">年份</span>
        <span class="modal__detail-value">${caseItem.year}</span>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
  const modal = document.getElementById('case-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// 设置加载更多
function setupLoadMore() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  loadMoreBtn.addEventListener('click', function() {
    displayedCount += 6;
    renderCases();
  });
}
