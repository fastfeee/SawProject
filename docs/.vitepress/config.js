export default {
    head:[
        ["link",{ rel: "icon", href: "logo.svg" }],
    ],
    ignoreDeadLinks: true,
    title: 'SAW', // 博客的标题
    description: '简单&&实时', // 博客的介绍
    base: '/SAWProject/', //
    themeConfig: {
        logo: "/logo.svg", // 页面上显示的logo
        lastUpdated: true,
        nav: [ // 页面右上角的导航
            { text: '版本', 
              items:[
                {
                    text:"0.1.0",link: '/',
                },
                {
                    text:"0.2.0",link: '/',
                }
              ]
             }
        ],
        sidebar: { // 侧边栏，可以分组
            "/guide/": [
                {
                    text: "介绍",
                    link: "/guide/introduction",
                    items: [
                    ],
                },
                {
                    text: "起步",
                    collapsable: true,
                    items: [
                        {
                            text: "Docker镜像",
                            link: "/guide/start/docker",
                        },
                        {
                            text: "源码编译",
                            link: "/guide/start/source",
                        },
                        {
                            text: "工具",
                            link: "/guide/start/tool",
                        },
                    ],
                },
                {
                    text: "核心功能",
                    //collapsable: true,
                    items: [
                        {
                            text: "智能编码",
                            // link: "/guide/function/codinmg",
                        },
                        {
                            text: "终端感知",
                            // link: "/guide/function/awareness",
                        },
                    ],
                },
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/binbat/live777" }], // 可以连接到 github
        footer:{
            message: 'Released under the MIT License.', 
            copyright: 'Copyright © 2023-present Evan You'
        }
    },
}

