module.exports.config = {
	name: "money",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",//mod by ARAXY XD
	description: "Kiểm tra số tiền của bản thân hoặc người được tag",
	commandCategory: "Kiếm Tiền",
	usages: "[Tag]",
	cooldowns: 11
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
	const { threadID, messageID, senderID, mentions } = event;
  const fs = require('fs');
const axios = require('axios')
 /*if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };*/
if (event.type == "message_reply") {
    var uid = event.messageReply.senderID;
    var name = (await Users.getData(uid)).name;
    var money = (await Currencies.getData(uid)).money;
    if (!money) money = 0;
var argss = `${money}`;
}
else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions).keys
		var uid = mention
		var money = (await Currencies.getData(mention)).money;
		if (!money) money = 0;
	  var argss = `${money}`;
    var name = (await Users.getData(mention)).name
	} else {
   var name = (await Users.getData(senderID)).name;
   var uid = senderID
    var money = (await Currencies.getData(senderID)).money;
    if (!money) money = 0;
var argss = `${money}`;
  }
	 
       var msg =  {body: `==[ 𝐖𝐀𝐋𝐋𝐄𝐓 ]==\n👾Name: ${name}\n💸Money: ${money}\nthả cảm xúc 👍 vào tin nhắn để allin số tiền vào xổ số.`
    }
return api.sendMessage(msg,  threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: uid,
    }),
        messageID
})
}
module.exports.handleReaction = async function({ event, api, handleReaction, Currencies}){
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "👍") return; 
  const { senderID } = event 
  var money = (await Currencies.getData(handleReaction.author)).money;
  if(money < 500){
    return api.sendMessage('Bạn Không Đủ Tiền Để Chơi', event.threadID)
  }
  var sothu1 = Math.floor(Math.random() * 2) + 2
  var sothu2 = Math.floor(Math.random() * 2) + 2
  if (sothu1 == sothu2){
  await Currencies.increaseMoney(handleReaction.author, parseInt(money)) 
    return api.sendMessage(`chúc mừng số may mắn của bạn là ${sothu1}\nSố được đưa ra là ${sothu2}\nBạn nhận được số tiền lớn ${money + money}`,event.threadID)
  } else {
    await Currencies.decreaseMoney(handleReaction.author, parseInt(money)) 
    return api.sendMessage(`số may mắn của bạn là ${sothu1}\nSố được đưa ra là ${sothu2}\nNhưng vì bạn ngu ngu nên bot vẫn giữ tiền cho bạn !`,event.threadID)
  }
}