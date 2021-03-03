//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '知识晶体 Q&A',
            collapsable: true,
            children: [
                'qaq/sum_db_001'
            ]
        },
        {
            title: '规范 Standard',
            collapsable: true,
            children: [
                'specification/提交规范',
            ]
        },
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'frontend/EChartsStudy'
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'backend/annotationLog',
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
