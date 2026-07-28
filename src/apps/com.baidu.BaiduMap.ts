import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: '功能类-关闭弹窗',
      desc: '点击首页广告中的关闭按钮',
      actionMaximum: 1,
      resetMatch: 'match',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: [
        {
          key: 0,
          name: 'yellow_banner_close',
          fastQuery: true,
          matches: '[vid="yellow_banner_close"][visibleToUser=true]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
