import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

import { verifyCode } from "@/lib/telegram-store";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const code = String(body?.code || "").trim();
  if (!code) {
    return NextResponse.json({ error: "Code required" }, { status: 400 });
  }

  const ok = verifyCode(userId, code);
  if (!ok) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
  }

  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      telegramVerifiedAt: new Date().toISOString()
    }
  });

  return NextResponse.json({ ok: true });
}
