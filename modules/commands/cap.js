const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "Nhóm",
    usages: "",
    cooldowns: 5
}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `` ,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie =`usida=eyJ2ZXIiOjEsImlkIjoiQXJ6YWNzMDF3d3Z0cXgiLCJ0aW1lIjoxNjkxODU2NDMyfQ%3D%3D;dpr=3;m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABaSw4YBFuy88aQEEwUWiN-fppnBLQA%22%2C%222%22%3A%22GSwVQBxMAAAWAhag48rRDBYAABV-HEwAABYAFqDjytEMFgAAFigA%22%2C%2295%22%3A%22HCwAABa4jAEWwsalrgcTBRaI35-mmcEtAA%22%7D%2C%22d%22%3A%22c6f61690-72b4-4b2a-b2b3-ccba14d7e73f%22%2C%22s%22%3A%220%22%2C%22u%22%3A%22azgkgh%22%7D;datr=j3AiZSNJ1Zw7urrTtaMgsIqW;sb=j3AiZfz1mo_2bB_3PNRyVg-o;vpd=v1%3B706x360x3;wl_cbv=v2%3Bclient_version%3A2374%3Btimestamp%3A1701917343;c_user=100052452486127;xs=48%3A7cWTeXP7DWhCFA%3A2%3A1701918071%3A-1%3A6210;fr=0wVGWSvL8cD2pegBH.AWWc26B6Ex6MK55t2IrVjxwIgik.BlcTV2.MP.AAA.0.0.BlcTV2.AWVJlASK3Zg;m_page_voice=100052452486127;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=1438aa&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `WALL CỦA BẠN ĐÂY ${name}`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
          }