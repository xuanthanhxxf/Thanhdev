module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thêm người dùng vào nhóm bằng link hoặc UID",
    commandCategory: "Box chat",
    usages: "< link/UID >",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝗹𝗶𝗻𝗸 𝗵𝗼𝗮̣̆𝗰 𝗜𝗗 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗲̂𝗺 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 🌸', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://golike.com.vn/func-api.php?user=${link}`);
    var uidUser = res.data.data.uid
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 đ𝗮̃ 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺`, threadID, messageID);
    if (err) return api.sendMessage(`🌸 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 🌸`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`🌸 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘃𝗮̀𝗼 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗽𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁 🌸`, threadID, messageID);
    else return api.sendMessage(`🌸 𝗧𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`🌸 𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 đ𝗮̃ 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 🌸`, threadID, messageID);
    if (err) return api.sendMessage(`🌸 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 🌸`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`🌸 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘃𝗮̀𝗼 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗽𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁 🌸`, threadID, messageID);
    else return api.sendMessage(`🌸 𝗧𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸`, threadID, messageID);
    });
  }
}