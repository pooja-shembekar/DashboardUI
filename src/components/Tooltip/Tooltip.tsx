import { cloneElement, useId, type ReactElement } from "react";
import { cn } from "@/libs/utils";

type TooltipSide = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: ReactElement<{ "aria-describedby"?: string }>;
  content: string;
  side?: TooltipSide;
  className?: string;
}

const sideClasses: Record<TooltipSide, string> = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
  left: "right-full top-1/2 mr-3 -translate-y-1/2",
  right: "left-full top-1/2 ml-3 -translate-y-1/2",
};

const Tooltip = ({
  children,
  content,
  side = "top",
  className,
}: TooltipProps) => {
  const tooltipId = useId();
  const describedBy = [children.props["aria-describedby"], tooltipId]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cn("group relative inline-flex", className)}>
      {cloneElement(children, { "aria-describedby": describedBy })}
      <span
        id={tooltipId}
        role="tooltip"
        className={cn(
          "pointer-events-none invisible absolute z-10 whitespace-nowrap rounded-md bg-gray-950 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
          sideClasses[side]
        )}
      >
        {content}
      </span>
    </span>
  );
};

export { Tooltip };