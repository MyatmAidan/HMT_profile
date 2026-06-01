import { NextRequest, NextResponse } from "next/server";
import {
  isValidEmail,
  sanitizeText,
} from "@/lib/security/sanitize";
import { checkRateLimit } from "@/lib/security/rate-limit";
import type { ContactPayload } from "@/types/portfolio";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function validatePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  if (typeof data.website === "string" && data.website.trim().length > 0) {
    return null;
  }

  if (
    typeof data.name !== "string" ||
    typeof data.email !== "string" ||
    typeof data.message !== "string"
  ) {
    return null;
  }

  const name = sanitizeText(data.name, 80);
  const email = sanitizeText(data.email, 254).toLowerCase();
  const message = sanitizeText(data.message, 2000);

  if (name.length < 2 || message.length < 10 || !isValidEmail(email)) {
    return null;
  }

  return { name, email, message };
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(ip);

  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: rate.retryAfterSeconds
          ? { "Retry-After": String(rate.retryAfterSeconds) }
          : undefined,
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = validatePayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Please check your form and try again." },
      { status: 400 },
    );
  }

  // Log for now — wire to Resend/SendGrid via env when ready.
  console.info("[contact]", {
    ip,
    name: payload.name,
    email: payload.email,
    messageLength: payload.message.length,
  });

  return NextResponse.json({ ok: true });
}
