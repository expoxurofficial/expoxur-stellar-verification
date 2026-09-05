import { Link } from "react-router-dom";
import {
  Building2, Eye, Star, Settings, Bell, ArrowUpRight,
  CheckCircle, MapPin, Users, Plus, Edit3, BarChart2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { MOCK_MSMES, PHILIPPINE_CITIES } from "@/data/mockData";
import { SDGList } from "@/components/SDGBadge";

// Demo: show first MSME as "logged in" business
const demoMSME = MOCK_MSMES[0];
const demoCity = PHILIPPINE_CITIES.find((c) => c.id === demoMSME.cityId);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />

      <div className="container py-8">
        {/* Welcome Header */}
        <div className="bg-hero-gradient section-pattern rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-3xl">
                🌱
              </div>
              <div>
                <p className="text-white/60 text-xs font-display mb-0.5">Welcome back,</p>
                <h1 className="font-display font-bold text-2xl text-white">{demoMSME.businessName}</h1>
                <div className="flex items-center gap-2 mt-1">
                  {demoMSME.isVerified && (
                    <span className="flex items-center gap-1 text-[10px] bg-white/15 border border-white/25 text-white px-2 py-0.5 rounded-full font-display font-semibold">
                      <CheckCircle className="h-2.5 w-2.5" /> Verified
                    </span>
                  )}
                  {demoMSME.isPremium && (
                    <span className="flex items-center gap-1 text-[10px] bg-amber-400/20 border border-amber-400/30 text-amber-200 px-2 py-0.5 rounded-full font-display font-semibold">
                      <Star className="h-2.5 w-2.5" /> Premium
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-[10px] text-white/50 font-display">
                    <MapPin className="h-2.5 w-2.5" /> {demoCity?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to={`/businesses/${demoMSME.id}`}>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-display text-xs">
                  <Eye className="h-3.5 w-3.5 mr-1.5" /> View Profile
                </Button>
              </Link>
              <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-display font-bold text-xs">
                <Edit3 className="h-3.5 w-3.5 mr-1.5" /> Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Profile Views", value: "248", icon: Eye, color: "text-blue-500" },
                { label: "SDGs Covered", value: demoMSME.sdgs.length.toString(), icon: BarChart2, color: "text-emerald-500" },
                { label: "Team Members", value: demoMSME.employeeCount.toString(), icon: Users, color: "text-violet-500" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border border-border/80 p-4 text-center">
                  <stat.icon className={`h-5 w-5 mx-auto mb-2 ${stat.color}`} />
                  <p className="font-display font-bold text-xl text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Profile Completeness */}
            <div className="bg-card rounded-xl border border-border/80 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-foreground">Profile Completeness</h3>
                <span className="text-sm font-display font-bold text-primary">82%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
                <div className="h-full w-[82%] bg-gradient-to-r from-primary to-primary-glow rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Business Story", done: true },
                  { label: "Products & Services", done: true },
                  { label: "Community Impact", done: true },
                  { label: "SDG Alignment", done: true },
                  { label: "Business Logo / Images", done: false },
                  { label: "Certifications", done: true },
                  { label: "Website / Social Links", done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <div className={`h-4 w-4 rounded-full flex items-center justify-center shrink-0 ${
                      item.done ? "bg-emerald-100 text-emerald-600" : "bg-muted text-muted-foreground"
                    }`}>
                      {item.done ? <CheckCircle className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </div>
                    <span className={`text-xs font-display ${item.done ? "text-foreground" : "text-muted-foreground"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SDG Alignment */}
            <div className="bg-card rounded-xl border border-border/80 p-5">
              <h3 className="font-display font-bold text-foreground mb-3">Your SDG Alignment</h3>
              <SDGList sdgIds={demoMSME.sdgs} size="md" />
            </div>

            {/* Needs */}
            <div className="bg-card rounded-xl border border-border/80 p-5">
              <h3 className="font-display font-bold text-foreground mb-3">Currently Seeking</h3>
              <div className="flex flex-wrap gap-2">
                {demoMSME.needs.map((need) => (
                  <span
                    key={need}
                    className="bg-primary/10 text-primary border border-primary/25 text-sm font-display font-semibold px-4 py-1.5 rounded-full"
                  >
                    {need}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                These tags help funders, partners, and supporters find you.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Plan Status */}
            <div className="bg-card rounded-xl border border-border/80 p-5">
              <h3 className="font-display font-bold text-sm text-foreground mb-3">
                Current Plan
              </h3>
              {demoMSME.isPremium ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    <span className="font-display font-bold text-foreground">Premium Verified</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Renews December 2025</p>
                  <div className="flex flex-col gap-1.5 mt-2 pt-3 border-t border-border/60">
                    {["Priority placement", "Verified badge", "Highlighted card"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    You're on the Free plan. Upgrade to get verified and reach more supporters.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground font-display font-bold text-sm rounded-lg">
                    Upgrade — ₱1,000/yr
                  </Button>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="bg-card rounded-xl border border-border/80 p-5">
              <h3 className="font-display font-bold text-sm text-foreground mb-3">Quick Actions</h3>
              <div className="flex flex-col gap-1">
                {[
                  { label: "Edit Business Profile", icon: Edit3 },
                  { label: "Upload Logo / Photos", icon: Plus },
                  { label: "Update SDG Tags", icon: BarChart2 },
                  { label: "Account Settings", icon: Settings },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-all font-display text-left"
                  >
                    <action.icon className="h-4 w-4 text-primary shrink-0" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* View Public Profile */}
            <Link to={`/businesses/${demoMSME.id}`}>
              <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 flex items-center justify-between group hover:bg-primary/12 transition-colors cursor-pointer">
                <div>
                  <p className="font-display font-bold text-sm text-foreground">View Public Profile</p>
                  <p className="text-xs text-muted-foreground mt-0.5">See how others see your business</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
