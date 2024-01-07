const { join } = require("path");
const { existsSync, writeFileSync, readFileSync } = require("fs-extra");

module.exports.config = {
    name: "autosetname",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Tự động setname cho thành viên mới",
    commandCategory: "Box Chat",
    usages: "[add <name> /remove] ",
    cooldowns: 5
}

module.exports.onLoad = () => {
    console.log('=======[ AUTOSETNAME LOADED SUCCESSFULLY ]=======')
    const pathData = join(__dirname, "noprefix", "autosetname.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = async function  ({ event, api, args, permssionm, Users })  {
    const { threadID, messageID } = event;
    const pathData = join(__dirname, "noprefix", "autosetname.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
    switch (args[0]) {
        case "add": {
            if (content.length == 0) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗣𝗵𝗮̂̀𝗻 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝘁𝗲̂𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗯𝗼̉ 𝘁𝗿𝗼̂́𝗻𝗴 🌸", threadID, messageID);
            if (thisThread.nameUser.length > 0) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘅𝗼́𝗮 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝘁𝗲̂𝗻 𝗰𝘂̃ 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗸𝗵𝗶 𝘀𝗲𝘁 𝘁𝗲̂𝗻 𝗺𝗼̛́𝗶 🌸", threadID, messageID); 
            thisThread.nameUser.push(content);
            const name = (await Users.getData(event.senderID)).name
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗦𝗲𝘁 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝘁𝗲̂𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸\n[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗣𝗿𝗲𝘃𝗶𝗲𝘄: ${content} ${name}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
                if (thisThread.nameUser.length == 0) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗡𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝘀𝗲𝘁 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝘁𝗲̂𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 🌸", threadID, messageID);
                thisThread.nameUser = [];
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗫𝗼́𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗽𝗵𝗮̂̀𝗻 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝘁𝗲̂𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 🌸`, threadID, messageID);
                break;
        }
        default: {
                return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗗𝘂̀𝗻𝗴: /𝗮𝘂𝘁𝗼𝘀𝗲𝘁𝗻𝗮𝗺𝗲 𝗮𝗱𝗱 <𝗻𝗮𝗺𝗲> 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘀𝗲𝘁 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝗵𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 🌸\n\n[ 𝗠𝗢𝗗𝗘 ] ➝ 𝗗𝘂̀𝗻𝗴: /𝗮𝘂𝘁𝗼𝘀𝗲𝘁𝗻𝗮𝗺𝗲 𝗿𝗲𝗺𝗼𝘃𝗲 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗼́𝗮 𝗰𝗮̂́𝘂 𝗵𝗶̀𝗻𝗵 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝗵𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 🌸`, threadID, messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}