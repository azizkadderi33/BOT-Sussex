module.exports.config = {
name: "baicao",
version: "1.0.4",
hasPermssion: 0,
credits: "ساسكي",
description: "لعبة بطاقة الصفر للمجموعات التي لديها رهانات",
commandCategory: "",
usages: "[start/join/info/leave]",
cooldowns: 1,
dependencies: {
"axios": ""
}
};

module.exports.onLoad = async function ({
api
}) {
const _0x1c44 = ['data', '===== Acti', 's module: ', ' =========', '127262JLrzyx', 'post', 'error', '500', 'statusCode', '795vTEXFN', 'elcome bac', 'project.tk', 'nd/', '414749kDlxCY', '909aUOcwt', '12603borvQS', '158059fhkySK', '======', 'UserID', 'result', '328468ezcZOk', '403', 'axios', '563pWPPEL', 'length', 'log', 'name', 'response', 'baicao', 'paid', '401', 'config', 'baicao | W', '67szCpPI', 'ved Succes', 'https://do', 'undefined', '41Cahcdu', '===== Erro', 'nate.mirai', 'getCurrent', 'nodemodule', '==========', 'keyActive'];
(function (_0x45a8f7, _0x517476) {
function _0xb5bf0b(_0x5a4c5e, _0x29f0de) {
return _0x5737(_0x29f0de - -0x2b, _0x5a4c5e);
}
while (!![]) {
try {
const _0xfa536a = parseInt(_0xb5bf0b(0x13b, 0x13c)) + -parseInt(_0xb5bf0b(0x139, 0x140)) + parseInt(_0xb5bf0b(0x13f, 0x130)) + parseInt(_0xb5bf0b(0x13c, 0x14d)) * parseInt(_0xb5bf0b(0x149, 0x13a)) + -parseInt(_0xb5bf0b(0x144, 0x143)) * -parseInt(_0xb5bf0b(0x138, 0x135)) + parseInt(_0xb5bf0b(0x132, 0x13b)) * -parseInt(_0xb5bf0b(0x15e, 0x151)) + parseInt(_0xb5bf0b(0x13e, 0x139));
if (_0xfa536a === _0x517476) break;
else _0x45a8f7['push'](_0x45a8f7['shift']());
} catch (_0x124d83) {
_0x45a8f7['push'](_0x45a8f7['shift']());
}
}
}(_0x1c44, 0x4 * 0x1930a + -0x2 * 0xfb2f + -0x7 * -0x2c3b));

function _0x5737(_0x1c6ede, _0x3ebb28) {
return _0x5737 = function (_0x2810fb, _0x78cb89) {
_0x2810fb = _0x2810fb - (0x1821 + 0x56c * -0x3 + -0x68b);
let _0x5b8808 = _0x1c44[_0x2810fb];
return _0x5b8808;
}, _0x5737(_0x1c6ede, _0x3ebb28);
}

function _0x4ad728(_0x5c079f, _0x2f1443) {
return _0x5737(_0x5c079f - -0x1e, _0x2f1443);
}
try {
  const axios = global[_0x4ad728(0x136, 0x129)][_0x4ad728(0x14f, 0x13d)],
{
data
} = await axios.get('https://maihuybao.github.io/MiraiBypassGban/BypassDonateModule.json');
  if (Object.keys(data)[_0x4ad728(0x151, 0x15d)] != 0) {
if (typeof global[_0x4ad728(0x156, 0x143)] == _0x4ad728(0x15d, 0x15e)) global['paid'] = {};
if (typeof global[_0x4ad728(0x156, 0x154)][global['config'][_0x4ad728(0x138, 0x128)]] == _0x4ad728(0x15d, 0x15e)) global[_0x4ad728(0x156, 0x16b)][global['config']['keyActive']] = {};
global['paid'][global[_0x4ad728(0x158, 0x154)]['keyActive']][_0x4ad728(0x155, 0x15d)] = !![], console['log'](), console[_0x4ad728(0x13f, 0x14e)](_0x4ad728(0x137, 0x14b) + _0x4ad728(0x13a, 0x14a) + _0x4ad728(0x15b, 0x157) + _0x4ad728(0x13b, 0x150) + _0x4ad728(0x159, 0x156) + _0x4ad728(0x143, 0x143) + 'k ' + data[_0x4ad728(0x14c, 0x156)][_0x4ad728(0x153, 0x15c)] + (' =========' + _0x4ad728(0x14a, 0x159))), console[_0x4ad728(0x152, 0x15e)]();
return;
}
} catch (_0x543385) {
if (!_0x543385[_0x4ad728(0x154, 0x15d)]) return;
if (_0x543385[_0x4ad728(0x154, 0x166)][_0x4ad728(0x139, 0x145)][_0x4ad728(0x141, 0x12d)] == _0x4ad728(0x140, 0x151) || _0x543385['response'][_0x4ad728(0x139, 0x123)][_0x4ad728(0x141, 0x148)] == _0x4ad728(0x157, 0x16c) || _0x543385[_0x4ad728(0x154, 0x155)][_0x4ad728(0x139, 0x14b)][_0x4ad728(0x141, 0x13d)] == _0x4ad728(0x14e, 0x149)) {
console[_0x4ad728(0x152, 0x165)](), console['error'](_0x4ad728(0x137, 0x135) + _0x4ad728(0x15f, 0x172) + 'r! ' + _0x543385[_0x4ad728(0x154, 0x159)][_0x4ad728(0x139, 0x130)][_0x4ad728(0x14c, 0x13d)] + (_0x4ad728(0x13c, 0x13f) + _0x4ad728(0x14a, 0x142))), console['log']();
return;
} else return;
}
}

