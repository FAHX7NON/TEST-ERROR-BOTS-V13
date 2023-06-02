const fetch = require('node-fetch')
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
await m.reply('Tunggu Sebentar...')
let res = await fetch(`https://api.botcahx.live/api/dowloader/sfilemobi?url={args[0]}&apikey=ReellyXD`)
let json = await res.json()
if (!args[0]) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1Qot1AZcAsS7`
// if (!args[0].match(/https:\/\/sfile.mobi\/)/gi)) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1Qot1AZcAsS7`
let src = `Nih`.trim()
m.reply(src)
// conn.sendFile(m.chat, json.result.url, `${json.result.title}`,null, m)
conn.sendMedia(m.chat, json.result.url, 0, {fileName: `${json.result.title}`})
}

handler.help = ['sfile']
handler.tags = ['downloader']
handler.command = /^(sfile)$/i
handler.limit = true
handler.group = false

module.exports = handler