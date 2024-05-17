//Zenitsu-Bot7

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧𝙇𝙞𝙨𝙩 𝙊𝙛 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨✧*

*╭────❂* *Owner Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}autoread 
┋⍟┃ ${prefix}autobio 
┋⍟┃ ${prefix}autotype 
┋⍟┃ ${prefix}unavailable 
┋⍟┃ ${prefix}autorecord 
┋⍟┃ ${prefix}autorecordtype 
┋⍟┃ ${prefix}autoswview 
┋⍟┃ ${prefix}setautoblock 
┋⍟┃ ${prefix}setantiforeign 
┋⍟┃ ${prefix}autoblock 
┋⍟┃ ${prefix}onlygc 
┋⍟┃ ${prefix}onlypc 
┋⍟┃ ${prefix}onlyindia 
┋⍟┃ ${prefix}onlyindo 
┋⍟┃ ${prefix}anticall 
┋⍟┃ ${prefix}self 
┋⍟┃ ${prefix}public 
┋⍟┃ ${prefix}join 
┋⍟┃ ${prefix}poll 
┋⍟┃ ${prefix}spam 
┋⍟┃ ${prefix}bc 
┋⍟┃ ${prefix}bcgroup 
┋⍟┃ ${prefix}setmenu 
┋⍟┃ ${prefix}setimgmenu 
┋⍟┃ ${prefix}setvidmenu 
┋⍟┃ ${prefix}setgifmenu 
┋⍟┃ ${prefix}setreply 
┋⍟┃ ${prefix}setprefix 
┋⍟┃ ${prefix}addlimit 
┋⍟┃ ${prefix}dellimit 
┋⍟┃ ${prefix}resethit 
┋⍟┃ ${prefix}resetuser 
┋⍟┃ ${prefix}creategc 
┋⍟┃ ${prefix}setexif 
┋⍟┃ ${prefix}userjid 
┋⍟┃ ${prefix}setbotbio 
┋⍟┃ ${prefix}delppbot 
┋⍟┃ ${prefix}shutdown 
┋⍟┃ ${prefix}setppbot 
┋⍟┃ ${prefix}addprem 
┋⍟┃ ${prefix}delprem 
┋⍟┃ ${prefix}addowner 
┋⍟┃ ${prefix}delowner 
┋⍟┃ ${prefix}addvn 
┋⍟┃ ${prefix}addapk 
┋⍟┃ ${prefix}addzip 
┋⍟┃ ${prefix}addpdf 
┋⍟┃ ${prefix}delapk 
┋⍟┃ ${prefix}delzip 
┋⍟┃ ${prefix}delpdf 
┋⍟┃ ${prefix}delvn 
┋⍟┃ ${prefix}addsticker 
┋⍟┃ ${prefix}delsticker 
┋⍟┃ ${prefix}addimage 
┋⍟┃ ${prefix}delimage 
┋⍟┃ ${prefix}addvideo 
┋⍟┃ ${prefix}delvideo 
┋⍟┃ ${prefix}addtitle 
┋⍟┃ ${prefix}deltitle 
┋⍟┃ ${prefix}upswtext 
┋⍟┃ ${prefix}upswvideo 
┋⍟┃ ${prefix}upswimage 
┋⍟┃ ${prefix}upswaudio 
┋⍟┃ ${prefix}autosticker 
┋⍟┃ ${prefix}block 
┋⍟┃ ${prefix}unblock 
┋⍟┃ ${prefix}leavegc 
┋⍟┃ ${prefix}pushcontact 
┋⍟┃ ${prefix}pushcontactv2 
┋⍟┃ ${prefix}pushcontactv3 
┋⍟┃ ${prefix}jpm 
┋⍟┃ ${prefix}post 
┋⍟┃ ${prefix}clearall 
┋⍟┃ ${prefix}pinchat 
┋⍟┃ ${prefix}unpinchat 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Group Menu* *❂⊷*
╏✺╭─────────────❂   
┋⍟┃ ${prefix}antibot 
┋⍟┃ ${prefix}antiviewonce 
┋⍟┃ ${prefix}readviewonce 
┋⍟┃ ${prefix}welcome 
┋⍟┃ ${prefix}adminevent 
┋⍟┃ ${prefix}groupevent 
┋⍟┃ ${prefix}antiforeign 
┋⍟┃ ${prefix}antimedia 
┋⍟┃ ${prefix}antiaudio 
┋⍟┃ ${prefix}antivideo 
┋⍟┃ ${prefix}antiimage 
┋⍟┃ ${prefix}antidocument 
┋⍟┃ ${prefix}antilocation 
┋⍟┃ ${prefix}anticontact 
┋⍟┃ ${prefix}antisticker 
┋⍟┃ ${prefix}antipoll 
┋⍟┃ ${prefix}antilink 
┋⍟┃ ${prefix}antilinkgc 
┋⍟┃ ${prefix}antipromotion 
┋⍟┃ ${prefix}antivirtex 
┋⍟┃ ${prefix}grouplink 
┋⍟┃ ${prefix}listadmin 
┋⍟┃ ${prefix}invite 
┋⍟┃ ${prefix}ephemeral 
┋⍟┃ ${prefix}delete 
┋⍟┃ ${prefix}setppgroup 
┋⍟┃ ${prefix}delppgroup 
┋⍟┃ ${prefix}setnamegc 
┋⍟┃ ${prefix}setdesc 
┋⍟┃ ${prefix}add 
┋⍟┃ ${prefix}kick 
┋⍟┃ ${prefix}promote 
┋⍟┃ ${prefix}demote 
┋⍟┃ ${prefix}kickall 
┋⍟┃ ${prefix}promoteall 
┋⍟┃ ${prefix}demoteall 
┋⍟┃ ${prefix}getcontact 
┋⍟┃ ${prefix}savecontact 
┋⍟┃ ${prefix}sendcontact 
┋⍟┃ ${prefix}contactag 
┋⍟┃ ${prefix}hidetag 
┋⍟┃ ${prefix}totag 
┋⍟┃ ${prefix}tagall 
┋⍟┃ ${prefix}editinfo 
┋⍟┃ ${prefix}opentime 
┋⍟┃ ${prefix}closetime 
┋⍟┃ ${prefix}resetlink 
┋⍟┃ ${prefix}getbio 
┋⍟┃ ${prefix}vote 
┋⍟┃ ${prefix}upvote 
┋⍟┃ ${prefix}downvote 
┋⍟┃ ${prefix}checkvote 
┋⍟┃ ${prefix}delvote 
┋⍟┃ ${prefix}antivirus 
┋⍟┃ ${prefix}antitoxic 
┋⍟┃ ${prefix}nsfw 
┋⍟┃ ${prefix}react 
┋⍟┃ ${prefix}getjoinrequest 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Search* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}wikipedia 
┋⍟┃ ${prefix}ytsearch 
┋⍟┃ ${prefix}xnxxsearch 
┋⍟┃ ${prefix}xvideosearch 
┋⍟┃ ${prefix}apksearch 
┋⍟┃ ${prefix}stickersearch 
┋⍟┃ ${prefix}imdb 
┋⍟┃ ${prefix}wanumber 
┋⍟┃ ${prefix}friend 
┋⍟┃ ${prefix}lyrics 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Download Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xnxxdl 
┋⍟┃ ${prefix}xvideodl 
┋⍟┃ ${prefix}itunes 
┋⍟┃ ${prefix}play 
┋⍟┃ ${prefix}ytmp3 
┋⍟┃ ${prefix}ytmp4 
┋⍟┃ ${prefix}tiktok 
┋⍟┃ ${prefix}tiktokaudio 
┋⍟┃ ${prefix}tiktokvideo 
┋⍟┃ ${prefix}tiktokslide 
┋⍟┃ ${prefix}igvideo 
┋⍟┃ ${prefix}igimage 
┋⍟┃ ${prefix}facebook 
┋⍟┃ ${prefix}twitter 
┋⍟┃ ${prefix}capcut 
┋⍟┃ ${prefix}apk 
┋⍟┃ ${prefix}mega 
┋⍟┃ ${prefix}mediafire 
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}gimage 
┋⍟┃ ${prefix}weather 
┋⍟┃ ${prefix}spotify 
┋⍟┃ ${prefix}gitclone 
┋⍟┃ ${prefix}happymod 
┋⍟┃ ${prefix}gdrive 
┋⍟┃ ${prefix}pinterest 
┋⍟┃ ${prefix}ringtone 
┋⍟┃ ${prefix}autodownload 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Convert* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}obfuscate 
┋⍟┃ ${prefix}styletext 
┋⍟┃ ${prefix}fliptext 
┋⍟┃ ${prefix}tts 
┋⍟┃ ${prefix}say 
┋⍟┃ ${prefix}togif 
┋⍟┃ ${prefix}toqr 
┋⍟┃ ${prefix}bass 
┋⍟┃ ${prefix}blown 
┋⍟┃ ${prefix}deep 
┋⍟┃ ${prefix}earrape 
┋⍟┃ ${prefix}fast 
┋⍟┃ ${prefix}fat 
┋⍟┃ ${prefix}nightcore 
┋⍟┃ ${prefix}reverse 
┋⍟┃ ${prefix}robot 
┋⍟┃ ${prefix}slow 
┋⍟┃ ${prefix}smooth 
┋⍟┃ ${prefix}squirrel 
┋⍟┃ ${prefix}tinyurl 
┋⍟┃ ${prefix}tovn 
┋⍟┃ ${prefix}toaudio 
┋⍟┃ ${prefix}tomp3 
┋⍟┃ ${prefix}tomp4
┋⍟┃ ${prefix}toimg 
┋⍟┃ ${prefix}toonce 
┋⍟┃ ${prefix}sticker 
┋⍟┃ ${prefix}smeme 
┋⍟┃ ${prefix}smeta 
┋⍟┃ ${prefix}take 
┋⍟┃ ${prefix}emoji 
┋⍟┃ ${prefix}volaudio 
┋⍟┃ ${prefix}volvideo 
┋⍟┃ ${prefix}ebinary 
┋⍟┃ ${prefix}dbinary 
┋⍟┃ ${prefix}ssweb 
┋⍟┃ ${prefix}quoted 
┋⍟┃ ${prefix}translate 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *List* *❂⊷*
╏✺╭─────────────❂   
┋⍟┃ ${prefix}listprem 
┋⍟┃ ${prefix}listowner 
┋⍟┃ ${prefix}liststicker 
┋⍟┃ ${prefix}listimage 
┋⍟┃ ${prefix}listvideo 
┋⍟┃ ${prefix}listvn 
┋⍟┃ ${prefix}listapk 
┋⍟┃ ${prefix}listzip 
┋⍟┃ ${prefix}listpdf 
┋⍟┃ ${prefix}listbadword 
┋⍟┃ ${prefix}listpc 
┋⍟┃ ${prefix}listgc 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Random Photo* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}aesthetic 
┋⍟┃ ${prefix}coffee 
┋⍟┃ ${prefix}wikimedia 
┋⍟┃ ${prefix}wallpaper 
┋⍟┃ ${prefix}art 
┋⍟┃ ${prefix}bts 
┋⍟┃ ${prefix}dogwoof 
┋⍟┃ ${prefix}catmeow 
┋⍟┃ ${prefix}lizardpic 
┋⍟┃ ${prefix}goosebird 
┋⍟┃ ${prefix}8ballpool 
┋⍟┃ ${prefix}cosplay 
┋⍟┃ ${prefix}hacker 
┋⍟┃ ${prefix}cyber 
┋⍟┃ ${prefix}gamewallpaper 
┋⍟┃ ${prefix}islamic 
┋⍟┃ ${prefix}jennie 
┋⍟┃ ${prefix}jiso 
┋⍟┃ ${prefix}satanic 
┋⍟┃ ${prefix}justina 
┋⍟┃ ${prefix}cartoon 
┋⍟┃ ${prefix}pentol 
┋⍟┃ ${prefix}cat 
┋⍟┃ ${prefix}kpop 
┋⍟┃ ${prefix}exo 
┋⍟┃ ${prefix}lisa 
┋⍟┃ ${prefix}space 
┋⍟┃ ${prefix}car 
┋⍟┃ ${prefix}technology 
┋⍟┃ ${prefix}bike 
┋⍟┃ ${prefix}shortquote 
┋⍟┃ ${prefix}antiwork 
┋⍟┃ ${prefix}hacking 
┋⍟┃ ${prefix}boneka 
┋⍟┃ ${prefix}rose 
┋⍟┃ ${prefix}ryujin 
┋⍟┃ ${prefix}ulzzangboy 
┋⍟┃ ${prefix}ulzzanggirl 
┋⍟┃ ${prefix}wallml 
┋⍟┃ ${prefix}wallphone 
┋⍟┃ ${prefix}mountain 
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}profilepic 
┋⍟┃ ${prefix}couplepp 
┋⍟┃ ${prefix}programming 
┋⍟┃ ${prefix}pubg 
┋⍟┃ ${prefix}blackpink 
┋⍟┃ ${prefix}randomboy   
┋⍟┃ ${prefix}randomgirl 
┋⍟┃ ${prefix}hijab   
┋⍟┃ ${prefix}chinese 
┋⍟┃ ${prefix}indo 
┋⍟┃ ${prefix}japanese 
┋⍟┃ ${prefix}korean 
┋⍟┃ ${prefix}malay 
┋⍟┃ ${prefix}thai 
┋⍟┃ ${prefix}vietnamese 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Random Video* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokgirl 
┋⍟┃ ${prefix}tiktoknukthy 
┋⍟┃ ${prefix}tiktokkayes 
┋⍟┃ ${prefix}tiktokpanrika 
┋⍟┃ ${prefix}tiktoknotnot 
┋⍟┃ ${prefix}tiktokghea 
┋⍟┃ ${prefix}tiktoksantuy 
┋⍟┃ ${prefix}tiktokbocil 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Stalker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokstalk 
┋⍟┃ ${prefix}mlstalk 
┋⍟┃ ${prefix}npmstalk 
┋⍟┃ ${prefix}ghstalk 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *OpenAI* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}openai-indo 
┋⍟┃ ${prefix}indo-ai 
┋⍟┃ ${prefix}diffusion 
┋⍟┃ ${prefix}photoleap 
┋⍟┃ ${prefix}openai 
┋⍟┃ ${prefix}dalle 
┋⍟┃ ${prefix}ai 
┋⍟┃ ${prefix}remini 
┋⍟┃ ${prefix}simi 
┋⍟┃ ${prefix}removebg 
┋⍟┃ ${prefix}tozombie 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Game* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}truth 
┋⍟┃ ${prefix}dare 
┋⍟┃ ${prefix}suit 
┋⍟┃ ${prefix}tictactoe 
┋⍟┃ ${prefix}math 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Fun Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}define 
┋⍟┃ ${prefix}readmore 
┋⍟┃ ${prefix}fact 
┋⍟┃ ${prefix}couple 
┋⍟┃ ${prefix}soulmate 
┋⍟┃ ${prefix}stupidcheck 
┋⍟┃ ${prefix}handsomecheck 
┋⍟┃ ${prefix}uncleancheck 
┋⍟┃ ${prefix}hotcheck 
┋⍟┃ ${prefix}smartcheck 
┋⍟┃ ${prefix}greatcheck 
┋⍟┃ ${prefix}evilcheck 
┋⍟┃ ${prefix}dogcheck 
┋⍟┃ ${prefix}coolcheck 
┋⍟┃ ${prefix}waifucheck 
┋⍟┃ ${prefix}awesomecheck 
┋⍟┃ ${prefix}gaycheck 
┋⍟┃ ${prefix}cutecheck 
┋⍟┃ ${prefix}lesbiancheck 
┋⍟┃ ${prefix}hornycheck 
┋⍟┃ ${prefix}prettycheck 
┋⍟┃ ${prefix}lovelycheck 
┋⍟┃ ${prefix}uglycheck 
┋⍟┃ ${prefix}pick 
┋⍟┃ ${prefix}pickupline 
┋⍟┃ ${prefix}quotes 
┋⍟┃ ${prefix}can 
┋⍟┃ ${prefix}is 
┋⍟┃ ${prefix}when 
┋⍟┃ ${prefix}where 
┋⍟┃ ${prefix}what 
┋⍟┃ ${prefix}how 
┋⍟┃ ${prefix}rate 
┋⍟┃ ${prefix}cry 
┋⍟┃ ${prefix}kill 
┋⍟┃ ${prefix}hug 
┋⍟┃ ${prefix}pat 
┋⍟┃ ${prefix}lick  
┋⍟┃ ${prefix}kiss 
┋⍟┃ ${prefix}bite 
┋⍟┃ ${prefix}yeet 
┋⍟┃ ${prefix}bully 
┋⍟┃ ${prefix}bonk 
┋⍟┃ ${prefix}wink 
┋⍟┃ ${prefix}poke 
┋⍟┃ ${prefix}nom 
┋⍟┃ ${prefix}slap 
┋⍟┃ ${prefix}smile  
┋⍟┃ ${prefix}wave 
┋⍟┃ ${prefix}awoo 
┋⍟┃ ${prefix}blush 
┋⍟┃ ${prefix}smug 
┋⍟┃ ${prefix}glomp  
┋⍟┃ ${prefix}happy 
┋⍟┃ ${prefix}dance 
┋⍟┃ ${prefix}cringe 
┋⍟┃ ${prefix}cuddle 
┋⍟┃ ${prefix}highfive  
┋⍟┃ ${prefix}handhold 
┋⍟┃ ${prefix}spank 
┋⍟┃ ${prefix}tickle 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}checkme 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Sticker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}woof 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}lizard 
┋⍟┃ ${prefix}meow 
┋⍟┃ ${prefix}gura 
┋⍟┃ ${prefix}telestick 
┋⍟┃ ${prefix}ttp 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Anime* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}stickhandhold 
┋⍟┃ ${prefix}stickshinobu 
┋⍟┃ ${prefix}stickcuddle 
┋⍟┃ ${prefix}stickhighfive 
┋⍟┃ ${prefix}stickdance 
┋⍟┃ ${prefix}stickcringe 
┋⍟┃ ${prefix}stickhappy 
┋⍟┃ ${prefix}stickglomp 
┋⍟┃ ${prefix}sticksmug 
┋⍟┃ ${prefix}stickblush 
┋⍟┃ ${prefix}stickawoo 
┋⍟┃ ${prefix}stickwave 
┋⍟┃ ${prefix}sticksmile 
┋⍟┃ ${prefix}stickslap 
┋⍟┃ ${prefix}stickpoke 
┋⍟┃ ${prefix}stickwink 
┋⍟┃ ${prefix}stickbonk 
┋⍟┃ ${prefix}stickbully 
┋⍟┃ ${prefix}stickyeet 
┋⍟┃ ${prefix}stickbike 
┋⍟┃ ${prefix}stickkiss 
┋⍟┃ ${prefix}sticklick 
┋⍟┃ ${prefix}stickpat 
┋⍟┃ ${prefix}stickhug 
┋⍟┃ ${prefix}stickkill 
┋⍟┃ ${prefix}stickcry 
┋⍟┃ ${prefix}stickspank 
┋⍟┃ ${prefix}sticktickle 
┋⍟┃ ${prefix}traceanime 
┋⍟┃ ${prefix}akira 
┋⍟┃ ${prefix}akiyama 
┋⍟┃ ${prefix}ana 
┋⍟┃ ${prefix}asuna 
┋⍟┃ ${prefix}ayuzawa 
┋⍟┃ ${prefix}boruto 
┋⍟┃ ${prefix}chiho 
┋⍟┃ ${prefix}chitoge 
┋⍟┃ ${prefix}cosplayloli 
┋⍟┃ ${prefix}cosplaysagiri 
┋⍟┃ ${prefix}deidara 
┋⍟┃ ${prefix}doraemon 
┋⍟┃ ${prefix}elaina 
┋⍟┃ ${prefix}emilia 
┋⍟┃ ${prefix}erza 
┋⍟┃ ${prefix}gremory 
┋⍟┃ ${prefix}hestia 
┋⍟┃ ${prefix}husbu 
┋⍟┃ ${prefix}inori 
┋⍟┃ ${prefix}isuzu 
┋⍟┃ ${prefix}itachi 
┋⍟┃ ${prefix}itori 
┋⍟┃ ${prefix}kaga 
┋⍟┃ ${prefix}kagura 
┋⍟┃ ${prefix}kakasih 
┋⍟┃ ${prefix}kaori 
┋⍟┃ ${prefix}keneki 
┋⍟┃ ${prefix}kotori 
┋⍟┃ ${prefix}kurumi 
┋⍟┃ ${prefix}loli 
┋⍟┃ ${prefix}loli2 
┋⍟┃ ${prefix}madara 
┋⍟┃ ${prefix}megumin 
┋⍟┃ ${prefix}mikasa 
┋⍟┃ ${prefix}mikey 
┋⍟┃ ${prefix}miku 
┋⍟┃ ${prefix}minato 
┋⍟┃ ${prefix}naruto 
┋⍟┃ ${prefix}neko 
┋⍟┃ ${prefix}nekonime 
┋⍟┃ ${prefix}nezuko 
┋⍟┃ ${prefix}onepiece 
┋⍟┃ ${prefix}pokemon 
┋⍟┃ ${prefix}randomnime 
┋⍟┃ ${prefix}randomnime2 
┋⍟┃ ${prefix}rize 
┋⍟┃ ${prefix}sagiri 
┋⍟┃ ${prefix}sakura 
┋⍟┃ ${prefix}sasuke 
┋⍟┃ ${prefix}shina 
┋⍟┃ ${prefix}shinka 
┋⍟┃ ${prefix}shinomiya 
┋⍟┃ ${prefix}shizuka 
┋⍟┃ ${prefix}shota 
┋⍟┃ ${prefix}tejina 
┋⍟┃ ${prefix}toukachan 
┋⍟┃ ${prefix}tsunade 
┋⍟┃ ${prefix}waifu 
┋⍟┃ ${prefix}waifu2 
┋⍟┃ ${prefix}animewall 
┋⍟┃ ${prefix}yotsuba 
┋⍟┃ ${prefix}yuki 
┋⍟┃ ${prefix}yulibocil 
┋⍟┃ ${prefix}yumeko 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}animeawoo 
┋⍟┃ ${prefix}animemegumin 
┋⍟┃ ${prefix}animeshinobu 
┋⍟┃ ${prefix}animehandhold 
┋⍟┃ ${prefix}animehighfive 
┋⍟┃ ${prefix}animecringe 
┋⍟┃ ${prefix}animedance 
┋⍟┃ ${prefix}animehappy 
┋⍟┃ ${prefix}animeglomp 
┋⍟┃ ${prefix}animeblush 
┋⍟┃ ${prefix}animesmug 
┋⍟┃ ${prefix}animewave 
┋⍟┃ ${prefix}animesmille 
┋⍟┃ ${prefix}animepoke 
┋⍟┃ ${prefix}animewink 
┋⍟┃ ${prefix}animebonk 
┋⍟┃ ${prefix}animebully 
┋⍟┃ ${prefix}animeyeet 
┋⍟┃ ${prefix}animebite 
┋⍟┃ ${prefix}animelick 
┋⍟┃ ${prefix}animekill 
┋⍟┃ ${prefix}animecry 
┋⍟┃ ${prefix}animewlp 
┋⍟┃ ${prefix}animekiss 
┋⍟┃ ${prefix}animehug 
┋⍟┃ ${prefix}animeneko 
┋⍟┃ ${prefix}animepat 
┋⍟┃ ${prefix}animeslap 
┋⍟┃ ${prefix}animecuddle 
┋⍟┃ ${prefix}animewaifu 
┋⍟┃ ${prefix}animenom 
┋⍟┃ ${prefix}animefoxgirl 
┋⍟┃ ${prefix}animegecg 
┋⍟┃ ${prefix}animetickle 
┋⍟┃ ${prefix}animefeed 
┋⍟┃ ${prefix}animeavatar 
┋⍟┃ ${prefix}anime 
┋⍟┃ ${prefix}avatar 
┋⍟┃ ${prefix}shinobu 
┋⍟┃ ${prefix}fox_girl 
┋⍟┃ ${prefix}gecg 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Anime NSFW* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}hentai 
┋⍟┃ ${prefix}gifblowjob 
┋⍟┃ ${prefix}hentaivid 
┋⍟┃ ${prefix}hneko 
┋⍟┃ ${prefix}nwaifu 
┋⍟┃ ${prefix}animespank 
┋⍟┃ ${prefix}trap 
┋⍟┃ ${prefix}blowjob 
┋⍟┃ ${prefix}cuckold 
┋⍟┃ ${prefix}milf 
┋⍟┃ ${prefix}eba 
┋⍟┃ ${prefix}pussy 
┋⍟┃ ${prefix}yuri 
┋⍟┃ ${prefix}zettai 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *PhotoOxy Maker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}shadow  
┋⍟┃ ${prefix}write  
┋⍟┃ ${prefix}romantic  
┋⍟┃ ${prefix}burnpaper 
┋⍟┃ ${prefix}smoke  
┋⍟┃ ${prefix}narutobanner  
┋⍟┃ ${prefix}love  
┋⍟┃ ${prefix}undergrass 
┋⍟┃ ${prefix}doublelove  
┋⍟┃ ${prefix}coffecup 
┋⍟┃ ${prefix}underwaterocean 
┋⍟┃ ${prefix}smokyneon 
┋⍟┃ ${prefix}starstext 
┋⍟┃ ${prefix}rainboweffect 
┋⍟┃ ${prefix}balloontext 
┋⍟┃ ${prefix}metalliceffect 
┋⍟┃ ${prefix}embroiderytext 
┋⍟┃ ${prefix}flamingtext 
┋⍟┃ ${prefix}stonetext 
┋⍟┃ ${prefix}writeart 
┋⍟┃ ${prefix}summertext 
┋⍟┃ ${prefix}wolfmetaltext 
┋⍟┃ ${prefix}nature3dtext 
┋⍟┃ ${prefix}rosestext 
┋⍟┃ ${prefix}naturetypography 
┋⍟┃ ${prefix}quotesunder 
┋⍟┃ ${prefix}shinetext 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Database* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}setcmd 
┋⍟┃ ${prefix}delcmd 
┋⍟┃ ${prefix}listcmd 
┋⍟┃ ${prefix}lockcmd 
┋⍟┃ ${prefix}addmsg 
┋⍟┃ ${prefix}delmsg 
┋⍟┃ ${prefix}getmsg 
┋⍟┃ ${prefix}listmsg 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Store* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}list 
┋⍟┃ ${prefix}store 
┋⍟┃ ${prefix}shop 
┋⍟┃ ${prefix}addlist 
┋⍟┃ ${prefix}dellist 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Religon* *❂⊷* 
╏✺╭─────────────❂
┋⍟┃ ${prefix}gita 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}sound1
┋⍟┃ ${prefix}sound2
┋⍟┃ ${prefix}sound3
┋⍟┃ ${prefix}sound4
┋⍟┃ ${prefix}sound5
┋⍟┃ ${prefix}sound6
┋⍟┃ ${prefix}sound7
┋⍟┃ ${prefix}sound8
┋⍟┃ ${prefix}sound9
┋⍟┃ ${prefix}sound10
┋⍟┃ ${prefix}sound11
┋⍟┃ ${prefix}sound12
┋⍟┃ ${prefix}sound13
┋⍟┃ ${prefix}sound14
┋⍟┃ ${prefix}sound15
┋⍟┃ ${prefix}sound16
┋⍟┃ ${prefix}sound17
┋⍟┃ ${prefix}sound18
┋⍟┃ ${prefix}sound19
┋⍟┃ ${prefix}sound20
┋⍟┃ ${prefix}sound21
┋⍟┃ ${prefix}sound22
┋⍟┃ ${prefix}sound23
┋⍟┃ ${prefix}sound24
┋⍟┃ ${prefix}sound25
┋⍟┃ ${prefix}sound26
┋⍟┃ ${prefix}sound27
┋⍟┃ ${prefix}sound28
┋⍟┃ ${prefix}sound29
┋⍟┃ ${prefix}sound30
┋⍟┃ ${prefix}sound31
┋⍟┃ ${prefix}sound32
┋⍟┃ ${prefix}sound33
┋⍟┃ ${prefix}sound34
┋⍟┃ ${prefix}sound35
┋⍟┃ ${prefix}sound36
┋⍟┃ ${prefix}sound37
┋⍟┃ ${prefix}sound38
┋⍟┃ ${prefix}sound39
┋⍟┃ ${prefix}sound40
┋⍟┃ ${prefix}sound41
┋⍟┃ ${prefix}sound42
┋⍟┃ ${prefix}sound43
┋⍟┃ ${prefix}sound44
┋⍟┃ ${prefix}sound45
┋⍟┃ ${prefix}sound46
┋⍟┃ ${prefix}sound47
┋⍟┃ ${prefix}sound48
┋⍟┃ ${prefix}sound49
┋⍟┃ ${prefix}sound50
┋⍟┃ ${prefix}sound51
┋⍟┃ ${prefix}sound52
┋⍟┃ ${prefix}sound53
┋⍟┃ ${prefix}sound54
┋⍟┃ ${prefix}sound55
┋⍟┃ ${prefix}sound56
┋⍟┃ ${prefix}sound57
┋⍟┃ ${prefix}sound58
┋⍟┃ ${prefix}sound59
┋⍟┃ ${prefix}sound60
┋⍟┃ ${prefix}sound61
┋⍟┃ ${prefix}sound62
┋⍟┃ ${prefix}sound63
┋⍟┃ ${prefix}sound64
┋⍟┃ ${prefix}sound65
┋⍟┃ ${prefix}sound66
┋⍟┃ ${prefix}sound67
┋⍟┃ ${prefix}sound68
┋⍟┃ ${prefix}sound69
┋⍟┃ ${prefix}sound70
┋⍟┃ ${prefix}sound71
┋⍟┃ ${prefix}sound72
┋⍟┃ ${prefix}sound73
┋⍟┃ ${prefix}sound74
┋⍟┃ ${prefix}sound75
┋⍟┃ ${prefix}sound76
┋⍟┃ ${prefix}sound77
┋⍟┃ ${prefix}sound78
┋⍟┃ ${prefix}sound79
┋⍟┃ ${prefix}sound80
┋⍟┃ ${prefix}sound81
┋⍟┃ ${prefix}sound82
┋⍟┃ ${prefix}sound83
┋⍟┃ ${prefix}sound84
┋⍟┃ ${prefix}sound85
┋⍟┃ ${prefix}sound86
┋⍟┃ ${prefix}sound87
┋⍟┃ ${prefix}sound88
┋⍟┃ ${prefix}sound89
┋⍟┃ ${prefix}sound90
┋⍟┃ ${prefix}sound91
┋⍟┃ ${prefix}sound92
┋⍟┃ ${prefix}sound93
┋⍟┃ ${prefix}sound94
┋⍟┃ ${prefix}sound95
┋⍟┃ ${prefix}sound96
┋⍟┃ ${prefix}sound97
┋⍟┃ ${prefix}sound98
┋⍟┃ ${prefix}sound99
┋⍟┃ ${prefix}sound100
┋⍟┃ ${prefix}sound101
┋⍟┃ ${prefix}sound102
┋⍟┃ ${prefix}sound103
┋⍟┃ ${prefix}sound104
┋⍟┃ ${prefix}sound105
┋⍟┃ ${prefix}sound106
┋⍟┃ ${prefix}sound107
┋⍟┃ ${prefix}sound108
┋⍟┃ ${prefix}sound109
┋⍟┃ ${prefix}sound110
┋⍟┃ ${prefix}sound111
┋⍟┃ ${prefix}sound112
┋⍟┃ ${prefix}sound113
┋⍟┃ ${prefix}sound114
┋⍟┃ ${prefix}sound115
┋⍟┃ ${prefix}sound116
┋⍟┃ ${prefix}sound117
┋⍟┃ ${prefix}sound118
┋⍟┃ ${prefix}sound119
┋⍟┃ ${prefix}sound120
┋⍟┃ ${prefix}sound121
┋⍟┃ ${prefix}sound122
┋⍟┃ ${prefix}sound123
┋⍟┃ ${prefix}sound124
┋⍟┃ ${prefix}sound125
┋⍟┃ ${prefix}sound126
┋⍟┃ ${prefix}sound127
┋⍟┃ ${prefix}sound128
┋⍟┃ ${prefix}sound129
┋⍟┃ ${prefix}sound130
┋⍟┃ ${prefix}sound131
┋⍟┃ ${prefix}sound132
┋⍟┃ ${prefix}sound133
┋⍟┃ ${prefix}sound134
┋⍟┃ ${prefix}sound135
┋⍟┃ ${prefix}sound136
┋⍟┃ ${prefix}sound137
┋⍟┃ ${prefix}sound138
┋⍟┃ ${prefix}sound139
┋⍟┃ ${prefix}sound140
┋⍟┃ ${prefix}sound141
┋⍟┃ ${prefix}sound142
┋⍟┃ ${prefix}sound143
┋⍟┃ ${prefix}sound144
┋⍟┃ ${prefix}sound145
┋⍟┃ ${prefix}sound146
┋⍟┃ ${prefix}sound147
┋⍟┃ ${prefix}sound148
┋⍟┃ ${prefix}sound149
┋⍟┃ ${prefix}sound150
┋⍟┃ ${prefix}sound151
┋⍟┃ ${prefix}sound152
┋⍟┃ ${prefix}sound153
┋⍟┃ ${prefix}sound154
┋⍟┃ ${prefix}sound155
┋⍟┃ ${prefix}sound156
┋⍟┃ ${prefix}sound157
┋⍟┃ ${prefix}sound158
┋⍟┃ ${prefix}sound159
┋⍟┃ ${prefix}sound160
┋⍟┃ ${prefix}sound161
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *List Vnn* *❂⊷*
╏✺╭─────────────❂
┋⍟┃  Omfoo
┋⍟┃  Omo
┋⍟┃  Omfo
┋⍟┃  Oo
┋⍟┃  Mera
┋⍟┃  Oh
┋⍟┃  🙂
┋⍟┃  Kiya
┋⍟┃  🥲
┋⍟┃  Kya
┋⍟┃  No
┋⍟┃  🦄
┋⍟┃  Gn
┋⍟┃  Good night
┋⍟┃  Gud night
┋⍟┃  Nighty
┋⍟┃  Good morning
┋⍟┃  Morning
┋⍟┃  Gm
┋⍟┃  Sad
┋⍟┃  Wtf
┋⍟┃  Wah
┋⍟┃  Ohhh
┋⍟┃  Everthing
┋⍟┃  Done
┋⍟┃  Galat
┋⍟┃  Galti se
┋⍟┃  Galti ho gyi
┋⍟┃  Gaya
┋⍟┃  Hru?
┋⍟┃  Bhai
┋⍟┃  Shit
┋⍟┃  Wassup
┋⍟┃  How r u?
┋⍟┃  Lel
┋⍟┃  Hello
┋⍟┃  Hey
┋⍟┃  Hlo
┋⍟┃  Hii
┋⍟┃  Hi
┋⍟┃  Hmm
┋⍟┃  Dont leave me alone
┋⍟┃  Leave it
┋⍟┃  Leave me alone
┋⍟┃  Lmao
┋⍟┃  Lol
┋⍟┃  Moj kar di
┋⍟┃  Moj kr di
┋⍟┃  Cool
┋⍟┃  Ass hole
┋⍟┃  Baka
┋⍟┃  Asshole
┋⍟┃  Bot
┋⍟┃  Bye
┋⍟┃  Byy
┋⍟┃  Byee
┋⍟┃  Chacha
┋⍟┃  Chapri
┋⍟┃  Gandu
┋⍟┃  Gaya
┋⍟┃  Good afternoon
┋⍟┃  Good
┋⍟┃  Hehe
┋⍟┃  How you doing
┋⍟┃  Huh
┋⍟┃  Lets go
┋⍟┃  Meri
┋⍟┃  Nah
┋⍟┃  Nhi
┋⍟┃  Okay
┋⍟┃  Op
┋⍟┃  Same here
┋⍟┃  Sorry
┋⍟┃  Toxic
┋⍟┃  Wow
┋⍟┃  Yeah
┋⍟┃  🔥
┋⍟┃  Yo
┋⍟┃  Thanks
┋⍟┃  Ty
┋⍟┃  Thnks
┋⍟┃  Owak
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Bug & War* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xreact 
┋⍟┃ ${prefix}x 
┋⍟┃ ${prefix}x2 
┋⍟┃ ${prefix}iosbug 
┋⍟┃ ${prefix}iosbug2 
┋⍟┃ ${prefix}xaudio 
┋⍟┃ ${prefix}xaudio2 
┋⍟┃ ${prefix}xsticker 
┋⍟┃ ${prefix}xsticker2 
┋⍟┃ ${prefix}xloc 
┋⍟┃ ${prefix}xloc2 
┋⍟┃ ${prefix}xlist 
┋⍟┃ ${prefix}xlist2 
┋⍟┃ ${prefix}xkill 
┋⍟┃ ${prefix}xkill2 
┋⍟┃ ${prefix}xkillgc 
┋⍟┃ ${prefix}tempban 
┋⍟┃ ${prefix}xcrash 
┋⍟┃ ${prefix}xcrash2 
┋⍟┃ ${prefix}xioscrash 
┋⍟┃ ${prefix}xioscrash2 
┋⍟┃ ${prefix}iosgoogle 
┋⍟┃ ${prefix}iosgoogle2 
┋⍟┃ ${prefix}iosq 
┋⍟┃ ${prefix}amountbug 
┋⍟┃ ${prefix}pmbug 
┋⍟┃ ${prefix}delaybug 
┋⍟┃ ${prefix}docubug 
┋⍟┃ ${prefix}unlimitedbug 
┋⍟┃ ${prefix}bombug 
┋⍟┃ ${prefix}lagbug 
┋⍟┃ ${prefix}trollybug 
┋⍟┃ ${prefix}gcbug 
┋⍟┃ ${prefix}delaygcbug 
┋⍟┃ ${prefix}laggcbug 
┋⍟┃ ${prefix}bomgcbug 
┋⍟┃ ${prefix}unlimitedgcbug 
┋⍟┃ ${prefix}trollygcbug 
┋⍟┃ ${prefix}docugcbug 
┋⍟┃ ${prefix}verif 
┋⍟┃ ${prefix}banv1 
┋⍟┃ ${prefix}banv2 
┋⍟┃ ${prefix}banv3 
┋⍟┃ ${prefix}banv4 
┋⍟┃ ${prefix}banv5 
┋⍟┃ ${prefix}banv6 
┋⍟┃ ${prefix}unbanv1 
┋⍟┃ ${prefix}unbanv2 
┋⍟┃ ${prefix}unbanv3 
┋⍟┃ ${prefix}unbanv4 
┋⍟┃ ${prefix}unbanv5 
┋⍟╰───────────────
╰═════════════════⍟

