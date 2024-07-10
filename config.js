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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "African/Cairo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7361e8822f4c4d1737132.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "بوت الأسطورة أواب تيتو🇸🇩" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "249124702614";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "249124702614";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/2bc4944ed03c534bf3f6f.mp4" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_08_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwcFVLdjZVa2VhL0ZTN2xzS1VjS0NINFhNTkNrY1U0dk5QNmtUSlJkR3E0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0OTExODIxNTMwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0Q3MTVDRDFDOUUxOUIzQUY5RjdGMTExMTAzQUI0M0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTU1MzA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpleGVweXQ0VHRXT3NGbGtOX1dTc2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTUxMDc0MzgtYjA1NC00NDE2LTllN2YtYjBkYTkzYWEzNWNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDk5LFxuICAgICAgMzksXG4gICAgICAxMDYsXG4gICAgICAxMzAsXG4gICAgICAxOTIsXG4gICAgICAxMzMsXG4gICAgICAzMSxcbiAgICAgIDQxLFxuICAgICAgMTIsXG4gICAgICA4NyxcbiAgICAgIDk3LFxuICAgICAgODQsXG4gICAgICAxMzEsXG4gICAgICAyMjAsXG4gICAgICAxOTQsXG4gICAgICAyMjcsXG4gICAgICAxMTgsXG4gICAgICAxMTcsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICA0LFxuICAgICAgMTA5LFxuICAgICAgNjcsXG4gICAgICA3MCxcbiAgICAgIDY4LFxuICAgICAgMjAsXG4gICAgICAxNDMsXG4gICAgICAyMSxcbiAgICAgIDI0NixcbiAgICAgIDQxLFxuICAgICAgMjQyLFxuICAgICAgMixcbiAgICAgIDM2LFxuICAgICAgMjE3LFxuICAgICAgMjQ1LFxuICAgICAgMjQ5LFxuICAgICAgNzksXG4gICAgICAyMDIsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlQ3WUJSRFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0OTExODIxNTMwMzo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImF3YWIgb2ZmaWNpYWxcIixcbiAgICBcImxpZFwiOiBcIjI1NDczOTMyNTM5MDg0ODo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSytyOEVGRU9IMDRMTUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkV2Rk52YmU5eStEWng5NzV3djJWYUpUV3ROM3plY3VTTStERWFUdkpXaEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid1Fid0hlelVsQkxWRkQyQjFmQTVKQUtFNUVsWERMckZFcWpBT3NXTFpBTERFNWtLVGZXZjh1ckhWZTM4N0JDR2w4ejhxbFZOVHI2cXN5ODFTNitEQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN2RQRU9IOG1jSXhmUGUwRzJaRzJMMlBvdFE0S3pYR00wVCtBY0ZRQnhMUnVwaWNzRjRURWF1ZHhHeGR5NzRqbmh2THdpSWZmVStpMWVHZ1MyQWpSQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQ5MTE4MjE1MzAzOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTU1MzAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvT3M4QVdCL3F5VWF0MXlYckRZVTRRakNVaTBZbGNhWWltN00vdlMwQi93PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzkyNzAyMzEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Suhail_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "المطور تيتـو" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "بوت تيتو عمكم   🫴",
  packname: process.env.PACK_NAME || "تيتو لديكم لا خوف عليكم 249118215303",
  botname : process.env.BOT_NAME  || "LEGEND TETO BOT",
  ownername:process.env.OWNER_NAME|| "المـطور شخصيـاً",


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
