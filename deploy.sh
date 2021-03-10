# 错误时停止
set -e

# 打包
npm run docs:build

# 进入目标文件夹
cd docs/.vuepress/dist/

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'
# https://github.com/guangliangliang/vue-admin
# 提交到 https://github.com:guangliangliang/vue-admin 项目的 gh-pages 分支
git push -f git@github.com:guangliangliang/guangliangliang.github.io.git master:gh-pages

cd -