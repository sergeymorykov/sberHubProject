const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const https = require('https');

process.env.GIGACHAT_AUTH =
  'YzA2ODg0NTYtYzE3Yi00OGJkLTkyY2MtMzdkM2U0YjE4ZmQ5Ojc0ZWVhN2YxLTI5MWYtNDNiZS05MTY2LWIyZjg5MGY2YWQ3Ng==';

const agent = new https.Agent({
  rejectUnauthorized: false
});

class controller {
  async getText(req, res) {
    try {
      const { text } = req.body;

      const headers = {
        Authorization: `Basic ${process.env.GIGACHAT_AUTH}`,
        RqUID: uuidv4(),
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      };

      const access_token = await axios
        .post('https://ngw.devices.sberbank.ru:9443/api/v2/oauth', encodeURI(`scope=GIGACHAT_API_PERS`), {
          headers: headers,
          httpsAgent: agent
        })
        .then((response) => {
          return response.data.access_token;
        })
        .catch((error) => {
          return error;
        });

      const systemMessage = ` Создай анализ совместимости между двумя людьми и отобрази результат исключительно в формате JSON, который будет результатом работы 'JSON.stringify()'. Он должен состоять из следующих частей:

1. **Совместимость** в процентах.
2. **Список точек соприкосновения**. Перечисли их через запятую.
3. **Список потенциальных различий**. Перечисли через запятую.

Результат должен быть строкой JSON, полученной через 'JSON.stringify()', и не содержать дополнительных пояснений или текста.

Пример:
    {"compatibility": 70, "pointsOfContact": ["общие интересы", "совместные увлечения", "взаимное уважение"], "potentialDifferences": ["различные жизненные цели", "противоположные характеры", "несовпадающие ценности"]}
`;

      const textAI = await axios
        .post(
          'https://gigachat.devices.sberbank.ru/api/v1/chat/completions',
          JSON.stringify({
            model: 'GigaChat:latest',
            messages: [
              {
                role: 'user',
                content: systemMessage + text
              }
            ],
            profanity_check: true
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`
            },
            httpsAgent: agent
          }
        )
        .then((response) => {
          return response.data.choices[0].message.content;
        })
        .catch((error) => {
          return error;
        });

      res.status(200).json({ text: textAI });
    } catch (e) {
      res.status(400).json({ message: e });
    }
  }
}

module.exports = new controller();
