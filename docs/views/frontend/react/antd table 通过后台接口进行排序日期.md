---
title: antd table 通过后台接口进行排序日期
date: 2019-08-03 17:37:25
tags:
- Antd
categories:
- "React"
isShowComments: false
---

<Boxx/>

[[toc]]


前言
--

antd table 通过后台接口进行排序日期


**设置**
---------------------------
Table组件有一个onChange方法,
功能：当表格进行分页、排序、筛选变化时触发,排序的时候只需要判断sorter字段
+ 参数:
    - pagination
    - filters
    - sorter 
    - action
+ columnKey是否为当前需要点击的排序字段,
+ order字段的值代表当前是升序还是降序
    - ascend:升序
    - descend:降序,
    - undefined:默认

![](https://gitee.com/guangliangliang/images/raw/master/other/1614674450(1).png)
![](https://gitee.com/guangliangliang/images/raw/master/other/1614674427(1).png)