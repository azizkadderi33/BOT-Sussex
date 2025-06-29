
module.exports.config = {
    name: "إشعار_المغادرة", 
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "Assistant",
    description: "إشعار مغادرة الأعضاء من المجموعة"
};

module.exports.run = async function({ api, event, Users }) {
    const { threadID, logMessageData } = event;
    
    if (logMessageData.leftParticipantFbId === api.getCurrentUserID()) return;
    
    const userName = await Users.getNameUser(logMessageData.leftParticipantFbId) || "عضو";
    return api.sendMessage(`👋 وداعاً ${userName}\n💔 لقد غادر المجموعة`, threadID);
};
