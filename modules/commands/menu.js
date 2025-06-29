
module.exports.config = {
	name: "menu",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "ساسكي",
	description: "عرض قائمة الأوامر بشكل احترافي",
	usages: "[all/-a] [رقم الصفحة]",
	commandCategory: "للمستخدمين",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "❌ يرجى إدخال رقم صحيح";
	else if (num > data.length || num <= 0) msg = "❌ الرقم المختار غير موجود في القائمة، حاول مرة أخرى";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += `╭─────────────────╮\n`;
			msg += `│    🔸 معلومات الأمر 🔸    │\n`;
			msg += `╰─────────────────╯\n\n`;
			msg += `📌 الأمر: ${dataAfter}\n`;
			msg += `📝 الوصف: ${command_config.description}\n`;
			msg += `⚙️ الاستخدام: ${(command_config.usages) ? command_config.usages : "غير محدد"}\n`;
			msg += `⏱️ المهلة الزمنية: ${command_config.cooldowns || 5} ثانية\n`;
			msg += `🔐 الصلاحية: ${(command_config.hasPermssion == 0) ? "مستخدم عادي" : (command_config.hasPermssion == 1) ? "مشرف المجموعة" : "مشرف البوت"}\n`;
			msg += `\n╭─────────────────╮\n`;
			msg += `│  👨‍💻 المطور: عبد العزيز  │\n`;
			msg += `│  🤖 بوت ساسكي الرسمي  │\n`;
			msg += `╰─────────────────╯`;
		} else {
			check = true;
			let count = 0;
			msg += `╭─────────────────╮\n`;
			msg += `│ 🎯 ${dataAfter.group.toUpperCase()} 🎯 │\n`;
			msg += `╰─────────────────╯\n\n`;

			dataAfter.cmds.forEach(item => {
				msg += `${count+=1}. 🔹 ${item}: ${commands.get(item).config.description}\n`;
			})
			msg += `\n╭─────────────────╮\n`;
			msg += `│   📋 تفاصيل الأوامر   │\n`;
			msg += `╰─────────────────╯\n`;
			msg += `💡 للحصول على تفاصيل أي أمر، رد على هذه الرسالة بالرقم المناسب`;
		}
	}
	
	const axios = require('axios');
	const fs = require('fs-extra');
	const sasukiImage = "https://i.imgur.com/a/5Lc2uL4";
	var path = __dirname + "/cache/sasuki_menu.jpg"
	
	try {
		let dowloadIMG = (await axios.get(sasukiImage, { responseType: "arraybuffer" })).data; 
		fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8"));
		const imgP = [fs.createReadStream(path)];
		
		var msgg = {body: msg, attachment: imgP}
		api.unsendMessage(handleReply.messageID);
		return api.sendMessage(msgg, event.threadID, (error, info) => {
			if (error) console.log(error);
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					name: this.config.name,
					messageID: info.messageID,
					content: data[num].cmds
				})
			}
		}, event.messageID);
	} catch (error) {
		var msgg = {body: msg}
		api.unsendMessage(handleReply.messageID);
		return api.sendMessage(msgg, event.threadID, (error, info) => {
			if (error) console.log(error);
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					name: this.config.name,
					messageID: info.messageID,
					content: data[num].cmds
				})
			}
		}, event.messageID);
	}
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	
	const sasukiImage = "https://i.imgur.com/a/5Lc2uL4";
	var path = __dirname + "/cache/sasuki_menu.jpg"
	let imgP = [];
	
	try {
		let dowloadIMG = (await axios.get(sasukiImage, { responseType: "arraybuffer" })).data; 
		fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8"));
		imgP.push(fs.createReadStream(path));
	} catch (error) {
		console.log("فشل في تحميل صورة ساسكي");
	}

	const command = commands.values();
	var group = [], msg = "";
	let check = true, page_num_input = "";
	let bonus = 0;

	// إنشاء رأس القائمة
	msg += `╭─────────────────╮\n`;
	msg += `│   🤖 بوت ساسكي الرسمي   │\n`;
	msg += `│   📋 قائمة الأوامر   │\n`;
	msg += `╰─────────────────╯\n\n`;
	msg += `👨‍💻 المطور: عبد العزيز\n`;
	msg += `🔗 البادئة: ${prefix}\n`;
	msg += `📊 إجمالي الأوامر: ${commands.size}\n\n`;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) 
			group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else 
			group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 15);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg += "❌ يرجى إدخال رقم صحيح للصفحة";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg += "❌ رقم الصفحة غير صحيح";
			else check = true;
		}
		if (check) {
			index_start = (page_num_input) ? (page_num_input * 15) - 15 : 0;
			bonus = index_start;
			index_end = (index_start + 15 > all_commands.length) ? all_commands.length : index_start + 15;
			all_commands = all_commands.slice(index_start, index_end);
			
			msg += `╭─────────────────╮\n`;
			msg += `│   📚 جميع الأوامر   │\n`;
			msg += `╰─────────────────╯\n\n`;
			
			all_commands.forEach(e => {
				msg += `${index_start+=1}. 🔸 ${e}: ${commands.get(e).config.description}\n`;
			})
			msg += `\n╭─────────────────╮\n`;
			msg += `│ الصفحة ${page_num_input || 1}/${page_num_total} │\n`;
			msg += `╰─────────────────╯\n`;
			msg += `💡 لعرض الصفحات الأخرى: ${prefix}menu [all/-a] [رقم الصفحة]\n`;
			msg += `📋 لعرض تفاصيل أي أمر: رد على الرسالة بالرقم المناسب\n\n`;
			msg += `╭─────────────────╮\n`;
			msg += `│  👨‍💻 المطور: عبد العزيز  │\n`;
			msg += `│  🤖 بوت ساسكي الرسمي  │\n`;
			msg += `╰─────────────────╯`;
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 10);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg += "❌ يرجى إدخال رقم صحيح للصفحة";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg += "❌ رقم الصفحة غير صحيح";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 10) - 10 : 0;
		bonus = index_start;
		index_end = (index_start + 10 > group.length) ? group.length : index_start + 10;
		group = group.slice(index_start, index_end);
		
		msg += `╭─────────────────╮\n`;
		msg += `│   📂 فئات الأوامر   │\n`;
		msg += `╰─────────────────╯\n\n`;
		
		group.forEach(commandGroup => msg += `${index_start+=1}. 📁 ${commandGroup.group.toUpperCase()}\n`);
		
		msg += `\n╭─────────────────╮\n`;
		msg += `│ الصفحة ${page_num_input || 1}/${page_num_total} │\n`;
		msg += `╰─────────────────╯\n`;
		msg += `💡 لعرض الصفحات الأخرى: ${prefix}menu [رقم الصفحة]\n`;
		msg += `📋 لعرض أوامر أي فئة: رد على الرسالة بالرقم المناسب\n\n`;
		msg += `╭─────────────────╮\n`;
		msg += `│  👨‍💻 المطور: عبد العزيز  │\n`;
		msg += `│  🤖 بوت ساسكي الرسمي  │\n`;
		msg += `╰─────────────────╯`;
	}
	
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}
