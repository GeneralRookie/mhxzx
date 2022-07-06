module.exports = {
  title: '个人博客',
  base:"/mhxzx/",
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      }
    ],
    sidebar: {//左侧列表
   //   '/_posts/typeromdoc/': [
     //     'active-record-data-mapper'
      //],
      '/': ['']
    },
    /**,{
        text:'typeorm',
        items:[
          {text:'typeorm_active-record-data-mapper', link: '/_posts/typeromdoc/active-record-data-mapper'},
        ]
      } */
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
  plugins: [
     // 这是 VuePress 默认主题使用这个插件的方式
     [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': '提示',
          '/zh/': '提示',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': '注意',
          '/zh/': '注意',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: {
          '/': '警告',
          '/zh/': '警告',
        },
      },
    ]
  ]
}
