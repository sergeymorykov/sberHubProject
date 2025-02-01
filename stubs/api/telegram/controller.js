const axios = require('axios');

process.env.TELEGRAM_TOKEN = '7866617284:AAHDOfPQJdKmufOdRgFza6XA8ZWRHPeA_Yc';

class controller {
  async sendMessage(req, res) {
    try {
      const { chat_id, text } = req.body;

      const response = await axios.get(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
        params: {
          chat_id: chat_id,
          text: text,
          parse_mode: 'html'
        }
      });
      res.json(response.data);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
}

module.exports = new controller();
