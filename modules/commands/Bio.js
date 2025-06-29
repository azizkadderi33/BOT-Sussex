module.exports.config = {
	name: "بايو",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "ساسكي",
	description: "تغيير بايو البوت",
	commandCategory: "ادمن",
	usages: "بايو [نص]",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("حدث خطأ" + e, event.threadID); return api.sendMessage("تم تغيير البايو إلى: \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }