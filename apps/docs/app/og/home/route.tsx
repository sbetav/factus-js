import { ImageResponse } from "@takumi-rs/image-response";
import { generate as DefaultImage } from "fumadocs-ui/og/takumi";

export const revalidate = false;

export async function GET() {
  return new ImageResponse(
    <DefaultImage
      title="factus-js"
      description="SDK de JavaScript para la API de Factus"
      site="factus-js"
    />,
    {
      width: 1200,
      height: 630,
      format: "webp",
    },
  );
}
