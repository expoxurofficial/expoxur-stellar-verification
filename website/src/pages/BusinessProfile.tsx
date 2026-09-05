import { useParams, Link } from "react-router-dom";
import {
  MapPin, ArrowLeft, Star, CheckCircle, Users, Calendar,
  Mail, Globe, Facebook, Heart, Award, BookOpen, Building,
  Lightbulb, ShoppingBag, ToggleLeft, ToggleRight, Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_MSMES, PHILIPPINE_CITIES, type Product } from "@/data/mockData";
import { SDGList } from "@/components/SDGBadge";
import Navbar from "@/components/Navbar";
import cieCatBadge from "@/assets/ciecat-badge.png";
import { useState } from "react";

const NEED_COLORS: Record<string, string> = {
  Funding: "text-amber-700 bg-amber-50 border-amber-200",
  Partnerships: "text-blue-700 bg-blue-50 border-blue-200",
  Exposure: "text-violet-700 bg-violet-50 border-violet-200",
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
  "Consulting & Services": "📋",
  "Retail & Crafts": "🛍️",
};

const PRODUCT_TYPE_STYLE: Record<string, string> = {
  Retail: "bg-blue-50 text-blue-700 border-blue-200",
  Wholesale: "bg-violet-50 text-violet-700 border-violet-200",
  Service: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-xl border border-border/80 p-6">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-1.5 rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-display font-bold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-medium border ${className}`}
    >
      {children}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [affiliateOn, setAffiliateOn] = useState(product.affiliateAvailable);

  return (
    <div className="bg-background rounded-xl border border-border/80 p-4 flex flex-col gap-3">
      {/* Type Badge */}
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] font-display font-semibold px-2.5 py-0.5 rounded-full border ${PRODUCT_TYPE_STYLE[product.type]}`}
        >
          {product.type}
        </span>
        {product.price && (
          <span className="text-xs font-display font-bold text-foreground">{product.price}</span>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h4 className="font-display font-bold text-sm text-foreground mb-0.5">{product.name}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
      </div>

      {/* Affiliate Toggle */}
      <div className="flex items-center justify-between pt-2 border-t border-border/60">
        <span className="text-xs text-muted-foreground font-display">Affiliate Program</span>
        <button
          onClick={() => setAffiliateOn((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-display font-semibold transition-colors"
        >
          {affiliateOn ? (
            <>
              <ToggleRight className="h-4 w-4 text-primary" />
              <span className="text-primary">Available</span>
            </>
          ) : (
            <>
              <ToggleLeft className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Unavailable</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function BusinessProfile() {
  const { businessId } = useParams<{ businessId: string }>();
  const msme = MOCK_MSMES.find((m) => m.id === businessId);
  const city = msme ? PHILIPPINE_CITIES.find((c) => c.id === msme.cityId) : null;

  if (!msme) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <p className="font-display font-bold text-xl text-foreground">Business not found</p>
          <Link to="/discover" className="text-primary mt-4 inline-block text-sm font-display">
            ← Back to Discover
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-hero-gradient section-pattern py-10">
        <div className="container">
          <Link
            to={city ? `/cities/${city.id}` : "/cities"}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-display mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {city?.name || "Cities"}
          </Link>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Logo */}
            <div className="h-20 w-20 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-5xl shrink-0 backdrop-blur-sm">
              {INDUSTRY_ICONS[msme.industry] || "🏢"}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="font-display font-bold text-3xl text-white">{msme.businessName}</h1>
                {msme.isVerified && (
                  <span className="flex items-center gap-1 bg-white/15 border border-white/25 rounded-full px-3 py-0.5 text-xs font-display font-semibold text-white">
                    <CheckCircle className="h-3 w-3" /> Verified Impact Business
                  </span>
                )}
                {msme.isPremium && (
                  <span className="flex items-center gap-1 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-0.5 text-xs font-display font-semibold text-amber-200">
                    <Star className="h-3 w-3 fill-amber-300" /> Premium Listing
                  </span>
                )}
              </div>
              <p className="text-white/70 text-lg mb-3 italic">{msme.tagline}</p>

              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                {city && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {city.name}, {city.province}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Founded {msme.yearFounded}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  {msme.employeeCount} team members
                </span>
              </div>
            </div>

            {/* Needs */}
            <div className="flex flex-col gap-2">
              {msme.needs.map((need) => (
                <span
                  key={need}
                  className="bg-white/10 border border-white/20 text-white text-xs font-display font-semibold px-3 py-1 rounded-full"
                >
                  Seeks: {need}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Story */}
              <Section title="Our Story" icon={BookOpen}>
                <p className="text-muted-foreground leading-relaxed text-sm">{msme.story}</p>
              </Section>

              {/* Products & Services */}
              <Section title="Products & Services" icon={Lightbulb}>
                <div className="flex flex-wrap gap-2">
                  {msme.productsServices.map((item) => (
                    <Tag key={item} className="bg-secondary text-secondary-foreground border-border">
                      {item}
                    </Tag>
                  ))}
                </div>
              </Section>

              {/* Community Impact */}
              <Section title="Community Impact" icon={Heart}>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {msme.communityImpact}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display font-semibold text-xs text-foreground/70 uppercase tracking-wide mb-3">
                    Who We've Helped
                  </p>
                  <ul className="space-y-1.5">
                    {msme.whoHelped.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>

              {/* SDG Alignment */}
              <Section title="SDG Alignment" icon={Globe}>
                <p className="text-xs text-muted-foreground mb-3">
                  This business contributes to the following UN Sustainable Development Goals:
                </p>
                <SDGList sdgIds={msme.sdgs} size="md" />
              </Section>

              {/* ─── MARKETPLACE SECTION ─────────────────────────────── */}
              {msme.products && msme.products.length > 0 && (
                <div className="bg-card rounded-xl border border-border/80 p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground">Marketplace</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">
                    Products and services offered by this business. Toggle affiliate availability below.
                  </p>

                  {/* Filter by type */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {(["Retail", "Wholesale", "Service"] as const)
                      .filter((type) => msme.products!.some((p) => p.type === type))
                      .map((type) => (
                        <span
                          key={type}
                          className={`text-[10px] font-display font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${PRODUCT_TYPE_STYLE[type]}`}
                        >
                          <Package className="h-3 w-3" />
                          {type}
                        </span>
                      ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {msme.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  <p className="text-[10px] text-muted-foreground/60 mt-4 font-display">
                    ⚠️ Prices are indicative. Contact the business directly for orders and partnerships.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Verified Badge — CIEcat wearing badge */}
              {msme.isVerified && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-center gap-4">
                  <img
                    src={cieCatBadge}
                    alt="Verified Impact Business"
                    className="h-16 w-16 object-contain shrink-0"
                  />
                  <div>
                    <p className="font-display font-bold text-sm text-foreground mb-0.5">
                      Verified Impact Business
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      This enterprise has been verified for impact, credibility, and SDG alignment.
                    </p>
                  </div>
                </div>
              )}

              {/* Founder Card */}
              <div className="bg-card rounded-xl border border-border/80 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xl font-display font-bold text-primary">
                    {msme.founderName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{msme.founderName}</p>
                    <p className="text-xs text-muted-foreground">{msme.founderTitle}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-3 border-t border-border/60">
                  {msme.email && (
                    <a
                      href={`mailto:${msme.email}`}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {msme.email}
                    </a>
                  )}
                  {msme.website && (
                    <a
                      href={msme.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      {msme.website}
                    </a>
                  )}
                  {msme.facebook && (
                    <a
                      href={`https://facebook.com/${msme.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="h-3.5 w-3.5" />
                      {msme.facebook}
                    </a>
                  )}
                </div>
              </div>

              {/* Credibility */}
              <div className="bg-card rounded-xl border border-border/80 p-5 flex flex-col gap-4">
                <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Credibility Profile
                </h3>

                {msme.certifications.length > 0 && (
                  <div>
                    <p className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      Certifications
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {msme.certifications.map((c) => (
                        <div key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {msme.grants.length > 0 && (
                  <div>
                    <p className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      Grants Received
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {msme.grants.map((g) => (
                        <div key={g} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-amber-500 shrink-0">🏆</span>
                          {g}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {msme.lguSupport.length > 0 && (
                  <div>
                    <p className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      LGU / Org Support
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {msme.lguSupport.map((l) => (
                        <div key={l} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Building className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {msme.trainings.length > 0 && (
                  <div>
                    <p className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      Trainings Attended
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {msme.trainings.map((t) => (
                        <div key={t} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <BookOpen className="h-3.5 w-3.5 text-violet-400 shrink-0 mt-0.5" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {msme.certifications.length === 0 &&
                  msme.grants.length === 0 &&
                  msme.lguSupport.length === 0 &&
                  msme.trainings.length === 0 && (
                    <p className="text-xs text-muted-foreground italic">
                      Credibility information will be added as this business completes its profile.
                    </p>
                  )}
              </div>

              {/* Industry */}
              <div className="bg-card rounded-xl border border-border/80 p-5">
                <p className="text-xs font-display font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                  Industry
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{INDUSTRY_ICONS[msme.industry] || "🏢"}</span>
                  <span className="font-display font-semibold text-sm text-foreground">
                    {msme.industry}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/8 border border-primary/20 rounded-xl p-5 text-center">
                <p className="font-display font-bold text-sm text-foreground mb-1">
                  Want to support this business?
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Reach out directly to collaborate or partner.
                </p>
                {msme.email ? (
                  <a href={`mailto:${msme.email}`}>
                    <Button className="w-full bg-primary text-primary-foreground font-display font-bold text-sm rounded-lg">
                      Connect with {msme.founderName.split(" ")[0]}
                    </Button>
                  </a>
                ) : (
                  <Button className="w-full bg-primary text-primary-foreground font-display font-bold text-sm rounded-lg">
                    Connect with this Business
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
