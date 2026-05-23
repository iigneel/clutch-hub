import { createFileRoute } from "@tanstack/react-router";
import { Particles } from "@/components/clutch/Particles";
import { CursorGlow } from "@/components/clutch/CursorGlow";
import { TiltCard } from "@/components/clutch/TiltCard";
import heroArena from "@/assets/hero-arena.jpg";
import indiaMap from "@/assets/india-map.jpg";
import squadCards from "@/assets/squad-cards.jpg";
import {
  Crosshair,
  Users2,
  Trophy,
  Mic2,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const ORBITRON = { fontFamily: "'Orbitron', sans-serif" } as const;

const games = [
  { name: "BGMI", tag: "Battle Royale" },
  { name: "VALORANT", tag: "Tactical FPS" },
  { name: "COD MOBILE", tag: "Shooter" },
  { name: "FREE FIRE", tag: "Battle Royale" },
];

const features = [
  {
    icon: Crosshair,
    title: "Smart Matchmaking",
    desc: "Skill-tier, KD, playstyle and language — matched in seconds, not lobbies.",
  },
  {
    icon: Users2,
    title: "Squad Builder",
    desc: "Build duos, trios and full squads with players who actually vibe with you.",
  },
  {
    icon: Trophy,
    title: "Competitive Ranking",
    desc: "Earn Clutch Points. Climb from Rookie to Legend across every supported title.",
  },
  {
    icon: Mic2,
    title: "Voice Team Connect",
    desc: "Crystal-clear low-latency voice, auto-joined the moment your squad locks in.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg" />
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <SquadShowcase />
      <GamesSection />
      <IndiaSection />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <div className="relative grid h-9 w-9 place-items-center rounded-lg glass glow-purple">
            <Zap className="h-5 w-5" style={{ color: "var(--neon-purple)" }} />
          </div>
          <span style={ORBITRON} className="text-xl font-black tracking-widest">
            CLUTCH
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#games" className="transition-colors hover:text-foreground">Games</a>
          <a href="#india" className="transition-colors hover:text-foreground">India</a>
          <a href="#join" className="transition-colors hover:text-foreground">Early Access</a>
        </nav>
        
          href="#join"
          className="hidden rounded-full glass px-5 py-2 text-sm font-semibold transition-all hover:glow-purple md:inline-block"
        >
          Join Beta
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 pt-10 pb-24 md:pt-20 md:pb-32">
      <Particles count={70} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "oklch(0.55 0.12 72 / 0.35)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-10 h-[420px] w-[420px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "oklch(0.45 0.09 65 / 0.30)", animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--neon-purple)", boxShadow: "0 0 10px var(--neon-purple)" }} />
            India's First Gamer Matchmaking Platform
          </div>

          <h1
            style={ORBITRON}
            className="text-[15vw] font-black leading-[0.85] tracking-tighter sm:text-[10vw] lg:text-[8rem]"
          >
            <span className="block text-gradient">CLUTCH</span>
          </h1>

          <h2 className="mt-6 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Find Your Squad.{" "}
            <span className="neon-text-purple">Clutch</span>{" "}
            <span className="neon-text-blue">Every Match.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            India's first platform built to match gamers by skill, playstyle, language, and vibe — across every title you grind.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            
              href="#join"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-purple)" }}
            >
              <Sparkles className="h-4 w-4" />
              Join Early Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:glow-blue"
            >
              <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--neon-blue)", boxShadow: "0 0 8px var(--neon-blue)" }} />
              Launching Soon
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
            <Stat n="20K+" l="Waitlist" />
            <Stat n="4" l="Titles" />
            <Stat n="28" l="States" />
          </div>
        </div>

        <div className="relative perspective-1000">
          <TiltCard max={8} className="relative">
            <div className="relative overflow-hidden rounded-3xl glass glow-purple">
              <img
                src={heroArena}
                alt="Holographic gamer avatars connected by matchmaking lines inside a futuristic 3D arena"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.07 0.008 60 / 0.7))" }} />
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                <HudChip label="MATCHING" value="98%" />
                <HudChip label="LATENCY" value="12ms" tone="blue" />
              </div>
              <div className="absolute right-4 top-4">
                <HudChip label="RANK" value="DIAMOND III" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5" style={{ color: "var(--neon-blue)" }} />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Squad locked</div>
                      <div style={ORBITRON} className="text-sm font-bold">Team Aurora · 5 / 5</div>
                    </div>
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "var(--gradient-primary)", color: "white" }}>
                    READY
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>

          <div className="absolute -left-6 -bottom-10 hidden w-64 animate-float-slow md:block">
            <div className="glass rounded-2xl p-4 glow-blue">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Now Matching</span>
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--neon-blue)" }} />
              </div>
              <div style={ORBITRON} className="mt-2 text-lg font-bold">BGMI · TPP</div>
              <div className="mt-3 flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2" style={{ borderColor: "oklch(0.07 0.008 60)", background: `linear-gradient(135deg, oklch(0.${5+i} 0.12 ${70 + i*5}), oklch(0.4 0.08 65))` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-6 hidden w-56 animate-float-y md:block">
            <div className="glass rounded-2xl p-4 glow-purple">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Voice</div>
              <div className="mt-2 flex items-end gap-1 h-8">
                {[6,12,20,28,18,10,22,30,14,8,18,24].map((h,i) => (
                  <span key={i} className="w-1.5 rounded-full" style={{ height: h, background: "var(--neon-purple)", boxShadow: "0 0 6px var(--neon-purple)" }} />
                ))}
              </div>
              <div className="mt-2 text-xs">RAVI · "Push A long"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div style={ORBITRON} className="text-2xl font-black text-gradient">{n}</div>
      <div className="mt-1 text-[10px]">{l}</div>
    </div>
  );
}

