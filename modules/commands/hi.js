module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 2,
  credit: "Sam",
  description: "hi gửi sticker",
  commandCategory: "tiện ích",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "hello", "hi", "hai", "chào", "chao", "hí",  "híí", "hì",  "hìì", "lô",  "hii", "helo", "hê nhô", "hj", "hiii", "haii", "haiii", "hăi", "hjj", "hjjj", "alo", "Hellooo",  "hi mn", "helo mn", "lô mn", "xin chào"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568", 
'180554745770841', '181834355642880', '180555742437408', '180555445770771', '157616594731323', '181834645642851', '180555255770790', '180555522437430', '157616548064661', '181834558976193', '181833828976266', '157616561397993', '157616521397997', '157616534731329', '157616574731325', '157616608064655', '157616628064653', '157616641397985', '157616671397982', '157616684731314','193082767877327', '193082841210653', '193083967877207', '193082987877305', '193082861210651', '193082804543990', '193082827877321', '193083044543966', '193082891210648', '193082974543973', '193082874543983', '193082931210644', '193082784543992', '193754774476793', '193082917877312', '193083001210637', '193083031210634', '193082944543976', '193754761143461', '193083087877295', '193083104543960', '193083121210625', '193083057877298', '193083071210630','237317540421239', '237317790421214', '237317987087861', '237318230421170', '237318537087806', '237318747087785', '237318950421098', '237319140421079', '237319333754393', '237319520421041', '237319783754348', '237320150420978', '237320493754277', '237320717087588', '237320883754238', '237321127087547','144885315685735', '144885185685748', '144884765685790', '144885035685763', '144885045685762', '144884775685789', '144884925685774', '144884805685786', '144884815685785', '144884835685783', '144884852352448', '144884865685780', '144884879019112', '144884895685777', '144884905685776', '144884955685771', '144884992352434', '144885022352431', '144885055685761', '144885069019093', '144885089019091', '144885099019090', '144885112352422', '144885129019087', '144885145685752', '144885159019084', '144885172352416', '144884755685791', '144885195685747', '144885225685744', '144885209019079', '144885242352409', '144885252352408', '144885262352407', '144885275685739', '144885299019070', '144884739019126', '144885335685733', '144885325685734', '144885349019065', '144884825685784', '144884792352454'];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "tốt lành , sớm có người yêu nhé bạn 🥰",
      "vui vẻ 😄",
      "hạnh phúc ❤ , chúc bạn sớm có người yêu nhé 🤭",
      "yêu đời 😘 "
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "sáng tinh mơ " : 
    hours > 401 && hours <= 700 ? "sáng sớm" :
    hours > 701 && hours <= 1000 ? "sáng " :
    hours > 1001 && hours <= 1200 ? "trưa" : 
    hours > 1201 && hours <= 1700 ? "chiều" : 
    hours > 1701 && hours <= 1800 ? "chiều tà" : 
    hours > 1801 && hours <= 2100 ? "tối" : 
    hours > 2101 && hours <= 2400 ? "tối muộn" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Xin chào ${name}, chúc bạn một buổi ${session} ${text}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
                                                                                      }