*╭────❂* *Other Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}ping 
┋⍟┃ ${prefix}menu 
┋⍟┃ ${prefix}myip 
┋⍟┃ ${prefix}repo 
┋⍟┃ ${prefix}reportbug 
┋⍟┃ ${prefix}idgroup 
┋⍟┃ ${prefix}owner 
┋⍟┃ ${prefix}rentbot 
┋⍟┃ ${prefix}donate 
┋⍟┃ ${prefix}runtime 
┋⍟┃ ${prefix}checkaccount 
┋⍟╰───────────────
╰═════════════════⍟
❂ *ZENITSU-BOT MULTI DEVICE* ❂

_Thanks For choosing ZENITSU-MD_

*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.animemenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Anime* *❂⊷*
┋⍟┃ ${prefix}stickhandhold 
┋⍟┃ ${prefix}stickshinobu 
┋⍟┃ ${prefix}stickcuddle 
┋⍟┃ ${prefix}stickhighfive 
┋⍟┃ ${prefix}stickdance 
┋⍟┃ ${prefix}stickcringe 
┋⍟┃ ${prefix}stickhappy 
┋⍟┃ ${prefix}stickglomp 
┋⍟┃ ${prefix}sticksmug 
┋⍟┃ ${prefix}stickblush 
┋⍟┃ ${prefix}stickawoo 
┋⍟┃ ${prefix}stickwave 
┋⍟┃ ${prefix}sticksmile 
┋⍟┃ ${prefix}stickslap 
┋⍟┃ ${prefix}stickpoke 
┋⍟┃ ${prefix}stickwink 
┋⍟┃ ${prefix}stickbonk 
┋⍟┃ ${prefix}stickbully 
┋⍟┃ ${prefix}stickyeet 
┋⍟┃ ${prefix}stickbike 
┋⍟┃ ${prefix}stickkiss 
┋⍟┃ ${prefix}sticklick 
┋⍟┃ ${prefix}stickpat 
┋⍟┃ ${prefix}stickhug 
┋⍟┃ ${prefix}stickkill 
┋⍟┃ ${prefix}stickcry 
┋⍟┃ ${prefix}stickspank 
┋⍟┃ ${prefix}sticktickle 
┋⍟┃ ${prefix}traceanime 
┋⍟┃ ${prefix}akira 
┋⍟┃ ${prefix}akiyama 
┋⍟┃ ${prefix}ana 
┋⍟┃ ${prefix}asuna 
┋⍟┃ ${prefix}ayuzawa 
┋⍟┃ ${prefix}boruto 
┋⍟┃ ${prefix}chiho 
┋⍟┃ ${prefix}chitoge 
┋⍟┃ ${prefix}cosplayloli 
┋⍟┃ ${prefix}cosplaysagiri 
┋⍟┃ ${prefix}deidara 
┋⍟┃ ${prefix}doraemon 
┋⍟┃ ${prefix}elaina 
┋⍟┃ ${prefix}emilia 
┋⍟┃ ${prefix}erza 
┋⍟┃ ${prefix}gremory 
┋⍟┃ ${prefix}hestia 
┋⍟┃ ${prefix}husbu 
┋⍟┃ ${prefix}inori 
┋⍟┃ ${prefix}isuzu 
┋⍟┃ ${prefix}itachi 
┋⍟┃ ${prefix}itori 
┋⍟┃ ${prefix}kaga 
┋⍟┃ ${prefix}kagura 
┋⍟┃ ${prefix}kakasih 
┋⍟┃ ${prefix}kaori 
┋⍟┃ ${prefix}keneki 
┋⍟┃ ${prefix}kotori 
┋⍟┃ ${prefix}kurumi 
┋⍟┃ ${prefix}loli 
┋⍟┃ ${prefix}loli2 
┋⍟┃ ${prefix}madara 
┋⍟┃ ${prefix}megumin 
┋⍟┃ ${prefix}mikasa 
┋⍟┃ ${prefix}mikey 
┋⍟┃ ${prefix}miku 
┋⍟┃ ${prefix}minato 
┋⍟┃ ${prefix}naruto 
┋⍟┃ ${prefix}neko 
┋⍟┃ ${prefix}nekonime 
┋⍟┃ ${prefix}nezuko 
┋⍟┃ ${prefix}onepiece 
┋⍟┃ ${prefix}pokemon 
┋⍟┃ ${prefix}randomnime 
┋⍟┃ ${prefix}randomnime2 
┋⍟┃ ${prefix}rize 
┋⍟┃ ${prefix}sagiri 
┋⍟┃ ${prefix}sakura 
┋⍟┃ ${prefix}sasuke 
┋⍟┃ ${prefix}shina 
┋⍟┃ ${prefix}shinka 
┋⍟┃ ${prefix}shinomiya 
┋⍟┃ ${prefix}shizuka 
┋⍟┃ ${prefix}shota 
┋⍟┃ ${prefix}tejina 
┋⍟┃ ${prefix}toukachan 
┋⍟┃ ${prefix}tsunade 
┋⍟┃ ${prefix}waifu 
┋⍟┃ ${prefix}waifu2 
┋⍟┃ ${prefix}animewall 
┋⍟┃ ${prefix}yotsuba 
┋⍟┃ ${prefix}yuki 
┋⍟┃ ${prefix}yulibocil 
┋⍟┃ ${prefix}yumeko 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}animeawoo 
┋⍟┃ ${prefix}animemegumin 
┋⍟┃ ${prefix}animeshinobu 
┋⍟┃ ${prefix}animehandhold 
┋⍟┃ ${prefix}animehighfive 
┋⍟┃ ${prefix}animecringe 
┋⍟┃ ${prefix}animedance 
┋⍟┃ ${prefix}animehappy 
┋⍟┃ ${prefix}animeglomp 
┋⍟┃ ${prefix}animeblush 
┋⍟┃ ${prefix}animesmug 
┋⍟┃ ${prefix}animewave 
┋⍟┃ ${prefix}animesmille 
┋⍟┃ ${prefix}animepoke 
┋⍟┃ ${prefix}animewink 
┋⍟┃ ${prefix}animebonk 
┋⍟┃ ${prefix}animebully 
┋⍟┃ ${prefix}animeyeet 
┋⍟┃ ${prefix}animebite 
┋⍟┃ ${prefix}animelick 
┋⍟┃ ${prefix}animekill 
┋⍟┃ ${prefix}animecry 
┋⍟┃ ${prefix}animewlp 
┋⍟┃ ${prefix}animekiss 
┋⍟┃ ${prefix}animehug 
┋⍟┃ ${prefix}animeneko 
┋⍟┃ ${prefix}animepat 
┋⍟┃ ${prefix}animeslap 
┋⍟┃ ${prefix}animecuddle 
┋⍟┃ ${prefix}animewaifu 
┋⍟┃ ${prefix}animenom 
┋⍟┃ ${prefix}animefoxgirl 
┋⍟┃ ${prefix}animegecg 
┋⍟┃ ${prefix}animetickle 
┋⍟┃ ${prefix}animefeed 
┋⍟┃ ${prefix}animeavatar 
┋⍟┃ ${prefix}anime 
┋⍟┃ ${prefix}animequote 
┋⍟┃ ${prefix}avatar 
┋⍟┃ ${prefix}shinobu 
┋⍟┃ ${prefix}fox_girl 
┋⍟┃ ${prefix}gecg 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.ownermenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Owner Menu* *❂⊷*
┋⍟┃ ${prefix}autoread 
┋⍟┃ ${prefix}autobio 
┋⍟┃ ${prefix}autotype 
┋⍟┃ ${prefix}unavailable 
┋⍟┃ ${prefix}autorecord 
┋⍟┃ ${prefix}autorecordtype 
┋⍟┃ ${prefix}autoswview 
┋⍟┃ ${prefix}setautoblock 
┋⍟┃ ${prefix}setantiforeign 
┋⍟┃ ${prefix}autoblock 
┋⍟┃ ${prefix}onlygc 
┋⍟┃ ${prefix}onlypc 
┋⍟┃ ${prefix}onlyindia 
┋⍟┃ ${prefix}onlyindo 
┋⍟┃ ${prefix}anticall 
┋⍟┃ ${prefix}self 
┋⍟┃ ${prefix}public 
┋⍟┃ ${prefix}join 
┋⍟┃ ${prefix}poll 
┋⍟┃ ${prefix}spam 
┋⍟┃ ${prefix}bc 
┋⍟┃ ${prefix}bcgroup 
┋⍟┃ ${prefix}setmenu 
┋⍟┃ ${prefix}setimgmenu 
┋⍟┃ ${prefix}setvidmenu 
┋⍟┃ ${prefix}setgifmenu 
┋⍟┃ ${prefix}setreply 
┋⍟┃ ${prefix}setprefix 
┋⍟┃ ${prefix}addlimit 
┋⍟┃ ${prefix}dellimit 
┋⍟┃ ${prefix}resethit 
┋⍟┃ ${prefix}resetuser 
┋⍟┃ ${prefix}creategc 
┋⍟┃ ${prefix}userjid 
┋⍟┃ ${prefix}setexif 
┋⍟┃ ${prefix}setbotbio 
┋⍟┃ ${prefix}delppbot 
┋⍟┃ ${prefix}shutdown 
┋⍟┃ ${prefix}setppbot 
┋⍟┃ ${prefix}addprem 
┋⍟┃ ${prefix}delprem 
┋⍟┃ ${prefix}addowner 
┋⍟┃ ${prefix}delowner 
┋⍟┃ ${prefix}addvn 
┋⍟┃ ${prefix}addapk 
┋⍟┃ ${prefix}addzip 
┋⍟┃ ${prefix}addpdf 
┋⍟┃ ${prefix}delapk 
┋⍟┃ ${prefix}delzip 
┋⍟┃ ${prefix}delpdf 
┋⍟┃ ${prefix}delvn 
┋⍟┃ ${prefix}addsticker 
┋⍟┃ ${prefix}delsticker 
┋⍟┃ ${prefix}addimage 
┋⍟┃ ${prefix}delimage 
┋⍟┃ ${prefix}addvideo 
┋⍟┃ ${prefix}delvideo 
┋⍟┃ ${prefix}addtitle 
┋⍟┃ ${prefix}deltitle 
┋⍟┃ ${prefix}upswtext 
┋⍟┃ ${prefix}upswvideo 
┋⍟┃ ${prefix}upswimage 
┋⍟┃ ${prefix}upswaudio 
┋⍟┃ ${prefix}autosticker 
┋⍟┃ ${prefix}block 
┋⍟┃ ${prefix}unblock 
┋⍟┃ ${prefix}leavegc 
┋⍟┃ ${prefix}pushcontact 
┋⍟┃ ${prefix}pushcontactv2 
┋⍟┃ ${prefix}pushcontactv3 
┋⍟┃ ${prefix}jpm 
┋⍟┃ ${prefix}post 
┋⍟┃ ${prefix}clearall 
┋⍟┃ ${prefix}pinchat 
┋⍟┃ ${prefix}unpinchat 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.othermenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Other Menu* *❂⊷*
┋⍟┃ ${prefix}ping 
┋⍟┃ ${prefix}menu 
┋⍟┃ ${prefix}myip 
┋⍟┃ ${prefix}repo 
┋⍟┃ ${prefix}reportbug 
┋⍟┃ ${prefix}idgroup 
┋⍟┃ ${prefix}owner 
┋⍟┃ ${prefix}rentbot 
┋⍟┃ ${prefix}donate 
┋⍟┃ ${prefix}checkaccount 
┋⍟┃ ${prefix}runtime 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.downloadmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Download Menu* *❂⊷*
┋⍟┃ ${prefix}xnxxdl 
┋⍟┃ ${prefix}xvideodl 
┋⍟┃ ${prefix}itunes 
┋⍟┃ ${prefix}play 
┋⍟┃ ${prefix}ytmp3 
┋⍟┃ ${prefix}ytmp4 
┋⍟┃ ${prefix}tiktok 
┋⍟┃ ${prefix}tiktokaudio 
┋⍟┃ ${prefix}tiktokvideo 
┋⍟┃ ${prefix}tiktokslide 
┋⍟┃ ${prefix}igvideo 
┋⍟┃ ${prefix}igimage 
┋⍟┃ ${prefix}facebook 
┋⍟┃ ${prefix}twitter 
┋⍟┃ ${prefix}capcut 
┋⍟┃ ${prefix}apk 
┋⍟┃ ${prefix}mega 
┋⍟┃ ${prefix}mediafire 
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}gimage 
┋⍟┃ ${prefix}weather 
┋⍟┃ ${prefix}spotify 
┋⍟┃ ${prefix}gitclone 
┋⍟┃ ${prefix}happymod 
┋⍟┃ ${prefix}gdrive 
┋⍟┃ ${prefix}pinterest 
┋⍟┃ ${prefix}ringtone 
┋⍟┃ ${prefix}autodownload 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.groupmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Group Menu* *❂⊷*
┋⍟┃ ${prefix}antibot 
┋⍟┃ ${prefix}readviewonce 
┋⍟┃ ${prefix}antiviewonce 
┋⍟┃ ${prefix}welcome 
┋⍟┃ ${prefix}adminevent 
┋⍟┃ ${prefix}groupevent 
┋⍟┃ ${prefix}antiforeign 
┋⍟┃ ${prefix}antimedia 
┋⍟┃ ${prefix}antiaudio 
┋⍟┃ ${prefix}antivideo 
┋⍟┃ ${prefix}antiimage 
┋⍟┃ ${prefix}antidocument 
┋⍟┃ ${prefix}antilocation 
┋⍟┃ ${prefix}anticontact 
┋⍟┃ ${prefix}antisticker 
┋⍟┃ ${prefix}antipoll 
┋⍟┃ ${prefix}antilink 
┋⍟┃ ${prefix}antilinkgc 
┋⍟┃ ${prefix}antipromotion 
┋⍟┃ ${prefix}antivirtex 
┋⍟┃ ${prefix}grouplink 
┋⍟┃ ${prefix}listadmin 
┋⍟┃ ${prefix}invite 
┋⍟┃ ${prefix}ephemeral 
┋⍟┃ ${prefix}delete 
┋⍟┃ ${prefix}setppgroup 
┋⍟┃ ${prefix}delppgroup 
┋⍟┃ ${prefix}setnamegc 
┋⍟┃ ${prefix}setdesc 
┋⍟┃ ${prefix}add 
┋⍟┃ ${prefix}kick 
┋⍟┃ ${prefix}promote 
┋⍟┃ ${prefix}demote 
┋⍟┃ ${prefix}kickall 
┋⍟┃ ${prefix}promoteall 
┋⍟┃ ${prefix}demoteall 
┋⍟┃ ${prefix}getcontact 
┋⍟┃ ${prefix}savecontact 
┋⍟┃ ${prefix}sendcontact 
┋⍟┃ ${prefix}contactag 
┋⍟┃ ${prefix}hidetag 
┋⍟┃ ${prefix}totag 
┋⍟┃ ${prefix}tagall 
┋⍟┃ ${prefix}editinfo 
┋⍟┃ ${prefix}opentime 
┋⍟┃ ${prefix}closetime 
┋⍟┃ ${prefix}resetlink 
┋⍟┃ ${prefix}getbio 
┋⍟┃ ${prefix}vote 
┋⍟┃ ${prefix}upvote 
┋⍟┃ ${prefix}downvote 
┋⍟┃ ${prefix}checkvote 
┋⍟┃ ${prefix}delvote 
┋⍟┃ ${prefix}antivirus 
┋⍟┃ ${prefix}antitoxic 
┋⍟┃ ${prefix}nsfw 
┋⍟┃ ${prefix}react 
┋⍟┃ ${prefix}getjoinrequest 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.funmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Fun Menu* *❂⊷*
┋⍟┃ ${prefix}define 
┋⍟┃ ${prefix}readmore 
┋⍟┃ ${prefix}fact 
┋⍟┃ ${prefix}couple 
┋⍟┃ ${prefix}soulmate 
┋⍟┃ ${prefix}stupidcheck 
┋⍟┃ ${prefix}handsomecheck 
┋⍟┃ ${prefix}uncleancheck 
┋⍟┃ ${prefix}hotcheck 
┋⍟┃ ${prefix}smartcheck 
┋⍟┃ ${prefix}greatcheck 
┋⍟┃ ${prefix}evilcheck 
┋⍟┃ ${prefix}dogcheck 
┋⍟┃ ${prefix}coolcheck 
┋⍟┃ ${prefix}waifucheck 
┋⍟┃ ${prefix}awesomecheck 
┋⍟┃ ${prefix}gaycheck 
┋⍟┃ ${prefix}cutecheck 
┋⍟┃ ${prefix}lesbiancheck 
┋⍟┃ ${prefix}hornycheck 
┋⍟┃ ${prefix}prettycheck 
┋⍟┃ ${prefix}lovelycheck 
┋⍟┃ ${prefix}uglycheck 
┋⍟┃ ${prefix}pick 
┋⍟┃ ${prefix}pickupline 
┋⍟┃ ${prefix}quotes 
┋⍟┃ ${prefix}can 
┋⍟┃ ${prefix}is 
┋⍟┃ ${prefix}when 
┋⍟┃ ${prefix}where 
┋⍟┃ ${prefix}what 
┋⍟┃ ${prefix}how 
┋⍟┃ ${prefix}rate 
┋⍟┃ ${prefix}cry 
┋⍟┃ ${prefix}kill 
┋⍟┃ ${prefix}hug 
┋⍟┃ ${prefix}pat 
┋⍟┃ ${prefix}lick  
┋⍟┃ ${prefix}kiss 
┋⍟┃ ${prefix}bite 
┋⍟┃ ${prefix}yeet 
┋⍟┃ ${prefix}bully 
┋⍟┃ ${prefix}bonk 
┋⍟┃ ${prefix}wink 
┋⍟┃ ${prefix}poke 
┋⍟┃ ${prefix}nom 
┋⍟┃ ${prefix}slap 
┋⍟┃ ${prefix}smile  
┋⍟┃ ${prefix}wave 
┋⍟┃ ${prefix}awoo 
┋⍟┃ ${prefix}blush 
┋⍟┃ ${prefix}smug 
┋⍟┃ ${prefix}glomp  
┋⍟┃ ${prefix}happy 
┋⍟┃ ${prefix}dance 
┋⍟┃ ${prefix}cringe ??
┋⍟┃ ${prefix}cuddle 
┋⍟┃ ${prefix}highfive  
┋⍟┃ ${prefix}handhold 
┋⍟┃ ${prefix}spank 
┋⍟┃ ${prefix}tickle 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}checkme  
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.stalkermenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Stalker* *❂⊷*
┋⍟┃ ${prefix}tiktokstalk 
┋⍟┃ ${prefix}mlstalk 
┋⍟┃ ${prefix}npmstalk 
┋⍟┃ ${prefix}ghstalk 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.stickermenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Sticker* *❂⊷*
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}woof 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}lizard 
┋⍟┃ ${prefix}meow 
┋⍟┃ ${prefix}gura 
┋⍟┃ ${prefix}telestick 
┋⍟┃ ${prefix}ttp 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.databasemenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

  *╭────❂* *Database* *❂⊷*
