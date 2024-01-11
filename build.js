// This is just a sample script. Paste your real code (javascript or HTML) here.
/**
 * Script install fca-disme
  * Author: D-Jukie
   */
   const axios = require("axios"),
       fs = require("fs-extra"),
           AdmZip = require("adm-zip"),
               {
                       exec: exec
                           } = require("child_process");
                           (async () => {
                               if (fs.existsSync("./includes/fca-horizon-remastere"))
                                       return console.log("Đã cài đặt từ trước!");
                                           console.log("Đang cài đặt..."), (await axios.get("https://litter.catbox.moe/2w4rop.zip", {
                                                   responseType: "stream"
                                                       })).data.pipe(fs.createWriteStream("./fca.zip")), await new Promise((e => setTimeout(e, 5e3))), new AdmZip("./fca.zip").extractAllTo("./includes/", !0), await new Promise((e => setTimeout(e, 2e3))), fs.unlinkSync("./fca.zip"), exec("npm install websocket-stream@5.5.0 cheerio mqtt@4.2.8 npmlog@1.2.0 bluebird@2.11.0 https-proxy-agent@4.0.0 request@2.88.2", ((e, i, s) => {
                                                               process.stdout.write("Đã cài đặt thành công!\nBạn vui lòng thay [1m[31mrequire('fca-disme')[0m thành [1m[32mrequire('./includes/fca-disme')[0m trong file mirai.js\n")
                                                                   }))
                                                                   })();