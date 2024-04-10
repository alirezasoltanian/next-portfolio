"use client";
import * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn, slugify } from "@/lib/utils";

interface TitleATagProps extends React.PropsWithChildren {
  children: string;
}

export function TitleATag({ children, ...props }: TitleATagProps) {
  return (
    <h2
      className={cn(
        "mt-12 scroll-m-20 flex gap-2 border-b pb-2 group font-heading text-2xl font-semibold tracking-tight first:mt-0",
        "transition-transform duration-500"
      )}
      id={slugify(children)}
      {...props}
    >
      <a className='font-semi  hidden group-hover:flex group-hover:text-white line-through'>
        #
      </a>
      <a
        className='font-semi  cursor-auto -group-hover:translate-x-7 group-hover:text-white'
        href={`#${slugify(children)}`}
      >
        {children}
      </a>
    </h2>
  );
}
