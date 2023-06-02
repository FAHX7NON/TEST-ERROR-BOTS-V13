let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if ((isOwner || isAdmin)) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
    } else throw `Teksnya mana?\n\ncontoh:\n${usedPrefix + command} setbye Selamat Tinggal @user\n\nSemoga Tenang Tenang Di Alam Sana🗿`
}
handler.help = ['setbye <teks>']
handler.tags = ['group']
handler.command = /^(setbye|setb)$/i
handler.group = true
handler.admin = true
module.exports = handler