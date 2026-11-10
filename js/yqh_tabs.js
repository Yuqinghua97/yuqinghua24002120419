/**
 * yqh_tabs.js — 可复用 Tab 选项卡组件
 * 功能名称: 新闻 Tab 选项卡组件
 * 作者: 于清华
 * 建立时间: 2026-11-04
 * 使用大模型: GLM-5.3-Flash
 *
 * 用法: 页面引入本文件后，调用 yqh_initTabs('#容器选择器') 即可复用；
 *      选项卡按钮需带 class="yqh_tab-item"，并通过 data-yqh-panel
 *      属性指向要显示的内容面板 id。
 */

/**
 * 功能: 初始化指定容器内的选项卡，为每个选项卡绑定点击监听事件，
 *      实现选中状态切换与内容面板联动（可复用入口）。
 * 参数: containerSelector — Tab 容器的 CSS 选择器，如 '#yqh_tabs'
 */
function yqh_initTabs(containerSelector) {
  var yqh_container = document.querySelector(containerSelector);
  if (!yqh_container) return; // 容器不存在则直接返回

  // 获取容器内全部选项卡按钮
  var yqh_tabs = yqh_container.querySelectorAll('.yqh_tab-item');
  if (yqh_tabs.length === 0) return;

  /**
   * 功能: 处理选项卡点击 —— 先清除所有选项卡的选中状态，
   *      再设置当前元素的选中状态，并联动切换内容面板。
   * 参数: yqh_currentTab — 当前被点击的选项卡元素
   */
  function yqh_selectTab(yqh_currentTab) {
    // 第一步：清除所有选项卡的选中状态
    yqh_tabs.forEach(function (yqh_tab) {
      yqh_tab.classList.remove('yqh_active');
    });

    // 第二步：设置当前元素的选中状态
    yqh_currentTab.classList.add('yqh_active');

    // 联动切换内容面板：先隐藏全部面板，再显示目标面板
    var yqh_targetId = yqh_currentTab.getAttribute('data-yqh-panel');
    document.querySelectorAll('.yqh_panel').forEach(function (yqh_panel) {
      yqh_panel.classList.toggle('yqh_active', yqh_panel.id === yqh_targetId);
    });
  }

  // 为每个选项卡注册点击监听事件
  yqh_tabs.forEach(function (yqh_tab) {
    yqh_tab.addEventListener('click', function () {
      yqh_selectTab(this);
    });
  });
}

/**
 * 功能: 页面 DOM 加载完成后，初始化页面中 id 为 yqh_tabs 的选项卡组。
 */
document.addEventListener('DOMContentLoaded', function () {
  yqh_initTabs('#yqh_tabs');
});
