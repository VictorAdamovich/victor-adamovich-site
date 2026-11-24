import { ImageResponse } from "next/og";
import type { ReactElement } from "react";
import { loadOgFonts } from "./fonts";

type Init = { width: number; height: number; headers?: Record<string, string> };

/** `ImageResponse` with the site's fonts already loaded. */
export const renderOgImage = async (element: ReactElement, init: Init) =>
  new ImageResponse(element, { ...init, fonts: await loadOgFonts() });
