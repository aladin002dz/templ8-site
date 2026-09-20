"use client";

import { useState } from "react";
import { usePaddle } from "@/lib/paddle";
import type { Tier } from "@/config/pricing";

type Props = {
  tier: Tier;
  /** The visually dominant tier gets the solid treatment. */
  emphasis?: boolean;
};

export function BuyButton({ tier, emphasis = false }: Props) {
  const paddleState = usePaddle();
  const [error, setError] = useState<string | null>(null);

  const missingPriceId = !tier.paddlePriceId;
  const disabled =
    paddleState.status !== "ready" || missingPriceId || error !== null;

  function handleClick() {
    if (paddleState.status !== "ready" || !tier.paddlePriceId) return;

    setError(null);

    try {
      paddleState.paddle.Checkout.open({
        items: [{ priceId: tier.paddlePriceId, quantity: 1 }],
        settings: { displayMode: "overlay" },
      });
    } catch (cause) {
      console.error("Paddle checkout failed to open:", cause);
      setError("Checkout could not open. Please email support.");
    }
  }

  const label = (() => {
    if (missingPriceId) return "Checkout not configured";
    if (paddleState.status === "loading") return "Loading checkout…";
    if (paddleState.status === "unavailable") return "Checkout unavailable";
    return `Buy ${tier.name}`;
  })();

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        aria-describedby={disabled ? `${tier.id}-checkout-note` : undefined}
        className={[
          "w-full rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600",
          "disabled:cursor-not-allowed disabled:opacity-60",
          emphasis
            ? "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800",
        ].join(" ")}
      >
        {label}
      </button>

      {(missingPriceId || paddleState.status === "unavailable" || error) && (
        <p
          id={`${tier.id}-checkout-note`}
          className="mt-2 text-xs text-amber-700 dark:text-amber-500"
        >
          {error ??
            (missingPriceId
              ? `Set NEXT_PUBLIC_PADDLE_PRICE_ID_TIER_${tier.id === "single" ? "1" : "2"} to enable this button.`
              : paddleState.status === "unavailable"
                ? paddleState.reason
                : null)}
        </p>
      )}
    </div>
  );
}
