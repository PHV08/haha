module.exports = {
TOKEN: "",
ownerID: [""], 
botInvite: "", 
supportServer: "", 
mongodbURL: "", 
status: '❤️ codeshare.me',
commandsDir: './commands', 
language: "en", 
embedColor: "ffa954", 
errorLog: "", 


sponsor: {
status: true,
url: "https://awmbilisim.com", 
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}