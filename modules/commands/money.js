module.exports.config = {
	name: "رصيد",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "ساسكي",//mod by ARAXY XD
	description: "تحقق من رصيدك أو الشخص الي تسويله تاك",
	commandCategory: "الاموال",
	usages: "[Tag]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
	const { threadID, messageID, senderID, mentions } = event;
  const fs = require('fs');
const axios = require('axios')
 if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
if (event.type == "message_reply") {
    var uid = event.messageReply.senderID;
    var name = (await Users.getData(uid)).name;
    var money = (await Currencies.getData(uid)).money;
    if (!money) money = 0;
var argss = `${money}`;
}
else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions)[0];
		var money = (await Currencies.getData(mention)).money;
		if (!money) money = 0;
	  var argss = `${money}`;
    var name = (await Users.getData(mention)).name
	} else {
   var name = (await Users.getData(senderID)).name;
    var money = (await Currencies.getData(senderID)).money;
    if (!money) money = 0;
var argss = `${money}`;
  }
	 const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/atmaraxy.png";
    let bg = (await axios.get(`https://i.postimg.cc/htn824z6/Picsart-22-10-11-22-46-44-894.jpg`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
           let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "50px SplineSans-Medium";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText('' + argss.replace(/\B(?=(\d{3})+(?!\d))/g, '') + '$', 920, 259);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
       var msg =  {body:`  رصيد  ${name} : `, attachment: fs.createReadStream(path)
    }
   return api.sendMessage(msg,  threadID, async (error, info) => {
    fs.unlinkSync(path),
        messageID
      })
      }
