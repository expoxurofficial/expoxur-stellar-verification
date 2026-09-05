import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_MSMES, PHILIPPINE_CITIES, INDUSTRIES, SDG_LIST } from "@/data/mockData";
import MSMECard from "@/components/MSMECard";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Discover() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedSDG, setSelectedSDG] = useState("all");
  const [filterVerified, setFilterVerified] = useState(false);
  const [filterNeedsFunding, setFilterNeedsFunding] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const activeCities = PHILIPPINE_CITIES.filter((c) => c.status === "active");

  const filtered = useMemo(() => {
    return MOCK_MSMES.filter((msme) => {
      const matchSearch =
        !search ||
        msme.businessName.toLowerCase().includes(search.toLowerCase()) ||
        msme.tagline.toLowerCase().includes(search.toLowerCase()) ||
        msme.story.toLowerCase().includes(search.toLowerCase()) ||
        msme.industry.toLowerCase().includes(search.toLowerCase());

      const matchCity = selectedCity === "all" || msme.cityId === selectedCity;
      const matchIndustry = selectedIndustry === "all" || msme.industry === selectedIndustry;
      const matchSDG = selectedSDG === "all" || msme.sdgs.includes(Number(selectedSDG));
      const matchVerified = !filterVerified || msme.isVerified;
      const matchFunding = !filterNeedsFunding || msme.needs.includes("Funding");

      return matchSearch && matchCity && matchIndustry && matchSDG && matchVerified && matchFunding;
    });
  }, [search, selectedCity, selectedIndustry, selectedSDG, filterVerified, filterNeedsFunding]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCity("all");
    setSelectedIndustry("all");
    setSelectedSDG("all");
    setFilterVerified(false);
    setFilterNeedsFunding(false);
  };

  const hasFilters =
    search || selectedCity !== "all" || selectedIndustry !== "all" ||
    selectedSDG !== "all" || filterVerified || filterNeedsFunding;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-gradient section-pattern py-12">
        <div className="container">
          <p className="text-white/60 text-xs font-display font-bold uppercase tracking-widest mb-2">
            Discover
          </p>
          <h1 className="font-display font-bold text-4xl text-white mb-3">
            Find Impact Businesses
          </h1>
          <p className="text-white/70 text-base mb-6 max-w-xl">
            Search by city, industry, or SDG to find businesses worth knowing and supporting.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search businesses, industries, or keywords…"
              className="pl-10 h-12 bg-white border-0 text-foreground placeholder:text-muted-foreground rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-card rounded-xl border border-border/80 p-5 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-sm text-foreground">Filters</h3>
                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-primary font-display font-semibold hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-5">
                  {/* City */}
                  <div>
                    <label className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide block mb-2">
                      City
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="all">All Cities</option>
                      {activeCities.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide block mb-2">
                      Industry
                    </label>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="all">All Industries</option>
                      {INDUSTRIES.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* SDG */}
                  <div>
                    <label className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide block mb-2">
                      SDG
                    </label>
                    <select
                      value={selectedSDG}
                      onChange={(e) => setSelectedSDG(e.target.value)}
                      className="w-full text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="all">All SDGs</option>
                      {SDG_LIST.map((s) => (
                        <option key={s.id} value={s.id}>
                          SDG {s.id}: {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Toggles */}
                  <div className="flex flex-col gap-2 pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filterVerified}
                        onChange={(e) => setFilterVerified(e.target.checked)}
                        className="rounded border-border accent-primary h-4 w-4"
                      />
                      <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors font-display">
                        ✅ Verified only
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filterNeedsFunding}
                        onChange={(e) => setFilterNeedsFunding(e.target.checked)}
                        className="rounded border-border accent-primary h-4 w-4"
                      />
                      <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors font-display">
                        💰 Needs funding
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground font-display">{filtered.length}</strong> businesses found
                  {search && <> for "<em>{search}</em>"</>}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden font-display text-xs"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5" />
                  {showFilters ? "Hide" : "Filters"}
                </Button>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 bg-muted/30 rounded-xl border border-border">
                  <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="font-display font-semibold text-foreground">No businesses found</p>
                  <p className="text-muted-foreground text-sm mt-1 mb-4">
                    Try adjusting your search or filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="font-display text-sm"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((msme) => {
                    const city = PHILIPPINE_CITIES.find((c) => c.id === msme.cityId);
                    return <MSMECard key={msme.id} msme={msme} cityName={city?.name} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
