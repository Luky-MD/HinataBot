import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import { sandroid1,
sanime,
sanoboydl,
sanoboys,
sapkmirror,
sapkmody,
sartinama,
sasupanfilm,
sasupanfilminfo,
sbacaresep,
scarigc,
scariresep,
schara,
scorona,
sdevianart,
sdewabatch,
sdrakor,
sfacebook,
sfilm,
sgempa,
sghfollower,
sghfollowing,
sghuser,
sgoredl,
shappymod,
shappymoddl,
sigdl,
sigdl2,
sigstalk,
sigstory,
sjob,
sjoox,
skiryu,
skonachan,
smanga,
smangatoon,
smediafire,
smerdekanews,
smetronews,
spalingmurah,
spin,
spinterest2,
squotes,
srandomgore,
srandomtt,
srexdl,
srexdldown,
ssearchgore,
ssfiledown,
ssfilesearch,
ssoundcloud,
sstickersearch,
stextmakervid,
stiktok,
strendtwit,
stwitter,
swallpapercave,
swallpapercraft,
swallpaperhd,
swattpad,
swebtoons,
swikisearch,
szerochan,
szippydl } from '../lib/scrape.js'

let handler = async (m, { text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (!args[0]) {
let hasil = ['android1',
'anime',
'anoboydl',
'anoboys',
'apkmirror',
'apkmody',
'artinama',
'asupanfilm',
'asupanfilminfo',
'bacaresep',
'carigc',
'cariresep',
'chara',
'corona',
'devianart',
'dewabatch',
'drakor',
'facebook',
'film',
'gempa',
'ghfollower',
'ghfollowing',
'ghuser',
'goredl',
'happymod',
'happymoddl',
'igdl',
'igdl2',
'igstalk',
'igstory',
'job',
'joox',
'kiryu',
'konachan',
'manga',
'mangatoon',
'mediafire',
'merdekanews',
'metronews',
'palingmurah',
'pin',
'pinterest2',
'quotes',
'randomgore',
'randomtt',
'rexdl',
'rexdldown',
'searchgore',
'sfiledown',
'sfilesearch',
'soundcloud',
'stickersearch',
'textmakervid',
'tiktok',
'trendtwit',
'twitter',
'wallpapercave',
'wallpapercraft',
'wallpaperhd',
'wattpad',
'webtoons',
'wikisearch',
'zerochan',
'zippydl']

	let row = Object.keys(hasil).map((v, index) => ({
		title: 'Scraper ' + hasil[v],
		description: '\nNo. ' + index,
		rowId: usedPrefix + 'scrap ' + hasil[v]
	}))
	let button = {
		buttonText: `☂️ Scraper Disini ☂️`,
		description: `⚡ Silakan pilih Scraper di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
let blum = 'Fitur Ini Belum ditambahkan'
let kueri =  'Masukkan Query\nEx. ' + usedPrefix + command + ' carigc wibu'
if (args[0] == 'android1') {
throw blum
}
if (args[0] == 'anime') {
if (!args[1]) throw kueri
let teks = await sanime(args[1])
	let row = Object.values(teks.result).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nThumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'anoboydl') {
if (!args[1]) throw kueri
let teks = await sanoboydl(args[1])
return conn.sendButton(m.chat, `*RESULT: !*

*Judul:* ${teks.judul}
*Uptime:* ${teks.uptime}
*Link:* ${teks.direct_link}

*${htjava} MFORU ${htjava}*
*SD:* ${teks.mforu.SD}
*HD:* ${teks.mforu.HD}

*${htjava} ZIPPY ${htjava}*
*SD:* ${teks.zippy.SD}
*HD:* ${teks.zippy.HD}

*${htjava} MIRROR ${htjava}*
*SD:* ${teks.mirror.SD}
*HD:* ${teks.mirror.HD}
`, author, null, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'anoboys') {
if (!args[1]) throw kueri
let teks = await sanoboys(args[1])
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nThumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'apkmirror') {
if (!args[1]) throw kueri
let teks = await sapkmirror(args[1])
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nDev: ' + v.dev + '\nSize: ' + v.size + '\nLink: ' + v.link + '\nVersion: ' + v.version + '\nuploaded_on: ' + v.uploaded_on + '\ndownload_count: ' + v.download_count,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'apkmody') {
if (!args[1]) throw kueri
let teks = await sapkmody(args[1])
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\ninfomod: ' + v.infomod + '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'artinama') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'asupanfilm') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'asupanfilminfo') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'bacaresep') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'carigc') {
if (!args[1]) throw kueri
let teks = await scarigc(args[1])
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' *' + v.nama,
		description: '\nNama: *' + v.nama + '\nLink: ' + v.link,
		rowId: usedPrefix + 'inspect ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'cariresep') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'chara') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'corona') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'devianart') {
if (!args[1]) throw kueri
let teks = await sdevianart(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'dewabatch') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'drakor') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'facebook') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'film') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'gempa') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'ghfollower') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'ghfollowing') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'ghuser') {
if (!args[1]) throw kueri
let teks = await sghuser(args[1])
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + teks.name,
		description: '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'goredl') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'happymod') {
if (!args[1]) throw kueri
let teks = await shappymod(args[1])
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nrating: ' + v.rating + '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'happymoddl') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'igdl') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'igdl2') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'igstalk') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'igstory') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'job') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'joox') {
if (!args[1]) throw kueri
let teks = await sjoox(args[1])
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.lagu,
		description: '\nAlbum: ' + v.album + '\nPenyanyi: ' + v.penyanyi + '\nPublish: ' + v.publish + '\nImg: ' + v.img + '\nMp3: ' + v.mp3,
		rowId: usedPrefix + 'get ' + v.mp3
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'kiryu') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'konachan') {
if (!args[1]) throw kueri
let teks = await skonachan(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'manga') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'mangatoon') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'mediafire') {
if (!args[1]) throw kueri
let teks = await smediafire(args[1])
return conn.sendButton(m.chat, `*RESULT!*

*judul:* ${teks.judul}
*upload_date:* ${teks.upload_date}
*size:* ${teks.size}
*mime:* ${teks.mime}
`, author, null, [
                ['GET', usedPrefix + 'get ' + teks.link],
            ], m)
}
if (args[0] == 'merdekanews') {
if (!args[1]) throw kueri
let teks = await smerdekanews()
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nUpload: ' + v.upload_date + '\nLink: ' + v.link + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'metronews') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'palingmurah') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'pin') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'pinterest2') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'quotes') {
if (!args[1]) throw kueri
let teks = await squotes(args[1])
m.reply(teks.quote)
}
if (args[0] == 'randomgore') {
if (!args[1]) throw kueri
let teks = await srandomgore(args[1])
return conn.sendButton(m.chat, `*Result: !*
${teks.data.judul}
${teks.data.views}
${teks.data.comment}
${teks.data.thumb}
`, author, teks.data.link, [
                ['GET', usedPrefix + 'get ' + teks.data.link],
            ], m)
}
if (args[0] == 'randomtt') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'rexdl') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'rexdldown') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'searchgore') {
if (!args[1]) throw kueri
let teks = await ssearchgore(args[1])
let row = Object.values(teks.data).map((v, index ) => ({
		title: index + ' ' + v.judul,
		description: '\nuploader: ' + v.uploader + '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'get ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'sfiledown') {
if (!args[1]) throw kueri
let teks = await ssfiledown(args[1])
return conn.sendButton(m.chat, `*Result: !*

*judul:* ${teks.data.judul}
*size:* ${teks.data.size}
*type:* ${teks.data.type}
*mime:* ${teks.data.mime}
*desc:* ${teks.data.desc}
*uploader:* ${teks.data.uploader}
*uploaded:* ${teks.data.uploaded}
*download_count:* ${teks.data.download_count}
`, author, teks.data.link, [
                ['GET', usedPrefix + 'get ' + teks.data.link],
            ], m)
}
if (args[0] == 'sfilesearch') {
if (!args[1]) throw kueri
let teks = await ssfilesearch(args[1])
	let row = Object.values(teks).map((v, index ) => ({
		title: index + ' ' + v.nama,
		description: '\nNama: ' + v.nama + '\nSize: ' + v.size + '\nLink: ' + v.link,
		rowId: usedPrefix + command + ' sfiledown ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'soundcloud') {
if (!args[1]) throw kueri
let teks = await ssoundcloud(args[1])
return conn.sendButton(m.chat, `*Result: !*

*judul:* ${teks.judul}
*thumb:* ${teks.thumb}
*download_count:* ${teks.download_count}
`, author, teks.link, [
                ['GET', usedPrefix + 'get ' + teks.link],
            ], m)
}
if (args[0] == 'stickersearch') {
if (!args[1]) throw kueri
let teks = await sstickersearch(args[1])
	let row = Object.values(teks).map(( index ) => ({
		title: index + ' ' + teks.title,
		description: '\nAuthor: ' + teks.author + '\nUrl: ' + teks.author_link,
		rowId: usedPrefix + 'fetchsticker ' + [teks.sticker].getRandom() + ' wsf'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'textmakervid') {
if (!args[1]) throw kueri
let teks = await stextmakervid(args[1], args[2])
return conn.sendButton(m.chat, `*Result: !*
${teks.url}

List Style:
0-5
`, author, teks.url, [
                ['GET', usedPrefix + 'get ' + teks.url],
            ], m)
}
if (args[0] == 'tiktok') {
if (!args[1]) throw kueri
let teks = await stiktok(args[1])
conn.send2ButtonVid(m.chat, teks.wm, 'Created By: ' + author, wm, 'No Wm', usedPrefix + 'get ' + teks.nowm, 'Audio', usedPrefix + 'get ' + teks.audio, m)
}
if (args[0] == 'trendtwit') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'twitter') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'wallpapercave') {
if (!args[1]) throw kueri
let teks = await swallpapercave(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'wallpapercraft') {
if (!args[1]) throw kueri
let teks = await swallpapercraft(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'wallpaperhd') {
if (!args[1]) throw kueri
let teks = await swallpaperhd(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'wattpad') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'webtoons') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'wikisearch') {
if (!args[1]) throw kueri
let teks = await swikisearch(args[1])
	let row = Object.values(teks).map(( v, index ) => ({
		title: index + ' ' + v.judul,
		description: '\nWiki: ' + v.wiki + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'get ' + v.thumb
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'zerochan') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'zippydl') {
if (!args[1]) throw kueri
throw blum
}
if (args[0] == 'zippydl2') {
if (!args[1]) throw kueri
throw blum
}

}
handler.command = /^scr(ap(e[rs]?)?|p)$/i

export default handler