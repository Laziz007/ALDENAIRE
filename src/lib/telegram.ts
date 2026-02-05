const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TELEGRAM_TOKEN) {
  console.warn("Missing TELEGRAM_BOT_TOKEN. Telegram bot will not send messages.");
}

const TELEGRAM_API = TELEGRAM_TOKEN
  ? `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
  : "";

type TelegramKeyboardButton = {
  text: string;
  url?: string;
  callback_data?: string;
};

type TelegramSendMessage = {
  chat_id: number;
  text: string;
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2";
  reply_markup?: {
    inline_keyboard?: TelegramKeyboardButton[][];
  };
};

async function telegramRequest<T>(method: string, body: unknown): Promise<T> {
  if (!TELEGRAM_API) {
    throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  }

  const res = await fetch(`${TELEGRAM_API}/${method}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  if (!data.ok) {
    throw new Error(data.description || "Telegram API error");
  }
  return data as T;
}

export async function sendMessage(payload: TelegramSendMessage) {
  return telegramRequest("sendMessage", payload);
}

export async function answerCallbackQuery(callback_query_id: string, text?: string) {
  return telegramRequest("answerCallbackQuery", {
    callback_query_id,
    text,
    show_alert: false
  });
}

export type { TelegramKeyboardButton };
