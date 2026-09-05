import { Link } from "react-router-dom";
import { MapPin, Building2, Lock, ChevronRight, TrendingUp } from "lucide-react";
import type { City } from "@/data/mockData";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const isActive = city.status === "active";

  return (
    <Link
      to={isActive ? `/cities/${city.id}` : "#"}
      onClick={isActive ? undefined : (e) => e.preventDefault()}
      className={`group relative bg-card rounded-xl border border-border/80 overflow-hidden transition-all duration-300 flex flex-col ${
        isActive
          ? "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer hover:border-primary/30"
          : "opacity-70 cursor-default"
      }`}
    >
      {/* Status Indicator Strip */}
      <div
        className={`h-1 w-full ${
          isActive ? "bg-gradient-to-r from-primary to-primary-glow" : "bg-muted"
        }`}
      />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-lg ${
                isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}
            >
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm text-foreground leading-tight">
                {city.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{city.province}</p>
            </div>
          </div>

          {/* Status Badge */}
          {isActive ? (
            <span className="flex items-center gap-1 text-[10px] font-display font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] font-display font-semibold text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded-full shrink-0">
              <Lock className="h-2.5 w-2.5" />
              Activate
            </span>
          )}
        </div>

        {/* Description */}
        {city.description && (
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {city.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/60">
          {isActive && city.msmeCount ? (
            <span className="flex items-center gap-1.5 text-xs font-medium text-foreground/70">
              <Building2 className="h-3.5 w-3.5 text-primary" />
              {city.msmeCount} impact businesses
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">Not yet activated</span>
          )}

          {isActive && (
            <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
          )}
        </div>
      </div>

      {/* Inactive overlay message */}
      {!isActive && (
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
          <div className="text-center px-4">
            <Lock className="h-5 w-5 text-muted-foreground mx-auto mb-1.5" />
            <p className="text-xs font-display font-medium text-muted-foreground">
              Be the first to activate this city
            </p>
          </div>
        </div>
      )}
    </Link>
  );
}
