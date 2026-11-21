"use client";

import { useMemo, useState } from "react";
import { Search, Menu, Crown, ChevronRight, Sparkles, Gamepad2, ShieldCheck, CircleHelp } from "lucide-react";

type Game = { name: string; category: string; description: string; icon: string; tag?: string; tone: string };

const games: Game[] = [
  { name: "Nexo Aviator", category: "Crash & Multiplier", description: "A high-altitude multiplier challenge.", icon: "✈", tag: "POPULAR", tone: "plane" },
  { name: "Rocket Rush", category: "Crash & Multiplier", description: "Launch into a neon space run.", icon: "🚀", tone: "rocket" },
  { name: "SpaceX Crash", category: "Crash & Multiplier", description: "Explore a futuristic flight.", icon: "🪐", tone: "space" },
  { name: "Dragon Flight", category: "Crash & Multiplier", description: "A mythical flight through the clouds.", icon: "🐉", tone: "dragon" },
  { name: "Turbo Crash", category: "Crash & Multiplier", description: "Race through a high-speed circuit.", icon: "🏎", tone: "car" },
  { name: "Chicken Road", category: "Adventure", description: "Guide your chicken across a lively road.", icon: "🐔", tag: "FEATURED", tone: "chicken" },
  { name: "Frog Jump", category: "Adventure", description: "Hop from platform to platform.", icon: "🐸", tone: "frog" },
  { name: "Treasure Path", category: "Adventure", description: "Choose a path through the lost temple.", icon: "🗺", tone: "treasure" },
  { name: "Lava Escape", category: "Adventure", description: "Climb upward and avoid the lava.", icon: "🌋", tone: "lava" },
  { name: "Lucky Climber", category: "Adventure", description: "Reach the summit one step at a time.", icon: "⛰", tone: "climber" },
  { name: "Nexo Plinko", category: "Arcade & Table", description: "Drop a ball through a field of pins.", icon: "🔮", tag: "NEW", tone: "plinko" },
  { name: "Nexo Mines", category: "Arcade & Table", description: "Test your choices on a hidden grid.", icon: "💎", tone: "mines" },
  { name: "Lucky Wheel", category: "Arcade & Table", description: "Give the golden wheel a spin.", icon: "🎡", tone: "wheel" },
  { name: "Dice Master", category: "Arcade & Table", description: "A clean, classic dice challenge.", icon: "🎲", tone: "dice" },
  { name: "Nexo Tower", category: "Arcade & Table", description: "Build a tower with careful picks.", icon: "🏛", tone: "tower" },
  { name: "Golden Cards", category: "Arcade & Table", description: "A polished card-table experience.", icon: "🂡", tone: "cards" },
  { name: "Color Rush", category: "Arcade & Table", description: "A quick color-prediction challenge.", icon: "🎨", tone: "color" },
  { name: "Treasure Box", category: "Arcade & Table", description: "Discover what's inside each chest.", icon: "🧰", tone: "box" },
  { name: "Lucky Slots", category: "Arcade & Table", description: "A classic-inspired reel experience.", icon: "🎰", tone: "slots" },
  { name: "Nexo Goal", category: "Arcade & Table", description: "Take your shot at the target.", icon: "⚽", tone: "goal" },
];

const filters = ["All Games", "Crash & Multiplier", "Adventure", "Arcade & Table"];

export default function Home() {
  const [active, setActive] = useState("All Games");
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const filtered = useMemo(() => games.filter(g =>
    (active === "All Games" || g.category === active) &&
    (g.name.toLowerCase().includes(query.toLowerCase()) || g.description.toLowerCase().includes(query.toLowerCase()))
  ), [active, query]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXO<span className="gold">BET</span></span></a>
        <nav className={mobileOpen ? "nav nav-open" : "nav"}>
          <a className="nav-active" href="#games" onClick={() => setMobileOpen(false)}>Games</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#fair-play" onClick={() => setMobileOpen(false)}>Fair play</a>
        </nav>
        <div className="top-actions">
          <span className="demo-pill"><span className="pulse" /> DEMO MODE</span>
          <button className="login-btn" onClick={() => alert("Account sign-in will be added in a later development stage.")}>Sign in</button>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}><Menu size={22}/></button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="hero-content">
          <div className="eyebrow"><Crown size={14}/> THE NEXT GENERATION GAME LOBBY</div>
          <h1>PLAY BEYOND<br/><span>THE ORDINARY.</span></h1>
          <p>Discover a world of original games, bold experiences and premium design. Welcome to NEXOBET.</p>
          <a className="gold-btn" href="#games">EXPLORE GAMES <ChevronRight size={17}/></a>
          <div className="hero-stats">
            <div><strong>20</strong><span>ORIGINAL CONCEPTS</span></div>
            <i />
            <div><strong>03</strong><span>GAME WORLDS</span></div>
            <i />
            <div><strong>24/7</strong><span>DEMO LOBBY</span></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="coin coin-a">N</div><div className="coin coin-b">✦</div>
          <div className="hero-emblem"><span>✦</span><b>N</b><small>NEXOBET</small></div>
          <div className="art-caption">PLAY<br/><b>BEYOND</b></div>
        </div>
      </section>

      <section className="trust-strip">
        <div><Sparkles size={17}/><span>Original game concepts</span></div>
        <div><ShieldCheck size={17}/><span>Demo environment</span></div>
        <div><Gamepad2 size={17}/><span>Built for every screen</span></div>
      </section>

      <section className="games-section" id="games">
        <div className="section-heading">
          <div><div className="eyebrow">FIND YOUR NEXT FAVORITE</div><h2>THE GAME <span>LOBBY</span></h2></div>
          <label className="search-box"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search games..." /></label>
        </div>
        <div className="filters" role="tablist" aria-label="Game categories">
          {filters.map(f => <button key={f} className={active === f ? "filter active" : "filter"} onClick={() => setActive(f)}>{f}</button>)}
        </div>
        <div className="game-grid">
          {filtered.map((game, index) => <article className="game-card" key={game.name}>
            <div className={`game-art ${game.tone}`}>
              {game.tag && <span className="game-tag">{game.tag}</span>}
              <span className="game-number">{String(games.indexOf(game)+1).padStart(2,"0")}</span>
              <div className="game-icon">{game.icon}</div>
              <div className="art-shine" />
            </div>
            <div className="game-info">
              <div><span className="game-category">{game.category}</span><h3>{game.name}</h3><p>{game.description}</p></div>
              <button className="play-btn" aria-label={`Open ${game.name} demo`} onClick={() => alert(`${game.name} is in the development queue. The lobby currently uses demo-only previews.`)}>VIEW <ChevronRight size={15}/></button>
            </div>
          </article>)}
        </div>
        {filtered.length === 0 && <div className="empty">No games match your search.</div>}
      </section>

      <section className="about-band" id="about">
        <div className="about-icon">✦</div><div><div className="eyebrow">A NEW PLAYING FIELD</div><h2>BUILT TO BE <span>DIFFERENT.</span></h2><p>NEXOBET is an original game studio concept. Each title is designed with its own world, visual identity and gameplay direction.</p></div>
      </section>

      <footer id="fair-play">
        <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXO<span className="gold">BET</span></span></a>
        <p>© 2026 NEXOBET. All rights reserved.</p>
        <span className="footer-note"><CircleHelp size={14}/> Demo experience only · No real-money wagering</span>
      </footer>
    </main>
  );
}
