import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/config/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Text-only card. Rendered at build time; no external assets or fonts. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#020617",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#f8fafc" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 40, color: "#94a3b8" }}>
          {SITE_TAGLINE}
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 28, color: "#64748b" }}>
          One-time licence · Full source code
        </div>
      </div>
    ),
    size,
  );
}
