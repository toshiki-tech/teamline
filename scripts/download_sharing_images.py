#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从原网站自动下载分享页面的图片
"""

import os
import re
import json
import sys
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("错误: 请先安装 requests 和 beautifulsoup4")
    print("运行: pip install requests beautifulsoup4")
    sys.exit(1)

# 配置
BASE_URL = "https://www.teamline.cn"
OUTPUT_DIR = "assets/images/sharing"
SCRIPT_DIR = "scripts"

# 文章URL到ID和文件名的映射
ARTICLE_MAP = {
    "https://www.teamline.cn/share/61.html": {"id": 61, "filename": "illustration.jpg"},
    "https://www.teamline.cn/share/44.html": {"id": 44, "filename": "bank-design-44.jpg"},
    "https://www.teamline.cn/share/43.html": {"id": 43, "filename": "bank-design-43.jpg"},
    "https://www.teamline.cn/share/42.html": {"id": 42, "filename": "bank-design-42.jpg"},
    "https://www.teamline.cn/share/40.html": {"id": 40, "filename": "bank-design-40.jpg"},
    "https://www.teamline.cn/share/37.html": {"id": 37, "filename": "bank-design-37.jpg"},
    "https://www.teamline.cn/share/36.html": {"id": 36, "filename": "bank-design-36.jpg"},
    "https://www.teamline.cn/share/35.html": {"id": 35, "filename": "bank-design-35.jpg"},
    "https://www.teamline.cn/share/31.html": {"id": 31, "filename": "bank-design-31.jpg"},
    "https://www.teamline.cn/share/27.html": {"id": 27, "filename": "bank-design-27.jpg"},
}

def download_image(url, filepath):
    """下载图片"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30, stream=True)
        response.raise_for_status()
        
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        file_size = os.path.getsize(filepath)
        print(f"  ✓ 下载成功: {os.path.basename(filepath)} ({file_size//1024}KB)")
        return True
    except Exception as e:
        print(f"  ✗ 下载失败: {str(e)}")
        return False

def extract_images_from_page(url):
    """从页面中提取图片URL"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.encoding = 'utf-8'
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        images = []
        
        # 查找所有图片
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or img.get('data-original')
            if src:
                # 转换为绝对URL
                absolute_url = urljoin(BASE_URL, src)
                # 过滤掉logo、图标等小图片
                if any(x in absolute_url.lower() for x in ['logo', 'icon', 'favicon', 'sprite', 'nav']):
                    continue
                # 只保留文章内容中的图片
                if any(x in absolute_url for x in ['share', 'upload', 'images', 'img', 'static', 'default']):
                    images.append(absolute_url)
        
        return list(set(images))  # 去重
    except Exception as e:
        print(f"  ✗ 提取图片失败: {str(e)}")
        return []

def update_js_files(downloaded_images):
    """更新JavaScript文件中的图片路径"""
    print("\n更新JavaScript文件...")
    
    js_files = [
        os.path.join(SCRIPT_DIR, "sharing.js"),
        os.path.join(SCRIPT_DIR, "sharing-detail.js")
    ]
    
    for js_file in js_files:
        if not os.path.exists(js_file):
            print(f"  ! 文件不存在: {js_file}")
            continue
        
        try:
            with open(js_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # 更新图片路径
            for article_id, filename in downloaded_images.items():
                # 匹配模式: id: 数字 或 id: '字符串', 然后查找对应的 image: '...'
                # 使用更精确的正则表达式
                pattern = f"(id:\\s*(?:{re.escape(str(article_id))}|'{re.escape(str(article_id))}'|\"{re.escape(str(article_id))}\"),[^}}]*?image:\\s*)'[^']*'"
                replacement = f"\\1'assets/images/sharing/{filename}'"
                content = re.sub(pattern, replacement, content, flags=re.DOTALL)
            
            if content != original_content:
                with open(js_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  ✓ 已更新: {os.path.basename(js_file)}")
            else:
                print(f"  - 无需更新: {os.path.basename(js_file)}")
        except Exception as e:
            print(f"  ✗ 更新失败: {os.path.basename(js_file)} - {str(e)}")

def main():
    """主函数"""
    print("="*60)
    print("开始下载分享页面图片")
    print("="*60 + "\n")
    
    # 创建输出目录
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    downloaded_images = {}
    failed_articles = []
    
    # 下载每篇文章的图片
    for article_url, article_info in ARTICLE_MAP.items():
        article_id = article_info["id"]
        filename = article_info["filename"]
        
        print(f"处理文章 ID {article_id}:")
        print(f"  URL: {article_url}")
        
        images = extract_images_from_page(article_url)
        
        if images:
            # 选择最大的图片（通常是主图）
            main_image = None
            max_size_estimate = 0
            
            for img_url in images:
                # 简单的估算：URL长度可能反映图片大小
                size_estimate = len(img_url)
                # 优先选择包含文章ID或数字的图片
                if str(article_id) in img_url:
                    size_estimate += 1000
                if size_estimate > max_size_estimate:
                    max_size_estimate = size_estimate
                    main_image = img_url
            
            if main_image:
                filepath = os.path.join(OUTPUT_DIR, filename)
                print(f"  图片URL: {main_image}")
                if download_image(main_image, filepath):
                    downloaded_images[article_id] = filename
                else:
                    failed_articles.append(article_id)
            else:
                print(f"  ! 未找到合适的图片")
                failed_articles.append(article_id)
        else:
            print(f"  ! 未找到图片")
            failed_articles.append(article_id)
        print()
    
    # 生成下载报告
    print("="*60)
    print("下载完成！")
    print("="*60)
    print(f"成功下载: {len(downloaded_images)} 张图片")
    if failed_articles:
        print(f"失败的文章ID: {failed_articles}")
    print()
    
    # 更新JavaScript文件
    if downloaded_images:
        update_js_files(downloaded_images)
    
    print("\n✅ 所有操作完成！")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️ 用户中断操作")
        sys.exit(1)
    except Exception as e:
        print(f"\n✗ 发生错误: {str(e)}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
