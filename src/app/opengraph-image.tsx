import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          background: "linear-gradient(135deg, #f5f5f4, #e2e8f0)",
          color: "#0f172a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 20, fontSize: 26, maxWidth: 900 }}>
          {siteConfig.description}
        </div>
        <div style={{ marginTop: 32, fontSize: 20, color: "#475569" }}>
          {siteConfig.url}
        </div>
      </div>
    ),
    size
  );
}
