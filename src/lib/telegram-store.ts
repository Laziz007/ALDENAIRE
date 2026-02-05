type LinkToken = {
  clerkUserId: string;
  expiresAt: number;
};

type TelegramLink = {
  clerkUserId: string;
  telegramUserId: number;
  chatId: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  linkedAt: number;
};

type VerificationCode = {
  clerkUserId: string;
  code: string;
  expiresAt: number;
};

const LINK_TTL_MS = 10 * 60 * 1000;
const CODE_TTL_MS = 10 * 60 * 1000;

const linkTokens = new Map<string, LinkToken>();
const telegramLinks = new Map<string, TelegramLink>();
const verificationCodes = new Map<string, VerificationCode>();

function cleanup() {
  const now = Date.now();
  for (const [token, data] of linkTokens) {
    if (data.expiresAt <= now) linkTokens.delete(token);
  }
  for (const [key, data] of verificationCodes) {
    if (data.expiresAt <= now) verificationCodes.delete(key);
  }
}

export function createLinkToken(clerkUserId: string) {
  cleanup();
  const token = crypto.randomUUID();
  linkTokens.set(token, { clerkUserId, expiresAt: Date.now() + LINK_TTL_MS });
  return token;
}

export function consumeLinkToken(token: string) {
  cleanup();
  const data = linkTokens.get(token);
  if (!data) return null;
  linkTokens.delete(token);
  return data.clerkUserId;
}

export function linkTelegramUser(data: TelegramLink) {
  telegramLinks.set(data.clerkUserId, data);
}

export function getTelegramLink(clerkUserId: string) {
  return telegramLinks.get(clerkUserId) ?? null;
}

export function getTelegramLinkByChatId(chatId: number) {
  for (const link of telegramLinks.values()) {
    if (link.chatId === chatId) return link;
  }
  return null;
}

export function createVerificationCode(clerkUserId: string) {
  cleanup();
  const code = String(Math.floor(100000 + Math.random() * 900000));
  verificationCodes.set(clerkUserId, {
    clerkUserId,
    code,
    expiresAt: Date.now() + CODE_TTL_MS
  });
  return code;
}

export function verifyCode(clerkUserId: string, code: string) {
  cleanup();
  const data = verificationCodes.get(clerkUserId);
  if (!data) return false;
  if (data.code !== code) return false;
  if (data.expiresAt <= Date.now()) {
    verificationCodes.delete(clerkUserId);
    return false;
  }
  verificationCodes.delete(clerkUserId);
  return true;
}
