import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: '功能类-关闭弹窗',
      desc: '点击浏览阳光中的关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      activityIds: 'com.taobao.themis.container.app.TMSActivity',
      rules: [
        {
          key: 0,
          name: 'Button关闭',
          matches: 'Button[index=1][clickable=true][width<150][height<150]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
