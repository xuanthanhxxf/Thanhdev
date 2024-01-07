const coins = "5000000"
module.exports.config = {
    name: "spam",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "Dũngkon",//đổi credits làm chó 
    description: "Spam sms hoặc call",
    commandCategory: "Tiện ích",
    usages: "spam sđt | số lần | time delay",
    cooldowns: 55
};
module.exports.run = async function({ api, event, args, Currencies, Users }) {
  if(this.config.credits !== 'Dũngkon') return api.sendMessage('Đã bảo đừng thay credits rồi mà không nghe, thay lại credits ngay không là đéo dùng được đâu nha', event.threadID, event.messageID);
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  const axios = require('axios');
    var list_id = [];
  const sdt = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0] 
  const solan = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1]
  const delay = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2]
        if (!sdt) return api.sendMessage(`Thiếu số điện thoại\n----------\nvui lòng nhập theo định dạng\n----------\n spam số điện thoại | số lần | delay\nvd : /spam 0123456789 | 10 | 5\nVui lòng chờ 55s tiếp theo để sử dụng lệnh !`, event.threadID, event.messageID);
        if(!solan) return api.sendMessage(`Thiếu số lần\n----------\nvui lòng nhập theo định dạng\n----------\n spam số điện thoại | số lần | delay\nVd : 0123456789 | 10 | 5 Vui lòng chờ 55s tiếp theo để sử dụng lệnh !`,event.threadID, event.messageID);
        if(!delay) return api.sendMessage(`Thiếu time delay\n----------\nvui lòng nhập theo định dạng\n----------\n spam số điện thoại | số lần | delay`,event.threadID, event.messageID);
        if (coins > moneyUser) return api.sendMessage(`Bạn không đủ ${coins} coins để dùng lệnh\nDùng lệnh /work để kiếm tiền\nHiện tại bạn đang có ${moneyUser} coins`, event.threadID, event.messageID);
        if (solan > 10 || solan == 11) return api.sendMessage("Số lần không được quá 10 lần", event.threadID)
        if (sdt == 0867470828 || sdt == 0976735547 || sdt == 0367281079 ) return api.sendMessage("Không thể spam số admin Xthanh", event.threadID)
        if (delay == 0.5 || delay == 1 ) return api.sendMessage("Không thể spam dưới delay 5", event.threadID)
              api.sendMessage(`⚙Đang tiến hành spam\n\n📱Số điện thoại: ${sdt}\n\n✍️Số lần: ${solan}\n\n⏱Time delay: ${delay}\n\n👥Người thực thi lệnh: ${(await Users.getData(event.senderID)).name}\nĐã trừ 5000000$ cho 1 lần sử dụng! \nVui lòng chờ 55s tiếp theo để sử dụng lệnh !!`, event.threadID)
         var data = await global.utils.getContent(`https://spamsmsv1.thanhdev.repl.co/spam?sdt=${sdt}&luot=${solan}&delay=${delay}`)
            console.log(data)
        let noti = data.data.message;
        let tong = data.data.totalCallApi;
        let thanhcong = data.data.success;
        let thatbai = data.data.fail;
        let soluot = data.data.soluot
Currencies.setData(event.senderID, options = {money: money - coins})

         return api.sendMessage(`[ SPAMSMS + CALL ]\n\nTrạng thái: ${noti}\nTổng: ${tong}\nThành công: ${thanhcong}\nThất bại: ${thatbai}\nSố lượt: ${soluot}\nTime delay: ${delay}\nĐã trừ ${coins} coins`, event.threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 200000))

}