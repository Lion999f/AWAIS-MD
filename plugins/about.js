
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ •𝐀𝐖𝐀𝐈𝐒 𝗝𝐔𝐓𝐓⁶¹⁰*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ •𝐀𝐖𝐀𝐈𝐒 𝗝𝐔𝐓𝐓⁶¹⁰*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 Tʜᴇ THE LOSER*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ AWAIS*
*│  ◦* *ᴀɢᴇ➠ 21*
*│  ◦* *ᴄɪᴛʏ➠ Nᴇᴡ Yᴏʀᴋ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • •𝐀𝐖𝐀𝐈𝐒 𝗝𝐔𝐓𝐓⁶¹⁰ - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠•𝐀𝐖𝐀𝐈𝐒 𝗝𝐔𝐓𝐓⁶¹⁰*
*│  ◦* *▢➠Tʜᴇ LOSER*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ •𝐀𝐖𝐀𝐈𝐒 𝗝𝐔𝐓𝐓⁶¹⁰
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
