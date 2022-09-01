export async function before(m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(REPORT|REQUEST|KONFIR|KONFIRM)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    conn.reply(m.quoted.mentionedJid[0], '*Owner:*\n' htjava + m.text, m)
    conn.reply(m.key.remoteJid, '*Pesan dari owner:*\n' htjava + m.text, m)
}
