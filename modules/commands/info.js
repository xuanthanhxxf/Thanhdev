/*let
r = require('axios').get,
m = i=> Object({
    config: i,
    run: o=> {
        let
        send = msg=>o.api.sendMessage(msg, o.event.threadID, o.event.messageID),
        ok = ok=> {
            let
            info = ok.data,
            quê = info.hometown,
            đag_sốg = info.location,
            côg_việc = info.work;

            if (!!quê)quê = quê.name;
            if (!!đag_sốg)đag_sốg = đag_sốg.name;
            if (!!côg_việc)côg_việc = côg_việc.map($=>$.employer.name).join(', ');

            send(`- Tên: ${info.name}\n- Giới Tính: ${ {
                male: 'Nam', female: 'nữ'
            }[info.gender]}\n- Ngày Sinh: ${info.birthday}\n- Vùng: ${ {
                en_US: 'Mỹ', vi_VN: 'Việt Nam'
            }[info.locale]}\n- Công Việc: ${côg_việc}\n- Quê Nhà: ${quê}\n- Đang Sống: ${đag_sốg}\n- Tình Trạng: ${info.relationship_status}\n- Theo Dõi: ${info.subscribers.summary.total_count}`)
        },
        err = err=>send(err.message);
        r(`https://docs-api.jrtxtracy.repl.co/facebook/info?uid=100033478361032`).then(ok).catch(err);
    },
});

module.exports = m({
    name: 'info',
    version: '1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Lấy thông tin người dùng',
    commandCategory: 'Thông tin',
    usages: 'info',
    cooldowns: 0,
});*/
module.exports.config = {
    name: "info",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của người dùng facebook",
    commandCategory: "Thông tin",
    usages: "info [reply/tag/id]",
    cooldowns: 3
    
};
module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
   const res = await axios.get(`https://www.nguyenmanh.name.vn/api/fbInfo?id=${uid}&apikey=LV7LWgAp`);  
    var gender = res.data.result.gender == 'male' ? "Nam" : res.data.result.gender == 'female' ? "Nữ" : "Giới tính mà cũng không biết á?";
    var birthday = res.data.result.birthday ? `${res.data.result.birthday}` : "Bạn sinh vào ngày 20-10- năm không nhớ à!!!";
    var love = res.data.result.love ? `${res.data.result.love}` : "Vẫn đang F.A sml à???"
    var website = res.data.result.website ? `${res.data.result.website}` : "Hiện vẫn chưa có website"
    var about = res.data.result.about ? `${res.data.result.about}` : "Bản thân bạn không có gì để nói à???" 
    var quotes = res.data.result.quotes ? `${res.data.result.quotes}` : "Cuộc đời bạn không có nổi 1 câu trích dẫn à???"  
    var relationship = res.data.result.relationship ? `${res.data.result.relationship}` : "Chưa có người yêu mà!!!!"
    var location = res.data.result.location ? `${res.data.result.location}` : "Bạn hiện không ở trên Trái Đất!!!"
	var hometown = res.data.result.hometown ? `${res.data.result.hometown}` : "Quê ở đâu mà còn không biết à?"
    var url_profile = res.data.result.profileUrl  ? `${res.data.result.profileUrl}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`=== 『𝑻𝒉𝒐̂𝒏𝒈 𝑻𝒊𝒏』 ===\n\n[👤] ➜ Tên: ${res.data.result.name}\n[🔎] ➜ UID: ${uid}\n[👀] ➜ Follow: ${res.data.result.follow}\n[👭] ➜ Giới tính: ${gender}\n[🎉] ➜ Sinh Nhật: ${birthday}\n[💌] ➜ Tên duyên phận: ${love}\n[❤️] ➜ Mối quan hệ: ${relationship}\n[🏡] ➜ Sống tại: ${location}\n[🌏] ➜ Đến từ: ${hometown}\n[👉] ➜ Introduce myself:\n${about}\n[📝] ➜ Trích dẫn:\n${quotes}\n[🌐] ➜ Website: ${website}\n[📌] ➜ URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   }

    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://nguyenmanh.name.vn/api/fbInfo?id=${mentions}&apikey=LV7LWgAp`);  
   var gender = res.data.result.gender == 'male' ? "Nam" : res.data.result.gender == 'female' ? "Nữ" : "Giới tính mà cũng không biết á?";
    var birthday = res.data.result.birthday ? `${res.data.result.birthday}` : "Bạn sinh vào ngày 30-2- năm không nhớ à!!!";
    var love = res.data.result.love ? `${res.data.result.love}` : "Vẫn đang F.A sml à???"
    var website = res.data.result.website ? `${res.data.result.website}` : "Hiện vẫn chưa có website"
    var about = res.data.result.about ? `${res.data.result.about}` : "Bản thân bạn không có gì để nói à???" 
    var quotes = res.data.result.quotes ? `${res.data.result.quotes}` : "Cuộc đời bạn không có nổi 1 câu trích dẫn à???"  
    var relationship = res.data.result.relationship ? `${res.data.result.relationship}` : "Chưa có người yêu mà!!!!"
    var location = res.data.result.location ? `${res.data.result.location}` : "Bạn hiện không ở trên Trái Đất!!!"
	var hometown = res.data.result.hometown ? `${res.data.result.hometown}` : "Quê ở đâu mà còn không biết à?"
    var url_profile = res.data.result.profileUrl  ? `${res.data.result.profileUrl}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`=== 『𝑻𝒉𝒐̂𝒏𝒈 𝑻𝒊𝒏』 ===\n\n[👤]➜ Tên: ${res.data.result.name}\n[🔎]➜ UID: ${uid}\n[👀]➜ Follow: ${res.data.result.follow}\n[👭]➜ Giới tính: ${gender}\n[🎉]➜ Sinh Nhật: ${birthday}\n[💌]➜ Tên duyên phận: ${love}\n[❤️]➜ Mối quan hệ: ${relationship}\n[🏡]➜ Sống tại: ${location}\n[🌏]➜ Đến từ: ${hometown}\n[👉]➜ Introduce myself:\n${about}\n[📝]➜ Trích dẫn:\n${quotes}\n[🌐]➜ Website: ${website}\n[📌]➜ URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
      var res_ID = await api.getUID(args[0])
    const res = await axios.get(`https://www.nguyenmanh.name.vn/api/fbInfo?id=${res_ID}&apikey=LV7LWgAp`);  
  var gender = res.data.result.gender == 'male' ? "Nam" : res.data.result.gender == 'female' ? "Nữ" : "Giới tính mà cũng không biết á?";
    var birthday = res.data.result.birthday ? `${res.data.result.birthday}` : "Bạn sinh vào ngày 30-2- năm không nhớ à!!!";
    var love = res.data.result.love ? `${res.data.result.love}` : "Vẫn đang F.A sml à???"
    var website = res.data.result.website ? `${res.data.result.website}` : "Hiện vẫn chưa có website"
    var about = res.data.result.about ? `${res.data.result.about}` : "Bản thân bạn không có gì để nói à???" 
    var quotes = res.data.result.quotes ? `${res.data.result.quotes}` : "Cuộc đời bạn không có nổi 1 câu trích dẫn à???"  
    var relationship = res.data.result.relationship ? `${res.data.result.relationship}` : "Chưa có người yêu mà!!!!"
    var location = res.data.result.location ? `${res.data.result.location}` : "Bạn hiện không ở trên Trái Đất!!!"
	var hometown = res.data.result.hometown ? `${res.data.result.hometown}` : "Quê ở đâu mà còn không biết à?"
    var url_profile = res.data.result.profileUrl  ? `${res.data.result.profileUrl}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`=== 『𝑻𝒉𝒐̂𝒏𝒈 𝑻𝒊𝒏』 ===\n\n[👤]➜ Tên: ${res.data.result.name}\n[🔎]➜ UID: ${uid}\n[👀]➜ Follow: ${res.data.result.follow}\n[👭]➜ Giới tính: ${gender}\n[🎉]➜ Sinh Nhật: ${birthday}\n[💌]➜ Tên duyên phận: ${love}\n[❤️]➜ Mối quan hệ: ${relationship}\n[🏡]➜ Sống tại: ${location}\n[🌏]➜ Đến từ: ${hometown}\n[👉]➜ Introduce myself:\n${about}\n[📝]➜ Trích dẫn:\n${quotes}\n[🌐]➜ Website: ${website}\n[📌]➜ URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
}

