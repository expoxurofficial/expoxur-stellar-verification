import { Link } from "react-router-dom";
import { Building2, MapPin, Heart, Search, ArrowRight, Globe, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { PHILIPPINE_CITIES, MOCK_MSMES } from "@/data/mockData";
import CityCard from "@/components/CityCard";
import MSMECard from "@/components/MSMECard";
import expoxurLogo from "@/assets/expoxur-logo.png";
import cieCatJump from "@/assets/ciecat-jump.png";
import { useNavigate } from "react-router-dom";

const STATS = [
  { label: "Certified Impact Enterprises", value: "30+", icon: Building2 },
  { label: "Active Cities", value: "20+", icon: MapPin },
  { label: "SDGs Aligned", value: "17", icon: Globe },
  { label: "Communities Served", value: "10K+", icon: Heart },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const activeCityIds = useMemo(() => new Set(MOCK_MSMES.map((m) => m.cityId)), []);
  const activeCities = useMemo(
    () =>
      PHILIPPINE_CITIES.map((c) => ({
        ...c,
        status: activeCityIds.has(c.id) ? ("active" as const) : ("inactive" as const),
        msmeCount: MOCK_MSMES.filter((m) => m.cityId === c.id).length,
      })).filter((c) => c.status === "active").slice(0, 6),
    [activeCityIds]
  );
  // Featured: verified businesses first, then fill with real early adopters
  const featuredMSMEs = useMemo(
    () => [...MOCK_MSMES.filter((m) => m.isVerified), ...MOCK_MSMES.filter((m) => !m.isVerified)].slice(0, 3),
    []
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/discover?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient section-pattern">
        {/* CIEcat — jumping/celebrating, welcoming users */}
        <div className="absolute right-8 bottom-0 hidden xl:block pointer-events-none select-none z-10">
          <img src={cieCatJump} alt="CIEcat welcoming you" className="h-64 w-auto object-contain drop-shadow-xl" draggable={false} />
        </div>
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white/90 text-xs font-display font-semibold tracking-wide uppercase">
                Philippines' Impact MSME Directory
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-6 animate-fade-up">
              Discover Businesses That{" "}
              <span className="text-white/80 italic">Actually</span> Matter
            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up">
              Expoxur is a city-by-city directory of impact MSMEs aligned with the UN Sustainable
              Development Goals. Real businesses. Real stories. Real change.
            </p>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="flex gap-2 max-w-xl mx-auto mb-8 animate-fade-up"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search businesses, cities, or SDGs…"
                  className="pl-10 h-12 bg-white border-0 text-foreground placeholder:text-muted-foreground rounded-xl shadow-lg text-sm"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 px-6 bg-charcoal hover:bg-charcoal/90 text-white font-display font-semibold rounded-xl shadow-lg shrink-0"
              >
                Search
              </Button>
            </form>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up">
              <Link to="/cities">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-display font-bold h-12 px-8 rounded-xl shadow-lg"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Cities
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 font-display font-semibold h-12 px-8 rounded-xl backdrop-blur-sm"
                >
                  List Your Business
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-card">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="font-display font-bold text-2xl text-foreground">{stat.value}</span>
                </div>
                <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Cities */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-primary text-xs font-display font-bold uppercase tracking-widest mb-1">
                City Directory
              </p>
              <h2 className="font-display font-bold text-3xl text-foreground">
                Active Impact Cities
              </h2>
              <p className="text-muted-foreground mt-2 text-sm max-w-lg">
                These cities have active impact business ecosystems. Click to explore.
              </p>
            </div>
            <Link
              to="/cities"
              className="hidden md:flex items-center gap-1.5 text-primary text-sm font-display font-semibold hover:gap-2.5 transition-all"
            >
              View all cities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {activeCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link to="/cities">
              <Button variant="outline" className="font-display">
                View All Cities <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured MSMEs */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-primary text-xs font-display font-bold uppercase tracking-widest mb-1">
                Featured
              </p>
              <h2 className="font-display font-bold text-3xl text-foreground">
                Verified Impact Businesses
              </h2>
              <p className="text-muted-foreground mt-2 text-sm max-w-lg">
                These businesses have been verified for impact, credibility, and SDG alignment.
              </p>
            </div>
            <Link
              to="/discover"
              className="hidden md:flex items-center gap-1.5 text-primary text-sm font-display font-semibold hover:gap-2.5 transition-all"
            >
              Discover all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredMSMEs.map((msme) => {
              const city = PHILIPPINE_CITIES.find((c) => c.id === msme.cityId);
              return (
                <MSMECard key={msme.id} msme={msme} cityName={city?.name} />
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link to="/discover">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 rounded-xl"
              >
                Explore All Impact Businesses
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Expoxur */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary text-xs font-display font-bold uppercase tracking-widest mb-2">
              Our Mission
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              More Than a Directory
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Expoxur isn't a listing site — it's a credibility platform. We tell the stories
              behind the businesses so communities can trust, support, and connect with them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Credibility First",
                desc: "Every profile shows certifications, grants, trainings, and LGU partnerships. Not just a name and a phone number.",
              },
              {
                icon: "🗺️",
                title: "City-by-City",
                desc: "Impact ecosystems are local. We organize businesses by city so communities can discover what's happening in their own backyard.",
              },
              {
                icon: "🎯",
                title: "SDG-Aligned",
                desc: "Every business is tagged to the UN Sustainable Development Goals so you instantly see the impact they're creating.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl border border-border/80 p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient section-pattern">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Is Your Business Making an Impact?
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Join Expoxur and let your community know what you stand for.
              Build credibility. Get discovered. Attract support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-display font-bold h-12 px-8 rounded-xl shadow-lg"
                >
                  List Your Business — Free
                </Button>
              </Link>
              <Link to="/register?type=premium">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 font-display font-semibold h-12 px-8 rounded-xl"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Get Verified — ₱1,000/yr
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={expoxurLogo} alt="Expoxur" className="h-8 w-auto brightness-0 invert opacity-90" />
              <span className="text-background/40">|</span>
              <span className="text-xs text-background/50 font-display">
                Powered by Ainsoph Venture Labs
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/cities" className="hover:text-background transition-colors">Cities</Link>
              <Link to="/discover" className="hover:text-background transition-colors">Discover</Link>
              <Link to="/register" className="hover:text-background transition-colors">For MSMEs</Link>
              <Link to="/login" className="hover:text-background transition-colors">Login</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-background/10 text-center">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} Expoxur. Building the Philippine impact economy, one city at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
