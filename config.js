const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || 'YOUR_BOT_TOKEN_HERE',
  id: isNaN(parsedId) ? 123456789 : parsedId // replace 12345.. with your telegram chat id
};
