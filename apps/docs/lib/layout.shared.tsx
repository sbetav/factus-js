import Image from "next/image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const gitConfig = {
  user: "sbetav",
  repo: "factus-js",
  branch: "main",
};

function NavLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/factus-js.webp"
        alt="factus-js icon"
        width={24}
        height={24}
        className="shrink-0"
      />
      <span className="font-semibold tracking-tight text-fd-foreground">
        factus-js
      </span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <NavLogo />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
