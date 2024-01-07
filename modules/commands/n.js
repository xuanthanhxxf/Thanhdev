const ip = require('ip');
const ipAddress = ip.address();
const axios = require('axios');
const request = require('request');
const fs = require("fs");
var os = require("os");
var fsUtils = require("nodejs-fs-utils");
const moment = require("moment-timezone");
const fsize = require("file-size");
const address = require('address');
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Thanh Mài",
  description: "uptime",
  usePrefix: true,
  commandCategory: "uptime",
  usages: "uptime",
  cooldowns: 0
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined);
module.exports.run = async function({ api, event }) {
  let time = process.uptime();
    var hours = Math.floor(time / (60 * 60));
    var minutes = Math.floor((time % (60 * 60)) / 60);
    var seconds = Math.floor(time % 60);
    var hours_1 = (hours < 10) ? '0' + hours : hours;
    var minutes_1 = (minutes < 10) ? '0' + minutes : minutes;
    var seconds_1 = (seconds < 10) ? '0' + seconds : seconds;
   const timeStart = Date.now();
const usern = process.env.REPL_SLUG
fsUtils.fsize(`./../${usern}`, async function (err, size) {
  var fsize2 = fsize(size).to("MB")
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const packagejson = require('../../package.json')
const dependencles = Object.keys(packagejson.dependencies);

   const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var tinhtrang = xuly < 10 ? "Tốt 🔵":
  xuly > 10 && xuly < 100 ? "Ổn Định 🍀" : "Delay 🔴";
    var so = ["1","2","3","4","6"]
      var stt = so[Math.floor(Math.random() * so.length)]
      var img = []
      for(i=0;i<stt;i++){
        var ngtmai = await axios.get(`https://docs-api.jrtxtracy.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248`)
        var shadowvip = ngtmai.data.data
        var stream  = (await axios.get(shadowvip,{responseType: "stream"})).data
        img.push(stream)
      };  
  const pidusage = await global.nodemodule["pidusage"](process.pid);
 api.sendMessage({body:`Bây giờ là: ${gio}\nThời gian online: ${hours_1}:${minutes_1}:${seconds_1}\nĐịa chỉ ip: ${ipAddress}\nTốc độ: ${Date.now() - timeStart} ms\nTổng số Package: ${dependencles.length}\nTổng Dung Lượng File: ${fsize2}/1024 MB\nTổng RAM đã sử dụng: ${byte2mb(pidusage.memory)}\nTình Trạng: ${tinhtrang}\nCPU: ${os.cpus().length}\n Tổng số người sử dụng : ${global.data.allUserID.length}\nTổng số nhóm hoạt động : ${global.data.allThreadID.length}\n💮 người sử dụng lệnh : ${global.data.userName.get(event.senderID)}\nNhóm : ${global.data.threadInfo.get(event.threadID).threadName}`,attachment :img}, event.threadID,event.messageID);
})
};
