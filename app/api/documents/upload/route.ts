import { issueSignedToken } from "@vercel/blob";
import { handleUploadPresigned, type HandleUploadPresignedBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { ALLOWED_DOCUMENT_TYPES, DOCUMENT_KEYS, MAX_DOCUMENT_MB } from "@/lib/checkout/documents";
import { isValidOrderId } from "@/lib/checkout/server/razorpay";
import { verifyOrderToken } from "@/lib/checkout/server/tokens";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Gives the browser a short-lived, single-file upload URL for your private Vercel Blob store —
// only for clients holding a valid paid-order token. Works with the store's default OIDC
// connection (no read-write token needed).
export async function POST(request: Request) {
  let body: HandleUploadPresignedBody;
  try {
    body = (await request.json()) as HandleUploadPresignedBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const json = await handleUploadPresigned({
      body,
      request,
      getSignedToken: async (pathname, clientPayload) => {
        let payload: any = {};
        try {
          payload = JSON.parse(clientPayload || "{}");
        } catch {
          /* ignore */
        }
        const { orderId, token, docType } = payload;
        if (!isValidOrderId(orderId) || !verifyOrderToken(orderId, token)) {
          throw new Error("This upload link is not valid.");
        }
        if (!DOCUMENT_KEYS.includes(docType)) {
          throw new Error("Unknown document type.");
        }
        const prefix = `orders/${orderId}/${docType}/`;
        if (!pathname.startsWith(prefix) || pathname.includes("..")) {
          throw new Error("Invalid file path.");
        }

        const maximumSizeInBytes = MAX_DOCUMENT_MB * 1024 * 1024;
        const validUntil = Date.now() + 15 * 60 * 1000; // 15 minutes
        const signed = await issueSignedToken({
          pathname,
          operations: ["put"],
          allowedContentTypes: ALLOWED_DOCUMENT_TYPES,
          maximumSizeInBytes,
          validUntil,
        });
        return {
          token: signed,
          urlOptions: {
            allowedContentTypes: ALLOWED_DOCUMENT_TYPES,
            maximumSizeInBytes,
            validUntil,
            addRandomSuffix: true,
            allowOverwrite: false,
          },
        };
      },
    });
    return NextResponse.json(json);
  } catch (err) {
    const message = (err as Error).message || "Upload failed.";
    console.error("[documents] upload URL error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
