module.exports.config = {
	name: "حذف-الكل",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "ساسكي",
	description: "Delete all messages on ACC Bot",
	commandCategory: "System",
	usages: "[thread/all]",
	cooldowns: 0
};

module.exports.run = function({ api, event, args, getText }) {
if (args[0] == "all") {
 return api.getThreadList(1000, null, ["INBOX"], (err, list) => {
 	if (err) throw err;
 	list.forEach(item => (item.threadID != event.threadID) ? api.deleteThread(item.threadID) : "");
 	api.sendMessage("تم حذف كل الرسائل بنجاح ✅️", event.threadID)
 })
}
else return api.getThreadList(1000, null, ["INBOX"], (err, list) => {
 	if (err) throw err;
 	list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.deleteThread(item.threadID) : "");
 	api.sendMessage("تم حذف كل المجموعات بنجاح ✅️", event.threadID)
 })
}