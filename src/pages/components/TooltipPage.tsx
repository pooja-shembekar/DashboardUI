import { Button, Tooltip } from "@/components";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const usageCode = `import { Button, Tooltip } from "@/components";

<Tooltip content="Your changes are saved" side="top">
  <Button variant="primary" size="sm">Save changes</Button>
</Tooltip>

<Tooltip content="Invite someone to your workspace" side="right">
  <Button variant="ok" size="sm">Invite team</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "Text displayed inside the tooltip.",
    },
    {
      prop: "side",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The side of the trigger where the tooltip appears.",
    },
    {
      prop: "children",
      type: "ReactElement",
      default: "-",
      description: "A focusable trigger element, such as a button.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional classes applied to the tooltip trigger wrapper.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight">Tooltip</p>
        <p className="text-lg text-gray-600">
          Add a short, helpful label to any interactive element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-14">
            <Tooltip content="Your changes are saved" side="top">
              <Button variant="primary" size="sm">
                Save changes
              </Button>
            </Tooltip>
            <Tooltip content="Invite someone to your workspace" side="right">
              <Button variant="ok" size="sm">
                Invite team
              </Button>
            </Tooltip>
            <Tooltip content="This action cannot be undone" side="bottom">
              <Button variant="destructive" size="sm">
                Delete project
              </Button>
            </Tooltip>
            <Tooltip content="Browse your recent activity" side="left">
              <Button variant="secondary" size="sm">
                View activity
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;