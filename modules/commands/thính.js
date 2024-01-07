
module.exports.config = {
    name: "thính",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "TuanDz",
    description: "Thả thính người bạn tag",
    commandCategory: "Thả Thính",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",

        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",

        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",

        "Anh yêu ơi ới ời. Anh đang ở đâu?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",

        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",

        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",

        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",

        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",

        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",

        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",

        "Trời đổ mưa rồi sao anh chưa đổ em?.",

        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",

        "Anh ơi, có nóng không? Tim em đang cháy nè.",

        "Anh gì ơi ! Anh đánh rơi người yêu này.",

        "Sao anh cười mãi thế. Da em đen mất rồi.",

        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",

        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",

        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",

        "Em thích anh còn nhiều hơn muối ở biển…",

        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",

        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",

        "Em xinh tươi, nhưng em chưa thuộc về ai.",

        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",

        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",

        "Nếu có thể hãy để em một lần được yêu anh, được không?.",

        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",

        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",

        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",

        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",

        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",

        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",

        "Cần ai đó quan tâm để thấy mình được yêu thương.",

        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",

        "Say rượu say bia làm gì? Anh say em đi này.",

        "Thách ai nói yêu em đấy.",

        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 500 like, bụng em lại lành!.",

        "Lâu rồi chưa biết cảm giác được đi ăn đi xem phim như thế nào, bài vở nhiều quá. Hôm nay rảnh có ai mời không nhỉ?.",

        "Rảnh quá có ai muốn đi chơi với mình không …",

        "Này anh, anh xem hộ em xem trong mắt em có gì hộ cái. Thấy chưa, toàn là hình bóng anh đấy!.",

        "Anh biết nhiều về Thuốc Mê không? Còn em gói gọn lại đó là anh.",

        "Anh có thấy dạo này da em đen không? Vì mải nhìn nụ cười Toả Nắng của anh đấy.",

        "Xin lỗi anh gì ơi anh đi đứng kiểu gì thế ngã vào trái tim em rồi kìa!.",

        "Anh có biết cài Win không ạ? Cài hộ em cái hệ điều hành nào mà có giao diện chính là Anh được không!.",

        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!.",

        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",

        "Anh biết sửa Tivi không. Sao kênh nào cũng chiếu toàn những nhung nhớ về anh thế này!.",

        "Anh ơi anh có hiểu rõ đường đi lối lại ở đây không. Chỉ hộ em xem đi đường nào để thoát khỏi nỗi nhớ anh cái!.",

        "Này anh gì ơi, anh có Anh hay Em Trai gì không? Em không tin là trên đời này có tận 2 thiên thần đâu!",

        "Ai dám nói nơi hạnh phúc nhất là thiên đường. Người đó chắc hẳn không biết đến khoảnh khắc mỗi khi anh cười rồi!.",

        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?.",

        "Anh có thể cho em mượn một nụ hôn được không? Em hứa là sẽ trả lại đầy đủ."
    ];
    const trai = ["Em có muốn con mình sau này có ADN của anh không?.",

        "Anh cho phép em ở mãi trong trái tim anh đấy.",

        "Cái gì đầy trong mắt em đó? Hình như là anh.",

        "Số trời đã định, không phải lòng em, chắc chắn anh sẽ ế.",

        "Nhà em có bán rượu không mà sao nói chuyện với em làm anh cứ chếnh choáng? Chàng trai này thật bá đạo. Một cách thả thính gây ấn tượng mạnh đấy.",

        "Có rất nhiều cách để hạnh phúc. Nhanh nhất chính là nhìn thấy em.",

        "Hãy để một lần cho anh được yêu em.",

        "Hôm nay 14 tháng 3, mà sao chưa ai tặng quà anh nhỉ?.",

        "Trong tim em có chỗ nào cho anh không?.",

        "Vận tốc trái tim nhanh không em nhỉ? Để anh tính quãng đường đi đến trái tim em..",

        "Mây là của trời, em là của anh (tag tên chính chủ vào) Khẳng định chủ quyền rồi nhé. Nếu được tag tên mình vào thì từ nay cấm đi thả thính lung tung nhá.",

        "Ngoài kia đám cưới linh đình. Bao giờ thì đến lượt mình em ơi.",

        "Tay anh đây ấm lắm, em muốn nắm thử không?.",

        "1, 2, 3, 5 em có đánh rơi nhịp nào không?.",

        "Em xinh đẹp ơi, làm con dâu mẹ anh không?.",

        "Cần lắm một em gái mưa!.",

        "Giá có em người yêu để cùng khám phá thế giới.",

        "Mình cũng đẹp trai, sao chả ai để ý?.",

        "Đông về tay anh lạnh lắm, nhưng anh vẫn sẵn lòng sưởi ấm tay em.",

        "Mọi người đều yêu cái đẹp, nên anh yêu em.",

        "Bão to, cây đổ. Sao em chưa đổ anh?.",

        "Bố em có phải là một thợ kim hoàn không? Sao em giống viên kim cương vậy?.",

        "Với thế giới thì em chỉ là một người. Còn với anh, em là cả thế giới.",

        "Bố em có phải là tên trộm không? Sao có thể trộm vì sao và gắn vào mắt em như thế?.",

        "Anh như thế này, đã đủ tiêu chuẩn làm bạn trai em chưa?.",

        "Em có muốn làm Mặt Trời duy nhất của anh không?",

        "Này em ơi, mẹ anh đang gọi con dâu kìa.",

        "Giờ nếu có cô gái nào nguyện bên anh, anh sẽ khiến cô ấy hạnh phúc mãi về sau.",

        "Chỉ cần em yêu anh thôi, còn cả thế giới cứ để anh lo.",

        "Cuộc đời này chắc chắn không như ý anh muốn, vậy em sẽ như ý anh muốn.",

        "Em có thể đưa anh đến tiệm bánh được không? Vì anh cũng muốn có một chiếc bánh Cutie giống như em vậy.",

        "Cho anh hỏi em một chút được không?…. Anh trông em rất là quen….Anh nghĩ là? Mình có biết nhau không?(Chém với gái lạ thì chắc chắn sẽ bảo không rồi)….Thế à. Trông em rất giống người yêu tương lai của anh. ?.",

        "Anh là…. Còn em tên gì? (Em tên Quỳnh Anh) Quỳnh Anh Cái tên là là đẹp nhưng mà về sau anh sẽ không đặt tên con gái mình là Quỳnh Anh vì suốt ngày phải lên bảng.",

        "Anh muốn hỏi em một câu này,…thực ra đấy không phải là một câu hỏi. Anh chỉ muốn nói là… Nếu như mà em là CocaCola thì anh sẽ là Pepsi! (Nghĩa là chúng ta là một cặp đồ uống đẹp đôi).",

        "Chán thả thính rồi, ai cưa đi để anh đổ thử một lần.",

        "Anh cá với em rằng em là tay trộm chuyên nghiệp. Bởi vì anh mới nhìn thấy em ở đây và trong nháy mắt là em đã đánh cắp trái tim của anh rồi.",
    
        "Ngày đó trời mưa lớn lắm, anh gặp được em, em không thấy anh, anh không thấy mưa.",

        "Đố em một con gấu bắc cực nặng bao nhiêu kg? (Thường thì các cô gái sẽ trả lời không) Đáp: Anh cũng không biết nhưng anh biết con gấu bắc cực đủ nặng để phá vỡ tảng băng giữa chúng ta.",

        "Nếu mỗi lần nhớ tới em anh được 500 đồng chắc giờ này anh đã vượt xa Bill Gates.",

        "Em có biết rằng anh nhớ em nhiều lắm không? Anh ăn không ngon nhưng ngủ như điên, anh đi giầy quên đi tất, ăn sáng quên đánh răng, anh dùng xăng vo gạo, anh khờ khạo cũng chỉ vì yêu em đó.",

        "Em ơi! Em là nghề gì đấy….? Sao đêm nào em cũng hiện lên trong giấc mơ của anh vậy? Anh chẳng biết làm thế nào nữa cả. Làm người yêu anh em nhé!.",

        "Em ơi ! Khi em đọc tin nhắn này, em nợ anh cuộc hẹn. Xóa tin nhắn này, em nợ anh cuộc tình. Lưu tin là em nợ anh 1 nụ hôn. Trả lời anh, em nợ anh tất cả. Còn nếu em không trả lời thì em đã yêu anh !!! hihi.",

        "Ðiều duy nhất đôi mắt em chưa nói cho anh biết là tên của em.",
                  
        "Anh thà được một lần ngửi được mùi tóc thơm của em. Anh thà được mộ lần xiết chặt bàn tay của em, anh thà được một lần nếm hương vị ngọt từ nụ hôn của em còn hơn là sống bất tử mà không được điều ấy.",
                  
        "Chứng nghiện thức đêm cùng nỗi nhớ em, anh đã cố nhưng sửa không được.",
                  
        "Anh muốn gửi tin nhắn này đến em hôm nay vì hôm nay anh cảm thấy yêu em nhiều đến bất thường.",
        
        " Anh ghét em lắm em biết không? Vì suốt ngày em cứ bay lượn trong đầu anh, làm anh khôn nghĩ được việc gì cả…huhu.",

        "Giá em mở hiệu cầm đồ\nHôm nào anh đến giả vờ cầm tay",

        "Muốn thấy cọp thì vào sở thú\nMuốn tìm chỗ trú thì vào tim anh.",

        "Thời tiết trái gió trở trời\nTrái tim lỡ nhịp cả đời thương em",

        "Em có thể cho anh mượn một nụ hôn được không? Anh hứa là sẽ trả lại đầy đủ.",

        "Mẹ mua cho con heo đất\nTiền anh đem cất, sau này cưới em",

        "Nhìn anh trông có đủ ngầu\nĐể em quên mối tình đầu hay chưa?",

        "Sáng nay ăn bát cháo lòng\nAnh ăn hết cháo, để lòng yêu em",

        "Em biết em và cái ly khác nhau ở điểm gì không?\nCái ly dễ vỡ, em thì dễ thương!",

        "Monday là thứ hai\nTuesday là thứ ba\nCòn bao giờ tôi mới được benemday?",

"Trời xanh mây trắng nắng vàng\nAnh thơm vào má của nàng được không?",

"Đen Vâu muốn trồng rau và nuôi thêm cá\nCòn anh lại muốn hỏi má để nuôi thêm em",

"Đậu hủ phải có mắm tôm\nYêu anh sẽ được anh ôm mỗi ngày.",

"Nếu em là nước mắt,\nAnh sẽ không bao giờ khóc vì sợ mất em.",

"Việc yêu em như việc thở,\nLàm sao anh có thể ngừng?",

"Em có cái bản đồ nào không?\nVì anh bị lạc đường trong đôi mắt em rồi.",

"Anh đang muốn thử cái gì ngọt ngọt,\nAnh có thể thử đôi môi của em không?",

"Một ngày không em là một ngày không có ánh mặt trời.",

"Vì em mà thực tại của anh đẹp hơn nhiều so với những giấc mơ.",

"Đôi môi em có vẻ cô đơn.\nKhông biết chúng có muốn gặp đôi môi của anh không?",

"Anh thu hút em như muối hút nước.",

"Anh nóng bỏng như thời tiết Hà Nội hôm nay.",

"Anh kết tủa trong tim em giống như BaS04 vậy!",

"Nắng nơi em nắng hoài không tắt\nYêu anh rồi yêu mãi không thôi.",

"Trái Đất quay quanh Mặt Trời\nCòn em thì quay mãi trong tâm trí anh.",

"Nghe nói anh có nhiều tâm sự\nThật tình cờ… em có cả vạn tâm tư!",

"Thay vì tặng anh một đóa hồng không héo\nHay là để em gửi anh một mối tình không phai!",

"Ngoài kia bão táp mưa sa\nBôn ba mệt quá về nhà với em",

"Trăng kia ai vẽ mà tròn\nLòng anh ai trộm mà hoài nhớ thương",

"Em vô tình dẫm lên bông hồng dại\nHoa chỉ buồn mà không nỡ giương gai",

"Mặt trời vừa lên hay là em mỉm cười với anh?",

"Thiếu 500 nghìn là em tròn một củ\nThiếu anh nữa là em đủ một đôi.",

"Cho anh một cốc trà đào\nTiện cho em hỏi lối vào tim anh!",

"Anh không thích ăn cơm với cá\nAnh thích được hôn má em thôi.",

"Gái quê chân chất thật thà\nNhìn xinh như vậy chắc là vợ anh.",

"Tháp Mười đẹp nhất bông sen\nTình anh đẹp nhất có thêm em vào.",

"Thuốc lá thì gây ung thư\nCòn em thì gây tương tư dài hạn.",

"Trăm năm hút cỏ hút cần\nKhông bằng một phút được gần bên em.",

"Cuộc sống thì giống cuộc đời\nCòn em thì giống bạn đời của anh.",

"Em ơi Trái Đất vẫn tròn\nDẫu trời có sập vẫn còn có anh.",

"Nếu anh là thuốc phiện, em sẽ nghiện hay là cai ?",

"Em yêu anh thì đừng có chối.\nMẹ anh bảo, nói dối là hư.",

"Họ hỏi anh thuốc phiện là gì?\nAnh kể cho họ về nụ cười của em.",

"Nếu yêu em là sai.\nAnh chấp nhận cuộc đời mình chưa bao giờ đúng.",

"Nếu 1 nụ cười có thể giết người\nThì em hẳn là là kẻ sát nhân hàng loạt.",

"Em là để ngắm, việc say đắm cứ để anh.",

"Mọi sông lớn đều chảy ra biển cả.\nAnh sẽ là sông nhỏ chảy ngược về phía em.",

"Em là ảo thuật gia à?\nMỗi lần anh nhìn em, tất cả mọi người xung quanh đều biến mất.",

"Gần mực thì đen, gần em thì hạnh phúc.",

"Đừng bao giờ chúc anh hạnh phúc.\nVì em chính là niềm hạnh phúc của anh.",

"Anh bàng hoàng nhận ra mình như kẻ thiếu muối,\nĐang đắm đuối yêu kẻ củ chuối là em.",

"Kể cả trái đất này là không trọng lực,\nAnh vẫn cứ “đổ” vì em.",

"Đôi mắt em còn xanh hơn cả Đại Tây Dương\nVà anh thì bị lạc trên biển cả mất rồi",

    ];
  var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`𝐆𝐮̛̉𝐢 𝐥𝐨̛̀𝐢 𝐭𝐡𝐚̉ 𝐭𝐡𝐢́𝐧𝐡 𝐠𝐚̣ 𝐜𝐡𝐢̣𝐜𝐡 𝐭𝐨̛́𝐢 ${event.mentions[mention].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`𝐆𝐮̛̉𝐢 𝐥𝐨̛̀𝐢 𝐭𝐡𝐚̉ 𝐭𝐡𝐢́𝐧𝐡 𝐠𝐚̣ 𝐜𝐡𝐢̣𝐜𝐡 𝐭𝐨̛́𝐢 ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
}