import { AlertTriangle, Pencil } from "lucide-react";

type DocsTocFooterProps = {
  editUrl: string;
  issueUrl: string;
};

export function DocsTocFooter({ editUrl, issueUrl }: DocsTocFooterProps) {
  return (
    <div className="flex flex-col gap-2 border-t pt-4 mt-4 text-sm text-fd-muted-foreground">
      <a
        href={editUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 hover:text-fd-foreground transition-colors"
      >
        <Pencil className="size-3.5 shrink-0" />
        Editar en GitHub
      </a>
      <a
        href={issueUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 hover:text-fd-foreground transition-colors"
      >
        <AlertTriangle className="size-3.5 shrink-0" />
        Reportar un problema
      </a>
    </div>
  );
}
