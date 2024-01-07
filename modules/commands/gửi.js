module.exports.config = {
name: "gửi",
version: "1.0.0",
hasPermssion: 0,
credits: "Xthanhdev",
description: "chỉ là gửi tin nhắn ẩn danh",
commandCategory: "...",
usages: "[uid người cần gửi| tin nhắn muốn gửi]",
cooldowns: 0
};

module['exports']['run'] = async function({ api, event, args }) {

async function r(m){
api.sendMessage(m, event.threadID, event.messageID)
}


const y = args.join(" ").split("|").map(item => item = item.trim());

var t = y[0]
var t2 = y[1]

if(!args[0] || !t) return r("vui lòng nhập đúng uid");
if(!t2) return r("vui lòng nhập tin nhắn");
try {
if(t.startsWith("https://facebook.com")){
  const res = await api.getUID(t)
  var k = res
} else {
  var k = t
}
api.sendMessage(`xɪɴ ᴄʜᴀ̀ᴏ ᴛᴏ̂ɪ ʟᴀ̀  ɴɢᴜ̛ᴏ̛̀ɪ ᴆᴜ̛ᴀ ᴛʜᴜ̛ !
ᴅᴜ̛ᴏ̛́ɪ ᴆᴀ̂ʏ ᴄᴏ́ ᴍᴏ̣̂ᴛ ᴛɪɴ ɴʜᴀ̆́ɴ ᴅᴏ ɴɢᴜ̛ᴏ̛̀ɪ ᴀ̂̉ɴ ᴅᴀɴʜ ᴍᴜᴏ̂́ɴ ɢᴜ̛̉ɪ ᴄʜᴏ ʙᴀ̣ɴ !  

ʟᴏ̛̀ɪ ɴʜᴀ̆́ɴ ${t2}
━━━━━━━━━━━━━━━━━━━━━
•ᴆᴀ̂ʏ ʟᴀ̀ ᴛɪɴ ɴʜᴀ̆́ɴ ᴛᴜ̛̀ ᴍᴏ̣̂ᴛ ɴɢᴜ̛ᴏ̛̀ɪ ᴀ̂̉ɴ ᴅᴀɴʜ
ʙᴀ̣ɴ ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ᴛʀᴀ̉ ʟᴏ̛̀ɪ ʜᴀʏ ʜᴏ̉ɪ ᴛᴏ̂ɪ ʙᴀ̂́ᴛ ᴄᴜ̛́ ɢɪ̀ ᴠᴀ̀ ᴛᴏ̂ɪ ᴄᴜ̃ɴɢ ᴋʜᴏ̂ɴɢ xᴇᴍ ᴆᴜ̛ᴏ̛̣ᴄ ᴛɪɴ ɴʜᴀ̆́ɴ ᴄᴜ̉ᴀ ʙᴀ̣ɴ .
ᴄʜᴜ́ᴄ ʙᴀ̣ɴ ᴍᴏ̣̂ᴛ ɴɢᴀ̀ʏ ᴛᴏ̂́ᴛ ʟᴀ̀ɴʜ !  (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)`, k, () => r("ᴆᴀ̃ ɢᴜ̛̉ɪ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ ᴄᴜ̉ᴀ ʙᴀ̣ɴ !"))
} catch (err) {
r("ᴆᴀ̃ xᴀ̉ʏ ʀᴀ ʟᴏ̂̃ɪ. ᴛɪɴ ɴʜᴀ̆́ɴ ᴄᴜ̉ᴀ ʙᴀ̣ɴ ᴄʜᴜ̛ᴀ ᴆᴜ̛ᴏ̛̣ᴄ ɢᴜ̛̉ɪ ᴛᴏ̛́ɪ ɴɢᴜ̛ᴏ̛̀ɪ ʏᴇ̂ᴜ ᴄᴀ̂̀ᴜ , ᴄᴏ́ ᴛʜᴇ̂̉ ᴆᴀ̃ ᴄʜᴀ̣̆ɴ ʙᴏᴛ ʜᴏᴀ̣̆ᴄ ᴋʜᴏ̂ɴɢ ɴʜᴀ̣̂ɴ ᴛɪɴ ɴʜᴀ̆́ɴ ᴛᴜ̛̀ ɴɢᴜ̛ᴏ̛̀ɪ ʟᴀ̣ . (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)")
   };
}