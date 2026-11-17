"use client";

import { useState } from "react";

type Mode = {
  name: string;
  tagline: string;
  finish: string;
  prep: string;
  hair: string;
  accent: string;
  shades: { name: string; hex: string }[];
};

const MODES: Mode[] = [
  {
    name: "Bridal",
    tagline: "Royal Shaadi Glow",
    finish: "12+ hr flash-proof HD & velvet matte",
    prep: "Hyaluronic barrier serum, silicone T-zone primer, waterproof setting mist",
    hair: "Floral gajra bun with pinned bridal dupatta",
    accent: "#8c1f3a",
    shades: [
      { name: "Royal Crimson Velvet", hex: "#a31d3c" },
      { name: "Velvet Burgundy Noir", hex: "#4a0f22" },
      { name: "Rani Magenta Regal", hex: "#c0187f" },
      { name: "Coral Haldi Radiance", hex: "#f08060" },
      { name: "24K Kundan Shimmer", hex: "#c9993a" },
    ],
  },
  {
    name: "Party",
    tagline: "Cocktail & Reception Glam",
    finish: "Warm-light satin & soft shimmer",
    prep: "Strobe cream, buildable satin foundation, liquid highlighter",
    hair: "Hollywood soft waves with anti-frizz gloss serum",
    accent: "#6b2a66",
    shades: [
      { name: "Espresso Smokey Luxe", hex: "#4a2c22" },
      { name: "Berry Sangria Glow", hex: "#8e2252" },
      { name: "Champagne Pearl Satin", hex: "#d8a4b0" },
      { name: "Copper Sunset Glam", hex: "#b4563a" },
      { name: "Midnight Plum Drama", hex: "#4e2447" },
    ],
  },
  {
    name: "Disco",
    tagline: "Retro Neon & Shimmer Night",
    finish: "High-shine foil, glitter & glass gloss",
    prep: "Glass-skin primer, glitter adhesive base, clear high-shine gloss",
    hair: "High snatched ponytail with wet-look flyaway control",
    accent: "#5b2bd0",
    shades: [
      { name: "Electric Chrome Silver", hex: "#c4c8d0" },
      { name: "Neon Tangerine Pop", hex: "#ff6a3d" },
      { name: "Ultraviolet Shimmer", hex: "#9b5de5" },
      { name: "Emerald Disco Wing", hex: "#16875a" },
      { name: "Holographic Rose Disco", hex: "#f062b4" },
    ],
  },
  {
    name: "Ethnic",
    tagline: "Puja, Haldi & Festive Grace",
    finish: "Breathable dewy & kajal-matched matte",
    prep: "Rosewater mist, breathable serum base, stone bindi",
    hair: "Braided bun with fresh flowers, saree/dupatta pleating",
    accent: "#b4492c",
    shades: [
      { name: "Sindoor Vermilion Classic", hex: "#d12a2a" },
      { name: "Terracotta Clay Warmth", hex: "#a9583f" },
      { name: "Marigold & Amber Glow", hex: "#e08f3c" },
      { name: "Plum Lotus Grace", hex: "#7a1f55" },
      { name: "Sandalwood Nude Serenity", hex: "#c9a08c" },
    ],
  },
  {
    name: "Office",
    tagline: "Executive & Boardroom Polish",
    finish: "AC-resistant, transfer-proof matte",
    prep: "Moisture-lock primer, soft-focus matte skin, under-eye brightener",
    hair: "Crisp blow-dry or neat low chignon",
    accent: "#3a4656",
    shades: [
      { name: "Executive Mauve Matte", hex: "#a56f84" },
      { name: "Spiced Cedar Power", hex: "#7a4a37" },
      { name: "Soft Rosewood Polish", hex: "#bc6a78" },
      { name: "Warm Espresso Minimal", hex: "#6a4a3a" },
      { name: "Almond Beige Corporate", hex: "#c09478" },
    ],
  },
  {
    name: "College",
    tagline: "Fresh Campus Everyday",
    finish: "Weightless cream & water-gel tints",
    prep: "Dewy SPF-50 skin tint, spot concealer, multi-use lip & cheek stain",
    hair: "Claw-clip waves or a messy campus bun",
    accent: "#1e5a56",
    shades: [
      { name: "Peach Sorbet Tint", hex: "#f4a58a" },
      { name: "Strawberry Milk Flush", hex: "#e88aa0" },
      { name: "Toasted Almond Nude", hex: "#a87a62" },
      { name: "Apricot Sun-Kissed", hex: "#f0956a" },
      { name: "Cherry Pop Jelly", hex: "#cc3a56" },
    ],
  },
  {
    name: "General",
    tagline: "Everyday Effortless Polish",
    finish: "Balanced natural satin & soft matte",
    prep: "Hydrating primer, natural satin base, soft brow grooming",
    hair: "Smooth blow-dry with face-framing layers",
    accent: "#7a5636",
    shades: [
      { name: "Mocha Rose Everyday", hex: "#a8707e" },
      { name: "Cinnamon Spice Satin", hex: "#8a4a3a" },
      { name: "Blush Nude Minimalist", hex: "#cfa09c" },
      { name: "Caramel Latte Soft", hex: "#b8805e" },
      { name: "Vanilla Chai Nude", hex: "#c9a088" },
    ],
  },
  {
    name: "Shopping",
    tagline: "Heat-Proof Day Out",
    finish: "Sweat-proof stain & oil-control matte",
    prep: "Cooling oil-control gel, SPF matte setting powder, waterproof brow lock",
    hair: "Neck-cooling heatless braid or high top-knot",
    accent: "#1f5a3a",
    shades: [
      { name: "Watermelon Freeze Stain", hex: "#d94a68" },
      { name: "Spiced Chai Long-Wear", hex: "#85604f" },
      { name: "Coral Breeze Matte", hex: "#e8765e" },
      { name: "Cranberry Crush Tint", hex: "#a8304a" },
      { name: "Desert Rose Lock", hex: "#b56a6e" },
    ],
  },
];

