import ModePicker from "./components/ModePicker";
import WaitlistForm from "./components/WaitlistForm";

const NAV = [
  ["Skin scan", "#scan"],
  ["Makeovers", "#makeovers"],
  ["Honest timelines", "#timelines"],
  ["Privacy", "#trust"],
] as const;

const VOICE_QUESTIONS = [
  {
    topic: "Past products",
    q: "Which products have you used in the last year, and did any of them sting, break you out, or just do nothing?",
  },
  {
    topic: "Where you live",
    q: "What's the climate like where you live: humid, dry, polluted, hard water?",
  },
  {
    topic: "Food habits",
    q: "How often do you eat dairy, sugar, or fried food, and how much water do you drink in a day?",
  },
];

const SCAN_STEPS = [
  {
    n: "01",
    title: "Scan",
    body: "A quick selfie scan reads texture, redness, dryness and active breakouts.",
    color: "text-sage",
  },
  {
    n: "02",
    title: "Talk",
    body: "Our voice assistant asks about your past products, locality and diet, so the routine fits your real life.",
    color: "text-clay",
  },
  {
    n: "03",
    title: "Follow",
    body: "You get a routine of the most suitable products for healing and for the look you want, with a realistic timeline.",
    color: "text-bark",
  },
];

const TIMELINE = [
  { when: "Week 1–2", what: "Barrier settles. Irritation and tightness should ease. This is not the time to judge results." },
  { when: "Week 4", what: "One full skin-renewal cycle (28+ days). Texture and oiliness start to shift." },
  { when: "Week 8", what: "Breakouts and uneven tone show steady change as collagen work builds." },
  { when: "Week 12", what: "The point where most routines can be fairly judged. We re-scan and adjust." },
];

