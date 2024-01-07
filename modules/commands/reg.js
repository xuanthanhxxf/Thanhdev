module.exports.config = {
	name: "reg",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Tuấn Thanh",
	description: "register tk garena",
	commandCategory: "Tiện ích",
	usages: "",
    cooldowns: 5
};
module.exports.run = async ({ api, event,args }) => {const permission = ["100071768980176","uid2"];
if (!permission.includes(event.senderID)) return api.sendMessage("Xin lỗi bạn cần phải mua key để reg acc grn nhé!", event.threadID, event.messageID);
  try {
const axios = require("axios")
  const name = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0] || "";
  const gmail = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1] || "";
axios.get(`https://apipremium-thanhali.thanhali.repl.co/garena?username=${name}&mail=${gmail}`)
  .then(function (response) {
    //const { uid, username }= response.data.data
    
   //console.log(uid) 
    api.sendMessage(`ID: ${response.data.data.uid || 'ID không tồn tại'}\nTên tài khoản: ${response.data.data.username || 'Tài khoản hoặc mail có thể đã tồn tại'}\nMật khẩu: Regacc001@`, event.threadID, event.messageID);
});
} catch (error) {
api.sendMessage(`Đã có lỗi xảy ra, vui lòng thử lại sau`, event.threadID, event.messageID);
}
}