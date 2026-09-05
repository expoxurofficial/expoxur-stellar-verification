import { Link } from "react-router-dom";
import { MapPin, Star, CheckCircle, Users } from "lucide-react";
import type { MSME } from "@/data/mockData";
import { SDGList } from "@/components/SDGBadge";

interface MSMECardProps {
  msme: MSME;
  cityName?: string;
}

const NEED_COLORS: Record<string, string> = {
  Funding: "bg-amber-50 text-amber-700 border-amber-200",
  Partnerships: "bg-blue-50 text-blue-700 border-blue-200",
  Exposure: "bg-violet-50 text-violet-700 border-violet-200",
};

const INDUSTRY_ICONS: Record<string, string> = {
  "Agriculture & Food": "🌱",
  "Education & Training": "📚",
  "Health & Wellness": "❤️",
  "Environment & Conservation": "🌊",
  "Arts & Culture": "🎨",
  "Technology & Innovation": "💡",
  "Livelihood & Crafts": "🧵",
  "Women & Youth Empowerment": "✊",
  "Waste Management": "♻️",
  "Social Services": "🤝",
};

export default function MSMECard({ msme, cityName }: MSMECardProps) {
  return (
    <Link
      to={`/businesses/${msme.id}`}
      className="group bg-card rounded-xl border border-border/80 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 flex flex-col"
    >
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-primary-glow" />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Logo placeholder */}
          <div className="h-12 w-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-2xl shrink-0">
            {INDUSTRY_ICONS[msme.industry] || "🏢"}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-display font-bold text-foreground text-sm leading-tight">
                {msme.businessName}
              </h3>
              {msme.isVerified && (
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
              )}
              {msme.isPremium && (
                <Star className="h-3 w-3 text-amber-500 fill-amber-500 shrink-0" />
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
              {msme.tagline}
            </p>
          </div>
        </div>

        {/* Industry + City */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-foreground/60 bg-muted px-2.5 py-1 rounded-full font-display">
            {msme.industry}
          </span>
          {cityName && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {cityName}
            </span>
          )}
        </div>

        {/* Story snippet */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {msme.story}
        </p>

        {/* SDGs */}
        <SDGList sdgIds={msme.sdgs} max={4} />

        {/* Needs */}
        {msme.needs.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {msme.needs.map((need) => (
              <span
                key={need}
                className={`text-[10px] font-display font-semibold px-2 py-0.5 rounded-full border ${NEED_COLORS[need]}`}
              >
                Needs: {need}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/60">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>{msme.employeeCount} team members</span>
          </div>
          <span className="text-xs font-display font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View Profile →
          </span>
        </div>
      </div>
    </Link>
  );
}
