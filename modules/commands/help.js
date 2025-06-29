
module.exports.config = {
	name: "الاوامر",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "ساسكي",
	description: "قائمة الأوامر مع لمسة فخامة ✨",
	commandCategory: "system",
	usages: "[رقم الصفحة]",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 300
	}
};

module.exports.languages = {
	"ar": {
		"moduleInfo": "『 %1 』\n%2\n\n⟿ طريقة الاستعمال: %3\n⟿ التصنيف: %4\n⟿ التوقيت: %5 ثانية\n⟿ الصلاحيات: %6\n\n⌬ بواسطة: %7 ⌬",
		"helpList": '[ تحتوي على %1 أمر، استعمل: "%2الاوامر رقم_الصفحة" لتصفحها. ]',
		"user": "المستخدم",
		"adminGroup": "أدمن المجموعة",
		"adminBot": "أدمن البوت"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || !body.includes("help") && !body.includes("الاوامر")) return;
	
	const splitBody = body.trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = global.config.PREFIX;

	const permissionText = command.config.hasPermssion == 0 ? "المستخدم" : 
						   command.config.hasPermssion == 1 ? "أدمن المجموعة" : "أدمن البوت";

	const moduleInfo = `『 ${command.config.name} 』\n${command.config.description}\n\n⟿ طريقة الاستعمال: ${prefix}${command.config.name} ${(command.config.usages || "")}\n⟿ التصنيف: ${command.config.commandCategory}\n⟿ التوقيت: ${command.config.cooldowns} ثانية\n⟿ الصلاحيات: ${permissionText}\n\n⌬ بواسطة: ${command.config.credits} ⌬`;

	return api.sendMessage(moduleInfo, threadID, messageID);
};

module.exports.run = async function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const prefix = global.config.PREFIX;
	const page = parseInt(args[0]) || 1;
	const numberOfOnePage = 20;
	const arrayInfo = [];

	if (!command) {
		let i = 0;
		for (let [name] of commands) {
			arrayInfo.push(name);
		}
		arrayInfo.sort();

		const start = (page - 1) * numberOfOnePage;
		const returnArray = arrayInfo.slice(start, start + numberOfOnePage);
		let msg = returnArray.map(cmd => `『${++i + start}』 ✦ ${prefix}${cmd}`).join("\n");

		const header = `
╭══════•❁❀❁•══════╮
       ⚙️ قائمة أوامر سـاسـكي ⚙️
╰══════•❁❀❁•══════╯`;
		
		const footer = `\n✦ الصفحة: [${page}/${Math.ceil(arrayInfo.length / numberOfOnePage)}]
✦ عدد الأوامر: ${arrayInfo.length}
✦ المطور: ⚡ عبد العزيز ⚡
✦ استعمل: ${prefix}الاوامر [رقم] للتنقل`;

		const image = "https://i.imgur.com/49H8qgV.jpg";

		try {
			const attachment = await global.utils.getStreamFromURL(image);
			return api.sendMessage({ 
				body: `${header}\n\n${msg}\n${footer}`, 
				attachment: attachment 
			}, threadID, async (err, info) => {
				if (!err && this.config.envConfig.autoUnsend) {
					await new Promise(res => setTimeout(res, this.config.envConfig.delayUnsend * 1000));
					return api.unsendMessage(info.messageID);
				}
			});
		} catch (error) {
			return api.sendMessage(`${header}\n\n${msg}\n${footer}`, threadID, async (err, info) => {
				if (!err && this.config.envConfig.autoUnsend) {
					await new Promise(res => setTimeout(res, this.config.envConfig.delayUnsend * 1000));
					return api.unsendMessage(info.messageID);
				}
			});
		}
	}

	// عرض معلومات أمر محدد
	const permissionText = command.config.hasPermssion == 0 ? "المستخدم" : 
						   command.config.hasPermssion == 1 ? "أدمن المجموعة" : "أدمن البوت";

	const moduleInfo = `『 ${command.config.name} 』\n${command.config.description}\n\n⟿ طريقة الاستعمال: ${prefix}${command.config.name} ${(command.config.usages || "")}\n⟿ التصنيف: ${command.config.commandCategory}\n⟿ التوقيت: ${command.config.cooldowns} ثانية\n⟿ الصلاحيات: ${permissionText}\n\n⌬ بواسطة: ${command.config.credits} ⌬`;

	return api.sendMessage(moduleInfo, threadID, messageID);
};
