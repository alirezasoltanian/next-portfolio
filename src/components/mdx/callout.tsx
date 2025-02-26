/** Originally from `shadcn/ui-docs`
 * @link https://github.com/shadcn/ui/blob/main/apps/www/components/callout.tsx
 */
import * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Grain } from "@/app/fa/_blogs/_components/Grain";

interface CalloutProps extends React.PropsWithChildren {
  icon?: string;
  title?: string;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  title,
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <Alert
      className={cn(
        "my-6 bg-[#4db5ff]  bg-opacity-75 flex items-start rounded-md border-sky-200 border-r-4 p-4",
        {
          "border-red-900 bg-red-50": type === "danger",
          "border-yellow-900 bg-yellow-50": type === "warning",
        }
      )}
      {...props}
    >
      <Grain />

      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
