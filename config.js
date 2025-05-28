const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8011904885:AAF7xX-Oell8h1M5QajqEaJrTZqFqeJ3eAM',
  id: isNaN(parsedId) ? 7774556126 : parsedId // replace 12345.. with your telegram chat id
};
