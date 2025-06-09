import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-solid','@wxt-dev/auto-icons'],
  autoIcons: {
     enabled: true,
  },
 
  manifest: {
    permissions: ['storage'],
    icons: {
      16: 'icons/16.png',
      32: 'icons/32.png',
      48: 'icons/48.png',
      128: 'icons/128.png',
    },
  },
  
  // hooks: {
  //   'build:manifestGenerated': (wxt, manifest) => {
  //     manifest.content_scripts ??= [];
  //     manifest.content_scripts.push({
  //       // 构建扩展程序一次，查看 CSS 的写入位置
  //       css: ['./style.css'],
  //       matches: ['*://*/*'],
  //     });
  //   },
  // },

});
