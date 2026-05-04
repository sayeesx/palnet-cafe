"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

/**
 * Next/Image with a lightweight skeleton + shimmer until decode (see `.shimmer-overlay` in globals.css).
 */
export function ImageWithShimmer({
  alt,
  className,
  fill,
  width,
  height,
  onLoadingComplete,
  loading,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoadingComplete = useCallback(
    (img) => {
      setLoaded(true);
      onLoadingComplete?.(img);
    },
    [onLoadingComplete]
  );

  const isEager = loading === "eager";
  const opacity = loaded || isEager ? "opacity-100" : "opacity-0";
  const fade = isEager ? "transition-opacity duration-150" : "transition-opacity duration-300";

  const shimmer = !loaded && !isEager ? (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-offwhite"
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="shimmer-overlay" />
      </div>
    </div>
  ) : null;

  if (fill) {
    return (
      <>
        {shimmer}
        <Image
          alt={alt}
          fill
          loading={loading}
          decoding="async"
          className={[className, fade, opacity, "z-[2]"].filter(Boolean).join(" ")}
          onLoadingComplete={handleLoadingComplete}
          {...rest}
        />
      </>
    );
  }

  const aspectStyle =
    width != null && height != null ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <div className="relative w-full max-w-full overflow-hidden" style={aspectStyle}>
      {shimmer}
      <Image
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={[
          "relative z-[2] h-full w-full",
          className,
          fade,
          opacity,
        ]
          .filter(Boolean)
          .join(" ")}
        onLoadingComplete={handleLoadingComplete}
        {...rest}
      />
    </div>
  );
}
