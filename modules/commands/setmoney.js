module.exports.config = {
	name: "setmoney",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Raiden Makoto",
	description: "Thay đổi số tiền của bản thân hoặc người được tag",
	commandCategory: "Hệ Thống",
	usages: "< me/tag >",
	cooldowns: 12000,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {const permission = ["100080870840550","100066358135728","100040813343104","100024979625624","100052586754038","100055855538869","100004911332292","1094824774","100080501276574","100034415418637","1721994577","100055855538869","100075976025542","100029340348630","100071768980176","100086506124294","100029349064995","100069227582339","100093955652748","100088810007933","100056967003808","100078770982954","100078770982954","100040813343104","100078235402792","100081635371333","1735669035","100088444436991","100058274952782"];
if (!permission.includes(event.senderID)) return api.sendMessage("Key của bạn đã hết lượt , vui lòng mua key mới để được set !", event.threadID, event.messageID);
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var moneySet = content.substring(content.lastIndexOf(" ") + 1);
    			if (args[0]=='me'){
    			 return api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã cộng số dư của bạn thêm ${moneySet} đồng`, event.threadID, () => Currencies.increaseMoney(event.senderID, parseInt(moneySet)), event.messageID)	
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const moneyme =(await Currencies.getData(event.senderID)).money;
			api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã xoá toàn bộ số tiền của bạn\n💸Số tiền xoá là ${moneyme}`, event.threadID, async () => await Currencies.decreaseMoney(event.senderID, parseInt(moneyme)));
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions)[0];
		const moneydel = (await Currencies.getData(mention)).money;
		api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã xoá toàn bộ số tiền của ${event.mentions[mention].replace("@", "")}\n💸Số tiền xoá là ${moneydel}`, event.threadID, async () => await Currencies.decreaseMoney(mention, parseInt(moneydel)));
		}
		
		else return	api.sendMessage("[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Sai cú pháp dùng lệnh", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã cộng số dư của ${event.mentions[mention].replace("@", "")} thêm ${moneySet} đồng\nChờ 12k giây tiếp theo để sử dụng lệnh.`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: mention
				}]
			}, event.threadID, async () => Currencies.increaseMoney(mention, parseInt(moneySet)), event.messageID)
		}
		else if(args[0]=="uid"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã cộng số dư của ${nameeee} thêm ${cut} đồng`, event.threadID, () => Currencies.increaseMoney(id, parseInt(cut)), event.messageID)	

		}
else {
	api.sendMessage("[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Sai cú pháp dùng lệnh", event.threadID, event.messageID)
	}
  }