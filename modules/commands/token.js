const axios = require('axios');
module.exports.config = {
    name: "token",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "yi mod by XThanh",
    description: "Facebook Token eaad6v7",
    commandCategory: "tool",
    usages: "[user/uid/email] [password]",
    cooldowns: 10,
};

module.exports.run = async ({ api, event, args }) => {
  //const permission = ["100071768980176","uid2"];
//if (!permission.includes(event.senderID)) return api.sendMessage("Xin lỗi bạn cần mua tool để tiếp tục sử dụng 30k/1 scr tool buff share hỗ trợ treo onl 24/7 không cần setup adr ios chạy được hết ", event.threadID, event.messageID);
    const username = args[0];
    const password = args[1];
    const prefix = global.config.PREFIX;

    if (!username || !password) {
        return api.sendMessage(`hướng dẫn lấy token :  ${prefix}token tk mk acc clone\n ví dụ tên đăng nhập là user123 mật khẩu là pass123 thì ta dùng ${prefix}token user123 pass123\nLưu ý: nếu acc có 2fa thì tắt 2fa đi và thử lại  `, event.threadID);
    }

    try {
        const loadingMessage = await api.sendMessage("Tiến hành lấy token....", event.threadID);

        const response = await axios.get(`https://api-xthanhdev.dzvlak.repl.co/facebook/token?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
        const data = response.data;

        if (data.status) {
            const tokenEAAV7 = data.data.access_token_eaad6v7 || 'N/A';
            //const tokenEAAAAU = data.data.access_token || 'N/A';

            const resultMessage = `${tokenEAAV7}\n`;

            api.sendMessage({ body: resultMessage }, event.threadID, () => api.unsendMessage(loadingMessage.messageID));
        } else {
            api.sendMessage(` Lý do: ${data.message} (tài khoản hoặc mật khẩu không chính xác)\n nếu có 2fa vui lòng vào nick đó để xác thực phê duyệt hoặc tắt và thử lại.\nLưu ý nếu acc bị checkpoint thì đổi mật khẩu và thử lại.`, event.threadID, () => api.unsendMessage(loadingMessage.messageID));
        }
    } catch (error) {
        api.sendMessage("đã sảy ra lỗi ", event.threadID, () => api.unsendMessage(loadingMessage.messageID));
    }
};