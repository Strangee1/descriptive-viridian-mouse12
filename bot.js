const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const UserBlocked = new Set();
const prefix = '^'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Whit FanBot.",{type:'WATCHING'});
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot with GMZN Host')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];
  //command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if (message.content.startsWith(prefix + "say")) {
 if (message.author.id !== '516576049778130954') return message.reply('** فقط لصاحب البوت :no_entry:  **')
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});

client.on("message", message => {
      if (message.content === "^ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
  var prefix = "^";
if (message.content === "^help") {
   message.channel.send('Please **Check** Your DM :mailbox_with_mail: ');
 message.author.sendMessage(`
     [❖═══════ اوامر عامة ═══════❖]
** *server ~ لعرض معلومات السيرفر**
** *id  ~ لمعرفة معلومات حسابك او معلومات حساب احد تمنشنة**
** *avatar ~ لعرض صورتك او صورة احد تمنشنو**
     [❖═══════ اوامر اداريه ═══════❖]
** *mute <@mention> <Reason> ~ لعمل ميوت كتابي لحد**
** *umute <@mention> ~ لفك الميوت الكتابي**
** *ban <@mention> ~ ل تبنيد احد من السيرفر**
** *kick <@mention> ~ ل طرد احد من السيرفر**
** *bc <message> ~ لعمل برودكاست لأعضاء السيرفر**
** *nbc ~ لأرسال رسالة لجميع السيرفر فقط ب الكلام**
** *clear <Number> ~ لمسح الشات بعدد**
** *cchat ~ لتسكير او قفل الشات**
** *unchat ~ لفتح الشات**
** *voto <#room> <message> ~ لعمل تصويت ب روم**
** *role <@mention> <@role> ~ لأعطاء احد رتبة معينة**
**لتفعيل خاصية الترحيب قم ب انشاء روم ب اسم Welcome**
__**Copyright FanBot**__
`) 
 }
 });

client.login(process.env.BOT_TOKEN);
