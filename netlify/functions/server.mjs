import { createRequestHandler } from "@react-router/node";
import * as build from "../../build/server/index.js";

const handleRequest = createRequestHandler(build);

export async function handler(event) {
  try {
    const rawUrl =
      event.rawUrl ||
      `https://${event.headers.host}${event.path}${event.queryStringParameters ? `?${new URLSearchParams(event.queryStringParameters).toString()}` : ""}`;
    const url = new URL(rawUrl);
    const headers = new Headers(event.headers || {});
    const body = event.body
      ? event.isBase64Encoded
        ? Buffer.from(event.body, "base64")
        : event.body
      : undefined;

    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers,
      body,
    });

    const response = await handleRequest(request);

    const responseHeaders = {};
    for (const [key, value] of response.headers) {
      responseHeaders[key] = value;
    }

    const contentType = responseHeaders["content-type"] || "";
    let respBody;
    let isBase64Encoded = false;

    if (
      contentType.includes("text") ||
      contentType.includes("json") ||
      contentType.includes("javascript")
    ) {
      respBody = await response.text();
    } else {
      const buf = Buffer.from(await response.arrayBuffer());
      respBody = buf.toString("base64");
      isBase64Encoded = true;
    }

    return {
      statusCode: response.status,
      headers: responseHeaders,
      body: respBody,
      isBase64Encoded,
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "content-type": "text/plain" },
      body: `SSR Function Error: ${error?.message || error}`,
    };
  }
}
