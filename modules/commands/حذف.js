
module.exports.config = {
    name: "حذف",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "ساسكي",
    description: "حذف جميع ملفات الأوامر في مجلد commands",
    commandCategory: "Hệ Thống",
    usages: "حذف",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const { threadID, messageID, senderID } = event;
    const fs = require("fs-extra");
    const path = require("path");
    
    try {
        const commandsDir = __dirname;
        const files = fs.readdirSync(commandsDir).filter(file => 
            file.endsWith('.js') && file !== 'حذف.js'
        );
        
        if (files.length === 0) {
            return api.sendMessage("❌ لا توجد ملفات أوامر للحذف", threadID, messageID);
        }
        
        // حذف جميع الملفات
        let deletedCount = 0;
        let errorFiles = [];
        
        for (const file of files) {
            try {
                const filePath = path.join(commandsDir, file);
                
                // حذف الأمر من الذاكرة
                if (global.client.commands.has(file.replace('.js', ''))) {
                    global.client.commands.delete(file.replace('.js', ''));
                }
                
                // حذف الملف
                fs.unlinkSync(filePath);
                deletedCount++;
            } catch (error) {
                errorFiles.push(file);
            }
        }
        
        let message = `✅ تم حذف ${deletedCount} ملف أمر بنجاح`;
        
        if (errorFiles.length > 0) {
            message += `\n❌ فشل في حذف ${errorFiles.length} ملف:\n${errorFiles.join('\n')}`;
        }
        
        return api.sendMessage(message, threadID, messageID);
        
    } catch (error) {
        return api.sendMessage(`❌ حدث خطأ: ${error.message}`, threadID, messageID);
    }
};
