import { ImageResponse } from "next/og";

export const alt = "Nikita Kratcholov — AI Founder & Marketer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const cormorantFont = await fetch(
    "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_qE6GnM.ttf"
  ).then((res) => res.arrayBuffer());

  const dmSansFont = await fetch(
    "https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTg.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f9f7f4",
          position: "relative",
        }}
      >
        {/* Accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#c6a46e",
          }}
        />

        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            width: 40,
            height: 40,
            borderTop: "1px solid #c6a46e",
            borderLeft: "1px solid #c6a46e",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            width: 40,
            height: 40,
            borderTop: "1px solid #c6a46e",
            borderRight: "1px solid #c6a46e",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            width: 40,
            height: 40,
            borderBottom: "1px solid #c6a46e",
            borderLeft: "1px solid #c6a46e",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            width: 40,
            height: 40,
            borderBottom: "1px solid #c6a46e",
            borderRight: "1px solid #c6a46e",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Dash accent */}
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: 14,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c6a46e",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 18 }}>—</span>
            Portfolio
            <span style={{ fontSize: 18 }}>—</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: 72,
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "0.05em",
              marginTop: 20,
              lineHeight: 1.1,
            }}
          >
            Nikita Kratcholov
          </div>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c6a46e",
              marginTop: 30,
              marginBottom: 30,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: 20,
              color: "#6b6b6b",
              letterSpacing: "0.05em",
            }}
          >
            AI Founder & Marketer
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontFamily: "DM Sans",
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c6a46e",
          }}
        >
          krchoff.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: cormorantFont,
          weight: 300,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansFont,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
