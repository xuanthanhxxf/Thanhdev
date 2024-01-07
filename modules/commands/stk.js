module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Xthanh",
  description: "Donate cho admin",
  commandCategory: "Admin",
  usages: "stk",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/vg432OC.jpg",
"https://i.imgur.com/wfs5ciD.jpg",
"https://i.imgur.com/ROSxqcz.jpg",
"https://i.imgur.com/XsozfwD.jpg",
"https://i.imgur.com/NXjTAPo.jpg",
"https://i.imgur.com/tCtIYVH.jpg",
"https://i.imgur.com/IO1mZqe.jpg",
"https://i.imgur.com/fsN7UKb.jpg",
"https://i.imgur.com/pVbzuNl.jpg",
"https://i.imgur.com/wCtwbHW.jpg",
"https://i.imgur.com/FWGtq1j.jpg",
"https://i.imgur.com/j0lBYCK.jpg",
"https://i.imgur.com/7We9fzf.jpg",
  ];
	  var callback = () => api.sendMessage({body:`ㅤㅤ🌸 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 🌸\n
𝐌𝐢̀𝐧𝐡 𝐜𝐡𝐨 𝐭𝐡𝐮𝐞̂ 𝐛𝐨𝐭 𝐯𝐨̛́𝐢 𝐠𝐢𝐚́ 50k/1 tháng 𝐧𝐡𝐮̛𝐧𝐠 𝐛𝐚̣𝐧 𝐧𝐚̀𝐨 𝐜𝐨́ 𝐥𝐨̀𝐧𝐠 𝐭𝐨̂́𝐭 𝐭𝐡𝐢̀ 𝐭𝐡𝐢̉𝐧𝐡 𝐭𝐡𝐨𝐚̉𝐧𝐠 𝐛𝐚𝐧𝐤 𝐢́𝐭 𝐦𝐮𝐚 𝐦𝐢̀ 𝐠𝐨́𝐢 𝐢𝐮𝐮𝐮\n\n\n💕💕𝐌𝐁𝐁𝐀𝐍𝐊💕💕\n𝘼𝙙𝙢𝙞𝙣 𝙓𝙪𝙖̂𝙣 𝙏𝙝𝙖̀𝙣h\n𝐒𝐓𝐊: 031442268888`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };