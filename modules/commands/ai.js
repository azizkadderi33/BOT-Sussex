
module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ساسكي",
    description: "ذكاء اصطناعي - يتطلب علامة استفهام في النهاية",
    commandCategory: "الذكاء الاصطناعي",
    usages: "ai [سؤالك؟]",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = async function({ api, event, args }) {
    const axios = require('axios');
    
    if (args.length === 0) {
        return api.sendMessage("❌ يرجى كتابة سؤالك مع علامة استفهام في النهاية!\n\n💡 مثال:  كم الساعة؟", event.threadID, event.messageID);
    }
    
    const question = args.join(" ");
    
    // التحقق من وجود علامة استفهام في النهاية
    if (!question.endsWith("؟") && !question.endsWith("?")) {
        return api.sendMessage("❌ يجب أن ينتهي سؤالك بعلامة استفهام (؟)!\n\n💡 مثال: ai كم الساعة؟", event.threadID, event.messageID);
    }
    
    try {
        api.sendMessage("🤖 جاري التفكير...", event.threadID, async (err, info) => {
            try {
                const response = await axios.get(`https://gpt-3-1-kvgw.onrender.com/chat?text=${encodeURIComponent(question)}`);
                
                let answer = "";
                if (response.data && response.data.response) {
                    answer = response.data.response;
                } else if (response.data && typeof response.data === 'string') {
                    answer = response.data;
                } else {
                    answer = "عذراً، لم أتمكن من فهم الاستجابة من الخادم.";
                }
                
                const finalMessage = `🤖 الذكاء الاصطناعي:\n\n${answer}\n\n💭 سؤالك: ${question}`;
                
                api.editMessage(finalMessage, info.messageID);
                
            } catch (error) {
                console.error("خطأ في AI API:", error.message);
                api.editMessage("❌ حدث خطأ أثناء الاتصال بالذكاء الاصطناعي. يرجى المحاولة مرة أخرى لاحقاً.", info.messageID);
            }
        });
        
    } catch (error) {
        console.error("خطأ عام في AI:", error.message);
        return api.sendMessage("❌ حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.", event.threadID, event.messageID);
    }
};

module.exports.handleEvent = async function({ api, event }) {
    // يمكن إضافة معالجة للأحداث هنا إذا لزم الأمر
};
