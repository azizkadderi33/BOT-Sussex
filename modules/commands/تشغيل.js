
module.exports.config = {
  name: "تشغيل",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "ساسكي",
  description: "تشغيل البوت (أدمن فقط)",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const fs = require("fs");
  const path = require("path");
  
  // مسار ملف حالة إيقاف البوت
  const stopFile = path.join(__dirname, "../commands/cache/data/bot_stopped.json");
  
  try {
    // حذف ملف الإيقاف أو تحديثه
    if (fs.existsSync(stopFile)) {
      fs.writeFileSync(stopFile, JSON.stringify({ stopped: false }, null, 2));
    }
    
    return api.sendMessage("🟢 تم تشغيل البوت بنجاح!\n✅ البوت يعمل الآن ويستجيب للأوامر.", event.threadID, event.messageID);
  } catch (error) {
    return api.sendMessage("❌ حدث خطأ في تشغيل البوت.", event.threadID, event.messageID);
  }
};
