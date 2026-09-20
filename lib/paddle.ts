"use client";

import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";

/**
 * Paddle.js overlay checkout.
 *
 * Only the *client-side* token and price IDs live here — all of them are
 * publishable values, safe to ship to the browser. The API key and webhook
 * secret are server-side secrets and must never appear in this codebase.
 */

const CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

/** Defaults to sandbox: a misconfigured deploy must never take real money. */
const ENVIRONMENT =
  process.env.NEXT_PUBLIC_PADDLE_ENV === "production" ? "production" : "sandbox";

export const isSandbox = ENVIRONMENT === "sandbox";

/** Shared across every buy button — Paddle.js is initialised at most once. */
let paddlePromise: Promise<Paddle | undefined> | null = null;

function loadPaddle(): Promise<Paddle | undefined> {
  if (!CLIENT_TOKEN) return Promise.resolve(undefined);

  paddlePromise ??= initializePaddle({
    environment: ENVIRONMENT,
    token: CLIENT_TOKEN,
  }).catch((error) => {
    // Let a later button retry rather than caching the failure forever.
    paddlePromise = null;
    console.error("Paddle failed to initialise:", error);
    return undefined;
  });

  return paddlePromise;
}

export type PaddleState =
  | { status: "loading" }
  | { status: "ready"; paddle: Paddle }
  | { status: "unavailable"; reason: string };

export function usePaddle(): PaddleState {
  const [state, setState] = useState<PaddleState>(() =>
    CLIENT_TOKEN
      ? { status: "loading" }
      : {
          status: "unavailable",
          reason: "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is not set.",
        },
  );

  useEffect(() => {
    if (!CLIENT_TOKEN) return;

    let active = true;

    loadPaddle().then((paddle) => {
      if (!active) return;

      setState(
        paddle
          ? { status: "ready", paddle }
          : { status: "unavailable", reason: "Paddle.js could not be loaded." },
      );
    });

    return () => {
      active = false;
    };
  }, []);

  return state;
}
