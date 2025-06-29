module.exports.config = {
    name: "سميةالجدد",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "ساسكي",
    description: "Automatic setname for new members",
    commandCategory: "Box Chat",
    usages: "[وضع <name> /remove] ",
    cooldowns: 5
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "autosetname.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = async function  ({ event, api, args, permssionm, Users })  {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "autosetname.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
    switch (args[0]) {
        case "وضع": {
            if (content.length == 0) return api.sendMessage("لا يجب إخلاء تكوين اسم العضو الجديد!", threadID, messageID);
            if (thisThread.nameUser.length > 0) return api.sendMessage("يرجى إزالة تكوين الاسم القديم قبل تسمية اسم جديد !!!", threadID, messageID); 
            thisThread.nameUser.push(content);
            const name = (await Users.getData(event.senderID)).name
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`تكوين اسم عضو جديد ناجح\nمعاينة: ${content} ${name}`, threadID, messageID);
            break;
        }
        case "rm":
        case "حذف":
        case "delete": {
                if (thisThread.nameUser.length == 0) return api.sendMessage("لم تقم مجموعتك بتكوين اسم عضو جديد !!", threadID, messageID);
                thisThread.nameUser = [];
                api.sendMessage(`تم حذف تكوين اسم العضو الجديد بنجاح`, threadID, messageID);
                break;
        }
        default: {
                api.sendMessage(`استخدم: كنية لاضافة كنية-تلقائية للاعضاء الجدد\n: كنية حذف لحذف كنية الاعضاء الجدد`, threadID, messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}