┋⍟┃ ${prefix}setcmd 
┋⍟┃ ${prefix}delcmd 
┋⍟┃ ${prefix}listcmd 
┋⍟┃ ${prefix}lockcmd 
┋⍟┃ ${prefix}addmsg 
┋⍟┃ ${prefix}delmsg 
┋⍟┃ ${prefix}getmsg 
┋⍟┃ ${prefix}listmsg 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.storemenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Store* *❂⊷*
┋⍟┃ ${prefix}list 
┋⍟┃ ${prefix}store 
┋⍟┃ ${prefix}shop 
┋⍟┃ ${prefix}addlist 
┋⍟┃ ${prefix}dellist 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.aimenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *OpenAI* *❂⊷*
┋⍟┃ ${prefix}openai-indo 
┋⍟┃ ${prefix}indo-ai 
┋⍟┃ ${prefix}diffusion 
┋⍟┃ ${prefix}photoleap 
┋⍟┃ ${prefix}openai 
┋⍟┃ ${prefix}dalle 
┋⍟┃ ${prefix}ai 
┋⍟┃ ${prefix}remini 
┋⍟┃ ${prefix}simi 
┋⍟┃ ${prefix}removebg 
┋⍟┃ ${prefix}tozombie 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.bugmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Bug & War* *❂⊷*
┋⍟┃ ${prefix}xreact 
┋⍟┃ ${prefix}x 
┋⍟┃ ${prefix}x2 
┋⍟┃ ${prefix}iosbug 
┋⍟┃ ${prefix}iosbug2 
┋⍟┃ ${prefix}xaudio 
┋⍟┃ ${prefix}xaudio2 
┋⍟┃ ${prefix}xsticker 
┋⍟┃ ${prefix}xsticker2 
┋⍟┃ ${prefix}xloc 
┋⍟┃ ${prefix}xloc2 
┋⍟┃ ${prefix}xlist 
┋⍟┃ ${prefix}xlist2 
┋⍟┃ ${prefix}xkill 
┋⍟┃ ${prefix}xkill2 
┋⍟┃ ${prefix}xkillgc 
┋⍟┃ ${prefix}tempban 
┋⍟┃ ${prefix}xcrash 
┋⍟┃ ${prefix}xcrash2 
┋⍟┃ ${prefix}xioscrash 
┋⍟┃ ${prefix}xioscrash2 
┋⍟┃ ${prefix}iosgoogle 
┋⍟┃ ${prefix}iosgoogle2 
┋⍟┃ ${prefix}iosq 
┋⍟┃ ${prefix}amountbug 
┋⍟┃ ${prefix}pmbug 
┋⍟┃ ${prefix}delaybug 
┋⍟┃ ${prefix}docubug 
┋⍟┃ ${prefix}unlimitedbug 
┋⍟┃ ${prefix}bombug 
┋⍟┃ ${prefix}lagbug 
┋⍟┃ ${prefix}trollybug 
┋⍟┃ ${prefix}gcbug 
┋⍟┃ ${prefix}delaygcbug 
┋⍟┃ ${prefix}laggcbug 
┋⍟┃ ${prefix}bomgcbug 
┋⍟┃ ${prefix}unlimitedgcbug 
┋⍟┃ ${prefix}trollygcbug 
┋⍟┃ ${prefix}docugcbug 
┋⍟┃ ${prefix}verif 
┋⍟┃ ${prefix}banv1 
┋⍟┃ ${prefix}banv2 
┋⍟┃ ${prefix}banv3 
┋⍟┃ ${prefix}banv4 
┋⍟┃ ${prefix}banv5 
┋⍟┃ ${prefix}banv6 
┋⍟┃ ${prefix}unbanv1 
┋⍟┃ ${prefix}unbanv2 
┋⍟┃ ${prefix}unbanv3 
┋⍟┃ ${prefix}unbanv4 
┋⍟┃ ${prefix}unbanv5 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.randphotomenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Random Photo* *❂⊷*
┋⍟┃ ${prefix}aesthetic 
┋⍟┃ ${prefix}coffee 
┋⍟┃ ${prefix}wikimedia 
┋⍟┃ ${prefix}wallpaper 
┋⍟┃ ${prefix}art 
┋⍟┃ ${prefix}bts 
┋⍟┃ ${prefix}dogwoof 
┋⍟┃ ${prefix}catmeow 
┋⍟┃ ${prefix}lizardpic 
┋⍟┃ ${prefix}goosebird 
┋⍟┃ ${prefix}8ballpool 
┋⍟┃ ${prefix}cosplay 
┋⍟┃ ${prefix}hacker 
┋⍟┃ ${prefix}cyber 
┋⍟┃ ${prefix}gamewallpaper 
┋⍟┃ ${prefix}islamic 
┋⍟┃ ${prefix}jennie 
┋⍟┃ ${prefix}jiso 
┋⍟┃ ${prefix}satanic 
┋⍟┃ ${prefix}justina 
┋⍟┃ ${prefix}cartoon 
┋⍟┃ ${prefix}pentol 
┋⍟┃ ${prefix}cat 
┋⍟┃ ${prefix}kpop 
┋⍟┃ ${prefix}exo 
┋⍟┃ ${prefix}lisa 
┋⍟┃ ${prefix}space 
┋⍟┃ ${prefix}car 
┋⍟┃ ${prefix}technology 
┋⍟┃ ${prefix}bike 
┋⍟┃ ${prefix}shortquote 
┋⍟┃ ${prefix}antiwork 
┋⍟┃ ${prefix}hacking 
┋⍟┃ ${prefix}boneka 
┋⍟┃ ${prefix}rose 
┋⍟┃ ${prefix}ryujin 
┋⍟┃ ${prefix}ulzzangboy 
┋⍟┃ ${prefix}ulzzanggirl 
┋⍟┃ ${prefix}wallml 
┋⍟┃ ${prefix}wallphone 
┋⍟┃ ${prefix}mountain 
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}profilepic 
┋⍟┃ ${prefix}couplepp 
┋⍟┃ ${prefix}programming 
┋⍟┃ ${prefix}pubg 
┋⍟┃ ${prefix}blackpink 
┋⍟┃ ${prefix}randomboy   
┋⍟┃ ${prefix}randomgirl 
┋⍟┃ ${prefix}hijab   
┋⍟┃ ${prefix}chinese 
┋⍟┃ ${prefix}indo 
┋⍟┃ ${prefix}japanese 
┋⍟┃ ${prefix}korean 
┋⍟┃ ${prefix}malay 
┋⍟┃ ${prefix}thai 
┋⍟┃ ${prefix}vietnamese 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.randvideomenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Random Video* *❂⊷*
┋⍟┃ ${prefix}tiktokgirl 
┋⍟┃ ${prefix}tiktoknukthy 
┋⍟┃ ${prefix}tiktokkayes 
┋⍟┃ ${prefix}tiktokpanrika 
┋⍟┃ ${prefix}tiktoknotnot 
┋⍟┃ ${prefix}tiktokghea 
┋⍟┃ ${prefix}tiktoksantuy 
┋⍟┃ ${prefix}tiktokbocil 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.photooxymenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *PhotoOxy Maker* *❂⊷*
┋⍟┃ ${prefix}shadow  
┋⍟┃ ${prefix}write  
┋⍟┃ ${prefix}romantic  
┋⍟┃ ${prefix}burnpaper 
┋⍟┃ ${prefix}smoke  
┋⍟┃ ${prefix}narutobanner  
┋⍟┃ ${prefix}love  
┋⍟┃ ${prefix}undergrass 
┋⍟┃ ${prefix}doublelove  
┋⍟┃ ${prefix}coffecup 
┋⍟┃ ${prefix}underwaterocean 
┋⍟┃ ${prefix}smokyneon 
┋⍟┃ ${prefix}starstext 
┋⍟┃ ${prefix}rainboweffect 
┋⍟┃ ${prefix}balloontext 
┋⍟┃ ${prefix}metalliceffect 
┋⍟┃ ${prefix}embroiderytext 
┋⍟┃ ${prefix}flamingtext 
┋⍟┃ ${prefix}stonetext 
┋⍟┃ ${prefix}writeart 
┋⍟┃ ${prefix}summertext 
┋⍟┃ ${prefix}wolfmetaltext 
┋⍟┃ ${prefix}nature3dtext 
┋⍟┃ ${prefix}rosestext 
┋⍟┃ ${prefix}naturetypography 
┋⍟┃ ${prefix}quotesunder 
┋⍟┃ ${prefix}shinetext 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.nsfwmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Anime NSFW* *❂⊷*
┋⍟┃ ${prefix}hentai 
┋⍟┃ ${prefix}gifblowjob 
┋⍟┃ ${prefix}hentaivid 
┋⍟┃ ${prefix}hneko 
┋⍟┃ ${prefix}nwaifu 
┋⍟┃ ${prefix}animespank 
┋⍟┃ ${prefix}trap 
┋⍟┃ ${prefix}blowjob 
┋⍟┃ ${prefix}cuckold 
┋⍟┃ ${prefix}milf 
┋⍟┃ ${prefix}eba 
┋⍟┃ ${prefix}pussy 
┋⍟┃ ${prefix}yuri 
┋⍟┃ ${prefix}zettai 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.gamemenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Game* *❂⊷*
┋⍟┃ ${prefix}truth 
┋⍟┃ ${prefix}dare 
┋⍟┃ ${prefix}suit 
┋⍟┃ ${prefix}tictactoe 
┋⍟┃ ${prefix}math 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.religionmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Religon* *❂⊷*
┋⍟┃ ${prefix}gita 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.searchmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Search* *❂⊷*
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}wikipedia 
┋⍟┃ ${prefix}ytsearch 
┋⍟┃ ${prefix}xnxxsearch 
┋⍟┃ ${prefix}xvideosearch 
┋⍟┃ ${prefix}apksearch 
┋⍟┃ ${prefix}stickersearch 
┋⍟┃ ${prefix}imdb 
┋⍟┃ ${prefix}wanumber 
┋⍟┃ ${prefix}friend 
┋⍟┃ ${prefix}lyrics 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.convertmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *Convert* *❂⊷*
┋⍟┃ ${prefix}obfuscate 
┋⍟┃ ${prefix}styletext 
┋⍟┃ ${prefix}fliptext 
┋⍟┃ ${prefix}tts 
┋⍟┃ ${prefix}say 
┋⍟┃ ${prefix}togif 
┋⍟┃ ${prefix}toqr 
┋⍟┃ ${prefix}bass 
┋⍟┃ ${prefix}blown 
┋⍟┃ ${prefix}deep 
┋⍟┃ ${prefix}earrape 
┋⍟┃ ${prefix}fast 
┋⍟┃ ${prefix}fat 
┋⍟┃ ${prefix}nightcore 
┋⍟┃ ${prefix}reverse 
┋⍟┃ ${prefix}robot 
┋⍟┃ ${prefix}slow 
┋⍟┃ ${prefix}smooth 
┋⍟┃ ${prefix}squirrel 
┋⍟┃ ${prefix}tinyurl 
┋⍟┃ ${prefix}tovn 
┋⍟┃ ${prefix}toaudio 
┋⍟┃ ${prefix}tomp3 
┋⍟┃ ${prefix}tomp4
┋⍟┃ ${prefix}toimg 
┋⍟┃ ${prefix}toonce 
┋⍟┃ ${prefix}sticker 
┋⍟┃ ${prefix}smeme 
┋⍟┃ ${prefix}smeta 
┋⍟┃ ${prefix}take 
┋⍟┃ ${prefix}emoji 
┋⍟┃ ${prefix}volaudio 
┋⍟┃ ${prefix}volvideo 
┋⍟┃ ${prefix}ebinary 
┋⍟┃ ${prefix}dbinary 
┋⍟┃ ${prefix}ssweb 
┋⍟┃ ${prefix}quoted 
┋⍟┃ ${prefix}translate 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.listmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *List* *❂⊷*
┋⍟┃ ${prefix}listprem 
┋⍟┃ ${prefix}listowner 
┋⍟┃ ${prefix}liststicker 
┋⍟┃ ${prefix}listimage 
┋⍟┃ ${prefix}listvideo 
┋⍟┃ ${prefix}listvn 
┋⍟┃ ${prefix}listapk 
┋⍟┃ ${prefix}listzip 
┋⍟┃ ${prefix}listpdf 
┋⍟┃ ${prefix}listbadword 
┋⍟┃ ${prefix}listpc 
┋⍟┃ ${prefix}listgc 
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.soundmenu = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮* *❂⊷*
┋⍟┃ ${prefix}sound1
┋⍟┃ ${prefix}sound2
┋⍟┃ ${prefix}sound3
┋⍟┃ ${prefix}sound4
┋⍟┃ ${prefix}sound5
┋⍟┃ ${prefix}sound6
┋⍟┃ ${prefix}sound7
┋⍟┃ ${prefix}sound8
┋⍟┃ ${prefix}sound9
┋⍟┃ ${prefix}sound10
┋⍟┃ ${prefix}sound11
┋⍟┃ ${prefix}sound12
┋⍟┃ ${prefix}sound13
┋⍟┃ ${prefix}sound14
┋⍟┃ ${prefix}sound15
┋⍟┃ ${prefix}sound16
┋⍟┃ ${prefix}sound17
┋⍟┃ ${prefix}sound18
┋⍟┃ ${prefix}sound19
┋⍟┃ ${prefix}sound20
┋⍟┃ ${prefix}sound21
┋⍟┃ ${prefix}sound22
┋⍟┃ ${prefix}sound23
┋⍟┃ ${prefix}sound24
┋⍟┃ ${prefix}sound25
┋⍟┃ ${prefix}sound26
┋⍟┃ ${prefix}sound27
┋⍟┃ ${prefix}sound28
┋⍟┃ ${prefix}sound29
┋⍟┃ ${prefix}sound30
┋⍟┃ ${prefix}sound31
┋⍟┃ ${prefix}sound32
┋⍟┃ ${prefix}sound33
┋⍟┃ ${prefix}sound34
┋⍟┃ ${prefix}sound35
┋⍟┃ ${prefix}sound36
┋⍟┃ ${prefix}sound37
┋⍟┃ ${prefix}sound38
┋⍟┃ ${prefix}sound39
┋⍟┃ ${prefix}sound40
┋⍟┃ ${prefix}sound41
┋⍟┃ ${prefix}sound42
┋⍟┃ ${prefix}sound43
┋⍟┃ ${prefix}sound44
┋⍟┃ ${prefix}sound45
┋⍟┃ ${prefix}sound46
┋⍟┃ ${prefix}sound47
┋⍟┃ ${prefix}sound48
┋⍟┃ ${prefix}sound49
┋⍟┃ ${prefix}sound50
┋⍟┃ ${prefix}sound51
┋⍟┃ ${prefix}sound52
┋⍟┃ ${prefix}sound53
┋⍟┃ ${prefix}sound54
┋⍟┃ ${prefix}sound55
┋⍟┃ ${prefix}sound56
┋⍟┃ ${prefix}sound57
┋⍟┃ ${prefix}sound58
┋⍟┃ ${prefix}sound59
┋⍟┃ ${prefix}sound60
┋⍟┃ ${prefix}sound61
┋⍟┃ ${prefix}sound62
┋⍟┃ ${prefix}sound63
┋⍟┃ ${prefix}sound64
┋⍟┃ ${prefix}sound65
┋⍟┃ ${prefix}sound66
┋⍟┃ ${prefix}sound67
┋⍟┃ ${prefix}sound68
┋⍟┃ ${prefix}sound69
┋⍟┃ ${prefix}sound70
┋⍟┃ ${prefix}sound71
┋⍟┃ ${prefix}sound72
┋⍟┃ ${prefix}sound73
┋⍟┃ ${prefix}sound74
┋⍟┃ ${prefix}sound75
┋⍟┃ ${prefix}sound76
┋⍟┃ ${prefix}sound77
┋⍟┃ ${prefix}sound78
┋⍟┃ ${prefix}sound79
┋⍟┃ ${prefix}sound80
┋⍟┃ ${prefix}sound81
┋⍟┃ ${prefix}sound82
┋⍟┃ ${prefix}sound83
┋⍟┃ ${prefix}sound84
┋⍟┃ ${prefix}sound85
┋⍟┃ ${prefix}sound86
┋⍟┃ ${prefix}sound87
┋⍟┃ ${prefix}sound88
┋⍟┃ ${prefix}sound89
┋⍟┃ ${prefix}sound90
┋⍟┃ ${prefix}sound91
┋⍟┃ ${prefix}sound92
┋⍟┃ ${prefix}sound93
┋⍟┃ ${prefix}sound94
┋⍟┃ ${prefix}sound95
┋⍟┃ ${prefix}sound96
┋⍟┃ ${prefix}sound97
┋⍟┃ ${prefix}sound98
┋⍟┃ ${prefix}sound99
┋⍟┃ ${prefix}sound100
┋⍟┃ ${prefix}sound101
┋⍟┃ ${prefix}sound102
┋⍟┃ ${prefix}sound103
┋⍟┃ ${prefix}sound104
┋⍟┃ ${prefix}sound105
┋⍟┃ ${prefix}sound106
┋⍟┃ ${prefix}sound107
┋⍟┃ ${prefix}sound108
┋⍟┃ ${prefix}sound109
┋⍟┃ ${prefix}sound110
┋⍟┃ ${prefix}sound111
┋⍟┃ ${prefix}sound112
┋⍟┃ ${prefix}sound113
┋⍟┃ ${prefix}sound114
┋⍟┃ ${prefix}sound115
┋⍟┃ ${prefix}sound116
┋⍟┃ ${prefix}sound117
┋⍟┃ ${prefix}sound118
┋⍟┃ ${prefix}sound119
┋⍟┃ ${prefix}sound120
┋⍟┃ ${prefix}sound121
┋⍟┃ ${prefix}sound122
┋⍟┃ ${prefix}sound123
┋⍟┃ ${prefix}sound124
┋⍟┃ ${prefix}sound125
┋⍟┃ ${prefix}sound126
┋⍟┃ ${prefix}sound127
┋⍟┃ ${prefix}sound128
┋⍟┃ ${prefix}sound129
┋⍟┃ ${prefix}sound130
┋⍟┃ ${prefix}sound131
┋⍟┃ ${prefix}sound132
┋⍟┃ ${prefix}sound133
┋⍟┃ ${prefix}sound134
┋⍟┃ ${prefix}sound135
┋⍟┃ ${prefix}sound136
┋⍟┃ ${prefix}sound137
┋⍟┃ ${prefix}sound138
┋⍟┃ ${prefix}sound139
┋⍟┃ ${prefix}sound140
┋⍟┃ ${prefix}sound141
┋⍟┃ ${prefix}sound142
┋⍟┃ ${prefix}sound143
┋⍟┃ ${prefix}sound144
┋⍟┃ ${prefix}sound145
┋⍟┃ ${prefix}sound146
┋⍟┃ ${prefix}sound147
┋⍟┃ ${prefix}sound148
┋⍟┃ ${prefix}sound149
┋⍟┃ ${prefix}sound150
┋⍟┃ ${prefix}sound151
┋⍟┃ ${prefix}sound152
┋⍟┃ ${prefix}sound153
┋⍟┃ ${prefix}sound154
┋⍟┃ ${prefix}sound155
┋⍟┃ ${prefix}sound156
┋⍟┃ ${prefix}sound157
┋⍟┃ ${prefix}sound158
┋⍟┃ ${prefix}sound159
┋⍟┃ ${prefix}sound160
┋⍟┃ ${prefix}sound161
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

