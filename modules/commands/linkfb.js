module.exports.config = {
	name: "linkfb",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy link facebook của người dùng",
	commandCategory: "Nhóm",
	cooldowns: 5
};
module.exports.run = async function({ api, event, args, Users }) {
	  const { threadID, messageID, senderID, mentions } = event;
  if (event.type == "message_reply") {
      let name = await Users.getNameUser(event.messageReply.senderID)
        var uid = event.messageReply.senderID;
        return api.sendMessage(`Tên ${name}\nLink: fb.me/${uid}`, event.threadID, event.messageID);
  }
	if (!args[0]) {
    let name = await Users.getNameUser(event.senderID)
	return api.sendMessage(`Tên: ${name}\nLink fb.me/${event.senderID} `,event.threadID, event.messageID);	}
	else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions)[0];
 return api.sendMessage({body:`Tên: ${mentions[mention].replace(/\@/g, "")}\nLink fb.me/${Object.keys(event.mentions)[0]}`,
			mentions: [{
			  tag: mentions[mention].replace(/\@/g, ""),
				id: mention
			}]
    }, threadID, messageID);
	}
	else return global.utils.throwError(this.config.name, threadID, messageID);
}