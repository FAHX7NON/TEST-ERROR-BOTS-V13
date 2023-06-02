let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://vt.tiktok.com/xxx/\nContoh ${usedPrefix}${command} https://vt.tiktok.com/ZSLdYTTjT/`
try {
let res = await fetch(`https://api.botcahx.live/api/dowloader/tiktok?url=${args[0]}&apikey=ReellyXD`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = `*Tiktok Downloader*\n\nPlay : ${jsoon.playCount}\nPublish : ${jsoon.createdAt}\nLikes : ${jsoon.likesCount}\nComment : ${jsoon.commentCount}\nShares : ${jsoon.shareCount}\n\nDescription:\n${jsoon.description}\n\n_Sedang mengirim *Video*..._`
await m.reply(done)
await conn.sendFile(m.chat, json.video, 'tiktok.mp4', 'Nih Kak\nSubscribe YT: Reelly XD', m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i

module.exports = handler