global.listvnn = (prefix) => {
return `*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨*

*✧List Of Commands✧* 

   *╭────❂* *List Vnn* *❂⊷*
┋⍟┃  Omfoo
┋⍟┃  Omo
┋⍟┃  Omfo
┋⍟┃  Oo
┋⍟┃  Mera
┋⍟┃  Oh
┋⍟┃  🙂
┋⍟┃  Kiya
┋⍟┃  🥲
┋⍟┃  Kya
┋⍟┃  No
┋⍟┃  🦄
┋⍟┃  Gn
┋⍟┃  Good night
┋⍟┃  Gud night
┋⍟┃  Nighty
┋⍟┃  Good morning
┋⍟┃  Morning
┋⍟┃  Gm
┋⍟┃  Sad
┋⍟┃  Wtf
┋⍟┃  Wah
┋⍟┃  Ohhh
┋⍟┃  Everthing
┋⍟┃  Done
┋⍟┃  Galat
┋⍟┃  Galti se
┋⍟┃  Galti ho gyi
┋⍟┃  Gaya
┋⍟┃  Hru?
┋⍟┃  Bhai
┋⍟┃  Shit
┋⍟┃  Wassup
┋⍟┃  How r u?
┋⍟┃  Lel
┋⍟┃  Hello
┋⍟┃  Hey
┋⍟┃  Hlo
┋⍟┃  Hii
┋⍟┃  Hi
┋⍟┃  Hmm
┋⍟┃  Dont leave me alone
┋⍟┃  Leave it
┋⍟┃  Leave me alone
┋⍟┃  Lmao
┋⍟┃  Lol
┋⍟┃  Moj kar di
┋⍟┃  Moj kr di
┋⍟┃  Cool
┋⍟┃  Ass hole
┋⍟┃  Baka
┋⍟┃  Asshole
┋⍟┃  Bot
┋⍟┃  Bye
┋⍟┃  Byy
┋⍟┃  Byee
┋⍟┃  Chacha
┋⍟┃  Chapri
┋⍟┃  Gandu
┋⍟┃  Gaya
┋⍟┃  Good afternoon
┋⍟┃  Good
┋⍟┃  Hehe
┋⍟┃  How you doing
┋⍟┃  Huh
┋⍟┃  Lets go
┋⍟┃  Meri
┋⍟┃  Nah
┋⍟┃  Nhi
┋⍟┃  Okay
┋⍟┃  Op
┋⍟┃  Same here
┋⍟┃  Sorry
┋⍟┃  Toxic
┋⍟┃  Wow
┋⍟┃  Yeah
┋⍟┃  🔥
┋⍟┃  Yo
┋⍟┃  Thanks
┋⍟┃  Ty
┋⍟┃  Thnks
┋⍟┃  Owak
┋⍟╰───────────────
╰═════════════════⍟
 
❂            ❂
*————— ❂ —————*

  *𝙕𝙚𝙣𝙞𝙩𝙨𝙪-𝘽𝙤𝙩*                                         
*╰═════════════❂*
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})