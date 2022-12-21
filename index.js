const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
const TOKEN = '5815489420:AAHTxqz70gBDAKK4AYxtzAx_LUfZNhEEppM';

console.log('Bot has been started ...');

const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

bot.on('message', (msg) => {
    const { id } = msg.chat;

    bot.sendMessage(id, debug(msg))
        .then(() => {
            console.log('Message has been send');
        })
        .catch((error) => {
            console.error(error);
        });
});
