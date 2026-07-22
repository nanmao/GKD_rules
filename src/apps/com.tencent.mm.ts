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
      resetMatch: 'app',
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
  ],
});
