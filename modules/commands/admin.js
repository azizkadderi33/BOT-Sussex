 module.exports.config = {
  name: "المطور",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ساسكي",
  description: "معلومات عن مطور البوت.",
  commandCategory: "المطور",
  usages: " ",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.pinimg.com/originals/44/4b/8f/444b8f406347a470a7de5478206dd158.gif",
    "https://i.pinimg.com/originals/2b/e6/92/2be69242c9a4bab058c59905a63d25e5.gif",
    "https://i.pinimg.com/originals/86/98/f5/8698f551b2657026ba2e14cec6c8e5fa.gif",
    "https://i.pinimg.com/originals/82/01/bb/8201bb781ea261bc28446a0b79203094.gif",
    "https://i.pinimg.com/originals/ae/b3/7b/aeb37be604b528b4c6be3f6092ce7c0d.gif",
  ];
  var callback = () => api.sendMessage({body:`★ المطور ★ \n🐧الاسم:  خير صالح \n العمر : 16\n الفيس : ما بدي ازعاج ,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };
