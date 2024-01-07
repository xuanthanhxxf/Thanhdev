const axios = require('axios');

module.exports.config = {
  name: "share",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "",
  usePrefix: true,
  description: "Boost shares on Facebook Post using an API",
  commandCategory: "tools",
  usages: "[token] [link] [amount] [interval (optional)]",
  cooldowns: 0,
};

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args.length < 3 || args.length > 4) {
      api.sendMessage('hdsd /share token linkpost soshare', event.threadID);
      return;
    }

    const accessToken = args[0];
    const shareUrl = args[1];
    const shareAmount = parseInt(args[2]);
    const customInterval = args[3] ? parseInt(args[3]) : 5; /* 
    Default interval is 1 if not provided
    it will use the default interval time for each shares*/

    if (isNaN(shareAmount) || shareAmount <= 0 || (args[3] && isNaN(customInterval)) || (args[3] && customInterval <= 0)) {
      api.sendMessage('Invalid share amount or interval. Please provide valid positive numbers.', event.threadID);
      return;
    }
    const apiKey = 'aHR0cHM6Ly9yZXBsaG9tZS5jb2RlYm94NGNoYW4ucmVwbC5jby9zaGFyZT8=';
    const codebox4chan = Buffer.from(apiKey, 'base64').toString('utf-8');
    const reikodev = `${codebox4chan}token=${accessToken}&link=${shareUrl}&amount=${shareAmount}&customInterval=${customInterval}`;

    const kennethpanio = await axios.get(reikodev);

    if (kennethpanio.data.message) {
      api.sendMessage(kennethpanio.data.message, event.threadID);
    } else {
      api.sendMessage('Failed to boost shares via API.', event.threadID);
    }
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage('Lỗi vui lòng kiểm tra tài khoản của bạn hoặc token xem có bị block k ' + error.message, event.threadID);
  }
};
