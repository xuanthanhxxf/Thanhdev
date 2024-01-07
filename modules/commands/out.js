module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Tài khoản",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100071768980176"];
  if (!permission.includes(event.senderID))
  return api.sendMessage("*callad có thằng đòi out box đây XThanh\nBot Said : Xin cái tuổi để out?", event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('Đã nhận lệnh out nhóm từ admin XThanh!', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}