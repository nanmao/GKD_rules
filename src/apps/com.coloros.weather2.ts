import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.weather2',
  name: 'OPPO天气',
  groups: [
    {
      key: 0,
      name: '功能类-关闭广告',
      desc: '点击天气首页的广告关闭按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      activityIds: 'com.oplus.weather.main.view.WeatherMainActivity',
      rules: [
        {
          key: 0,
          name: 'feed_close',
          fastQuery: true,
          matches: '[vid="feed_close"]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
