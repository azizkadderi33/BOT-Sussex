
module.exports.config = {
    name: "تحديث_التفاعل",
    eventType: ["message", "message_reply"],
    version: "1.0.0",
    credits: "Assistant", 
    description: "تحديث إحصائيات التفاعل للأعضاء"
};

module.exports.run = async function({ api, event }) {
    const { threadID, senderID } = event;
    const fs = require("fs");
    const path = __dirname + "/cache/tuongtac/checktt/";
    
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
    
    const filePath = path + threadID + ".json";
    
    let data = {
        day: [],
        week: [],
        time: new Date().getDay()
    };
    
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
    
    // تحديث تفاعل اليوم
    let userDay = data.day.find(user => user.id === senderID);
    if (userDay) {
        userDay.count++;
    } else {
        data.day.push({ id: senderID, count: 1 });
    }
    
    // تحديث تفاعل الأسبوع
    let userWeek = data.week.find(user => user.id === senderID);
    if (userWeek) {
        userWeek.count++;
    } else {
        data.week.push({ id: senderID, count: 1 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};
