const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "vẽ",
  version: "4.1",
  hasPermssion: 0,
  credits: "Hazeyy",
  description: "( 𝙿𝚒𝚡𝙰𝚛𝚝 𝚇𝙻 )",
  commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
  usages: "( 𝙿𝚒𝚡𝙰𝚛𝚝 )",
  cooldowns: 8,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("vẽ") === 0 || event.body.indexOf("Vẽ") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  api.setMessageReaction("📸", event.messageID, (err) => {}, true);

  if (args.length === 0) {
    api.sendMessage("✨ xin chào tôi là AI IMMAGE \N Bạn có thể yêu cầu tôi vẽ gì ? \n vẽ + nội dùng để muốn vẽ = tiếng anh.", event.threadID);
    return;
  }

  api.sendMessage("🕟 | Đang tiến hành vẽ , đợi tý...", event.threadID);
  try {
    const response = await axios.get('https://codemerge-api.hazeyy0.repl.co/pixart/api', {
      params: {
        prompt: args.join(" "),
      },
    });

    console.log('🤖 𝙿𝚒𝚡𝙰𝚛𝚝 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎:', response.data);

    if (response.data) {
      const imageData = response.data;

      if (imageData && Array.isArray(imageData)) {
        const item = imageData[0];
        const image = await axios.get(item, { responseType: "arraybuffer" });
        const path = __dirname + "/cache/" + Math.floor(Math.random() * 999999) + ".jpg";

        const promptMessage = `🤖 Ảnh được 𝐀𝐈 IMAGE vẽ ! \n\n🖋️ Nội dung: '${args.join(" ")}'\n\n✨ AI IMAGE BY XTHANH`;

        fs.writeFileSync(path, image.data);

        api.sendMessage({ body: promptMessage, attachment: fs.createReadStream(path) }, event.threadID, () => {
          fs.unlinkSync(path);
        });
      }
    } else {
      api.sendMessage('🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚍𝚞𝚛𝚒𝚗𝚐 𝚝𝚑𝚎 𝙿𝚒𝚡𝙰𝚛𝚝 𝚙𝚛𝚘𝚌𝚎𝚜𝚜.', event.threadID);
    }
  } catch (error) {
    console.error('🚫 𝙴𝚛𝚛𝚘𝚛:', error);
    api.sendMessage('🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚒𝚗𝚐 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎.', event.threadID);
  }
};

module.exports.run = async function({ api, event }) {};