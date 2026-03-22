"use client";

import Image from "next/image";

const AVATAR = "https://pbs.twimg.com/profile_images/1406974882919813128/LOUb2m4R_400x400.jpg";

const clankers = [
  { name: "$bolojis", avatar: AVATAR, mcap: "$147.5K", up: true },
  { name: "$jeet", avatar: AVATAR, mcap: "$89.2K", up: false },
  { name: "$clanky", avatar: AVATAR, mcap: "$312K", up: true },
  { name: "$rugpull", avatar: AVATAR, mcap: "$4.20K", up: false },
  { name: "$wojak", avatar: AVATAR, mcap: "$69.42K", up: true },
  { name: "$gigabrain", avatar: AVATAR, mcap: "$420K", up: true },
  { name: "$wagmi", avatar: AVATAR, mcap: "$33.7K", up: true },
  { name: "$ngmi", avatar: AVATAR, mcap: "$1.28K", up: false },
];

function ClankerCard({ clanker }: { clanker: (typeof clankers)[number] }) {
  return (
    <div className="shrink-0 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 mx-2">
      <Image
        src={clanker.avatar}
        alt={clanker.name}
        width={40}
        height={40}
        unoptimized
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="font-bold text-white text-base">{clanker.name}</span>
      <span
        className={`text-sm font-mono font-semibold ${clanker.up ? "text-green" : "text-red-400"}`}
      >
        {clanker.up ? "▲" : "▼"} {clanker.mcap}
      </span>
    </div>
  );
}

export function ClankerCarousel() {
  const items = [...clankers, ...clankers];

  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex animate-ticker hover:[animation-play-state:paused]">
        {items.map((clanker, i) => (
          <ClankerCard key={i} clanker={clanker} />
        ))}
      </div>
    </div>
  );
}
