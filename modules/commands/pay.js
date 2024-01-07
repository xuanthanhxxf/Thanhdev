module.exports.config = {
  name: "pay",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Chuyển tiền của bản thân cho ai đó",
  commandCategory: "Ngân hàng",
  usages: "Reply tin nhắn người dùng cần pay + số tiền",
  cooldowns: 500,
};

module.exports.run = async ({ event, api, Currencies, args, Users }) => {const permission = ["100071768980176","100075976025542","100088810007933","100056967003808","100081635371333","1735669035","100088444436991","100078770982954","100058274952782","100069227582339"];
if (!permission.includes(event.senderID)) return api.sendMessage("30k/full quyền admin\naduoc ib riêng với bot.", event.threadID, event.messageID);
  let { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions)[0];
  if (!mention && event.messageReply) {
    if (isNaN(args[0]) == true) return api.sendMessage(`Nội dung bạn nhập không phải là 1 con số hợp lệ!`, threadID, messageID);
    const coins = parseInt(args[0]);
		var tax = coins * 5 / 100;
		var money = coins - tax;
    let balance = (await Currencies.getData(senderID)).money;
    const namePay = await Users.getNameUser(event.messageReply.senderID);
    if (coins > balance) return api.sendMessage(`Số tiền bạn muốn chuyển lớn hơn số coins bạn hiện có!`, threadID, messageID);
    return api.sendMessage({ body: '===『𝙎𝙪𝙘𝙘𝙚𝙨𝙨』===\n════════\n☞𝑵𝒈𝒖̛𝒐̛̀𝒊 𝒏𝒉𝒂̣̂𝒏: ' + namePay + '\n☞𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏: ' + ` ${args[0]}$` + '\n❥𝑵𝒉𝒂̣̂𝒏: ' + `${money}$` + '\n[==𝑶𝒕𝒉𝒆𝒓==]' + '\n╰❥𝑷𝒉𝒊́: ' + `${tax}$`}, threadID, async () => {
      await Currencies.increaseMoney(event.messageReply.senderID, coins);
      Currencies.decreaseMoney(senderID, coins)
    }, messageID);
  }
  let name = event.mentions[mention].split(" ").length
  if (!mention || !event.messageReply) return api.sendMessage('Vui lòng reply tin nhắn của người muốn chuyển coins cho!', threadID, messageID);
  else {
    if (!isNaN(args[0 + name])) {
      const coins = parseInt(args[0 + name]);
      let balance = (await Currencies.getData(senderID)).money;
      if (event.type == "message_reply") { mention[0] = event.messageReply.senderID }
      if (coins <= 0) return api.sendMessage('Số coins bạn muốn chuyển không hợp lệ', threadID, messageID);
      if (coins > balance) return api.sendMessage('Số coins bạn muốn chuyển lớn hơn số coins bạn hiện có!', threadID, messageID);
      else {
        return api.sendMessage({ body: '===『𝙎𝙪𝙘𝙘𝙚𝙨𝙨』===\n════════\n☞đã chuyển:' + event.mentions[mention].replace(/@/g, "") + ` ${args[0 + name]} coins` }, threadID, async () => {
          await Currencies.increaseMoney(mention, coins);
          Currencies.decreaseMoney(senderID, coins)
        }, messageID);
      }
    } else return api.sendMessage('Vui lòng nhập số coins muốn chuyển', threadID, messageID);
  }
}