module.exports.config = {
  name: "unban",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "Gỡ ban nhóm và người dùng trong 1 nốt nhạc",
  commandCategory: "admin",
  usages: "",
  cooldowns: 2,
  denpendencies: {}
};

module.exports.run = async ({ event, api, Users, Threads, args }) => {
  var { threadID, messageID, senderID } = event;
  
  const { commands } = global.client;
  const command = commands.get(("unban").toLowerCase());
  const credit = command.config.credits;
  var mangG = "ManhG";
  if(credit != mangG) return api.sendMessage(`Sai credit!`, event.threadID, event.messageID);
  
  const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  switch (args[0]) {
    case 'admin':
    case 'ad':
      {
        const listAdmin = global.config.ADMINBOT;
        for (var idad of listAdmin) {
          const data = (await Users.getData(idad)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(idad, { data });
          global.data.userBanned.delete(idad, 1);
        }
        api.sendMessage("[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁 👥", threadID, messageID)
        break;
      }


    case 'allbox':
    case 'allthread':
      {
        const threadBanned = global.data.threadBanned.keys();
        for (const singleThread of threadBanned) {
          const data = (await Threads.getData(singleThread)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Threads.setData(singleThread, { data });
          global.data.userBanned.delete(singleThread, 1);
        }
        api.sendMessage("[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗕𝗼𝘅 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝗿𝘃𝗲𝗿 💬", threadID, messageID)
        break;
      }

    case 'box':
    case 'thread':
      {
        var idbox = event.threadID;
        var data = (await Threads.getData(idbox)).data || {};
        data.banned = 0;
        data.reason = null;
        data.dateAdded = null;
        await Threads.setData(idbox, { data });
        global.data.userBanned.delete(idbox, 1);
        api.sendMessage("[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝗕𝗼𝘅 𝗻𝗮̀𝘆 💬", threadID, messageID)
        break;
      }

    case 'allmember':
    case 'alluser':
      {
        const userBanned = global.data.userBanned.keys();
        for (const singleUser of userBanned) {
          const data = (await Users.getData(singleUser)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(singleUser, { data });
          global.data.userBanned.delete(singleUser, 1);
        }
        api.sendMessage("[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝘂𝘀𝗲𝗿 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝗿𝘃𝗲𝗿 👨‍👩‍👧‍👦", threadID, messageID)
        break;
      }

    case 'qtvall':
    case 'Qtvall':
    case 'allqtv':
      {
        var data = [];
        data = await Threads.getAll();

        for (let i = 0; i < data.length; i++) {
          const idAdmins = (data[i].threadInfo).adminIDs;
          for (let i = 0; i < idAdmins.length; i++) {
            const idad = idAdmins[i].id;

            const data = (await Users.getData(idad)).data || {};
            data.banned = 0;
            data.reason = null;
            data.dateAdded = null;
            await Users.setData(idad, { data });
            global.data.userBanned.delete(idad, 1);
          }
        }
        api.sendMessage('[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗤𝗧𝗩 𝗕𝗼𝘅 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝗿𝘃𝗲𝗿 👀', threadID, messageID);
        break;
      }

    case 'qtv':
    case 'Qtv':
      {
        //var threadInfo = await api.getThreadInfo(event.threadID);
        var threadInfo = (await Threads.getData(event.threadID)).threadInfo;
        var listQTV = threadInfo.adminIDs;
        for (let i = 0; i < listQTV.length; i++) {
          const idQtv = listQTV[i].id;
          const data = (await Users.getData(idQtv)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(idQtv, { data });
          global.data.userBanned.delete(idQtv, 1);
        }
        api.sendMessage("[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗤𝗧𝗩 𝗕𝗼𝘅 𝗻𝗮̀𝘆 👀", threadID, messageID)
        break;
      }

    case 'member':
    case 'mb':
    case 'user':
      {
        if (!args[1]) {
         // var threadInfo = await api.getThreadInfo(event.threadID);
          //var threadInfo = (await Threads.getData(event.threadID)).threadInfo;
          var listMember = event.participantIDs;
          for (let i = 0; i < listMember.length; i++) {
            const idMember = listMember[i];
            const data = (await Users.getData(idMember)).data || {};
            data.banned = 0;
            data.reason = null;
            data.dateAdded = null;
            await Users.setData(idMember, { data });
            global.data.userBanned.delete(idMember, 1);
          }
          return api.sendMessage("[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗕𝗼𝘅 𝗻𝗮̀𝘆 😽", threadID, messageID);
        }
        if (args.join().indexOf('@') !== -1) {
          var mentions = Object.keys(event.mentions)
          var userID = (await Users.getData(mentions)).userID;
          var nameUser = (await Users.getData(mentions)).name;
          const data = (await Users.getData(userID)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(userID, { data });
          global.data.userBanned.delete(userID, 1);
          return api.sendMessage(`[ 𝐔𝐍𝐁𝐀𝐍 ] - 𝗚𝗼̛̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 ${nameUser} 😽`, threadID, messageID)
        }
        break;
      }

    default:
      api.sendMessage(`==== [ 𝐔𝐍𝐁𝐀𝐍 ] ====\n\n${prefix}${this.config.name} 𝗮𝗱𝗺𝗶𝗻 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n${prefix}${this.config.name} 𝗮𝗹𝗹𝗯𝗼𝘅 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝘃𝗲𝗿\n${prefix}${this.config.name} 𝗯𝗼𝘅 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝗻𝗵𝗼́𝗺 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 [𝟭 𝗻𝗵𝗼́𝗺 ]\n${prefix}${this.config.name} 𝗮𝗹𝗹𝘂𝘀𝗲𝗿 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝘃𝗲𝗿\n${prefix}${this.config.name} 𝗮𝗹𝗹𝗾𝘁𝘃 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗤𝗧𝗩 𝗕𝗼𝘅 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝘃𝗲𝗿\n${prefix}${this.config.name} 𝗾𝘁𝘃 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗤𝗧𝗩 𝗕𝗼𝘅 [𝟭 𝗯𝗼𝘅 ]\n${prefix}${this.config.name} 𝗺𝗲𝗺𝗯𝗲𝗿 => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 [𝟭 𝗻𝗵𝗼́𝗺 ]\n${prefix}${this.config.name} 𝗺𝗲𝗺𝗯𝗲𝗿 @[𝘁𝗮𝗴] => 𝗴𝗼̛̃ 𝗯𝗮𝗻 𝗰𝗵𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗮̣𝗻 𝘁𝗮𝗴`, threadID, messageID);
      break;
  }
}