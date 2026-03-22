"use client";

export function WaitlistForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-zinc-600 focus:outline-none focus:border-green/40 transition-colors"
      />
      <button
        type="submit"
        className="px-8 py-3.5 bg-green text-black font-semibold rounded-full hover:bg-green/90 transition-all hover:scale-105 shrink-0"
      >
        Join Waitlist
      </button>
    </form>
  );
}
