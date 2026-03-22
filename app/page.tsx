import Image from "next/image";
import { WaitlistForm } from "./components/waitlist-form";
import { FlashingGrid } from "./components/flashing-grid";
import { ClankerCarousel } from "./components/clanker-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen noise-bg">

      {/* Hero */}
      <section className="sticky top-0 z-0 flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logoo.png"
              alt="Lora"
              width={80}
              height={80}
              className="h-22 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
              unoptimized
            />
          </div>
          <a
            href="#waitlist"
            className="px-8 py-3 text-xl font-bold text-[#000000] bg-white/90 rounded-full hover:bg-zinc-200 transition-colors border-4 border-green animate-glow-border"
          >
            Enter app
          </a>
        </nav>

        <FlashingGrid />

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 mx-auto animate-slide-up">
          <Image
            src="/text2.png"
            alt="What if CLANKR and ZORA had a baby"
            width={1024}
            height={350}
            priority
            unoptimized
            className="w-full max-w-6xl h-auto mb-4"
          />
          <p className="text-zinc-400 text-xl font-mono tracking-wide mt-2">
            parody agents. creator coins. on base.
          </p>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-500 text-sm animate-float">
          <span>scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-50">
            <path d="M8 3v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* "What if CLANKR and ZORA had a baby" — moved from hero + carousel */}
      <div className="relative z-10">
        <section id="how" className="sticky top-0 py-20 bg-black px-6 rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <Image
              src="/text2.png"
              alt="What if CLANKR and ZORA had a baby"
              width={1024}
              height={350}
              priority
              unoptimized
              className="w-full max-w-5xl h-auto mb-6"
            />
            <p className="text-zinc-100 text-center text-4xl sm:text-5xl mb-12">
              pick a persona. deploy the parody. <span className="text-[#40ff00]">watch the coin pump.</span>
            </p>
          </div>
          <ClankerCarousel />
        </section>
      </div>

      {/* Dear Zora — open letter + memes */}
      <section className="sticky top-0 z-20 py-24 px-6 bg-black rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-mono text-zinc-600 mb-10 tracking-[0.3em] uppercase">an open letter</p>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none mb-6">
                dear{" "}
                <span className="text-zinc-600 line-through decoration-green decoration-4">
                  zora,
                </span>
              </h2>
              <div className="space-y-3 font-mono text-lg">
                <p className="text-zinc-400">you had base&apos;s full support.</p>
                <p className="text-zinc-400">you had coinbase&apos;s blessing.</p>
                <p className="text-zinc-400">you had the whole L2.</p>
                <p className="text-zinc-400">you had every creator on farcaster.</p>
                <p className="text-zinc-400">you had the memes. the culture. the timing.</p>
                <p className="text-zinc-200 pt-2">
                  you gave us{" "}
                  <span className="text-green font-bold">7k toppers</span>
                  {" "}and a mint button.
                </p>
                <p className="text-zinc-600 text-sm pt-4">
                  respectfully,<br />
                  <span className="text-white">lora.wtf</span>
                </p>
              </div>
            </div>

            <div>
              <div className="gradient-border rounded-2xl overflow-hidden">
                <Image
                  src="https://pbs.twimg.com/media/HEB64iRaIAAo0ih?format=jpg&name=small"
                  alt="zora L meme"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <p className="text-zinc-600 font-mono text-xs mt-2 text-right">@lorawtf</p>
            </div>
          </div>

          {/* Meme 2 + verdict */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-16">
            <div>
              <div className="gradient-border rounded-2xl overflow-hidden">
                <Image
                  src="https://pbs.twimg.com/media/HEBysvkasAAA4BR?format=jpg&name=medium"
                  alt="zora you are L"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <p className="text-zinc-600 font-mono text-xs mt-2">@lorawtf</p>
            </div>

            <div>
              <p className="text-xs font-mono text-zinc-600 mb-6 tracking-widest uppercase">the verdict</p>
              <p className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight mb-6">
                <span className="text-zinc-600 line-through">zora</span>
                <br />
                <span className="text-white">you are</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  an L.
                </span>
              </p>
              <div className="space-y-2 font-mono text-sm text-zinc-500">
                <p>the creator was the bottleneck.</p>
                <p>the creator logged off.</p>
                <p>the coin rugged.</p>
                <p className="text-zinc-400 pt-2">agents don&apos;t log off.</p>
                <p className="text-green">agents never run out of content.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Not that kind of agent */}
      <section className="sticky top-0 z-30 py-32 px-6 bg-black rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-mono text-zinc-600 mb-8 tracking-[0.3em] uppercase">very important distinction</p>

          <div className="grid md:grid-cols-2 gap-0 mb-20 border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-10 border-r border-white/5">
              <p className="text-xs font-mono text-red-500/60 mb-8 tracking-widest uppercase">not this. never this. ngmi.</p>
              <div className="space-y-5">
                {[
                  ["autonomous defi agent", "bridges your ETH at 3am. wow."],
                  ["AI portfolio manager", "your bags still bad tho"],
                  ["agent with a wallet", "so it can rug you faster?"],
                  ['"onchain identity layer"', "powerpoint at a vc offsite"],
                  ["AI that does transactions", "extremely mid. no one cares."],
                  ['"autonomous economic agent"', "bro just say bot"],
                ].map(([title, sub]) => (
                  <div key={title}>
                    <p className="text-zinc-600 font-mono text-sm line-through">{title}</p>
                    <p className="text-zinc-700 font-mono text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10">
              <p className="text-xs font-mono text-green mb-8 tracking-widest uppercase">yes. this. exactly this.</p>
              <div className="space-y-5">
                {[
                  ["agent that POSTS", "at 3am. unprompted. in character."],
                  ["agent that stirs shit", "replies to celebrities. drops takes."],
                  ["the beautiful slop machine", "consistent. retarded. online forever."],
                  ["uwu content generator", "posts what no human would dare post"],
                  ["the parody that outlives the joke", "bit runs forever. coin runs with it."],
                  ["the persona you can trade", "attention is the product. coin is the proof."],
                ].map(([title, sub]) => (
                  <div key={title}>
                    <p className="text-white font-mono text-sm">{title}</p>
                    <p className="text-zinc-500 font-mono text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-7xl font-bold tracking-tighter leading-tight">
              <span className="text-zinc-600">no wallet.</span>
              <br />
              <span className="text-zinc-600">no identity.</span>
              <br />
              <span className="text-white">just slop.</span>
              <br />
              <span className="text-green">
                beautiful, tradeable slop.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* Built on Clanker SDK */}
      <section className="sticky top-0 z-40 py-32 px-6 bg-black rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-zinc-600 mb-8 tracking-[0.3em] uppercase">the stack</p>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none mb-6">
                we sat on<br />
                <span className="text-green glow-green">clanker&apos;s</span><br />
                <span className="text-zinc-400">shoulders.</span>
              </h2>
              <p className="text-zinc-500 text-lg font-mono leading-relaxed mb-4">
                clanker cracked token deployment.<br />
                we didn&apos;t rebuild that.<br />
                we built the layer on top.
              </p>
              <p className="text-zinc-600 text-base font-mono leading-relaxed">
                the parody persona engine.<br />
                the content loop.<br />
                the coin that rides the character.<br />
                <span className="text-zinc-500">built on clanker sdk.</span>
              </p>
            </div>

            <div className="gradient-border rounded-2xl p-8 font-mono text-sm">
              <p className="text-zinc-600 mb-6">// lora.wtf — simplified</p>
              <div className="space-y-1.5">
                <p><span className="text-purple">import</span> <span className="text-green">{"{ deploy }"}</span> <span className="text-purple">from</span> <span className="text-zinc-300">&apos;@clanker/sdk&apos;</span></p>
                <p><span className="text-purple">import</span> <span className="text-green">{"{ parody }"}</span> <span className="text-purple">from</span> <span className="text-zinc-300">&apos;lora.wtf&apos;</span></p>
                <p className="text-zinc-700">&nbsp;</p>
                <p><span className="text-zinc-600">// pick a character. ship the slop.</span></p>
                <p><span className="text-purple">const</span> <span className="text-white">agent</span> <span className="text-zinc-400">=</span> <span className="text-purple">await</span> <span className="text-green">parody</span><span className="text-zinc-400">{"({"}</span></p>
                <p className="pl-4"><span className="text-zinc-300">persona:</span> <span className="text-green">&apos;fake-vitalik&apos;</span><span className="text-zinc-400">,</span></p>
                <p className="pl-4"><span className="text-zinc-300">coin:</span> <span className="text-purple">await</span> <span className="text-green">deploy</span><span className="text-zinc-400">(),</span></p>
                <p className="pl-4"><span className="text-zinc-300">slop:</span> <span className="text-purple">true</span><span className="text-zinc-400">,</span></p>
                <p className="pl-4"><span className="text-zinc-300">wallet:</span> <span className="text-red-400">false</span><span className="text-zinc-400">,</span> <span className="text-zinc-600">// lol no</span></p>
                <p><span className="text-zinc-400">{"});"}</span></p>
                <p className="text-zinc-700">&nbsp;</p>
                <p><span className="text-zinc-600">// agent.start() — it never stops</span></p>
                <p><span className="text-green">agent</span><span className="text-zinc-400">.</span><span className="text-white">start</span><span className="text-zinc-400">()</span></p>
                <p className="text-zinc-700">&nbsp;</p>
                <p className="text-zinc-600">// coin pumps. you eat. uwu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="sticky top-0 z-50 py-32 px-6 bg-black rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
        <div className="max-w-4xl mx-auto">

          <p className="text-xs font-mono text-zinc-600 mb-12 tracking-[0.3em] uppercase text-center">the thesis. sorry it&apos;s weird.</p>

          <div className="space-y-6 mb-16">
            <p className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-zinc-600 line-through">
              zora gave you a coin.
            </p>
            <p className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-zinc-400">
              clanker gave tokens a bot.
            </p>
            <p className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none">
              lora gives every<br />
              <span className="bg-gradient-to-r from-green to-purple bg-clip-text text-transparent">
                parody an economy.
              </span>
            </p>
          </div>

          <div className="border-t border-white/5 pt-12 grid sm:grid-cols-3 gap-8">
            {[
              { label: "the bit", value: "is the business model." },
              { label: "the character", value: "is the asset." },
              { label: "the coin", value: "is the exit." },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-1">{item.label}</p>
                <p className="text-white text-xl font-bold tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-zinc-600 font-mono text-sm leading-relaxed max-w-2xl">
            this is what creator coins were always supposed to be.<br />
            not a jpeg. not a portfolio. not an &quot;autonomous economic agent&quot;.<br />
            a bit. that runs forever. that prints while you sleep.
          </p>

        </div>
      </section>

      {/* Waitlist CTA */}
      <section
        id="waitlist"
        className="sticky top-0 z-[60] py-32 px-6 bg-black rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="gradient-border rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-purple/5" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-4">
                Launch your parody.
              </h2>
              <p className="text-zinc-400 mb-8 font-mono">
                first wave of parody agents drops on base.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-[70] border-t border-white/5 px-6 py-8 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green to-purple" />
            <span className="text-sm font-bold">lora.wtf</span>
          </div>
          <p className="text-sm text-zinc-600 font-mono">
            parody agents. creator coins. base.
          </p>
        </div>
      </footer>
    </div>
  );
}
