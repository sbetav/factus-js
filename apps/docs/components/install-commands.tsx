import { installCommands } from "@/lib/sdk";
import { highlight } from "fumadocs-core/highlight";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

export async function InstallCommands() {
  const highlighted = await Promise.all(
    installCommands.map(({ cmd }) =>
      highlight(cmd, {
        lang: "bash",
        themes: { light: "github-light", dark: "github-dark" },
      }),
    ),
  );

  return (
    <Tabs items={installCommands.map(({ id }) => id)}>
      {installCommands.map(({ id }, index) => (
        <Tab key={id} value={id}>
          <CodeBlock allowCopy>
            <Pre>{highlighted[index]}</Pre>
          </CodeBlock>
        </Tab>
      ))}
    </Tabs>
  );
}
