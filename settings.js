/*

  !- Credits By Kryx
  https://wa.me/60137345871
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '60137345871'
global.versi = version
global.namaOwner = "H"
global.packname = 'CyberXKryxV5'
global.botname = 'CyberXKryxV5'
global.botname2 = 'CyberXKryxV5'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/60137345871"
global.linkGrup = "https://chat.whatsapp.com/Do9CkQszkIlDIbSHKXzFGl"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://chat.whatsapp.com/Do9CkQszkIlDIbSHKXzFGl"
global.idSaluran = "https://chat.whatsapp.com/Do9CkQszkIlDIbSHKXzFGl"
global.namaSaluran = "🚀✦ INFO ✦🚀"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = ""
global.apiOrderKuota = ""
global.qrisOrderKuota = ""

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "ga ada"
global.ovo = "ga ada"
global.gopay = "ga ada"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://img86.pixhost.to/images/556/564091138_skyzopedia.jpg", 
reply: "https://img86.pixhost.to/images/556/564091138_skyzopedia.jpg", 
logo: "https://img86.pixhost.to/images/556/564091138_skyzopedia.jpg", 
qris: ""
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://ganjarcool.server-vip.xyz"
global.apikey = "ptla_ZGVXeqON71cdK8bTfniJfRRAbNhR4bvvKMBW4T9tpgl" //ptla
global.capikey = "ptlc_Ho9WVyRenDUnPEfc3Pv48UlVAL8aJbIuzqPx0EkMRn8" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://zakzzkecebos.zakzz.web.id"
global.apikeyV2 = "ptla_ZGVXeqON71cdK8bTfniJfRRAbNhR4bvvKMBW4T9tpgl" //ptla
global.capikeyV2 = "ptlc_waKZl2uyHIDvhaaTTAiL4tMxD7DtJjKuDNDr0n6kUIC>" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ 𝐀𝐊𝐄𝐒 𝐆𝐀𝐆𝐀𝐋❗]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ OWNER😴 ",
	admin: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ADMIN",
	botAdmin: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴊᴀᴅɪ ADMIN",
	group: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɴɢᴜɴᴀᴋᴀɴ ᴅɪᴅᴀʟᴀᴍ ɢʀᴜʙ",
	private: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ",
	prem: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴘʀᴇᴍɪᴜᴍ!",
	wait: 'Sabar bro 🗿',
	error: 'Gagal lah bro ❗',
	done: 'Done bro ✅'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})