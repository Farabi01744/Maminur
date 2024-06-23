const fs = require("fs");
module.exports = {
  config:{
	name: "npx10",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.postimg.cc/yxXDK3xw/images-26.jpg',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("আসসালামুআলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("assalamulaikum")==0 || body.indexOf("assalamu laikum")==0 || body.indexOf("সালাম")==0 || body.indexOf("আসসালামুআলাইকুম")==0 || body.indexOf("assalamulaikum")==0 || body.indexOf("a,salamulaikum")==0 || body.indexOf("আসসালামুআলাইকুম")==0 || body.indexOf("আসালা")==0) {
		var msg = {
				body: "╭•┄┅════❁🌺❁════┅┄•╮\nওয়ালাইকুম সালাম-!!🖤💫\n╰•┄┅════❁🌺❁════┅┄•╯",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😓", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
