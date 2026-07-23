import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: '功能类-关闭弹窗',
      desc: '点击页面中的关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: 'desc关闭',
          matches: '[desc*="关闭"][visibleToUser=true]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
