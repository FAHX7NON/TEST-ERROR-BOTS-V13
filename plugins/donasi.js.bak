let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/19f968d68c89c645f5191.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 083137550315
┃Pulsa: 083137550315 ( XL )
┃Pulsa: 0895342959060 ( 3 )
┃Gopay: 083137550315
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/DannXD
┃Trakteer: https://trakteer.id/DannXD
┃Socialbuzz: https://socialbuzz.com/DannXD
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler