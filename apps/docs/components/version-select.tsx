"use client";

import { CheckIcon, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "fumadocs-ui/components/ui/popover";
import { cn } from "lib/cn";
import { Badge } from "./badge";
import { useState } from "react";

const CURRENT_VERSION = "v2";

const versions: {
  label: string;
  badge: {
    label: string;
    variant?: "default" | "muted";
  };
  href: string | null;
}[] = [
  {
    label: "v2",
    badge: {
      label: "Última",
    },
    href: null,
  },
  {
    label: "v1",
    badge: {
      label: "Legacy",
      variant: "muted",
    },
    href: "https://factusjs-v1.vercel.app/docs",
  },
];

export function VersionSelect() {
  const [open, setOpen] = useState(false);

  const handleVersionClick = (href: string | null) => {
    if (href) {
      window.location.href = href;
    } else {
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-between gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",
          )}
        >
          Factus API {CURRENT_VERSION}
          <div className="flex items-center gap-1">
            <Badge>Última</Badge>
            <ChevronsUpDown className="size-3.5 text-fd-muted-foreground" />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-1 bg-fd-popover">
        {versions.map((version) => {
          const isCurrent = version.label === CURRENT_VERSION;
          return (
            <button
              key={version.label}
              type="button"
              onClick={() => handleVersionClick(version.href)}
              className={cn(
                "cursor-pointer text-left text-sm p-2 rounded-lg inline-flex items-center gap-2 hover:text-fd-accent-foreground hover:bg-fd-accent",
                isCurrent && "bg-fd-accent",
              )}
            >
              API {version.label}
              <div className="flex items-center gap-1 ms-auto">
                <Badge variant={version.badge.variant}>
                  {version.badge.label}
                </Badge>

                {isCurrent && <CheckIcon className="size-3.5" />}
              </div>
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
