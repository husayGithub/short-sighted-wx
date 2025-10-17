const { request } = require('../../utils/request.js');

Page({
  data: {
    quote: ""
  },

  onLoad() {
    this.getQuote();
  },

  getQuote() {
    request("/quote/today").then(res => {
      this.setData({ quote: res.quote });
    }).catch(err => {
      wx.showToast({ title: '激励语获取失败', icon: 'none' });
    });
  },

  submitRecord(e) {
    const formData = e.detail.value;
    formData.user_id = 1; // 测试用，实际可通过登录获取

    request("/record", "POST", formData).then(res => {
      wx.showToast({ title: '打卡成功', icon: 'success' });
      this.getQuote(); // 提交后刷新激励语
    }).catch(err => {
      wx.showToast({ title: '提交失败', icon: 'none' });
    });
  },

  goHistory() {
    wx.navigateTo({ url: '/pages/history/history' });
  }
});
