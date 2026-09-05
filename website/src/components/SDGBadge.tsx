import { SDG_LIST } from "@/data/mockData";

interface SDGBadgeProps {
  sdgId: number;
  size?: "sm" | "md";
}

export function SDGBadge({ sdgId, size = "sm" }: SDGBadgeProps) {
  const sdg = SDG_LIST.find((s) => s.id === sdgId);
  if (!sdg) return null;

  return (
    <span
      title={`SDG ${sdgId}: ${sdg.label}`}
      className={`inline-flex items-center gap-1 rounded-full font-semibold text-white font-display ${
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
      }`}
      style={{ backgroundColor: sdg.color }}
    >
      <span>{sdgId}</span>
      {size === "md" && <span>{sdg.label}</span>}
    </span>
  );
}

interface SDGListProps {
  sdgIds: number[];
  size?: "sm" | "md";
  max?: number;
}

export function SDGList({ sdgIds, size = "sm", max }: SDGListProps) {
  const displayed = max ? sdgIds.slice(0, max) : sdgIds;
  const remaining = max ? sdgIds.length - max : 0;

  return (
    <div className="flex flex-wrap gap-1.5">
      {displayed.map((id) => (
        <SDGBadge key={id} sdgId={id} size={size} />
      ))}
      {remaining > 0 && (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted text-muted-foreground font-display">
          +{remaining} more
        </span>
      )}
    </div>
  );
}
