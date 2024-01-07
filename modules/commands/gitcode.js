module.exports.config = {
  name: "gitcode",
  version: "1.1.1",
  hasPermssion: 2,
  credits: "Quất",
  description: "Tạo code nhận xu",
  commandCategory: "Admin",
  usages: "test",
  cooldowns: 3,
};
const path = __dirname + '/data/code.json'
const fs = require("fs")
module.exports.handleEvent = async function ({ api, event, args, Currencies }) {
  try{
  const { increaseMoney, decreaseMoney, getData } = Currencies;
  if(event.body === '') return
  if(event.body === undefined) return
  var data = JSON.parse(fs.readFileSync(path))
  if(data.length > 0){ 
    const findCode = data.find(item=> item.key === (event.body).toLowerCase())
    if(findCode) {
      const findU = findCode.user.find(item=> item.userID === event.senderID)
    if(findU) return api.sendMessage('Bạn đã nhập code trước đó\n Mỗi code chỉ được nhập 1 lần.', event.threadID)
      await increaseMoney(event.senderID,findCode.money);
			api.sendMessage(`📌 Xin chúc mừng bạn đã nhập được mã code từ admin Xthanh [ ${findCode.key} ] bạn nhận được ${findCode.money}$\n Tiền sẽ được cộng trực tiếp vào tk của bạn, hãy dùng lệnh money để kiếm tra!`, event.threadID)
      findCode.number--
      findCode.user.push({
        userID: event.senderID
      })
		if(findCode.number <= 0){
         api.sendMessage(`❎ Code: ${findCode.key}\nTrạng thái: Đã hết lượt nhâp!\n📝 Tự động xóa code khỏi dữ liệu`,event.threadID)
       data = data.filter(item => item.key !== findCode.key)
      }
		}
     return fs.writeFileSync(path, JSON.stringify(data,null,4),'utf8')
    }
  }
  catch(e) {
	//	api.sendMessage(e,event.threadID)
    console.log(e)
  }
}


module.exports.run = async function ({ api, event, args }) {
  try{
  var data = JSON.parse(fs.readFileSync(path))
  const { ADMINBOT } = global.config;
		const ar = args[0];
    const code = ar.split("/");
    const key = code[0].toLowerCase();
    const number = parseInt(code[1]);
    const money = parseInt(code[2]);
    const findC = data.find(item=> item.key === key)
		var msg = "";
		if (ar == "list") {
			for (var i=0, msg=[]; i<data.length; i++) {
				msg.push("==================")
			msg.push(`🗡 Code:${data[i].key}`)
				 msg.push(`🥑 Được nhập: ${data[i].number}`)
				msg.push(`💸 Quà: ${data[i].money}$`)
				/*api.sendMessage(data,event.threadID)
		console.log("bruh")*/
			}
			msg.push("==================")
			api.sendMessage(`==[ ALL CODE ]==\n${msg.join("\n")}\n⚜ Chat code lên để nhập code, số lượng có hạn nhé 🥰\nAdmin Xthanh chúc các bạn sử dụng bot vui vẻ!!!`,event.threadID)
			console.log(msg.join("\n"))
											}
		else {
    if(findC) return api.sendMessage('Code này đã có trong data', event.threadID)
    
    if (!key || !number || !money) {
        return api.sendMessage("keyword không hợp lệ!", event.threadID)
    } 
		var dcode = {key: key, number: number, money: money, user: []}
        data.push(dcode)
        fs.writeFileSync(path, JSON.stringify(data,null,4),'utf8')
        return api.sendMessage(`🔰 Tạo code thành công\n📝 Code: ${key}\n📌 Số lần nhập: ${number}\n💸 Số tiền: ${money}\n Hãy nhập code  ${key} để được ${money}$ nhé `, event.threadID)
    
  }
  }catch(e){
    console.log(e)
  }
}

/*function formatNumber(number) {
  return number.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}*/