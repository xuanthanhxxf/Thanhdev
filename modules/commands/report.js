module.exports.config = {
    name: "report",
    version: "99",
    hasPermssion: 2,
    credits: "Horizon", // =))
    description: "Become Tricker Report Cacthu Để Rip Acc = Link 13+ để rip acc fb dame tưởng nhớ, 957 ,282 ",
    commandCategory: "dành cho admin",
    usages: "",
    cooldowns : 15
};
module.exports.handleReply = async function({ api, event, handleReply,client }) {
    if (event.senderID != handleReply.author) return;
    switch (handleReply.Case) {
        case 1: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Tên Thật Của Facebook Người Bạn Muốn Report !", event.threadID,(error, info) => global.client.handleReply.push({ Link: event.body, name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 2 }));
        }
        case 2: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Gmail Của Bạn Để Nhận Thông Báo Của Facebook !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link, RealName: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 3 }));
        }
        case 3: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Nội Dung(thần chú) Bạn Muốn Report !\nThần Chú 1 : それが人生の一部であると知っていても、私たちはさようならを言う準備ができていません。この日、特別な人を亡くしたショックを受け入れるのは難しいです。このアカウント所有者は、新株に感染した ときに亡くなり、その後まもなく亡くなりました。どうぞお休みください\nThần Chú 2 : 安らかに眠る\nThần Chú 3 : 私の家族と私はあなたの悲劇的な死に非常にショックを受けています。あなたが永遠に去ってしまったことはとても悲しいことです\nAnh em có thể copy thần chú nhé !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 4 }));
        }
        case 4: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Số Lần Muốn Report Lên Nạn Nhân !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
        }
        case 5: {
            var Time = parseInt(event.body);
            if (isNaN(event.body)) {
                return api.sendMessage("Hãy Nhập Lại Số Lần Report Lên Nạn Nhân !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Gmail, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
            }
            if (event.body > 10000) {
                return api.sendMessage("Hãy Nhập Số Lần Report Lên Nạn Nhân Không Quá 10000 Lần !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Content, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
            }
            if (event.body < 1) {
                return api.sendMessage("Hãy Nhập Số Lần Report Lên Nạn Nhân Không Ít Hơn 1 Lần !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Content, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
            }
            return api.sendMessage("Bạn Đã Yêu Cầu Report Nạn Nhân Tưởng nhớ Với Thông Tin Sau :\nTên Thật : " + handleReply.RealName + "\nGmail(Của bạn): " + handleReply.Gmail + "\nNội Dung : " + handleReply.Content + "\nSố Lần Report : " +  (handleReply.Time || Time), event.threadID,(error, info) => api.sendMessage("Vui Lòng Phản Hồi 'ok' Để Xác Nhận Phóng Tên Lửa💀 (có thể ra các dạng 282,956 tưởng nhớ hoặc đặc biệt ra 732)",event.threadID,(err,info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Content, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 6 })));
        }
        case 6: {
            if (event.body != "ok") return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập 'ok' Để Xác Nhận Report Phóng Tên Lửa💀", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Content, Time: handleReply.Time,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 6 }));
            for (let i = 0; i < (handleReply.Time || Time); i++) {
                try {
                    var DataRp = await api.Premium('ReportV1',{ Link: handleReply.Link, RealName: handleReply.RealName, Content: handleReply.Content, Gmail: handleReply.Gmail });
                    console.log(i + "/ Report " + DataRp);
                    await new Promise(resolve => setTimeout(resolve, 1 * 1000));
                }
                catch (e) {
                    console.log(e);
                    return api.sendMessage("Đã gửi yêu cầu report thành công vui lòng chờ trong 24h !\n", event.threadID);
                }
            }
            return api.sendMessage(`Đã Gửi: ${ (handleReply.Time || Time)} Lần Report Tới Nạn Nhân ${handleReply.RealName} !`,event.threadID);
        }
    }
}
module.exports.run = async function({ api,event,client }) {
    return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Link Facebook Người Bạn Muốn Report !", event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 1 }));
}