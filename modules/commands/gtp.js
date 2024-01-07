const axios = require("axios");
module.exports.config = {
  name: "gtp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Cyril Matt O. Encenso", // Credits to Adonis Sanchez for the API and his the one who requested this command 😁 // Please don't change credits respect to my work
  description: "Global GPT",
  usePrefix: true,
  commandCategory: "AI",
  usages: ["gpt <question>"],
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  let { messageID, threadID } = event;
  let tid = threadID,
    mid = messageID;
  const content = encodeURIComponent(args.join(" "));
  if (!args[0]) return api.sendMessage("bạn phải hỏi cái gì đó.", tid, mid);
  try {
    api.sendTypingIndicator(event.threadID, true);

    const res = await axios.get(`https://api.easy0.repl.co/v1/globalgpt?q=${content}`);
    const response = res.data.content;

    if (response) {
      const messageText = `📝 𝗚𝗣𝗧 REPLY\n\n${response}\nmodel 4.0 By Xthanhdev`;
      api.setMessageReaction("👌", event.messageID, (err) => {}, true);
      api.sendMessage(messageText, tid, mid);
    } else if (res.data.error) {
      api.sendMessage(`Đã sảy ra lỗi: ${res.data.error}`, tid, mid);
    } else {
      api.sendMessage("đã sảy ra lỗi database\nLH admin Xthanh để fix.", tid, mid);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("Đã sảy ra lỗi\nLH admin Xthanh để fix.", tid, mid);
  }
};
//For immediate assistance, please email our customer support: support@toptal.com

