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
global.owner = process.env.OWNER_NUMBER || "923363797634";
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
eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUg3NjFnVTFaV2xGejFheHJyNWRzMVpRRFR5OWdQZklwaHNjTkJ5cjBrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01MMS9OUEZ1YjhuYnU2ZG5lc3Q3UDRIM29ZYVlURU1yTmpobDJOWlBCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1R0V5U0wvcjFhZ0RYbnN3RmsvUXpseTRiby9xUXVzSE9OU2M2M2VhcjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsbWZWNHNWZ1dPSVpOUG5NTjFSakxGNzhCbFM0SC9BcnB6SE41aHZlR0ZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNUWhBYmh0akNIcG9vSVBNZUhFeUZpVC9zL2l0Q1FadEdvR05mYkx6WGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM5RnZCOUJ5d0FzYkx5cEdkbjV2dU9xc0RubkdlRU5MRmUvL09WUGc5SDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JJRGRza0JRWUdmMk9hb25BMGt1NDEraFNEaUN0MjJoU0cwYzc5TXMyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlpnUXA4UC9HdzB2UmNOT3d6VUZpNU5iN3UrYko5R3h0dGF5YTRkQzhEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGN3oxeUdrNTRrZ0ZDcGxQQXhFUDYxYVprSitpaHBpckVMUHBDeUswTFM0OVhuREgrb250YkN6M1Z0WWEvQi9HM2F1RlRPQzBVMUplQllmeDFVSEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiIwUUxOUTZPcUZoZ0lBUkJIS2ZKWEtqRWdmQWxOL3dJNGpEdnlZSmlobGF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUQWg4NE5wTFN6SzJoTlNIaUtzWXFRIiwicGhvbmVJZCI6IjY1MzcwZDUzLThiNDEtNDQ2Ni1iYzQ3LTJjYWUzYzNmMTYyMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRWd4RTRIbE5tVW5taC91dVo5SkNjK1lmbUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajk3SmFvUnpwMnlGclgwU0dOWkRTREJpSERjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM0VlIySkpBIiwibWUiOnsiaWQiOiI5MjMxMjM5MTY1NDA6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RsveyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01yR25IbFFkbytyWm5kdXcwd0RyckF0c25raVowYmwxbGVXRFdoNENHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmpJbFNHVmNFQUVwVHNqMk80NDh5Y3N0RHVXV2s4TmtsQWJwdW5ISXlqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT1FQUitlejk3ZmJEQ3NPYTRpTzBWQ2h3WmpiWHNvQmp0eW1ldkEvY1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYXpBVE5zbnR4emZXQmdjZUR0NmFHcEFOK3Z1RHFKQWQvRkEzeG5UNkZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKVTdnUWtjTzRMZExsV3dEZE16bWRUc0w1eTArYnhGczhET1QydG80bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOclJKR1dSelUxemk1V0NZNzJ4K3B3dzgrYWVhMVRiZW1RdmUyZTRBV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkd3VzJ5S3ltaVl6V1J0ZVZMdWJZUk5mbWpiUDBGSDBSdnIrUTZqNXIwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQW1VUTFmYTRNeCs5RXBFSnVZVFBUdWdGczJ4S2ExUlY3RHh1ZDhocysyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMrY09zTElVSjR3b0JZQ1FQU1paaTQ2clMrVUFFSkdmL0dQdjRmdzc5T1BkaVdFUll3Z0hiM1c3WmQxNFAxVVlDZS9yNXFSZXZLaW83ZEExVFQyNUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IktveXpPOFRzWmF0SjlESmpqOGlWenFieVFmQWxDYkp3bzJCaTZLUHo3K1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzYzNzk3NjM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNDOTk4NUYwNzI2QkE3Qzg4Nzg3QTcwNzA1QUM2OEM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzNDg1ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2Mzc5NzYzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNDUxRkM4QkVEMzBDQTZGQ0I3M0NFRTc4QTIxMjdGQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzQ4NTg4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXeXNtdG9CZ1FVR0VFcjF3R0hWMl9BIiwicGhvbmVJZCI6IjU4MzNjNGFhLTRmY2ItNGRhYS1iZmNjLTUyZjdkYWE2ZWM3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibnZNS3FqdnNqTnJsajFXRXE5ZFh0emhwSm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkUrQ3BsODQ5eXFONnA2Q1FPTHZrWTFpYUFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVGMjdUUEUxIiwibWUiOnsiaWQiOiI5MjMzNjM3OTc2MzQ6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS92eDg0QkVKM2ZxYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiazJaYnRodUlsb1VBbjRtQytPSGdvZlFrQ1pPaWxJVUllcDNtbmdBRmxYND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2pPOFI3d1lmQzVicmR3bUJsRThtckNMLzNjWmJsdXNmUEI3Skh2TElaN0dkWkE1UlRHZHRsQ0hYMHdJaDZHcTlhSzJpbjM2eUkydnY4Qi9aT1dWQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhxdnZiZzJCR3NLSXpna2k3aTNaczZDOExoWXZQd2E3a2d4aDBZaENlY3djcFBYQllQYzJZd3BRQWg5Vk00SkwyNU1rYTgvejc5LytqY2FhZzNWa0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzYzNzk3NjM0OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWk5tVzdZYmlKYUZBSitKZ3ZqaDRLSDBKQW1Ub3BTRkNIcWQ1cDRBQlpWKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM0ODU4NX0=
global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01yR25IbFFkbytyWm5kdXcwd0RyckF0c25raVowYmwxbGVXRFdoNENHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmpJbFNHVmNFQUVwVHNqMk80NDh5Y3N0RHVXV2s4TmtsQWJwdW5ISXlqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT1FQUitlejk3ZmJEQ3NPYTRpTzBWQ2h3WmpiWHNvQmp0eW1ldkEvY1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYXpBVE5zbnR4emZXQmdjZUR0NmFHcEFOK3Z1RHFKQWQvRkEzeG5UNkZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKVTdnUWtjTzRMZExsV3dEZE16bWRUc0w1eTArYnhGczhET1QydG80bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOclJKR1dSelUxemk1V0NZNzJ4K3B3dzgrYWVhMVRiZW1RdmUyZTRBV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkd3VzJ5S3ltaVl6V1J0ZVZMdWJZUk5mbWpiUDBGSDBSdnIrUTZqNXIwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQW1VUTFmYTRNeCs5RXBFSnVZVFBUdWdGczJ4S2ExUlY3RHh1ZDhocysyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMrY09zTElVSjR3b0JZQ1FQU1paaTQ2clMrVUFFSkdmL0dQdjRmdzc5T1BkaVdFUll3Z0hiM1c3WmQxNFAxVVlDZS9yNXFSZXZLaW83ZEExVFQyNUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IktveXpPOFRzWmF0SjlESmpqOGlWenFieVFmQWxDYkp3bzJCaTZLUHo3K1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzYzNzk3NjM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNDOTk4NUYwNzI2QkE3Qzg4Nzg3QTcwNzA1QUM2OEM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzNDg1ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2Mzc5NzYzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNDUxRkM4QkVEMzBDQTZGQ0I3M0NFRTc4QTIxMjdGQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzQ4NTg4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXeXNtdG9CZ1FVR0VFcjF3R0hWMl9BIiwicGhvbmVJZCI6IjU4MzNjNGFhLTRmY2ItNGRhYS1iZmNjLTUyZjdkYWE2ZWM3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibnZNS3FqdnNqTnJsajFXRXE5ZFh0emhwSm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkUrQ3BsODQ5eXFONnA2Q1FPTHZrWTFpYUFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVGMjdUUEUxIiwibWUiOnsiaWQiOiI5MjMzNjM3OTc2MzQ6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS92eDg0QkVKM2ZxYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiazJaYnRodUlsb1VBbjRtQytPSGdvZlFrQ1pPaWxJVUllcDNtbmdBRmxYND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2pPOFI3d1lmQzVicmR3bUJsRThtckNMLzNjWmJsdXNmUEI3Skh2TElaN0dkWkE1UlRHZHRsQ0hYMHdJaDZHcTlhSzJpbjM2eUkydnY4Qi9aT1dWQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhxdnZiZzJCR3NLSXpna2k3aTNaczZDOExoWXZQd2E3a2d4aDBZaENlY3djcFBYQllQYzJZd3BRQWg5Vk00SkwyNU1rYTgvejc5LytqY2FhZzNWa0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzYzNzk3NjM0OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWk5tVzdZYmlKYUZBSitKZ3ZqaDRLSDBKQW1Ub3BTRkNIcWQ1cDRBQlpWKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM0ODU4NX0="
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