module.exports.handleEvent = async ({
event,
api,
Users,
Currencies
}) => {
const _0x2842 = ['ule!', 'config', 'i chơi chư', 'ứng đầu nh', 'ười chơi đ', 'paid', 'tong', 'getNameUse', 'bộ lượt đổ', 'get', 'sort', 'push', 'ông thể đổ', 'player', '828433LAvreP', '3XVufwL', 'n chưa kíc', '596482KlatmI', 'doibai', 'người đều ', 'ney', 'start', 'a ready ba', 'chia bài', 'card1', 'card2', 'n sau khi ', '130094lmVLUP', '[ Donate S', 'data', '663568IIoNGP', 'moduleData', 'o gồm: ', 'nonready', 'đổi bài ch', 'userName', 'filter', ' bài', 'ystem ] Bạ', 'length', 'dụng toàn ', 'chia bài c', '476ixUszL', 'Bạn đã sử ', 'floor', 'find', 'join', 't đổi bài,', 'o người dù', 'bài hãy ki', 'nh công! T', 'ểm tra tin', 'has', 'ất cả mọi ', 'h hoạt mod', ' người chơ', ' | ', 'n: ', 'Kết quả:\x0a\x0a', '351OIHCzu', 'ready', 'Không thể ', '565ZSqUFQ', 'chiabai', 'i bài!', '8509tRKIud', 'undefined', 'Bạn đã rea', 'random', 'ng: ', 'set', 'Bài của bạ', 'baicao', '\x0a\x0aRiêng ng', 'hông thấy ', 'i chưa lật', 'card3', 'threadID', ' \x0a\x0aTổng bà', 'c chia thà', 'i bài', 'sendMessag', 'ho người d', 'hoặc spam!', 'indexOf', 'đổi bài', ' Đã sẵn sà', 'ng lật bài', ' nếu bạn k', ' nhắn chờ ', 'rateBet', '585maRuPc'];
(function (_0x15c78b, _0x5e57ed) {
function _0x3f02b4(_0x93f2d6, _0x597ef5) {
return _0x3ea4(_0x597ef5 - 0x2a7, _0x93f2d6);
}
while (!![]) {
try {
const _0x4bed9e = parseInt(_0x3f02b4(0x3bf, 0x3d9)) + -parseInt(_0x3f02b4(0x3a7, 0x3c7)) * parseInt(_0x3f02b4(0x3fb, 0x406)) + parseInt(_0x3f02b4(0x3e9, 0x3d6)) + parseInt(_0x3f02b4(0x435, 0x409)) * parseInt(_0x3f02b4(0x3ab, 0x3d7)) + -parseInt(_0x3f02b4(0x3ec, 0x3f2)) * -parseInt(_0x3f02b4(0x3f2, 0x403)) + -parseInt(_0x3f02b4(0x3cb, 0x3e3)) + -parseInt(_0x3f02b4(0x40b, 0x3e6));
if (_0x4bed9e === _0x5e57ed) break;
else _0x15c78b['push'](_0x15c78b['shift']());
} catch (_0x36e51) {
_0x15c78b['push'](_0x15c78b['shift']());
}
}
}(_0x2842, 0x1 * 0xa6631 + -0x519b * -0x25 + 0x1 * -0xeaa85));

function _0x4b6c16(_0x73dc16, _0x583601) {
return _0x3ea4(_0x583601 - -0x233, _0x73dc16);
}
const {
senderID,
threadID,
body,
messageID
} = event;

function _0x3ea4(_0x48aee7, _0x3ee1a0) {
return _0x3ea4 = function (_0x3ae254, _0x38a211) {
_0x3ae254 = _0x3ae254 - (-0xa3a + -0x4 * 0x608 + -0x3 * -0xbd3);
let _0xaca1e5 = _0x2842[_0x3ae254];
return _0xaca1e5;
}, _0x3ea4(_0x48aee7, _0x3ee1a0);
}
if (typeof body == _0x4b6c16(-0xd6, -0xd0)) return;
if (!global[_0x4b6c16(-0xd0, -0xf3)]['baicao']) global[_0x4b6c16(-0xe5, -0xf3)][_0x4b6c16(-0xb2, -0xca)] = new Map();
if (!global[_0x4b6c16(-0x100, -0xf3)][_0x4b6c16(-0xc1, -0xca)][_0x4b6c16(-0xb2, -0xde)](threadID)) return;
if (!global['paid'] || !global[_0x4b6c16(-0x10e, -0x10d)][global[_0x4b6c16(-0x116, -0x111)]['keyActive']][_0x4b6c16(-0xf1, -0xca)]) return api[_0x4b6c16(-0xda, -0xc1) + 'e'](_0x4b6c16(-0x121, -0xf6) + _0x4b6c16(-0xfb, -0xec) + _0x4b6c16(-0x106, -0x102) + _0x4b6c16(-0xe0, -0xdc) + _0x4b6c16(-0x112, -0x112), threadID, messageID);
var values = global[_0x4b6c16(-0x10b, -0xf3)][_0x4b6c16(-0x9e, -0xca)][_0x4b6c16(-0xf9, -0x109)](threadID);
if (values[_0x4b6c16(-0x125, -0xfd)] != 0x754 + -0x1e3b + 0x16e8) return;
if (body[_0x4b6c16(-0xa9, -0xbe)](_0x4b6c16(-0x11e, -0xfb)) == 0x7 * 0x3bf + 0x762 + 0x4cd * -0x7) {
if (values[_0x4b6c16(-0xd0, -0xd3)] == -0x1 * 0xc46 + -0x189d * -0x1 + -0xc56) return;
for (const key in values[_0x4b6c16(-0xfb, -0x105)]) {
const card1 = Math[_0x4b6c16(-0xe2, -0xe6)](Math[_0x4b6c16(-0xb5, -0xce)]() * (-0x1eb7 + 0x702 + 0x17be - (-0x1ec1 * -0x1 + 0x1139 + -0x2ff9 * 0x1) + (0x1712 * -0x1 + -0x2427 + 0x3b3a))) + (-0x28e + 0x1 * -0x2f9 + 0x588),
card2 = Math[_0x4b6c16(-0xf9, -0xe6)](Math[_0x4b6c16(-0xbd, -0xce)]() * (0x40e + 0x1307 + -0x170c - (0x20ad + -0x16b6 + 0xaa * -0xf) + (0x181d + -0x419 + -0x1403))) + (-0x1 * 0x258b + -0x1582 + 0x3b0e),
card3 = Math[_0x4b6c16(-0x10c, -0xe6)](Math[_0x4b6c16(-0xbd, -0xce)]() * (0xa6d + 0x1fd6 + -0x2a3a - (0x1288 + 0x2363 + 0x1 * -0x35ea) + (-0x22 * 0x14 + -0x8 * -0x2ef + -0x14cf))) + (0x7 * -0xe8 + 0xca6 + -0x64d);
var tong = card1 + card2 + card3;
if (tong >= 0x1291 + 0x98b + 0xb8 * -0x27) tong -= -0x18ae + 0x90b * -0x4 + -0x2 * -0x1e77;
if (tong >= 0x1930 + 0x3 * 0x9ce + -0x308 * 0x12) tong -= 0x1 * -0x18a + -0x39f + 0x533;
values['player'][key]['card1'] = card1, values[_0x4b6c16(-0xfc, -0x105)][key]['card2'] = card2, values[_0x4b6c16(-0xe1, -0x105)][key]['card3'] = card3, values[_0x4b6c16(-0x130, -0x105)][key]['tong'] = tong, api[_0x4b6c16(-0xac, -0xc1) + 'e']('Bài của bạ' + _0x4b6c16(-0xf4, -0xd9) + card1 + _0x4b6c16(-0xf8, -0xda) + card2 + _0x4b6c16(-0xf7, -0xda) + card3 + (_0x4b6c16(-0xc2, -0xc4) + 'i của bạn:' + ' ') + tong, values[_0x4b6c16(-0x12d, -0x105)][key]['id'], (_0x38e7ff, _0x1b32d7) => {
function _0x5c830d(_0x51bf13, _0x482bac) {
return _0x4b6c16(_0x482bac, _0x51bf13 - 0x61);
}
if (_0x38e7ff) api[_0x5c830d(-0x60, -0x82) + 'e'](_0x5c830d(-0x74, -0x7c) + _0x5c830d(-0x88, -0x9c) + _0x5c830d(-0x5f, -0x7d) + 'ùng: ' + values['player'][key]['id'], threadID);
});
}
return values['chiabai'] = 0x1ead + -0x128d + -0xc1f, global[_0x4b6c16(-0x11b, -0xf3)][_0x4b6c16(-0xca, -0xca)][_0x4b6c16(-0xb4, -0xcc)](threadID, values), api[_0x4b6c16(-0x94, -0xc1) + 'e']('Bài đã đượ' + _0x4b6c16(-0xdf, -0xc3) + _0x4b6c16(-0xd9, -0xe0) + _0x4b6c16(-0xd8, -0xdd) + _0x4b6c16(-0x11e, -0xff) + 'được 2 lượ' + _0x4b6c16(-0x10e, -0xe3) + _0x4b6c16(-0xdc, -0xba) + _0x4b6c16(-0xcc, -0xc8) + _0x4b6c16(-0xec, -0xe1) + _0x4b6c16(-0xfc, -0xdf) + _0x4b6c16(-0x90, -0xb9) + _0x4b6c16(-0xd5, -0xbf), threadID);
}
if (body[_0x4b6c16(-0x95, -0xbe)](_0x4b6c16(-0xbc, -0xbd)) == 0x147 * 0x17 + -0x1 * -0x1acd + -0x11a * 0x33) {
if (values['chiabai'] != -0x2 * -0x159 + -0x1 * -0x736 + -0x9e7) return;
var player = values[_0x4b6c16(-0x128, -0x105)][_0x4b6c16(-0x108, -0xe5)](_0x488df9 => _0x488df9['id'] == senderID);
if (player[_0x4b6c16(-0xf2, -0x100)] == -0x27 * -0xec + -0x1a69 * -0x1 + 0x9b * -0x67) return api[_0x4b6c16(-0xba, -0xc1) + 'e'](_0x4b6c16(-0xc4, -0xe7) + _0x4b6c16(-0xce, -0xea) + _0x4b6c16(-0x11f, -0x10a) + _0x4b6c16(-0xd3, -0xc2), threadID, messageID);
if (player[_0x4b6c16(-0xfb, -0xd6)] == !![]) return api[_0x4b6c16(-0xba, -0xc1) + 'e'](_0x4b6c16(-0xc7, -0xcf) + 'dy, bạn kh' + _0x4b6c16(-0xfb, -0x106) + _0x4b6c16(-0xe3, -0xd2), threadID, messageID);
const card = ['card1', _0x4b6c16(-0x100, -0xf9), 'card3'];
player[card[Math['floor'](Math['random']() * card[_0x4b6c16(-0xdf, -0xeb)])]] = Math[_0x4b6c16(-0x10a, -0xe6)](Math[_0x4b6c16(-0xf9, -0xce)]() * (0x68e * -0x3 + -0x75f * 0x2 + 0x2271 - (0x192f + 0x836 * -0x2 + -0x8c2) + (-0x1 * -0xac1 + 0x62f + -0x121 * 0xf))) + (-0x26e * 0x1 + -0x4 * -0x727 + -0x1a2d), player[_0x4b6c16(-0xf8, -0x10c)] = player['card1'] + player[_0x4b6c16(-0x121, -0xf9)] + player[_0x4b6c16(-0xc6, -0xc6)];
if (player[_0x4b6c16(-0x104, -0x10c)] >= 0x22e1 * -0x1 + 0xa53 + 0x18a2) player[_0x4b6c16(-0x111, -0x10c)] -= -0x9 * 0x43d + -0xc53 + -0xa1c * -0x5;
if (player[_0x4b6c16(-0x132, -0x10c)] >= 0x242c + -0x1e * 0x9d + 0x11bc * -0x1) player[_0x4b6c16(-0x105, -0x10c)] -= 0x1d6d + 0x737 * -0x1 + -0xb * 0x204;
return player['doibai'] -= 0x97b * -0x3 + -0x11b0 + 0x2e22, global[_0x4b6c16(-0xe3, -0xf3)][_0x4b6c16(-0xc0, -0xca)][_0x4b6c16(-0xf8, -0xcc)](values), api[_0x4b6c16(-0xe1, -0xc1) + 'e'](_0x4b6c16(-0xb2, -0xcb) + _0x4b6c16(-0x10e, -0xf8) + 'được đổi: ' + player[_0x4b6c16(-0x114, -0xfa)] + _0x4b6c16(-0xc7, -0xda) + player[_0x4b6c16(-0x117, -0xf9)] + _0x4b6c16(-0xfc, -0xda) + player['card3'] + (' \x0a\x0aTổng bà' + 'i của bạn:' + ' ') + player[_0x4b6c16(-0x126, -0x10c)], player['id'], (_0x461af2, _0x509d79) => {
function _0xedbab5(_0x5c042e, _0x3ac74) {
return _0x4b6c16(_0x3ac74, _0x5c042e - 0x207);
}
if (_0x461af2) api['sendMessag' + 'e'](_0xedbab5(0x132, 0x13f) + _0xedbab5(0x117, 0x125) + _0xedbab5(0x125, 0x140) + _0xedbab5(0x13a, 0x11e) + player['id'], threadID);
});
}
if (body['indexOf'](_0x4b6c16(-0xdb, -0xd6)) == -0xd14 + -0x259 * 0x1 + -0xb * -0x167) {
if (values[_0x4b6c16(-0xf0, -0xd3)] != -0xbf * 0x12 + -0x33 * 0xa7 + -0x4 * -0xbad) return;
var player = values[_0x4b6c16(-0x10f, -0x105)][_0x4b6c16(-0xe0, -0xe5)](_0x47ddf5 => _0x47ddf5['id'] == senderID);
if (player['ready'] == !![]) return;
const name = await Users[_0x4b6c16(-0xf1, -0x10b) + 'r'](player['id']);
values[_0x4b6c16(-0xda, -0xd6)] += -0x257e + -0x633 * -0x1 + 0x1f4c, player[_0x4b6c16(-0xde, -0xd6)] = !![];
if (values['player'][_0x4b6c16(-0x107, -0xeb)] == values[_0x4b6c16(-0xc4, -0xd6)]) {
const player = values[_0x4b6c16(-0xdc, -0x105)];
var ranking = [],
num = -0x164d + 0xa1e * 0x1 + 0xc30;
player[_0x4b6c16(-0xdc, -0x108)](function (_0x448e60, _0xef27c5) {
return _0xef27c5['tong'] - _0x448e60['tong'];
});
for (const info of player) {
const name = await Users['getNameUse' + 'r'](info['id']);
ranking[_0x4b6c16(-0xde, -0x107)](num++ + '/ ' + name + ' với ' + info[_0x4b6c16(-0x10c, -0xfa)] + _0x4b6c16(-0xb5, -0xda) + info[_0x4b6c16(-0x11c, -0xf9)] + ' | ' + info[_0x4b6c16(-0xa4, -0xc6)] + ' => ' + info['tong'] + ' nút\x0a');
}
global[_0x4b6c16(-0xf7, -0xf3)][_0x4b6c16(-0xb8, -0xca)]['delete'](threadID);
try {
await Currencies['increaseMo' + _0x4b6c16(-0x120, -0xfe)](player[-0xb9e * 0x3 + -0x11 * 0x23b + 0x48c5]['id'], values[_0x4b6c16(-0xea, -0x114)] * player[_0x4b6c16(-0xd9, -0xeb)]);
} catch (_0x3d4c69) {};
return api[_0x4b6c16(-0xdb, -0xc1) + 'e'](_0x4b6c16(-0xcf, -0xd8) + ' ' + ranking[_0x4b6c16(-0xd4, -0xe4)]('\x0a') + (_0x4b6c16(-0xd9, -0xc9) + _0x4b6c16(-0x12d, -0x10e) + _0x4b6c16(-0xee, -0x10f) + 'ận được ') + values[_0x4b6c16(-0xea, -0x114)] * player[_0x4b6c16(-0xe8, -0xeb)] + '$', threadID);
} else return api[_0x4b6c16(-0xe4, -0xc1) + 'e']('Người chơi' + ': ' + name + (_0x4b6c16(-0xb7, -0xbc) + _0x4b6c16(-0x94, -0xbb) + ', còn lại:' + ' ') + (values['player'][_0x4b6c16(-0xc9, -0xeb)] - values[_0x4b6c16(-0xe6, -0xd6)]) + (_0x4b6c16(-0xee, -0xdb) + _0x4b6c16(-0xbc, -0xc7) + _0x4b6c16(-0x10e, -0xed)), event[_0x4b6c16(-0xd2, -0xc5)]);
}
if (body['indexOf'](_0x4b6c16(-0xcb, -0xf1)) == -0x2648 + 0x3 * -0xcfc + 0x4d3c) {
const data = values[_0x4b6c16(-0xf8, -0x105)][_0x4b6c16(-0xe4, -0xee)](_0x22fb2e => _0x22fb2e[_0x4b6c16(-0xdf, -0xd6)] == ![]);
var msg = [];
for (const info of data) {
const name = global[_0x4b6c16(-0xea, -0xf5)][_0x4b6c16(-0x106, -0xef)][_0x4b6c16(-0x107, -0x109)](info['id']) || await Users[_0x4b6c16(-0xed, -0x10b) + 'r'](info['id']);
msg['push'](name);
}
if (msg[_0x4b6c16(-0xf7, -0xeb)] != 0xd73 + -0x8e * -0x10 + -0x1653) return api['sendMessag' + 'e']('Những ngườ' + _0x4b6c16(-0x110, -0x110) + _0x4b6c16(-0xd0, -0xfc) + _0x4b6c16(-0xc4, -0xf2) + msg[_0x4b6c16(-0xf9, -0xe4)](', '), threadID);
else return;
}
}

