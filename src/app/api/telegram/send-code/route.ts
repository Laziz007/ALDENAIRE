import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { sendMessage } from "@/lib/telegram";
import { createVerificationCode, getTelegramLink } from "@/lib/telegram-store";

export async function POST() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const link = getTelegramLink(userId);
  if (!link) {
    return NextResponse.json({ error: "Telegram not linked" }, { status: 400 });
  }

  const code = createVerificationCode(userId);
  await sendMessage({
    chat_id: link.chatId,
    text: `Your verification code: <b>${code}</b> (valid 10 minutes)`,
    parse_mode: "HTML"
  });

  return NextResponse.json({ ok: true });
}
