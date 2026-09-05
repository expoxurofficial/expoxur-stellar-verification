import { useState, useMemo } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHILIPPINE_CITIES, MOCK_MSMES } from "@/data/mockData";
import CityCard from "@/components/CityCard";
import Navbar from "@/components/Navbar";
import cieCatLocator from "@/assets/ciecat-locator.png";

export default function Cities() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  // Compute which cities have at least 1 real CIE
  const activeCityIds = useMemo(
    () => new Set(MOCK_MSMES.map((m) => m.cityId)),
    []
  );

  // Auto-mark cities active if they have listings
  const citiesWithStatus = useMemo(
    () =>
      PHILIPPINE_CITIES.map((city) => ({
        ...city,
        status: activeCityIds.has(city.id) ? ("active" as const) : ("inactive" as const),
        msmeCount: MOCK_MSMES.filter((m) => m.cityId === city.id).length,
      })),
    [activeCityIds]
  );

  const filtered = useMemo(() => {
    return citiesWithStatus.filter((city) => {
      const matchSearch =
        city.name.toLowerCase().includes(search.toLowerCase()) ||
        city.province.toLowerCase().includes(search.toLowerCase()) ||
        city.region.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        filter === "all" ||
        (filter === "active" && city.status === "active") ||
        (filter === "inactive" && city.status === "inactive");
      return matchSearch && matchFilter;
    });
  }, [search, filter, citiesWithStatus]);

  const activeCitiesCount = citiesWithStatus.filter((c) => c.status === "active").length;
  const inactiveCitiesCount = citiesWithStatus.filter((c) => c.status === "inactive").length;
  const totalCIEs = MOCK_MSMES.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-gradient section-pattern py-14 relative overflow-hidden">
        {/* CIEcat mascot — holding locator pin for discovery context */}
        <div className="absolute right-8 bottom-0 hidden lg:block pointer-events-none select-none">
          <img
            src={cieCatLocator}
            alt="CIEcat exploring cities"
            className="h-52 w-auto object-contain drop-shadow-lg"
            draggable={false}
          />
        </div>

        <div className="container relative">
          <div className="max-w-2xl">
            <p className="text-white/60 text-xs font-display font-bold uppercase tracking-widest mb-2">
              City Directory
            </p>
            <h1 className="font-display font-bold text-4xl text-white mb-3">
              Philippine Cities
            </h1>
            <p className="text-white/70 text-base mb-6 max-w-lg">
              Explore the growing network of certified impact enterprise ecosystems across the Philippines.
              Active cities have real, verified business profiles ready to discover.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                <p className="font-display font-bold text-white text-xl">{activeCitiesCount}</p>
                <p className="text-white/60 text-xs">Active cities</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                <p className="font-display font-bold text-white text-xl">{inactiveCitiesCount}</p>
                <p className="text-white/60 text-xs">Awaiting activation</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                <p className="font-display font-bold text-white text-xl">{totalCIEs}</p>
                <p className="text-white/60 text-xs">Certified Impact Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search city, province, or region…"
              className="pl-10 h-10"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "active", "inactive"] as const).map((f) => (
              <Button
                key={f}
                size="sm"
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className={`capitalize font-display font-semibold text-xs h-10 ${
                  filter === f ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {f === "all" ? "All Cities" : f === "active" ? "✅ Active" : "🔒 Needs Activation"}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-10">
        <div className="container">
          {(search || filter !== "all") && (
            <p className="text-sm text-muted-foreground mb-6">
              Showing <strong>{filtered.length}</strong> cities
              {search && <> matching "{search}"</>}
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="font-display font-semibold text-foreground">No cities found</p>
              <p className="text-muted-foreground text-sm mt-1">Try adjusting your search</p>
            </div>
          ) : (
            <>
              {/* Active Cities — always shown first */}
              {(filter === "all" || filter === "active") &&
                filtered.filter((c) => c.status === "active").length > 0 && (
                  <div className="mb-12">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <h2 className="font-display font-bold text-lg text-foreground">
                        Active Impact Cities
                      </h2>
                      <span className="bg-emerald-100 text-emerald-700 text-xs font-display font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {filtered.filter((c) => c.status === "active").length} cities
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {filtered
                        .filter((c) => c.status === "active")
                        .map((city) => (
                          <CityCard key={city.id} city={city} />
                        ))}
                    </div>
                  </div>
                )}

              {/* Inactive Cities */}
              {(filter === "all" || filter === "inactive") &&
                filtered.filter((c) => c.status === "inactive").length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                      <h2 className="font-display font-bold text-lg text-foreground">
                        Cities Awaiting Activation
                      </h2>
                      <span className="bg-muted text-muted-foreground text-xs font-display font-semibold px-2.5 py-0.5 rounded-full border border-border">
                        {filtered.filter((c) => c.status === "inactive").length} cities
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5 max-w-xl">
                      These cities are waiting for their first impact enterprise to activate them.
                      Are you a business owner in one of these cities?{" "}
                      <a href="/register" className="text-primary font-semibold hover:underline">
                        Register now →
                      </a>
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {filtered
                        .filter((c) => c.status === "inactive")
                        .map((city) => (
                          <CityCard key={city.id} city={city} />
                        ))}
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
