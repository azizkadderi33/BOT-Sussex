
module.exports.config = {
    name: "تحديث_الاسم_التلقائي",
    eventType: ["log:subscribe"],
    version: "1.0.0", 
    credits: "Assistant",
    description: "تعديل أسماء الأعضاء الجدد تلقائياً"
};

module.exports.run = async function({ api, event, Users }) {
    const { threadID, logMessageData } = event;
    const fs = require("fs");
    const path = __dirname + "/cache/data/autosetname.json";
    
    if (!fs.existsSync(path)) return;
    
    try {
        const data = JSON.parse(fs.readFileSync(path, "utf8"));
        if (!data[threadID] || !data[threadID].status) return;
        
        for (let participant of logMessageData.addedParticipants) {
            const userName = await Users.getNameUser(participant.userFbId);
            const newName = data[threadID].format.replace("{name}", userName);
            
            setTimeout(() => {
                api.changeNickname(newName, threadID, participant.userFbId);
            }, 3000);
        }
    } catch (error) {
        console.error("خطأ في تحديث الاسم التلقائي:", error);
    }
};
