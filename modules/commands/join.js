const chalk = require('chalk');
module.exports.config = {
    name: "join",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "Yae Miko",
    description: "Tham gia vào các box Bot đang ở",
    commandCategory: "Hệ Thống",
    usages: "",
    cooldowns: 5
};
 module.exports.onLoad = () => {
  console.log(chalk.bold.hex("#00c300").bold("=======[ JOIN LOADED SUCCESSFULLY ]======="));
  }
module.exports.handleReply = async ({ event, api, handleReply, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    var { threadList, author } = handleReply;
    if (senderID != author) return;
    api.unsendMessage(handleReply.messageID);
    if (!body || !parseInt(body)) return api.sendMessage('Lựa chọn của bạn phải là một số.', threadID, messageID);
    if (!threadList[parseInt(body) - 1]) return api.sendMessage("Lựa chọn của bạn không nằm trong danh sách", threadID, messageID);
    else {
        try {
            var threadInfo = threadList[parseInt(body) - 1];
            var { participantIDs } = threadInfo;
            if (participantIDs.includes(senderID)) return api.sendMessage('Bạn đã có mặt trong nhóm này.', threadID, messageID);
            api.addUserToGroup(senderID, threadInfo.threadID, (e) => {
              if (e) api.sendMessage(`Đã cảy ra lỗi: ${e.errorDescription}`, threadID, messageID);
              else api.sendMessage(`𝐕𝐨̛̣ 𝐯𝐮̛̀𝐚 𝐭𝐡𝐞̂𝐦 𝐚𝐧𝐡 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 ${threadInfo.name} 𝐫𝐨̂̀𝐢 𝐧𝐡𝐚. 𝐊𝐢𝐞̂̉𝐦 𝐭𝐫𝐚 𝐨̛̉ 𝐦𝐮̣𝐜 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̛̀ 𝐡𝐨𝐚̣̆𝐜 𝐬𝐩𝐚𝐦 𝐧𝐞̂́𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐚̂́𝐲 𝐛𝐨𝐱 𝐧𝐡𝐞́ 💕\n𝐘𝐞̂𝐮 𝐜𝐡𝐨̂̀𝐧𝐠𝐠 𝐫𝐚̂́𝐭 𝐧𝐡𝐢𝐞̂̀𝐮 💟`, threadID, messageID);
            });
        }
        catch (error) {
            return api.sendMessage(`:( Em bị lỗi: ${error}`, threadID, messageID);
        }
    }
};

module.exports. run = async function({ api, event, Threads }) {
    var { threadID, messageID, senderID } = event;
    var allThreads = (await api.getThreadList(500, null, ["INBOX"])).filter(i => i.isGroup),
    msg = `🔰==[ 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 𝐁𝐎𝐗 ]==🔰\n\n`,
    number = 0;
    for (var thread of allThreads) {
        number++;
        msg += `${number}. ${thread.name}\n`;
    }
    msg += `\n👉 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐤𝐞̀𝐦 𝐬𝐨̂́ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐮̛́𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐯𝐚̀𝐨`;
    return api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config. name,
            messageID: info.messageID,
            author: senderID,
            threadList: allThreads
       
        });
    }, messageID);
};