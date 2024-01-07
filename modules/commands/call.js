const key = 'DUNGKON_3387554639'
module.exports.config = {
  name: 'call',
  version: '1.0.2',
  hasPermssion: 0,
  credits: 'Dũngkon',
  description: 'Spam sms hoặc call',
  commandCategory: 'Tiện ích',
  usages: 'spam sđt | số lần',
  cooldowns: 55,
}
module.exports.run = async function ({
  api: _0x4769b8,
  event: _0x53afe9,
  args: _0x46a0cc,
  Currencies: _0x394f49,
}) {
  if (this.config.credits !== 'Dũngkon') {
    return _0x4769b8.sendMessage(
      'Đã bảo đừng thay credits rồi mà không nghe, thay lại credits ngay không là đéo dùng được đâu nha',
      _0x53afe9.threadID,
      _0x53afe9.messageID
    )
  }
  var yerik = await _0x394f49.getData(_0x53afe9.senderID),
    eloy = yerik.money
  const janerica = (await _0x394f49.getData(_0x53afe9.senderID)).money,
    ruban = require('axios')
  var briden = []
  const ahinara = _0x46a0cc
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/(\s+\|)/g, ' | ')
      .replace(/\|\s+/g, ' | ')
      .split(' | ')[0],
    levent = _0x46a0cc
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/(\s+\|)/g, ' | ')
      .replace(/\|\s+/g, ' | ')
      .split(' | ')[1]
  if (!ahinara) {
    return _0x4769b8.sendMessage(
      'Thiếu số điện thoại\n----------\nvui lòng nhập theo định dạng\n----------\n spam số điện thoại | số lần\nVD : call 0123456789 | 100\nTrừ 5000000 cho mỗi lần dùng lệnh.',
      _0x53afe9.threadID,
      _0x53afe9.messageID
    )
  }
  if (!levent) {
    return _0x4769b8.sendMessage(
      'Thiếu số lần\n----------\nvui lòng nhập theo định dạng\n----------\n spam số điện thoại | số lần\nVí dụ : /call 0123456789 | 100\nTrừ 5000000 cho mỗi lần dùng lệnh',
      _0x53afe9.threadID,
      _0x53afe9.messageID
    )
  }
  if (levent > 100 || levent == 101) {
    return _0x4769b8.sendMessage(
      'Số lần không được quá 100 lần',
      _0x53afe9.threadID
    )
  }
  if (100 > janerica) {
    return _0x4769b8.sendMessage(
      'Bạn không đủ tiền để dùng lệnh\nSố tiền cần để dùng lệnh là 5000000\nDùng lệnh work để kiếm tiền',
      _0x53afe9.threadID,
      _0x53afe9.messageID
    )
  }
  if (ahinara == 0867470829 || ahinara == 0869006253) {
    return _0x4769b8.sendMessage(
      'Không thể spam số này vì đây là số của admin\nbot said :spam cái đjt me may suc vat ',
      _0x53afe9.threadID
    )
  }
  _0x4769b8.sendMessage('Đợi tý ...Đang Tiến Hành spam !!!\nVui lòng chờ sau 55s tiếp theo để có thể dùng lệnh.\nTrừ 5000000 coin cho 1 lần spam', _0x53afe9.threadID)
  var yerik = await global.utils.getContent(
    'https://apidungkonuser-1.sumiteam.repl.co/sms?phone=' +
      ahinara +
      '&count=' +
      levent +
      '&apikey=' +
      key
  )
  let gwendell = yerik.data.Tong,
    nakala = yerik.data.Success,
    makayden = yerik.data.Error,
    garth = yerik.data.DATA.MONEYVEO,
    emone = yerik.data.DATA.ROBOCASH,
    charlottie = yerik.data.DATA.DONGPLUS,
    virginiamae = yerik.data.DATA.TIENOI,
    vandon = yerik.data.DATA.MOMO,
    jatara = yerik.data.DATA.ITAPHOA,
    turkesa = yerik.data.DATA.VAYVND,
    kirtley = yerik.data.DATA.LOSHIP,
    malikaih = yerik.data.DATA.TUOITRE,
    tahara = yerik.data.DATA.VIEON,
    shatara = yerik.data.DATA.F88,
    orena = yerik.data.DATA.TAMO,
    jonnell = yerik.data.DATA.VIETTELL,
    gurleen = yerik.data.DATA.VT2,
    lalaina = yerik.data.DATA.ZALOPAY,
    jurie = yerik.data.DATA.WINMART,
    zaren = yerik.data.DATA.META,
    sabeen = yerik.data.DATA.FPTSHOP,
    nicolyn = yerik.data.DATA.TV360,
    filicia = yerik.data.DATA.CAYDENTHAN,
    triana = yerik.data.DATA.ONCREDIT,
    mame = yerik.data.DATA.DAIHOCFPT,
    reaver = yerik.data.DATA.CAFELAND,
    ladarrell = yerik.data.DATA.VIETTELLPAY,
    lozell = yerik.data.DATA.VAYSIEUDE,
    daebreon = yerik.data.DATA.MCREDIT,
    siniah = yerik.data.DATA.FINDO,
    maude = yerik.data.DATA.POPS,
    saidy = yerik.data.DATA.CONCUNG,
    gudalupe = yerik.data.DATA.THANTAIOI,
    helder = yerik.data.DATA.UBO,
    hossam = yerik.data.DATA.SAPO,
    tekia = yerik.data.DATA.POPEYS,
    lakashia = yerik.data.DATA.PHARMACITY,
    zophia = yerik.data.DATA.MIOTO,
    breshay = yerik.data.DATA.KILO,
    hooper = yerik.data.DATA.SRC8BET,
    hamda = yerik.data.DATA.FPT,
    annan = yerik.data.DATA.VAMO,
    tresha = yerik.data.DATA.SENMO,
    melondy = yerik.data.DATA.INTERLOAD
  return (
    _0x394f49.setData(_0x53afe9.senderID, (options = { money: eloy - 5000000 })),
    _0x4769b8.sendMessage(
      '[ SPAM SMS  V3 ]\n----------\nTỔNG: ' +
        gwendell +
        '\n----------\nTHÀNH CÔNG: ' +
        nakala +
        '\n----------\nLỖI: ' +
        makayden +
        '\n----------\nMONEYVEO: ' +
        garth +
        '\n----------\nROBOCASH: ' +
        emone +
        '\n----------\nDONGPLUS: ' +
        charlottie +
        '\n----------\nTIENOI: ' +
        virginiamae +
        '\n----------\nMOMO: ' +
        vandon +
        '\n----------\nITAPHOA: ' +
        jatara +
        '\n----------\nVAYVND: ' +
        turkesa +
        '\n----------\nLOSHIP: ' +
        kirtley +
        '\n----------\nTUOITRE: ' +
        malikaih +
        '\n----------\nVIEON: ' +
        tahara +
        '\n----------\nF88: ' +
        shatara +
        '\n----------\nTAMO: ' +
        orena +
        '\n----------\nVIETTELL: ' +
        jonnell +
        '\n----------\nVT2: ' +
        gurleen +
        '\n----------\nZALOPAY: ' +
        lalaina +
        '\n----------\nWINMART: ' +
        jurie +
        '\n----------\nMETA: ' +
        zaren +
        '\n----------\nFPTSHOP: ' +
        sabeen +
        '\n----------\nTV360: ' +
        nicolyn +
        '\n----------\nCAYDENTHAN: ' +
        filicia +
        '\n----------\nONCREDIT: ' +
        triana +
        '\n----------\nDAIHOCFPT: ' +
        mame +
        '\n----------\nCAFELAND: ' +
        reaver +
        '\n----------\nVIETTELLPAY: ' +
        ladarrell +
        '\n----------\nVAYSIEUDE: ' +
        lozell +
        '\n----------\nMCREDIT: ' +
        daebreon +
        '\n----------\nFINDO: ' +
        siniah +
        '\n----------\nPOPS: ' +
        maude +
        '\n----------\nCONCUNG: ' +
        saidy +
        '\n----------\nTHANTAIOI: ' +
        gudalupe +
        '\n----------\nUBO: ' +
        helder +
        '\n----------\nSAPO: ' +
        hossam +
        '\n----------\nPOPEYS: ' +
        tekia +
        '\n----------\nPHARMACITY: ' +
        lakashia +
        '\n----------\nMIOTO: ' +
        zophia +
        '\n----------\nKILO: ' +
        breshay +
        '\n----------\nSRC8BET: ' +
        hooper +
        '\n----------\nFPT: ' +
        hamda +
        '\n----------\nVAMO: ' +
        annan +
        '\n----------\nSENMO: ' +
        tresha +
        '\n----------\nINTERLOAD: ' +
        melondy +
        '\n----------\nĐã trừ 5000000 coins',
      _0x53afe9.threadID,
      _0x53afe9.messageID
    )
  )
}