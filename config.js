const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2bc4944ed03c534bf3f6f.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "بوت توبي 𝐓𝐎𝐁𝐄 𖣓 𝗫𝟵" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "249124702614";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "249116554687";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/4069fcb7012e1458b7445.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_13_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzNLR2RjZ2duYU1zakJ1ejV4RU9aKzBiRkZRbE9CTzFESys4L2dmQUVLND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEyMDgwODMyMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCQzY2MzI1OUIxODlGNzVDRjM0MzRCODI4MkMzOTNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ3NjgwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTIwODA4MzIzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEYyMEI4NTUyREIyMUQ5RUUxNTBGNENGQzcwOTZCMUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDc2ODA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMjA4MDgzMjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MjVBMDY4OTdENEU3NzlBRThFQUIxMkNCOTc4MDZFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NzY4MTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEyMDgwODMyMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyQzMzRUQ2NEFBNUUwRDExMkZCQUFBODU4NzA3NjU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ3NjgxMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKbWgxTnBLM1J1V1UxQ2dOeUY4YnJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmZTI2YzUyLTRhNDYtNGI3Zi04YjBiLTU2ZTZhNjY0NmQxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDIxNixcbiAgICAgIDIwNCxcbiAgICAgIDE2NSxcbiAgICAgIDI0NCxcbiAgICAgIDE2NixcbiAgICAgIDg0LFxuICAgICAgNzMsXG4gICAgICA1NyxcbiAgICAgIDE3MSxcbiAgICAgIDE0LFxuICAgICAgMTgwLFxuICAgICAgMTExLFxuICAgICAgMTUxLFxuICAgICAgMjI3LFxuICAgICAgMjMsXG4gICAgICAyNDQsXG4gICAgICAyNDgsXG4gICAgICAyMDAsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMjYsXG4gICAgICA4MixcbiAgICAgIDE0MCxcbiAgICAgIDI4LFxuICAgICAgOTIsXG4gICAgICAxOTIsXG4gICAgICAxMjcsXG4gICAgICAxNjUsXG4gICAgICA5MSxcbiAgICAgIDIxMyxcbiAgICAgIDExNSxcbiAgICAgIDYzLFxuICAgICAgMTUwLFxuICAgICAgNDQsXG4gICAgICA0NSxcbiAgICAgIDEwNSxcbiAgICAgIDE1NixcbiAgICAgIDI0NCxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk4OFNSR1A1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEyMDgwODMyMzc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTM1MjM0MzMwMjE2NjE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuLlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyVm1JUUdFSUhKc2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTUMxOUl0MllWUHUwMWJBR2JtYnhuR0RaNFBjZmJ2WDJIMHhKZ1dFdy9Baz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFanNKRW1VaHRMSEVmVWd3MnBBWlBhNFZzYWdqWnc4dzlHaVhVeE5idzZkWUtsUjA3anUzVXJFR2daMEI4NXZheHJxTVFGWXQ5WVRUdVpQQ2RZdjBEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlenJYTElSaHlKY1g4RUgrQU5UdC9KVG5YN2RkU1F4TCtxMDFRNHl0TWxVOUVzY1l1ekZvRXpkaWJ5VHZONy9UVHhaZElVcnc3V3FzR1hxUlcvRy9qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMDEyMDgwODMyMzc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ3NjgwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVRWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVFaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUTUvbkkzZ1BDUnlCRkJud2ZBQkRUU3BUL1k0dC9pTmJmV1BBRmM2V2grYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjE5NDA1NDUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NzY4MDYzMTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "المطور تيتـو" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "بوت توبي  - 𝐓𝐎𝐁𝐄 𖣓 𝗫𝟵",
  packname: process.env.PACK_NAME || "توبي لديكم لا خوف عليكم 249116554687",
  botname : process.env.BOT_NAME  || "*BOT TOBE*",
  ownername:process.env.OWNER_NAME|| "تــوبي شخصيـاً",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