const TRUST = [
  {
    title: "Guidance, not diagnosis",
    body: "AuraSkin is cosmetic guidance. If a scan shows signs of cysts, lesions or anything that looks medical, we send you to a doctor instead of selling you a product.",
  },
  {
    title: "Your face stays yours",
    body: "Face data is processed with your explicit consent and is never sold or shared with third parties.",
  },
  {
    title: "Advice before sales",
    body: "Recommendations are based on your skin, not on who pays us. Sponsored placements are always labelled.",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#a9c1ae]" : "text-sage"
      }`}
    >
      {children}
    </p>
  );
}

function ScanMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-sm rounded-[2.5rem] bg-ink p-4 shadow-2xl"
      role="img"
      aria-label="Illustration of the AuraSkin app scanning a face and showing skin readings"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-[#3b4a43] to-[#232d29]">
        {/* simple face */}
        <div className="absolute left-1/2 top-[18%] h-[52%] w-[48%] -translate-x-1/2 rounded-[45%] bg-[#e3b79c]" />
        <div className="absolute left-1/2 top-[66%] h-[30%] w-[30%] -translate-x-1/2 bg-[#d2a384]" />
        <div className="absolute left-[34%] top-[40%] h-1.5 w-[10%] rounded-full bg-ink/70" />
        <div className="absolute right-[34%] top-[40%] h-1.5 w-[10%] rounded-full bg-ink/70" />
        <div className="absolute left-1/2 top-[56%] h-1.5 w-[10%] -translate-x-1/2 rounded-full bg-clay/80" />
        {/* scan frame + line */}
        <div className="absolute inset-[10%] rounded-3xl border border-dashed border-[#a9c1ae]/70" />
        <div className="animate-scanline absolute inset-x-[10%] h-0.5 bg-[#a9c1ae] shadow-[0_0_14px_3px_rgba(169,193,174,0.7)]" />
        {/* markers */}
        <span className="absolute left-[30%] top-[34%] size-2.5 rounded-full bg-clay ring-4 ring-clay/30" />
        <span className="absolute right-[32%] top-[50%] size-2.5 rounded-full bg-[#f0c27a] ring-4 ring-[#f0c27a]/30" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-cream">
        {[
          ["Texture", "Uneven"],
          ["Redness", "Mild"],
          ["Hydration", "Low"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/10 px-2 py-2">
            <div className="text-[#a9c1ae]">{k}</div>
            <div className="font-bold">{v}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[10px] text-cream/60">Illustrative example</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-sand bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="text-lg font-extrabold tracking-[0.18em] text-sage">
            AURASKIN
          </a>
          <nav aria-label="Primary" className="hidden gap-8 text-sm font-medium text-ink-soft md:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#join"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-sage"
          >
            Get early access
          </a>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* HERO */}
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>AI skin guidance &amp; makeovers</Eyebrow>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Skincare, without the guesswork.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Scan your skin with your phone camera. Tell our voice assistant
              about your history, where you live and what you eat. Get a routine
              built for you, with honest timelines instead of 4-day miracle
              claims.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-full bg-clay px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#ae604f]"
              >
                Join the early-access list
              </a>
              <a
                href="#makeovers"
                className="rounded-full border border-ink/20 px-7 py-3.5 font-bold transition-colors hover:bg-sand"
              >
                Explore makeovers
              </a>
            </div>
          </div>
          <ScanMockup />
        </section>

        {/* TWO PATHS */}
        <section className="bg-sand">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="inline-block rounded-full bg-sage-light px-3 py-1 text-xs font-bold text-sage">
                Skincare
              </span>
              <h2 className="mt-4 text-2xl font-bold">Know your skin, then treat it</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                An AI scan identifies what&apos;s going on, then recommends the
                most suitable products for healing and for the look you want.
              </p>
              <a href="#scan" className="mt-5 inline-block font-bold text-sage hover:underline">
                How the scan works →
              </a>
            </article>
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="inline-block rounded-full bg-clay-light px-3 py-1 text-xs font-bold text-clay">
                Makeovers
              </span>
              <h2 className="mt-4 text-2xl font-bold">Tutorials for every occasion</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Eight occasion modes, from bridal to college, with step-by-step
                looks and shades matched to your undertone.
              </p>
              <a href="#makeovers" className="mt-5 inline-block font-bold text-clay hover:underline">
                Browse the modes →
              </a>
            </article>
          </div>
        </section>

        {/* SCAN */}
        <section id="scan" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <Eyebrow>Skin scan</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight">
            A routine that fits your life, not just your face.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {SCAN_STEPS.map((s) => (
              <li key={s.n} className="rounded-3xl bg-white p-7 shadow-sm">
                <p className={`text-3xl font-extrabold ${s.color}`}>{s.n}</p>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 rounded-3xl bg-ink p-8 text-cream md:grid-cols-[1fr_1.3fr] md:p-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="animate-pulse-dot size-2.5 rounded-full bg-clay" aria-hidden="true" />
                <Eyebrow light>Voice assistant</Eyebrow>
              </div>
              <h3 className="mt-3 text-3xl font-bold">It asks what a good dermatologist would.</h3>
              <p className="mt-4 leading-relaxed text-cream/75">
                A scan shows what&apos;s on the surface. History, climate and
                diet explain why. The assistant talks you through it in a couple
                of minutes.
              </p>
            </div>
            <ul className="space-y-3">
              {VOICE_QUESTIONS.map((v) => (
                <li key={v.topic} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#a9c1ae]">{v.topic}</p>
                  <p className="mt-1.5 leading-relaxed">&ldquo;{v.q}&rdquo;</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TIMELINES */}
        <section id="timelines" className="scroll-mt-20 bg-sage-light">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Eyebrow>Honest timelines</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight">
              Real skin takes weeks, not days.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              Skin renews over roughly 28 days or more. Anyone promising visible
              results in 4–5 days is selling a feeling. We show you what to
              expect and when, so you stick with a routine long enough to judge
              it.
            </p>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {TIMELINE.map((t) => (
                <li key={t.when} className="rounded-2xl bg-white p-6">
                  <p className="text-sm font-extrabold uppercase tracking-widest text-sage">{t.when}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.what}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-ink-soft">
              General guide only. Your own timeline depends on your scan and
              routine.
            </p>
          </div>
        </section>

        {/* MAKEOVERS */}
        <section id="makeovers" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <Eyebrow>Makeover tutorials</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight">
            Pick the occasion. Get the look.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            8 modes, 200 shades. Upload a selfie and we match shades to your
            undertone and face, then walk you through the look step by step.
          </p>
          <div className="mt-10">
            <ModePicker />
          </div>
        </section>

        {/* PRODUCTS BRIDGE */}
        <section className="bg-sand">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                From a great look to great skin.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Makeovers are where many people start with us. Once you&apos;ve
                seen what your skin looks like under makeup, one scan shows what
                it needs underneath, and we recommend products to match.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm font-semibold">
                {["Try a makeover tutorial", "Scan your skin", "Get your routine and products"].map((t, i) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-ink text-xs text-cream">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section id="trust" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <Eyebrow>Trust &amp; safety</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight">
            Built to be trusted with your skin.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TRUST.map((t) => (
              <article key={t.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{t.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* JOIN */}
        <section id="join" className="scroll-mt-20 bg-ink">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
            <Eyebrow light>Early access</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-cream">
              Honest skincare, powered by AI.
            </h2>
            <p className="mx-auto mt-4 mb-10 max-w-xl text-lg text-cream/75">
              Be among the first to scan your skin and try a makeover. We&apos;ll
              email you when we open the doors.
            </p>
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-sand bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink-soft sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-extrabold tracking-[0.18em] text-sage">AURASKIN</span>{" "}
            · © AuraSkin Inc.
          </p>
          <p className="max-w-xl text-xs leading-relaxed">
            AuraSkin provides cosmetic guidance, not medical advice or
            diagnosis. See a qualified doctor for any skin condition.
          </p>
        </div>
      </footer>
    </>
  );
}
