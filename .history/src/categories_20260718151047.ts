import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    key: 0,
    name: '开屏广告',
    description: '自动点击跳过各类 App 启动时的开屏广告',
  },
  {
    key: 1,
    name: '全屏广告',
    description: '自动关闭应用内弹出的全屏大图、视频或插屏广告',
  },
  {
    key: 2,
    name: '局部广告',
    description: '自动移除或关闭应用内顶部、底部或信息流中的卡片式局部广告',
  },
  {
    key: 3,
    name: '分段广告',
    description: '自动点击广告卡片上的“x”并选择“不感兴趣/隐藏”等二次确认广告',
  },
  {
    key: 4,
    name: '青少年模式',
    description: '进入应用时自动点击“我知道了”，自动确认并关闭青少年模式弹窗',
  },
  {
    key: 5,
    name: '更新提示',
    description: '自动点击“暂不更新”或“取消”，屏蔽应用频繁的软件升级弹窗',
  },
  {
    key: 6,
    name: '提示权限',
    description: '自动关闭或拒绝应用索要位置、通知、相册等非必要的权限弹窗',
  },
  {
    key: 7,
    name: '通知提示',
    description: '自动关闭应用内请求开启系统通知、推送栏权限的弹窗提示',
  },
  {
    key: 8,
    name: '评价提示',
    description: '自动拒绝或关闭应用内请求去应用商店好评、打分的弹窗',
  },
  {
    key: 9,
    name: '功能类',
    description: '自动执行某些重复性的功能操作（如自动登录、确认授权、签到等）',
  },
  {
    key: 10,
    name: '其他',
    description: '未能明确归类的其他自定义自动化规则',
  },
]);