function HudChip({ label, value, tone = "purple" }: { label: string; value: string; tone?: "purple" | "blue" }) {
  return (
    <div className="glass rounded-lg px-3 py-1.5">
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div
        style={ORBITRON}
        className={`text-xs font-bold ${tone === "blue" ? "neon-text-blue" : "neon-text-purple"}`}
      >
        {value}
      </div>
    </div>
  );
}

function Marquee() {
  const items = ["MATCH SMARTER", "RANK HIGHER", "SQUAD UP", "CLUTCH MOMENTS", "MADE IN INDIA"];
  return (
    <div className="relative z-10 border-y border-border/40 py-6 overflow-hidden">
      <div className="flex animate-[drift_20s_linear_infinite] gap-16 whitespace-nowrap will-change-transform">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={ORBITRON} className="text-2xl font-black tracking-[0.3em] text-muted-foreground/40">
            {t} <span style={{ color: "var(--neon-purple)" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--neon-blue)" }}>
          // The Edge
        </div>
        <h2 style={ORBITRON} className="text-4xl font-black leading-tight md:text-6xl">
          Built for players<br />who <span className="text-gradient">refuse to lose.</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <TiltCard key={f.title} max={12}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:glow-purple">
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: i % 2 ? "var(--neon-blue)" : "var(--neon-purple)" }}
              />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl glass">
                  <f.icon className="h-6 w-6" style={{ color: i % 2 ? "var(--neon-blue)" : "var(--neon-purple)" }} />
                </div>
                <h3 style={ORBITRON} className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest opacity-60 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function SquadShowcase() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <TiltCard max={6}>
          <div className="relative overflow-hidden rounded-3xl glass glow-blue">
            <img src={squadCards} alt="Floating holographic squad cards" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(0deg, oklch(0.07 0.008 60 / 0.6), transparent 60%)" }} />
          </div>
        </TiltCard>

        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--neon-purple)" }}>
            // Squad Builder
          </div>
          <h2 style={ORBITRON} className="text-4xl font-black leading-tight md:text-5xl">
            Holographic squad cards.<br /><span className="text-gradient">Zero toxicity.</span>
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Every player carries a Clutch Card — skill tier, preferred role, language, vibe rating, and recent form. Match with the players who fit your style, not just your time-zone.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Verified skill tier based on real performance, not self-rating",
              "Filter by language: Hindi, Tamil, Telugu, English & more",
              "Vibe-rating system bans toxicity from your lobby",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-background" />
                </span>
                <span className="text-sm text-muted-foreground md:text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GamesSection() {
  return (
    <section id="games" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--neon-blue)" }}>
            // Supported Titles
          </div>
          <h2 style={ORBITRON} className="text-4xl font-black leading-tight md:text-6xl">
            Every <span className="text-gradient">grind.</span> One squad.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          From BR to tactical FPS, Clutch matches you across the titles Indian gamers actually play.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((g, i) => (
          <TiltCard key={g.name} max={14}>
            <div className="group relative h-56 overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:glow-purple">
              <div
                className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-60"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${i % 2 ? "oklch(0.65 0.11 78 / 0.5)" : "oklch(0.55 0.10 68 / 0.5)"}, transparent 60%)`,
                }}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{g.tag}</span>
                  <span style={ORBITRON} className="text-[10px] font-bold opacity-60">0{i + 1}</span>
                </div>
                <div>
                  <div style={ORBITRON} className="text-3xl font-black leading-none">{g.name}</div>
                  <div className="mt-4 h-px w-12 transition-all group-hover:w-24" style={{ background: "var(--gradient-primary)" }} />
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function IndiaSection() {
  return (
    <section id="india" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--neon-purple)" }}>
            // Built in India
          </div>
          <h2 style={ORBITRON} className="text-4xl font-black leading-tight md:text-5xl">
            A nation of <span className="text-gradient">gamers.</span><br />Finally, one network.
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground md:text-lg">
            From Delhi to Chennai, Mumbai to Guwahati — Clutch routes you to the lowest-ping lobby and the squad that speaks your language. Literally.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "28", l: "States live" },
              { n: "12", l: "Languages" },
              { n: "<15ms", l: "Avg ping" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <div style={ORBITRON} className="text-2xl font-black text-gradient">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 perspective-1000">
          <TiltCard max={10}>
            <div className="relative overflow-hidden rounded-3xl glass glow-purple">
              <img src={indiaMap} alt="Futuristic holographic 3D map of India with gaming network nodes" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 h-24 opacity-60"
                style={{
                  background: "linear-gradient(180deg, transparent, oklch(0.72 0.13 78 / 0.35), transparent)",
                  animation: "scan 6s linear infinite",
                }}
              />
              {[
                { t: "28%", l: "42%", c: "Mumbai" },
                { t: "20%", l: "60%", c: "Delhi" },
                { t: "55%", l: "55%", c: "Hyderabad" },
                { t: "72%", l: "48%", c: "Bengaluru" },
              ].map((p) => (
                <div key={p.c} className="absolute" style={{ top: p.t, left: p.l }}>
                  <span className="absolute -inset-3 animate-ping rounded-full" style={{ background: "var(--neon-blue)", opacity: 0.4 }} />
                  <span className="block h-2 w-2 rounded-full" style={{ background: "var(--neon-blue)", boxShadow: "0 0 12px var(--neon-blue)" }} />
                  <span className="absolute left-4 top-[-4px] whitespace-nowrap text-[10px] font-bold uppercase tracking-widest" style={{ color: "oklch(0.82 0.14 82)" }}>{p.c}</span>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="join" className="relative z-10 mx-auto max-w-5xl px-6 py-32">
      <div className="relative overflow-hidden rounded-[2rem] glass p-10 md:p-16 text-center glow-purple">
        <Particles count={30} />
        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em]">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--neon-purple)" }} />
            Beta · Closed Cohort
          </div>
          <h2 style={ORBITRON} className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Your squad is <span className="text-gradient">waiting.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">
            Lock your spot in the first 25,000 players. Earn legacy badges, founder ranks, and exclusive squad slots.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@gamertag.gg"
              className="flex-1 rounded-full glass px-6 py-4 text-sm outline-none placeholder:text-muted-foreground/60 focus:glow-blue"
            />
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-purple)" }}
            >
              Claim Spot <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
            No spam. Just the drop date.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg glass">
            <Zap className="h-4 w-4" style={{ color: "var(--neon-purple)" }} />
          </div>
          <span style={ORBITRON} className="text-sm font-black tracking-widest">CLUTCH</span>
          <span className="text-xs text-muted-foreground">© 2026 · Made in India</span>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">Discord</a>
          <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
          <a href="#" className="transition-colors hover:text-foreground">X / Twitter</a>
          <a href="#" className="transition-colors hover:text-foreground">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
