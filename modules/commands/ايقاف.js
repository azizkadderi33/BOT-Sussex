
module.exports.config = {
  name: "ايقاف",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "ساسكي",
  description: "إيقاف البوت (أدمن فقط)",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const fs = require("fs");
  const path = require("path");
  
  // إنشاء ملف لحفظ حالة إيقاف البوت
  const stopFile = path.join(__dirname, "../commands/cache/data/bot_stopped.json");
  
  try {
    // إنشاء الملف إذا لم يكن موجوداً
    if (!fs.existsSync(stopFile)) {
      fs.writeFileSync(stopFile, JSON.stringify({ stopped: true }, null, 2));
    } else {
      // تحديث الملف
      fs.writeFileSync(stopFile, JSON.stringify({ stopped: true }, null, 2));
    }
    
    return api.sendMessage("🔴 تم إيقاف البوت بنجاح!\n⚠️ البوت لن يستجيب للأوامر حتى يتم تشغيله مرة أخرى.", event.threadID, event.messageID);
  } catch (error) {
    return api.sendMessage("❌ حدث خطأ في إيقاف البوت.", event.threadID, event.messageID);
  }
};
