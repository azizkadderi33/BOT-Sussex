module.exports.config = {
	name: "طلاسم",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ساسكي",
	description: "convert text to baybayin",
	commandCategory: "text",
	usages: "baybayin [text]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let timkiem = args.join(" ");
const res = await axios.get(`https://api-baybayin-transliterator.vercel.app/?text=${timkiem}`);
var userName = res.data.baybay;
return api.sendMessage(`${userName}`, event.threadID, event.messageID)
}
