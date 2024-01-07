const axios = require('axios');
module.exports.config = {
  name: "uptimerobot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "Tạo link uptimerobot",
  commandCategory: "Tiện ích",
  cooldowns: 5,
};

module.exports.languages = {
  "vi": {},
  "en": {}
}

module.exports.run = async ({
  event, api, args
}) => {
  const url = args[0];
  if (!url || !url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm))
    return api.sendMessage('Vui lòng nhập url hợp lệ', event.threadID, event.messageID);
  try {
    const res = await axios.get('https://apipremium-thanhali.thanhali.repl.co/uptimerobot/create?apikey=ThanhAliVip_1234567890&url=' + encodeURIComponent(url));
    if (res.data.error)
      return api.sendMessage(res.data.error, event.threadID, event.messageID);
    api.sendMessage("Đã tạo link uptimerobot thành công, id: " + res.data.data.id, event.threadID, event.messageID);
  }
  catch(err) {
    api.sendMessage("Đã xảy ra lỗi, vui lòng thử lại sau", event.threadID, event.messageID);
  }
}