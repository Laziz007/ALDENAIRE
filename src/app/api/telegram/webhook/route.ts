import { NextResponse } from "next/server";

import { answerCallbackQuery, sendMessage } from "@/lib/telegram";
import {
  consumeLinkToken,
  createVerificationCode,
  getTelegramLinkByChatId,
  linkTelegramUser
} from "@/lib/telegram-store";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;

function buildMainKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: "Verify account", callback_data: "send_code" },
        { text: "Open dashboard", url: `${APP_URL}/dashboard` }
      ],
      [
        { text: "Connect settings", url: `${APP_URL}/dashboard/settings` },
        { text: "Help", callback_data: "help" }
      ]
    ]
  };
}

function buildStartMessage() {
  return (
    "<b>Welcome to Aldenaire</b>\n" +
    "I can help you verify your account and keep your workspace secure.\n\n" +
    "Use the buttons below or type /verify to receive a one-time code."
  );
}

export async function POST(req: Request) {
  if (WEBHOOK_SECRET) {
    const secret = req.headers.get("x-telegram-bot-api-secret-token");
    if (secret !== WEBHOOK_SECRET) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  const update = await req.json();
  const message = update.message;
  const callback = update.callback_query;

  try {
    if (message) {
      const text = message.text || "";
      const chatId = message.chat.id;

      if (text.startsWith("/start")) {
        const payload = text.split(" ")[1];
        if (payload?.startsWith("link_")) {
          const token = payload.replace("link_", "");
          const clerkUserId = consumeLinkToken(token);
          if (clerkUserId) {
            linkTelegramUser({
              clerkUserId,
              telegramUserId: message.from.id,
              chatId,
              username: message.from.username,
              firstName: message.from.first_name,
              lastName: message.from.last_name,
              linkedAt: Date.now()
            });
            await sendMessage({
              chat_id: chatId,
              text:
                "✅ Your Aldenaire account is linked. You can request verification codes here anytime.",
              parse_mode: "HTML",
              reply_markup: buildMainKeyboard()
            });
            return NextResponse.json({ ok: true });
          }
        }

        await sendMessage({
          chat_id: chatId,
          text: buildStartMessage(),
          parse_mode: "HTML",
          reply_markup: buildMainKeyboard()
        });
        return NextResponse.json({ ok: true });
      }

      if (text.startsWith("/verify")) {
        const link = getTelegramLinkByChatId(chatId);
        if (!link) {
          await sendMessage({
            chat_id: chatId,
            text:
              "Please link your Aldenaire account first. Open Settings → Connect Telegram to generate a link."
          });
          return NextResponse.json({ ok: true });
        }

        const code = createVerificationCode(link.clerkUserId);
        await sendMessage({
          chat_id: chatId,
          text: `Your verification code: <b>${code}</b> (valid 10 minutes)`,
          parse_mode: "HTML",
          reply_markup: buildMainKeyboard()
        });
        return NextResponse.json({ ok: true });
      }

      await sendMessage({
        chat_id: chatId,
        text: "Type /verify to request a code or use the buttons below.",
        reply_markup: buildMainKeyboard()
      });
      return NextResponse.json({ ok: true });
    }

    if (callback) {
      const chatId = callback.message?.chat?.id;
      if (!chatId) {
        return NextResponse.json({ ok: true });
      }

      if (callback.data === "send_code") {
        const link = getTelegramLinkByChatId(chatId);
        if (!link) {
          await answerCallbackQuery(callback.id, "Link your account first in Settings.");
          return NextResponse.json({ ok: true });
        }
        const code = createVerificationCode(link.clerkUserId);
        await sendMessage({
          chat_id: chatId,
          text: `Your verification code: <b>${code}</b> (valid 10 minutes)`,
          parse_mode: "HTML",
          reply_markup: buildMainKeyboard()
        });
        await answerCallbackQuery(callback.id, "Code sent.");
        return NextResponse.json({ ok: true });
      }

      if (callback.data === "help") {
        await sendMessage({
          chat_id: chatId,
          text:
            "Need help? Use /verify for a code. For support, contact @Dev_Boy_007.",
          reply_markup: buildMainKeyboard()
        });
        await answerCallbackQuery(callback.id);
        return NextResponse.json({ ok: true });
      }

      await answerCallbackQuery(callback.id);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram webhook error", error);
    return new NextResponse("Error", { status: 500 });
  }
}
