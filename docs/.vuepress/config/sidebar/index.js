//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '规范 Standard',
            collapsable: true,
            children: [
                'specification/添加commit规范',
                'specification/git命令汇总table',
            ]
        },
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'frontend/react/antd table 通过后台接口进行排序日期',
                'frontend/react/antd 4.0 封装通用form组件'
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'backend/test',
            ]
        },
        {
            title: '插件推荐 Recommend',
            collapsable: true,
            children: [
                'recommend/plugins/google必备插件',
                'recommend/plugins/Tampermonkey脚本推荐',
                'recommend/plugins/vscode必备插件',
            ]
        },
        {
            title: '随笔 Essay',
            collapsable: true,
            children: [
                'essay/20190928',
            ]
        }

    ]
}
