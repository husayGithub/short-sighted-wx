const BASE_URL = "http://localhost:8080/api"; // 后端接口地址

function request(url, method = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/json"
      },
      success: res => resolve(res.data),
      fail: err => reject(err)
    });
  });
}

module.exports = { request };