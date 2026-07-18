import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: -10,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatchTimer: true,
    // 👇 新版规范：排除应用要写在组这里，且属性名通常是 excludeAppIds
    excludeAppIds: [
      'com.android.settings', // 排除系统设置
    ],
    rules: [
      {
        key: 0,
        name: '文字【跳过】按钮',
        matches: '[text*="跳过"][visibleToUser=true][width<200][height<200]',
      },
      {
        key: 1,
        name: '倒计时【跳过 5s】型按钮',
        matches: '[text~="(?i)^([0-9s\\s]{0,3}跳过|跳过[0-9s\\s]{0,3}|skip)$"][visibleToUser=true]',
      },
    ],
  },
]);