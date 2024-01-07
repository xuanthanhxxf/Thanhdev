module.exports.config = {
	name: "reset",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Tpk",
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reset + time",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args }) => {
  const { commands } = global.client;
  const axios = require('axios')
  const fs = require("fs");
	const pidusage = await global.nodemodule["pidusage"](process.pid);
  const moment = require("moment-timezone");
  const tpk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
	const timeStart = Date.now();
 const permission = ["100034415418637","100071768980176"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("→ Muốn reload sao ừ bạn không đủ tuổi", event.threadID, event.messageID);
	const { threadID, messageID } = event;
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage(`🤖 ==== [ 𝗥𝗘𝗦𝗘𝗧 ] ==== 🤖\n━━━━━━━━━━━━━━━━━━\n⚙️ 𝗕𝗼𝘁 𝘀𝗲̃ 𝘁𝗶𝗲̂́𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝘀𝗲𝘁 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝗮̂𝘆 𝗻𝘂̛̃𝗮 
⏰ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${tpk}
📊 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝗶́ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: ${speed}𝗠𝗛𝘇
↪️ 𝗦𝗼̂́ 𝗹𝘂𝗼̂̀𝗻𝗴 𝗖𝗣𝗨: ${os.cpus().length}
💞 đ𝗼̣̂ 𝘁𝗿𝗲̂̃ 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: ${Date.now() - timeStart}𝗺𝘀`, event.threadID, event.messageID);
	return setTimeout(() => { api.sendMessage("💨 𝗕𝗼𝘁 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝘀𝗲𝘁 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴!",event.threadID,() => process.exit(1) )},	rstime * 1000);
}