//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923183830766@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HsnCyber/LEGEND-X-HM";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/GRDmiNNkT6OJwbqYdj1CT4";
global.website = process.env.GURL || "https://chat.whatsapp.com/GRDmiNNkT6OJwbqYdj1CT4";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/2EXdntw.jpeg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923363797634";
global.owner = process.env.OWNER_NUMBER || "923168598809";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 1;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/2EXdntw.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJORzFxcGhQWlBKL0pVNEF0QlBOZUdxaWNqYTluY0ZVYU1IZm9BeFJYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmxKc001cTJidUFaKzRaQ3I2bnIxOERqZTFnZkpwNmw2WkRZMFI5c3hFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR3c2RXdQbHcrU1NZcVoyWTdvRWpUODlqYmcyczlTNm5aOXBlSXdpb1Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNitoc0JHWEdvc1BPQndvREp2UGhYaytjYk5teTdtWjlYZEpoQU5iU0RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHRnNnbmd2L1dWb2UzWGpUdzhkR3RCODFWOUdaZ1lwMVdXSWgvaHluSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV6Tm1yYUNINXVJZC9PSzJjRlMvWUViNnk0SmpRTlQvbG82ektGMXJFMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hrV2kxdE54UlFmTW1XdkpLdkd1STZReXh5K2JtL2w5b2RDeGRWQkhHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREJLQlhGcUNPNXVSV3ZpQmxybFlUNVh4UHBkRFo1dWF4MVhrMzNFQXB3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI4LzdXYTI5enhLZ0ZLanZqQ3ZxUlVrbVVUNzBDMzU5QjNnMjVpbVoyWXc0RThneEVFUkxqMWNpdG50cnhBdWlSaTFHbWx5dzBSOFphN05JMEQyY0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJDeUVLSXNQa3FMdHo5bm95M2x0RTVWM2VtYnZ4QmNyOURTeDh0ZFMzTUZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvb0ZvNWkwZlRRUzhwVk9vV2ZLSjRRIiwicGhvbmVJZCI6ImY2OWZmODcyLTUwZmMtNGFlNi1hZmQ4LWM2Njc0NDE2NDcxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWXpDR3BHZnFkVkEvdFRUTWJZcktsVndHMEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGRIQ2RYYmVtV2hYYVFJNi9rSVdsSFRUUWMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik00QjVCS1RSIiwibWUiOnsiaWQiOiI5MjMxNjg1OTg4MDk6MTNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pmUzUrZ0VFTTNPMTdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdLTHQzUEQ0TnpJdEE2ZlcwL0RYKzc0TmFXTjMxSlVmTlQ5NGM2R00zRzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhBRHFVRmdTRlBuUlltOHpkQXQ4NFl0NmNtYW93SG5RcXA5T0Jsak8rTUNMS1ZOSlVPeEROTHhHdW4zMjZ0N1oxb1Q3Z1lWTXcwN0NuWVp6cXg1dUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKd0hRWlpkK05SYTdSZG1hM25vYk1PbVN4amFORFY1emE3UnBkUVdWcFNES3RIOGJzK25ON1VBRFFvV1NJNGx4bXZtdU4wMlZMZDM4TWlLV3A5eHhDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2ODU5ODgwOToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaWk3ZHp3K0RjeUxRT24xdFB3MS91K0RXbGpkOVNWSHpVL2VIT2hqTnh0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMTAwMTIyfQ=="
global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJORzFxcGhQWlBKL0pVNEF0QlBOZUdxaWNqYTluY0ZVYU1IZm9BeFJYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmxKc001cTJidUFaKzRaQ3I2bnIxOERqZTFnZkpwNmw2WkRZMFI5c3hFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR3c2RXdQbHcrU1NZcVoyWTdvRWpUODlqYmcyczlTNm5aOXBlSXdpb1Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNitoc0JHWEdvc1BPQndvREp2UGhYaytjYk5teTdtWjlYZEpoQU5iU0RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHRnNnbmd2L1dWb2UzWGpUdzhkR3RCODFWOUdaZ1lwMVdXSWgvaHluSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV6Tm1yYUNINXVJZC9PSzJjRlMvWUViNnk0SmpRTlQvbG82ektGMXJFMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hrV2kxdE54UlFmTW1XdkpLdkd1STZReXh5K2JtL2w5b2RDeGRWQkhHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREJLQlhGcUNPNXVSV3ZpQmxybFlUNVh4UHBkRFo1dWF4MVhrMzNFQXB3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI4LzdXYTI5enhLZ0ZLanZqQ3ZxUlVrbVVUNzBDMzU5QjNnMjVpbVoyWXc0RThneEVFUkxqMWNpdG50cnhBdWlSaTFHbWx5dzBSOFphN05JMEQyY0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJDeUVLSXNQa3FMdHo5bm95M2x0RTVWM2VtYnZ4QmNyOURTeDh0ZFMzTUZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvb0ZvNWkwZlRRUzhwVk9vV2ZLSjRRIiwicGhvbmVJZCI6ImY2OWZmODcyLTUwZmMtNGFlNi1hZmQ4LWM2Njc0NDE2NDcxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWXpDR3BHZnFkVkEvdFRUTWJZcktsVndHMEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGRIQ2RYYmVtV2hYYVFJNi9rSVdsSFRUUWMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik00QjVCS1RSIiwibWUiOnsiaWQiOiI5MjMxNjg1OTg4MDk6MTNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pmUzUrZ0VFTTNPMTdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdLTHQzUEQ0TnpJdEE2ZlcwL0RYKzc0TmFXTjMxSlVmTlQ5NGM2R00zRzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhBRHFVRmdTRlBuUlltOHpkQXQ4NFl0NmNtYW93SG5RcXA5T0Jsak8rTUNMS1ZOSlVPeEROTHhHdW4zMjZ0N1oxb1Q3Z1lWTXcwN0NuWVp6cXg1dUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKd0hRWlpkK05SYTdSZG1hM25vYk1PbVN4amFORFY1emE3UnBkUVdWcFNES3RIOGJzK25ON1VBRFFvV1NJNGx4bXZtdU4wMlZMZDM4TWlLV3A5eHhDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2ODU5ODgwOToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaWk3ZHp3K0RjeUxRT24xdFB3MS91K0RXbGpkOVNWSHpVL2VIT2hqTnh0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMTAwMTIyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-legend prince x😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝗣𝗥𝗜𝗡𝗖𝗘 𝗫",
  ownername: process.env.OWNER_NAME || "𝗣𝗥𝗜𝗡𝗖𝗘 𝗫 𝗛𝗔𝗖𝗞𝗘𝗥",
  errorChat: process.env.ERROR_CHAT || "923363797634",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
