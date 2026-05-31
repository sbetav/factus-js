import { cn } from "lib/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "muted";
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "px-1.5 py-1 rounded-lg text-xs font-medium border",
        variant === "default" &&
          "bg-fd-primary/10 text-fd-primary border-transparent",
        variant === "muted" && "bg-fd-muted border-fd-border",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
