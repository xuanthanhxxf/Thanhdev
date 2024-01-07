module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Yae Miko",
	description: "Tắt Bot.",
	commandCategory: "Hệ Thống",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("𝗧𝗵𝘂̛̣𝗰 𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̆́𝘁 𝗕𝗼𝘁 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ✅",event.threadID, () =>process.exit(0))