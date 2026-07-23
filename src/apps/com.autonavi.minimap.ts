import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: '更新提示-关闭升级弹窗',
      desc: '点击升级弹窗中的关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: 'iv_close',
          fastQuery: true,
          matches: '[id="com.autonavi.minimap:id/iv_close"]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
