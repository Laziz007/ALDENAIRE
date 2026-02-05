import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { createLinkToken } from "@/lib/telegram-store";

const BOT_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || "";

export async function POST() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!BOT_USERNAME) {
    return NextResponse.json(
      { error: "Missing NEXT_PUBLIC_TELEGRAM_BOT_USERNAME" },
      { status: 500 }
    );
  }

  const token = createLinkToken(userId);
  const link = `https://t.me/${BOT_USERNAME}?start=link_${token}`;

  return NextResponse.json({ link, token });
}
