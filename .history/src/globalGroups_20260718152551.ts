import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: -10, // 优先级调高，确保最先触发
    actionMaximum: 2, // 一个页面最多点击 2 次，防止死循环
    matchTime: 10000, // 打开 App 后 10 秒内有效
    resetMatchTimer: true, // 页面切换时重置定时器
    
    // 具体的规则列表
    rules: [
      {
        key: 0,
        name: '文字【跳过】按钮',
        // 匹配规则：界面上只要有包含“跳过”两个字、可见、且长宽小于200dp的节点，就去点击
        matches: '[text*="跳过"][visibleToUser=true][width<200][height<200]',
        // 排除一些容易误触的页面或应用
        excludeApps: [
          'com.android.settings', // 排除系统设置
        ],
      },
      {
        key: 1,
        name: '倒计时【跳过 5s】型按钮',
        // 匹配正则表达式：比如 "跳过 5", "5s 跳过", "Close 3"
        matches: '[text~="(?i)^([0-9s\\s]{0,3}跳过|跳过[0-9s\\s]{0,3}|skip)$"][visibleToUser=true]',
      },
    ],
  },
]);