module.exports.config = {
  name: "ارسم",
  version: "1.0.",
  hasPermssion: 0,
  credits: "ساسكي",
  description: "( 𝙂𝙚𝙣𝙚𝙧𝙖𝙩 𝘼𝙄 𝙞𝙢𝙖𝙜𝙚𝙨 )",
  commandCategory: "create-images",
  usages: "( 𝖨𝗆𝖺𝗀𝗂𝗇𝖾 𝖨𝗆𝖺𝗀𝖾 )",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("من فضلك اكتب /ارسم <محتوى الرسمة>", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "تفضل اتمنى ان تعجبك🐰🧡...",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};