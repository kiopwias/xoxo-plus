# hexo-theme-xoxo-plus
A hexo them modification based on [hexo-theme-xoxo](https://github.com/KevinOfNeu/hexo-theme-xoxo)

[Demo](https://www.fooying.com)

### 问题修复与功能新增

本项目在[hexo-theme-xoxo-plus](https://github.com/fooying/hexo-theme-xoxo-plus)（作者：[Fooying](https://github.com/fooying)）基础上进行修改，修复了一些问题，并新增了一些功能：

1. 解决了当hexo版本大于5.0时，生成静态页面时，报_ is not defined错误的问题；
2. 解决了点击静态页面的一级标题时，一级标题会被顶部栏挡住的问题；
3. 解决了当右侧导航栏高度大于浏览器视窗高度时，最底下的内容会被盖住的问题；
4. 解决了无法生成文章摘要的问题，并改为自动从文章内截取内容并生成摘要；
5. 新增了在代码框中复制代码的功能；
6. 新增了当代码较多时，展开/收起代码框的功能；
7. 新增了点击搜索框时，搜索框自动聚焦的功能；

### 依赖项

安装以下依赖：

```
npm install --save remove-markdown hexo-reading-time hexo-generator-search
```

### 新增应用类型
* 友情链接 links
* 动态 activity
* 项目 project
* paper paper

需要在站点根目录的source目录下建立对应的目录并且添加index.md，如:
```
 ---
   title: Activity
    date: 2019-03-01 13:45:13
    type: "activity"
 ---
```

具体配置需要在模板_config.yml 配置，具体可见下方说明

### 新增开关及调整
1. 百度链接提供JS自动推送
```
# 模板_config.yml中配置
baidu_url_js_push: false
```
2. UI的微调，主要为header部分
3. 文章页尾部二维码关注增加开关并可配置
```
# 模板_config.yml中配置
share:
    show: false #展示开关
    img: #图片地址
    img_alt: #图片alt
    tip_text: #图片底部提示文字
```
4、增加logo配置，区分logo和favicon配置
```
# 模板_config.yml中配置
favicon: footer-logo.png # favicon配置
logo: # logo配置
```
5、新增gitalk评论支持
```
# 模板_config.yml中配置
# disqus同时配置的情况下，优先选择模板中配置的评论系统
# clientID、clientSecret的生成请访问申请 https://github.com/settings/applications/new
comment_extend:
    gitalk:
        enable: true
        owner: Github username
        repo: issue repo name
        admin: github username
        clientID: xxx
        clientSecret: xxx
```

### _config.yml 配置说明
相关示例可参考项目中_config.yml文件
1、配置友情链接
```
links:
   name1: url1
   name2: url2
   ...
```

2、配置项目
```
projects:
  project name1:
    url:  url1
    descript: project descript
  project name2:
    url:  url2
    descript: project descript
  ...
```

3、配置活动
```
activitys:
  title1:
    date: 2018-09-10 # 时间，只能YYYY-MM-DD
    url: url
    type: 采访 # 类型，可自定义
  ...
```

4、配置paper
```
papers:
  titile: url
  ...
```

5、截取文章摘要

```
# auto generate excerpt length.
excerpt_start: # 摘要截取起点
  0
excerpt_end: # 摘要截取结束点
  100
```

### 问题处理

1、Cannot GET /tags/

```
hexo new page tags
```

在source/tags目录下，编辑index.md文件，添加：type: "tags"，添加后如下所示：

```
title: tags
date: xxxxxxxx
type: "tags"
```

2、Cannot GET /categories/

```
hexo new page categories
```

在source/categories目录下，编辑index.md文件，添加：type: "categories"，添加后如下所示：

```
title: categories
date: xxxxxxxx
type: "categories"
```

3、Cannot GET /search

```
hexo new page search
```

在source/search目录下，编辑index.md文件，添加：type: "categories"，添加后如下所示：

```
title: search
date: xxxxxxxx
type: "search"
```

4、点击搜索时，页面为空

检查hexo根目录下的_config.yml 配置文件，是否开启了搜索功能。若没有该配置项，则新增。搜索功能配置如下：

```
search:
  path: search.xml 
  field: all 
  content: true
```

