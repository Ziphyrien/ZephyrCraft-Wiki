import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMEZ76mh55DFETqT1_q02EN5SMEIrsAAhvBMRsz6vlV1XESC5m6xcIBAAMCAANtAAM2BA.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: '/' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
footer: {
    message: '<div style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #888;">\
                Powered by <a class="zp-link" target="_blank" href="https://space.bilibili.com/517481506">Ziphyrien©2025</a>\
                <span style="color: #666;">|</span>\
                <a class="zp-link" target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=gb-kKM0eEGY4RZjOk9WJ_rXOFzgsiwqH&jump_from=webapi&authKey=ofQi5mkvRLQf3CiRc77G/fbbUO3YJvX3bRYMkJoXD3BMucihnFmQa+YA78qmkNSg">\
                  <img style="vertical-align: middle; height: 18px; margin-right: 4px;" src="//pub.idqqimg.com/wpa/images/group.png" alt="社群图标">\
                  ZephyrCraft 玩家社群\
                </a>\
              </div>',
},




  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMEZ76mh55DFETqT1_q02EN5SMEIrsAAhvBMRsz6vlV1XESC5m6xcIBAAMCAANtAAM2BA.png',
    name: 'ZephyrCraft Wiki',
    description: 'Minecraft ZephyrCraft Server&#x27;s Guide',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
