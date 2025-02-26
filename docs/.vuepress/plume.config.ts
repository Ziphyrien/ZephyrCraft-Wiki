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
  message: `
    <div style="display: flex; align-items: center; gap: 0.5rem 1.2rem; flex-wrap: wrap; justify-content: center; font-size: 14px; color: #666;">
      <span>Power by</span>
      <a target="_blank" 
         href="https://space.bilibili.com/517481506" 
         style="color: #00a1d6; text-decoration: none; transition: opacity 0.2s;"
         onmouseover="this.style.opacity=0.8" 
         onmouseout="this.style.opacity=1">
        Ziphyrien©2025
      </a>
      <span>•</span>
      <a target="_blank" 
         href="https://qm.qq.com/cgi-bin/qm/qr?k=gb-kKM0eEGY4RZjOk9WJ_rXOFzgsiwqH" 
         style="display: inline-flex; align-items: center; padding: 4px 12px; background: #f5f7fa; border-radius: 20px; text-decoration: none; transition: background 0.2s;"
         onmouseover="this.style.background='#ebedf0'" 
         onmouseout="this.style.background='#f5f7fa'">
        <img src="//pub.idqqimg.com/wpa/images/group.png" 
             alt="群图标"
             style="width: 18px; height: 18px; margin-right: 6px; vertical-align: middle;">
        ZephyrCraft群
      </a>
    </div>
  `.replace(/\n\s+/g, ' '), // 关键技巧：自动压缩多余空格
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
