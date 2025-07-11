module.exports.config = {
	name: "ايلون",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ساسكي",
	description: "الكتابة على منشور ايلون ماسك",
	commandCategory: "الكتابة على الصور",
	usages: "ايلون [نص]",
	cooldowns: 100,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + '/cache/bang.png';// đổi tên tệp tùy thích
	var text = args.join(" ");
	if (!text) return api.sendMessage("يجب ان تكتب كلمات حتى يتم كتابتها على الصبورة!", threadID, messageID);
	let getPorn = (await axios.get(`https://i.imgflip.com/59fung.png`, { responseType: 'arraybuffer' })).data; // link ảnh
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "bold 40px Valera";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 99;
	while (ctx.measureText(text).width > 2250) {
		fontSize--;
		ctx.font = `bold ${fontSize}px Valera, sans-serif`;
	}
	const lines = await this.wrapText(ctx, text, 840);
	ctx.fillText(lines.join('\n'), 75,190);//vị trí comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}