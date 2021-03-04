---
title: 版本控制提交规范你会了吗2？
date: 2020-09-07
tags:
- Git
categories:
- "Git"
isShowComments: true
---

<Boxx/>



<!-- more -->

[[toc]]




一、配置命令
-------

| 命令 | 作用 |
| :------| :------ |
| git init | 在当前目录新建一个Git代码库 |
| git init <project-name> | 新建一个目录，将其初始化为Git代码库 |
|   git clone [url ]| 下载一个项目和它的整个代码历史 |
| git config -l | 列举所有配置（包括用户名和邮箱）|
| git config --system --unset credential.helper| 重新输入用户名密码|
| git config --global user.name "xxxx" | 设置用户名|
| git config --global user.email "xxxx.com" | 设置邮箱|
| git log | 查看提交历史记录（具体，包括commit_id、author、date和message）|
| git log --graph | 以图表的形式查看历史记录（默认是具体的内容，可和其它选项结合）|
|  git log --oneline | 查看提交历史记录（简单，只有缩减的commit_id和message）|

二、正常使用
-------

| 命令 | 作用 |
| :------| :------ |
| git status  | 查看本地代码的修改状态修改了那些文件,新增删除了那些文件 |
|git  pull  | 更新git库上面别人提交的代码,每次提交前要git pull确认下本地的代码和git库一致 |
|   git checkout filePathname | 提交指定文件,或者文件夹 |
|git checkout . | 撤销所有的更改|
| git add . | 将所以更改的文件提交到暂存区|
|git add <fileNmaePath>  | 提交指定文件,或者文件夹|
| git reset HEAD | 将提交到暂存区的所有文件回到git add之前的状态|
|git reset HEAD <fileNamePath>| 将提交到暂存区的指定文件回到git add之前的状态|
|git commit -m "注释"| 将内容提交到本地库|
|git commit -m "注释" -n | 提交的时候不会校验代码不进行检验代码 |
| git reset --soft HEAD^| 回到git commit之前|
|git reset HEAD^| 回到git add之前  类似 git reset --mixed HEAD^|
|git reset --hard HEAD^ | 回到上次提交的节点那块,相当于将当前commit add撤销,并将更改的内容也撤销 |
| git push| 将本地代码库内容提交到远程git库|


  		
三、分支操作
----
| 命令 | 作用 |
| :------| :------ |
| git branch| 查看所有分支 |
| git branch -v | 查看分支详情 |
|git -b <branch_name>| 创建新的分支 |
| git push -u origin <branch_name> | 将本地创建的分支提交到远程服务器|
| git branch -d <branch_name>| 删除对应的分支|
| git reflog  git branch <branch_name> <commitid> | git reflog 找到对应的commitid  执行下面这个命令进行恢复删除的分支|
| git branch -m <branch_name> newname| 分支重命名|
| git checkout -b brangeName| 创建新的分支并切换到新分支上面、|
| git checkout brangeName| 切换到对应分支|
|git merge brangeName | 将branchName的内容合并到当前分支上|
| git merge master | 将主分支的内容合并到当前分支上|


四、回退操作
---------
| 命令 | 作用 |
| :------| :------ |
| git log|查看提交记录对应的版本id |
| git reset --hard 目标版本号   git push -f | 这样会将版本号后面的版本都删掉 |
| git revert HEAD | 撤销前一次 commit   |


​	
​		
​	   
​	
​		