export default function ModePicker() {
  const [active, setActive] = useState(0);
  const mode = MODES[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Makeover modes"
        className="flex flex-wrap gap-2"
      >
        {MODES.map((m, i) => (
          <button
            key={m.name}
            role="tab"
            id={`mode-tab-${i}`}
            aria-selected={i === active}
            aria-controls="mode-panel"
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
              i === active
                ? "bg-ink text-cream"
                : "bg-white text-ink-soft hover:bg-sage-light"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <div
        id="mode-panel"
        role="tabpanel"
        aria-labelledby={`mode-tab-${active}`}
        className="mt-6 grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-[1fr_1.2fr] md:p-8"
      >
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: mode.accent }}
          >
            {mode.name} mode
          </p>
          <h3 className="mt-2 text-2xl font-bold">{mode.tagline}</h3>
          <p className="mt-1 text-ink-soft">{mode.finish}</p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">Skin prep</dt>
              <dd className="text-ink-soft">{mode.prep}</dd>
            </div>
            <div>
              <dt className="font-semibold">Hair &amp; draping</dt>
              <dd className="text-ink-soft">{mode.hair}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-sm font-semibold">Signature shades</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {mode.shades.map((s) => (
              <li
                key={s.name}
                className="flex items-center gap-3 rounded-xl border border-sand px-3 py-2.5 text-sm"
              >
                <span
                  aria-hidden="true"
                  className="size-6 shrink-0 rounded-full ring-1 ring-black/10"
                  style={{ background: s.hex }}
                />
                {s.name}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-soft">
            Each mode has 25 shades across 5 colour families. Your scan picks
            the top matches for your undertone.
          </p>
        </div>
      </div>
    </div>
  );
}
