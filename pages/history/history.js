const { request } = require('../../utils/request.js');

Page({
  data: {
    records: []
  },

  onLoad() {
    this.getRecords();
  },

  getRecords() {
    request("/record/list?user_id=1").then(res => {
      this.setData({ records: res });
    }).catch(err => {
      wx.showToast({ title: '获取记录失败', icon: 'none' });
    });
  }
});