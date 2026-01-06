#!/bin/bash
# 从原网站自动下载分享页面的图片

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"

OUTPUT_DIR="assets/images/sharing"
VENV_DIR=".venv"

# 创建虚拟环境（如果不存在）
if [ ! -d "$VENV_DIR" ]; then
    echo "创建Python虚拟环境..."
    python3 -m venv "$VENV_DIR"
fi

# 激活虚拟环境
source "$VENV_DIR/bin/activate"

# 安装必要的库
echo "安装必要的Python库..."
pip install -q requests beautifulsoup4

# 运行Python脚本
python3 "$SCRIPT_DIR/download_sharing_images.py"

deactivate


