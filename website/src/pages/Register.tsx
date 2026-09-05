import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Building2, User, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import expoxurLogo from "@/assets/expoxur-logo.png";

type UserType = "msme" | "public" | null;

export default function Register() {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<UserType>(null);
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState<"free" | "premium">(
    searchParams.get("type") === "premium" ? "premium" : "free"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-12 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img src={expoxurLogo} alt="Expoxur" className="h-10 w-auto mx-auto mb-4" />
          <h1 className="font-display font-bold text-3xl text-foreground mb-2">
            Join Expoxur
          </h1>
          <p className="text-muted-foreground text-base">
            Create your account to discover and support impact MSMEs across the Philippines.
          </p>
        </div>

        {/* Step 1: Choose User Type */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <p className="text-sm font-display font-semibold text-foreground/70 text-center mb-2">
              I am registering as:
            </p>

            <button
              onClick={() => setUserType("msme")}
              className={`group bg-card rounded-xl border-2 p-6 text-left transition-all duration-200 ${
                userType === "msme"
                  ? "border-primary shadow-md"
                  : "border-border hover:border-primary/40 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${userType === "msme" ? "bg-primary/15" : "bg-muted"}`}>
                  <Building2 className={`h-6 w-6 ${userType === "msme" ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-foreground">MSME / Social Enterprise</h3>
                    {userType === "msme" && <CheckCircle className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Register your impact business, build your credibility profile, and get discovered by
                    funders, partners, and your community.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-display">
                      Free listing
                    </span>
                    <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-display font-semibold">
                      ⭐ Premium available
                    </span>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setUserType("public")}
              className={`group bg-card rounded-xl border-2 p-6 text-left transition-all duration-200 ${
                userType === "public"
                  ? "border-primary shadow-md"
                  : "border-border hover:border-primary/40 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${userType === "public" ? "bg-primary/15" : "bg-muted"}`}>
                  <User className={`h-6 w-6 ${userType === "public" ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-foreground">Public / Community Member</h3>
                    {userType === "public" && <CheckCircle className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Browse impact businesses, save your favorites, and stay updated on the Philippine
                    social enterprise ecosystem.
                  </p>
                  <span className="inline-block text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-display mt-3">
                    Always free
                  </span>
                </div>
              </div>
            </button>

            <Button
              disabled={!userType}
              onClick={() => setStep(2)}
              className="mt-2 h-12 bg-primary text-primary-foreground font-display font-bold rounded-xl disabled:opacity-40"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Plan (MSME only) */}
        {step === 2 && userType === "msme" && (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-muted-foreground hover:text-foreground font-display text-left mb-1 flex items-center gap-1"
            >
              ← Back
            </button>
            <p className="text-sm font-display font-semibold text-foreground/70 text-center mb-2">
              Choose your listing plan:
            </p>

            {/* Free Plan */}
            <button
              onClick={() => setPlan("free")}
              className={`bg-card rounded-xl border-2 p-6 text-left transition-all duration-200 ${
                plan === "free" ? "border-primary shadow-md" : "border-border hover:border-primary/40"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Free Listing</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Profile management and visibility in your city's directory.
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {["Business profile page", "City directory visibility", "SDG tagging", "Community impact story"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="font-display font-bold text-xl text-foreground">Free</p>
                  <p className="text-xs text-muted-foreground">Forever</p>
                </div>
              </div>
            </button>

            {/* Premium Plan */}
            <button
              onClick={() => setPlan("premium")}
              className={`bg-card rounded-xl border-2 p-6 text-left transition-all duration-200 relative overflow-hidden ${
                plan === "premium" ? "border-primary shadow-md" : "border-border hover:border-primary/40"
              }`}
            >
              <div className="absolute top-3 right-3">
                <span className="bg-amber-400 text-amber-900 text-[10px] font-display font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Recommended
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <h3 className="font-display font-bold text-foreground">Verified Impact Business</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Everything in Free, plus priority placement and verification badge.
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      "Everything in Free",
                      '"Verified Impact Business" badge',
                      "Priority placement in city listing",
                      "Highlighted profile card",
                      "Direct connect button",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="font-display font-bold text-xl text-foreground">₱1,000</p>
                  <p className="text-xs text-muted-foreground">per year</p>
                </div>
              </div>
            </button>

            <Button
              onClick={() => setStep(3)}
              className="mt-2 h-12 bg-primary text-primary-foreground font-display font-bold rounded-xl"
            >
              Continue with {plan === "premium" ? "Premium" : "Free"} Plan
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2 (public) / Step 3 (MSME): Registration Form */}
        {((step === 2 && userType === "public") || (step === 3 && userType === "msme")) && (
          <div className="bg-card rounded-xl border border-border/80 p-6 flex flex-col gap-5">
            <button
              onClick={() => setStep(userType === "msme" ? 2 : 1)}
              className="text-sm text-muted-foreground hover:text-foreground font-display text-left flex items-center gap-1 mb-1"
            >
              ← Back
            </button>

            <h2 className="font-display font-bold text-lg text-foreground">
              {userType === "msme" ? "Business Account Details" : "Create Your Account"}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="font-display text-xs font-semibold">First Name</Label>
                <Input className="mt-1" placeholder="Maria" />
              </div>
              <div>
                <Label className="font-display text-xs font-semibold">Last Name</Label>
                <Input className="mt-1" placeholder="Santos" />
              </div>
            </div>

            <div>
              <Label className="font-display text-xs font-semibold">Email Address</Label>
              <Input className="mt-1" type="email" placeholder="you@example.com" />
            </div>

            <div>
              <Label className="font-display text-xs font-semibold">Password</Label>
              <Input className="mt-1" type="password" placeholder="Create a secure password" />
            </div>

            {userType === "msme" && (
              <>
                <div>
                  <Label className="font-display text-xs font-semibold">Business Name</Label>
                  <Input className="mt-1" placeholder="Your Impact Business Name" />
                </div>
                <div>
                  <Label className="font-display text-xs font-semibold">City</Label>
                  <Input className="mt-1" placeholder="e.g. Quezon City" />
                </div>
              </>
            )}

            <p className="text-xs text-muted-foreground leading-relaxed">
              By registering, you agree to Expoxur's Terms of Service and Privacy Policy.
              Your information will be used to build your impact business profile.
            </p>

            <Button className="h-12 bg-primary text-primary-foreground font-display font-bold rounded-xl">
              {userType === "msme"
                ? plan === "premium"
                  ? "Create Account & Upgrade to Premium"
                  : "Create My Business Account"
                : "Create My Account"}
            </Button>
          </div>
        )}

        {/* Already have account */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-display font-semibold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
