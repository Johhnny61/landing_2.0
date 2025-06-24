import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, details } = req.body;
  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: "Telegram credentials not set" });
  }

  const text = `📦 Новая заявка\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📝 Детали: ${details || "не указано"}`;

  try {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Telegram API error:", error.response?.data || error.message);
    return res.status(500).json({ error: "Ошибка отправки в Telegram", details: error.response?.data || error.message });
  }
}
