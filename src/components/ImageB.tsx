"use client";

import cn from "clsx";
import Image from "next/image";
import { useState } from "react";

import type { ComponentProps } from "react";

export default function ImageB(props: ComponentProps<typeof Image>) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-700 ease-in-out",
        isLoading ? " blur-lg" : " blur-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
