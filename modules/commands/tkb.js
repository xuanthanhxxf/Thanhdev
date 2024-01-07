let moment = require('moment-timezone');

let is_time_in_ranges = (time = moment.tz("Asia/Ho_Chi_Minh").format('HH:mm:ss'), range, format = 'HH:mm:ss')=>moment(time, format).isBetween(moment(range.start, format), moment(range.end, format));

module.exports.config = {
  name: "tkb",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "",
  description: "Thời khóa biểu",
  commandCategory: "Xem thời khóa biểu",
  usages: "/tkb",
  usePrefix: false,
  cooldowns: 3,
};

module.exports.run = async function({api, event, args}) {const permission = ["100071768980176","uid2"];
if (!permission.includes(event.senderID)) return api.sendMessage("Xin lỗi bạn \n Cần mua key để làm tkb .", event.threadID, event.messageID);
  const axios = require("axios")
  const link = (url) => axios.get(url, { responseType: "stream", }).then((r) => r.data);
  if (args[0] == 'chính') {
    return api.sendMessage({body: 'Thời Khóa Biểu',attachment: await link('https://i.imgur.com/x1UgEUs.png')},event.threadID)
  }
  var timeRanges = [
  { start: '00:00:00', end: '06:50:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], text: 'Nghỉ' },
  { start: '06:50:00', end: '07:00:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], text: 'Truy Bài' },
  { start: '07:45:00', end: '07:50:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], text: 'Chuyển Tiết' },
  { start: '08:35:00', end: '08:55:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], text: 'Ra Chơi' },
  { start: '09:40:00', end: '09:45:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], text: 'Chuyển Tiết' },
  { start: '10:30:00', end: '13:25:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday'], text: 'Nghỉ' },
  { start: '13:25:00', end: '13:30:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday'], text: 'Truy Bài' },
  { start: '16:50:00', end: '23:59:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday'], text: 'Nghỉ' },
  { start: '11:25:00', end: '23:59:59', day: 'Saturday', text: 'Nghỉ' },
  { start: '10:30:00', end: '10:40:00', day: 'Saturday', text: 'Ra Chơi' },
  { start: '15:00:00', end: '15:20:00', day: ['Monday','Tuesday','Wednesday','Thursday','Friday'], text: 'Ra Chơi' },
  //Thứ 2
  { start: '07:00:00', end: '07:45:00', day: 'Monday', text: 'Chào Cờ' },
  { start: '07:50:00', end: '08:35:00', day: 'Monday', text: 'Sinh Hoạt Lớp' },
  { start: '08:55:00', end: '09:40:00', day: 'Monday', text: 'Hóa Học' },
  { start: '09:45:00', end: '10:30:00', day: 'Monday', text: 'Công Nghệ' },
  { start: '13:30:00', end: '14:15:00', day: 'Monday', text: 'Vật Lý' },
  { start: '14:15:00', end: '15:00:00', day: 'Monday', text: 'Quốc Phòng' },
  { start: '15:20:00', end: '16:05:00', day: 'Monday', text: 'Toán' },
  { start: '16:05:00', end: '16:50:00', day: 'Monday', text: 'Hướng Nghiệp' },
  //Thứ 3
  { start: '07:00:00', end: '07:45:00', day: 'Tuesday', text: 'Lịch Sử' },
  { start: '07:50:00', end: '08:35:00', day: 'Tuesday', text: 'Lịch Sử' },
  { start: '08:55:00', end: '09:40:00', day: 'Tuesday', text: 'Tiếng Anh' },
  { start: '09:45:00', end: '10:30:00', day: 'Tuesday', text: 'Tiếng Anh' },
  { start: '13:30:00', end: '14:15:00', day: 'Tuesday', text: 'Ngữ Văn' },
  { start: '14:15:00', end: '15:00:00', day: 'Tuesday', text: 'Ngữ Văn' },
  { start: '15:20:00', end: '16:05:00', day: 'Tuesday', text: 'Toán' },
  { start: '16:05:00', end: '16:50:00', day: 'Tuesday', text: 'Toán' },
  //Thứ 4
  { start: '07:00:00', end: '07:45:00', day: 'Wednesday', text: 'Toán' },
  { start: '07:50:00', end: '08:35:00', day: 'Wednesday', text: 'Toán' },
  { start: '08:55:00', end: '09:40:00', day: 'Wednesday', text: 'Tin Học' },
  { start: '09:45:00', end: '10:30:00', day: 'Wednesday', text: 'Tin Học' },
  { start: '13:30:00', end: '14:15:00', day: 'Wednesday', text: 'Thể Dục' },
  { start: '14:15:00', end: '15:00:00', day: 'Wednesday', text: 'Thể Dục' },
  { start: '15:20:00', end: '16:05:00', day: 'Wednesday', text: 'Toán' },
  { start: '16:05:00', end: '16:50:00', day: 'Wednesday', text: 'Toán' },
  //Thứ 5
  { start: '07:00:00', end: '07:45:00', day: 'Thursday', text: 'Công Dân' },
  { start: '07:50:00', end: '08:35:00', day: 'Thursday', text: 'Hóa Học' },
  { start: '08:55:00', end: '09:40:00', day: 'Thursday', text: 'Sinh Học' },
  { start: '09:45:00', end: '10:30:00', day: 'Thursday', text: 'Vật Lý' },
  { start: '13:30:00', end: '14:15:00', day: 'Thursday', text: 'Công Dân' },
  { start: '14:15:00', end: '15:00:00', day: 'Thursday', text: 'Công Dân' },
  { start: '15:20:00', end: '16:05:00', day: 'Thursday', text: 'Lịch Sử' },
  { start: '16:05:00', end: '16:50:00', day: 'Thursday', text: 'Lịch Sử' },
  //Thứ 6
  { start: '07:00:00', end: '07:45:00', day: 'Friday', text: 'Tiếng Anh' },
  { start: '07:50:00', end: '08:35:00', day: 'Friday', text: 'Tiếng Anh' },
  { start: '08:55:00', end: '09:40:00', day: 'Friday', text: 'Ngữ Văn' },
  { start: '09:45:00', end: '10:30:00', day: 'Friday', text: 'Ngữ Văn' },
  { start: '13:30:00', end: '14:15:00', day: 'Friday', text: 'Địa Lý' },
  { start: '14:15:00', end: '15:00:00', day: 'Friday', text: 'Địa Lý' },
  { start: '15:20:00', end: '16:05:00', day: 'Friday', text: 'Tiếng Anh' },
  { start: '16:05:00', end: '16:50:00', day: 'Friday', text: 'Tiếng Anh' },
  //Thứ 7
  { start: '07:00:00', end: '07:45:00', day: 'Saturday', text: 'Toán' },
  { start: '07:50:00', end: '08:35:00', day: 'Saturday', text: 'Toán' },
  { start: '08:55:00', end: '09:40:00', day: 'Saturday', text: 'Địa Lý' },
  { start: '09:45:00', end: '10:30:00', day: 'Saturday', text: 'Địa Lý' },
  { start: '10:40:00', end: '11:25:00', day: 'Saturday', text: 'Ngữ Văn' },
  //Chủ Nhật
  { start: '00:00:00', end: '23:59:59', day: 'Sunday', text: 'Nghỉ' },
];
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var dddd = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var thu;
  if (dddd == 'Sunday') thu = 'Chủ Nhật'
  if (dddd == 'Monday') thu = 'Thứ Hai'
  if (dddd == 'Tuesday') thu = 'Thứ Ba'
  if (dddd == 'Wednesday') thu = 'Thứ Tư'
  if (dddd == 'Thursday') thu = 'Thứ Năm'
  if (dddd == 'Friday') thu = 'Thứ Sáu'
  if (dddd == 'Saturday') thu = 'Thứ Bảy' 
  const time = moment.tz("Asia/Ho_Chi_Minh").format('HH:mm:ss');
  for (const range of timeRanges) for (let day of typeof range.day == 'string'?[range.day]:range.day)if (dddd == day && is_time_in_ranges(gio, range))api.sendMessage({body:`
➩ Hiện tại là ${thu} lúc ${gio}
➩ Thời khóa biểu : ${range.text}
➩ Trong khoảng : ${thu}, ${range.start} đến ${range.end.replace('23:59:59','00:00:00')}`
  ,attachment: await link(
range.text == 'Vật Lý'       ? 'https://i.imgur.com/niKxegp.jpg' :
range.text == 'Toán'         ? 'https://i.imgur.com/4l8lqqI.jpg' :
range.text == 'Chào Cờ'      ? 'https://i.imgur.com/UpgDqPO.jpg' :
range.text == 'Ra Chơi'      ? 'https://i.imgur.com/aoAC4oU.jpg' :
range.text == 'Giải Lao'     ? 'https://i.imgur.com/4t3Dgdb.jpg' :
range.text == 'Truy Bài'     ? 'https://i.imgur.com/DYBcvCQ.jpg' :
range.text == 'Ngữ Văn'      ? 'https://i.imgur.com/fOAzlaN.jpg' :
range.text == 'Sinh Hoạt'    ? 'https://i.imgur.com/wH6v7Bz.jpg' :
range.text == 'Hóa Học'      ? 'https://i.imgur.com/MsXBuE0.jpg' :
range.text == 'Công Nghệ'    ? 'https://i.imgur.com/kniutfc.jpg' :
range.text == 'Hướng Nghiệp' ? 'https://i.imgur.com/FPdxR0D.jpg' :
range.text == 'Quốc Phòng'   ? 'https://i.imgur.com/FYaoC6T.jpg' :
range.text == 'Lịch Sử'      ? 'https://i.imgur.com/6Hpavyw.jpg' :
range.text == 'Tiếng Anh'    ? 'https://i.imgur.com/fvhyo8v.jpg' :
range.text == 'Công Dân'     ? 'https://i.imgur.com/KFGNMfz.jpg' :
range.text == 'Địa Lý'       ? 'https://i.imgur.com/LEDFoB5.jpg' :
range.text == 'Thể Dục'      ? 'https://i.imgur.com/tJd6RjC.jpg' :
range.text == 'Tin Học'      ? 'https://i.imgur.com/5QR1aYj.jpg' :
range.text == 'Sinh Học'     ? 'https://i.imgur.com/8Pj5sfY.jpg' :
                               'https://i.imgur.com/KSfXQgm.jpg')},event.threadID);
}