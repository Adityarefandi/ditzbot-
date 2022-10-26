/** 
script bot ini free

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6282244877433']
global.ownernomer = "6282244877433"
global.premium = ['6282244877433']
global.packname = 'ʚ𝗗𝗶𝘁‘𝘇_𝗯𝗼𝘁'
global.author = '𝓐𝓭𝓲𝓽𝔂𝓪 𝓡𝓮𝓯𝓪𝓷𝓭𝓲ɞ'
global.sessionName = 'session'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/Adityarefandi'
global.myyt = 'https://chat.whatsapp.com/KosmbTPMlB2DvXh1R93ns0
global.myytv = 'https://chat.whatsapp.com/KosmbTPMlB2DvXh1R93ns0
global.mygc = "https://chat.whatsapp.com/KosmbTPMlB2DvXh1R93ns0"
global.botname = '𝙳𝚒𝚝‘𝚣_𝚋𝚘𝚝'
global.akulaku = '-'
global.ytname = 'Ditz chn ofc'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
