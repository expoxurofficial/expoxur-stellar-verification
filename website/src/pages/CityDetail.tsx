import { useParams, Link } from "react-router-dom";
import { MapPin, Lock, Building2, ArrowLeft, Megaphone, Calendar, Users, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHILIPPINE_CITIES, MOCK_MSMES } from "@/data/mockData";
import MSMECard from "@/components/MSMECard";
import Navbar from "@/components/Navbar";
import cieCatMap from "@/assets/ciecat-map.png";
import cieCatMegaphone from "@/assets/ciecat-megaphone.png";

const ANNOUNCEMENTS = [
  {
    id: "a1",
    title: "Expoxur CIE Registry Now Open",
    body: "Certified Impact Enterprises can now register and claim their official city listing on Expoxur.",
    date: "March 2025",
    tag: "Platform Update",
  },
  {
    id: "a2",
    title: "Local Impact Summit 2025",
    body: "Join fellow impact enterprises and community leaders for a city-wide summit on sustainable enterprise.",
    date: "April 2025",
    tag: "Local Initiative",
  },
];

const TRAININGS = [
  {
    id: "t1",
    title: "MSME Resilience & Growth Program",
    organizer: "DTI Philippines",
    date: "Ongoing — Q2 2025",
    type: "Free",
  },
  {
    id: "t2",
    title: "Social Enterprise Foundations",
    organizer: "Ainsoph Venture Labs",
    date: "May 2025",
    type: "Subsidized",
  },
  {
    id: "t3",
    title: "SDG Alignment for Businesses",
    organizer: "UNDP Philippines",
    date: "June 2025",
    type: "Free",
  },
];

export default function CityDetail() {
  const { cityId } = useParams<{ cityId: string }>();
  const city = PHILIPPINE_CITIES.find((c) => c.id === cityId);
  const cityMSMEs = MOCK_MSMES.filter((m) => m.cityId === cityId);
  const isActive = cityMSMEs.length > 0;

  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <p className="font-display font-bold text-xl text-foreground">City not found</p>
          <Link to="/cities" className="text-primary mt-4 inline-block text-sm font-display">
            ← Back to Cities
          </Link>
        </div>
      </div>
    );
  }

  if (!isActive) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="py-20">
          <div className="container max-w-2xl mx-auto text-center">
            <div className="bg-muted/50 border border-border rounded-2xl p-12">
              <div className="h-16 w-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-muted-foreground" />
              </div>
              <h1 className="font-display font-bold text-2xl text-foreground mb-3">
                {city.name} is Not Yet Activated
              </h1>
              <p className="text-muted-foreground text-base mb-2 leading-relaxed">
                This city is not yet activated.{" "}
                <strong>Be the first to support your local impact ecosystem.</strong>
              </p>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                If you run an impact business in {city.name}, {city.province}, register now and
                help activate this city for your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Link to="/register">
                  <Button className="bg-primary text-primary-foreground font-display font-bold rounded-xl px-6">
                    Register My Business
                  </Button>
                </Link>
                <Link to="/cities">
                  <Button variant="outline" className="font-display rounded-xl px-6">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Cities
                  </Button>
                </Link>
              </div>
              {/* Partner CTA */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Are you an organization, LGU, or sponsor that wants to activate {city.name}?
                </p>
                <Button variant="outline" className="font-display font-semibold rounded-xl border-primary/40 text-primary hover:bg-primary/5">
                  <HandshakeIcon className="h-4 w-4 mr-2" />
                  Partner with us to activate this city
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-hero-gradient section-pattern py-12 relative overflow-hidden">
        {/* CIEcat — holding map for navigation context */}
        <div className="absolute right-6 bottom-0 hidden lg:block pointer-events-none select-none">
          <img
            src={cieCatMap}
            alt="CIEcat holding a map"
            className="h-44 w-auto object-contain drop-shadow-lg"
            draggable={false}
          />
        </div>

        <div className="container relative">
          <Link
            to="/cities"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-display mb-5 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Cities
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-white/60 text-sm font-display">
                  {city.province} · {city.region}
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl text-white mb-2">{city.name}</h1>
              {city.description && (
                <p className="text-white/70 text-base max-w-lg">{city.description}</p>
              )}
              {/* Partner CTA */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10 font-display font-semibold text-xs rounded-xl backdrop-blur-sm"
                >
                  <HandshakeIcon className="h-3.5 w-3.5 mr-1.5" />
                  Partner with us to activate this city
                </Button>
              </div>
            </div>

            <div className="flex gap-4 shrink-0">
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                <p className="font-display font-bold text-white text-2xl">{cityMSMEs.length}</p>
                <p className="text-white/60 text-xs">Impact Enterprises</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                <p className="font-display font-bold text-white text-2xl">
                  {[...new Set(cityMSMEs.flatMap((m) => m.sdgs))].length}
                </p>
                <p className="text-white/60 text-xs">SDGs Covered</p>
              </div>
            </div>
          </div>

          {/* Sponsor Placeholder — only visible when city is active */}
          <div className="mt-6 pt-5 border-t border-white/15">
            <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-3">City Partners & Sponsors</p>
            <div className="flex flex-wrap gap-3 items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-28 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center"
                >
                  <span className="text-white/30 text-[10px] font-display">Your Logo Here</span>
                </div>
              ))}
              <button className="h-9 px-4 rounded-lg border border-white/20 border-dashed text-white/40 text-xs font-display hover:border-white/40 hover:text-white/60 transition-colors">
                + Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Strict Section Order */}
      <section className="py-10">
        <div className="container space-y-12">

          {/* 1. ANNOUNCEMENTS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={cieCatMegaphone}
                alt="Announcements"
                className="h-12 w-12 object-contain shrink-0"
              />
              <div>
                <p className="text-primary text-xs font-display font-bold uppercase tracking-widest">
                  Announcements
                </p>
                <h2 className="font-display font-bold text-xl text-foreground">
                  Platform Updates & Local Initiatives
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {ANNOUNCEMENTS.map((ann) => (
                <div key={ann.id} className="bg-card rounded-xl border border-border/80 p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[10px] font-display font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                      {ann.tag}
                    </span>
                    <span className="text-xs text-muted-foreground shrink-0">{ann.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">{ann.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ann.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. TRAININGS & EVENTS */}
          <div>
            <div className="mb-6">
              <p className="text-primary text-xs font-display font-bold uppercase tracking-widest mb-1">
                Trainings & Events
              </p>
              <h2 className="font-display font-bold text-xl text-foreground">
                Skill-Building & Support Opportunities
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {TRAININGS.map((t) => (
                <div key={t.id} className="bg-card rounded-xl border border-border/80 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className={`text-[10px] font-display font-semibold px-2 py-0.5 rounded-full border ${
                      t.type === "Free"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}>
                      {t.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">{t.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{t.organizer}</p>
                  <p className="text-xs text-muted-foreground/70">{t.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. FEATURED CIEs — Main Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-primary text-xs font-display font-bold uppercase tracking-widest mb-1">
                  Certified Impact Enterprises
                </p>
                <h2 className="font-display font-bold text-xl text-foreground">
                  Impact Businesses in {city.name}
                </h2>
              </div>
              <Link to="/register">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground font-display font-semibold text-xs rounded-lg"
                >
                  + Add Your Business
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityMSMEs.map((msme) => (
                <MSMECard key={msme.id} msme={msme} cityName={city.name} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
