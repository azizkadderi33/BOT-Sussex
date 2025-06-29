
module.exports.config = {
    name: "منع_الطرد",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "Assistant",
    description: "منع طرد الأعضاء من المجموعة"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    const { logMessageData, threadID } = event;
    
    if (logMessageData.leftParticipantFbId === api.getCurrentUserID()) return;
    
    const threadInfo = await api.getThreadInfo(threadID);
    const adminIDs = threadInfo.adminIDs.map(admin => admin.id);
    
    if (adminIDs.includes(logMessageData.leftParticipantFbId)) {
        try {
            await api.addUserToGroup(logMessageData.leftParticipantFbId, threadID);
            return api.sendMessage("❌ لا يُسمح بطرد المشرفين من المجموعة", threadID);
        } catch (error) {
            return api.sendMessage("❌ فشل في إعادة إضافة المشرف", threadID);
        }
    }
};
