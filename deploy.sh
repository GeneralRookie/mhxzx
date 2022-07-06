#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd blog/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO> https://github.com/GeneralRookie/mhxzx.git master:gh-pages
git push -f git@github.com:GeneralRookie/mhxzx.git master:gh-pages
# git remote set-url origin http://用户名:密码@github.com/spring/spring-framework.git
#链接远程仓库
git remote add origin https://github.com/GeneralRookie/mhxzx.git
#拉取远程仓库的文件
git pull --rebase origin master
#同步更新代码
git push -u origin master
cd -