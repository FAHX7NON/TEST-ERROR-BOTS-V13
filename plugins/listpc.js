let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/d5a1cc2ab8af9bf5acf83.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${'@' + jid.replace(/@.+/, '')}\n\n`
return m.reply(txt)
}
handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

module.exports = handler