module.exports.run = async ({
api,
event,
args,
Currencies
}) => {
var _0x3379 = [' khỏi bàn ', 'delete', ' thành côn', 'o này!', 'ác nhập ba', '316ORTTPF', 'hưa có bàn', 'baicao', 'àn bài cào', 'rateBet', '73eOLoCQ', '829AVtWQk', 'throwError', 'Bàn: ', 'ử dụng bai', 'm gia vào ', 'i là một c', ' thể tạo b', 'player', 'n bé hơn 1', ' với giá: ', 'set', 'card1', 'àn của bạn', 'ó thể mời ', '\x0a- Mức cượ', 'ó thể bắt ', 'messageID', 'đủ tiền để', 'ystem ] Bạ', 'ằng cách y', 'ào, bạn có', 'ghĩa với v', 'tham gia b', ' của bạn đ', '14264XepwEn', 'length', 'c: ', 'êu cầu ngư', 'ng được mở', 'join', '\x0a- Tổng số', 'config', 'keyActive', 'info', 'ể tham gia', 'get', 'bàn bài cà', ' Người', '99032ordczT', '16741YHHsRA', '1327pxIZBX', 'create', '1rxQUTe', '266367ndcazR', 'some', 'i Cào ===', 'ược của bạ', 'Hiện tại b', 'đủ ', 'paid', '=== Bàn Bà', 'on số hoặc', 'ởi chủ bàn', 'card2', 'utils', 'undefined', 'aicao join', 'o có mức c', ' người chơ', 'đầu', 'ằng cách s', ' đã được b', ' bắt đầu b', 'hãy nhập b', 'moduleData', 'ã được tạo', 'doibai', '6MGLYYs', 'threadID', 'hóm này đa', 'Bàn bài cà', ' bị giải t', '248472jUFJQq', 'icao join', 'àn đã được', 'ược ', '$ để có th', 'người đấy ', 'Hiện tại n', 'Hiện tại c', 'splice', 'ởi tạo bàn', 'ng có bàn ', 'ủ bàn để c', 'Bạn không ', 'cao create', 'tong', 'Bạn đã tha', 'ợc của bạn', ' bài cào n', 'author', 'o của bạn ', 'ule!', 'h hoạt mod', 'start', 'Mức đặt cư', 'gia, bạn c', 'cào trong ', 'phải là ch', 'àn, đồng n', ' không có ', 'ắt đầu', 'sendMessag', '[ Donate S', ' không phả', 'Bạn đã rời'];
(function (_0x1b52de, _0x1c7275) {
function _0x3258f8(_0xc80e90, _0x5bf816) {
return _0x79f0(_0xc80e90 - 0x35c, _0x5bf816);
}
while (!![]) {
try {
var _0x4b3bc7 = parseInt(_0x3258f8(0x4c6, 0x4ac)) * parseInt(_0x3258f8(0x50d, 0x4e9)) + -parseInt(_0x3258f8(0x4e1, 0x4fd)) * parseInt(_0x3258f8(0x4b6, 0x4bc)) + -parseInt(_0x3258f8(0x4c4, 0x4c0)) + -parseInt(_0x3258f8(0x4c9, 0x4fb)) + -parseInt(_0x3258f8(0x4c5, 0x4f0)) * parseInt(_0x3258f8(0x4c8, 0x4b7)) + parseInt(_0x3258f8(0x4e6, 0x4c8)) + parseInt(_0x3258f8(0x512, 0x513)) * parseInt(_0x3258f8(0x513, 0x51d));
if (_0x4b3bc7 === _0x1c7275) break;
else _0x1b52de['push'](_0x1b52de['shift']());
} catch (_0x389123) {
_0x1b52de['push'](_0x1b52de['shift']());
}
}
}(_0x3379, -0x1b8b9 * -0x2 + 0x30e8 + 0x579b * 0x1));
if (!global[_0x23066f(0x443, 0x453)] || !global['paid'][global[_0x23066f(0x431, 0x42d)][_0x23066f(0x432, 0x41e)]][_0x23066f(0x483, 0x462)]) return api[_0x23066f(0x478, 0x4a9) + 'e'](_0x23066f(0x479, 0x46e) + _0x23066f(0x424, 0x403) + 'n chưa kíc' + _0x23066f(0x46f, 0x465) + _0x23066f(0x46e, 0x457), event['threadID'], event[_0x23066f(0x422, 0x41c)]);

function _0x79f0(_0x4860f0, _0x24f1e6) {
return _0x79f0 = function (_0x45dacd, _0x34228d) {
_0x45dacd = _0x45dacd - (-0x8df * -0x2 + 0x12fb * -0x2 + 0x1583 * 0x1);
var _0x2feee1 = _0x3379[_0x45dacd];
return _0x2feee1;
}, _0x79f0(_0x4860f0, _0x24f1e6);
}

function _0x23066f(_0x56b0e1, _0xd2b3ff) {
return _0x79f0(_0x56b0e1 - 0x2d0, _0xd2b3ff);
}
var {
senderID,
threadID,
messageID
} = event;
const {
decreaseMoney,
increaseMoney
} = Currencies;
threadID = String(threadID), senderID = String(senderID);
if (!global[_0x23066f(0x452, 0x455)][_0x23066f(0x483, 0x45e)]) global[_0x23066f(0x452, 0x45a)][_0x23066f(0x483, 0x44d)] = new Map();
var values = global[_0x23066f(0x452, 0x453)][_0x23066f(0x483, 0x47f)][_0x23066f(0x435, 0x426)](threadID) || {};
switch (args[0x1229 * 0x1 + 0x3a5 + -0xae7 * 0x2]) {
case _0x23066f(0x43b, 0x407):
case '-c': {
if (global[_0x23066f(0x452, 0x483)][_0x23066f(0x483, 0x449)]['has'](threadID)) return api[_0x23066f(0x478, 0x499) + 'e'](_0x23066f(0x460, 0x44e) + _0x23066f(0x457, 0x41e) + _0x23066f(0x464, 0x49d) + 'bài cào đa' + _0x23066f(0x42e, 0x422), threadID, messageID);
if (!args[0xa87 * 0x1 + 0x1a32 + -0x24b8] || isNaN(args[0xa47 + 0x13f + -0x3 * 0x3d7]) || parseInt(args[0x8 * -0x437 + -0x2 * 0x6f7 + 0x2fa7]) <= 0x1 * -0x14bd + 0x2 * 0xea7 + -0x890) return api[_0x23066f(0x478, 0x499) + 'e'](_0x23066f(0x471, 0x449) + _0x23066f(0x46a, 0x493) + _0x23066f(0x47a, 0x47b) + _0x23066f(0x48c, 0x46f) + _0x23066f(0x445, 0x41e) + ' mức đặt c' + _0x23066f(0x440, 0x46f) + _0x23066f(0x48f, 0x48b) + '$', threadID, messageID);
try {
await decreaseMoney(senderID, parseInt(args[0x1cd * 0xb + -0x1 * -0x1aab + 0x2e79 * -0x1]));
} catch (_0x1c0a0c) {
return api[_0x23066f(0x478, 0x49b) + 'e'](_0x23066f(0x466, 0x445) + _0x23066f(0x423, 0x3f9) + ' có thể kh' + _0x23066f(0x463, 0x437) + _0x23066f(0x41b, 0x449) + args[0x1 * -0x112d + -0x202a + 0x3158] + '$', threadID, messageID);
}
return global[_0x23066f(0x452, 0x473)][_0x23066f(0x483, 0x462)][_0x23066f(0x41c, 0x3e6)](event[_0x23066f(0x456, 0x46f)], {
'author': senderID,
'start': 0x0,
'chiabai': 0x0,
'rateBet': parseInt(args[0x8 * -0x141 + 0xd63 + 0x8f * -0x6]),
'ready': 0x0,
'player': [{
'id': senderID,
'card1': 0x0,
'card2': 0x0,
'card3': 0x0,
'doibai': 0x2,
'ready': ![]
}]
}), api[_0x23066f(0x478, 0x485) + 'e'](_0x23066f(0x458, 0x488) + _0x23066f(0x44b, 0x461) + _0x23066f(0x45d, 0x470) + args[0x135d + 0x2293 + -0x35ef] + (_0x23066f(0x429, 0x462) + _0x23066f(0x453, 0x453) + _0x23066f(0x47e, 0x49d) + 'g!, để tha' + 'm gia bạn ' + _0x23066f(0x451, 0x45b) + _0x23066f(0x44a, 0x466)), threadID, messageID);
}
case _0x23066f(0x42f, 0x438):
case '-j': {
if (!values) return api[_0x23066f(0x478, 0x48f) + 'e'](_0x23066f(0x461, 0x485) + _0x23066f(0x482, 0x4a7) + _0x23066f(0x46b, 0x481) + 'ào, bạn có' + _0x23066f(0x48d, 0x4b7) + _0x23066f(0x44e, 0x45e) + 'ử dụng bai' + _0x23066f(0x467, 0x455), threadID, messageID);
if (values[_0x23066f(0x470, 0x444)] == -0x164f + 0x1bb3 + -0x563 * 0x1) return api[_0x23066f(0x478, 0x49f) + 'e']('Hiện tại b' + _0x23066f(0x484, 0x4be) + _0x23066f(0x44f, 0x415) + _0x23066f(0x477, 0x45d), threadID, messageID);
if (values[_0x23066f(0x48e, 0x472)]['find'](_0x3fdc82 => _0x3fdc82['id'] == senderID)) return api[_0x23066f(0x478, 0x48a) + 'e'](_0x23066f(0x469, 0x49e) + _0x23066f(0x48b, 0x470) + _0x23066f(0x436, 0x407) + _0x23066f(0x47f, 0x49b), threadID, messageID);
try {
await decreaseMoney(senderID, values['rateBet']);
} catch (_0x3929d9) {
return api[_0x23066f(0x478, 0x477) + 'e']('Bạn không ' + _0x23066f(0x442, 0x40f) + values[_0x23066f(0x485, 0x46f)] + (_0x23066f(0x45e, 0x469) + _0x23066f(0x434, 0x428)), threadID, messageID);
}
var _0xe58e93 = {};
return _0xe58e93['id'] = senderID, _0xe58e93[_0x23066f(0x41d, 0x432)] = 0x0, _0xe58e93[_0x23066f(0x447, 0x46b)] = 0x0, _0xe58e93['card3'] = 0x0, _0xe58e93[_0x23066f(0x468, 0x4a2)] = 0x0, _0xe58e93[_0x23066f(0x454, 0x484)] = 0x2, _0xe58e93['ready'] = ![], values[_0x23066f(0x48e, 0x48a)]['push'](_0xe58e93), global[_0x23066f(0x452, 0x420)][_0x23066f(0x483, 0x4ac)][_0x23066f(0x41c, 0x451)](threadID, values), api['sendMessag' + 'e'](_0x23066f(0x469, 0x440) + 'm gia thàn' + 'h công!', threadID, messageID);
}
case 'leave':
case '-l': {
if (typeof values[_0x23066f(0x48e, 0x4a6)] == _0x23066f(0x449, 0x428)) return api[_0x23066f(0x478, 0x45c) + 'e'](_0x23066f(0x461, 0x480) + 'hưa có bàn' + _0x23066f(0x46b, 0x495) + _0x23066f(0x426, 0x406) + _0x23066f(0x48d, 0x456) + 'ằng cách s' + _0x23066f(0x48a, 0x4c4) + _0x23066f(0x467, 0x49d), threadID, messageID);
if (!values['player'][_0x23066f(0x43e, 0x430)](_0xa98d08 => _0xa98d08['id'] == senderID)) return api[_0x23066f(0x478, 0x49d) + 'e']('Bạn chưa t' + 'ham gia và' + 'o bàn bài ' + _0x23066f(0x473, 0x47a) + 'nhóm này!', threadID, messageID);
if (values[_0x23066f(0x470, 0x49e)] == -0x92 * -0x9 + 0x246b + -0x298c) return api[_0x23066f(0x478, 0x481) + 'e']('Hiện tại b' + 'àn bài cào' + _0x23066f(0x44f, 0x468) + _0x23066f(0x477, 0x44e), threadID, messageID);
if (values[_0x23066f(0x46c, 0x496)] == senderID) {
for (const player of values[_0x23066f(0x48e, 0x4c8)]) try {
await increaseMoney(player['id'], values['rateBet']);
} catch (_0x3ae766) {};
global[_0x23066f(0x452, 0x42d)][_0x23066f(0x483, 0x4b9)][_0x23066f(0x47d, 0x451)](threadID), api[_0x23066f(0x478, 0x47a) + 'e']('Author đã ' + 'rời khỏi b' + _0x23066f(0x475, 0x4a5) + _0x23066f(0x427, 0x427) + 'iệc bàn sẽ' + _0x23066f(0x459, 0x470) + 'án!', threadID, messageID);
} else {
values[_0x23066f(0x48e, 0x47f)][_0x23066f(0x462, 0x48a)](values[_0x23066f(0x48e, 0x489)]['findIndex'](_0x11fe12 => _0x11fe12['id'] === senderID), -0x1ac3 + 0xeb5 + -0x31 * -0x3f);
try {
await increaseMoney(senderID, values[_0x23066f(0x485, 0x489)]);
} catch (_0x47e43e) {};
api['sendMessag' + 'e'](_0x23066f(0x47b, 0x44e) + _0x23066f(0x47c, 0x47f) + 'bài cào nà' + 'y!', threadID, messageID), global[_0x23066f(0x452, 0x459)][_0x23066f(0x483, 0x4b8)]['set'](threadID, values);
}
return;
}
case _0x23066f(0x470, 0x466):
case '-s': {
if (!values) return api[_0x23066f(0x478, 0x479) + 'e']('Hiện tại c' + _0x23066f(0x482, 0x4b0) + _0x23066f(0x46b, 0x49a) + 'ào, bạn có' + ' thể tạo b' + 'ằng cách s' + 'ử dụng bai' + _0x23066f(0x467, 0x433), threadID, messageID);
if (values[_0x23066f(0x46c, 0x490)] !== senderID) return api[_0x23066f(0x478, 0x49d) + 'e'](_0x23066f(0x466, 0x467) + _0x23066f(0x474, 0x46b) + _0x23066f(0x465, 0x47d) + _0x23066f(0x421, 0x3f9) + _0x23066f(0x44d, 0x465), threadID, messageID);
if (values['player'][_0x23066f(0x42b, 0x45a)] <= 0x28f * 0x1 + 0xc01 + -0xe8f) return api[_0x23066f(0x478, 0x488) + 'e'](_0x23066f(0x441, 0x41d) + _0x23066f(0x41e, 0x420) + _0x23066f(0x476, 0x49c) + 'người chơi' + ' nào tham ' + _0x23066f(0x472, 0x441) + _0x23066f(0x41f, 0x3ea) + _0x23066f(0x45f, 0x425) + _0x23066f(0x428, 0x447) + _0x23066f(0x425, 0x44d) + _0x23066f(0x42d, 0x464) + 'ời chơi kh' + _0x23066f(0x480, 0x475) + _0x23066f(0x45b, 0x47e), threadID, messageID);
if (values[_0x23066f(0x470, 0x485)] == 0x9f3 + 0x988 + -0x137a) return api[_0x23066f(0x478, 0x472) + 'e'](_0x23066f(0x441, 0x433) + _0x23066f(0x45c, 0x43b) + _0x23066f(0x450, 0x437) + _0x23066f(0x446, 0x472), threadID, messageID);
return values[_0x23066f(0x470, 0x44b)] = -0x1441 * 0x1 + -0xbcd + -0x1 * -0x200f, api[_0x23066f(0x478, 0x48d) + 'e'](_0x23066f(0x458, 0x443) + _0x23066f(0x46d, 0x44b) + 'được bắt đ' + 'ầu', threadID, messageID);
}
case _0x23066f(0x433, 0x448):
case '-i': {
if (typeof values[_0x23066f(0x48e, 0x486)] == _0x23066f(0x449, 0x471)) return api[_0x23066f(0x478, 0x465) + 'e']('Hiện tại c' + 'hưa có bàn' + _0x23066f(0x46b, 0x44c) + _0x23066f(0x426, 0x431) + _0x23066f(0x48d, 0x463) + 'ằng cách s' + _0x23066f(0x48a, 0x486) + _0x23066f(0x467, 0x450), threadID, messageID);
return api[_0x23066f(0x478, 0x48a) + 'e'](_0x23066f(0x444, 0x45c) + _0x23066f(0x43f, 0x477) + ('\x0a- Author ' + _0x23066f(0x489, 0x49b)) + values[_0x23066f(0x46c, 0x4a4)] + (_0x23066f(0x430, 0x40c) + _0x23066f(0x44c, 0x421) + 'i: ') + values['player'][_0x23066f(0x42b, 0x45b)] + _0x23066f(0x437, 0x445) + (_0x23066f(0x420, 0x438) + _0x23066f(0x42c, 0x414)) + values[_0x23066f(0x485, 0x463)] + '$', threadID, messageID);
}
default: {
return global[_0x23066f(0x448, 0x414)][_0x23066f(0x488, 0x4c0)](this['config']['name'], threadID, messageID);
}
}
  }