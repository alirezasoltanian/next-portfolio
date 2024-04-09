import * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn, slugify } from "@/lib/utils";

interface TitleATagProps extends React.PropsWithChildren {
  title: string;
}

export function TitleATag({
  children,

  ...props
}: TitleATagProps) {
  return (
    <h2
      className={cn(
        "mt-12 scroll-m-20 bg-red-500 border-b pb-2 font-heading text-2xl font-semibold tracking-tight first:mt-0"
      )}
      {...props}
    >
      <a href={`#aaaaa`}>{children}</a>
    </h2>
  );
}
