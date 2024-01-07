module.exports.config = {
  name: "onl",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "xem thời gian bot onl",
    cooldowns: 5
};
module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
const moment = require("moment-timezone"); 
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  if (!event.body) return;
  var { threadID, messageID } = event;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  if (event.body.toLowerCase().indexOf("on") == 0) {
    //get online
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("On")) ? threadSetting.PREFIX : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
  const admins = global.config.ADMINBOT;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
  var i = 1;
  var msg = [];
  var msg = []
    for(var a of admins) {
    if (parseInt(a)) {
    var name = await Users.getNameUser(a);
      msg.push(`${i++}. ${name}`);
    }
    }
    api.sendMessage({body:`    「 𝐓𝐇𝐎̛̀𝐈 𝐆𝐈𝐀𝐍 𝐁𝐎𝐓 𝐎𝐍𝐋𝐈𝐍𝐄 」\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n⏰𝗧𝗶𝗺𝗲: ${gio}\n🗓𝐓𝐡𝐮̛́: ${thu}\n——————————————————\n🤖𝗧𝗲̂𝗻 𝗕𝗼𝘁: ${global.config.BOTNAME}\n🌸𝗕𝗼𝘅:\n(${threadname})\n📇𝗨𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n📋𝐓𝐨̂̉𝐧𝐠 𝐜𝐚́𝐜 𝐛𝐨𝐱 𝐝𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭: ${global.data.allThreadID.length} 𝐛𝐨𝐱\n📋𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n——————————————————\n📡𝗣𝗶𝗻𝗴: ${Date.now() - dateNow} ms\n💾𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ${global.config.version}\n📊𝐓𝐨̂́𝐜 𝐝𝐨̣̂ 𝐱𝐮̛̉ 𝐥𝐢́ 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐥𝐚̀: ${Date.now() - dateNow} 𝐆𝐢𝐚̂𝐲\n——————————————————\n𝐁𝐨𝐭 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐝𝐚̃ 𝐡𝐨𝐚̣𝐭 𝐝𝐨̣̂𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜\n  ▱▱${hours} 𝐆𝐢𝐨̛̀ ${minutes} 𝐏𝐡𝐮́𝐭 ${seconds} 𝐆𝐢𝐚̂𝐲▱▱`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://gen4-16-10.haimothaihai.repl.co/v1/vid-gai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
  }
};
module.exports.run = () => {};