module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam",//mod lại by táo táo
    description: "Xem danh sách lệnh và info",
    commandCategory: "Tiện ích",
    usages: "[tên lệnh/all]",
    cooldowns: 5
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args,
  Currencies,
  __GLOBAL
}) {
const { events } = global.client;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const { commands } = global.client;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 0
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
    if (type == "all") {
        for (const cmd of cmds.values()) {
            msg += `${++i}. ${cmd.config.name}: ${cmd.config.description}\n`
        }
        return api.sendMessage(msg, tid, mid)
    }
    if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
           let i = 1;
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `Không tìm thấy lệnh '${type}' trong hệ thống.\n➝ Lệnh gần giống được tìm thấy '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `🧸 𝗧𝗲̂𝗻: ${cmd.name} ( ${cmd.version} )\n🔗 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${TextPr(cmd.hasPermssion)}\n👤 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${cmd.credits}\n💬 𝗠𝗼̂ 𝘁𝗮̉: ${cmd.description}\n🧩 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${cmd.commandCategory}\n🌟 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${cmd.usages}\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${cmd.cooldowns}s`
        api.sendMessage(msg, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
        for (const cmd of array) {
          msg1 = `======『 𝗛𝗘𝗟𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 』======\n\n`
            msg += `${i++}. 𝗧𝗵𝘂𝗼̣̂𝗰 𝗡𝗵𝗼́𝗺: ${cmd.cmdCategory.toUpperCase()}                                                     𝗖𝗼́ 𝗧𝗼̂̉𝗻𝗴 ${cmd.nameModule.length} 𝗟𝗲̣̂𝗻𝗵🎀\n━━━━━━━━━━━━━━━\n`
        }
        msg += `\n\n𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̣𝗶 ${global.config.BOTNAME} ${cmds.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n🧸 𝗛𝗗𝗦𝗗: .𝗵𝗲𝗹𝗽 + 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
🌸 𝗛𝗗𝗦𝗗: .𝗵𝗲𝗹𝗽 + 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁

🪙 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👍" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝟭 𝗻𝗴𝗮̀𝘆 𝗺𝗼̛́𝗶 𝘃𝘂𝗶 𝘃𝗲̉`
        api.sendMessage({body: msg1 + msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://no1-19fc-1.miraiv.repl.co/api/phongcanh.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
    }
  module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `===== [ 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗕𝗢𝗧 ] =====\n\n💮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗕𝗼𝘁 𝗡𝗲𝗿𝗼̂ đ𝗮̃ 𝗼𝗻𝗹 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆\n⚙️ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝘂̉𝗮 𝗯𝗼𝘁: ${global.config.version}\n🔗 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${commands.size}\n🖨️ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́: ${events.size} 𝗹𝗲̣̂𝗻𝗵 𝘀𝘂̛̣ 𝗸𝗶𝗲̣̂𝗻\n👥 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n🏘️ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n💓 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘁: ${prefix}`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://no1-19fc-1.miraiv.repl.co/api/phongcanh.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID); 
  }
    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Thành Viên" : p == 1 ? "Admin Box" : p = 2 ? "Admin bot" : "Toàn Quyền"
}