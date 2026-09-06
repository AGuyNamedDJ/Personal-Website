import { ImageResponse } from "next/og";
export const alt = "Dalron J. Robertson. Scientist. Author. Founder.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#050607",
        color: "#f4f3ef",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #050607, rgba(5,6,7,0) 95%)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "65px 72px",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 27, marginBottom: 83 }}>
          Dalron J. Robertson
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: -5,
            lineHeight: 1.04,
          }}
        >
          <span>Scientist.</span>
          <span style={{ color: "#c4b298" }}>Author. Founder.</span>
        </div>
        <div style={{ fontSize: 24, color: "#b6b5b7", marginTop: 42 }}>
          Scientist. Founder. Writer.
        </div>
        <div style={{ fontSize: 17, color: "#89898c", marginTop: 62 }}>
          dalronjrobertson.com
        </div>
      </div>
    </div>,
    size,
  );
}
