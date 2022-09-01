let handler = async (m, { conn, command }) => {
if (!m.quoted) throw 'Reply pesan yang ingin dihapus'
try {
let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 return conn.sendMessage(m.chat, { delete: key })
 } catch {
    return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^d(el(ete|m)|el|fa)?$/i

export default handler