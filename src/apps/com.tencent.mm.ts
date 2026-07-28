import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '开屏广告-小程序跳过',
      desc: '点击小程序中的跳过/关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      rules: [
        {
          key: 0,
          name: '文字跳过',
          matches: '[text*="跳过"][visibleToUser=true]',
          action: 'clickCenter',
        },
        {
          key: 1,
          name: '跳过倒计时（图片按钮）',
          matches: '[desc*="跳过"||desc*="skip"][visibleToUser=true]',
          action: 'clickCenter',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-小程序页面横幅',
      desc: '点击小程序-台风路径页面中的广告关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      rules: [
        {
          key: 0,
          name: '特殊字符关闭',
          matches: '[text=""]',
          action: 'clickCenter',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-小程序悬浮广告',
      desc: '点击小程序-台风路径中的悬浮广告关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      rules: [
        {
          key: 0,
          name: '悬浮广告关闭',
          matches: '@ImageView[width=49][height=49] <<n [vid="w_"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/30439674',
        },
      ],
    },
  ],
});
