"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";

export function CopyButton({ value, ...props }: ButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <Button
      variant='outline'
      size='sm'
      className='absolute right-5 text-black top-4 z-20 size-6 px-0'
      onClick={() => {
        if (typeof window === "undefined") return;
        setIsCopied(true);
        void window.navigator.clipboard.writeText(value?.toString() ?? "");
        setTimeout(() => setIsCopied(false), 2000);
      }}
      {...props}
    >
      {isCopied ? (
        <CheckIcon className='h-3 w-3' aria-hidden='true' />
      ) : (
        <CopyIcon className='h-3 w-3' aria-hidden='true' />
      )}
      <span className='sr-only'>
        {isCopied ? "Copied" : "Copy to clipboard"}
      </span>
    </Button>
  );
}
