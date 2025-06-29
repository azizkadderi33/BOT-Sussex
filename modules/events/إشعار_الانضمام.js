
module.exports.config = {
    name: "إشعار_الانضمام",
    eventType: ["log:subscribe"],
    version: "1.0.0",
    credits: "Assistant",
    description: "إشعار انضمام أعضاء جدد للمجموعة"
};

module.exports.run = async function({ api, event, Users }) {
    const { threadID, logMessageData } = event;
    
    if (logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        return api.sendMessage("🎉 مرحباً! تم إضافة ساسكي للمجموعة\n✨ استخدم .موافقة للسماح للبوت بالعمل", threadID);
    }
    
    for (let participant of logMessageData.addedParticipants) {
        const userName = await Users.getNameUser(participant.userFbId) || "عضو جديد";
        api.sendMessage(`🎉 مرحباً ${userName}!\n✨ أهلاً وسهلاً بك في المجموعة`, threadID);
    }
};
